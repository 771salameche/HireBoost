import { useState } from "react";
import { Upload, FileText, Loader2, BookOpen, Target, Calendar, CheckCircle2, ChevronRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fakeRoadmap = {
  jobTitle: "Senior Frontend Engineer",
  matchScore: 65,
  missingSkills: [
    { name: "Next.js", priority: "High", estimatedTime: "1 week" },
    { name: "GraphQL", priority: "Medium", estimatedTime: "2 weeks" },
    { name: "Unit Testing (Vitest/Jest)", priority: "High", estimatedTime: "1 week" },
    { name: "System Design", priority: "Medium", estimatedTime: "Ongoing" },
  ],
  plan: [
    {
      week: 1,
      focus: "Next.js & Server Side Rendering",
      tasks: [
        "Complete 'Next.js 14 Fundamentals' on Vercel Academy",
        "Build a small project using App Router and Server Actions",
        "Understand ISR and SSR performance trade-offs",
      ],
      resources: [
        { name: "Next.js Documentation", url: "https://nextjs.org/docs" },
        { name: "Next.js Course by Lee Robinson", url: "#" },
      ],
    },
    {
      week: 2,
      focus: "GraphQL & Data Fetching",
      tasks: [
        "Learn Apollo Client basics and caching strategies",
        "Implement a GraphQL query in your Next.js project",
        "Practice writing schemas and resolvers (optional)",
      ],
      resources: [
        { name: "Odyssey by Apollo", url: "https://www.apollographql.com/tutorials/" },
        { name: "GraphQL.org", url: "https://graphql.org/learn/" },
      ],
    },
    {
      week: 3,
      focus: "Testing & Best Practices",
      tasks: [
        "Set up Vitest and React Testing Library in a project",
        "Write unit tests for core business logic",
        "Implement E2E tests with Playwright for critical paths",
      ],
      resources: [
        { name: "Testing JavaScript by Kent C. Dodds", url: "#" },
        { name: "Vitest Docs", url: "https://vitest.dev/guide/" },
      ],
    },
  ],
};

const SkillGapRoadmap = () => {
  const [cvFile, setCvFile] = useState<string | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState<typeof fakeRoadmap | null>(null);
  const { toast } = useToast();

  const generateRoadmap = () => {
    if (!cvFile || !jobDescription) {
      toast({ 
        title: "Incomplete information", 
        description: "Please upload your CV and provide a job description.",
        variant: "destructive" 
      });
      return;
    }
    setLoading(true);
    setRoadmap(null);
    setTimeout(() => {
      setLoading(false);
      setRoadmap(fakeRoadmap);
      toast({ title: "Roadmap Generated", description: "Your personalized learning plan is ready." });
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-10 pb-20">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Skill Gap <span className="gold-text">Roadmap</span>
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Identify missing skills and get a personalized learning plan to land your dream job.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          onClick={() => setCvFile("My_Resume_2024.pdf")}
          className="glass-card rounded-2xl p-8 border border-white/5 hover:border-primary/40 transition-all cursor-pointer group flex flex-col items-center justify-center text-center space-y-4"
        >
          {cvFile ? (
            <>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{cvFile}</p>
                <p className="text-xs text-muted-foreground">Click to change CV</p>
              </div>
            </>
          ) : (
            <>
              <div className="h-16 w-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Upload className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Upload your CV</p>
                <p className="text-xs text-muted-foreground">PDF, DOCX up to 5MB</p>
              </div>
            </>
          )}
        </div>

        <div className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col space-y-3">
          <label className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            Job Description
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the job description here..."
            className="flex-grow w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/40 focus:border-transparent outline-none transition-all resize-none min-h-[150px]"
          />
        </div>
      </div>

      <Button
        onClick={generateRoadmap}
        disabled={loading}
        className="w-full gold-gradient text-primary-foreground font-bold py-8 rounded-2xl shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all hover:-translate-y-1 active:translate-y-0"
      >
        {loading ? (
          <div className="flex items-center gap-3">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Analyzing Skill Gaps & Curating Resources...</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 fill-current" />
            <span>Generate Personalized Roadmap</span>
          </div>
        )}
      </Button>

      <AnimatePresence>
        {roadmap && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Analysis Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="premium-glass border-white/5 bg-transparent overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Match Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold gold-text">{roadmap.matchScore}%</div>
                  <Progress value={roadmap.matchScore} className="h-1.5 mt-3" />
                </CardContent>
              </Card>

              <Card className="premium-glass border-white/5 bg-transparent md:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Identified Skill Gaps</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {roadmap.missingSkills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-white/5 border-white/10 px-3 py-1 flex items-center gap-2">
                      <span className="text-foreground">{skill.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        skill.priority === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {skill.priority}
                      </span>
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl gold-gradient flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold">Your 3-Week <span className="gold-text">Plan</span></h2>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {roadmap.plan.map((week, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                  >
                    {/* Dot */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/40 bg-[#0a0a0c] gold-text font-bold shadow-[0_0_15px_rgba(212,175,55,0.2)] z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      {week.week}
                    </div>

                    {/* Content */}
                    <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-2xl glass-card border border-white/5 group-hover:border-primary/20 transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg gold-text">{week.focus}</h3>
                        <Badge variant="outline" className="text-[10px] border-primary/20 text-primary">Week {week.week}</Badge>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {week.tasks.map((task, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-white/5">
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                          <BookOpen className="h-3 w-3" /> Recommended Resources
                        </p>
                        <div className="flex flex-col gap-2">
                          {week.resources.map((res, rIdx) => (
                            <a 
                              key={rIdx} 
                              href={res.url} 
                              className="text-sm text-primary hover:underline flex items-center gap-1 group/link"
                            >
                              {res.name}
                              <ChevronRight className="h-3 w-3 transition-transform group-hover/link:translate-x-1" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="premium-glass p-8 rounded-3xl text-center border border-primary/20 bg-primary/5">
              <h3 className="text-xl font-bold mb-2">Ready to start your journey?</h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                Stick to this plan for 3 weeks and you'll significantly increase your chances of getting hired for the {roadmap.jobTitle} position.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="rounded-xl px-8 border-white/10 hover:bg-white/5">
                  Download PDF Plan
                </Button>
                <Button className="rounded-xl px-8 gold-gradient text-primary-foreground font-bold">
                  Track My Progress
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillGapRoadmap;
