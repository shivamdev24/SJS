// import Link from "next/link";
// import { ArrowRight, Menu } from "lucide-react";
// import Image from "next/image";

// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Heart, ShoppingCart, UserRound } from "lucide-react";
// import { Button } from "@base-ui/react/button";
// const navigation = [
//   { label: "Home", href: "/" },
//   { label: "Our Store", href: "/store" },
//   { label: "Kundali", href: "/kundali" },
//   { label: "Pooja & Katha", href: "/pooja" },
//   { label: "About", href: "/about" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Header() {
//   return (
//     <header className="sticky w-full top-0 z-50 border-b border-black/5 bg-white backdrop-blur-xl">
//       <div className="mx-auto flex h-16 w-[92%] max-w-7xl items-center justify-between">
//         {/* Logo */}
//         <Link
//           href="/"
//           aria-label="Refinix Solutions home"
//           className="text-lg font-semibold tracking-[-0.05em] overflow-hidden"
//         >
//           <Image
//             src="/images/SJS-Logo.png"
//             alt="Refinix Solutions"
//             width={50}
//             height={50}
//             className="overflow-hidden rounded-lg"
//           />
//         </Link>

//         <div className="flex gap-10">
//           {/* Desktop navigation */}
//           <nav
//             aria-label="Main navigation"
//             className="hidden items-center gap-7 text-[10px] uppercase tracking-[0.16em] text-neutral-500 md:flex"
//           >
//             {navigation.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className="transition-colors duration-300 text-black hover:text-[#9C080F] hover:bg-white p-2"
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </nav>
//           {/* cart whish llist icon andd login/signup button  */}

//           {/* Cart, Wishlist & Login */}
//           <div className="flex items-center gap-2">
//             {/* Wishlist */}
//             <button
//               aria-label="Wishlist"
//               className="group relative grid h-10 w-10 place-items-center rounded-full border border-[#7b1e2b]/15 bg-white/60 text-[#6f1010] transition-all duration-300 hover:border-[#c79a4a]/50 hover:bg-[#fff8ed] hover:text-[#a47732]"
//             >
//               <Heart className="h-[18px] w-[18px] transition-transform group-hover:scale-110" />

//               {/* Wishlist count */}
//               <span className="absolute -right-1 -top-1 grid h-[17px] min-w-[17px] place-items-center rounded-full bg-[#7b1e2b] px-1 text-[9px] font-bold text-white">
//                 2
//               </span>
//             </button>

//             {/* Cart */}
//             <button
//               aria-label="Shopping Cart"
//               className="group relative grid h-10 w-10 place-items-center rounded-full border border-[#7b1e2b]/15 bg-white/60 text-[#6f1010] transition-all duration-300 hover:border-[#c79a4a]/50 hover:bg-[#fff8ed] hover:text-[#a47732]"
//             >
//               <ShoppingCart className="h-[18px] w-[18px] transition-transform group-hover:scale-110" />

//               {/* Cart count */}
//               <span className="absolute -right-1 -top-1 grid h-[17px] min-w-[17px] place-items-center rounded-full bg-[#7b1e2b] px-1 text-[9px] font-bold text-white">
//                 3
//               </span>
//             </button>

//             {/* Divider */}
//             <div className="mx-1 h-7 w-px bg-[#7b1e2b]/15" />

//             {/* Login / Signup */}
//             <Button className="h-10 rounded-full bg-[#7b1e2b] p-3 flex items-center justify-center text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#5f0d0d] hover:shadow-md">
//               <UserRound className="mr-2 h-4 w-4" />
//             </Button>
//           </div>
//         {/* Mobile menu */}
//         <Sheet>
//           <SheetTrigger
//             aria-label="Open navigation menu"
//             className="inline-flex h-10 w-10 items-center justify-center border border-black/10 bg-white md:hidden"
//           >
//             <Menu className="h-4 w-4" />
//           </SheetTrigger>

//           <SheetContent
//             side="right"
//             className="w-[88%] max-w-sm border-l border-black/10 bg-[#f7f7f5] p-0"
//           >
//             <SheetHeader className="border-b border-black/10 px-6 py-5 text-left">
//               <SheetTitle className="text-left text-lg font-semibold tracking-[-0.05em]">
//                 <Image
//                   src="/images/SJS-logo.png"
//                   alt="Sanskar Jyotish Sagar"
//                   width={50}
//                   height={50}
//                   className="rounded-lg"
//                 />
//               </SheetTitle>
//             </SheetHeader>

//             <div className="flex h-[calc(100%-81px)] flex-col justify-between px-6 py-7">
//               <nav className="flex flex-col">
//                 {navigation.map((item, index) => (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className="flex items-center justify-between border-b border-black/10 py-5 text-2xl font-medium tracking-[-0.04em]"
//                   >
//                     <span>{item.label}</span>
//                     <ArrowRight className="h-5 w-5 text-[#e34a27]" />
//                   </Link>
//                 ))}
//               </nav>

//               <div>
//                 <Link
//                   href="/contact"
//                   className="flex w-full items-center justify-center gap-2 bg-[#b91c07] px-5 py-4 text-[10px] font-medium uppercase tracking-[0.16em] text-white transition hover:bg-black"
//                 >
//                   Contact now
//                   <ArrowRight className="h-3.5 w-3.5" />
//                 </Link>
//               </div>
//             </div>
//           </SheetContent>
//         </Sheet>
//         </div>

