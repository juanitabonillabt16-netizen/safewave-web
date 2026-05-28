import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { StatsBar } from "@/components/StatsBar";
import { Problems } from "@/components/Problems";
import { Program } from "@/components/Program";
import { WhySafeWave } from "@/components/WhySafeWave";
import { HowItWorks } from "@/components/HowItWorks";
import { Gallery } from "@/components/Gallery";
// import { Testimonials } from "@/components/Testimonials"; // Oculto hasta tener 4 testimonios mas reales
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <StatsBar />
      <Problems />
      <Program />
      <WhySafeWave />
      <HowItWorks />
      <Gallery />
      {/* <Testimonials /> -- Reactivar cuando tengamos 5 testimonios reales */}
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
