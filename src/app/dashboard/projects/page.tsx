"use client";

import { useState } from "react";
import { FolderKanban, Plus, Users, Clock, MoreHorizontal, CheckCircle } from "lucide-react";
import Link from "next/link";

const projects = [
  { id: "1", name: "Q4 Marketing Campaign", desc: "Plan and execute Q4 campaign across all channels", tasks: 12, completed: 8, members: 4, due: "Dec 31, 2026", status: "In Progress", color: "bg-[#1677E8]" },
  { id: "2", name: "Product Roadmap 2026", desc: "Define and track product features for the year", tasks: 20, completed: 8, members: 6, due: "Dec 31, 2026", status: "In Progress", color: "bg-[#9652E8]" },
  { id: "3", name: "Customer Onboarding Flow", desc: "Redesign and improve the onboarding experience", tasks: 7, completed: 6, members: 3, due: "Nov 30, 2026", status: "In Review", color: "bg-green-500" },
  { id: "4", name: "Team Knowledge Base", desc: "Build comprehensive internal documentation", tasks: 15, completed: 3, members: 5, due: "Jan 15, 2027", status: "In Progress", color: "bg-orange-500" },
  { id: "5", name: "Sales Pipeline Optimization", desc: "Improve sales process and reduce cycle time", tasks: 9, completed: 1, members: 3, due: "Jan 31, 2027", status: "To Do", color: "bg-pink-500" },
  { id: "6", name: "Platform Security Audit", desc: "Conduct comprehensive security review", tasks: 11, completed: 11, members: 2, due: "Nov 15, 2026", status: "Completed", color: "bg-teal-500" },
];

const statusColors: Record<string, string> = {
  "In Progress": "bg-[#EAF3FF] text-[#1677E8]",
  "In Review": "bg-yellow-50 text-yellow-700",
  "Completed": "bg-green-50 text-green-700",
  "To Do": "bg-[#FAFAFA] text-[#777777]",
};

export default function ProjectsPage() {
  const [showNew, setShowNew] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [localProjects, setLocalProjects] = useState(projects);

  function addProject() {
    if (!name.trim()) return;
    setLocalProjects([
      {
        id: String(Date.now()),
        name,
        desc,
        tasks: 0,
        completed: 0,
        members: 1,
        due: "TBD",
        status: "To Do",
        color: "bg-[#1677E8]",
      },
      ...localProjects,
    ]);
    setName("");
    setDesc("");
    setShowNew(false);
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-manrope font-bold text-2xl text-[#171717]">Projects</h1>
          <p className="font-inter text-sm text-[#777777] mt-1">Manage and track all your team projects</p>
        </div>
        <button
          onClick={() => setShowNew(true)}
          className="flex items-center gap-2 bg-[#1677E8] text-white font-inter font-medium text-sm px-4 py-2.5 rounded-lg hover:bg-[#1265CC] transition-colors"
        >
          <Plus size={16} /> New Project
        </button>
      </div>

      {showNew && (
        <div className="bg-white rounded-2xl border border-[#1677E8]/30 p-6 mb-6 shadow-sm">
          <h3 className="font-manrope font-semibold text-[#171717] mb-4">Create New Project</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-inter text-sm font-medium text-[#171717] mb-1.5">Project Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:border-[#1677E8]"
                placeholder="Enter project name"
              />
            </div>
            <div>
              <label className="block font-inter text-sm font-medium text-[#171717] mb-1.5">Description</label>
              <input
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:border-[#1677E8]"
                placeholder="Brief description"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={addProject}
              className="bg-[#1677E8] text-white font-inter font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-[#1265CC] transition-colors"
            >
              Create Project
            </button>
            <button
              onClick={() => setShowNew(false)}
              className="bg-[#FAFAFA] text-[#777777] font-inter font-medium text-sm px-5 py-2.5 rounded-lg border border-[#E8E8E8] hover:bg-white transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {localProjects.map((project) => {
          const pct = project.tasks > 0 ? Math.round((project.completed / project.tasks) * 100) : 0;
          return (
            <div key={project.id} className="bg-white rounded-2xl border border-[#E8E8E8] p-5 hover:border-[#1677E8]/30 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-3 h-3 rounded-full ${project.color} mt-1 flex-shrink-0`}></div>
                <span className={`text-xs font-inter px-2.5 py-1 rounded-full ${statusColors[project.status]}`}>
                  {project.status}
                </span>
              </div>
              <h3 className="font-manrope font-semibold text-[#171717] mb-1.5">{project.name}</h3>
              <p className="font-inter text-xs text-[#777777] mb-4 leading-relaxed">{project.desc}</p>

              <div className="mb-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-inter text-[#777777]">{project.completed}/{project.tasks} tasks</span>
                  <span className="text-xs font-inter text-[#777777]">{pct}%</span>
                </div>
                <div className="h-1.5 bg-[#FAFAFA] rounded-full">
                  <div
                    className={`h-1.5 ${project.color} rounded-full`}
                    style={{ width: `${pct}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Users size={12} className="text-[#777777]" />
                  <span className="text-xs font-inter text-[#777777]">{project.members} members</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={12} className="text-[#777777]" />
                  <span className="text-xs font-inter text-[#777777]">{project.due}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
