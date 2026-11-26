"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { CheckCircle } from "lucide-react";
import WorkNestLogo from "@/components/WorkNestLogo";

export default function ForgotPasswordPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/dashboard/settings`,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSent(true);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <WorkNestLogo size={36} />
            <span className="font-manrope font-bold text-[#171717] text-xl">WorkNest AI</span>
          </Link>
        </div>

        {sent ? (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E8E8] text-center">
            <div className="w-14 h-14 bg-[#EAF3FF] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={24} className="text-[#1677E8]" />
            </div>
            <h2 className="font-manrope font-bold text-2xl text-[#171717] mb-3">Reset link sent</h2>
            <p className="font-inter text-[#777777] text-sm leading-relaxed mb-6">
              We sent a password reset link to <strong>{email}</strong>. Check your inbox and follow the link to set a new password.
            </p>
            <Link href="/login" className="font-inter text-[#1677E8] text-sm font-medium hover:underline">
              Back to login
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E8E8]">
            <h1 className="font-manrope font-bold text-2xl text-[#171717] mb-2">Reset your password</h1>
            <p className="font-inter text-[#777777] text-sm mb-8">
              Enter your email address and we will send you a link to reset your password.
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                <p className="font-inter text-red-700 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleReset} className="space-y-5">
              <div>
                <label className="block font-inter font-medium text-sm text-[#171717] mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#1677E8]/20 focus:border-[#1677E8] transition-colors"
                  placeholder="you@company.com"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1677E8] text-white font-manrope font-semibold py-3 rounded-xl hover:bg-[#1265CC] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>

            <p className="text-center font-inter text-sm text-[#777777] mt-6">
              Remembered your password?{" "}
              <Link href="/login" className="text-[#1677E8] font-medium hover:underline">
                Log in
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
