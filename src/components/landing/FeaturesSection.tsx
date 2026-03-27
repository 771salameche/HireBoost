import { motion } from "framer-motion";
import { Brain, Search, Terminal, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI CV Analyzer",
    description: "Upload your CV and get instant feedback on how to improve it for ATS systems and human recruiters."
  },
  {
    icon: Search,
    title: "Smart Job Matcher",
    description: "Our AI finds the best job openings specifically tailored to your skills and experience."
  },
  {
    icon: Terminal,
    title: "Interview Simulator",
    description: "Practice with our AI-driven interview simulator that provides real-time feedback on your answers."
  },
  {
    icon: Zap,
    title: "Cover Letter Generator",
    description: "Generate professional cover letters in seconds that are perfectly aligned with the job description."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful <span className="gold-text">Features</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to accelerate your career growth and land your next big opportunity.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
