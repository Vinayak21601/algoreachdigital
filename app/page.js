import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import MarqueeStrip from "@/components/MarqueeStrip";
import TrustBanner from "@/components/TrustBanner";

export default function Home() {
  return (
    <main className="font-sans antialiased text-white bg-[#030303] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <Stats />
      <CTABanner
        title="Let's Ignite Your Growth"
        subtitle="Partner with us to create data-driven strategies that deliver real results."
        buttonText="Get a Free Consultation"
        variant="gradient"
      />
      <Services />
      <TrustBanner />
      <Portfolio />
      <CTABanner
        title="Have a Project in Mind?"
        subtitle="From concept to launch, we bring your digital vision to life."
        buttonText="Let's Talk"
        variant="glass"
      />
      <Footer />
    </main>
  );
}
