import { CreditCard, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BillingPage() {
  const plans = [
    { name: "Starter", price: "$47", period: "/month", link: "https://selar.com/47plan?currency=USD", current: false },
    { name: "Professional", price: "$57", period: "/month", link: "https://selar.com/57plan?currency=USD", current: true },
    { name: "Enterprise", price: "$97", period: "/month", link: "https://selar.com/97plan?currency=USD", current: false },
  ];

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-manrope font-bold text-2xl text-[#171717]">Billing and Subscription</h1>
        <p className="font-inter text-sm text-[#777777] mt-1">Manage your WorkNest AI subscription</p>
      </div>

      <div className="bg-white rounded-2xl border border-[#E8E8E8] p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-[#EAF3FF] rounded-xl flex items-center justify-center">
            <CreditCard size={18} className="text-[#1677E8]" />
          </div>
          <div>
            <p className="font-manrope font-semibold text-[#171717]">Current Plan: Professional</p>
            <p className="font-inter text-xs text-[#777777]">$57/month. Renews December 1, 2026.</p>
          </div>
          <div className="ml-auto">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="font-inter text-sm text-green-600">Active</span>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          {["All 5 AI agents", "Up to 20 team members", "50 GB document storage"].map(f => (
            <div key={f} className="flex items-center gap-2">
              <CheckCircle size={14} className="text-[#1677E8] flex-shrink-0" />
              <span className="font-inter text-sm text-[#777777]">{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-manrope font-semibold text-[#171717] mb-4">Change Plan</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {plans.map(plan => (
            <div key={plan.name} className={`bg-white rounded-2xl border p-5 ${plan.current ? "border-[#1677E8]" : "border-[#E8E8E8]"}`}>
              {plan.current && (
                <span className="inline-flex items-center bg-[#EAF3FF] text-[#1677E8] text-xs font-inter px-2.5 py-1 rounded-full mb-3">Current Plan</span>
              )}
              <p className="font-manrope font-bold text-lg text-[#171717]">{plan.name}</p>
              <p className="font-manrope font-bold text-3xl text-[#171717] mt-1">{plan.price}<span className="text-sm font-normal text-[#777777]">{plan.period}</span></p>
              {!plan.current && (
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-[#1677E8] text-white font-inter font-medium text-sm py-2.5 rounded-lg hover:bg-[#1265CC] transition-colors"
                >
                  Switch Plan <ArrowRight size={14} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FAFAFA] rounded-2xl border border-[#E8E8E8] p-5">
        <p className="font-inter text-sm text-[#777777]">
          Payments are processed securely through Selar. To cancel your subscription or request a refund, contact our support team.
        </p>
      </div>
    </div>
  );
}
