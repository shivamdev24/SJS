import {
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  
} from "lucide-react";
import AstrologyDecor from "./ui/AstrologyDecor";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
const quickLinks = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Kundli Consultation", "#kundli"],
  ["Services", "#services"],
  ["Articles", "#articles"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#360402] pt-16">
      {/* Background decoration */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#a80707 1px, transparent 1px), linear-gradient(90deg, #a80707 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[30px] border-[#d6a137]/10">
          <div className="absolute inset-8 rounded-full border border-[#a80707]/10" />
          <div className="absolute inset-20 rounded-full border border-[#d6a137]/10" />
        </div>

        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#a80707]/5 blur-[100px]" />
      </div> */}

      <AstrologyDecor variant="hero" />

      <div className="section-shell relative z-10 max-w-7xl mx-auto p-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-8">
            <div className="inline-flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#a80707] text-lg text-[#ffd88b] shadow-lg shadow-[#a80707]/20">
                ॐ
              </div>

              <div>
                <div className="text-lg font-extrabold text-[#a40d0d]">
                  Sanskar Jyotish Sagar
                </div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-white">
                  Vedic Astrology & Guidance
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs leading-6 text-white">
              Personalized guidance rooted in Vedic astrology, Sanatan
              traditions and spiritual wisdom for important areas of life.
            </p>

            {/* Social */}
            <div className="mt-5 flex gap-2">
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-[#e1d8ed] bg-white text-[#a80707] transition hover:-translate-y-1 hover:bg-[#a80707] hover:text-white"
              >
                <AiFillInstagram size={20} />
              
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="grid h-9 w-9 place-items-center rounded-full border border-[#e1d8ed] bg-white text-[#a80707] transition hover:-translate-y-1 hover:bg-[#a80707] hover:text-white"
              >
                <FaYoutube size={18} />
           
              </a>

              <a
                href="https://wa.me/917018842425"
                aria-label="WhatsApp"
                className="grid h-9 w-9 place-items-center rounded-full border border-[#e1d8ed] bg-white text-[#a80707] transition hover:-translate-y-1 hover:bg-[#a80707] hover:text-white"
              >
                <MessageCircle size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-bold text-white">
              <Sparkles size={14} className="text-[#d6a137]" />
              Quick Links
            </h3>

            <div className="mt-5 grid gap-3">
              {quickLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-center gap-2 text-xs text-white transition hover:text-[#a80707]"
                >
                  <span className="h-px w-0 bg-[#d6a137] transition-all group-hover:w-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-bold text-white">
              <Sparkles size={14} className="text-[#d6a137]" />
              Contact Us
            </h3>

            <div className="mt-5 space-y-4 text-xs text-white">
              <a
                href="tel:+917018842425"
                className="flex items-start gap-3 transition hover:text-[#a80707]"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-[#a80707]">
                  <Phone size={14} />
                </span>

                <span>
                  <span className="block text-[9px] uppercase tracking-wider text-gray-400">
                    Phone
                  </span>
                  <span className="mt-1 block font-bold">+91 70188 42425</span>
                </span>
              </a>

              <div className="flex items-start gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-[#a80707]">
                  <MapPin size={14} />
                </span>

                <span>
                  <span className="block text-[9px] uppercase tracking-wider text-gray-400">
                    Location
                  </span>
                  <span className="mt-1 block font-medium">
                    Uttar Pradesh, India
                  </span>
                </span>
              </div>

              <a
                href="https://wa.me/917018842425"
                className="inline-flex items-center gap-2 font-bold text-[#a80707] bg-[#f1e4e4] p-3 rounded-lg hover:bg-[#740707] hover:text-white duration-300"
              >
                <MessageCircle size={14} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-bold text-white">
              <Clock3 size={14} className="text-[#d6a137]" />
              Consultation Hours
            </h3>

            <div className="mt-5 rounded-2xl border border-[#e1d8ed] bg-white/70 p-5">
              <p className="text-xs font-bold text-[#451313]">
                Monday – Sunday
              </p>

              <p className="mt-2 text-xs leading-6 text-gray-800">
                9:00 AM – 9:00 PM
              </p>

              <a
                href="tel:+917018842425"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#a80707] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#8d0606] hover:shadow-lg"
              >
                Contact Now
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-[#dfd7ef] py-5 text-center text-[10px] text-gray-200 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© 2026 Sanskar Jyotish Sagar. All rights reserved.</p>

          <div className="flex justify-center gap-5 sm:justify-end">
            <a href="#" className="transition hover:text-[#a80707]">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-[#a80707]">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
