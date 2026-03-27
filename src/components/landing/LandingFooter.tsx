import { Zap } from "lucide-react";

export const LandingFooter = () => (
  <footer className="border-t border-border/50 py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Zap className="h-5 w-5 text-primary" />
        <span className="font-bold gold-text">HireBoost</span>
      </div>
      <p className="text-sm text-muted-foreground">© 2026 HireBoost. All rights reserved.</p>
    </div>
  </footer>
);
