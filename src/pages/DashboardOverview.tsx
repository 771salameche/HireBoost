import { motion } from "framer-motion";
import { TrendingUp, FileText, Target, Lightbulb, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const cards = [
  { title: "CV Score", value: "78/100", icon: FileText, change: "+5 from last", progress: 78 },
  { title: "Job Match", value: "65%", icon: Target, change: "3 jobs matched", progress: 65 },
  { title: "Last Analysis", value: "2h ago", icon: TrendingUp, change: "Resume_v3.pdf" },
  { title: "Tips Available", value: "12", icon: Lightbulb, change: "3 high priority" },
];

const tips = [
  "Add measurable achievements to your work experience section.",
  "Include relevant keywords from target job descriptions.",
  "Shorten your summary to 2-3 impactful sentences.",
  "Add links to your portfolio or GitHub profile.",
  "Consider adding a skills section with proficiency levels.",
];

const DashboardOverview = () => (
  <div className="space-y-10">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h1 className="text-4xl font-heading font-bold tracking-tight">Welcome back, <span className="gold-text">John</span></h1>
        <p className="text-muted-foreground text-base mt-2">Here's a high-level overview of your career progress.</p>
      </div>
      <div className="flex gap-3">
        <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted-foreground">
          Last updated: Today, 10:45 AM
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="premium-glass rounded-2xl p-6 hover:border-primary/30 transition-colors group relative overflow-hidden"
        >
          <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
            <c.icon className="h-24 w-24 text-primary rotate-12" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary/80">{c.title}</span>
              <div className="p-2 rounded-lg bg-primary/10">
                <c.icon className="h-4 w-4 text-primary" />
              </div>
            </div>
            <div className="text-3xl font-heading font-bold mb-2">{c.value}</div>
            {c.progress !== undefined && (
              <div className="mt-4 mb-2">
                <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${c.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full rounded-full gold-gradient shadow-[0_0_10px_rgba(212,175,55,0.3)]" 
                  />
                </div>
              </div>
            )}
            <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-2">
              <span className="h-1 w-1 rounded-full bg-primary/40" />
              {c.change}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="lg:col-span-2 premium-glass rounded-3xl p-8 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 opacity-[0.02]">
          <Lightbulb className="h-48 w-48 text-primary" />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
            <div className="h-8 w-1 gold-gradient rounded-full" />
            Actionable Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors"
              >
                <span className="w-8 h-8 rounded-xl gold-gradient flex items-center justify-center text-xs text-primary-foreground font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <p className="text-[14px] leading-relaxed text-muted-foreground">{t}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="premium-glass rounded-3xl p-8 flex flex-col items-center justify-center text-center group"
      >
        <div className="h-20 w-20 rounded-3xl gold-gradient flex items-center justify-center mb-6 shadow-2xl shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
          <Zap className="h-10 w-10 text-primary-foreground" />
        </div>
        <h3 className="text-xl font-heading font-bold mb-3">Professional CV Review</h3>
        <p className="text-sm text-muted-foreground mb-8 leading-relaxed px-4">
          Get a human-like detailed analysis of your CV with our advanced AI model.
        </p>
        <button className="w-full py-4 rounded-2xl gold-gradient text-primary-foreground font-bold shadow-xl shadow-primary/10 hover:opacity-90 transition-all gold-shimmer">
          Start Deep Analysis
        </button>
      </motion.div>
    </div>
  </div>
);

export default DashboardOverview;
