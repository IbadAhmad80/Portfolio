import React from "react";

// Hexagon monogram — same polygon as the site's design badges, with a serif "I".
export default function Logo({ size = 46, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Ibad Ahmad logo"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#04c2c9" />
          <stop offset="100%" stopColor="#e31b6d" />
        </linearGradient>
      </defs>
      <polygon
        points="50,2 86,26 86,74 50,98 14,74 14,26"
        fill="url(#logoGrad)"
      />
      {/* Serif capital "I" */}
      <path
        d="M35,30 H65 V38 H55 V62 H65 V70 H35 V62 H45 V38 H35 Z"
        fill="#0f1420"
      />
    </svg>
  );
}
