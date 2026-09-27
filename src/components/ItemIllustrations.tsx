import React from 'react';

interface IllustrationProps {
  className?: string;
  size?: number; // base scale
}

// 1. 책 (Book - Plain closed blue school textbook)
export const BookIllustration: React.FC<IllustrationProps> = ({ className = '', size = 100 }) => {
  const width = size;
  const height = size * 0.96;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-md transition-transform duration-200 select-none ${className}`}
    >
      {/* Ground drop shadow on desk */}
      <ellipse cx="50" cy="87" rx="42" ry="6" fill="#3D1D23" fillOpacity="0.16" />

      {/* Back hardcover board lip */}
      <path
        d="M 18 20 L 18 80 C 18 81.5, 19.5 83, 22 83 L 83 75 C 85.5 74.5, 87 73, 87 71 L 87 14"
        fill="#0F172A"
        stroke="#0F172A"
        strokeWidth="1.5"
      />

      {/* Thick white page block (Right edge and bottom edge) */}
      <path
        d="M 23 19 L 81 12 L 84 68 C 84 69.5, 82.5 71, 80 71.5 L 24 78.5 Z"
        fill="#FFFFFF"
        stroke="#94A3B8"
        strokeWidth="1.2"
      />
      {/* Page lines along the right side */}
      <line x1="81" y1="16" x2="83.5" y2="68" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 1.5" />
      <line x1="77" y1="17" x2="79.5" y2="69" stroke="#E2E8F0" strokeWidth="0.8" />
      {/* Page lines along the bottom edge */}
      <line x1="25" y1="76.5" x2="80" y2="70" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 1.5" />
      <line x1="25" y1="74.5" x2="81" y2="68" stroke="#E2E8F0" strokeWidth="0.8" />
      <line x1="25" y1="72.5" x2="82" y2="66" stroke="#E2E8F0" strokeWidth="0.8" />

      {/* Front Hardcover (Dark Blue School Textbook) */}
      <path
        d="M 18 17 C 18 15.5, 19.5 14.5, 22 14 L 81 6 C 83.5 5.5, 85.5 7, 85.5 9.5 L 82 65 C 82 67, 80 68.5, 77.5 69 L 20 76.5 C 18 76.5, 16.5 75, 16.5 73 Z"
        fill="#1E40AF"
        stroke="#1E3A8A"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Book Spine (Solid rounded left binding) */}
      <path
        d="M 16.5 17 C 16.5 15, 18 14, 20.5 13.5 L 23.5 13 L 22 75.5 L 18 76 C 16.5 76, 16.5 74.5, 16.5 73 Z"
        fill="#1E3A8A"
        stroke="#0F172A"
        strokeWidth="1.2"
      />

      {/* Simple academic textbook horizontal stripes */}
      <line
        x1="36"
        y1="34"
        x2="72"
        y2="29.5"
        stroke="#F59E0B"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <line
        x1="37"
        y1="39"
        x2="66"
        y2="35.5"
        stroke="#93C5FD"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Simple textbook subject graphic (clean geometric crest) */}
      <rect
        x="42"
        y="46"
        width="22"
        height="14"
        rx="2"
        fill="#1D4ED8"
        stroke="#60A5FA"
        strokeWidth="1"
        transform="rotate(-7.5, 42, 46)"
      />
      <circle cx="51" cy="52" r="3.2" fill="#F59E0B" />
    </svg>
  );
};

// 2. 공책 (Notebook - Ordinary spiral-bound student notebook)
export const NotebookIllustration: React.FC<IllustrationProps> = ({ className = '', size = 95 }) => {
  const width = size;
  const height = size * 1.15;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 95 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-md transition-transform duration-200 select-none ${className}`}
    >
      {/* Soft ground shadow */}
      <ellipse cx="50" cy="103" rx="38" ry="5" fill="#3D1D23" fillOpacity="0.14" />

      {/* Thin notebook page sheets visible underneath right and bottom */}
      <rect x="22" y="10" width="65" height="91" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
      <line x1="87" y1="14" x2="87" y2="98" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="1 1.5" />
      <line x1="26" y1="101" x2="84" y2="101" stroke="#94A3B8" strokeWidth="0.8" strokeDasharray="1.5 1.5" />

      {/* Front Cover: Soft pastel mint student notebook */}
      <rect
        x="20"
        y="8"
        width="66"
        height="91"
        rx="5"
        fill="#A7D7C5"
        stroke="#5C9A84"
        strokeWidth="1.6"
      />

      {/* Left binding margin line on cover */}
      <line x1="32" y1="8" x2="32" y2="99" stroke="#7CBBA6" strokeWidth="1" />

      {/* Small blank label on cover for student name / subject */}
      <rect
        x="38"
        y="26"
        width="40"
        height="24"
        rx="3"
        fill="#FFFEFA"
        stroke="#7CBBA6"
        strokeWidth="1.2"
      />
      {/* Faint writing lines inside label */}
      <line x1="43" y1="34" x2="73" y2="34" stroke="#B8D8CD" strokeWidth="1" strokeLinecap="round" />
      <line x1="43" y1="41" x2="73" y2="41" stroke="#B8D8CD" strokeWidth="1" strokeLinecap="round" />

      {/* Subtle horizontal ruled lines on lower front cover */}
      <line x1="38" y1="62" x2="78" y2="62" stroke="#89C4B0" strokeWidth="0.9" strokeDasharray="2 2" />
      <line x1="38" y1="70" x2="78" y2="70" stroke="#89C4B0" strokeWidth="0.9" strokeDasharray="2 2" />
      <line x1="38" y1="78" x2="78" y2="78" stroke="#89C4B0" strokeWidth="0.9" strokeDasharray="2 2" />

      {/* Visible metal wire spiral binding along ONE side (left) */}
      {[14, 22, 30, 38, 46, 54, 62, 70, 78, 86, 94].map((y, idx) => (
        <g key={idx}>
          {/* Punched hole */}
          <circle cx="23" cy={y} r="2" fill="#2E4A40" />
          {/* Silver wire coil ring */}
          <path
            d={`M 14 ${y - 3} C 9 ${y - 3}, 9 ${y + 3}, 23 ${y + 2}`}
            stroke="#475569"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d={`M 14 ${y - 3} C 9 ${y - 3}, 9 ${y + 3}, 23 ${y + 2}`}
            stroke="#E2E8F0"
            strokeWidth="1.1"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      ))}
    </svg>
  );
};

