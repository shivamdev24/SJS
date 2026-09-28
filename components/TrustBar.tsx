import { ArrowRight, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";

export default function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-white/90 border-[#eadbd2]   px-5 lg:px-8">
      {/* Subtle background */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#a80707 1px, transparent 1px), linear-gradient(90deg, #a80707 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute -right-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#d6a137]/10 blur-3xl" />
      </div> */}

      <Reveal direction="up" delay={0.2}>

      <div className="section-shell relative flex flex-col gap-5 py-5 sm:flex-row sm:items-center sm:justify-between  max-w-7xl mx-auto border-[#fcd0b5] p-3">
        {/* Trust */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="grid h-12 w-12 place-items-center rounded-full border border-[#d6a137]/30 bg-[#fff7ed] text-[#a80707]">
              <ShieldCheck size={21} strokeWidth={1.8} />
            </div>

            <span className="absolute -right-1 -top-1 text-[10px] text-[#d6a137]">
              ✦
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#451313]">
              Trusted & Confidential Service
              <Sparkles size={13} className="text-[#d6a137]" />
            </div>

            <div className="mt-1 text-[11px] text-gray-500">
              Your personal information is handled with care and
              confidentiality.
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="flex items-center gap-4 sm:text-right">
          <div className="hidden h-10 w-px bg-[#eadbd2] sm:block" />

          <div>
            <div className="text-[10px] font-medium uppercase tracking-wider text-gray-400">
              Need a Consultation?
            </div>

            <a
              href="tel:+917018842425"
              className="mt-1 inline-flex items-center gap-2 text-sm font-bold text-[#a80707] transition-colors hover:text-[#7f0808]"
            >
              <Phone size={14} />
              +91 70188 42425
              <ArrowRight
                size={13}
                className="transition-transform hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}
