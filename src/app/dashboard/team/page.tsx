export const dynamic = "force-dynamic";

import { createClient } from "@/lib/supabase/server";
import { Users, Mail, Shield } from "lucide-react";

const demoMembers = [
  { name: "Sarah Chen", email: "sarah@company.com", role: "Admin", joined: "Jan 2026", status: "active" },
  { name: "James Okoye", email: "james@company.com", role: "Member", joined: "Mar 2026", status: "active" },
  { name: "Maria Silva", email: "maria@company.com", role: "Member", joined: "Apr 2026", status: "active" },
  { name: "Alex Torres", email: "alex@company.com", role: "Member", joined: "Jun 2026", status: "active" },
  { name: "Priya Nair", email: "priya@company.com", role: "Viewer", joined: "Sep 2026", status: "active" },
];

const roleColors: Record<string, string> = {
  Admin: "bg-[#F0E2FF] text-[#9652E8]",
  Member: "bg-[#EAF3FF] text-[#1677E8]",
  Viewer: "bg-[#FAFAFA] text-[#777777]",
};

export default async function TeamPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-manrope font-bold text-2xl text-[#171717]">Team Members</h1>
          <p className="font-inter text-sm text-[#777777] mt-1">Manage workspace members and their permissions</p>
        </div>
        <button className="flex items-center gap-2 bg-[#1677E8] text-white font-inter font-medium text-sm px-4 py-2.5 rounded-lg hover:bg-[#1265CC] transition-colors">
          <Mail size={16} /> Invite Member
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total Members", value: demoMembers.length, icon: Users, bg: "bg-[#EAF3FF]", color: "text-[#1677E8]" },
          { label: "Admins", value: demoMembers.filter(m => m.role === "Admin").length, icon: Shield, bg: "bg-[#F0E2FF]", color: "text-[#9652E8]" },
          { label: "Active Today", value: 3, icon: Users, bg: "bg-green-50", color: "text-green-600" },
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

      <div className="bg-white rounded-2xl border border-[#E8E8E8] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E8E8E8] bg-[#FAFAFA]">
              {["Member", "Email", "Role", "Joined", "Status"].map(h => (
                <th key={h} className="text-left px-5 py-3 text-xs font-inter font-medium text-[#777777] uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {demoMembers.map((member) => (
              <tr key={member.email} className="border-b border-[#E8E8E8] last:border-0 hover:bg-[#FAFAFA]">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-[#EAF3FF] rounded-full flex items-center justify-center">
                      <span className="font-manrope font-semibold text-[#1677E8] text-xs">{member.name[0]}</span>
                    </div>
                    <span className="font-inter text-sm text-[#171717]">{member.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 font-inter text-sm text-[#777777]">{member.email}</td>
                <td className="px-5 py-3.5">
                  <span className={`text-xs font-inter px-2.5 py-1 rounded-full ${roleColors[member.role]}`}>{member.role}</span>
                </td>
                <td className="px-5 py-3.5 font-inter text-sm text-[#777777]">{member.joined}</td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span className="font-inter text-xs text-green-600">Active</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