// 3. 연필 (Pencil)
export const PencilIllustration: React.FC<IllustrationProps> = ({ className = '', size = 110 }) => {
  const width = size;
  const height = size * 0.35;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 110 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-md transition-transform duration-200 select-none ${className}`}
    >
      {/* Shadow */}
      <ellipse cx="55" cy="33" rx="48" ry="4" fill="#3D1D23" fillOpacity="0.14" />
      {/* Sharpened wood cone */}
      <path d="M 28 8 L 8 18 L 28 28 Z" fill="#E8C99B" stroke="#B89461" strokeWidth="1" />
      {/* Graphite Lead Tip */}
      <path d="M 14 15 L 8 18 L 14 21 Z" fill="#333333" />
      {/* Pencil Body (Hexagonal slats) */}
      <rect x="28" y="8" width="56" height="6.6" fill="#F49A44" />
      <rect x="28" y="14.6" width="56" height="6.6" fill="#FAA755" />
      <rect x="28" y="21.2" width="56" height="6.8" fill="#DF842C" />
      <rect x="28" y="8" width="56" height="20" stroke="#AF641B" strokeWidth="1" fill="none" />
      {/* Subtle stamped text */}
      <line x1="42" y1="18" x2="68" y2="18" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.75" />
      {/* Metal Ferrule */}
      <rect x="84" y="8" width="10" height="20" fill="#D3D8DE" stroke="#8E99A4" strokeWidth="1" />
      <line x1="87" y1="8" x2="87" y2="28" stroke="#FFFFFF" strokeWidth="1" />
      <line x1="91" y1="8" x2="91" y2="28" stroke="#8E99A4" strokeWidth="1" />
      {/* Pink Eraser */}
      <path
        d="M 94 8 L 99 8 C 103 8, 106 11, 106 15 L 106 21 C 106 25, 103 28, 99 28 L 94 28 Z"
        fill="#F5A4AF"
        stroke="#C96E7C"
        strokeWidth="1"
      />
    </svg>
  );
};

// 4. 지우개 (Eraser - Simple solid red-and-blue rectangular rubber block)
export const EraserIllustration: React.FC<IllustrationProps> = ({ className = '', size = 85 }) => {
  const width = size;
  const height = size * 0.65;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 92 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-md transition-transform duration-200 select-none ${className}`}
    >
      {/* Ground drop shadow on desk */}
      <ellipse cx="49" cy="51" rx="38" ry="5.5" fill="#3D1D23" fillOpacity="0.15" />

      {/* --- TOP 3D SURFACE --- */}
      {/* Red half of top face */}
      <path
        d="M 14 24 L 20 16 L 49 16 L 43 24 Z"
        fill="#FF6B7A"
        stroke="#B91C1C"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      {/* Blue half of top face */}
      <path
        d="M 43 24 L 49 16 L 78 16 L 72 24 Z"
        fill="#4A90E2"
        stroke="#1D4ED8"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* --- RIGHT 3D SIDE FACE (Blue) --- */}
      <path
        d="M 72 24 L 78 16 L 78 38 L 72 46 Z"
        fill="#1E40AF"
        stroke="#1E3A8A"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />

      {/* --- FRONT RECTANGULAR FACE --- */}
      {/* Red half of front face (Left) */}
      <path
        d="M 14 24 L 43 24 L 43 46 L 14 46 Z"
        fill="#E63946"
        stroke="#B91C1C"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Blue half of front face (Right) */}
      <path
        d="M 43 24 L 72 24 L 72 46 L 43 46 Z"
        fill="#2563EB"
        stroke="#1D4ED8"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />

      {/* Clear straight vertical division line between Red and Blue */}
      <line x1="49" y1="16" x2="43" y2="24" stroke="#0F172A" strokeWidth="1.6" />
      <line x1="43" y1="24" x2="43" y2="46" stroke="#0F172A" strokeWidth="1.6" />

      {/* Subtle top edge highlight */}
      <line x1="16" y1="24" x2="41" y2="24" stroke="#FFA4AE" strokeWidth="1" strokeLinecap="round" />
      <line x1="45" y1="24" x2="70" y2="24" stroke="#93C5FD" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
};

