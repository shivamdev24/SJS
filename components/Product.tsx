"use client";

import Image from "next/image";
import { Heart, ShoppingCart, ArrowUpRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "./reveal";

const products = [
  {
    id: 1,
    category: "Yantra",
    title: "Shree Yantra",
    price: "₹1,101",
    image: "/images/p1.jfif",
    badge: "Bestseller",
    description:
      "A sacred yantra traditionally used for prosperity, abundance and spiritual harmony.",
  },
  {
    id: 2,
    category: "Rudraksha",
    title: "5 Mukhi Rudraksha",
    price: "₹501",
    image: "/images/p2.jfif",
    badge: "Popular",
    description:
      "A traditional Rudraksha associated with peace, meditation and spiritual balance.",
  },
  {
    id: 3,
    category: "Pooja Samagri",
    title: "Navgraha Pooja Kit",
    price: "₹1,251",
    image: "/images/p3.jfif",
    badge: "Recommended",
    description:
      "Essential pooja items carefully prepared for traditional Navgraha worship.",
  },
  {
    id: 4,
    category: "Gemstone",
    title: "Vedic Astrology Gemstone",
    price: "₹2,100",
    image: "/images/p4.jfif",
    badge: "Premium",
    description:
      "A natural gemstone selected according to traditional Vedic astrology principles.",
  },
];

export default function ProductSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[#fffaf5] py-20 sm:py-24"
    >
    {/* <section
      id="products"
      className="relative overflow-hidden bg-[#fffaf5] py-20 sm:py-24"
    > */}
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-150px] top-20 h-[350px] w-[350px] rounded-full bg-[#7b1e2b]/10 blur-[120px]" />
        <div className="absolute right-[-150px] bottom-10 h-[400px] w-[400px] rounded-full bg-[#d6a94d]/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#6f1010 1px, transparent 1px), linear-gradient(90deg, #6f1010 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal direction='up' delay={0}>

            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#9a722d]">
              <Sparkles className="h-3.5 w-3.5" />
              Sacred Collection
            </div>
            </Reveal>
<Reveal direction='up' delay={0.2}>

            <h2 className="font-serif text-4xl font-semibold tracking-tight text-[#4c0808] sm:text-5xl">
              Spiritual products for
              <span className="block text-[#941e24]">your journey.</span>
            </h2>
</Reveal>
<Reveal direction='up' delay={0.3}>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#705c56] sm:text-base">
              Explore sacred products inspired by Vedic astrology, Sanatan
              traditions and spiritual practices.
            </p>
</Reveal>
          </div>
<Reveal direction='up' delay={0.3}>

          <Button
            variant="outline"
            className="group w-fit rounded-full border-[#741010]/20 bg-transparent px-6 text-[#741010] hover:bg-[#741010] hover:text-white"
          >
            View All Products
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Button>
</Reveal>
        </div>

        {/* Product grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Reveal direction='up' key={product.id} delay={index * 0.3}>

            <Card
              className="group relative overflow-hidden rounded-[24px] border border-[#7b1e2b]/15 bg-white p-3 shadow-[0_8px_30px_rgba(75,8,8,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-[#c79a4a]/50 hover:shadow-[0_20px_45px_rgba(75,8,8,0.13)]"
            >
              {/* IMAGE */}
              <div className="relative aspect-[1/1.05] overflow-hidden rounded-[18px] bg-[#f3e8db]">
                <img
                  src={product.image}
                  alt={product.title}
                  
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                {/* TAG */}
                <Badge className="absolute left-3 top-3 rounded-full border border-white/30 bg-[#7b1010]/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#ffe9b4] backdrop-blur-sm hover:bg-[#7b1010]">
                  {product.badge}
                </Badge>
              </div>

              {/* CONTENT */}
              <div className="px-2 pb-2 pt-4">
                {/* Category + Price */}
                <div className="flex flex-col items-start justify-between gap-3">
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a07736]">
                      {product.category}
                    </p>
                  <div className="min-w-0 w-full flex items-center justify-between">

                    <h3 className="font-serif w-40 text-lg font-semibold leading-tight text-[#4b0808]">
                      {product.title}
                    </h3>
                  <p className="shrink-0 pt-1 text-base font-bold text-[#8c171d]">
                    {product.price}
                  </p>
                  </div>

                </div>

                {/* Description */}
                <p className="mt-3 line-clamp-2 min-h-[40px] text-xs leading-5 text-[#79645e]">
                  {product.description}
                </p>

                {/* Divider */}
                <div className="my-4 h-px bg-[#eadbca]" />

                {/* Bottom actions */}
                <div className="flex items-center gap-2">
                  {/* Buy Now */}
                  <Button className="h-10 flex-1 rounded-xl bg-[#741010] text-xs font-semibold text-white shadow-sm transition-all hover:bg-[#5d0808] hover:shadow-md">
                    Buy Now
                  </Button>

                  {/* Wishlist */}
                  <button
                    aria-label={`Add ${product.title} to wishlist`}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#741010]/15 bg-[#fffaf5] text-[#741010] transition-all hover:border-[#741010]/30 hover:bg-[#741010] hover:text-white"
                  >
                    <Heart className="h-[17px] w-[17px]" />
                  </button>

                  {/* Cart */}
                  <button
                    aria-label={`Add ${product.title} to cart`}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#741010]/15 bg-[#fffaf5] text-[#741010] transition-all hover:border-[#741010]/30 hover:bg-[#741010] hover:text-white"
                  >
                    <ShoppingCart className="h-[17px] w-[17px]" />
                  </button>
                </div>
              </div>

              {/* Bottom gold accent */}
              <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#c79a4a] transition-all duration-500 group-hover:w-1/2" />
            </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
