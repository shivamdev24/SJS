export default function Constellation({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="
          M70 290
          L150 190
          L230 240
          L315 110
          L410 170
          L520 80
        "
        stroke="currentColor"
        strokeWidth="1"
        opacity=".35"
        strokeDasharray="4 8"
        className="animate-[dash_12s_linear_infinite]"
      />

      <circle cx="70" cy="290" r="4" fill="currentColor" />
      <circle cx="150" cy="190" r="3" fill="currentColor" />
      <circle cx="230" cy="240" r="4" fill="currentColor" />
      <circle cx="315" cy="110" r="5" fill="currentColor" />
      <circle cx="410" cy="170" r="3" fill="currentColor" />
      <circle cx="520" cy="80" r="4" fill="currentColor" />
    </svg>
  );
}
