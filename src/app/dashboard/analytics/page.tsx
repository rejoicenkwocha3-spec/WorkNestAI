export const dynamic = "force-dynamic";

import { BarChart3, TrendingUp, CheckCircle, Users, FolderKanban, Zap } from "lucide-react";

const stats = [
  { label: "Tasks Completed This Month", value: "47", trend: "+12% vs last month", icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
  { label: "Active Team Members", value: "12", trend: "2 joined recently", icon: Users, color: "text-[#1677E8]", bg: "bg-[#EAF3FF]" },
  { label: "Projects In Progress", value: "5", trend: "1 completed this month", icon: FolderKanban, color: "text-[#9652E8]", bg: "bg-[#F0E2FF]" },
  { label: "Automations Triggered", value: "184", trend: "+28% vs last month", icon: Zap, color: "text-orange-600", bg: "bg-orange-50" },
];

const projectProgress = [
  { name: "Q4 Marketing Campaign", pct: 65, tasks: 12, completed: 8, color: "bg-[#1677E8]" },
  { name: "Product Roadmap 2026", pct: 40, tasks: 20, completed: 8, color: "bg-[#9652E8]" },
  { name: "Customer Onboarding Flow", pct: 85, tasks: 7, completed: 6, color: "bg-green-500" },
  { name: "Team Knowledge Base", pct: 20, tasks: 15, completed: 3, color: "bg-orange-500" },
  { name: "Sales Pipeline Optimization", pct: 11, tasks: 9, completed: 1, color: "bg-pink-500" },
];

const teamActivity = [
  { name: "Sarah Chen", tasks: 14, completed: 11, role: "Product Manager" },
  { name: "James Okoye", tasks: 9, completed: 7, role: "Engineer" },
  { name: "Maria Silva", tasks: 12, completed: 8, role: "Designer" },
  { name: "Alex Torres", tasks: 7, completed: 5, role: "Marketing" },
  { name: "Priya Nair", tasks: 5, completed: 3, role: "Sales" },
];

export default function AnalyticsPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-manrope font-bold text-2xl text-[#171717]">Analytics</h1>
        <p className="font-inter text-sm text-[#777777] mt-1">Workspace performance and team activity overview</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl border border-[#E8E8E8] p-5">
            <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center mb-3`}>
              <s.icon size={18} className={s.color} />
            </div>
            <p className="font-manrope font-bold text-2xl text-[#171717]">{s.value}</p>
            <p className="font-inter text-xs text-[#777777] mt-0.5">{s.label}</p>
            <p className="font-inter text-xs text-green-600 mt-1">{s.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Project Progress */}
        <div className="bg-white rounded-2xl border border-[#E8E8E8] p-5">
          <h2 className="font-manrope font-semibold text-[#171717] mb-5">Project Progress</h2>
          <div className="space-y-5">
            {projectProgress.map((p) => (
              <div key={p.name}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-inter text-sm text-[#171717]">{p.name}</span>
                  <span className="font-inter text-xs text-[#777777]">{p.completed}/{p.tasks} tasks</span>
                </div>
                <div className="h-2 bg-[#FAFAFA] rounded-full">
                  <div className={`h-2 ${p.color} rounded-full`} style={{ width: `${p.pct}%` }}></div>
                </div>
                <p className="font-inter text-xs text-[#777777] mt-1">{p.pct}% complete</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Activity */}
        <div className="bg-white rounded-2xl border border-[#E8E8E8] p-5">
          <h2 className="font-manrope font-semibold text-[#171717] mb-5">Team Activity</h2>
          <div className="space-y-3">
            {teamActivity.map((m) => (
              <div key={m.name} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#EAF3FF] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-manrope font-semibold text-[#1677E8] text-xs">{m.name[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-inter text-sm text-[#171717]">{m.name}</p>
                    <p className="font-inter text-xs text-[#777777]">{m.completed}/{m.tasks}</p>
                  </div>
                  <div className="h-1.5 bg-[#FAFAFA] rounded-full">
                    <div
                      className="h-1.5 bg-[#1677E8] rounded-full"
                      style={{ width: `${Math.round((m.completed / m.tasks) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Over Time (simple bar representation) */}
      <div className="bg-white rounded-2xl border border-[#E8E8E8] p-5">
        <h2 className="font-manrope font-semibold text-[#171717] mb-5">Tasks Completed: Last 7 Days</h2>
        <div className="flex items-end gap-3 h-32">
          {[
            { day: "Mon", tasks: 8 },
            { day: "Tue", tasks: 12 },
            { day: "Wed", tasks: 6 },
            { day: "Thu", tasks: 15 },
            { day: "Fri", tasks: 10 },
            { day: "Sat", tasks: 3 },
            { day: "Sun", tasks: 2 },
          ].map((d) => (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full bg-[#1677E8] rounded-t-lg"
                style={{ height: `${(d.tasks / 15) * 100}%` }}
              ></div>
              <span className="font-inter text-xs text-[#777777]">{d.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
