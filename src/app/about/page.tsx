import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 bg-[#FAFAFA] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#1677E8] font-inter font-medium text-sm uppercase tracking-widest mb-4">About</p>
          <h1 className="font-manrope font-bold text-5xl lg:text-6xl text-[#171717] mb-6">
            Building the workspace where<br />teams and AI work together
          </h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <h2 className="font-manrope font-bold text-2xl text-[#171717] mb-4">Why WorkNest AI exists</h2>
            <p className="font-inter text-[#777777] text-lg leading-relaxed mb-4">
              Most teams use more tools than they should. Project management lives in one place. Documents in another. Conversations in a third. And AI tools, when they exist, are disconnected from everything else.
            </p>
            <p className="font-inter text-[#777777] text-lg leading-relaxed">
              WorkNest AI was built to fix that. We believe teams work best when their knowledge, work and AI capabilities are connected in one intelligent workspace rather than fragmented across a dozen separate products.
            </p>
          </div>

          <div>
            <h2 className="font-manrope font-bold text-2xl text-[#171717] mb-4">What we believe</h2>
            <div className="space-y-4">
              {[
                { title: "AI should understand your context", desc: "Generic AI tools give generic answers. WorkNest AI agents are connected to your company's actual documents, processes and team structure. That is what makes them useful." },
                { title: "Simplicity scales", desc: "Complex tools slow teams down. We build WorkNest AI to be powerful for large organizations and immediately accessible to small ones." },
                { title: "Work belongs in one place", desc: "Every time a team member switches between applications, context is lost. WorkNest AI is designed to be the place your team actually lives." },
              ].map((belief) => (
                <div key={belief.title} className="bg-[#FAFAFA] rounded-2xl border border-[#E8E8E8] p-6">
                  <h3 className="font-manrope font-semibold text-[#171717] mb-2">{belief.title}</h3>
                  <p className="font-inter text-[#777777] text-sm leading-relaxed">{belief.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-8">
            <Link href="/signup" className="inline-flex items-center gap-2 bg-[#1677E8] text-white font-manrope font-semibold px-8 py-4 rounded-lg hover:bg-[#1265CC] transition-colors">
              Get Started with WorkNest AI <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
