import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    segment: "Startups",
    headline: "Move fast with structure from the start",
    desc: "Early-stage companies need to build good habits before scaling. WorkNest AI helps founding teams organize knowledge, manage work and deploy AI agents without the overhead of enterprise tools.",
    items: [
      "Centralize company knowledge before it becomes tribal",
      "Manage product, sales and operations in one workspace",
      "Use AI agents to handle repetitive work with a small team",
      "Build scalable processes from day one",
    ],
  },
  {
    segment: "Small and Medium Businesses",
    headline: "Operate like a larger organization",
    desc: "SMBs benefit from enterprise-grade workspace capabilities without enterprise complexity. WorkNest AI scales with your business and grows as your team expands.",
    items: [
      "Replace scattered tools with one organized workspace",
      "Automate recurring administrative work",
      "Give every department its own teamspace",
      "Use AI agents to extend your team's capacity",
    ],
  },
  {
    segment: "Marketing Teams",
    headline: "Plan, produce and report with less friction",
    desc: "Marketing teams manage campaigns, assets, copy, approvals and performance reporting simultaneously. WorkNest AI brings all of that into one place and uses AI to accelerate the operational side.",
    items: [
      "Track campaigns from brief to launch with Kanban boards",
      "Store brand assets, guidelines and copy libraries in the knowledge base",
      "Use AI agents to draft reports and summarize campaign performance",
      "Automate recurring review and approval notifications",
    ],
  },
  {
    segment: "Sales Teams",
    headline: "Keep deals moving and knowledge accessible",
    desc: "Sales teams need fast access to information and clear visibility into what needs to happen next. WorkNest AI organizes account work, surfaces relevant knowledge and reduces admin overhead.",
    items: [
      "Track follow-up tasks and pipeline activities",
      "Store proposal templates, case studies and battle cards",
      "Use AI agents to prepare meeting summaries and briefings",
      "Automate CRM-adjacent task reminders",
    ],
  },
  {
    segment: "Operations Teams",
    headline: "Document, automate and scale your processes",
    desc: "Operations teams are responsible for the systems that allow a business to run. WorkNest AI becomes the platform where those systems are documented, tracked and improved.",
    items: [
      "Document standard operating procedures in the knowledge base",
      "Automate routine administrative workflows",
      "Track operational initiatives and improvement projects",
      "Deploy AI agents to handle internal request routing",
    ],
  },
  {
    segment: "Customer Support Teams",
    headline: "Resolve more with less manual effort",
    desc: "Customer support teams handle repetitive questions, complex escalations and ongoing knowledge management. WorkNest AI helps teams respond faster and work more consistently.",
    items: [
      "Build an internal knowledge base for agents to reference",
      "Use AI agents to draft responses to common questions",
      "Track support tasks and escalations with structured boards",
      "Automate assignment and follow-up reminders",
    ],
  },
  {
    segment: "Software Development Teams",
    headline: "Manage sprints, decisions and documentation together",
    desc: "Development teams produce code and decisions simultaneously. WorkNest AI keeps technical documentation, project planning and team communication in a single connected workspace.",
    items: [
      "Manage sprints and backlogs with Kanban and list views",
      "Document architecture decisions and technical specifications",
      "Use AI agents to answer questions about internal systems",
      "Track bugs, features and improvement requests",
    ],
  },
  {
    segment: "Enterprise Organizations",
    headline: "Connect distributed teams with consistent structure",
    desc: "Large organizations deal with fragmented knowledge, inconsistent processes and high coordination overhead. WorkNest AI provides the structure for enterprise teams to work coherently at scale.",
    items: [
      "Create organized teamspaces for every department and function",
      "Establish consistent project and task management across the company",
      "Deploy multiple AI agents for different business functions",
      "Role-based permissions and administrative controls",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 bg-[#FAFAFA] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#1677E8] font-inter font-medium text-sm uppercase tracking-widest mb-4">Solutions</p>
          <h1 className="font-manrope font-bold text-5xl lg:text-6xl text-[#171717] mb-6">
            WorkNest AI for every team
          </h1>
          <p className="font-inter text-[#777777] text-xl max-w-2xl mx-auto leading-relaxed">
            Whether you are a ten-person startup or a hundred-person enterprise, WorkNest AI adapts to how your team works.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((s) => (
              <div key={s.segment} className="bg-[#FAFAFA] rounded-2xl border border-[#E8E8E8] p-8">
                <div className="inline-flex items-center bg-[#EAF3FF] text-[#1677E8] text-xs font-inter font-medium px-3 py-1 rounded-full mb-4">
                  {s.segment}
                </div>
                <h2 className="font-manrope font-bold text-xl text-[#171717] mb-3">{s.headline}</h2>
                <p className="font-inter text-[#777777] text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1677E8] flex-shrink-0 mt-1.5"></span>
                      <span className="font-inter text-[#171717] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#171717]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-manrope font-bold text-4xl text-white mb-6">Your team, your workspace</h2>
          <p className="font-inter text-white/60 text-lg mb-10">
            Start building your WorkNest AI workspace today. No setup complexity, no long commitments.
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
