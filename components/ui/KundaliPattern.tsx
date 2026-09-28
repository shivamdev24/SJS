export default function KundliPattern({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Outer square */}
      <rect
        x="35"
        y="35"
        width="330"
        height="330"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />

      {/* Diagonal */}
      <path
        d="M35 35L365 365M365 35L35 365"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Diamond */}
      <path
        d="M200 35L365 200L200 365L35 200Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {/* Inner diamond */}
      <path
        d="M200 105L295 200L200 295L105 200Z"
        stroke="currentColor"
        strokeWidth="1"
      />

      {/* Center */}
      <circle cx="200" cy="200" r="22" stroke="currentColor" strokeWidth="1" />

      <text
        x="200"
        y="207"
        textAnchor="middle"
        fill="currentColor"
        fontSize="20"
      >
        ॐ
      </text>
    </svg>
  );
}





{/* <KundliPattern
  className="
    absolute
    right-[-100px]
    top-1/2
    h-[500px]
    w-[500px]
    -translate-y-1/2
    text-white
    opacity-[0.08]
    animate-[pulse_6s_ease-in-out_infinite]
  "
/>; */}