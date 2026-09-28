import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";

export default function PromoBanner() {
  return (
    <section className="section-shell py-16   px-5 lg:px-8">
      <div className="group relative bg-[#571602] overflow-hidden rounded-3xl  p-6 text-black shadow-[0_20px_60px_rgba(120,20,10,0.18)] sm:p-8 lg:p-10 max-w-7xl mx-auto">
        {/* <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#8f0909] via-[#a80707] to-[#c52a12] p-6 text-white shadow-[0_20px_60px_rgba(120,20,10,0.18)] sm:p-8 lg:p-10 max-w-7xl mx-auto"> */}
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Large circle */}
          <div className="absolute -right-20 -top-32 h-72 w-72 rounded-full border-[28px] border-white/5 transition-transform duration-700 group-hover:scale-110" />

          <div className="absolute -right-5 -top-20 h-52 w-52 rounded-full border border-[#ffd88b]/20" />

          {/* Astrology mandala */}
          <div className="absolute -bottom-32 right-[18%] h-72 w-72 rounded-full border border-[#ffd88b]/10">
            <div className="absolute inset-8 rounded-full border border-[#ffd88b]/10" />
            <div className="absolute inset-20 rounded-full border border-white/10" />
          </div>

          {/* Glow */}
          <div className="absolute -left-20 bottom-[-100px] h-64 w-64 rounded-full bg-[#ffd88b]/10 blur-[80px]" />

          {/* Stars */}
          <Sparkles className="absolute right-[35%] top-8 h-5 w-5 text-[#ffd88b]/40" />
          <Sparkles className="absolute bottom-8 right-10 h-4 w-4 text-[#ffd88b]/30" />
          <span className="absolute left-[45%] top-8 text-[#ffd88b]/30">✦</span>
        </div>

        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Content */}
          <div className="max-w-2xl">
            <Reveal direction="up" delay={0}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ffd88b]/30 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#ffd88b] backdrop-blur-sm">
                <BookOpen size={14} />
                Spiritual Knowledge
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h2 className="mt-4 text-2xl font-bold text-white leading-tight sm:text-3xl lg:text-4xl">
                Explore the Wisdom of
                <span className="block text-[#ffd88b]">
                  Astrology & Sanatan Tradition
                </span>
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white">
                Discover useful insights about Vedic astrology, spiritual
                traditions and classical wisdom — explained in a simple and
                practical way.
              </p>
            </Reveal>

            {/* Small highlights */}
            <div className="mt-5 flex flex-wrap gap-3 text-[10px] font-medium  text-red-200/70">
              <Reveal direction="up" delay={0.3}>
                <span className="rounded-full bg-[#a80707]/50 px-3 py-1.5">
                  Vedic Astrology
                </span>
              </Reveal>

              <Reveal direction="up" delay={0.4}>
                <span className="rounded-full bg-[#a80707]/50 px-3 py-1.5">
                  Sanatan Wisdom
                </span>
              </Reveal>
              <Reveal direction="up" delay={0.5}>
                <span className="rounded-full bg-[#a80707]/50 px-3 py-1.5">
                  Spiritual Guidance
                </span>
              </Reveal>
            </div>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="group/btn inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold text-[#a80707] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:w-fit"
          >
            Read Our Articles
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover/btn:translate-x-1"
            />
          </a>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ffd88b] transition-all duration-700 group-hover:w-full" />
      </div>
    </section>
  );
}
