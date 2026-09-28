import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import KundliForm from "@/components/KundliForm";
import Services from "@/components/Services";
import FeaturedServices from "@/components/FeaturedServices";
import WhyUs from "@/components/WhyUs";
import PromoBanner from "@/components/PromoBanner";
import ContactForm from "@/components/ContactForm";
import TrustBar from "@/components/TrustBar";
import Footer from "@/components/Footer";
import AstrologyBackground from "@/components/ui/AstrologyDecor";
import TopBanner from "@/components/TopBanner";
import ProductSection from "@/components/Product";

export default function Home() {
  return (
    <main  >
      <TopBanner/>
      <Header />
      <Hero />
      <About />
    
          <KundliForm />

      <Services />
      <FeaturedServices />
      <WhyUs />
      <ProductSection />
      <PromoBanner />
      <ContactForm />
      <TrustBar />
      <Footer />
    </main>
  );
}
