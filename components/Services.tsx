import {
  BriefcaseBusiness,
  Gem,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Home,
  MoonStar,
  Sparkles,
  Sun,
  UsersRound,
  WalletCards,
  Heart,
} from "lucide-react";
import AstrologyDecor from "./ui/AstrologyDecor";
import { Reveal } from "./reveal";

const items = [
  {
    title: "Marriage Astrology",
    desc: "Marriage prospects, compatibility matching and relationship guidance.",
    icon: Heart,
  },
  {
    title: "Career & Job",
    desc: "Career direction, job changes, opportunities and professional growth.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Business Astrology",
    desc: "Business growth, partnerships and important decision-making.",
    icon: WalletCards,
  },
  {
    title: "Child & Family",
    desc: "Astrological guidance regarding children and family matters.",
    icon: HeartHandshake,
  },
  {
    title: "Education Astrology",
    desc: "Educational and career guidance for students and young professionals.",
    icon: GraduationCap,
  },
  {
    title: "House & Griha Pravesh",
    desc: "Housewarming, auspicious timings, peace and Vastu guidance.",
    icon: Home,
  },
  {
    title: "Health Astrology",
    desc: "Understand planetary influences and receive traditional guidance.",
    icon: Sun,
  },
  {
    title: "Puja & Rituals",
    desc: "Special pujas, recitations and traditional Vedic rituals.",
    icon: HandHeart,
  },
  {
    title: "Gemstone Consultation",
    desc: "Guidance on suitable gemstones and traditional wearing methods.",
    icon: Gem,
  },
  {
    title: "Muhurat Consultation",
    desc: "Select auspicious timings for important events and ceremonies.",
    icon: MoonStar,
  },
  {
    title: "Vastu Consultation",
    desc: "Guidance for homes, offices and business spaces based on Vastu.",
    icon: Sparkles,
  },
  {
    title: "Personal Consultation",
    desc: "Personalized guidance based on your individual circumstances.",
    icon: UsersRound,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#fffaf5] py-20"
    >
    {/* <section
      id="services"
      className="relative overflow-hidden bg-[#fffaf5] py-20"
    > */}
      {/* Background decoration */}
       <Reveal direction="up" delay={0}>
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#8f1717 1px, transparent 3px), linear-gradient(90deg, #8f1717 1px, transparent 3px)",
            backgroundSize: "120px 120px",
          }}
        />

        {/* Glow */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d6a137]/10 blur-[100px]" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#a80707]/10 blur-[100px]" />

        {/* Astrology circle */}
        {/* <div className="absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full border border-[#a80707]/5">
          <div className="absolute inset-8 rounded-full border border-[#d6a137]/10" />
          <div className="absolute inset-20 rounded-full border border-[#a80707]/5" />
        </div> */}
      </div>
       </Reveal>
        

      <AstrologyDecor variant="services" />

      <div className="section-shell relative z-10 max-w-7xl mx-auto  px-5 lg:px-8">
        {/* Heading */}
         <Reveal direction="up" delay={0.1}>

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d6a137]/30 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a80707] backdrop-blur-sm">
            <Sparkles size={13} />
            Our Expertise
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#4a1111] md:text-4xl lg:text-5xl">
            Sacred Vedic Services
            <span className="block text-[#a80707]">for Every Journey</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
            Personalized guidance based on classical Vedic astrology,
            traditional wisdom and time-tested practices for different areas of
            life.
          </p>
        </div>
         </Reveal>

        {/* Services */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} direction="up" delay={index * 0.1}>
                <div
                
                  className="group relative overflow-hidden rounded-2xl border border-[#eadbd2] bg-white/80 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#d6a137]/50 hover:bg-white hover:shadow-[0_20px_50px_rgba(120,30,20,0.10)]"
                >
                  {/* Card number */}
                  <span className="absolute right-4 top-3 text-[10px] font-bold tracking-widest text-[#a80707]/10 transition group-hover:text-[#a80707]/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-[#d6a137]/20 bg-[#fff5ed] text-[#a80707] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#a80707] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.7} />

                    {/* Glow */}
                    <div className="absolute inset-0 -z-10 rounded-xl bg-[#d6a137]/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 text-base font-bold text-[#451313]">
                    {item.title}
                  </h3>

                  <p className="mt-2 min-h-[48px] text-xs leading-5 text-gray-500">
                    {item.desc}
                  </p>

                  {/* Link */}
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-1 text-xs font-bold text-[#a80707] transition-all group-hover:gap-2"
                  >
                    Learn More
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#a80707] to-[#d6a137] transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            );
          })}
        </div>
<Reveal direction="up" delay={0.6}>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500">
            Not sure which service is right for you?
          </p>

          <a
            href="#contact"
            className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#a80707] px-6 py-3 text-xs font-bold text-white shadow-lg shadow-[#a80707]/20 transition hover:-translate-y-1 hover:bg-[#8f0606]"
          >
            <Sparkles size={14} />
            Talk to an Astrologer
          </a>
        </div>
</Reveal>
      </div>
    </section>
  );
}
