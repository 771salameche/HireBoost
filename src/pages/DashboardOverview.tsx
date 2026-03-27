import { motion } from "framer-motion";
import { TrendingUp, FileText, Target, Lightbulb } from "lucide-react";
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
  <div className="space-y-8">
    <div>
      <h1 className="text-2xl font-bold">Welcome back, <span className="gold-text">John</span></h1>
      <p className="text-muted-foreground text-sm mt-1">Here's your career dashboard overview.</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="glass-card rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground">{c.title}</span>
            <c.icon className="h-4 w-4 text-primary" />
          </div>
          <div className="text-2xl font-bold">{c.value}</div>
          {c.progress !== undefined && (
            <Progress value={c.progress} className="mt-3 h-1.5 [&>div]:gold-gradient" />
          )}
          <p className="text-xs text-muted-foreground mt-2">{c.change}</p>
        </motion.div>
      ))}
    </div>

    <div className="glass-card rounded-xl p-6">
      <h2 className="text-lg font-semibold mb-4">Improvement Tips</h2>
      <ul className="space-y-3">
        {tips.map((t, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
            <span className="w-6 h-6 rounded-full gold-gradient flex items-center justify-center text-xs text-primary-foreground font-bold flex-shrink-0 mt-0.5">
              {i + 1}
            </span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default DashboardOverview;
