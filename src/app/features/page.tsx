import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Brain, FolderKanban, BookOpen, Users, Zap, BarChart3, MessageSquare, Search, Shield, Bell, CalendarDays, FileText, Settings, ArrowRight } from "lucide-react";

const featureGroups = [
  {
    category: "AI Workspace",
    color: "text-[#9652E8]",
    bg: "bg-[#F0E2FF]",
    features: [
      { icon: Brain, title: "AI Agents", desc: "Deploy configurable AI agents connected to your company knowledge. Each agent has a purpose, defined knowledge sources and an activity history." },
      { icon: MessageSquare, title: "AI Chat Interface", desc: "Interact with AI agents through a natural conversational interface. Ask questions, request summaries and receive accurate answers from your documents." },
      { icon: Search, title: "AI-Powered Search", desc: "Search across all workspace content including documents, tasks and knowledge base entries using semantic understanding, not just keyword matching." },
    ],
  },
  {
    category: "AI Agents",
    color: "text-[#9652E8]",
    bg: "bg-[#F0E2FF]",
    features: [
      { icon: Brain, title: "Task Routing Agent", desc: "Automatically organizes incoming tasks and routes work to the appropriate team member based on role, capacity and project context." },
      { icon: Brain, title: "Q&A Agent", desc: "Answers questions from your team using the documents and knowledge stored in your workspace. Accurate, sourced responses every time." },
      { icon: Brain, title: "Reporting Agent", desc: "Generates structured summaries of project progress, team activity and business performance on request or on a configured schedule." },
      { icon: Brain, title: "IT Help Desk Agent", desc: "Answers common internal IT questions using your documented procedures and reduces the volume of repetitive support requests." },
      { icon: Brain, title: "Onboarding Agent", desc: "Guides new employees through company processes, documentation and responsibilities using your existing knowledge base content." },
    ],
  },
  {
    category: "Project Management",
    color: "text-[#1677E8]",
    bg: "bg-[#EAF3FF]",
    features: [
      { icon: FolderKanban, title: "Kanban Boards", desc: "Visualize project work across To Do, In Progress, In Review and Completed columns. Drag and drop tasks as work advances." },
      { icon: FileText, title: "List View", desc: "View all tasks in a structured list with sortable columns for status, assignee, priority and due date." },
      { icon: CalendarDays, title: "Calendar View", desc: "See tasks and deadlines on a calendar. Understand workload and upcoming commitments at a glance." },
      { icon: FolderKanban, title: "Project Tracking", desc: "Monitor project progress, task completion rates and upcoming deadlines across all active projects." },
    ],
  },
  {
    category: "Smart Task Management",
    color: "text-[#1677E8]",
    bg: "bg-[#EAF3FF]",
    features: [
      { icon: Bell, title: "Task Assignments", desc: "Assign tasks to team members with due dates, priorities and descriptions. Everyone knows what they own." },
      { icon: MessageSquare, title: "Task Comments", desc: "Discuss work directly on the task. Keep conversations attached to context rather than scattered across messages." },
      { icon: Settings, title: "Priority Levels", desc: "Set task priority as urgent, high, medium or low. Focus team attention on the work that matters most." },
    ],
  },
  {
    category: "Documents and Knowledge Base",
    color: "text-[#1677E8]",
    bg: "bg-[#EAF3FF]",
    features: [
      { icon: BookOpen, title: "Document Editor", desc: "Create and edit rich text documents within WorkNest AI. No third-party editor required." },
      { icon: FileText, title: "File Uploads", desc: "Upload existing documents, spreadsheets and presentations. Store everything in one organized location." },
      { icon: Search, title: "Full-Text Search", desc: "Search the entire knowledge base instantly. Find the document or information you need in seconds." },
      { icon: BookOpen, title: "Folder Organization", desc: "Organize documents into folders by department, project or topic. Maintain a clean, navigable structure." },
    ],
  },
  {
    category: "Team Collaboration",
    color: "text-[#1677E8]",
    bg: "bg-[#EAF3FF]",
    features: [
      { icon: Users, title: "Teamspaces", desc: "Create dedicated spaces for teams, departments or projects. Control access and visibility within each space." },
      { icon: Users, title: "Member Management", desc: "Invite team members, assign roles and manage workspace access from a central administration panel." },
      { icon: Shield, title: "Role-Based Permissions", desc: "Define what each team member can view, edit and manage. Protect sensitive information while enabling collaboration." },
      { icon: Bell, title: "Activity Tracking", desc: "Monitor all workspace activity in a structured audit trail. See who changed what and when." },
    ],
  },
  {
    category: "Workflow Automation",
    color: "text-[#9652E8]",
    bg: "bg-[#F0E2FF]",
    features: [
      { icon: Zap, title: "Automation Builder", desc: "Create trigger-based automations without code. Set conditions and define the actions WorkNest AI takes automatically." },
      { icon: CalendarDays, title: "Scheduled Automations", desc: "Run workflows on a schedule. Generate weekly reports, send recurring reminders and create recurring tasks automatically." },
      { icon: Bell, title: "Event Notifications", desc: "Automatically notify team members when tasks are assigned, deadlines approach or projects change status." },
      { icon: Settings, title: "Automation History", desc: "Review the full history of automation executions including successes, errors and triggered actions." },
    ],
  },
  {
    category: "Analytics",
    color: "text-[#9652E8]",
    bg: "bg-[#F0E2FF]",
    features: [
      { icon: BarChart3, title: "Team Analytics", desc: "Understand team activity, task completion rates and workload distribution across projects and members." },
      { icon: BarChart3, title: "Project Reports", desc: "Track project health, milestone progress and delivery performance for every active initiative." },
      { icon: Brain, title: "AI-Generated Reports", desc: "Request or schedule written summaries of project and team performance generated by the Reporting Agent." },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 bg-[#FAFAFA] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#1677E8] font-inter font-medium text-sm uppercase tracking-widest mb-4">Features</p>
          <h1 className="font-manrope font-bold text-5xl lg:text-6xl text-[#171717] mb-6">
            Everything in one platform
          </h1>
          <p className="font-inter text-[#777777] text-xl max-w-2xl mx-auto leading-relaxed">
            WorkNest AI combines the capabilities modern teams need into a single coherent product, without the complexity of integrating multiple tools.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {featureGroups.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-3 mb-8">
                <div className={`h-px flex-1 bg-[#E8E8E8]`}></div>
                <span className={`font-manrope font-semibold text-sm uppercase tracking-widest ${group.color}`}>{group.category}</span>
                <div className={`h-px flex-1 bg-[#E8E8E8]`}></div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.features.map((feat) => (
                  <div key={feat.title} className="bg-[#FAFAFA] rounded-2xl p-6 border border-[#E8E8E8]">
                    <div className={`w-10 h-10 ${group.bg} rounded-xl flex items-center justify-center mb-4`}>
                      <feat.icon size={18} className={group.color} />
                    </div>
                    <h3 className="font-manrope font-semibold text-[#171717] mb-2">{feat.title}</h3>
                    <p className="font-inter text-[#777777] text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#171717]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope font-bold text-4xl text-white mb-6">Start using all of these features today</h2>
          <p className="font-inter text-white/60 text-lg mb-10">
            Every WorkNest AI plan includes access to the full platform. Choose the tier that fits your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="inline-flex items-center gap-2 bg-[#1677E8] text-white font-manrope font-semibold px-8 py-4 rounded-lg hover:bg-[#1265CC] transition-colors">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 font-manrope font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors">
              View Pricing <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
