"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  MapPin,
  Send,
  Sparkles,
} from "lucide-react";
// import AstrologyBackground from "./ui/AstrologyDecor";
import AstrologyDecor from "./ui/AstrologyDecor";
import { Reveal } from "./reveal";

export default function KundliForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="kundli"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#f8cfc9]
        py-20
        lg:py-28
      "
    >
      {/* <Image src="/astro/4.jpg" fill className="absolute top-0 left-0  opacity-10 " /> */}
      {/* <AstrologyBackground /> */}
      <AstrologyDecor variant="kundli" />
      {/* Background glow */}
      {/* <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#c59a32]/10
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#a80707]/10
          blur-[110px]
        "
      /> */}

      {/* Subtle grid */}
      {/* <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
          bg-[linear-gradient(rgba(100,70,120,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(100,70,120,.025)_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      /> */}

      {/* Astrology background */}
      {/* <svg
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-1/2
          h-[650px]
          w-[650px]
          -translate-y-1/2
          text-[#a80707]
          opacity-[0.035]
        "
        viewBox="0 0 600 600"
        fill="none"
        aria-hidden="true"
      >
        <circle
          cx="300"
          cy="300"
          r="250"
          stroke="currentColor"
          strokeWidth="2"
        />

        <circle
          cx="300"
          cy="300"
          r="190"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle cx="300" cy="300" r="120" stroke="currentColor" />

        {Array.from({ length: 12 }).map((_, index) => {
          const angle = (index * 30 * Math.PI) / 180;

          const x1 = 300 + Math.cos(angle) * 250;
          const y1 = 300 + Math.sin(angle) * 250;

          const x2 = 300 - Math.cos(angle) * 250;
          const y2 = 300 - Math.sin(angle) * 250;

          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="1"
            />
          );
        })}

        <path
          d="M300 50L375 300L300 550L225 300Z"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M50 300L300 225L550 300L300 375Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg> */}

      <div className="section-shell relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <Reveal direction="up" delay={0}>
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#c7962c]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a77a1d]">
                Free Vedic Guidance
              </span>

              <span className="h-px w-8 bg-[#c7962c]" />
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h2
              className="
              text-3xl
              font-extrabold
              leading-tight
              tracking-[-0.025em]
              text-[#4d0908]
              sm:text-4xl
              lg:text-[46px]
            "
            >
              Discover What Your
              <span className="block text-[#a80707]">Birth Chart Reveals</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6d6260] sm:text-[15px]">
              Share your birth details and request a free initial Vedic
              astrology reading. Our guidance is based on your birth time, date,
              and location.
            </p>
          </Reveal>
        </div>

        {/* Main content */}
        <Reveal direction="up" delay={0.3}>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-[#e7ded8]
              bg-white
              p-5
              shadow-[0_20px_60px_rgba(60,25,20,.07)]
              sm:p-7
            "
          >
            {/* Form decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#f2d37f]/10 blur-3xl" />

            <div className="relative">
              <Reveal direction="up" delay={0.4}>

              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#fff3d7]">
                    <Sparkles size={17} className="text-[#b8831e]" />
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold text-[#4d0908]">
                      Birth Details
                    </h3>

                    <p className="text-[10px] text-[#817570]">
                      Enter accurate information for a better reading
                    </p>
                  </div>
                </div>
              </div>
              </Reveal>

              <div className="grid gap-4 sm:grid-cols-2">
                <Reveal direction="up" delay={0.5}>
                  <Field
                    label="Full Name"
                    placeholder="Enter your full name"
                    required
                  />
                </Reveal>

                <Reveal direction="up" delay={0.6}>
                  <Field
                    label="Phone Number"
                    placeholder="10-digit mobile number"
                    type="tel"
                    required
                  />
                </Reveal>

                <Reveal direction="up" delay={0.7}>
                  <Field
                    label="Date of Birth"
                    placeholder="DD / MM / YYYY"
                    type="date"
                    required
                  />
                </Reveal>
                <Reveal direction="up" delay={0.8}>
                  <Field
                    label="Time of Birth"
                    placeholder="HH : MM"
                    type="time"
                    required
                  />
                </Reveal>
                <Reveal direction="up" delay={0.9}>
                  <Field
                    label="Place of Birth"
                    placeholder="City / District"
                    required
                  />
                </Reveal>
                <Reveal direction="up" delay={0.9}>
                  <Field
                    label="WhatsApp Number"
                    placeholder="WhatsApp number"
                    type="tel"
                  />
                </Reveal>
              </div>

              {/* Subject */}
              <Reveal direction="up" delay={0.9}>
                <label className="mt-5 block">
                  <span className="text-xs font-bold text-[#615651]">
                    What would you like guidance about?
                  </span>

                  <textarea
                    rows={4}
                    placeholder="Marriage, career, business, family, education, spiritual guidance, etc."
                    className="
                    mt-2
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[#e5ddd7]
                    bg-[#fcfaf8]
                    px-4
                    py-3
                    text-sm
                    text-[#332b28]
                    outline-none
                    transition
                    placeholder:text-[#aaa09a]
                    focus:border-[#b20d0d]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-[#b20d0d]/5
                  "
                  />
                </label>
              </Reveal>

              {/* Bottom */}
              <Reveal direction="up" delay={0.4}>
                <div className="mt-5 flex flex-col gap-4 border-t border-[#eee7e2] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 text-[10px] leading-4 text-[#817570]">
                    <CheckCircle2
                      size={14}
                      className="shrink-0 text-[#b88721]"
                    />
                    Your information is kept private and confidential.
                  </div>

                  <button
                    type="submit"
                    className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-[#a80707]
                    px-5
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_10px_25px_rgba(168,7,7,.18)]
                    transition
                    hover:-translate-y-0.5
                    hover:bg-[#c20a0a]
                  "
                  >
                    <Send size={15} />

                    {submitted
                      ? "Request Submitted"
                      : "Request Free Kundli Reading"}
                  </button>
                </div>
              </Reveal>
            </div>
          </form>

          {/* KUNDLI PREVIEW */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[24px]
              bg-gradient-to-br
              from-[#a80a08]
              via-[#8b0706]
              to-[#5e0505]
              p-6
              text-white
              shadow-[0_20px_60px_rgba(90,10,5,.20)]
              sm:p-7
            "
          >
            {/* Decorative circles */}
             <Reveal direction="up" delay={0.3}>

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[35px] border-white/[0.06]" />
  
 </Reveal>
 <Reveal direction="up" delay={0.4}>
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full border-[30px] border-[#f5c65f]/[0.07]" />
             </Reveal>

            {/* Content */}
            <div className="relative">
               <Reveal direction="up" delay={0}>

              <div className="flex items-center justify-between">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#ffe3a2]">
                  Free Service
                </span>

                <CalendarDays size={18} className="text-[#f5c65f]" />
              </div>

               </Reveal>
                <Reveal direction="up" delay={0.1}>

              <h3 className="mt-6 text-2xl font-extrabold leading-tight">
                Your Vedic
                <span className="block text-[#f5c65f]">Birth Chart</span>
              </h3>
                </Reveal>
 <Reveal direction="up" delay={0.3}>

              <p className="mt-2 max-w-sm text-xs leading-6 text-white/65">
                Your Kundli maps the planetary positions at the exact moment and
                location of your birth.
              </p>
 </Reveal>

              {/* Chart */}
               <Reveal direction="up" delay={0.4}>

              <div className="mt-7 flex justify-center">
                <div className="relative w-full max-w-[310px]">
                  {/* Glow */}
                  <div className="absolute inset-8 rounded-full bg-[#f5c65f]/10 blur-3xl" />

                  {/* Kundli */}
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-[#f6d98e]/30 bg-[#5c0505]/50 shadow-[0_0_50px_rgba(246,217,142,0.08)]">
                    {/* Decorative corner symbols */}
                    <span className="absolute left-3 top-2 text-[10px] text-[#f6d98e]/40">
                      ✦
                    </span>
                    <span className="absolute right-3 top-2 text-[10px] text-[#f6d98e]/40">
                      ✦
                    </span>
                    <span className="absolute bottom-2 left-3 text-[10px] text-[#f6d98e]/40">
                      ✦
                    </span>
                    <span className="absolute bottom-2 right-3 text-[10px] text-[#f6d98e]/40">
                      ✦
                    </span>

                    <svg
                      viewBox="0 0 400 400"
                      className="absolute inset-0 h-full w-full"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Outer Kundli border */}
                      <rect
                        x="18"
                        y="18"
                        width="364"
                        height="364"
                        rx="4"
                        stroke="#f6d98e"
                        strokeOpacity="0.65"
                        strokeWidth="1.5"
                      />

                      {/* Main square (the chart boundary) */}
                      <rect
                        x="55"
                        y="55"
                        width="290"
                        height="290"
                        stroke="#f6d98e"
                        strokeOpacity="0.55"
                        strokeWidth="1.2"
                      />

                      {/* Diagonals corner-to-corner */}
                      <path
                        d="M55 55 L345 345 M345 55 L55 345"
                        stroke="#f6d98e"
                        strokeOpacity="0.7"
                        strokeWidth="1.4"
                      />

                      {/* Diamond connecting the midpoints of each side. Together with
                the diagonals above, this is what actually divides a North
                Indian kundli into its 12 houses. */}
                      <path
                        d="M200 55 L345 200 L200 345 L55 200 Z"
                        stroke="#f6d98e"
                        strokeOpacity="0.7"
                        strokeWidth="1.4"
                      />

                      {/* Center Om */}
                      <text
                        x="200"
                        y="211"
                        textAnchor="middle"
                        fill="#f5c65f"
                        fontSize="26"
                        fontFamily="serif"
                      >
                        ॐ
                      </text>

                      {/* House numbers — placed at the centroid of each house's true
                geometric region (4 diamond-tip triangles + 8 corner
                triangles), inset a little from the outer point */}
                      <g
                        fill="#ffe9b4"
                        fontSize="13"
                        fontWeight="600"
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <text x="200" y="75">
                          1
                        </text>
                        <text x="74" y="61">
                          2
                        </text>
                        <text x="61" y="74">
                          3
                        </text>
                        <text x="75" y="200">
                          4
                        </text>
                        <text x="61" y="326">
                          5
                        </text>
                        <text x="74" y="339">
                          6
                        </text>
                        <text x="200" y="325">
                          7
                        </text>
                        <text x="326" y="339">
                          8
                        </text>
                        <text x="339" y="326">
                          9
                        </text>
                        <text x="325" y="200">
                          10
                        </text>
                        <text x="339" y="74">
                          11
                        </text>
                        <text x="326" y="61">
                          12
                        </text>
                      </g>

                      {/* Planet placements, at each house's true centroid (unique — no house repeated) */}
                      <g
                        fill="#ffe9b4"
                        fontSize="9"
                        fontWeight="500"
                        textAnchor="middle"
                      >
                        <text x="200" y="128">
                          Su
                        </text>
                        <text x="128" y="79">
                          Mo
                        </text>
                        <text x="79" y="128">
                          Ma
                        </text>
                        <text x="128" y="200">
                          Me
                        </text>
                        <text x="79" y="273">
                          Ju
                        </text>
                        <text x="128" y="321">
                          Ve
                        </text>
                        <text x="200" y="273">
                          Sa
                        </text>
                        <text x="273" y="321">
                          Ra
                        </text>
                        <text x="321" y="273">
                          Ke
                        </text>
                        <text x="273" y="200">
                          As
                        </text>
                      </g>

                      {/* Tiny decorative dots at the diamond points and centre */}
                      <g fill="#f5c65f">
                        <circle cx="200" cy="55" r="2" />
                        <circle cx="200" cy="345" r="2" />
                        <circle cx="55" cy="200" r="2" />
                        <circle cx="345" cy="200" r="2" />
                        <circle cx="200" cy="200" r="2" />
                      </g>
                    </svg>

                    {/* Subtle inner glow */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,198,95,0.08),transparent_45%)]" />
                  </div>

                  {/* Caption */}
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <span className="h-px w-8 bg-[#f6d98e]/30" />
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#f6d98e]/60">
                      Vedic Birth Chart
                    </span>
                    <span className="h-px w-8 bg-[#f6d98e]/30" />
                  </div>
                </div>
              </div>
               </Reveal>

              {/* Info */}
              <div className="mt-7 space-y-3">
                 <Reveal direction="up" delay={0.5}>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">
                  <Clock3 size={16} className="shrink-0 text-[#f5c65f]" />

                  <div>
                    <div className="text-[10px] font-bold text-white/45">
                      Accurate Birth Time
                    </div>

                    <div className="text-xs font-semibold">
                      Essential for precise analysis
                    </div>
                  </div>
                </div>
                 </Reveal>
 <Reveal direction="up" delay={0.6}>

                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">
                  <MapPin size={16} className="shrink-0 text-[#f5c65f]" />

                  <div>
                    <div className="text-[10px] font-bold text-white/45">
                      Birth Location
                    </div>

                    <div className="text-xs font-semibold">
                      Used to calculate planetary positions
                    </div>
                  </div>
                </div>
 </Reveal>
              </div>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------------------------------------
   Reusable field
--------------------------------------------- */

function Field({
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold text-[#615651]">
        {label}
        {required && <span className="ml-1 text-[#a80707]">*</span>}
      </span>

      <input
        required={required}
        type={type}
        placeholder={placeholder}
        className="
          mt-2
          h-12
          w-full
          rounded-xl
          border
          border-[#e5ddd7]
          bg-[#fcfaf8]
          px-4
          text-sm
          text-[#332b28]
          outline-none
          transition
          placeholder:text-[#aaa09a]
          focus:border-[#b20d0d]
          focus:bg-white
          focus:ring-4
          focus:ring-[#b20d0d]/5
        "
      />
    </label>
  );
}
