"use client";

import {
  CalendarDays,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  User,
} from "lucide-react";
import { useState } from "react";
import AstrologyDecor from "./ui/AstrologyDecor";
import { Reveal } from "./reveal";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Reveal direction="up" delay={0}>
     
      <section
        id="contact"
        className="relative overflow-hidden bg-[#fffaf5] py-20"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(#a80707 1px, transparent 1px), linear-gradient(90deg, #a80707 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d6a137]/10 blur-[110px]" />
          <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#a80707]/10 blur-[110px]" />

          {/* Decorative astrology circles */}
          <div className="absolute -right-40 top-1/2 h-[550px] w-[550px] -translate-y-1/2 rounded-full border border-[#d6a137]/10">
            <div className="absolute inset-10 rounded-full border border-[#a80707]/5" />
            <div className="absolute inset-24 rounded-full border border-[#d6a137]/10" />
          </div>
        </div>

        <AstrologyDecor variant="contact" />

        <div className="section-shell relative z-10 max-w-7xl mx-auto  px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-[#eadbd2] bg-white/90 p-6 shadow-[0_20px_70px_rgba(80,20,10,0.08)] backdrop-blur-sm sm:p-8 lg:p-12">
          {/* <div className="relative overflow-hidden rounded-3xl border border-[#eadbd2] bg-white/90 p-6 shadow-[0_20px_70px_rgba(80,20,10,0.08)] backdrop-blur-sm sm:p-8 lg:p-12"> */}
            {/* Decorative corner */}
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full border-[18px] border-[#d6a137]/5" />
            <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full border-[18px] border-[#a80707]/5" />

            {/* Header */}
            <div className="relative z-10 mx-auto max-w-3xl text-center">
              <Reveal direction="up" delay={0}>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d6a137]/30 bg-[#fff8ef] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#a80707]">
                  <span>✦</span>
                  Free Kundli Consultation
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#451313] md:text-4xl">
                  Get Your Birth Chart &
                  <span className="block text-[#a80707]">
                    Personalized Guidance
                  </span>
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.3}>
                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500">
                  Share your accurate birth details and our team will contact
                  you to guide you through the next steps.
                </p>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal direction="up" delay={0.4}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="relative z-10 mx-auto mt-10 max-w-4xl"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <Reveal direction="up" delay={0.1}>
                    <Field
                      icon={User}
                      label="Full Name"
                      placeholder="Enter your full name"
                      type="text"
                    />
                  </Reveal>

                  <Reveal direction="up" delay={0.2}>
                    {/* Phone */}
                    <Field
                      icon={Phone}
                      label="Phone Number"
                      placeholder="Enter your phone number"
                      type="tel"
                    />
                  </Reveal>

                  <Reveal direction="up" delay={0.3}>
                    {/* DOB */}
                    <Field
                      icon={CalendarDays}
                      label="Date of Birth"
                      placeholder=""
                      type="date"
                    />
                  </Reveal>

                  <Reveal direction="up" delay={0.4}>
                    {/* Time */}
                    <Field
                      icon={Clock3}
                      label="Time of Birth"
                      placeholder=""
                      type="time"
                    />
                  </Reveal>

                  <Reveal direction="up" delay={0.5}>
                    {/* Place */}
                    <Field
                      icon={MapPin}
                      label="Place of Birth"
                      placeholder="City, State"
                      type="text"
                    />
                  </Reveal>

                  <Reveal direction="up" delay={0.6}>
                    {/* WhatsApp */}
                    <Field
                      icon={MessageCircle}
                      label="WhatsApp Number"
                      placeholder="Enter WhatsApp number"
                      type="tel"
                    />
                  </Reveal>
                </div>

                <Reveal direction="up" delay={0.5}>
                  {/* Submit */}
                  <div className="mt-7 flex flex-col items-center justify-between gap-4 border-t border-[#eee3dc] pt-6 sm:flex-row">
                    <p className="text-[10px] leading-5 text-gray-400">
                      Your information is kept private and used only for
                      consultation purposes.
                    </p>

                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#a80707] px-7 py-3.5 text-xs font-bold text-white shadow-lg shadow-[#a80707]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#8d0606] hover:shadow-xl sm:w-auto"
                    >
                      {submitted
                        ? "Request Submitted ✓"
                        : "Request Free Kundli"}
                    </button>
                  </div>
                </Reveal>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

function Field({
  icon: Icon,
  label,
  placeholder,
  type,
}: {
  icon: React.ElementType;
  label: string;
  placeholder: string;
  type: string;
}) {
  return (
    <label className="group">
      <span className="mb-2 flex items-center gap-2 text-xs font-bold text-[#451313]">
        <Icon size={14} className="text-[#a80707]" strokeWidth={1.8} />
        {label}
      </span>

      <div className="relative">
        <input
          required
          type={type}
          placeholder={placeholder}
          className="w-full rounded-xl border border-[#e7ddd7] bg-[#fffdfb] px-4 py-3.5 text-sm text-[#451313] outline-none transition-all placeholder:text-gray-400 focus:border-[#c99a3b] focus:ring-4 focus:ring-[#d6a137]/10"
        />
      </div>
    </label>
  );
}