// 5. 우산 (Umbrella - compact folding)
export const UmbrellaIllustration: React.FC<IllustrationProps> = ({ className = '', size = 110 }) => {
  const width = size;
  const height = size * 0.5;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 110 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-md transition-transform duration-200 select-none ${className}`}
    >
      {/* Shadow */}
      <ellipse cx="55" cy="48" rx="46" ry="5" fill="#3D1D23" fillOpacity="0.14" />
      {/* Umbrella fabric cylinder sleeve */}
      <path
        d="M 28 14 C 28 14, 82 14, 86 16 C 88 17, 88 35, 86 36 C 82 38, 28 38, 28 38 Z"
        fill="#E07A5F"
        stroke="#9E432C"
        strokeWidth="1.5"
      />
      {/* Sleeve folds / ridges */}
      <path d="M 35 14 Q 45 25 35 38" stroke="#C45A3F" strokeWidth="1.5" fill="none" />
      <path d="M 50 14 Q 60 25 50 38" stroke="#C45A3F" strokeWidth="1.5" fill="none" />
      <path d="M 65 14 Q 75 25 65 38" stroke="#C45A3F" strokeWidth="1.5" fill="none" />
      {/* Sleeve fastening strap with snap button */}
      <rect x="54" y="13" width="7" height="26" rx="2" fill="#9E432C" />
      <circle cx="57.5" cy="26" r="2.2" fill="#F4D396" stroke="#9E432C" strokeWidth="0.8" />
      {/* Umbrella metal tip cap on right */}
      <path d="M 86 21 L 96 26 L 86 31 Z" fill="#94A3B8" stroke="#64748B" strokeWidth="1" />
      {/* Telescopic stem rod */}
      <rect x="18" y="23" width="11" height="6" fill="#CBD5E1" stroke="#64748B" strokeWidth="1" />
      {/* Curved wooden handle on left */}
      <path
        d="M 19 26 L 14 26 C 9 26, 6 22, 6 17 C 6 12, 10 9, 14 9 C 16 9, 17 10, 17 10"
        stroke="#8D5B4C"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Handle wrist loop cord */}
      <path
        d="M 14 26 C 14 36, 8 42, 12 46 C 16 50, 22 44, 18 36"
        stroke="#4A2E27"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
};

// 6. 안경 (Glasses)
export const GlassesIllustration: React.FC<IllustrationProps> = ({ className = '', size = 100 }) => {
  const width = size;
  const height = size * 0.48;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-md transition-transform duration-200 select-none ${className}`}
    >
      {/* Shadow */}
      <ellipse cx="50" cy="42" rx="42" ry="4" fill="#3D1D23" fillOpacity="0.14" />
      {/* Left Frame Rim */}
      <circle cx="28" cy="22" r="16" fill="#F0F9FF" fillOpacity="0.3" stroke="#935B3B" strokeWidth="3" />
      {/* Left Lens Glint */}
      <path d="M 18 16 Q 28 10 38 18" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      {/* Right Frame Rim */}
      <circle cx="72" cy="22" r="16" fill="#F0F9FF" fillOpacity="0.3" stroke="#935B3B" strokeWidth="3" />
      {/* Right Lens Glint */}
      <path d="M 62 16 Q 72 10 82 18" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      {/* Nose Bridge */}
      <path d="M 44 20 Q 50 16 56 20" stroke="#935B3B" strokeWidth="3" fill="none" />
      {/* Left Temple (arm) folded */}
      <path d="M 12 21 C 6 19, 4 23, 2 24" stroke="#935B3B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Right Temple (arm) folded */}
      <path d="M 88 21 C 94 19, 96 23, 98 24" stroke="#935B3B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Gold metallic accents at hinges */}
      <circle cx="12" cy="21" r="1.8" fill="#F4D396" />
      <circle cx="88" cy="21" r="1.8" fill="#F4D396" />
    </svg>
  );
};

