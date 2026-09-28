import {
  Clock3,
  GraduationCap,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import AstrologyDecor from "./ui/AstrologyDecor";
import { Reveal } from "./reveal";

const reasons = [
  {
    title: "Classical Knowledge",
    description:
      "Guidance rooted in Sanatan traditions and classical Vedic wisdom.",
    icon: GraduationCap,
  },
  {
    title: "Personal Consultation",
    description:
      "Every consultation is tailored to your individual circumstances and questions.",
    icon: MessageCircle,
  },
  {
    title: "Privacy & Confidentiality",
    description:
      "Your personal information and consultation details are treated with care.",
    icon: LockKeyhole,
  },
  {
    title: "Experience & Service",
    description:
      "A structured consultation experience built around years of traditional practice.",
    icon: Clock3,
  },
  {
    title: "24/7 Contact Support",
    description:
      "Contact and assistance available according to your consultation needs.",
    icon: ShieldCheck,
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden  py-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#a80707 1px, transparent 1px), linear-gradient(90deg, #a80707 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Glows */}
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d6a137]/10 blur-[110px]" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#a80707]/10 blur-[110px]" />

        {/* Decorative astrology circle */}
        <div className="absolute -right-48 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-[#d6a137]/10">
          <div className="absolute inset-10 rounded-full border border-[#a80707]/5" />
          <div className="absolute inset-24 rounded-full border border-[#d6a137]/10" />

          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6a137]/30" />
        </div>

        {/* Left mandala */}
        <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full border border-[#d6a137]/10" />
      </div>
      <AstrologyDecor variant="hero" />

      <div className="section-shell relative z-10 max-w-7xl mx-auto  px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal direction='up' delay={0}>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#d6a137]/30 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a80707] backdrop-blur-sm">
            <Sparkles size={13} />
            Why Choose Us
          </div>
          </Reveal>
<Reveal direction='up' delay={0.2}>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#451313] md:text-4xl lg:text-5xl">
            Why Choose
            <span className="block text-[#a80707]">
              Sanskrit Jyotish Sagar?
            </span>
          </h2>
</Reveal>
<Reveal direction='up' delay={0.3}>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
            A trusted experience built around clear communication, traditional
            wisdom and personalized service.
          </p>
</Reveal>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <Reveal direction="up" key={reason.title} delay={index * 0.3}>
                <div
                  key={reason.title}
                  className="group relative overflow-hidden  h-60 rounded-2xl border border-[#eadbd2] bg-white/80 p-5 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#d6a137]/50 hover:bg-white hover:shadow-[0_20px_50px_rgba(100,20,20,0.10)]"
                >
                  {/* Number */}
                  <span className="absolute right-3 top-2 text-4xl font-bold text-[#a80707]/5 transition-colors group-hover:text-[#a80707]/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#d6a137]/30 bg-[#fff7ed] text-[#a80707] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#a80707] group-hover:text-white">
                    <Icon size={22} strokeWidth={1.7} />

                    <div className="absolute inset-[-5px] -z-10 rounded-full border border-[#d6a137]/20 transition-all duration-500 group-hover:scale-110" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 text-sm font-bold leading-5 text-[#451313]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-[11px] leading-5 text-gray-500">
                    {reason.description}
                  </p>

                  {/* Bottom ornament */}
                  <div className="mt-5 flex items-center justify-center gap-2">
                    <span className="h-px w-6 bg-[#d6a137]/40" />
                    <span className="text-xs text-[#d6a137]">✦</span>
                    <span className="h-px w-6 bg-[#d6a137]/40" />
                  </div>

                  {/* Bottom hover line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#a80707] to-[#d6a137] transition-all duration-500 group-hover:w-full" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
