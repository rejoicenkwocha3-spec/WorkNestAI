"use client";

import { useState } from "react";
import { Brain, ArrowRight, Settings, MessageSquare, BarChart3, Layers, HelpCircle, Users } from "lucide-react";
import Link from "next/link";

const agents = [
  {
    id: "qa",
    name: "Q&A Agent",
    desc: "Answers team questions using information stored in your documents and knowledge base. Provides accurate, sourced responses.",
    status: "active",
    icon: Brain,
    color: "bg-[#9652E8]",
    conversations: 28,
    href: "/dashboard/agents/qa",
    tags: ["Knowledge", "Q&A"],
  },
  {
    id: "task-routing",
    name: "Task Routing Agent",
    desc: "Organizes incoming tasks and routes work to the appropriate team member based on role, capacity and project context.",
    status: "active",
    icon: Layers,
    color: "bg-[#1677E8]",
    conversations: 15,
    href: "/dashboard/agents/task-routing",
    tags: ["Tasks", "Routing"],
  },
  {
    id: "reporting",
    name: "Reporting Agent",
    desc: "Generates structured summaries of project progress, team activity and business performance on request or on a schedule.",
    status: "active",
    icon: BarChart3,
    color: "bg-green-500",
    conversations: 12,
    href: "/dashboard/agents/reporting",
    tags: ["Reports", "Analytics"],
  },
  {
    id: "it-helpdesk",
    name: "IT Help Desk Agent",
    desc: "Answers common internal IT questions using documented procedures. Reduces repetitive support requests to your IT team.",
    status: "inactive",
    icon: HelpCircle,
    color: "bg-orange-500",
    conversations: 0,
    href: "/dashboard/agents",
    tags: ["IT", "Support"],
  },
  {
    id: "onboarding",
    name: "Onboarding Agent",
    desc: "Guides new employees through company processes, documentation and responsibilities using your existing knowledge base.",
    status: "inactive",
    icon: Users,
    color: "bg-pink-500",
    conversations: 0,
    href: "/dashboard/agents",
    tags: ["HR", "Onboarding"],
  },
];

export default function AgentsPage() {
  const [localAgents, setLocalAgents] = useState(agents);

  function toggleAgent(id: string) {
    setLocalAgents(prev => prev.map(a =>
      a.id === id ? { ...a, status: a.status === "active" ? "inactive" : "active" } : a
    ));
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-manrope font-bold text-2xl text-[#171717]">AI Agents</h1>
          <p className="font-inter text-sm text-[#777777] mt-1">Configure and manage your workspace AI agents</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {localAgents.map((agent) => (
          <div key={agent.id} className="bg-white rounded-2xl border border-[#E8E8E8] p-5 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 ${agent.color} rounded-xl flex items-center justify-center`}>
                <agent.icon size={18} className="text-white" />
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${agent.status === "active" ? "bg-green-400" : "bg-[#E8E8E8]"}`}></div>
                <span className={`text-xs font-inter ${agent.status === "active" ? "text-green-600" : "text-[#777777]"}`}>
                  {agent.status === "active" ? "Active" : "Inactive"}
                </span>
              </div>
            </div>

            <h3 className="font-manrope font-semibold text-[#171717] mb-2">{agent.name}</h3>
            <p className="font-inter text-sm text-[#777777] leading-relaxed mb-4 flex-1">{agent.desc}</p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {agent.tags.map((tag) => (
                <span key={tag} className="bg-[#FAFAFA] border border-[#E8E8E8] text-[#777777] text-xs font-inter px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-[#E8E8E8]">
              <span className="text-xs font-inter text-[#777777]">{agent.conversations} conversations</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleAgent(agent.id)}
                  className={`text-xs font-inter px-3 py-1.5 rounded-lg transition-colors ${
                    agent.status === "active"
                      ? "bg-red-50 text-red-600 hover:bg-red-100"
                      : "bg-[#EAF3FF] text-[#1677E8] hover:bg-[#1677E8]/20"
                  }`}
                >
                  {agent.status === "active" ? "Disable" : "Enable"}
                </button>
                <Link
                  href={agent.href}
                  className="text-xs font-inter px-3 py-1.5 rounded-lg bg-[#FAFAFA] border border-[#E8E8E8] text-[#171717] hover:border-[#1677E8]/30 transition-colors"
                >
                  Open
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
