// import AstrologyStars from "./AstrologyStars";
// import Constellation from "./Constellation";
// import KundliPattern from "./KundaliPattern";
// import PlanetOrbit from "./PlanetOrbit";
// import SunSymbol from "./SunSymbol";
// import ZodiacWheel from "./ZodiacWheel";

// export default function AstrologyBackground() {
//   return (
//     <div
//       className="
//         pointer-events-none
//         absolute
//         inset-0
//         overflow-hidden
//       "
//       aria-hidden="true"
//     >
//       {/* Stars */}
//       <AstrologyStars
//         className="
//           absolute
//           -right-10
//           top-10
//           h-[500px]
//           w-[500px]
//           text-[#faf8f8]
//           opacity-30
//         "
//       />

//       {/* Zodiac wheel */}
//       <ZodiacWheel
//         className="
//           absolute
//           -right-40
//           top-1/2
//           h-[650px]
//           w-[650px]
//           -translate-y-1/2
//           text-[#f0e5e5]
//           opacity-[0.06]
//           animate-[spin_60s_linear_infinite]
//         "
//       />

//       {/* Planet system */}
//       <PlanetOrbit
//         className="
//           absolute
//           -right-32
//           top-1/2
//           h-[600px]
//           w-[600px]
//           -translate-y-1/2
//           text-[#ece9e6]
//           opacity-20
//         "
//       />

//       {/* Constellation */}
//       <Constellation
//         className="
//           absolute
//           left-0
//           top-20
//           h-[300px]
//           w-[450px]
//           text-[#f3ebeb]
//           opacity-20
//         "
//       />

//       {/* Kundli */}
//       <KundliPattern
//         className="
//           absolute
//           -bottom-32
//           -left-32
//           h-[450px]
//           w-[450px]
//           text-[#f0ecec]
//           opacity-[0.035]
//           animate-[pulse_8s_ease-in-out_infinite]
//         "
//       />

//       {/* Sun */}
//       <SunSymbol
//         className="
//           absolute
//           left-[12%]
//           top-[20%]
//           h-24
//           w-24
//           text-[#f8f6f6]
//           opacity-20
//           animate-[spin_30s_linear_infinite]
//         "
//       />
//     </div>
//   );
// }

"use client";

import React from "react";

type Props = {
  variant?:
    | "hero"
    | "about"
    | "kundli"
    | "services"
    | "pooja"
    | "contact"
    | "all";
  className?: string;
};

