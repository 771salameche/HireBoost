import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const fakeCv = `JOHN DOE
Senior Software Engineer | john.doe@email.com | linkedin.com/in/johndoe

PROFESSIONAL SUMMARY
Results-driven software engineer with 5+ years of experience building scalable web applications. Proven track record of leading cross-functional teams and delivering high-impact products used by 100K+ users. Expert in React, TypeScript, Node.js, and cloud infrastructure.

EXPERIENCE
Senior Software Engineer — TechCorp Inc. (2022–Present)
• Led development of a customer-facing dashboard serving 50K+ daily active users
• Reduced page load time by 40% through performance optimization and code splitting
• Mentored 3 junior developers and conducted weekly code reviews
• Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes

Software Engineer — StartupXYZ (2019–2022)
• Built and maintained RESTful APIs handling 1M+ requests daily
• Designed and implemented real-time notification system using WebSockets
• Collaborated with product team to define and prioritize feature roadmap

SKILLS
React, TypeScript, Node.js, Python, PostgreSQL, AWS, Docker, Git, Agile/Scrum`;

const fakeLetter = `Dear Hiring Manager,

I am writing to express my strong interest in the Senior Full-Stack Engineer position at your company. With over 5 years of experience in software development and a proven track record of building scalable applications, I am confident I would be a valuable addition to your team.

In my current role at TechCorp Inc., I lead the development of a customer-facing dashboard serving 50,000+ daily active users. I reduced page load times by 40% through strategic performance optimization and implemented CI/CD pipelines that cut deployment time from 2 hours to just 15 minutes. These experiences have sharpened my ability to deliver high-quality solutions under tight deadlines.

What excites me most about this opportunity is the chance to work on challenging technical problems at scale. My expertise in React, TypeScript, and Node.js, combined with my experience in cloud infrastructure and team leadership, aligns perfectly with your requirements.

I would welcome the opportunity to discuss how my skills and experience can contribute to your team's success. Thank you for your time and consideration.

Best regards,
John Doe`;

const Generator = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const generate = (type: string) => {
    setLoading(true);
    setOutput("");
    setTimeout(() => {
      setLoading(false);
      setOutput(type === "cv" ? fakeCv : fakeLetter);
      toast({ title: "Generated successfully!", description: `Your ${type === "cv" ? "optimized CV" : "cover letter"} is ready.` });
    }, 2500);
  };

  const copyText = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold">AI <span className="gold-text">Generator</span></h1>
        <p className="text-sm text-muted-foreground mt-1">Generate optimized CVs and tailored cover letters.</p>
      </div>

      <Tabs defaultValue="cv" onValueChange={() => setOutput("")}>
        <TabsList className="bg-secondary">
          <TabsTrigger value="cv">CV Optimizer</TabsTrigger>
          <TabsTrigger value="letter">Cover Letter</TabsTrigger>
        </TabsList>

        <TabsContent value="cv" className="mt-6 space-y-4">
          <p className="text-sm text-muted-foreground">Our AI will optimize your CV for maximum impact and ATS compatibility.</p>
          <Button onClick={() => generate("cv")} disabled={loading} className="w-full gold-gradient text-primary-foreground font-semibold py-6 hover:opacity-90">
            {loading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" />Generating...</> : "Generate Optimized CV"}
          </Button>
        </TabsContent>

        <TabsContent value="letter" className="mt-6 space-y-4">
          <p className="text-sm text-muted-foreground">Generate a tailored cover letter based on your profile and the target role.</p>
          <Button onClick={() => generate("letter")} disabled={loading} className="w-full gold-gradient text-primary-foreground font-semibold py-6 hover:opacity-90">
            {loading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" />Generating...</> : "Generate Cover Letter"}
          </Button>
        </TabsContent>
      </Tabs>

      <AnimatePresence>
        {loading && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><div className="h-64 rounded-xl bg-secondary animate-pulse" /></motion.div>}

        {output && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Generated Output</h3>
              <Button variant="ghost" size="sm" onClick={copyText} className="text-muted-foreground text-xs gap-1.5">
                {copied ? <><Check className="h-3.5 w-3.5" />Copied</> : <><Copy className="h-3.5 w-3.5" />Copy</>}
              </Button>
            </div>
            <Textarea value={output} onChange={(e) => setOutput(e.target.value)} rows={18} className="bg-secondary border-border font-mono text-xs leading-relaxed" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Generator;
