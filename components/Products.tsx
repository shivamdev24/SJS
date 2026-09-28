const products = [
  ["पंचमुखी रुद्राक्ष (असली)", "₹1,250", "/images/product-1.jpg"],
  ["पीला पुखराज (Yellow Sapphire)", "₹28,500", "/images/product-2.jpg"],
  ["शनि यंत्र", "₹799", "/images/product-3.jpg"],
  ["रत्न एवं पूजा किट", "₹950", "/images/product-4.jpg"],
  ["11 मुखी रुद्राक्ष", "₹4,200", "/images/product-5.jpg"],
  ["लाल मूंगा (Red Coral)", "₹3,800", "/images/product-6.jpg"],
];
export default function Products() {
  return (
    <section className="section-shell py-10">
      <div className="flex items-end justify-between">
        <div>
          <div className="section-kicker text-left">
            पवित्र आध्यात्मिक संग्रह
          </div>
          <h2 className="section-title">पूजा, रत्न और ज्योतिष उत्पाद</h2>
        </div>
        <a
          href="#contact"
          className="hidden text-xs font-bold text-[#b20d0d] sm:block"
        >
          सभी उत्पाद देखें →
        </a>
      </div>
      <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {products.map(([name, price, img]) => (
          <article key={name} className="card overflow-hidden">
            <div className="relative aspect-[1.15] bg-[#eee8de]">
              <img
                src={img}
                alt={name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 grid place-items-center text-5xl text-[#b20d0d]/20">
                ॐ
              </div>
              <span className="absolute left-2 top-2 rounded bg-[#b20d0d] px-2 py-1 text-[9px] font-bold text-white">
                पवित्र
              </span>
            </div>
            <div className="p-3">
              <div className="text-[10px] text-[#b20d0d]">★★★★★</div>
              <h3 className="mt-1 text-sm font-bold">{name}</h3>
              <div className="mt-2 font-bold text-[#b20d0d]">{price}</div>
              <button className="mt-3 w-full rounded-lg bg-[#b20d0d] py-2 text-xs font-bold text-white">
                कार्ट में जोड़ें
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
