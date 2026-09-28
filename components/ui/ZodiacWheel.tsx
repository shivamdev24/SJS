export default function ZodiacWheel({
  className = "",
}: {
  className?: string;
}) {
  const lines = Array.from({ length: 12 });

  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Outer rings */}
      <circle
        cx="250"
        cy="250"
        r="220"
        stroke="currentColor"
        strokeWidth="1"
        opacity=".35"
      />

      <circle
        cx="250"
        cy="250"
        r="185"
        stroke="currentColor"
        strokeWidth="1"
        opacity=".5"
      />

      <circle
        cx="250"
        cy="250"
        r="115"
        stroke="currentColor"
        strokeWidth="1"
        opacity=".4"
      />

      {/* Zodiac divisions */}
      {lines.map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;

        const x1 = 250 + Math.cos(angle) * 185;
        const y1 = 250 + Math.sin(angle) * 185;

        const x2 = 250 + Math.cos(angle) * 220;
        const y2 = 250 + Math.sin(angle) * 220;

        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1"
            opacity=".5"
          />
        );
      })}

      {/* Diamond */}
      <path
        d="M250 65L435 250L250 435L65 250Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity=".4"
      />

      {/* Inner diamond */}
      <path
        d="M250 135L365 250L250 365L135 250Z"
        stroke="currentColor"
        strokeWidth="1"
        opacity=".35"
      />

      {/* Center */}
      <circle cx="250" cy="250" r="8" fill="currentColor" opacity=".8" />
    </svg>
  );
}




{/* <ZodiacWheel
  className="
    h-[500px]
    w-[500px]
    animate-[spin_45s_linear_infinite]
    text-[#a80707]
    opacity-20
  "
/>; */}