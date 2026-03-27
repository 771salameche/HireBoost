import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";

const fakeResult = {
  score: 65,
  missingKeywords: ["Agile", "CI/CD", "Kubernetes", "TypeScript", "System Design", "Microservices"],
  recommendations: [
    "Add experience with Agile/Scrum methodologies to your work history.",
    "Highlight any CI/CD pipeline experience, even from personal projects.",
    "Consider adding a 'Technical Skills' section featuring Kubernetes and TypeScript.",
    "Include system design examples or case studies in your portfolio.",
    "Mention cross-functional collaboration and stakeholder communication skills.",
  ],
};

const JobMatcher = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<typeof fakeResult | null>(null);
  const [cv, setCv] = useState("Experienced software engineer with 5+ years in React, Node.js, and Python. Led teams of 3-5 developers. Built scalable web applications serving 100K+ users.");
  const [jd, setJd] = useState("We're looking for a Senior Full-Stack Engineer with expertise in TypeScript, React, Node.js, Kubernetes, and CI/CD pipelines. Experience with Agile and system design required.");

  const match = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => { setLoading(false); setResult(fakeResult); }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Job <span className="gold-text">Matcher</span></h1>
        <p className="text-sm text-muted-foreground mt-1">Compare your CV against a job description.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Your CV Summary</label>
          <Textarea value={cv} onChange={(e) => setCv(e.target.value)} rows={6} className="bg-secondary border-border resize-none" placeholder="Paste your CV text..." />
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Job Description</label>
          <Textarea value={jd} onChange={(e) => setJd(e.target.value)} rows={6} className="bg-secondary border-border resize-none" placeholder="Paste the job description..." />
        </div>
      </div>

      <Button onClick={match} disabled={loading} className="w-full gold-gradient text-primary-foreground font-semibold py-6 hover:opacity-90">
        {loading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" />Matching...</> : "Match Now"}
      </Button>

      <AnimatePresence>
        {loading && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><div className="h-48 rounded-xl bg-secondary animate-pulse" /></motion.div>}

        {result && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-sm text-muted-foreground mb-2">Match Score</div>
              <div className="text-5xl font-bold gold-text">{result.score}%</div>
              <Progress value={result.score} className="mt-4 h-2 max-w-xs mx-auto [&>div]:gold-gradient" />
            </div>

            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-sm mb-3 text-red-400">Missing Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {result.missingKeywords.map((k) => (
                  <span key={k} className="px-3 py-1 rounded-full text-xs border border-red-400/30 text-red-400 bg-red-400/10">{k}</span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-sm mb-3 text-primary">Recommendations</h3>
              <ul className="space-y-2">
                {result.recommendations.map((r, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full gold-gradient flex items-center justify-center text-xs text-primary-foreground font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobMatcher;
