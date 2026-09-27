import React from 'react';
import { motion } from 'motion/react';
import { BagState } from '../types';

interface BagSvgProps {
  state: BagState;
  onClick: () => void;
}

export const BagSvg: React.FC<BagSvgProps> = ({ state, onClick }) => {
  const isOpen = state === 'OPENING' || state === 'SCATTERED';
  const isShaking = state === 'SHAKING';

  return (
    <motion.div
      className="relative flex flex-col items-center select-none cursor-pointer group"
      onClick={state === 'CLOSED' ? onClick : undefined}
      animate={
        isShaking
          ? {
              x: [-4, 5, -5, 5, -3, 3, 0],
              y: [-2, 2, -2, 2, 0],
              rotate: [-2, 2.5, -2, 2, -1, 1, 0],
              transition: { duration: 0.5, ease: 'easeInOut' },
            }
          : {
              x: 0,
              y: 0,
              rotate: 0,
            }
      }
      whileHover={
        state === 'CLOSED'
          ? {
              scale: 1.03,
              y: -4,
              transition: { duration: 0.2 },
            }
          : {}
      }
      whileTap={state === 'CLOSED' ? { scale: 0.98 } : {}}
      role="button"
      tabIndex={0}
      aria-label="Ballet Plaid Backpack"
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && state === 'CLOSED') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <svg
        width="340"
        height="325"
        viewBox="0 0 340 325"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-xl overflow-visible"
      >
        <defs>
          {/* Balletcore Plaid Pattern */}
          <pattern
            id="balletPlaid"
            width="36"
            height="36"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            {/* Base cream */}
            <rect width="36" height="36" fill="#FBF3F2" />
            {/* Soft dusty rose stripes */}
            <rect x="0" y="0" width="36" height="12" fill="#E8B4B8" fillOpacity="0.45" />
            <rect x="0" y="0" width="12" height="36" fill="#E8B4B8" fillOpacity="0.45" />
            {/* Fine wine/burgundy lines */}
            <rect x="5" y="0" width="2" height="36" fill="#8B4354" fillOpacity="0.5" />
            <rect x="0" y="5" width="36" height="2" fill="#8B4354" fillOpacity="0.5" />
            {/* Soft sage/slate fine thread */}
            <rect x="23" y="0" width="1.5" height="36" fill="#A48089" fillOpacity="0.4" />
            <rect x="0" y="23" width="36" height="1.5" fill="#A48089" fillOpacity="0.4" />
            {/* White highlight grid */}
            <rect x="18" y="0" width="1" height="36" fill="#FFFFFF" fillOpacity="0.7" />
            <rect x="0" y="18" width="36" height="1" fill="#FFFFFF" fillOpacity="0.7" />
          </pattern>

          {/* Shading gradients */}
          <radialGradient id="bagDepth" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
            <stop offset="65%" stopColor="#5E2B38" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#4A1F2A" stopOpacity="0.28" />
          </radialGradient>

          <linearGradient id="strapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5A6AE" />
            <stop offset="50%" stopColor="#D98A94" />
            <stop offset="100%" stopColor="#BE6E78" />
          </linearGradient>

          <linearGradient id="goldZip" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DFB76C" />
            <stop offset="50%" stopColor="#FFF2B2" />
            <stop offset="100%" stopColor="#C49B4F" />
          </linearGradient>

          <filter id="softShadow" x="-10%" y="-10%" width="120%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#3F2329" floodOpacity="0.16" />
          </filter>
        </defs>

        {/* Ambient Ground Shadow */}
        <ellipse cx="170" cy="308" rx="130" ry="13" fill="#3D1D23" fillOpacity="0.14" />

        {/* --- BACKPACK TOP GRAB HANDLE --- */}
        <g id="top-handle">
          <path
            d="M 140 58 C 140 20, 200 20, 200 58"
            stroke="url(#strapGrad)"
            strokeWidth="13"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 140 58 C 140 20, 200 20, 200 58"
            stroke="#964C56"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            strokeLinecap="round"
            fill="none"
            opacity="0.5"
          />
        </g>

        {/* --- BACKPACK SHOULDER STRAPS (Padded straps curving down from behind) --- */}
        <g id="shoulder-straps">
          {/* Left Shoulder Strap */}
          <path
            d="M 125 65 C 72 85, 48 175, 66 260"
            stroke="url(#strapGrad)"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 125 65 C 72 85, 48 175, 66 260"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeDasharray="4 6"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
          {/* Right Shoulder Strap */}
          <path
            d="M 215 65 C 268 85, 292 175, 274 260"
            stroke="url(#strapGrad)"
            strokeWidth="18"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 215 65 C 268 85, 292 175, 274 260"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeDasharray="4 6"
            strokeLinecap="round"
            fill="none"
            opacity="0.6"
          />
        </g>

        {/* --- MAIN BACKPACK BODY (Classic rounded dome backpack) --- */}
        <g id="backpack-main-body" filter="url(#softShadow)">
          {/* Main dome silhouette with ballet plaid */}
          <path
            d="M 72 290
               C 68 250, 68 150, 78 120
               C 92 72, 130 52, 170 52
               C 210 52, 248 72, 262 120
               C 272 150, 272 250, 268 290
               C 266 304, 74 304, 72 290 Z"
            fill="url(#balletPlaid)"
            stroke="#8B4354"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Depth / lighting shadow overlay */}
          <path
            d="M 72 290
               C 68 250, 68 150, 78 120
               C 92 72, 130 52, 170 52
               C 210 52, 248 72, 262 120
               C 272 150, 272 250, 268 290
               C 266 304, 74 304, 72 290 Z"
            fill="url(#bagDepth)"
          />

          {/* Left and Right side contour piping seams */}
          <path
            d="M 88 126 C 80 170, 78 240, 80 292"
            stroke="#8B4354"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.35"
            fill="none"
          />
          <path
            d="M 252 126 C 260 170, 262 240, 260 292"
            stroke="#8B4354"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.35"
            fill="none"
          />
        </g>

        {/* --- MAIN BACKPACK COMPARTMENT OPENING / ZIPPER --- */}
        {isOpen ? (
          /* OPENED STATE: Main dome unzipped cavity showing dark silk interior */
          <g id="backpack-opening">
            {/* Interior cavity */}
            <path
              d="M 78 122
                 C 90 74, 130 54, 170 54
                 C 210 54, 250 74, 262 122
                 C 245 160, 95 160, 78 122 Z"
              fill="#38151D"
              stroke="#8B4354"
              strokeWidth="2"
            />
            {/* Interior silk sheen */}
            <ellipse cx="170" cy="116" rx="68" ry="18" fill="#5E2430" opacity="0.65" />
            {/* Gold zipper teeth lining unzipped arch */}
            <path
              d="M 78 122 C 90 74, 130 54, 170 54 C 210 54, 250 74, 262 122"
              stroke="url(#goldZip)"
              strokeWidth="3.5"
              strokeDasharray="4 2"
              fill="none"
            />
            {/* Lower rim zipper teeth */}
            <path
              d="M 78 122 C 95 160, 245 160, 262 122"
              stroke="url(#goldZip)"
              strokeWidth="3"
              strokeDasharray="4 2"
              fill="none"
            />
            {/* Zipper slider to the side */}
            <rect x="254" y="118" width="12" height="14" rx="2" fill="url(#goldZip)" stroke="#9E7635" strokeWidth="1" />
            {/* Dangling heart charm pull */}
            <path d="M 260 132 L 260 144" stroke="#DFB76C" strokeWidth="2" />
            <path
              d="M 260 148 C 257 144, 253 144, 253 147 C 253 150, 260 155, 260 155 C 260 155, 267 150, 267 147 C 267 144, 263 144, 260 148 Z"
              fill="#E5A6AE"
              stroke="#DFB76C"
              strokeWidth="1.2"
            />
          </g>
        ) : (
          /* CLOSED STATE: Gold curved zipper arch across upper dome */
          <g id="backpack-zipper">
            {/* Fabric zipper tape */}
            <path
              d="M 80 128 C 96 82, 132 64, 170 64 C 208 64, 244 82, 260 128"
              stroke="#BD6A77"
              strokeWidth="7"
              strokeLinecap="round"
              fill="none"
            />
            {/* Gold zipper teeth */}
            <path
              d="M 80 128 C 96 82, 132 64, 170 64 C 208 64, 244 82, 260 128"
              stroke="url(#goldZip)"
              strokeWidth="3.2"
              strokeDasharray="4 2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Gold Zipper slider */}
            <rect x="162" y="58" width="16" height="12" rx="3" fill="url(#goldZip)" stroke="#9E7635" strokeWidth="1" />
            {/* Dangling ballet charm pull from main zipper */}
            <line x1="170" y1="70" x2="170" y2="86" stroke="#DFB76C" strokeWidth="2" />
            <circle cx="170" cy="88" r="4.5" fill="#FFF2B2" stroke="#C49B4F" strokeWidth="1.2" />
            <path
              d="M 166 93 C 160 100, 156 109, 162 114 C 166 116, 170 106, 170 99 C 170 106, 174 116, 178 114 C 184 109, 180 100, 174 93 Z"
              fill="#F2CBD0"
              stroke="#8B4354"
              strokeWidth="1.2"
            />
          </g>
        )}

        {/* --- FRONT UTILITY ZIPPERED POUCH (Iconic backpack front pocket) --- */}
        <g id="front-pocket">
          {/* Front pouch body with matching ballet plaid */}
          <path
            d="M 96 195
               C 96 182, 110 180, 170 180
               C 230 180, 244 182, 244 195
               L 248 285
               C 248 296, 236 300, 170 300
               C 104 300, 92 296, 92 285 Z"
            fill="url(#balletPlaid)"
            stroke="#8B4354"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* Pocket depth gradient */}
          <path
            d="M 96 195
               C 96 182, 110 180, 170 180
               C 230 180, 244 182, 244 195
               L 248 285
               C 248 296, 236 300, 170 300
               C 104 300, 92 296, 92 285 Z"
            fill="url(#bagDepth)"
            opacity="0.8"
          />

          {/* Front pocket zipper flap & gold zipper track */}
          <path
            d="M 102 196 C 125 190, 215 190, 238 196"
            stroke="#BD6A77"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 104 196 C 125 190, 215 190, 236 196"
            stroke="url(#goldZip)"
            strokeWidth="2.5"
            strokeDasharray="3 2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Front pocket mini gold slider */}
          <rect x="220" y="191" width="10" height="9" rx="2" fill="url(#goldZip)" stroke="#9E7635" strokeWidth="0.8" />

          {/* Center Ballet Ribbon Bow on the front pocket */}
          <g id="pocket-ribbon-bow" transform="translate(170, 235)">
            <path
              d="M 0 0 C -18 -16, -24 -4, -8 0 C -24 4, -18 16, 0 0 Z"
              fill="#F4CED4"
              stroke="#A35463"
              strokeWidth="1.5"
            />
            <path
              d="M 0 0 C 18 -16, 24 -4, 8 0 C 24 4, 18 16, 0 0 Z"
              fill="#F4CED4"
              stroke="#A35463"
              strokeWidth="1.5"
            />
            {/* Ribbon tails hanging down */}
            <path
              d="M -3 2 C -10 16, -6 28, -12 38"
              stroke="#F4CED4"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 3 2 C 10 16, 6 28, 12 38"
              stroke="#F4CED4"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Knot */}
            <circle cx="0" cy="0" r="4.5" fill="#D67B8B" stroke="#8B4354" strokeWidth="1.3" />
          </g>
        </g>
      </svg>

      {/* Floating subtle instruction hint when closed */}
      {state === 'CLOSED' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: [0, -4, 0] }}
          transition={{
            y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
            opacity: { duration: 0.4 },
          }}
          className="mt-4 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-[#E8B4B8]/60 text-[#8B4354] font-medium text-sm shadow-sm flex items-center gap-2 group-hover:bg-[#8B4354] group-hover:text-white transition-colors duration-200"
        >
          <span className="text-base">✨</span>
          <span>Click the bag to open! (가방을 클릭해보세요)</span>
        </motion.div>
      )}
    </motion.div>
  );
};
