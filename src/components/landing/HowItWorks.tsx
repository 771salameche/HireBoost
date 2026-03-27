import { Upload, Cpu, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: Upload, title: "Upload Your CV", desc: "Drag & drop your resume or paste text directly." },
  { icon: Cpu, title: "AI Analyzes", desc: "Our AI scans, scores, and identifies improvement areas." },
  { icon: Rocket, title: "Get Results", desc: "Receive tailored suggestions, optimized content, and more." },
];

export const HowItWorks = () => (
  <section id="how-it-works" className="py-24 border-t border-border/50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">How It <span className="gold-text">Works</span></h2>
        <p className="mt-4 text-muted-foreground">Three simple steps to a better career.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
              <s.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <div className="text-sm font-semibold text-primary mb-2">Step {i + 1}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
