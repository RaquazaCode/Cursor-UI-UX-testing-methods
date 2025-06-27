import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import About from "../components/About";
import BenefitsCarousel from "../components/BenefitsCarousel";
import Testimonials from "../components/Testimonials";
import Portfolio from "../components/Portfolio";
import ServicesGrid from "../components/ServicesGrid";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col gap-24">
        <Hero />
        <HowItWorks />
        <About />
        <BenefitsCarousel />
        <Testimonials />
        <Portfolio />
        <ServicesGrid />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
