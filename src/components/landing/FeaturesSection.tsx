import { FileSearch, Target, Wand2, Mic } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: FileSearch,
    title: "CV Analysis",
    desc: "Get an instant AI-powered breakdown of your resume with actionable improvement tips.",
  },
  {
    icon: Target,
    title: "Job Matching",
    desc: "Compare your CV against any job description and discover missing keywords.",
  },
  {
    icon: Wand2,
    title: "AI Generation",
    desc: "Generate optimized CVs and tailored cover letters in seconds.",
  },
  {
    icon: Mic,
    title: "Interview Simulator",
    desc: "Practice with realistic AI interview questions and get instant feedback.",
  },
];

export const FeaturesSection = () => (
  <section id="features" className="py-24 border-t border-border/50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Everything You Need to <span className="gold-text">Land the Job</span></h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Powerful AI tools designed to give you an unfair advantage in your job search.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <f.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
