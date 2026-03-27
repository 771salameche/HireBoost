import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    {/* Glow effect */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
    
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8">
          <Sparkles className="h-3.5 w-3.5" />
          AI-Powered Career Tools
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1]">
          Boost Your Hiring Chances{" "}
          <span className="gold-text">with AI</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Analyze your CV, match it with dream jobs, generate optimized applications, 
          and practice interviews — all powered by advanced AI.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/dashboard/cv-analyzer">
            <Button size="lg" className="gold-gradient text-primary-foreground font-semibold text-base px-8 py-6 hover:opacity-90 transition-opacity animate-pulse-gold">
              Analyze My CV
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button size="lg" variant="outline" className="text-base px-8 py-6 border-border hover:bg-secondary">
              View Dashboard
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
      >
        {[
          { value: "50K+", label: "CVs Analyzed" },
          { value: "89%", label: "Success Rate" },
          { value: "12K+", label: "Users" },
          { value: "4.9★", label: "User Rating" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-2xl md:text-3xl font-bold gold-text">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);