export default function AstrologyDecor({
  variant = "all",
  className = "",
}: Props) {
  const show = (name: string) => variant === "all" || variant === name;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* =====================================================
          STARS
      ====================================================== */}
      {show("hero") || show("contact") || variant === "all" ? (
        <svg
          className="absolute inset-0 h-full w-full opacity-30"
          viewBox="0 0 1000 600"
          fill="none"
        >
          {[
            [80, 90],
            [180, 180],
            [280, 80],
            [390, 240],
            [520, 110],
            [650, 200],
            [760, 90],
            [880, 180],
            [940, 340],
            [700, 420],
            [420, 470],
            [160, 400],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={i % 3 === 0 ? 2.5 : 1.5}
              className="fill-[#d6a137] animate-[pulse_3s_ease-in-out_infinite]"
              style={{
                animationDelay: `${i * 300}ms`,
              }}
            />
          ))}
        </svg>
      ) : null}

      {/* =====================================================
          ZODIAC WHEEL
      ====================================================== */}
      {show("hero") || variant === "all" ? (
        <svg
          className="absolute -right-40 top-1/2 h-[700px] w-[700px] -translate-y-1/2 text-[#d6a137] opacity-[0.10] animate-[spin_90s_linear_infinite]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle
            cx="250"
            cy="250"
            r="220"
            stroke="currentColor"
            strokeWidth="1"
          />

          <circle
            cx="250"
            cy="250"
            r="180"
            stroke="currentColor"
            strokeWidth="1"
          />

          <circle
            cx="250"
            cy="250"
            r="100"
            stroke="currentColor"
            strokeWidth="1"
          />

          {Array.from({ length: 12 }).map((_, i) => {
            const angle = i * 30;
            const rad = (angle * Math.PI) / 180;

            const x1 = 250 + Math.cos(rad) * 100;
            const y1 = 250 + Math.sin(rad) * 100;

            const x2 = 250 + Math.cos(rad) * 220;
            const y2 = 250 + Math.sin(rad) * 220;

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="1"
              />
            );
          })}

          {Array.from({ length: 12 }).map((_, i) => {
            const angle = i * 30 + 15;
            const rad = (angle * Math.PI) / 180;

            const x = 250 + Math.cos(rad) * 195;
            const y = 250 + Math.sin(rad) * 195;

            return (
              <rect
                key={i}
                x={x - 7}
                y={y - 7}
                width="14"
                height="14"
                rx="2"
                transform={`rotate(45 ${x} ${y})`}
                stroke="currentColor"
                strokeWidth="1"
              />
            );
          })}

          <circle
            cx="250"
            cy="250"
            r="35"
            stroke="currentColor"
            strokeWidth="1.5"
          />

          <circle cx="250" cy="250" r="8" fill="currentColor" />
        </svg>
      ) : null}

      {/* =====================================================
          PLANET ORBITS
      ====================================================== */}
      {show("hero") || show("about") || variant === "all" ? (
        <svg
          className="absolute -right-20 top-1/2 h-[600px] w-[600px] -translate-y-1/2 text-[#a80707] opacity-[0.12]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <g
            className="animate-[spin_40s_linear_infinite]"
            style={{
              transformOrigin: "center",
            }}
          >
            <ellipse cx="250" cy="250" rx="220" ry="90" stroke="currentColor" />

            <ellipse cx="250" cy="250" rx="180" ry="70" stroke="currentColor" />

            <ellipse cx="250" cy="250" rx="130" ry="50" stroke="currentColor" />

            <circle cx="470" cy="250" r="8" fill="currentColor" />

            <circle cx="430" cy="250" r="6" fill="currentColor" />

            <circle cx="380" cy="250" r="5" fill="currentColor" />
          </g>

          <circle
            cx="250"
            cy="250"
            r="25"
            fill="currentColor"
            className="animate-[pulse_4s_ease-in-out_infinite]"
          />
        </svg>
      ) : null}

      {/* =====================================================
          SACRED GEOMETRY
      ====================================================== */}
      {show("about") || show("pooja") || variant === "all" ? (
        <svg
          className="absolute -left-40 top-1/2 h-[550px] w-[550px] -translate-y-1/2 text-[#d6a137] opacity-[0.08]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <g
            className="animate-[spin_70s_linear_infinite]"
            style={{
              transformOrigin: "center",
            }}
          >
            <circle cx="250" cy="250" r="210" stroke="currentColor" />

            <circle cx="250" cy="250" r="170" stroke="currentColor" />

            <circle cx="250" cy="250" r="120" stroke="currentColor" />

            <path d="M250 70 L405 340 H95 Z" stroke="currentColor" />

            <path d="M250 430 L95 160 H405 Z" stroke="currentColor" />

            <polygon
              points="250,120 363,185 363,315 250,380 137,315 137,185"
              stroke="currentColor"
            />
          </g>

          <circle
            cx="250"
            cy="250"
            r="18"
            fill="currentColor"
            className="animate-[pulse_4s_ease-in-out_infinite]"
          />
        </svg>
      ) : null}

      {/* =====================================================
          KUNDLI
      ====================================================== */}
      {show("kundli") || variant === "all" ? (
        <svg
          className="absolute -right-20 bottom-[-180px] h-[500px] w-[500px] text-[#a80707] opacity-[0.05] animate-[pulse_8s_ease-in-out_infinite]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <rect
            x="80"
            y="80"
            width="340"
            height="340"
            stroke="currentColor"
            strokeWidth="2"
          />

          <path d="M80 80 L420 420" stroke="currentColor" strokeWidth="2" />

          <path d="M420 80 L80 420" stroke="currentColor" strokeWidth="2" />

          <path
            d="M250 80 L420 250 L250 420 L80 250 Z"
            stroke="currentColor"
            strokeWidth="2"
          />

          <path d="M250 80 L250 420" stroke="currentColor" />

          <path d="M80 250 L420 250" stroke="currentColor" />

          <circle cx="250" cy="250" r="25" stroke="currentColor" />

          <text
            x="250"
            y="260"
            textAnchor="middle"
            fill="currentColor"
            fontSize="28"
          >
            ॐ
          </text>
        </svg>
      ) : null}

      {/* =====================================================
          SUN
      ====================================================== */}
      {show("hero") || show("services") || variant === "all" ? (
        <svg
          className="absolute left-[10%] top-[15%] h-24 w-24 text-[#d6a137] opacity-20 animate-[spin_35s_linear_infinite]"
          viewBox="0 0 100 100"
          fill="none"
        >
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = i * 30;
            const rad = (angle * Math.PI) / 180;

            const x1 = 50 + Math.cos(rad) * 28;
            const y1 = 50 + Math.sin(rad) * 28;

            const x2 = 50 + Math.cos(rad) * 43;
            const y2 = 50 + Math.sin(rad) * 43;

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="2"
              />
            );
          })}

          <circle
            cx="50"
            cy="50"
            r="20"
            stroke="currentColor"
            strokeWidth="2"
          />

          <circle cx="50" cy="50" r="10" fill="currentColor" />
        </svg>
      ) : null}

      {/* =====================================================
          CONSTELLATION
      ====================================================== */}
      {show("kundli") || show("contact") || variant === "all" ? (
        <svg
          className="absolute left-0 top-20 h-[300px] w-[450px] text-[#a80707] opacity-10"
          viewBox="0 0 450 300"
          fill="none"
        >
          <path
            d="M40 220 L120 120 L190 170 L260 70 L340 130 L410 50"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            className="animate-[dash_12s_linear_infinite]"
          />

          {[
            [40, 220],
            [120, 120],
            [190, 170],
            [260, 70],
            [340, 130],
            [410, 50],
          ].map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={i % 2 === 0 ? 5 : 3}
              fill="currentColor"
              className="animate-[pulse_3s_ease-in-out_infinite]"
              style={{
                animationDelay: `${i * 400}ms`,
              }}
            />
          ))}
        </svg>
      ) : null}

      {/* =====================================================
          LOTUS / MANDALA
      ====================================================== */}
      {show("pooja") || variant === "all" ? (
        <svg
          className="absolute right-[8%] bottom-[5%] h-52 w-52 text-[#d6a137] opacity-10 animate-[spin_100s_linear_infinite]"
          viewBox="0 0 200 200"
          fill="none"
        >
          <circle cx="100" cy="100" r="75" stroke="currentColor" />

          <circle cx="100" cy="100" r="45" stroke="currentColor" />

          {Array.from({ length: 12 }).map((_, i) => {
            const angle = i * 30;
            const rad = (angle * Math.PI) / 180;

            const x = 100 + Math.cos(rad) * 55;
            const y = 100 + Math.sin(rad) * 55;

            return (
              <ellipse
                key={i}
                cx={x}
                cy={y}
                rx="12"
                ry="30"
                transform={`rotate(${angle} ${x} ${y})`}
                stroke="currentColor"
              />
            );
          })}

          <circle
            cx="100"
            cy="100"
            r="10"
            fill="currentColor"
            className="animate-[pulse_3s_ease-in-out_infinite]"
          />
        </svg>
      ) : null}

      {/* =====================================================
          FLOATING ASTROLOGY SYMBOLS
      ====================================================== */}
      {show("services") || variant === "all" ? (
        <>
          <span className="absolute left-[8%] top-[40%] text-4xl text-[#a80707] opacity-10 animate-[float_6s_ease-in-out_infinite]">
            ॐ
          </span>

          <span className="absolute right-[12%] top-[30%] text-3xl text-[#d6a137] opacity-20 animate-[float_7s_ease-in-out_infinite]">
            ☽
          </span>

          <span className="absolute left-[30%] bottom-[15%] text-2xl text-[#d6a137] opacity-20 animate-[float_5s_ease-in-out_infinite]">
            ✦
          </span>

          <span className="absolute right-[35%] top-[15%] text-3xl text-[#a80707] opacity-10 animate-[float_8s_ease-in-out_infinite]">
            ☼
          </span>
        </>
      ) : null}
    </div>
  );
}