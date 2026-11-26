"use client";

import { CalendarDays, Clock } from "lucide-react";

const events = [
  { date: "Nov 22", title: "Product brief due", type: "task", time: "EOD" },
  { date: "Nov 23", title: "Team standup", type: "meeting", time: "9:00 AM" },
  { date: "Nov 25", title: "Onboarding doc review", type: "task", time: "EOD" },
  { date: "Nov 27", title: "Weekly team sync", type: "meeting", time: "2:00 PM" },
  { date: "Nov 28", title: "Q4 campaign brief due", type: "task", time: "EOD" },
  { date: "Nov 30", title: "API documentation", type: "task", time: "EOD" },
  { date: "Dec 1", title: "Sprint planning", type: "meeting", time: "10:00 AM" },
];

const typeColors: Record<string, string> = {
  task: "bg-[#EAF3FF] text-[#1677E8]",
  meeting: "bg-[#F0E2FF] text-[#9652E8]",
};

export default function CalendarPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="font-manrope font-bold text-2xl text-[#171717]">Calendar</h1>
        <p className="font-inter text-sm text-[#777777] mt-1">Upcoming tasks and deadlines</p>
      </div>

      <div className="bg-white rounded-2xl border border-[#E8E8E8] overflow-hidden">
        <div className="p-5 border-b border-[#E8E8E8] flex items-center justify-between">
          <h2 className="font-manrope font-semibold text-[#171717]">November 2026</h2>
          <div className="flex gap-2">
            {["task", "meeting"].map(t => (
              <div key={t} className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full ${t === "task" ? "bg-[#1677E8]" : "bg-[#9652E8]"}`}></div>
                <span className="font-inter text-xs text-[#777777] capitalize">{t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="divide-y divide-[#E8E8E8]">
          {events.map((event, i) => (
            <div key={i} className="flex items-center gap-4 px-5 py-4 hover:bg-[#FAFAFA] transition-colors">
              <div className="w-14 text-center flex-shrink-0">
                <p className="font-manrope font-bold text-sm text-[#171717]">{event.date.split(" ")[1]}</p>
                <p className="font-inter text-xs text-[#777777]">{event.date.split(" ")[0]}</p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-inter text-sm text-[#171717]">{event.title}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Clock size={10} className="text-[#777777]" />
                  <span className="font-inter text-xs text-[#777777]">{event.time}</span>
                </div>
              </div>
              <span className={`text-xs font-inter px-2.5 py-1 rounded-full capitalize ${typeColors[event.type]}`}>
                {event.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
