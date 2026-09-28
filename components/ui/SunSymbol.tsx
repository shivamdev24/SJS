export default function SunSymbol({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Rays */}
      <g className="origin-center animate-[spin_25s_linear_infinite]">
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="100"
            y1="18"
            x2="100"
            y2="42"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${i * 30} 100 100)`}
          />
        ))}
      </g>

      {/* Sun */}
      <circle cx="100" cy="100" r="42" stroke="currentColor" strokeWidth="2" />

      <circle cx="100" cy="100" r="29" fill="currentColor" opacity=".12" />

      {/* Center */}
      <circle cx="100" cy="100" r="8" fill="currentColor" />
    </svg>
  );
}




{/* <SunSymbol
  className="
    h-32
    w-32
    text-[#e0a52c]
    animate-[float_6s_ease-in-out_infinite]
  "
/>; */}