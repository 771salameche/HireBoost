import {
  LayoutDashboard, FileSearch, Target, Wand2, Mic, Zap,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
  { title: "CV Analyzer", url: "/dashboard/cv-analyzer", icon: FileSearch },
  { title: "Job Matcher", url: "/dashboard/job-matcher", icon: Target },
  { title: "Generator", url: "/dashboard/generator", icon: Wand2 },
  { title: "Interview Simulator", url: "/dashboard/interview", icon: Mic },
];

export const DashboardSidebar = () => {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const { pathname } = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="px-4 py-4 flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary flex-shrink-0" />
          {!collapsed && <span className="font-bold gold-text text-lg">HireBoost</span>}
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/dashboard"}
                      className="hover:bg-muted/50"
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="mt-auto p-4">
            <div className="glass-card rounded-lg p-4 text-center">
              <p className="text-xs text-muted-foreground mb-1">Free Plan</p>
              <div className="text-sm font-semibold">2/3 analyses used</div>
              <div className="w-full h-1.5 rounded-full bg-secondary mt-2">
                <div className="h-full w-2/3 rounded-full gold-gradient" />
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
};
