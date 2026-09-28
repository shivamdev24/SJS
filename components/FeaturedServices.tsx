import Image from "next/image";
import AstrologyDecor from "./ui/AstrologyDecor";
import { Reveal } from "./reveal";

const cards = [
  {
    title: "Kundli Matching",
    description:
      "Compatibility matching, Guna Milan, Dosha analysis and guidance for married life.",
    price: "From ₹1,100",
    img: "/images/f1.png",
  },
  {
    title: "Understanding the 12 Rashis",
    description:
      "Understand your Rashi, planetary influences and transits in simple language.",
    price: "From ₹501",
    img: "/images/f2.png",
  },
  {
    title: "Weekly Astrology Consultation",
    description:
      "Personalized guidance for your questions, decisions and upcoming week.",
    price: "From ₹510",
    img: "/images/f3.png",
  },
];

export default function FeaturedServices() {
  return (
    <section className="relative overflow-hidden bg-[#fffaf5] py-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#a80707 1px, transparent 1px), linear-gradient(90deg, #a80707 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#d6a137]/10 blur-[100px]" />

        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#a80707]/10 blur-[100px]" />

        {/* Decorative astrology rings */}
        <div className="absolute -right-24 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full border border-[#a80707]/5">
          <div className="absolute inset-8 rounded-full border border-[#d6a137]/10" />
          <div className="absolute inset-20 rounded-full border border-[#a80707]/5" />
        </div>
      </div>

      <AstrologyDecor variant="services" />

      <div className="section-shell relative z-10 max-w-7xl mx-auto  px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal direction="up" delay={0}>
            <span className="inline-flex items-center rounded-full border border-[#d6a137]/30 bg-white/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a80707]">
              Featured Services
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#451313] md:text-4xl">
              Guidance for Life's
              <span className="block text-[#a80707]">Important Questions</span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.3}>
            <p className="mt-4 text-sm leading-6 text-gray-500">
              Explore some of our most requested astrology consultations,
              designed to provide clear and personalized guidance.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal direction="up" key={card.title} delay={index * 0.3}>
              <article className="group  relative itence overflow-hidden rounded-2xl border border-[#e7dcd5] bg-white/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#d6a137]/50 hover:bg-white hover:shadow-[0_20px_50px_rgba(100,20,20,0.10)]">
                {/* Number */}
                <span className="absolute right-5 top-4 text-4xl font-bold text-[#a80707]/5">
                  0{index + 1}
                </span>

                {/* Popular badge */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#fff0eb] px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#a80707]">
                    Popular
                  </span>

                  <span className="text-xs font-bold text-[#a80707]">
                    {card.price}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-full flex items-center justify-center">
                  <Image
                    src={card.img}
                    alt="Vedic astrology consultation"
                    width={1000}
                    height={1000}
                    className=" mt-7 flex h-60 w-60 object-cover items-center justify-between rounded-xl"
                  />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-lg font-bold text-[#451313]">
                  {card.title}
                </h3>

                <p className="mt-2 min-h-[52px] text-xs leading-6 text-gray-500">
                  {card.description}
                </p>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#a80707] py-3 text-xs font-bold text-white transition-all duration-300 hover:bg-[#8d0606] hover:shadow-lg hover:shadow-[#a80707]/20"
                >
                  Book This Service
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#a80707] via-[#d6a137] to-[#a80707] transition-all duration-500 group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
