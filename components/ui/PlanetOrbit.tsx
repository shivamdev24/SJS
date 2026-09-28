export default function PlanetOrbit({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Orbit paths */}
      <ellipse
        cx="250"
        cy="250"
        rx="210"
        ry="80"
        transform="rotate(-25 250 250)"
        stroke="currentColor"
        strokeWidth="1"
        opacity=".25"
      />

      <ellipse
        cx="250"
        cy="250"
        rx="160"
        ry="55"
        transform="rotate(35 250 250)"
        stroke="currentColor"
        strokeWidth="1"
        opacity=".25"
      />

      <ellipse
        cx="250"
        cy="250"
        rx="110"
        ry="38"
        transform="rotate(-50 250 250)"
        stroke="currentColor"
        strokeWidth="1"
        opacity=".3"
      />

      {/* Sun */}
      <circle cx="250" cy="250" r="18" fill="currentColor" opacity=".75" />

      {/* Planet 1 */}
      <g className="origin-center animate-[spin_12s_linear_infinite]">
        <circle cx="460" cy="250" r="6" fill="currentColor" />
      </g>

      {/* Planet 2 */}
      <g className="origin-center animate-[spin_20s_linear_infinite_reverse]">
        <circle cx="410" cy="250" r="4" fill="currentColor" />
      </g>

      {/* Planet 3 */}
      <g className="origin-center animate-[spin_28s_linear_infinite]">
        <circle cx="360" cy="250" r="3" fill="currentColor" />
      </g>
    </svg>
  );
}




{/* <PlanetOrbit
  className="
    absolute
    h-[600px]
    w-[600px]
    text-[#d29a28]
    opacity-30
  "
/>; */}