"use client";

import { useState } from "react";
import { Plus, Clock, CheckCircle, Circle, AlertCircle } from "lucide-react";

type Task = {
  id: string;
  title: string;
  project: string;
  priority: "urgent" | "high" | "medium" | "low";
  status: "todo" | "in-progress" | "in-review" | "completed";
  due: string;
  assignee: string;
};

const initialTasks: Task[] = [
  { id: "1", title: "Write product brief for Q1 features", project: "Product Roadmap 2026", priority: "high", status: "in-progress", due: "Nov 22", assignee: "You" },
  { id: "2", title: "Review Q3 analytics report", project: "Analytics", priority: "urgent", status: "todo", due: "Today", assignee: "You" },
  { id: "3", title: "Prepare team standup notes", project: "Operations", priority: "medium", status: "todo", due: "Tomorrow", assignee: "You" },
  { id: "4", title: "Update onboarding documentation", project: "Team Knowledge Base", priority: "medium", status: "in-review", due: "Nov 25", assignee: "You" },
  { id: "5", title: "Finalize Q4 campaign brief", project: "Q4 Marketing Campaign", priority: "high", status: "in-progress", due: "Nov 28", assignee: "You" },
  { id: "6", title: "Security audit report review", project: "Platform Security Audit", priority: "low", status: "completed", due: "Nov 15", assignee: "You" },
];

const columns: { id: Task["status"]; label: string; color: string; bg: string }[] = [
  { id: "todo", label: "To Do", color: "text-[#777777]", bg: "bg-[#FAFAFA]" },
  { id: "in-progress", label: "In Progress", color: "text-[#1677E8]", bg: "bg-[#EAF3FF]" },
  { id: "in-review", label: "In Review", color: "text-yellow-700", bg: "bg-yellow-50" },
  { id: "completed", label: "Completed", color: "text-green-700", bg: "bg-green-50" },
];

const priorityColors: Record<string, string> = {
  urgent: "text-red-600 bg-red-50",
  high: "text-orange-600 bg-orange-50",
  medium: "text-yellow-600 bg-yellow-50",
  low: "text-green-600 bg-green-50",
};

export default function TasksPage() {
  const [view, setView] = useState<"kanban" | "list">("kanban");
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  function addTask() {
    if (!newTitle.trim()) return;
    setTasks([
      { id: String(Date.now()), title: newTitle, project: "General", priority: "medium", status: "todo", due: "TBD", assignee: "You" },
      ...tasks,
    ]);
    setNewTitle("");
    setShowNew(false);
  }

  function moveTask(id: string, newStatus: Task["status"]) {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: newStatus } : t));
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-manrope font-bold text-2xl text-[#171717]">My Tasks</h1>
          <p className="font-inter text-sm text-[#777777] mt-1">Track and manage all your assigned tasks</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex border border-[#E8E8E8] rounded-lg overflow-hidden">
            {(["kanban", "list"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-3.5 py-1.5 text-xs font-inter capitalize transition-colors ${view === v ? "bg-[#1677E8] text-white" : "text-[#777777] hover:bg-[#FAFAFA]"}`}
              >
                {v}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowNew(true)}
            className="flex items-center gap-2 bg-[#1677E8] text-white font-inter font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#1265CC] transition-colors"
          >
            <Plus size={16} /> Add Task
          </button>
        </div>
      </div>

      {showNew && (
        <div className="bg-white rounded-2xl border border-[#1677E8]/30 p-5 mb-6">
          <h3 className="font-manrope font-semibold text-[#171717] mb-3">New Task</h3>
          <div className="flex gap-3">
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              className="flex-1 px-4 py-2.5 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:border-[#1677E8]"
              placeholder="Task title..."
            />
            <button onClick={addTask} className="bg-[#1677E8] text-white font-inter text-sm px-4 py-2.5 rounded-lg hover:bg-[#1265CC] transition-colors">Add</button>
            <button onClick={() => setShowNew(false)} className="text-[#777777] font-inter text-sm px-4 py-2.5 rounded-lg border border-[#E8E8E8] hover:bg-[#FAFAFA] transition-colors">Cancel</button>
          </div>
        </div>
      )}

      {view === "kanban" ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {columns.map((col) => {
            const colTasks = tasks.filter(t => t.status === col.id);
            return (
              <div key={col.id}>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-3 ${col.bg}`}>
                  <span className={`text-xs font-inter font-medium ${col.color}`}>{col.label}</span>
                  <span className={`text-xs font-inter ${col.color} opacity-70`}>{colTasks.length}</span>
                </div>
                <div className="space-y-2.5">
                  {colTasks.map((task) => (
                    <div key={task.id} className="bg-white rounded-xl border border-[#E8E8E8] p-3.5">
                      <p className="font-inter text-sm text-[#171717] mb-2 leading-tight">{task.title}</p>
                      <p className="font-inter text-xs text-[#777777] mb-2">{task.project}</p>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-inter px-2 py-0.5 rounded-full ${priorityColors[task.priority]}`}>
                          {task.priority}
                        </span>
                        <span className="text-xs font-inter text-[#777777] flex items-center gap-1">
                          <Clock size={9} /> {task.due}
                        </span>
                      </div>
                      {col.id !== "completed" && (
                        <select
                          value={task.status}
                          onChange={(e) => moveTask(task.id, e.target.value as Task["status"])}
                          className="mt-2 w-full text-xs border border-[#E8E8E8] rounded-lg px-2 py-1 font-inter text-[#777777] focus:outline-none"
                        >
                          {columns.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                        </select>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-[#E8E8E8] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#E8E8E8]">
                {["Task", "Project", "Priority", "Status", "Due"].map((h) => (
                  <th key={h} className="text-left px-5 py-3.5 text-xs font-inter font-medium text-[#777777] uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id} className="border-b border-[#E8E8E8] last:border-0 hover:bg-[#FAFAFA]">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2">
                      {task.status === "completed" ? <CheckCircle size={14} className="text-green-500" /> : <Circle size={14} className="text-[#E8E8E8]" />}
                      <span className="font-inter text-sm text-[#171717]">{task.title}</span>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 font-inter text-sm text-[#777777]">{task.project}</td>
                  <td className="px-5 py-3.5">
                    <span className={`text-xs font-inter px-2 py-0.5 rounded-full ${priorityColors[task.priority]}`}>{task.priority}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <select
                      value={task.status}
                      onChange={(e) => moveTask(task.id, e.target.value as Task["status"])}
                      className="text-xs border border-[#E8E8E8] rounded-lg px-2 py-1 font-inter text-[#171717] focus:outline-none"
                    >
                      {columns.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                    </select>
                  </td>
                  <td className="px-5 py-3.5 font-inter text-sm text-[#777777]">{task.due}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
