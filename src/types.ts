export interface VocabItem {
  id: string;
  korean: string;
  english: string;
  acceptedAnswers: string[];
  audioFile: string;
  scatterOffset: {
    x: number; // offset in px or % from center
    y: number;
    rotate: number; // rotation in deg
    scale?: number;
  };
}

export type BagState = 'CLOSED' | 'SHAKING' | 'OPENING' | 'SCATTERED';
