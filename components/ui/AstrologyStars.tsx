const stars = [
  [70, 80, 2],
  [145, 170, 1.5],
  [230, 90, 2],
  [315, 150, 1],
  [410, 75, 2],
  [440, 210, 1.5],
  [90, 310, 1],
  [180, 390, 2],
  [300, 350, 1.5],
  [400, 410, 2],
  [470, 330, 1],
];

export default function AstrologyStars({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {stars.map(([cx, cy, r], index) => (
        <circle
          key={index}
          cx={cx}
          cy={cy}
          r={r}
          fill="currentColor"
          className={
            index % 2 === 0
              ? "animate-[pulse_3s_ease-in-out_infinite]"
              : "animate-[pulse_4s_ease-in-out_infinite]"
          }
          style={{
            animationDelay: `${index * 250}ms`,
          }}
        />
      ))}
    </svg>
  );
}
