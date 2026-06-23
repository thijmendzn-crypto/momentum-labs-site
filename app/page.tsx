import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Results from '@/components/Results';
import About from '@/components/About';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <Process />
      <Results />
      <About />
      <CTASection />
      <Footer />
    </main>
  );
}
