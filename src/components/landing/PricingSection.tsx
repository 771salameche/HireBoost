import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for a quick CV check",
    features: ["3 CV Analyzes per month", "Basic Job Matching", "Limited Interview Simulation", "Standard Support"]
  },
  {
    name: "Pro",
    price: "$19",
    description: "Best for active job seekers",
    popular: true,
    features: ["Unlimited CV Analyzes", "Advanced AI Matching", "Unlimited Interview Simulation", "Cover Letter Generator", "Priority Support"]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For recruitment agencies",
    features: ["Bulk CV Processing", "Custom AI Models", "API Access", "Dedicated Account Manager", "Custom Branding"]
  }
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent <span className="gold-text">Pricing</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Choose the plan that's right for your career stage.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 rounded-2xl relative flex flex-col ${tier.popular ? 'border-primary shadow-lg scale-105 z-10' : ''}`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 gold-gradient text-primary-foreground px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Crown className="h-3 w-3" />
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{tier.description}</p>
              </div>
              <div className="space-y-4 mb-8 flex-1">
                {tier.features.map(feature => (
                  <div key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button className={`w-full h-12 ${tier.popular ? 'gold-gradient text-primary-foreground font-bold' : 'variant-outline border-primary/20'}`}>
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
