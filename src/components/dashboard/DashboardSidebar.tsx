import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Brain, Search, LayoutDashboard, Terminal, Zap, LogOut, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { title: "Overview", icon: LayoutDashboard, path: "/dashboard" },
  { title: "CV Analyzer", icon: Brain, path: "/dashboard/cv-analyzer" },
  { title: "Job Matcher", icon: Search, path: "/dashboard/job-matcher" },
  { title: "Interview Sim", icon: Terminal, path: "/dashboard/interview" },
  { title: "Cover Letter", icon: Zap, path: "/dashboard/generator" },
];

export const DashboardSidebar = () => {
  const location = useLocation();

  return (
    <Sidebar className="border-r border-border/50">
      <SidebarHeader className="p-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="h-8 w-8 rounded-lg gold-gradient flex items-center justify-center">
            <Zap className="h-5 w-5 text-primary-foreground fill-primary-foreground" />
          </div>
          <span>Hire<span className="gold-text">Boost</span></span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-2">Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild active={location.pathname === item.path} className="px-4">
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className={`h-5 w-5 ${location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className="text-sm font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 mt-auto border-t border-border/50">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="px-4 hover:bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground">
                <Settings className="h-5 w-5" />
                <span className="text-sm font-medium">Settings</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="px-4 hover:bg-destructive/10 rounded-lg group">
              <div className="flex items-center gap-3 text-muted-foreground group-hover:text-destructive">
                <LogOut className="h-5 w-5" />
                <span className="text-sm font-medium">Log out</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
