import { useState, useCallback } from "react";
import { Upload, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const fakeResult = {
  score: 78,
  strengths: [
    "Clear professional summary with relevant keywords",
    "Strong work experience with measurable achievements",
    "Well-organized education section",
    "Good use of action verbs throughout",
  ],
  weaknesses: [
    "Missing links to portfolio or LinkedIn profile",
    "Skills section lacks proficiency indicators",
    "No certifications or continuing education listed",
    "Summary could be more concise",
  ],
  suggestions: [
    "Add quantifiable metrics to at least 3 more bullet points",
    "Include a dedicated 'Technical Skills' section with proficiency levels",
    "Add your LinkedIn URL and portfolio link in the header",
    "Consider a two-column layout for better space utilization",
    "Add 2-3 relevant certifications to strengthen credibility",
  ],
};

const CVAnalyzer = () => {
  const [file, setFile] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<typeof fakeResult | null>(null);
  const { toast } = useToast();

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f) {
      setFile(f.name);
      setResult(null);
    }
  }, []);

  const analyze = () => {
    if (!file) {
      toast({ title: "Please upload a CV first", variant: "destructive" });
      return;
    }
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setLoading(false);
      setResult(fakeResult);
      toast({ title: "Analysis Complete", description: "Your CV has been analyzed successfully." });
    }, 2500);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">CV <span className="gold-text">Analyzer</span></h1>
        <p className="text-sm text-muted-foreground mt-1">Upload your CV and get instant AI feedback.</p>
      </div>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => { setFile("Resume_John_Doe.pdf"); setResult(null); }}
        className="glass-card rounded-xl p-10 text-center cursor-pointer hover:border-primary/40 transition-colors"
      >
        {file ? (
          <div className="flex items-center justify-center gap-3">
            <FileText className="h-8 w-8 text-primary" />
            <span className="font-medium">{file}</span>
          </div>
        ) : (
          <>
            <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">Drag & drop your CV or <span className="text-primary cursor-pointer">click to browse</span></p>
            <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX up to 5MB</p>
          </>
        )}
      </div>

      <Button
        onClick={analyze}
        disabled={loading}
        className="w-full gold-gradient text-primary-foreground font-semibold py-6 hover:opacity-90 transition-opacity"
      >
        {loading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" />Analyzing...</> : "Analyze CV"}
      </Button>

      <AnimatePresence>
        {loading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 rounded-xl bg-secondary animate-pulse" />
            ))}
          </motion.div>
        )}

        {result && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-sm text-muted-foreground mb-2">Overall Score</div>
              <div className="text-5xl font-bold gold-text">{result.score}</div>
              <div className="text-sm text-muted-foreground">/100</div>
              <Progress value={result.score} className="mt-4 h-2 max-w-xs mx-auto [&>div]:gold-gradient" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-3 text-green-400">✓ Strengths</h3>
                <ul className="space-y-2">
                  {result.strengths.map((s, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">•</span>{s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card rounded-xl p-5">
                <h3 className="font-semibold text-sm mb-3 text-red-400">✗ Weaknesses</h3>
                <ul className="space-y-2">
                  {result.weaknesses.map((w, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">•</span>{w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass-card rounded-xl p-5">
              <h3 className="font-semibold text-sm mb-3 text-primary">💡 Suggestions</h3>
              <ul className="space-y-2">
                {result.suggestions.map((s, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full gold-gradient flex items-center justify-center text-xs text-primary-foreground font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    {s}
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

export default CVAnalyzer;
