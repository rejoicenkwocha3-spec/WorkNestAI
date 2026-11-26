"use client";

import { CheckSquare, Clock, Users } from "lucide-react";

const tasks = [
  { title: "Finalize Q4 campaign brief", assignee: "Sarah Chen", project: "Q4 Marketing Campaign", priority: "high", due: "Nov 22", status: "in-progress" },
  { title: "Design new landing page wireframes", assignee: "Maria Silva", project: "Product Roadmap 2026", priority: "high", due: "Nov 24", status: "in-review" },
  { title: "Sales process audit", assignee: "Alex Torres", project: "Sales Pipeline", priority: "medium", due: "Nov 28", status: "todo" },
  { title: "Update API documentation", assignee: "James Okoye", project: "Platform", priority: "medium", due: "Nov 30", status: "in-progress" },
  { title: "Prepare onboarding checklist", assignee: "Priya Nair", project: "HR", priority: "low", due: "Dec 5", status: "todo" },
];

const priorityColors: Record<string, string> = {
  high: "text-red-600 bg-red-50",
  medium: "text-yellow-600 bg-yellow-50",
  low: "text-green-600 bg-green-50",
};

const statusColors: Record<string, string> = {
  todo: "bg-[#FAFAFA] text-[#777777]",
  "in-progress": "bg-[#EAF3FF] text-[#1677E8]",
  "in-review": "bg-yellow-50 text-yellow-700",
  completed: "bg-green-50 text-green-700",
};

export default function TeamTasksPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="font-manrope font-bold text-2xl text-[#171717]">Team Tasks</h1>
        <p className="font-inter text-sm text-[#777777] mt-1">All tasks assigned across your team</p>
      </div>

      <div className="bg-white rounded-2xl border border-[#E8E8E8] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E8E8E8] bg-[#FAFAFA]">
              {["Task", "Assignee", "Project", "Priority", "Status", "Due"].map(h => (
                <th key={h} className="text-left px-5 py-3 text-xs font-inter font-medium text-[#777777] uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, i) => (
              <tr key={i} className="border-b border-[#E8E8E8] last:border-0 hover:bg-[#FAFAFA]">
                <td className="px-5 py-3.5 font-inter text-sm text-[#171717]">{task.title}</td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-[#EAF3FF] rounded-full flex items-center justify-center">
                      <span className="text-[#1677E8] text-xs font-semibold">{task.assignee[0]}</span>
                    </div>
                    <span className="font-inter text-sm text-[#777777]">{task.assignee}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 font-inter text-sm text-[#777777]">{task.project}</td>
                <td className="px-5 py-3.5">
                  <span className={`text-xs font-inter px-2 py-0.5 rounded-full ${priorityColors[task.priority]}`}>{task.priority}</span>
                </td>
                <td className="px-5 py-3.5">
                  <span className={`text-xs font-inter px-2 py-0.5 rounded-full ${statusColors[task.status]}`}>
                    {task.status.replace("-", " ")}
                  </span>
                </td>
                <td className="px-5 py-3.5 font-inter text-sm text-[#777777]">{task.due}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