// 7. 휴대폰 (Cellphone)
export const CellphoneIllustration: React.FC<IllustrationProps> = ({ className = '', size = 80 }) => {
  const width = size;
  const height = size * 1.45;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-md transition-transform duration-200 select-none ${className}`}
    >
      {/* Shadow */}
      <ellipse cx="40" cy="110" rx="32" ry="5" fill="#3D1D23" fillOpacity="0.14" />
      {/* Outer Phone Case (Cute lilac pastel) */}
      <rect x="10" y="6" width="60" height="102" rx="14" fill="#D5C5E8" stroke="#9E88B8" strokeWidth="2" />
      {/* Screen Bezel */}
      <rect x="13" y="9" width="54" height="96" rx="11" fill="#1E1C24" />
      {/* Glass Screen Wallpaper */}
      <rect x="15" y="11" width="50" height="92" rx="9" fill="#2E2838" />
      {/* Screen gradient art / lock screen aesthetic */}
      <path
        d="M 15 65 C 25 55, 45 75, 65 60 L 65 103 L 15 103 Z"
        fill="#A68AC4"
        opacity="0.4"
      />
      <circle cx="40" cy="46" r="12" fill="#E8D5B5" opacity="0.3" />
      {/* Clock display */}
      <text
        x="40"
        y="42"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="12"
        fontWeight="bold"
        fontFamily="'Plus Jakarta Sans', sans-serif"
      >
        09:27
      </text>
      <text
        x="40"
        y="52"
        textAnchor="middle"
        fill="#D8D2E2"
        fontSize="6.5"
        fontWeight="500"
        fontFamily="'Plus Jakarta Sans', sans-serif"
      >
        일요일 9월 27일
      </text>
      {/* Glass Glint reflection */}
      <path
        d="M 18 14 L 62 14 L 20 90 Z"
        fill="#FFFFFF"
        opacity="0.08"
      />
      {/* Dynamic island / Speaker notch at top */}
      <rect x="32" y="13" width="16" height="4" rx="2" fill="#000000" />
      <circle cx="43" cy="15" r="1" fill="#1C3852" />
      {/* Home indicator bar at bottom */}
      <rect x="30" y="99" width="20" height="2" rx="1" fill="#FFFFFF" opacity="0.7" />
    </svg>
  );
};

// 8. 시계 (Watch)
export const WatchIllustration: React.FC<IllustrationProps> = ({ className = '', size = 80 }) => {
  const width = size;
  const height = size * 1.45;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-md transition-transform duration-200 select-none ${className}`}
    >
      {/* Shadow */}
      <ellipse cx="40" cy="108" rx="28" ry="5" fill="#3D1D23" fillOpacity="0.14" />
      {/* Upper Leather Strap */}
      <path
        d="M 28 6 L 52 6 L 50 36 L 30 36 Z"
        fill="#A36B4F"
        stroke="#6E4129"
        strokeWidth="1.2"
      />
      {/* Strap stitching lines */}
      <line x1="31" y1="8" x2="33" y2="34" stroke="#DAB097" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="49" y1="8" x2="47" y2="34" stroke="#DAB097" strokeWidth="1" strokeDasharray="2 2" />
      {/* Lower Leather Strap with buckle holes */}
      <path
        d="M 30 80 L 50 80 L 48 110 L 32 110 Z"
        fill="#A36B4F"
        stroke="#6E4129"
        strokeWidth="1.2"
      />
      <line x1="33" y1="82" x2="35" y2="108" stroke="#DAB097" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="47" y1="82" x2="45" y2="108" stroke="#DAB097" strokeWidth="1" strokeDasharray="2 2" />
      <circle cx="40" cy="88" r="1.5" fill="#422516" />
      <circle cx="40" cy="95" r="1.5" fill="#422516" />
      <circle cx="40" cy="102" r="1.5" fill="#422516" />
      {/* Watch Casing Lugs */}
      <rect x="27" y="32" width="6" height="12" rx="2" fill="#E8C97A" stroke="#B38F3E" strokeWidth="1" />
      <rect x="47" y="32" width="6" height="12" rx="2" fill="#E8C97A" stroke="#B38F3E" strokeWidth="1" />
      <rect x="27" y="72" width="6" height="12" rx="2" fill="#E8C97A" stroke="#B38F3E" strokeWidth="1" />
      <rect x="47" y="72" width="6" height="12" rx="2" fill="#E8C97A" stroke="#B38F3E" strokeWidth="1" />
      {/* Watch Crown (side dial button) */}
      <rect x="63" y="55" width="4" height="6" rx="1.5" fill="#E8C97A" stroke="#B38F3E" strokeWidth="0.8" />
      {/* Circular Watch Bezel (Rose Gold) */}
      <circle cx="40" cy="58" r="24" fill="#FDFBF7" stroke="#E8C97A" strokeWidth="3.5" />
      <circle cx="40" cy="58" r="21" fill="#FFFFFF" stroke="#D4AF37" strokeWidth="0.8" />
      {/* Hour Markers */}
      <line x1="40" y1="40" x2="40" y2="44" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="40" y1="72" x2="40" y2="76" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="58" x2="26" y2="58" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="54" y1="58" x2="58" y2="58" stroke="#333333" strokeWidth="1.5" strokeLinecap="round" />
      {/* Watch Hands: 10:10 */}
      <line x1="40" y1="58" x2="31" y2="48" stroke="#222222" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="40" y1="58" x2="52" y2="46" stroke="#222222" strokeWidth="1.6" strokeLinecap="round" />
      {/* Second hand (Gold/Red) */}
      <line x1="40" y1="62" x2="40" y2="43" stroke="#B91C1C" strokeWidth="0.8" strokeLinecap="round" />
      {/* Center Pin */}
      <circle cx="40" cy="58" r="2" fill="#D4AF37" />
    </svg>
  );
};

