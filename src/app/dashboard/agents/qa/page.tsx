"use client";

import { useState, useRef, useEffect } from "react";
import { Brain, Send, BookOpen, Settings } from "lucide-react";

type Message = {
  id: string;
  role: "user" | "agent";
  content: string;
  time: string;
};

const initialMessages: Message[] = [
  {
    id: "1",
    role: "agent",
    content: "Hello. I am your Q&A Agent, connected to your company knowledge base. Ask me anything about your team's documents, procedures or company information.",
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  },
];

export default function QAAgentPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMsg: Message = {
      id: String(Date.now()),
      role: "user",
      content: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    await new Promise(r => setTimeout(r, 1200));

    const agentResponses: Record<string, string> = {
      default: "I searched your knowledge base for information related to that question. To provide accurate answers, please connect your company documents to this agent in the agent settings. Once documents are uploaded, I will be able to reference them directly in my responses.",
    };

    const lowerInput = input.toLowerCase();
    let response = agentResponses.default;

    if (lowerInput.includes("refund")) {
      response = "Based on your company policy documents, customers are eligible for a full refund within 30 days of purchase. Pro-rated refunds are available for annual subscribers within 90 days. For refund processing, contact the Customer Success team.";
    } else if (lowerInput.includes("onboard") || lowerInput.includes("new employee")) {
      response = "The onboarding process involves: (1) Account setup and tool access on Day 1, (2) Team introductions and role briefing in Week 1, (3) Process documentation review in Week 2, and (4) First project assignment by Day 30. The full onboarding guide is available in your Knowledge Base.";
    } else if (lowerInput.includes("vacation") || lowerInput.includes("leave")) {
      response = "According to your HR policy documents, employees receive 20 days of annual leave plus public holidays. Leave requests should be submitted at least 2 weeks in advance through the HR system and approved by your direct manager.";
    }

    const agentMsg: Message = {
      id: String(Date.now() + 1),
      role: "agent",
      content: response,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages(prev => [...prev, agentMsg]);
    setLoading(false);
  }

  return (
    <div className="flex flex-col h-[calc(100vh-56px)] lg:h-screen">
      {/* Header */}
      <div className="bg-white border-b border-[#E8E8E8] px-6 py-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#9652E8] rounded-xl flex items-center justify-center">
            <Brain size={16} className="text-white" />
          </div>
          <div>
            <h1 className="font-manrope font-semibold text-[#171717]">Q&A Agent</h1>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
              <span className="font-inter text-xs text-green-600">Active</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-inter text-[#777777] bg-[#FAFAFA] border border-[#E8E8E8] px-3 py-1.5 rounded-lg">
            <BookOpen size={12} />
            Knowledge Base Connected
          </div>
          <button className="p-2 rounded-lg border border-[#E8E8E8] hover:bg-[#FAFAFA] transition-colors">
            <Settings size={14} className="text-[#777777]" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-[#FAFAFA]">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "agent" && (
              <div className="w-7 h-7 bg-[#9652E8] rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                <Brain size={12} className="text-white" />
              </div>
            )}
            <div className={`max-w-xl rounded-2xl p-4 ${
              msg.role === "user"
                ? "bg-[#1677E8] text-white"
                : "bg-white border border-[#E8E8E8] text-[#171717]"
            }`}>
              <p className="font-inter text-sm leading-relaxed">{msg.content}</p>
              <p className={`font-inter text-xs mt-2 ${msg.role === "user" ? "text-white/60" : "text-[#777777]"}`}>{msg.time}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="w-7 h-7 bg-[#9652E8] rounded-lg flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
              <Brain size={12} className="text-white" />
            </div>
            <div className="bg-white border border-[#E8E8E8] rounded-2xl p-4">
              <div className="flex gap-1.5">
                {[0, 1, 2].map(i => (
                  <div key={i} className="w-2 h-2 bg-[#9652E8]/40 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}></div>
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="bg-white border-t border-[#E8E8E8] p-4 flex-shrink-0">
        <div className="flex items-center gap-3 max-w-3xl mx-auto">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
            placeholder="Ask a question about your company knowledge..."
            className="flex-1 px-4 py-3 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:border-[#9652E8] transition-colors"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            className="w-11 h-11 bg-[#9652E8] rounded-xl flex items-center justify-center hover:bg-[#8040CC] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          >
            <Send size={16} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
