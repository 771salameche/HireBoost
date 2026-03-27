import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { LandingFooter } from "@/components/landing/LandingFooter";

const Index = () => (
  <div className="dark min-h-screen bg-background text-foreground">
    <LandingNavbar />
    <HeroSection />
    <FeaturesSection />
    <HowItWorks />
    <TestimonialsSection />
    <PricingSection />
    <LandingFooter />
  </div>
);

export default Index;