//       </div>
//     </header>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Menu, ShoppingCart, UserRound } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Our Store", href: "/store" },
  { label: "Kundali", href: "/kundali" },
  { label: "Pooja & Katha", href: "/pooja" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#741010]/10 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-[92%] max-w-7xl items-center justify-between">
        {/* ================= LOGO ================= */}
        <Link
          href="/"
          aria-label="Sanskar Jyotish Sagar home"
          className="relative flex shrink-0 items-center"
        >
          <Image
            src="/images/SJS-logo.png"
            alt="Sanskar Jyotish Sagar"
            width={58}
            height={58}
            priority
            className="h-[54px] w-[54px] object-contain"
          />
        </Link>

        {/* ================= DESKTOP AREA ================= */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Navigation */}
          <nav aria-label="Main navigation" className="flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative rounded-md px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5f4c48] transition-colors duration-300 hover:text-[#8d1717]"
              >
                {item.label}

                {/* Gold underline */}
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-[#c79a4a] transition-all duration-300 group-hover:w-1/2" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 border-l border-[#741010]/10 pl-6">
            {/* Wishlist */}
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="group relative grid h-10 w-10 place-items-center rounded-full border border-[#741010]/10 bg-white text-[#741010] transition-all duration-300 hover:border-[#c79a4a]/40 hover:bg-[#fff8ed] hover:text-[#a47732]"
            >
              <Heart className="h-[17px] w-[17px] transition-transform group-hover:scale-110" />

              <span className="absolute -right-1 -top-1 grid h-[17px] min-w-[17px] place-items-center rounded-full bg-[#741010] px-1 text-[9px] font-bold text-white">
                2
              </span>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="group relative grid h-10 w-10 place-items-center rounded-full border border-[#741010]/10 bg-white text-[#741010] transition-all duration-300 hover:border-[#c79a4a]/40 hover:bg-[#fff8ed] hover:text-[#a47732]"
            >
              <ShoppingCart className="h-[17px] w-[17px] transition-transform group-hover:scale-110" />

              <span className="absolute -right-1 -top-1 grid h-[17px] min-w-[17px] place-items-center rounded-full bg-[#741010] px-1 text-[9px] font-bold text-white">
                3
              </span>
            </Link>

            {/* Login */}
            <Link href="/login" className="">
              <Button className="ml-2 h-10 flex gap-1 rounded-full bg-[#741010] px-5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#5b0808] hover:shadow-md">
                <UserRound className=" h-4 w-4" />
                Login
              </Button>
            </Link>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile cart */}
          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="relative grid h-10 w-10 place-items-center rounded-full border border-[#741010]/10 text-[#741010]"
          >
            <ShoppingCart className="h-[17px] w-[17px]" />

            <span className="absolute -right-1 -top-1 grid h-[16px] min-w-[16px] place-items-center rounded-full bg-[#741010] px-1 text-[8px] font-bold text-white">
              3
            </span>
          </Link>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger
              aria-label="Open navigation menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-[#741010]/10 bg-white text-[#741010] transition hover:bg-[#fff8ed]"
            >
              <Menu className="h-[18px] w-[18px]" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[88%] max-w-sm border-l border-[#741010]/10 bg-[#fffaf5] p-0"
            >
              {/* Mobile header */}
              <SheetHeader className="border-b border-[#741010]/10 px-6 py-5 text-left">
                <SheetTitle className="text-left">
                  <Image
                    src="/images/SJS-Logo.png"
                    alt="Sanskar Jyotish Sagar"
                    width={52}
                    height={52}
                    className="object-contain"
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="flex h-[calc(100%-85px)] flex-col justify-between px-6 py-7">
                {/* Links */}
                <nav className="flex flex-col">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center justify-between border-b border-[#741010]/10 py-5 text-xl font-medium tracking-tight text-[#4b0808]"
                    >
                      <span className="transition-colors group-hover:text-[#8d1717]">
                        {item.label}
                      </span>

                      <ArrowRight className="h-5 w-5 text-[#a47732] transition-transform group-hover:translate-x-1" />
                    </Link>
                  ))}
                </nav>

                {/* Mobile actions */}
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/wishlist"
                      className="flex items-center justify-center gap-2 rounded-xl border border-[#741010]/15 py-3 text-xs font-semibold text-[#741010]"
                    >
                      <Heart className="h-4 w-4" />
                      Wishlist
                    </Link>

                    <Link
                      href="/cart"
                      className="flex items-center justify-center gap-2 rounded-xl border border-[#741010]/15 py-3 text-xs font-semibold text-[#741010]"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Cart
                    </Link>
                  </div>

                  <Link href="/login" >
                    <Button className="w-full flex gap-1 rounded-xl bg-[#741010] py-6 text-xs font-semibold uppercase tracking-[0.15em] text-white hover:bg-[#5b0808]">
                      <UserRound className="mr-2 h-4 w-4" />
                      Login / Sign Up
                    </Button>
                  </Link>

                  <Link
                    href="/contact"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#c79a4a]/40 bg-[#c79a4a]/5 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8a641f] transition hover:bg-[#c79a4a]/10"
                  >
                    Contact Us
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}