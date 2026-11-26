export const dynamic = "force-dynamic";

import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { FileText, CheckSquare, Brain, Zap, ArrowRight } from "lucide-react";

export default async function WorkspacePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const name = user?.user_metadata?.full_name || "Your Workspace";

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-manrope font-bold text-2xl text-[#171717]">My Workspace</h1>
        <p className="font-inter text-sm text-[#777777] mt-1">Your personal view of everything in WorkNest AI</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { href: "/dashboard/documents", label: "Documents", icon: FileText, count: "5 recent", color: "text-[#1677E8]", bg: "bg-[#EAF3FF]" },
          { href: "/dashboard/tasks", label: "My Tasks", icon: CheckSquare, count: "14 open", color: "text-[#9652E8]", bg: "bg-[#F0E2FF]" },
          { href: "/dashboard/agents/qa", label: "AI Agents", icon: Brain, count: "3 active", color: "text-green-600", bg: "bg-green-50" },
          { href: "/dashboard/automation", label: "Automations", icon: Zap, count: "5 running", color: "text-orange-600", bg: "bg-orange-50" },
        ].map(item => (
          <Link key={item.href} href={item.href} className="bg-white rounded-2xl border border-[#E8E8E8] p-5 hover:border-[#1677E8]/30 hover:shadow-sm transition-all">
            <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mb-3`}>
              <item.icon size={18} className={item.color} />
            </div>
            <p className="font-manrope font-semibold text-[#171717]">{item.label}</p>
            <p className="font-inter text-xs text-[#777777] mt-0.5">{item.count}</p>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-[#E8E8E8] p-6">
        <h2 className="font-manrope font-semibold text-[#171717] mb-4">Quick Access</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { href: "/dashboard/projects", label: "View all projects", desc: "6 active projects" },
            { href: "/dashboard/knowledge-base", label: "Company knowledge", desc: "8 documents stored" },
            { href: "/dashboard/analytics", label: "Team analytics", desc: "Performance overview" },
            { href: "/dashboard/team", label: "Team members", desc: "Manage your workspace team" },
          ].map(link => (
            <Link key={link.href} href={link.href} className="flex items-center justify-between p-4 rounded-xl border border-[#E8E8E8] hover:border-[#1677E8]/30 hover:bg-[#FAFAFA] transition-all">
              <div>
                <p className="font-inter font-medium text-sm text-[#171717]">{link.label}</p>
                <p className="font-inter text-xs text-[#777777] mt-0.5">{link.desc}</p>
              </div>
              <ArrowRight size={14} className="text-[#777777]" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
