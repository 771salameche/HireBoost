import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const DashboardLayout = () => {
  const { toast } = useToast();

  return (
    <div className="dark">
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-[#0a0a0c] text-foreground font-sans">
          <DashboardSidebar />
          <div className="flex-1 flex flex-col relative">
            <header className="h-16 flex items-center justify-between border-b border-white/[0.05] bg-[#0a0a0c]/80 backdrop-blur-md px-6 sticky top-0 z-20">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="text-muted-foreground hover:text-primary transition-colors" />
                <div className="h-4 w-px bg-white/10" />
                <h2 className="text-sm font-medium text-muted-foreground">Dashboard</h2>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative overflow-hidden group px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary text-xs font-semibold gap-2 border border-primary/20 rounded-full transition-all"
                  onClick={() => toast({ title: "Upgrade to Pro", description: "Unlock unlimited AI features and priority processing." })}
                >
                  <Crown className="h-3.5 w-3.5" />
                  Upgrade to Pro
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                </Button>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:bg-white/5 rounded-full h-9 w-9"
                    onClick={() => toast({ title: "No new notifications" })}
                  >
                    <Bell className="h-4 w-4" />
                  </Button>
                </div>
                <Avatar className="h-9 w-9 border border-white/10 ring-2 ring-primary/20">
                  <AvatarFallback className="gold-gradient text-primary-foreground text-xs font-bold shadow-lg">JD</AvatarFallback>
                </Avatar>
              </div>
            </header>
            <main className="flex-1 p-8 overflow-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent">
              <Outlet />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
