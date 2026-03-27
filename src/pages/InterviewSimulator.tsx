import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

type Message = { role: "ai" | "user"; text: string };

const questions = [
  "Tell me about yourself and your professional background.",
  "What's your greatest strength and how has it helped you professionally?",
  "Describe a challenging project you led. What was the outcome?",
  "Why are you interested in this role, and what makes you a good fit?",
  "Where do you see yourself in 5 years?",
];

const feedback = {
  clarity: 82,
  confidence: 75,
  relevance: 88,
  tips: [
    "Use the STAR method (Situation, Task, Action, Result) for behavioral answers.",
    "Quantify your achievements — numbers make your answers more compelling.",
    "Keep answers to 60–90 seconds for optimal engagement.",
    "Show more enthusiasm when discussing the role and company.",
    "Practice transitional phrases to connect your answers to the job requirements.",
  ],
};

const InterviewSimulator = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [qIndex, setQIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [typing, setTyping] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const addAi = (text: string) => {
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "ai", text }]);
      setTyping(false);
    }, 1200);
  };

  const start = () => {
    setStarted(true);
    setMessages([]);
    setQIndex(0);
    setShowFeedback(false);
    addAi(`Great! Let's begin the interview. I'll ask you ${questions.length} questions.\n\n${questions[0]}`);
  };

  const send = () => {
    if (!input.trim() || typing) return;
    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);

    const next = qIndex + 1;
    if (next < questions.length) {
      setQIndex(next);
      addAi(`Good answer! Let's continue.\n\n${questions[next]}`);
    } else {
      addAi("Thank you for completing the interview! Let me analyze your responses...");
      setTimeout(() => setShowFeedback(true), 2000);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Interview <span className="gold-text">Simulator</span></h1>
        <p className="text-sm text-muted-foreground mt-1">Practice with AI-powered interview questions.</p>
      </div>

      {!started ? (
        <div className="glass-card rounded-xl p-10 text-center">
          <Bot className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-lg font-semibold mb-2">Ready for your mock interview?</h2>
          <p className="text-sm text-muted-foreground mb-6">You'll be asked {questions.length} common interview questions. Answer naturally.</p>
          <Button onClick={start} className="gold-gradient text-primary-foreground font-semibold px-8 py-5 hover:opacity-90">
            Start Interview
          </Button>
        </div>
      ) : (
        <>
          <div className="glass-card rounded-xl p-4 h-[400px] overflow-y-auto space-y-4">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-start gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${m.role === "ai" ? "gold-gradient" : "bg-secondary"}`}>
                  {m.role === "ai" ? <Bot className="h-4 w-4 text-primary-foreground" /> : <User className="h-4 w-4 text-foreground" />}
                </div>
                <div className={`max-w-[75%] rounded-xl px-4 py-3 text-sm whitespace-pre-line ${m.role === "ai" ? "bg-secondary" : "gold-gradient text-primary-foreground"}`}>
                  {m.text}
                </div>
              </motion.div>
            ))}
            {typing && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full gold-gradient flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
                <div className="bg-secondary rounded-xl px-4 py-3">
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {!showFeedback && (
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type your answer..."
                className="bg-secondary border-border"
                disabled={typing}
              />
              <Button onClick={send} disabled={typing || !input.trim()} className="gold-gradient text-primary-foreground hover:opacity-90">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          )}

          {showFeedback && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              <h3 className="text-lg font-semibold">Performance <span className="gold-text">Feedback</span></h3>
              <div className="grid grid-cols-3 gap-4">
                {([["Clarity", feedback.clarity], ["Confidence", feedback.confidence], ["Relevance", feedback.relevance]] as const).map(([label, val]) => (
                  <div key={label} className="glass-card rounded-xl p-4 text-center">
                    <div className="text-xs text-muted-foreground mb-1">{label}</div>
                    <div className="text-2xl font-bold gold-text">{val}%</div>
                    <Progress value={val} className="mt-2 h-1.5 [&>div]:gold-gradient" />
                  </div>
                ))}
              </div>
              <div className="glass-card rounded-xl p-5">
                <h4 className="font-semibold text-sm mb-3 text-primary">Improvement Tips</h4>
                <ul className="space-y-2">
                  {feedback.tips.map((t, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full gold-gradient flex items-center justify-center text-xs text-primary-foreground font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <Button onClick={start} variant="outline" className="w-full">Restart Interview</Button>
            </motion.div>
          )}
        </>
      )}
    </div>
  );
};

export default InterviewSimulator;
