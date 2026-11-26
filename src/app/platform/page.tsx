import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Brain, FolderKanban, BookOpen, Users, Zap, BarChart3, ArrowRight, CheckCircle } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "WorkNest AI brings your entire team into a shared workspace. Create teamspaces for departments, invite members, assign roles and ensure everyone works with the right level of access. Comments, mentions and activity tracking keep conversations connected to the work.",
    items: ["Teamspaces for departments and projects", "Role-based access and permissions", "Comments and mentions on tasks and documents", "Real-time activity feeds"],
    accent: "text-[#1677E8]",
    bg: "bg-[#EAF3FF]",
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    desc: "Every project in WorkNest AI gets its own space with tasks, timelines, assignees and progress tracking. Visualize your work in Kanban, list or calendar view and move tasks through structured stages as work progresses.",
    items: ["Kanban, list and calendar views", "Task assignments with deadlines and priorities", "Project progress tracking", "Multi-project portfolio view"],
    accent: "text-[#9652E8]",
    bg: "bg-[#F0E2FF]",
  },
  {
    icon: Brain,
    title: "AI Agents",
    desc: "WorkNest AI agents are connected to your company knowledge and workspace. They answer team questions accurately, help onboard new employees, generate reports, route incoming work and handle repetitive tasks that consume your team's time.",
    items: ["Agents trained on your company documents", "Q&A, Routing, Reporting and Help Desk agents", "Configurable agent permissions and knowledge sources", "Full activity and conversation history"],
    accent: "text-[#9652E8]",
    bg: "bg-[#F0E2FF]",
  },
  {
    icon: BookOpen,
    title: "Company Knowledge",
    desc: "Store your company's procedures, templates, meeting notes, onboarding materials and institutional knowledge in a searchable, organized knowledge base. AI-powered search means your team finds answers without digging through folders.",
    items: ["Organized document library with folders", "Full-text and AI-powered semantic search", "Document sharing with permission controls", "File uploads and version awareness"],
    accent: "text-[#1677E8]",
    bg: "bg-[#EAF3FF]",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    desc: "Replace manual hand-offs and routine reminders with structured automated workflows. Set triggers and define actions. WorkNest AI handles the operational overhead so your team focuses on high-value work.",
    items: ["Trigger-based workflow builder", "Automated task notifications and assignments", "Scheduled reports and recurring tasks", "Full automation execution history"],
    accent: "text-[#1677E8]",
    bg: "bg-[#EAF3FF]",
  },
  {
    icon: BarChart3,
    title: "Business Reporting",
    desc: "WorkNest AI surfaces activity data, project health metrics and team performance in structured dashboards. The Reporting Agent can generate written summaries of project progress on request or on a schedule.",
    items: ["Team and project performance dashboards", "AI-generated progress reports", "Activity tracking across workspace", "Export and share report capabilities"],
    accent: "text-[#9652E8]",
    bg: "bg-[#F0E2FF]",
  },
];

export default function PlatformPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#1677E8] font-inter font-medium text-sm uppercase tracking-widest mb-4">The Platform</p>
          <h1 className="font-manrope font-bold text-5xl lg:text-6xl text-[#171717] mb-6">
            One workspace. Every capability<br />your team needs.
          </h1>
          <p className="font-inter text-[#777777] text-xl max-w-2xl mx-auto leading-relaxed">
            WorkNest AI connects collaboration, project management, company knowledge, AI agents, automation and reporting into a single cohesive environment.
          </p>
        </div>
      </section>

      {/* Platform Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className={`w-12 h-12 ${pillar.bg} rounded-xl flex items-center justify-center mb-5`}>
                    <pillar.icon size={22} className={pillar.accent} />
                  </div>
                  <h2 className="font-manrope font-bold text-3xl text-[#171717] mb-4">{pillar.title}</h2>
                  <p className="font-inter text-[#777777] text-lg leading-relaxed mb-6">{pillar.desc}</p>
                  <div className="space-y-3">
                    {pillar.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle size={16} className={`${pillar.accent} flex-shrink-0 mt-0.5`} />
                        <span className="font-inter text-[#171717] text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-[#FAFAFA] rounded-2xl border border-[#E8E8E8] p-8 h-64 flex items-center justify-center ${i % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="text-center">
                    <div className={`w-16 h-16 ${pillar.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <pillar.icon size={28} className={pillar.accent} />
                    </div>
                    <p className="font-manrope font-semibold text-[#171717]">{pillar.title}</p>
                    <p className="font-inter text-[#777777] text-sm mt-1">WorkNest AI Platform</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#171717]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope font-bold text-4xl text-white mb-6">Start using WorkNest AI today</h2>
          <p className="font-inter text-white/60 text-lg mb-10">
            Set up your workspace, invite your team and deploy your first AI agent in minutes.
          </p>
          <Link href="/signup" className="inline-flex items-center gap-2 bg-[#1677E8] text-white font-manrope font-semibold px-8 py-4 rounded-lg hover:bg-[#1265CC] transition-colors">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
