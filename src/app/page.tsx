import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Brain,
  Users,
  Zap,
  FolderKanban,
  BookOpen,
  BarChart3,
  ArrowRight,
  CheckCircle,
  MessageSquare,
  FileText,
  Settings,
} from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI Agents",
    desc: "Deploy intelligent agents that understand your business context, answer team questions and handle repetitive administrative work automatically.",
    accent: "bg-[#F0E2FF]",
    iconColor: "text-[#9652E8]",
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    desc: "Organize work into projects, create tasks, assign team members, track progress and visualize your pipeline with Kanban, list and calendar views.",
    accent: "bg-[#EAF3FF]",
    iconColor: "text-[#1677E8]",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    desc: "Build a central repository of company documents, procedures, meeting notes and resources. Ask questions and receive accurate AI-powered answers.",
    accent: "bg-[#EAF3FF]",
    iconColor: "text-[#1677E8]",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "Create teamspaces, invite colleagues, assign roles and work together on projects, documents and tasks in one organized environment.",
    accent: "bg-[#F0E2FF]",
    iconColor: "text-[#9652E8]",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    desc: "Build automated workflows triggered by events. Route tasks, send notifications, generate reports and reduce the manual work your team handles daily.",
    accent: "bg-[#EAF3FF]",
    iconColor: "text-[#1677E8]",
  },
  {
    icon: BarChart3,
    title: "Analytics and Reports",
    desc: "Track team performance, monitor project health and understand how your organization is working with dashboards and automated reporting.",
    accent: "bg-[#F0E2FF]",
    iconColor: "text-[#9652E8]",
  },
];

const useCases = [
  {
    team: "Marketing Teams",
    desc: "Plan campaigns, track content production, manage assets and brief AI agents to research competitors and draft reports.",
  },
  {
    team: "Operations Teams",
    desc: "Document procedures, automate recurring processes, track initiatives and use AI agents to route and resolve internal requests.",
  },
  {
    team: "Sales Teams",
    desc: "Manage pipeline tasks, track follow-ups, store account knowledge and let AI agents prepare meeting summaries and proposal drafts.",
  },
  {
    team: "Software Teams",
    desc: "Manage sprints, track bugs, document technical decisions and use AI agents to answer questions about codebases and processes.",
  },
];

