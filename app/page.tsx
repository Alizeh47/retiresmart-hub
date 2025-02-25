import HeroSection from '@/components/HeroSection';
import GetDirectionsSection from '@/components/GetDirectionsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ServicesSection from '@/components/ServicesSection';
import PoweredBySection from '@/components/PoweredBySection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <GetDirectionsSection />
      <TestimonialsSection />
      <ServicesSection />
      <PoweredBySection />
    </main>
  );
}
