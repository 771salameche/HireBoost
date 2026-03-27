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
        <div className="min-h-screen flex w-full bg-background text-foreground">
          <DashboardSidebar />
          <div className="flex-1 flex flex-col">
            <header className="h-14 flex items-center justify-between border-b border-border px-4">
              <SidebarTrigger className="text-muted-foreground" />
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary text-xs gap-1.5 border border-primary/30 hover:bg-primary/10"
                  onClick={() => toast({ title: "Upgrade to Pro", description: "Unlock unlimited AI features and priority processing." })}
                >
                  <Crown className="h-3.5 w-3.5" />
                  Upgrade to Pro
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground"
                  onClick={() => toast({ title: "No new notifications" })}
                >
                  <Bell className="h-4 w-4" />
                </Button>
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="gold-gradient text-primary-foreground text-xs font-bold">JD</AvatarFallback>
                </Avatar>
              </div>
            </header>
            <main className="flex-1 p-6 overflow-auto">
              <Outlet />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
