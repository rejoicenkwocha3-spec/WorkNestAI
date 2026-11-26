"use client";

import { useState } from "react";
import { Zap, Plus, Play, Pause, Clock, CheckCircle, AlertTriangle } from "lucide-react";

type Workflow = {
  id: string;
  name: string;
  trigger: string;
  action: string;
  status: "active" | "inactive";
  runs: number;
  lastRun: string;
};

const initialWorkflows: Workflow[] = [
  { id: "1", name: "Task Assignment Notification", trigger: "When a task is assigned", action: "Notify assigned team member via email", status: "active", runs: 47, lastRun: "1 hour ago" },
  { id: "2", name: "Weekly Progress Report", trigger: "Every Monday at 9:00 AM", action: "Generate and send project summary to team", status: "active", runs: 12, lastRun: "3 days ago" },
  { id: "3", name: "Deadline Reminder", trigger: "2 days before task due date", action: "Send reminder to assignee and project manager", status: "active", runs: 23, lastRun: "Yesterday" },
  { id: "4", name: "Project Completion Update", trigger: "When all project tasks completed", action: "Update project status and notify stakeholders", status: "inactive", runs: 3, lastRun: "2 weeks ago" },
  { id: "5", name: "New Member Welcome", trigger: "When a new member joins workspace", action: "Send welcome email with onboarding resources", status: "active", runs: 8, lastRun: "1 week ago" },
];

export default function AutomationPage() {
  const [workflows, setWorkflows] = useState<Workflow[]>(initialWorkflows);
  const [showNew, setShowNew] = useState(false);
  const [name, setName] = useState("");
  const [trigger, setTrigger] = useState("");
  const [action, setAction] = useState("");

  function toggleWorkflow(id: string) {
    setWorkflows(wf => wf.map(w => w.id === id ? { ...w, status: w.status === "active" ? "inactive" : "active" } : w));
  }

  function addWorkflow() {
    if (!name.trim() || !trigger.trim() || !action.trim()) return;
    setWorkflows([
      { id: String(Date.now()), name, trigger, action, status: "active", runs: 0, lastRun: "Never" },
      ...workflows,
    ]);
    setName(""); setTrigger(""); setAction("");
    setShowNew(false);
  }

  const active = workflows.filter(w => w.status === "active").length;
  const totalRuns = workflows.reduce((s, w) => s + w.runs, 0);

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-manrope font-bold text-2xl text-[#171717]">Workflow Automation</h1>
          <p className="font-inter text-sm text-[#777777] mt-1">Automate repetitive tasks and notifications</p>
        </div>
        <button onClick={() => setShowNew(true)} className="flex items-center gap-2 bg-[#1677E8] text-white font-inter font-medium text-sm px-4 py-2.5 rounded-lg hover:bg-[#1265CC] transition-colors">
          <Plus size={16} /> New Workflow
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Active Workflows", value: active, icon: Zap, color: "text-[#1677E8]", bg: "bg-[#EAF3FF]" },
          { label: "Total Runs", value: totalRuns, icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
          { label: "Total Workflows", value: workflows.length, icon: Clock, color: "text-orange-600", bg: "bg-orange-50" },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-2xl border border-[#E8E8E8] p-4">
            <div className={`w-9 h-9 ${s.bg} rounded-xl flex items-center justify-center mb-2`}>
              <s.icon size={16} className={s.color} />
            </div>
            <p className="font-manrope font-bold text-xl text-[#171717]">{s.value}</p>
            <p className="font-inter text-xs text-[#777777]">{s.label}</p>
          </div>
        ))}
      </div>

      {showNew && (
        <div className="bg-white rounded-2xl border border-[#1677E8]/30 p-6 mb-6">
          <h3 className="font-manrope font-semibold text-[#171717] mb-4">New Workflow</h3>
          <div className="space-y-3 mb-4">
            <div>
              <label className="block font-inter text-sm font-medium text-[#171717] mb-1.5">Workflow Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2.5 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:border-[#1677E8]" placeholder="e.g. Weekly Summary Report" />
            </div>
            <div>
              <label className="block font-inter text-sm font-medium text-[#171717] mb-1.5">Trigger</label>
              <input value={trigger} onChange={(e) => setTrigger(e.target.value)} className="w-full px-4 py-2.5 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:border-[#1677E8]" placeholder="e.g. Every Monday at 9am / When a task is created" />
            </div>
            <div>
              <label className="block font-inter text-sm font-medium text-[#171717] mb-1.5">Action</label>
              <input value={action} onChange={(e) => setAction(e.target.value)} className="w-full px-4 py-2.5 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:border-[#1677E8]" placeholder="e.g. Notify team members" />
            </div>
          </div>
          <div className="flex gap-2">
            <button onClick={addWorkflow} className="bg-[#1677E8] text-white font-inter text-sm px-4 py-2.5 rounded-lg hover:bg-[#1265CC] transition-colors">Create Workflow</button>
            <button onClick={() => setShowNew(false)} className="text-[#777777] font-inter text-sm px-4 py-2.5 rounded-lg border border-[#E8E8E8] hover:bg-[#FAFAFA] transition-colors">Cancel</button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl border border-[#E8E8E8] overflow-hidden">
        {workflows.map((wf, i) => (
          <div key={wf.id} className={`p-5 ${i < workflows.length - 1 ? "border-b border-[#E8E8E8]" : ""}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3 flex-1 min-w-0">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${wf.status === "active" ? "bg-[#EAF3FF]" : "bg-[#FAFAFA]"}`}>
                  <Zap size={15} className={wf.status === "active" ? "text-[#1677E8]" : "text-[#777777]"} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-manrope font-semibold text-[#171717] text-sm">{wf.name}</p>
                  <p className="font-inter text-xs text-[#777777] mt-0.5">Trigger: {wf.trigger}</p>
                  <p className="font-inter text-xs text-[#777777]">Action: {wf.action}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className="text-right hidden sm:block">
                  <p className="font-inter text-xs text-[#777777]">{wf.runs} runs</p>
                  <p className="font-inter text-xs text-[#777777]">Last: {wf.lastRun}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${wf.status === "active" ? "bg-green-400" : "bg-[#E8E8E8]"}`}></div>
                  <button
                    onClick={() => toggleWorkflow(wf.id)}
                    className={`text-xs font-inter px-3 py-1.5 rounded-lg transition-colors ${
                      wf.status === "active"
                        ? "bg-red-50 text-red-600 hover:bg-red-100"
                        : "bg-[#EAF3FF] text-[#1677E8] hover:bg-[#1677E8]/20"
                    }`}
                  >
                    {wf.status === "active" ? "Pause" : "Enable"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
