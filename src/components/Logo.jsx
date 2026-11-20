export function HarvestIQMark({ className = 'w-7 h-7' }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="2"
        stroke="#273440"
        strokeWidth="1.25"
        fill="#111821"
      />
      <path
        d="M8 23V11M16 23V14.5M24 23V9.5"
        stroke="#273440"
        strokeWidth="1.75"
        strokeLinecap="square"
      />
      <path
        d="M8 19L16 14L24 9.5"
        stroke="#D8A64A"
        strokeWidth="1.85"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <circle cx="8" cy="19" r="2" fill="#F4F6F7" />
      <circle cx="16" cy="14" r="2" fill="#D8A64A" />
      <circle cx="24" cy="9.5" r="2.2" fill="#72B89A" />
    </svg>
  );
}

export function HarvestIQLogo({ showWordmark = true, className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <HarvestIQMark className="w-7 h-7 shrink-0" />
      {showWordmark && (
        <span className="font-display text-[17px] font-semibold tracking-tight text-[#F4F6F7]">
          Harvest<span className="text-[#D8A64A]">IQ</span>
        </span>
      )}
    </span>
  );
}
