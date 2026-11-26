import { CheckCircle, AlertTriangle, Clock } from "lucide-react";

const history = [
  { workflow: "Task Assignment Notification", trigger: "Task assigned to James Okoye", status: "success", time: "1 hour ago" },
  { workflow: "Weekly Progress Report", trigger: "Scheduled: Monday 9:00 AM", status: "success", time: "3 days ago" },
  { workflow: "Deadline Reminder", trigger: "Task due in 2 days: Product brief", status: "success", time: "Yesterday" },
  { workflow: "Task Assignment Notification", trigger: "Task assigned to Maria Silva", status: "success", time: "2 days ago" },
  { workflow: "New Member Welcome", trigger: "New member joined: Priya Nair", status: "success", time: "1 week ago" },
  { workflow: "Project Completion Update", trigger: "Platform Security Audit completed", status: "success", time: "2 weeks ago" },
  { workflow: "Weekly Progress Report", trigger: "Scheduled: Monday 9:00 AM", status: "failed", time: "2 weeks ago" },
];

const statusConfig = {
  success: { icon: CheckCircle, color: "text-green-600", bg: "bg-green-50", label: "Success" },
  failed: { icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50", label: "Failed" },
  pending: { icon: Clock, color: "text-yellow-600", bg: "bg-yellow-50", label: "Pending" },
};

export default function AutomationHistoryPage() {
  return (
    <div className="p-6 lg:p-8">
      <div className="mb-6">
        <h1 className="font-manrope font-bold text-2xl text-[#171717]">Automation History</h1>
        <p className="font-inter text-sm text-[#777777] mt-1">Recent workflow execution log</p>
      </div>

      <div className="bg-white rounded-2xl border border-[#E8E8E8] overflow-hidden">
        {history.map((entry, i) => {
          const cfg = statusConfig[entry.status as keyof typeof statusConfig];
          return (
            <div key={i} className={`flex items-center gap-4 px-5 py-4 ${i < history.length - 1 ? "border-b border-[#E8E8E8]" : ""} hover:bg-[#FAFAFA]`}>
              <div className={`w-8 h-8 ${cfg.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <cfg.icon size={14} className={cfg.color} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-inter font-medium text-sm text-[#171717]">{entry.workflow}</p>
                <p className="font-inter text-xs text-[#777777]">{entry.trigger}</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className={`text-xs font-inter px-2.5 py-1 rounded-full ${cfg.bg} ${cfg.color}`}>{cfg.label}</span>
                <span className="font-inter text-xs text-[#777777]">{entry.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
