// Synthesized Web Audio API sound effects and SpeechSynthesis for Korean

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playRustleSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    // Soft noise burst for bag rustle / shake
    const bufferSize = ctx.sampleRate * 0.18;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.05));
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, now);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start(now);
  } catch {
    // ignore audio errors
  }
}

export function playScatterSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    // Pleasant multi-tone scatter chime
    const freqs = [523.25, 659.25, 783.99, 1046.5, 1318.5];
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);

      gain.gain.setValueAtTime(0.001, now + idx * 0.05);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.05 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.05 + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.35);
    });
  } catch {
    // ignore
  }
}

export function playClickSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.06);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.06);
  } catch {
    // ignore
  }
}

export function playSuccessSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    // Pentatonic ascending chime (C5, E5, G5, C6)
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.09);

      gain.gain.setValueAtTime(0.001, now + i * 0.09);
      gain.gain.linearRampToValueAtTime(0.2, now + i * 0.09 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.09 + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.09);
      osc.stop(now + i * 0.09 + 0.45);
    });
  } catch {
    // ignore
  }
}

export function playErrorSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  try {
    const now = ctx.currentTime;
    // Soft gentle low double-boop
    [260, 220].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + i * 0.12);

      gain.gain.setValueAtTime(0.12, now + i * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.12 + 0.15);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + i * 0.12);
      osc.stop(now + i * 0.12 + 0.15);
    });
  } catch {
    // ignore
  }
}

import { VocabItem } from '../types';
import { VOCAB_ITEMS } from '../data/vocab';

// Active playing audio element
let currentKoreanAudio: HTMLAudioElement | null = null;

// Map each vocabulary item ID to its exact uploaded MP3 file paths in audio/static directory
export const AUDIO_MAPPINGS: Record<string, string[]> = {
  book: [
    '/audio/Book.mp3',
    '/audio/book.mp3',
    '/Book.mp3',
    '/book.mp3',
  ],
  notebook: [
    '/audio/Notebook.mp3',
    '/audio/notebook.mp3',
    '/Notebook.mp3',
    '/notebook.mp3',
  ],
  pencil: [
    '/audio/Pencil.mp3',
    '/audio/pencil.mp3',
    '/Pencil.mp3',
    '/pencil.mp3',
  ],
  eraser: [
    '/audio/Eraser.mp3',
    '/audio/eraser.mp3',
    '/Eraser.mp3',
    '/eraser.mp3',
  ],
  umbrella: [
    '/audio/Umbrella.mp3',
    '/audio/umbrella.mp3',
    '/Umbrella.mp3',
    '/umbrella.mp3',
  ],
  glasses: [
    '/audio/Glasses.mp3',
    '/audio/glasses.mp3',
    '/Glasses.mp3',
    '/glasses.mp3',
  ],
  cellphone: [
    '/audio/Cellphone.mp3',
    '/audio/cellphone.mp3',
    '/Cellphone.mp3',
    '/cellphone.mp3',
  ],
  watch: [
    '/audio/Watch.mp3',
    '/audio/watch.mp3',
    '/Watch.mp3',
    '/watch.mp3',
  ],
  camera: [
    '/audio/Camera.mp3',
    '/audio/camera.mp3',
    '/Camera.mp3',
    '/camera.mp3',
  ],
  hat: [
    '/audio/Hat.mp3',
    '/audio/hat.mp3',
    '/Hat.mp3',
    '/hat.mp3',
  ],
};

/**
 * Plays the uploaded MP3 audio recording for the given vocabulary item.
 * Strictly avoids synthetic speech generation or text-to-speech.
 */
export function playKoreanAudio(
  target: VocabItem | string,
  onEnd?: () => void,
  onError?: () => void
): HTMLAudioElement | null {
  if (typeof window === 'undefined') return null;

  // Stop any currently playing recording
  if (currentKoreanAudio) {
    try {
      currentKoreanAudio.pause();
      currentKoreanAudio.currentTime = 0;
    } catch {
      // ignore
    }
    currentKoreanAudio = null;
  }

  // Resolve VocabItem
  let item: VocabItem | undefined;
  if (typeof target === 'object' && target !== null && 'id' in target) {
    item = target;
  } else {
    item = VOCAB_ITEMS.find(
      (v) =>
        v.id === target ||
        v.korean === target ||
        v.english.toLowerCase() === target.toLowerCase()
    );
  }

  if (!item) {
    if (onError) onError();
    return null;
  }

  const candidateUrls: string[] = AUDIO_MAPPINGS[item.id] || [
    `/audio/${item.audioFile}`,
    `/${item.audioFile}`,
  ];

  let urlIndex = 0;
  const audio = new Audio(candidateUrls[urlIndex]);
  currentKoreanAudio = audio;

  const tryNextUrl = () => {
    urlIndex++;
    if (urlIndex < candidateUrls.length && currentKoreanAudio === audio) {
      audio.src = candidateUrls[urlIndex];
      audio.play().catch(() => {
        tryNextUrl();
      });
    } else {
      if (currentKoreanAudio === audio) {
        currentKoreanAudio = null;
      }
      if (onError) onError();
    }
  };

  audio.onerror = () => {
    tryNextUrl();
  };

  audio.onended = () => {
    if (currentKoreanAudio === audio) {
      currentKoreanAudio = null;
    }
    if (onEnd) onEnd();
  };

  audio.play().catch(() => {
    tryNextUrl();
  });

  return audio;
}

/**
 * Backwards-compatible alias directing calls to the recorded MP3.
 */
export function speakKorean(target: VocabItem | string, onEnd?: () => void) {
  return playKoreanAudio(target, onEnd);
}
