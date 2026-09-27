import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VOCAB_ITEMS } from './data/vocab';
import { VocabItem, BagState } from './types';
import { BagSvg } from './components/BagSvg';
import { ItemIllustration } from './components/ItemIllustrations';
import { QuestionModal } from './components/QuestionModal';
import {
  playRustleSound,
  playScatterSound,
  playClickSound,
} from './utils/audio';
import { RotateCcw } from 'lucide-react';

export default function App() {
  const [bagState, setBagState] = useState<BagState>('CLOSED');
  const [selectedItem, setSelectedItem] = useState<VocabItem | null>(null);
  const [solvedItems, setSolvedItems] = useState<Set<string>>(new Set());
  const [scaleFactor, setScaleFactor] = useState(1);

  // Responsive scale factor for item scatter distance
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setScaleFactor(0.48);
      } else if (width < 768) {
        setScaleFactor(0.68);
      } else if (width < 1024) {
        setScaleFactor(0.85);
      } else {
        setScaleFactor(1);
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Handle clicking the closed bag
  const handleBagClick = () => {
    if (bagState !== 'CLOSED') return;

    // Step 1: Bag shakes slightly
    setBagState('SHAKING');
    playRustleSound();

    // Step 2 & 3: Bag opens and items scatter outward
    setTimeout(() => {
      setBagState('OPENING');
      playScatterSound();

      // Step 4 & 5: Settle and become clickable
      setTimeout(() => {
        setBagState('SCATTERED');
      }, 700);
    }, 550);
  };

  // Handle clicking an illustrated object
  const handleItemClick = (item: VocabItem) => {
    if (bagState !== 'SCATTERED') return;
    playClickSound();
    setSelectedItem(item);
  };

  // Mark item as solved
  const handleSolved = (id: string) => {
    setSolvedItems((prev) => new Set(prev).add(id));
  };

  // Close bag to replay
  const handleResetBag = () => {
    playClickSound();
    setSelectedItem(null);
    setBagState('CLOSED');
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2A26] flex flex-col justify-between selection:bg-[#E8B4B8] selection:text-[#5E2430]">
      {/* Top Header */}
      <header className="pt-6 pb-2 px-4 sm:px-8 text-center relative z-20">
        <div className="inline-block">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#2D2A26] font-['Plus_Jakarta_Sans',sans-serif]">
            WHAT’S IN MY BAG?
          </h1>
          <p className="text-lg sm:text-xl font-bold text-[#8B4354] mt-1 font-['Noto_Sans_KR',sans-serif]">
            가방 안에 뭐가 있어요?
          </p>
        </div>

        {/* Action toolbar when bag is open */}
        {bagState === 'SCATTERED' && (
          <div className="mt-3 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleResetBag}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-[#F5ECEB] text-xs font-semibold text-[#8B4354] border border-[#E8CCD0] shadow-2xs transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Pack back into bag (다시 담기)</span>
            </button>
          </div>
        )}
      </header>

      {/* Main Interactive Stage */}
      <main className="flex-1 flex items-center justify-center px-4 relative overflow-hidden py-4 sm:py-8">
        <div className="relative w-full max-w-4xl h-[520px] sm:h-[620px] md:h-[680px] flex items-center justify-center">
          {/* Centered Plaid Ballet-Style Shoulder Bag */}
          <div className="relative z-10">
            <BagSvg state={bagState} onClick={handleBagClick} />
          </div>

          {/* Exactly 10 Illustrated Scattered Objects */}
          <AnimatePresence>
            {(bagState === 'OPENING' || bagState === 'SCATTERED') && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                {VOCAB_ITEMS.map((item, index) => {
                  const targetX = item.scatterOffset.x * scaleFactor;
                  const targetY = item.scatterOffset.y * scaleFactor;
                  const targetRotate = item.scatterOffset.rotate;
                  const isSolved = solvedItems.has(item.id);

                  return (
                    <motion.div
                      key={item.id}
                      className="absolute focus:outline-none select-none group cursor-pointer pointer-events-auto"
                      tabIndex={bagState === 'SCATTERED' ? 0 : -1}
                      role="button"
                      aria-label={`Vocabulary item: ${item.english}`}
                      onClick={() => handleItemClick(item)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleItemClick(item);
                        }
                      }}
                      initial={{
                        x: 0,
                        y: -30 * scaleFactor,
                        scale: 0.1,
                        opacity: 0,
                        rotate: 0,
                      }}
                      animate={{
                        x: targetX,
                        y: targetY,
                        scale: 1,
                        opacity: 1,
                        rotate: targetRotate,
                      }}
                      exit={{
                        x: 0,
                        y: -30 * scaleFactor,
                        scale: 0,
                        opacity: 0,
                        transition: { duration: 0.3 },
                      }}
                      transition={{
                        type: 'spring',
                        damping: 14,
                        stiffness: 90,
                        delay: index * 0.04,
                      }}
                      whileHover={
                        bagState === 'SCATTERED'
                          ? {
                              scale: 1.18,
                              rotate: targetRotate + (index % 2 === 0 ? 5 : -5),
                              filter:
                                'drop-shadow(0 12px 20px rgba(139, 67, 84, 0.32))',
                              zIndex: 40,
                              transition: { duration: 0.15 },
                            }
                          : {}
                      }
                      whileTap={bagState === 'SCATTERED' ? { scale: 0.95 } : {}}
                    >
                      {/* The illustration itself is the hitbox (no cards, no buttons) */}
                      <div className="relative">
                        <ItemIllustration
                          id={item.id}
                          size={scaleFactor < 0.7 ? 75 : 95}
                        />

                        {/* Subtle mastered mark for solved items */}
                        {isSolved && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
                            ✓
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Question / Recall Screen Modal */}
      <AnimatePresence>
        {selectedItem && (
          <QuestionModal
            item={selectedItem}
            onBackToBag={() => setSelectedItem(null)}
            onSolved={handleSolved}
            alreadySolved={solvedItems.has(selectedItem.id)}
          />
        )}
      </AnimatePresence>

      {/* Subdued Footer */}
      <footer className="py-3 px-4 text-center text-xs text-[#9E9089] z-10">
        <p>
          Korean Vocabulary Recall · 10 Everyday Essentials (일상 소지품 10가지)
        </p>
      </footer>
    </div>
  );
}
