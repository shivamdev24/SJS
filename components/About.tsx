import Image from "next/image";
import { CheckCircle2, Heart, ShieldCheck, Sparkles, Star } from "lucide-react";

import AstrologyDecor from "./ui/AstrologyDecor";
import { Reveal } from "./reveal";

const stats = [
  {
    value: "25+",
    label: "Years of Experience",
    icon: Sparkles,
  },
  {
    value: "500+",
    label: "Poojas & Rituals",
    icon: Heart,
  },
  {
    value: "50K+",
    label: "Consultations",
    icon: ShieldCheck,
  },
  {
    value: "18+",
    label: "Service Areas",
    icon: CheckCircle2,
  },
];

export default function About() {
  return (
   
    <section
      id="about"
      className="relative isolate overflow-hidden  py-20 lg:py-28"
    >
      <AstrologyDecor variant="about" />

      <div className="section-shell relative z-10">
        {/* Background glow */}
        <div
          className="
          pointer-events-none
          absolute
          -left-40
          top-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#f1c76a]/10
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
          bg-[#a80707]/[0.05]
          blur-[110px]
        "
        />

        {/* Astrology background graphic */}
        {/* <svg
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-1/2
          z-[-1]
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

        <circle
          cx="300"
          cy="300"
          r="120"
          stroke="currentColor"
          strokeWidth="1"
        />

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

        {/* Grid texture */}
        {/* <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[-1]
          opacity-40
          bg-[linear-gradient(rgba(139,20,15,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(139,20,15,.025)_1px,transparent_1px)]
          bg-[size:70px_70px]
        "
      /> */}

        <div className="section-shell relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
            {/* IMAGE SIDE */}
             <Reveal direction="up" delay={0}>

            <div className="relative mx-auto w-full max-w-[500px]">
              {/* Decorative ring */}
              <div
                className="
                pointer-events-none
                absolute
                -left-10
                -top-10
                h-32
                w-32
                rounded-full
                border
                border-[#d6a137]/20
              "
              />

              <div
                className="
                pointer-events-none
                absolute
                -bottom-10
                -right-10
                h-40
                w-40
                rounded-full
                border
                border-[#a80707]/10
              "
              />

              {/* Gold glow */}
              <div
                className="
                absolute
                -inset-5
                rounded-[40px]
                bg-[#d9a63b]/10
                blur-2xl
              "
              />

              {/* Main card */}
              <div
                className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#e8d6bd]
                bg-white
                p-2
                shadow-[0_25px_70px_rgba(70,25,10,.12)]
              "
              >
                <div className="relative aspect-[4/4.7] overflow-hidden rounded-[22px]">
                  <Image
                    src="/images/owner.png"
                    alt="Acharya Gaurav Krishna Vatsalya Ji"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 500px"
                  />

                  {/* Image gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3d0808]/70 via-transparent to-transparent" />

                  {/* Floating Sanskrit-inspired decoration */}
                  <div
                    className="
                    absolute
                    left-5
                    top-5
                    grid
                    h-12
                    w-12
                    place-items-center
                    rounded-full
                    border
                    border-white/30
                    bg-black/20
                    text-[#f5c65f]
                    backdrop-blur-md
                  "
                  >
                    <Star size={19} fill="currentColor" />
                  </div>

                  {/* Profile caption */}
                  <div className="absolute inset-x-4 bottom-4">
                    <div
                      className="
                      rounded-2xl
                      border
                      border-white/50
                      bg-white/95
                      p-4
                      text-center
                      shadow-xl
                      backdrop-blur
                    "
                    >
                      <div className="text-[17px] font-extrabold text-[#74100d] sm:text-[19px]">
                        Acharya Gaurav Krishna Vatsalya Ji
                      </div>

                      <div className="mt-1 text-[10px] font-medium text-[#5f443a] sm:text-[11px]">
                        Bhagwat Speaker · Astrologer · Karmakandi ·
                        Sahityacharya
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience badge */}
              <div
                className="
                absolute
                -bottom-5
                -left-3
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-[#eadbc7]
                bg-white
                px-4
                py-3
                shadow-[0_12px_30px_rgba(70,25,10,.12)]
                sm:-left-6
              "
              >
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#fff2d0]">
                  <Sparkles size={17} className="text-[#c89222]" />
                </div>

                <div>
                  <div className="text-sm font-extrabold text-[#74100d]">
                    25+ Years
                  </div>

                  <div className="text-[10px] text-gray-500">
                    Of Vedic experience
                  </div>
                </div>
              </div>
            </div>
             </Reveal>

            {/* CONTENT SIDE */}
            <div>
              {/* Eyebrow */}
               <Reveal direction="up" delay={0.1}>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#c7962c]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#b17a15]">
                  Tradition · Experience · Trust
                </span>
              </div>

               </Reveal>

              {/* Heading */}
               <Reveal direction="up" delay={0.2}>

              <h2
                className="
                max-w-2xl
                text-3xl
                font-extrabold
                leading-[1.15]
                tracking-[-0.025em]
                text-[#f59b14]
                sm:text-4xl
                lg:text-[46px]
              "
              >
                Ancient Vedic wisdom,
                <span className="block text-[#a80707]">
                  personalized for your journey.
                </span>
              </h2>
                 </Reveal>

              {/* Description */}
               <Reveal direction="up" delay={0.3}>

              <p
                className="
                mt-6
                max-w-2xl
                text-[14px]
                leading-7
                text-[#94908f]
                sm:text-[15px]
              "
              >
                Rooted in the classical principles of Vedic astrology and the
                timeless Sanatan tradition, we provide thoughtful and
                personalized guidance for the important areas of your life.
              </p>
               </Reveal>
 <Reveal direction="up" delay={0.4}>

              <p
                className="
                mt-4
                max-w-2xl
                text-[14px]
                leading-7
                text-[#94908f]
                sm:text-[15px]
              "
              >
                Our approach is not about creating fear or uncertainty. It is
                about understanding your circumstances, interpreting your
                horoscope carefully, and offering practical spiritual guidance
                that helps you move forward with greater clarity.
              </p>
 </Reveal>

              {/* Stats */}
               <Reveal direction="up" delay={0.4}>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="
                      group
                      rounded-2xl
                      border
                      border-[#f5d6d6]
                      bg-[#f7f0f0]
                      p-4
                      shadow-[0_8px_25px_rgba(70,25,10,.04)]
                      backdrop-blur-sm
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#eb9898]/50
                      hover:shadow-[0_15px_35px_rgba(70,25,10,.08)]
                    "
                    >
                    {/* <div
                      key={stat.label}
                      className="
                      group
                      rounded-2xl
                      border
                      border-[#eb9898]
                      bg-[#fcbcbc]
                      p-4
                      shadow-[0_8px_25px_rgba(70,25,10,.04)]
                      backdrop-blur-sm
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:border-[#eb9898]/50
                      hover:shadow-[0_15px_35px_rgba(70,25,10,.08)]
                    "
                    > */}
                      <div
                        className="
                        grid
                        h-9
                        w-9
                        place-items-center
                        rounded-xl
                        bg-[#ffffff]
                        transition
                        group-hover:bg-[#a80707]
                      "
                      >
                        <Icon
                          size={17}
                          className="text-[#a80707] transition group-hover:text-white"
                        />
                      </div>

                      <div className="mt-3 text-xl font-extrabold text-[#a80707]">
                        {stat.value}
                      </div>

                      <div className="mt-1 text-[10px] font-semibold leading-4 text-[#766a64]">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
               </Reveal>

              {/* CTAs */}
               <Reveal direction="up" delay={0.5}>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#a80707]
                  px-6
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
                  Book a Personal Consultation
                </a>

                <a
                  href="#services"
                  className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-[#dfd2c6]
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-[#5c201d]
                  transition
                  hover:border-[#cda657]
                  hover:bg-[#fffaf2]
                "
                >
                  Explore Our Services
                </a>
              </div>
               </Reveal>

              {/* Trust line */}
               <Reveal direction="up" delay={0.6}>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-semibold text-[#81746d]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#b88721]" />
                  Authentic Vedic approach
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#b88721]" />
                  Personalized guidance
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#b88721]" />
                  Confidential consultations
                </span>
              </div>
               </Reveal>
            </div>
          </div>
        </div>
        {/* your content */}
      </div>
    </section>
  );
}
