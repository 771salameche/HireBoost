import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    desc: "Perfect for getting started",
    features: ["3 CV analyses/month", "Basic job matching", "1 cover letter", "Limited interview practice"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    desc: "For serious job seekers",
    features: ["Unlimited CV analyses", "Advanced job matching", "Unlimited generation", "Full interview simulator", "Priority AI processing", "Export to PDF"],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
];

export const PricingSection = () => (
  <section id="pricing" className="py-24 border-t border-border/50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent <span className="gold-text">Pricing</span></h2>
        <p className="mt-4 text-muted-foreground">Start free. Upgrade when you're ready.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`rounded-xl p-8 border ${
              p.highlighted
                ? "border-primary/50 glow-gold bg-card"
                : "border-border glass-card"
            }`}
          >
            {p.highlighted && (
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">Most Popular</div>
            )}
            <h3 className="text-2xl font-bold">{p.name}</h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-bold">{p.price}</span>
              {p.period && <span className="text-muted-foreground">{p.period}</span>}
            </div>
            <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
            <ul className="mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/dashboard" className="block mt-8">
              <Button
                className={`w-full ${
                  p.highlighted
                    ? "gold-gradient text-primary-foreground font-semibold hover:opacity-90"
                    : ""
                }`}
                variant={p.highlighted ? "default" : "outline"}
              >
                {p.cta}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);
