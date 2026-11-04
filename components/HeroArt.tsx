// Illustrated stand-in: registration papers receiving their stamp.
// TODO: if the client supplies a photo, replace with next/image (1200×1400).
export function HeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 560 640" role="img" aria-label="Illustration of registration documents being stamped as approved" preserveAspectRatio="xMidYMid slice">
      <rect width="560" height="640" fill="#17384A" />
      <circle cx="470" cy="90" r="210" fill="#1E4A58" />
      <g transform="rotate(7 280 330)">
        <rect x="120" y="96" width="340" height="460" rx="8" fill="#C9D6D3" />
      </g>
      <g transform="rotate(-4 280 330)">
        <rect x="100" y="90" width="350" height="470" rx="8" fill="#FBFBF7" />
        <rect x="136" y="130" width="52" height="52" rx="26" fill="none" stroke="#12875A" strokeWidth="4" />
        <rect x="136" y="214" width="228" height="16" rx="3" fill="#0D1F2D" />
        <rect x="136" y="244" width="150" height="9" rx="3" fill="#0D1F2D" opacity=".45" />
        <g fill="#0D1F2D" opacity=".16">
          <rect x="136" y="292" width="278" height="7" rx="3" />
          <rect x="136" y="314" width="278" height="7" rx="3" />
          <rect x="136" y="336" width="240" height="7" rx="3" />
          <rect x="136" y="358" width="262" height="7" rx="3" />
          <rect x="136" y="380" width="170" height="7" rx="3" />
        </g>
        <path d="M138 490c16-26 26-34 32-28 7 8-14 34-6 37 9 3 20-26 29-22 7 3-3 20 5 21 7 1 13-9 24-9" fill="none" stroke="#0D1F2D" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="136" y="512" width="110" height="3" rx="1.5" fill="#0D1F2D" opacity=".4" />
      </g>
      <g className="hero-stamp">
        <g transform="rotate(-12 392 470)">
          <circle cx="392" cy="470" r="70" fill="#12875A" fillOpacity=".1" stroke="#12875A" strokeWidth="6" />
          <circle cx="392" cy="470" r="56" fill="none" stroke="#12875A" strokeWidth="2" />
          <path d="m364 472 20 20 37-42" fill="none" stroke="#12875A" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </svg>
  );
}
