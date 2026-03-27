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
    <Sidebar collapsible="icon" className="border-r border-white/5 bg-[#0a0a0c]">
      <SidebarContent className="bg-[#0a0a0c]">
        <div className="px-6 py-8 flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl gold-gradient flex items-center justify-center shadow-lg shadow-primary/20">
            <Zap className="h-5 w-5 text-primary-foreground flex-shrink-0" />
          </div>
          {!collapsed && <span className="font-bold gold-text text-xl tracking-tight">HireBoost</span>}
        </div>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="px-3">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="mb-1">
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/dashboard"}
                      className="flex items-center gap-3 px-4 py-6 rounded-xl transition-all duration-300 hover:bg-white/5 group"
                      activeClassName="bg-primary/10 text-primary font-semibold ring-1 ring-primary/20"
                    >
                      <item.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      {!collapsed && <span className="text-[15px]">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="mt-auto p-4">
            <div className="premium-glass rounded-2xl p-5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap className="h-12 w-12 text-primary" />
              </div>
              <div className="relative z-10">
                <p className="text-[10px] font-bold text-primary tracking-widest uppercase mb-1">Free Plan</p>
                <div className="text-sm font-semibold text-foreground mb-3">2/3 analyses used</div>
                <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-2/3 rounded-full gold-gradient shadow-[0_0_10px_rgba(212,175,55,0.4)]" />
                </div>
                <button className="w-full mt-4 py-2 text-[11px] font-bold text-primary-foreground gold-gradient rounded-lg shadow-lg hover:opacity-90 transition-opacity">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
};
