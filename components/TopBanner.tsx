"use client";

import { Phone, Sparkles } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="relative z-50 h-8 w-full overflow-hidden bg-[#c51f24] text-white">
      {/* Subtle astrology texture */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -left-10 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full border border-white" />
        <div className="absolute -right-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-white" />
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-1.5 text-[11px] font-medium tracking-wide sm:text-xs">
          <Sparkles className="h-3 w-3" strokeWidth={1.7} />
          <span>ॐ नमः शिवाय</span>
        </div>

        {/* Right */}
        <div className="flex h-full items-center">
          <a
            href="tel:+917017885425"
            className="flex items-center gap-1.5 text-[11px] font-medium transition-opacity hover:opacity-80 sm:text-xs"
          >
            <Phone className="h-3 w-3" strokeWidth={1.8} />
            <span>+91 7017885425</span>
          </a>

          <span className="mx-3 h-4 w-px bg-white/40" />

         
        </div>
      </div>
    </div>
  );
}
