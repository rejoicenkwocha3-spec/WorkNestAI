"use client";

import { useState } from "react";
import { Layers, Send, ArrowRight } from "lucide-react";

type Message = { id: string; role: "user" | "agent"; content: string };

const initial: Message[] = [
  { id: "1", role: "agent", content: "Hello. I am your Task Routing Agent. Describe a task or request and I will suggest the most appropriate team member to assign it to, based on their role and current workload." },
];

const teamMembers = [
  { name: "Sarah Chen", role: "Product Manager", capacity: "Medium" },
  { name: "James Okoye", role: "Engineer", capacity: "High" },
  { name: "Maria Silva", role: "Designer", capacity: "Low" },
  { name: "Alex Torres", role: "Marketing", capacity: "Medium" },
];

export default function TaskRoutingPage() {
  const [messages, setMessages] = useState<Message[]>(initial);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim() || loading) return;
    const user: Message = { id: String(Date.now()), role: "user", content: input };
    setMessages(prev => [...prev, user]);
    setInput("");
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));

    const lower = input.toLowerCase();
    let response = "Based on your request, I would suggest routing this task to the team member with the most relevant role and available capacity. Please describe the task type and urgency for a more specific recommendation.";

    if (lower.includes("design") || lower.includes("ui") || lower.includes("visual")) {
      response = "This appears to be a design task. I recommend assigning it to Maria Silva (Designer). Note: her current capacity is marked as Low. If urgent, consider discussing timeline with her directly.";
    } else if (lower.includes("engineering") || lower.includes("bug") || lower.includes("code") || lower.includes("development")) {
      response = "This is an engineering task. James Okoye (Engineer) has High capacity right now and is best positioned to take this on. I have prepared a task card: assign to James Okoye, priority Medium.";
    } else if (lower.includes("marketing") || lower.includes("campaign") || lower.includes("content")) {
      response = "This is a marketing task. Alex Torres (Marketing) has Medium capacity and handles campaign work. Suggested assignee: Alex Torres.";
    } else if (lower.includes("product") || lower.includes("roadmap") || lower.includes("feature")) {
      response = "This looks like a product management task. Sarah Chen (Product Manager) manages the roadmap. I recommend assigning this to Sarah Chen.";
    }

    setMessages(prev => [...prev, { id: String(Date.now() + 1), role: "agent", content: response }]);
    setLoading(false);
  }

  return (
    <div className="flex flex-col h-[calc(100vh-56px)] lg:h-screen">
      <div className="bg-white border-b border-[#E8E8E8] px-6 py-4 flex items-center gap-3 flex-shrink-0">
        <div className="w-9 h-9 bg-[#1677E8] rounded-xl flex items-center justify-center">
          <Layers size={16} className="text-white" />
        </div>
        <div>
          <h1 className="font-manrope font-semibold text-[#171717]">Task Routing Agent</h1>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
            <span className="font-inter text-xs text-green-600">Active</span>
          </div>
        </div>
        <div className="ml-auto hidden sm:flex gap-2">
          {teamMembers.map(m => (
            <div key={m.name} className="text-xs font-inter text-[#777777] bg-[#FAFAFA] border border-[#E8E8E8] px-2.5 py-1 rounded-lg">
              {m.name.split(" ")[0]}: {m.capacity}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#FAFAFA]">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "agent" && (
              <div className="w-7 h-7 bg-[#1677E8] rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                <Layers size={12} className="text-white" />
              </div>
            )}
            <div className={`max-w-xl rounded-2xl p-4 ${msg.role === "user" ? "bg-[#1677E8] text-white" : "bg-white border border-[#E8E8E8] text-[#171717]"}`}>
              <p className="font-inter text-sm leading-relaxed">{msg.content}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="w-7 h-7 bg-[#1677E8] rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
              <Layers size={12} className="text-white" />
            </div>
            <div className="bg-white border border-[#E8E8E8] rounded-2xl p-4">
              <div className="flex gap-1.5">
                {[0,1,2].map(i => <div key={i} className="w-2 h-2 bg-[#1677E8]/40 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}></div>)}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white border-t border-[#E8E8E8] p-4 flex-shrink-0">
        <div className="flex gap-3 max-w-3xl mx-auto">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Describe a task to route..."
            className="flex-1 px-4 py-3 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:border-[#1677E8]"
          />
          <button onClick={send} disabled={!input.trim() || loading} className="w-11 h-11 bg-[#1677E8] rounded-xl flex items-center justify-center hover:bg-[#1265CC] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0">
            <Send size={16} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