const faqs = [
  {
    q: "What is WorkNest AI?",
    a: "WorkNest AI is a B2B workspace platform that combines project management, company knowledge, team collaboration and AI agents in one place. Teams use it to organize their work, store information and automate repetitive tasks.",
  },
  {
    q: "How do AI agents work in WorkNest AI?",
    a: "AI agents are configured assistants that have access to your company's documents and knowledge base. You can ask them questions, assign them tasks and configure them to perform specific functions like answering IT questions or generating weekly reports.",
  },
  {
    q: "Is WorkNest AI suitable for small teams?",
    a: "Yes. WorkNest AI is designed to scale from small teams to large enterprise organizations. The platform is flexible enough to serve a team of five or a company of five hundred.",
  },
  {
    q: "How is WorkNest AI different from other project management tools?",
    a: "WorkNest AI brings AI agents, company knowledge and workflow automation into the same workspace as your projects and tasks. Rather than switching between multiple tools, your team works in one place where AI understands your context.",
  },
  {
    q: "Can I migrate existing documents and data into WorkNest AI?",
    a: "Yes. WorkNest AI supports document uploads and file imports. Your existing procedures, notes and resources can be brought into the knowledge base and made searchable immediately.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center pt-12">
            <div className="inline-flex items-center gap-2 bg-[#EAF3FF] text-[#1677E8] text-sm font-inter px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#1677E8] rounded-full"></span>
              AI-Powered Business Workspace
            </div>
            <h1 className="font-manrope font-bold text-5xl lg:text-7xl text-[#171717] leading-tight mb-6">
              Where teams and AI agents<br />
              <span className="text-[#1677E8]">work better together.</span>
            </h1>
            <p className="font-inter text-[#777777] text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
              Capture context, find answers and automate everyday work with AI built for your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-[#1677E8] text-white font-manrope font-semibold px-8 py-4 rounded-lg hover:bg-[#1265CC] transition-colors inline-flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight size={18} />
              </Link>
              <Link
                href="/platform"
                className="bg-[#FAFAFA] text-[#171717] border border-[#E8E8E8] font-manrope font-semibold px-8 py-4 rounded-lg hover:border-[#1677E8] transition-colors text-center"
              >
                Explore Platform
              </Link>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="mt-20 rounded-2xl border border-[#E8E8E8] overflow-hidden shadow-lg bg-[#FAFAFA]">
            <div className="bg-[#171717] px-5 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="ml-3 text-white/40 text-xs font-inter">WorkNest AI Workspace</span>
            </div>
            <div className="flex h-[380px] lg:h-[460px]">
              {/* Sidebar */}
              <div className="w-56 bg-white border-r border-[#E8E8E8] p-4 hidden sm:block">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-7 h-7 bg-[#1677E8] rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-bold">W</span>
                  </div>
                  <span className="font-manrope font-semibold text-[#171717] text-sm">Acme Corp</span>
                </div>
                {[
                  { label: "Home", active: false },
                  { label: "My Workspace", active: false },
                  { label: "Projects", active: true },
                  { label: "My Tasks", active: false },
                  { label: "AI Agents", active: false },
                  { label: "Knowledge Base", active: false },
                  { label: "Automation", active: false },
                  { label: "Analytics", active: false },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`px-3 py-2 rounded-lg text-xs font-inter mb-0.5 cursor-default ${item.active ? "bg-[#EAF3FF] text-[#1677E8] font-medium" : "text-[#777777] hover:bg-[#FAFAFA]"}`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 p-5 overflow-hidden">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-manrope font-semibold text-[#171717]">Projects</h3>
                  <div className="bg-[#1677E8] text-white text-xs px-3 py-1.5 rounded-lg font-inter cursor-default">
                    New Project
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-5">
                  {[
                    { name: "Q4 Marketing Campaign", tasks: "12 tasks", progress: 65, color: "bg-[#1677E8]" },
                    { name: "Product Roadmap 2026", tasks: "8 tasks", progress: 40, color: "bg-[#9652E8]" },
                    { name: "Customer Onboarding Flow", tasks: "5 tasks", progress: 85, color: "bg-green-500" },
                  ].map((project) => (
                    <div key={project.name} className="bg-white rounded-xl p-4 border border-[#E8E8E8]">
                      <p className="font-manrope font-semibold text-[#171717] text-sm mb-1">{project.name}</p>
                      <p className="text-[#777777] text-xs font-inter mb-3">{project.tasks}</p>
                      <div className="h-1.5 bg-[#FAFAFA] rounded-full">
                        <div className={`h-1.5 ${project.color} rounded-full`} style={{ width: `${project.progress}%` }}></div>
                      </div>
                      <p className="text-[#777777] text-xs font-inter mt-1.5">{project.progress}% complete</p>
                    </div>
                  ))}
                </div>

                {/* Task Board Preview */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { col: "To Do", items: ["Write product brief", "Research competitors"], color: "bg-gray-100 text-gray-600" },
                    { col: "In Progress", items: ["Design new landing page", "Review Q3 analytics"], color: "bg-[#EAF3FF] text-[#1677E8]" },
                    { col: "Completed", items: ["Team standup notes"], color: "bg-green-50 text-green-700" },
                  ].map((col) => (
                    <div key={col.col}>
                      <div className={`text-xs font-inter font-medium px-2 py-1 rounded-md ${col.color} inline-block mb-2`}>{col.col}</div>
                      {col.items.map((item) => (
                        <div key={item} className="bg-white rounded-lg border border-[#E8E8E8] p-2.5 mb-1.5">
                          <p className="text-[#171717] text-xs font-inter">{item}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Assistant Panel */}
              <div className="w-64 border-l border-[#E8E8E8] bg-white p-4 hidden lg:block">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-[#9652E8] rounded-lg flex items-center justify-center">
                    <Brain size={12} className="text-white" />
                  </div>
                  <span className="text-xs font-manrope font-semibold text-[#171717]">Q&A Agent</span>
                  <span className="ml-auto w-2 h-2 bg-green-400 rounded-full"></span>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#FAFAFA] rounded-xl p-3">
                    <p className="text-xs font-inter text-[#777777]">How many tasks are overdue this week?</p>
                  </div>
                  <div className="bg-[#F0E2FF] rounded-xl p-3">
                    <p className="text-xs font-inter text-[#9652E8]">Based on your workspace, 3 tasks are overdue. The highest priority is the product brief assigned to Sarah.</p>
                  </div>
                  <div className="bg-[#FAFAFA] rounded-xl p-3">
                    <p className="text-xs font-inter text-[#777777]">Summarize last week&apos;s activity</p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex-1 bg-[#FAFAFA] border border-[#E8E8E8] rounded-lg px-3 py-2 text-xs text-[#777777] font-inter">
                      Ask anything...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What WorkNest AI Does */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#1677E8] font-inter font-medium text-sm uppercase tracking-widest mb-4">Platform Capabilities</p>
            <h2 className="font-manrope font-bold text-4xl text-[#171717] mb-6">
              Everything your team needs in one workspace
            </h2>
            <p className="font-inter text-[#777777] text-lg leading-relaxed">
              WorkNest AI connects the tools your team already needs with AI that understands your business context.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-white rounded-2xl p-6 border border-[#E8E8E8] hover:border-[#1677E8]/30 hover:shadow-sm transition-all">
                <div className={`w-12 h-12 ${cap.accent} rounded-xl flex items-center justify-center mb-4`}>
                  <cap.icon size={22} className={cap.iconColor} />
                </div>
                <h3 className="font-manrope font-semibold text-[#171717] text-lg mb-2">{cap.title}</h3>
                <p className="font-inter text-[#777777] text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Productivity Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#9652E8] font-inter font-medium text-sm uppercase tracking-widest mb-4">AI Agents</p>
              <h2 className="font-manrope font-bold text-4xl text-[#171717] mb-6">
                AI that works within your business context
              </h2>
              <p className="font-inter text-[#777777] text-lg leading-relaxed mb-8">
                WorkNest AI agents are connected to your company knowledge, understand your team structure and can take meaningful action. They are not generic chatbots.
              </p>
              <div className="space-y-4">
                {[
                  "Agents answer questions using your actual company documents",
                  "Task Routing Agent assigns and organizes incoming work",
                  "Reporting Agent generates structured summaries and project updates",
                  "Onboarding Agent helps new employees understand processes immediately",
                  "IT Help Desk Agent resolves common internal support questions",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#1677E8] flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-[#171717] text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/features" className="inline-flex items-center gap-2 text-[#1677E8] font-manrope font-semibold hover:gap-3 transition-all">
                  Explore AI features <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="bg-[#171717] rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-[#9652E8] rounded-lg flex items-center justify-center">
                  <Brain size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-manrope font-semibold text-sm">Q&A Agent</p>
                  <p className="text-white/40 text-xs font-inter">Connected to 48 documents</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 text-xs font-inter">Active</span>
                </div>
              </div>

              {[
                { role: "user", text: "What is our refund policy for annual subscribers?" },
                { role: "agent", text: "According to your Customer Policy document updated in September 2025, annual subscribers are eligible for a full refund within 30 days of purchase. Pro-rated refunds are available within 90 days for unused months." },
                { role: "user", text: "Who do I contact to process a refund?" },
                { role: "agent", text: "Refund requests are handled by the Customer Success team. You can reach them at success@example.com or through the internal #customer-success Teamspace channel." },
              ].map((msg, i) => (
                <div key={i} className={`rounded-xl p-3.5 ${msg.role === "user" ? "bg-white/10 ml-4" : "bg-[#9652E8]/20 mr-4"}`}>
                  <p className="text-sm font-inter text-white/80 leading-relaxed">{msg.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#1677E8] font-inter font-medium text-sm uppercase tracking-widest mb-4">Use Cases</p>
            <h2 className="font-manrope font-bold text-4xl text-[#171717] mb-6">
              Built for every team in your business
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {useCases.map((uc) => (
              <div key={uc.team} className="bg-white rounded-2xl p-6 border border-[#E8E8E8]">
                <h3 className="font-manrope font-semibold text-[#171717] text-base mb-3">{uc.team}</h3>
                <p className="font-inter text-[#777777] text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#1677E8] font-inter font-medium text-sm uppercase tracking-widest mb-4">Pricing</p>
            <h2 className="font-manrope font-bold text-4xl text-[#171717] mb-6">
              Simple, transparent pricing
            </h2>
            <p className="font-inter text-[#777777] text-lg">
              Choose the plan that fits your team. Every plan includes the core WorkNest AI workspace.
            </p>
          </div>

          <div className="text-center">
            <Link href="/pricing" className="inline-flex items-center gap-2 bg-[#1677E8] text-white font-manrope font-semibold px-8 py-4 rounded-lg hover:bg-[#1265CC] transition-colors">
              View All Plans <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#1677E8] font-inter font-medium text-sm uppercase tracking-widest mb-4">FAQ</p>
            <h2 className="font-manrope font-bold text-4xl text-[#171717]">Frequently asked questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 border border-[#E8E8E8]">
                <h3 className="font-manrope font-semibold text-[#171717] text-base mb-3">{faq.q}</h3>
                <p className="font-inter text-[#777777] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#171717]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-white mb-6">
            Ready to bring your team and AI together?
          </h2>
          <p className="font-inter text-white/60 text-lg mb-10">
            Start organizing your work, building your knowledge base and deploying AI agents in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="bg-[#1677E8] text-white font-manrope font-semibold px-8 py-4 rounded-lg hover:bg-[#1265CC] transition-colors inline-flex items-center justify-center gap-2">
              Get Started <ArrowRight size={18} />
            </Link>
            <Link href="/pricing" className="bg-white/10 text-white border border-white/20 font-manrope font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-center">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
