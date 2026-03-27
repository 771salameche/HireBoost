import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => (
  <section className="relative pt-32 pb-32 overflow-hidden bg-[#0a0a0c]">
    {/* Animated Mesh Background */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-primary/5 blur-[100px]" />
    </div>
    
    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary mb-10 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5" />
          The Future of Career Growth
        </div>
        
        <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tight max-w-5xl mx-auto leading-[0.95] mb-8">
          Elevate Your Career <br />
          <span className="gold-text">with Intelligence</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          The premium AI-driven platform for elite professionals. Optimize your CV, 
          master interviews, and secure your next executive role.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/dashboard/cv-analyzer">
            <Button size="lg" className="gold-gradient text-primary-foreground font-bold text-lg px-10 py-8 hover:opacity-90 transition-all shadow-2xl shadow-primary/20 rounded-2xl gold-shimmer relative overflow-hidden group">
              Analyze My CV
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button size="lg" variant="outline" className="text-lg px-10 py-8 border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 rounded-2xl transition-all">
              Executive Dashboard
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-32 pt-12 border-t border-white/5"
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-10">Trusted by professionals at</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale contrast-125">
          {/* Mock company logos or names */}
          {["GOLDMAN SACHS", "MCKINSEY", "GOOGLE", "APPLE", "TESLA"].map((name) => (
            <span key={name} className="text-sm font-black tracking-tighter">{name}</span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
