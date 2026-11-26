"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  Home,
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  Calendar,
  BookOpen,
  FileText,
  Brain,
  Zap,
  BarChart3,
  Users,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  CreditCard,
  History,
  Layers,
  ClipboardList,
} from "lucide-react";
import WorkNestLogo from "./WorkNestLogo";

type NavItem = { href: string; label: string; icon: React.ComponentType<{ size?: number; className?: string }>; exact?: boolean };
type NavSection = { label: string | null; items: NavItem[] };

const navSections: NavSection[] = [
  {
    label: null,
    items: [
      { href: "/dashboard", label: "Home", icon: Home, exact: true },
    ],
  },
  {
    label: "WORKSPACE",
    items: [
      { href: "/dashboard/workspace", label: "My Workspace", icon: LayoutDashboard },
      { href: "/dashboard/documents", label: "Documents", icon: FileText },
      { href: "/dashboard/knowledge-base", label: "Knowledge Base", icon: BookOpen },
    ],
  },
  {
    label: "WORK MANAGEMENT",
    items: [
      { href: "/dashboard/projects", label: "Projects", icon: FolderKanban },
      { href: "/dashboard/tasks", label: "My Tasks", icon: CheckSquare },
      { href: "/dashboard/team-tasks", label: "Team Tasks", icon: ClipboardList },
      { href: "/dashboard/calendar", label: "Calendar", icon: Calendar },
    ],
  },
  {
    label: "AI AGENTS",
    items: [
      { href: "/dashboard/agents", label: "All Agents", icon: Brain },
      { href: "/dashboard/agents/task-routing", label: "Task Routing", icon: Layers },
      { href: "/dashboard/agents/qa", label: "Q&A Agent", icon: Brain },
      { href: "/dashboard/agents/reporting", label: "Reporting Agent", icon: BarChart3 },
    ],
  },
  {
    label: "AUTOMATION",
    items: [
      { href: "/dashboard/automation", label: "Workflows", icon: Zap },
      { href: "/dashboard/automation/history", label: "History", icon: History },
    ],
  },
  {
    label: "INSIGHTS",
    items: [
      { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
    ],
  },
  {
    label: "SETTINGS",
    items: [
      { href: "/dashboard/team", label: "Team Members", icon: Users },
      { href: "/dashboard/billing", label: "Billing", icon: CreditCard },
      { href: "/dashboard/settings", label: "Account Settings", icon: Settings },
    ],
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();
  const [mobileOpen, setMobileOpen] = useState(false);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  }

  const SidebarContent = () => (
    <aside className="w-60 bg-white border-r border-[#E8E8E8] min-h-screen flex flex-col flex-shrink-0">
      <div className="p-4 border-b border-[#E8E8E8]">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
          <WorkNestLogo size={30} />
          <span className="font-manrope font-bold text-[#171717] text-base">WorkNest AI</span>
        </Link>
      </div>

      <nav className="flex-1 py-3 overflow-y-auto">
        {navSections.map((section) => (
          <div key={section.label ?? "home"} className="mb-1">
            {section.label && (
              <p className="px-4 py-1.5 text-[10px] font-inter font-semibold text-[#777777] uppercase tracking-widest">
                {section.label}
              </p>
            )}
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2.5 px-4 py-2 text-sm font-inter mx-2 rounded-lg transition-colors ${
                  isActive(item.href, item.exact)
                    ? "bg-[#EAF3FF] text-[#1677E8] font-medium"
                    : "text-[#777777] hover:bg-[#FAFAFA] hover:text-[#171717]"
                }`}
              >
                <item.icon size={16} />
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-[#E8E8E8]">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2.5 w-full px-3 py-2 text-sm font-inter text-[#777777] hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
        >
          <LogOut size={16} />
          Log Out
        </button>
      </div>
    </aside>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <SidebarContent />
      </div>

      {/* Mobile toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E8E8E8] flex items-center px-4 h-14">
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-[#171717]">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <Link href="/" className="flex items-center gap-2 ml-3">
          <WorkNestLogo size={28} />
          <span className="font-manrope font-bold text-[#171717] text-base">WorkNest AI</span>
        </Link>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div className="flex-1 bg-black/40" onClick={() => setMobileOpen(false)} />
          <SidebarContent />
        </div>
      )}
    </>
  );
}
