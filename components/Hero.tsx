import Image from "next/image";
import { ArrowRight, Check, MessageCircle, Play, Star } from "lucide-react";
import { Reveal } from "./reveal";

function AstrologyWatermark() {
  return (
    <svg
      className="
        pointer-events-none
        absolute
        -left-[50vw]
        inset-y-0
        h-full
        w-full
        text-[#f5c65f]
        opacity-[0.08]
        animate-spin
        [animation-duration:120s]
      "
      viewBox="0 0 900 620"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="450" cy="300" r="245" stroke="currentColor" strokeWidth="2" />

      <circle
        cx="450"
        cy="300"
        r="190"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      <circle
        cx="450"
        cy="300"
        r="115"
        stroke="currentColor"
        strokeWidth="1.5"
      />

      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;

        const x = 450 + Math.cos(a) * 245;
        const y = 300 + Math.sin(a) * 245;

        const x2 = 450 - Math.cos(a) * 245;
        const y2 = 300 - Math.sin(a) * 245;

        return (
          <line
            key={i}
            x1={x}
            y1={y}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1"
          />
        );
      })}

      <path
        d="M450 55 525 300 450 545 375 300Z"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M205 300 450 225 695 300 450 375Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        min-h-full
        overflow-hidden
        bg-[#4b0808]
        text-white
      "
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/images/herobgvideo.mp4" type="video/mp4" />
      </video>

      {/* Video overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Astrology watermark */}
      <AstrologyWatermark />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-32 top-20 z-[1] h-80 w-80 rounded-full bg-[#e6a42c]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-0 z-[1] h-96 w-96 rounded-full bg-[#ff7139]/10 blur-3xl" />

      {/* Content */}
      <div
        className="
          section-shell
          relative
          z-10
          mx-auto
          grid
          min-h-[585px]
          max-w-7xl
          items-center
          gap-12
          py-12
          sm:py-14
          lg:grid-cols-[1.03fr_.97fr]
          lg:py-[58px]
           px-5 lg:px-8
        "
      >
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <Reveal direction="up">
            <div
              className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#f0c978]/40
              bg-[#fff7df]/10
              px-3.5
              py-2
              text-[10px]
              font-extrabold
              tracking-wide
              text-[#ffe0a0]
              shadow-[0_4px_20px_rgba(0,0,0,.08)]
              backdrop-blur-sm
              sm:text-[11px]
            "
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[#e8a934] text-[#5b0c0c]">
                ✦
              </span>
              25+ Years of Experience · Certified Vedic Guidance
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal direction="up" delay={0.1}>
            <h1
              className="
              font-display
              max-w-[700px]
              text-[35px]
              font-extrabold
              leading-[1.15]
              tracking-[-0.02em]
              sm:text-[47px]
              lg:text-[53px]
            "
            >
              Discover clarity through
              <span className="block text-[#f5c65f]">
                authentic Vedic astrology
              </span>
            </h1>
          </Reveal>
          {/* Description */}
          <Reveal direction="up" delay={0.2}>
          <p
            className="
              mt-5
              max-w-[650px]
              text-[13px]
              leading-7
              text-[#ffeceb]/85
              sm:text-[15px]
            "
          >
            Get personalized and authentic guidance from an experienced
            astrologer for your birth chart, relationships, career, business,
            rituals, and the important decisions in your life.
          </p>
          </Reveal>

          {/* CTAs */}
          <Reveal direction="up" delay={0.3}>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#kundli"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-[#f3b735]
                px-5
                py-3.5
                text-sm
                font-bold
                text-[#5b0a0a]
                shadow-[0_8px_25px_rgba(0,0,0,.18)]
                transition
                hover:bg-[#ffc84e]
              "
            >
              Get Your Free Kundli
              <ArrowRight size={16} />
            </a>

            <a
              href="#contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-white/25
                bg-white/10
                px-5
                py-3.5
                text-sm
                font-bold
                text-white
                backdrop-blur-sm
                transition
                hover:bg-white/15
              "
            >
              <MessageCircle size={16} />
              Talk on WhatsApp
            </a>
          </div>
          </Reveal>

          {/* Stats */}
           <Reveal direction="up" delay={0.3}>

          <div
            className="
              mt-9
              grid
              max-w-[590px]
              grid-cols-3
              divide-x
              divide-white/15
              rounded-2xl
              border
              border-white/10
              bg-black/10
              px-2
              py-4
              backdrop-blur-sm
            "
          >
            {[
              ["25+", "Years of Experience"],
              ["1.5L+", "Consultations"],
              ["100%", "Personalized Guidance"],
            ].map(([value, label]) => (
              <div key={label} className="px-3 sm:px-5">
                <div className="text-[21px] font-extrabold text-[#ffd56f] sm:text-[25px]">
                  {value}
                </div>

                <div className="mt-1 text-[10px] font-semibold text-[#ffe9e3]/65 sm:text-[11px]">
                  {label}
                </div>
              </div>
            ))}
          </div>
             </Reveal>
        </div>

        {/* RIGHT PROFILE */}
        <div className="relative mx-auto w-full max-w-[470px] lg:mr-0">
          {/* Glow */}
          <div className="absolute -inset-8 rounded-[3rem] bg-[#e5a62f]/15 blur-3xl" />

          {/* Decorative circle */}
          <div className="absolute -right-5 top-8 hidden h-28 w-28 rounded-full border border-[#f4c767]/20 lg:block" />

          {/* Profile card */}
           <Reveal direction="up" delay={0.3}>

          <div
            className="
              relative
              rounded-[24px]
              border-[5px]
              border-[#e9a82f]
              bg-[#fff7e8]
              p-1.5
              shadow-[0_25px_70px_rgba(0,0,0,.36)]
            "
          >
            <div className="relative aspect-[4/4.55] overflow-hidden rounded-[17px] bg-[#f0dfcf]">
              <Image
                src="/images/guru.png"
                alt="Acharya Gaurav Krishna Vatsalya Ji"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 430px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />

              {/* Profile information */}
              <div
                className="
                  absolute
                  inset-x-3
                  bottom-3
                  rounded-xl
                  border
                  border-white/60
                  bg-white/95
                  p-3.5
                  text-center
                  text-[#72100c]
                  shadow-xl
                  backdrop-blur
                "
              >
                <div className="font-display text-[16px] font-extrabold sm:text-[18px]">
                  Shree
                </div>

                <div className="mt-1 text-[9px] font-semibold text-[#745f58] sm:text-[10px]">
                  Bhagwat Speaker · Astrologer · Karmakandi · Sahityacharya
                </div>
              </div>
            </div>
          </div>
           </Reveal>

          {/* Verified badge */}
           <Reveal direction="up" delay={0.4}>

          <div
            className="
              absolute
              -bottom-5
              -left-2
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-[#f0dfbf]
              bg-white
              px-3.5
              py-2.5
              text-[10px]
              font-extrabold
              text-[#74100d]
              shadow-xl
              sm:-left-6
              sm:px-4
              sm:py-3
              sm:text-[11px]
            "
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#fff3ce]">
              <Star size={14} fill="currentColor" className="text-[#d99d22]" />
            </span>
            Certified Astrology Service
          </div>
           </Reveal>

          {/* Consultation badge */}
           <Reveal direction="up" delay={0.5}>

          <div
            className="
              absolute
              -right-3
              top-8
              hidden
              items-center
              gap-2
              rounded-xl
              border
              border-white/15
              bg-[#6d0d0d]/80
              px-3
              py-2
              text-[10px]
              font-bold
              text-[#ffe2a4]
              shadow-xl
              backdrop-blur
              sm:flex
              lg:-right-6
            "
          >
            <Check size={14} className="text-[#f5c65f]" />
            Personal Consultation
          </div>
           </Reveal>

          
        </div>
      </div>
    </section>
  );
}