// 9. 카메라 (Camera)
export const CameraIllustration: React.FC<IllustrationProps> = ({ className = '', size = 100 }) => {
  const width = size;
  const height = size * 0.75;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-md transition-transform duration-200 select-none ${className}`}
    >
      {/* Shadow */}
      <ellipse cx="50" cy="69" rx="42" ry="5" fill="#3D1D23" fillOpacity="0.14" />
      {/* Camera Body Main */}
      <rect x="10" y="20" width="80" height="48" rx="8" fill="#F2EBE5" stroke="#7D746D" strokeWidth="1.5" />
      {/* Textured leatherette grip middle panel */}
      <rect x="10" y="32" width="80" height="34" rx="2" fill="#3D3734" />
      <line x1="10" y1="36" x2="90" y2="36" stroke="#4E4744" strokeWidth="0.8" />
      <line x1="10" y1="46" x2="90" y2="46" stroke="#4E4744" strokeWidth="0.8" />
      <line x1="10" y1="56" x2="90" y2="56" stroke="#4E4744" strokeWidth="0.8" />
      {/* Top Controls / Dials */}
      {/* Shutter button */}
      <rect x="22" y="15" width="10" height="5" rx="1.5" fill="#D6D1CC" stroke="#7D746D" strokeWidth="1" />
      {/* Mode dial */}
      <rect x="68" y="16" width="12" height="4" rx="1" fill="#4B4542" stroke="#2B2623" strokeWidth="0.8" />
      {/* Flash window */}
      <rect x="20" y="24" width="14" height="6" rx="1.5" fill="#FFEBAA" stroke="#C49B4F" strokeWidth="0.8" />
      {/* Red logo dot */}
      <circle cx="38" cy="27" r="2.5" fill="#DC2626" />
      {/* Viewfinder window */}
      <rect x="70" y="24" width="8" height="6" rx="1" fill="#7DD3FC" stroke="#0284C7" strokeWidth="0.8" />
      {/* Large Camera Lens */}
      <circle cx="53" cy="49" r="21" fill="#2B2623" stroke="#D6D1CC" strokeWidth="2.5" />
      <circle cx="53" cy="49" r="17" fill="#1B1715" stroke="#68605A" strokeWidth="1" />
      <circle cx="53" cy="49" r="13" fill="#1E293B" />
      {/* Lens glass elements reflection */}
      <ellipse cx="50" cy="45" rx="6" ry="4" fill="#38BDF8" opacity="0.6" />
      <circle cx="56" cy="52" r="2.5" fill="#A855F7" opacity="0.5" />
      <circle cx="48" cy="44" r="1.5" fill="#FFFFFF" opacity="0.8" />
    </svg>
  );
};

// 10. 모자 (Baseball Cap - Unmistakable casual student baseball cap)
export const HatIllustration: React.FC<IllustrationProps> = ({ className = '', size = 100 }) => {
  const width = size;
  const height = size * 0.72;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-md transition-transform duration-200 select-none ${className}`}
    >
      {/* Ground drop shadow */}
      <ellipse cx="48" cy="64" rx="42" ry="6" fill="#3D1D23" fillOpacity="0.16" />

      {/* Visor underside shadow */}
      <path
        d="M 52 50 C 58 52, 78 53, 90 48 C 84 53, 68 56, 52 52 Z"
        fill="#182533"
      />

      {/* Main Cap Crown Dome (6-panel baseball cap) */}
      <path
        d="M 22 46 C 20 28, 30 14, 52 14 C 68 14, 78 26, 78 45 C 78 47, 72 49, 64 50 C 52 51, 32 50, 22 46 Z"
        fill="#2B3A4A"
        stroke="#18232E"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Front Panel Highlight (structured front buckram) */}
      <path
        d="M 44 15 C 50 14, 62 18, 68 28 C 74 38, 76 46, 76 46 C 68 49, 56 50, 48 49 C 43 45, 42 26, 44 15 Z"
        fill="#344659"
      />

      {/* Back Panel Shading */}
      <path
        d="M 22 46 C 20 28, 30 14, 44 15 C 42 26, 43 45, 48 49 C 34 49, 24 48, 22 46 Z"
        fill="#23303E"
      />

      {/* Panel Seam Stitching lines meeting at top crown */}
      <path
        d="M 52 14 C 47 24, 46 38, 48 49"
        stroke="#18232E"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M 52 14 C 60 22, 66 34, 70 48"
        stroke="#18232E"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M 52 14 C 40 20, 32 32, 28 47"
        stroke="#18232E"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* Embroidered Eyelets (Air vent holes) */}
      <circle cx="42" cy="27" r="1.8" fill="#18232E" />
      <circle cx="42" cy="27" r="1" fill="#4B6077" />

      <circle cx="62" cy="28" r="1.8" fill="#18232E" />
      <circle cx="62" cy="28" r="1" fill="#4B6077" />

      {/* Top Button (Squatchee) */}
      <ellipse cx="52" cy="14" rx="3.5" ry="2.2" fill="#3D5166" stroke="#18232E" strokeWidth="1.2" />

      {/* Prominent Curved Baseball Cap Brim / Visor projecting forward */}
      <path
        d="M 48 48 C 58 48, 80 43, 94 37 C 98 36, 99 40, 96 44 C 90 52, 70 56, 50 53 C 48 51, 48 49, 48 48 Z"
        fill="#3D5166"
        stroke="#18232E"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />

      {/* Curved Brim Top Surface & Highlight */}
      <path
        d="M 52 48 C 64 47, 82 43, 94 37 C 92 41, 80 47, 66 49 C 58 50, 53 49, 52 48 Z"
        fill="#4A627B"
      />

      {/* Characteristic Rows of Brim Stitching (curved concentric tracks) */}
      <path
        d="M 54 50 C 66 50, 82 46, 92 41"
        stroke="#23303E"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="2 1.5"
        fill="none"
      />
      <path
        d="M 56 52 C 68 52, 82 48, 90 44"
        stroke="#23303E"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="2 1.5"
        fill="none"
      />

      {/* Casual stitched logo/patch on front of cap (Subtle letter 'S' or star) */}
      <path
        d="M 58 34 C 55 33, 53 35, 55 37 C 58 39, 60 40, 57 43 C 54 44, 52 42, 51 40"
        stroke="#E9C46A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

// Dispatcher component
export const ItemIllustration: React.FC<{
  id: string;
  className?: string;
  size?: number;
}> = ({ id, className = '', size = 90 }) => {
  switch (id) {
    case 'book':
      return <BookIllustration className={className} size={size} />;
    case 'notebook':
      return <NotebookIllustration className={className} size={size} />;
    case 'pencil':
      return <PencilIllustration className={className} size={size} />;
    case 'eraser':
      return <EraserIllustration className={className} size={size} />;
    case 'umbrella':
      return <UmbrellaIllustration className={className} size={size} />;
    case 'glasses':
      return <GlassesIllustration className={className} size={size} />;
    case 'cellphone':
      return <CellphoneIllustration className={className} size={size} />;
    case 'watch':
      return <WatchIllustration className={className} size={size} />;
    case 'camera':
      return <CameraIllustration className={className} size={size} />;
    case 'hat':
      return <HatIllustration className={className} size={size} />;
    default:
      return null;
  }
};
