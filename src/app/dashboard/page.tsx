export const dynamic = "force-dynamic";

import { createClient } from "@/lib/supabase/server";
import { Brain, FolderKanban, CheckSquare, Zap, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

const demoStats = [
  { label: "Active Projects", value: "6", change: "2 updated today", icon: FolderKanban, color: "text-[#1677E8]", bg: "bg-[#EAF3FF]" },
  { label: "My Tasks", value: "14", change: "3 due this week", icon: CheckSquare, color: "text-[#9652E8]", bg: "bg-[#F0E2FF]" },
  { label: "AI Agent Chats", value: "28", change: "This month", icon: Brain, color: "text-green-600", bg: "bg-green-50" },
  { label: "Automations Run", value: "47", change: "This week", icon: Zap, color: "text-orange-600", bg: "bg-orange-50" },
];

const recentActivity = [
  { text: "Task 'Write product brief' completed", user: "Sarah Chen", time: "1 hour ago", type: "task" },
  { text: "Project 'Q4 Marketing Campaign' updated", user: "James Okoye", time: "2 hours ago", type: "project" },
  { text: "Q&A Agent answered 5 questions", user: "AI Agent", time: "3 hours ago", type: "agent" },
  { text: "New document 'Onboarding Guide v2' created", user: "Maria Silva", time: "Yesterday", type: "doc" },
  { text: "Automation 'Weekly Report' executed successfully", user: "System", time: "Yesterday", type: "automation" },
];

const myTasks = [
  { title: "Review Q3 analytics report", project: "Analytics", priority: "high", due: "Today" },
  { title: "Prepare team standup notes", project: "Operations", priority: "medium", due: "Tomorrow" },
  { title: "Update knowledge base procedures", project: "HR", priority: "low", due: "This week" },
];

const priorityColors: Record<string, string> = {
  high: "bg-red-100 text-red-700",
  medium: "bg-yellow-100 text-yellow-700",
  low: "bg-green-100 text-green-700",
};

export default async function DashboardOverview() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const firstName = user?.user_metadata?.full_name?.split(" ")[0] || "there";

  return (
    <div className="p-6 lg:p-8 max-w-7xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-manrope font-bold text-2xl text-[#171717]">Good morning, {firstName}</h1>
          <p className="font-inter text-sm text-[#777777] mt-1">
            Here is a summary of your workspace activity.
          </p>
        </div>
        <Link
          href="/dashboard/projects"
          className="hidden sm:inline-flex items-center gap-2 bg-[#1677E8] text-white font-inter font-medium text-sm px-4 py-2.5 rounded-lg hover:bg-[#1265CC] transition-colors"
        >
          New Project <ArrowRight size={14} />
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {demoStats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-5 border border-[#E8E8E8]">
            <div className={`w-10 h-10 ${stat.bg} rounded-xl flex items-center justify-center mb-3`}>
              <stat.icon size={18} className={stat.color} />
            </div>
            <p className="font-manrope font-bold text-2xl text-[#171717]">{stat.value}</p>
            <p className="font-inter text-xs text-[#777777] mt-0.5">{stat.label}</p>
            <p className="font-inter text-xs text-[#777777] mt-1 opacity-70">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* My Tasks */}
        <div className="lg:col-span-1 bg-white rounded-2xl border border-[#E8E8E8] p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-manrope font-semibold text-[#171717]">My Tasks</h2>
            <Link href="/dashboard/tasks" className="text-xs text-[#1677E8] font-inter hover:underline">View all</Link>
          </div>
          <div className="space-y-3">
            {myTasks.map((task) => (
              <div key={task.title} className="bg-[#FAFAFA] rounded-xl p-3 border border-[#E8E8E8]">
                <p className="font-inter text-sm text-[#171717] mb-2">{task.title}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-inter text-[#777777]">{task.project}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-inter px-2 py-0.5 rounded-full ${priorityColors[task.priority]}`}>
                      {task.priority}
                    </span>
                    <span className="text-xs font-inter text-[#777777] flex items-center gap-1">
                      <Clock size={10} /> {task.due}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/dashboard/tasks" className="mt-4 flex items-center justify-center gap-1.5 w-full py-2 text-xs font-inter text-[#1677E8] border border-[#E8E8E8] rounded-lg hover:bg-[#EAF3FF] transition-colors">
            View all tasks <ArrowRight size={12} />
          </Link>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-1 bg-white rounded-2xl border border-[#E8E8E8] p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-manrope font-semibold text-[#171717]">Recent Activity</h2>
          </div>
          <div className="space-y-4">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                  item.type === "task" ? "bg-[#1677E8]" :
                  item.type === "agent" ? "bg-[#9652E8]" :
                  item.type === "automation" ? "bg-orange-500" :
                  "bg-green-500"
                }`}></div>
                <div>
                  <p className="font-inter text-sm text-[#171717] leading-tight">{item.text}</p>
                  <p className="font-inter text-xs text-[#777777] mt-0.5">{item.user} · {item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Agents Quick Access */}
        <div className="lg:col-span-1 bg-white rounded-2xl border border-[#E8E8E8] p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-manrope font-semibold text-[#171717]">AI Agents</h2>
            <Link href="/dashboard/agents" className="text-xs text-[#1677E8] font-inter hover:underline">Manage</Link>
          </div>
          <div className="space-y-3">
            {[
              { name: "Q&A Agent", status: "Active", desc: "Answer team questions", color: "bg-[#9652E8]", href: "/dashboard/agents/qa" },
              { name: "Task Routing", status: "Active", desc: "Organize incoming work", color: "bg-[#1677E8]", href: "/dashboard/agents/task-routing" },
              { name: "Reporting Agent", status: "Active", desc: "Generate reports", color: "bg-green-500", href: "/dashboard/agents/reporting" },
            ].map((agent) => (
              <Link key={agent.name} href={agent.href} className="flex items-center gap-3 p-3 rounded-xl border border-[#E8E8E8] hover:border-[#1677E8]/30 transition-colors">
                <div className={`w-8 h-8 ${agent.color} rounded-lg flex items-center justify-center`}>
                  <Brain size={14} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-inter font-medium text-sm text-[#171717]">{agent.name}</p>
                  <p className="font-inter text-xs text-[#777777]">{agent.desc}</p>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span className="text-xs font-inter text-green-600">{agent.status}</span>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/dashboard/agents" className="mt-4 flex items-center justify-center gap-1.5 w-full py-2 text-xs font-inter text-[#9652E8] border border-[#E8E8E8] rounded-lg hover:bg-[#F0E2FF] transition-colors">
            All AI Agents <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
