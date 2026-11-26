export const dynamic = "force-dynamic";

import { createClient } from "@/lib/supabase/server";
import { User, Bell, Shield, Globe } from "lucide-react";

export default async function SettingsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const name = user?.user_metadata?.full_name || "";
  const email = user?.email || "";

  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      <div className="mb-8">
        <h1 className="font-manrope font-bold text-2xl text-[#171717]">Account Settings</h1>
        <p className="font-inter text-sm text-[#777777] mt-1">Manage your personal account preferences</p>
      </div>

      {/* Profile */}
      <div className="bg-white rounded-2xl border border-[#E8E8E8] p-6 mb-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 bg-[#EAF3FF] rounded-lg flex items-center justify-center">
            <User size={16} className="text-[#1677E8]" />
          </div>
          <h2 className="font-manrope font-semibold text-[#171717]">Profile</h2>
        </div>
        <div className="flex items-center gap-4 mb-5">
          <div className="w-16 h-16 bg-[#1677E8] rounded-full flex items-center justify-center">
            <span className="font-manrope font-bold text-white text-xl">
              {name ? name[0].toUpperCase() : "U"}
            </span>
          </div>
          <div>
            <p className="font-manrope font-semibold text-[#171717]">{name || "Your Name"}</p>
            <p className="font-inter text-sm text-[#777777]">{email}</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-inter text-sm font-medium text-[#171717] mb-1.5">Full Name</label>
            <input
              defaultValue={name}
              className="w-full px-4 py-2.5 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:border-[#1677E8]"
            />
          </div>
          <div>
            <label className="block font-inter text-sm font-medium text-[#171717] mb-1.5">Email Address</label>
            <input
              defaultValue={email}
              disabled
              className="w-full px-4 py-2.5 border border-[#E8E8E8] rounded-xl font-inter text-sm bg-[#FAFAFA] text-[#777777] cursor-not-allowed"
            />
          </div>
        </div>
        <button className="mt-4 bg-[#1677E8] text-white font-inter font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-[#1265CC] transition-colors">
          Save Changes
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-2xl border border-[#E8E8E8] p-6 mb-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 bg-[#F0E2FF] rounded-lg flex items-center justify-center">
            <Bell size={16} className="text-[#9652E8]" />
          </div>
          <h2 className="font-manrope font-semibold text-[#171717]">Notifications</h2>
        </div>
        <div className="space-y-3">
          {[
            { label: "Task assignments", desc: "When a task is assigned to you" },
            { label: "Deadline reminders", desc: "2 days before a task is due" },
            { label: "Project updates", desc: "When a project you are on changes status" },
            { label: "AI agent activity", desc: "Weekly summary of AI agent activity" },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center justify-between py-2 border-b border-[#E8E8E8] last:border-0">
              <div>
                <p className="font-inter text-sm text-[#171717]">{item.label}</p>
                <p className="font-inter text-xs text-[#777777]">{item.desc}</p>
              </div>
              <div className={`w-10 h-5 rounded-full cursor-pointer transition-colors ${i < 3 ? "bg-[#1677E8]" : "bg-[#E8E8E8]"}`}>
                <div className={`w-4 h-4 bg-white rounded-full shadow mt-0.5 transition-transform ${i < 3 ? "translate-x-5" : "translate-x-0.5"}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-white rounded-2xl border border-[#E8E8E8] p-6">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-8 bg-[#EAF3FF] rounded-lg flex items-center justify-center">
            <Shield size={16} className="text-[#1677E8]" />
          </div>
          <h2 className="font-manrope font-semibold text-[#171717]">Security</h2>
        </div>
        <button className="text-sm font-inter text-[#1677E8] border border-[#1677E8]/30 px-4 py-2.5 rounded-lg hover:bg-[#EAF3FF] transition-colors">
          Change Password
        </button>
      </div>
    </div>
  );
}
