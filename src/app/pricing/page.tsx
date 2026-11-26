import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$47",
    period: "per month",
    desc: "For small teams getting started with an intelligent workspace.",
    link: "https://selar.com/47plan?currency=USD",
    featured: false,
    features: [
      "Up to 5 team members",
      "Unlimited projects and tasks",
      "AI Q&A Agent",
      "10 GB document storage",
      "Knowledge base",
      "Basic workflow automations",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "$57",
    period: "per month",
    desc: "For growing teams that need full AI agent capabilities.",
    link: "https://selar.com/57plan?currency=USD",
    featured: true,
    features: [
      "Up to 20 team members",
      "Everything in Starter",
      "All 5 AI agents",
      "50 GB document storage",
      "Advanced workflow automations",
      "AI-generated reports",
      "Teamspaces",
      "Role-based permissions",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "$97",
    period: "per month",
    desc: "For organizations that need full control, compliance and scale.",
    link: "https://selar.com/97plan?currency=USD",
    featured: false,
    features: [
      "Unlimited team members",
      "Everything in Professional",
      "Custom AI agent configurations",
      "Unlimited document storage",
      "Advanced analytics",
      "SSO and advanced security",
      "Admin controls and audit logs",
      "Dedicated account support",
      "Custom integrations",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 bg-[#FAFAFA] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#1677E8] font-inter font-medium text-sm uppercase tracking-widest mb-4">Pricing</p>
          <h1 className="font-manrope font-bold text-5xl lg:text-6xl text-[#171717] mb-6">
            Simple, transparent pricing
          </h1>
          <p className="font-inter text-[#777777] text-xl max-w-2xl mx-auto leading-relaxed">
            Every plan includes the core WorkNest AI workspace. Choose the tier that matches your team size and needs.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border ${plan.featured ? "border-[#1677E8] bg-[#1677E8]" : "border-[#E8E8E8] bg-white"}`}
              >
                {plan.featured && (
                  <div className="inline-flex items-center bg-white/20 text-white text-xs font-inter font-medium px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                <h2 className={`font-manrope font-bold text-xl mb-2 ${plan.featured ? "text-white" : "text-[#171717]"}`}>
                  {plan.name}
                </h2>
                <div className="mb-2">
                  <span className={`font-manrope font-bold text-5xl ${plan.featured ? "text-white" : "text-[#171717]"}`}>
                    {plan.price}
                  </span>
                  <span className={`font-inter text-sm ml-1 ${plan.featured ? "text-white/70" : "text-[#777777]"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`font-inter text-sm mb-6 leading-relaxed ${plan.featured ? "text-white/70" : "text-[#777777]"}`}>
                  {plan.desc}
                </p>

                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 font-manrope font-semibold py-3 px-6 rounded-lg transition-colors mb-8 ${
                    plan.featured
                      ? "bg-white text-[#1677E8] hover:bg-white/90"
                      : "bg-[#1677E8] text-white hover:bg-[#1265CC]"
                  }`}
                >
                  Get Started <ArrowRight size={16} />
                </a>

                <ul className="space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <CheckCircle size={16} className={`flex-shrink-0 mt-0.5 ${plan.featured ? "text-white/80" : "text-[#1677E8]"}`} />
                      <span className={`font-inter text-sm ${plan.featured ? "text-white/80" : "text-[#171717]"}`}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-manrope font-bold text-2xl text-[#171717] mb-4">
            Not sure which plan is right?
          </h3>
          <p className="font-inter text-[#777777] mb-6">
            All plans are month-to-month. You can upgrade, downgrade or cancel at any time. Payment is processed securely through Selar.
          </p>
          <p className="font-inter text-[#777777] text-sm">
            Need a custom arrangement for a large organization? Contact us to discuss your requirements.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
