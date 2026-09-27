import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VocabItem } from '../types';
import { ItemIllustration } from './ItemIllustrations';
import { playSuccessSound, playErrorSound, playClickSound, playKoreanAudio } from '../utils/audio';
import { Volume2, X, ArrowLeft } from 'lucide-react';

interface QuestionModalProps {
  item: VocabItem;
  onBackToBag: () => void;
  onSolved: (id: string) => void;
  alreadySolved: boolean;
}

export const QuestionModal: React.FC<QuestionModalProps> = ({
  item,
  onBackToBag,
  onSolved,
  alreadySolved,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [status, setStatus] = useState<'IDLE' | 'CORRECT' | 'WRONG'>('IDLE');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input on mount & support Escape key
  useEffect(() => {
    inputRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onBackToBag();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBackToBag]);

  const handlePlayAudio = () => {
    setIsPlayingAudio(true);
    playKoreanAudio(
      item,
      () => {
        setIsPlayingAudio(false);
      },
      () => {
        setIsPlayingAudio(false);
      }
    );
  };

  const normalize = (text: string) =>
    text
      .trim()
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()?"']/g, '')
      .replace(/\s+/g, ' ');

  const checkAnswer = (userInput: string): boolean => {
    const cleanInput = normalize(userInput);
    if (!cleanInput) return false;

    // Check direct accepted answers
    for (const target of item.acceptedAnswers) {
      const cleanTarget = normalize(target);
      if (cleanInput === cleanTarget) return true;
      if (cleanInput.replace(/\s+/g, '') === cleanTarget.replace(/\s+/g, '')) {
        return true;
      }
    }

    // Check with articles stripped (e.g. "a pencil" -> "pencil")
    const stripped = cleanInput.replace(/^(a|an|the)\s+/, '');
    if (stripped && stripped !== cleanInput) {
      for (const target of item.acceptedAnswers) {
        const cleanTarget = normalize(target);
        if (stripped === cleanTarget) return true;
        if (stripped.replace(/\s+/g, '') === cleanTarget.replace(/\s+/g, '')) {
          return true;
        }
      }
    }

    return false;
  };

  const handleCheck = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (status === 'CORRECT') return;

    const trimmed = inputVal.trim();
    if (!trimmed) {
      inputRef.current?.focus();
      return;
    }

    const isMatch = checkAnswer(trimmed);

    if (isMatch) {
      setStatus('CORRECT');
      playSuccessSound();
      handlePlayAudio();
      onSolved(item.id);
    } else {
      setStatus('WRONG');
      playErrorSound();
      // Keep input field active and focused so player can try again
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 50);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C2422]/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        initial={{ scale: 0.92, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 16 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="w-full max-w-lg bg-[#FCFAF7] rounded-3xl border border-[#EADBDA] shadow-2xl p-6 sm:p-8 text-center relative overflow-hidden"
      >
        {/* Top bar with status and Close button */}
        <div className="flex items-center justify-between mb-2">
          {alreadySolved ? (
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Mastered
            </span>
          ) : (
            <div />
          )}
          <button
            type="button"
            onClick={() => {
              playClickSound();
              onBackToBag();
            }}
            className="p-1.5 rounded-full text-[#736B63] hover:text-[#2D2A26] hover:bg-[#F2ECE4] active:scale-95 transition-all cursor-pointer"
            title="Back to Bag (Esc)"
            aria-label="Back to Bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Object Illustration */}
        <div className="py-2 flex items-center justify-center">
          <div className="relative p-4 rounded-2xl bg-[#F7F2EC]/60 border border-[#ECE2D8]">
            <ItemIllustration id={item.id} size={130} />
          </div>
        </div>

        {/* Prominently Displayed Korean Word */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#8B4354] font-['Noto_Sans_KR',sans-serif] tracking-wide">
            {item.korean}
          </h1>
          <button
            type="button"
            onClick={handlePlayAudio}
            className={`p-1.5 rounded-full text-[#8B4354] hover:bg-[#FBF1F2] active:scale-95 transition-all ${
              isPlayingAudio ? 'ring-2 ring-[#8B4354]/40 bg-[#FBF1F2] scale-105' : ''
            }`}
            title="Listen to Korean pronunciation recording"
            aria-label="Listen to Korean pronunciation recording"
          >
            <Volume2 className={`w-5 h-5 ${isPlayingAudio ? 'animate-pulse text-[#8B4354]' : ''}`} />
          </button>
        </div>

        {/* Question: What does this mean in English? */}
        <h2 className="mt-2 text-lg sm:text-xl font-bold text-[#2D2A26] tracking-tight">
          What does this mean in English?
        </h2>

        {/* State: CORRECT */}
        {status === 'CORRECT' ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 space-y-4"
          >
            {/* Success badge */}
            <div className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xl sm:text-2xl">
              <span className="text-2xl">✓</span>
              <span>Correct!</span>
            </div>

            {/* Answer Display: e.g. 연필 = Pencil */}
            <div className="p-4 rounded-2xl bg-white border border-[#EAD5D8] shadow-xs max-w-xs mx-auto">
              <div className="text-2xl font-extrabold text-[#2D2A26]">
                <span className="text-[#8B4354] font-['Noto_Sans_KR',sans-serif]">{item.korean}</span>
                <span className="text-[#A89C94] mx-2">=</span>
                <span>{item.english}</span>
              </div>
            </div>

            {/* Back to Bag button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  playClickSound();
                  onBackToBag();
                }}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#8B4354] hover:bg-[#723241] text-white font-bold text-base shadow-md active:scale-98 transition-all"
              >
                BACK TO BAG
              </button>
            </div>
          </motion.div>
        ) : (
          /* State: IDLE or WRONG */
          <div className="mt-5 space-y-3">
            <form onSubmit={handleCheck} className="space-y-3">
              <div className="flex items-center gap-2 max-w-sm mx-auto">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => {
                    setInputVal(e.target.value);
                    if (status === 'WRONG') setStatus('IDLE');
                  }}
                  placeholder="e.g. pencil"
                  className={`flex-1 px-4 py-3 text-lg font-medium rounded-xl border bg-white text-[#2D2A26] placeholder-[#A89C94] outline-none transition-all ${
                    status === 'WRONG'
                      ? 'border-rose-400 ring-2 ring-rose-200'
                      : 'border-[#DACDC4] focus:border-[#8B4354] focus:ring-2 focus:ring-[#8B4354]/20'
                  }`}
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#8B4354] hover:bg-[#723241] text-white font-bold text-base shadow-sm active:scale-98 transition-all shrink-0 cursor-pointer"
                >
                  CHECK
                </button>
              </div>
            </form>

            {/* Error Message without revealing the English answer */}
            <AnimatePresence>
              {status === 'WRONG' && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="inline-flex items-center gap-1.5 text-rose-600 font-bold text-base bg-rose-50 px-4 py-1.5 rounded-full border border-rose-200"
                >
                  <span>✕</span>
                  <span>Try again!</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Back to Bag option */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  playClickSound();
                  onBackToBag();
                }}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-[#8B4354] hover:bg-[#F7EBEB] active:scale-98 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Bag (가방으로 돌아가기)</span>
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};
