"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Eye, EyeOff, CheckCircle } from "lucide-react";
import WorkNestLogo from "@/components/WorkNestLogo";

export default function SignupPage() {
  const router = useRouter();
  const supabase = createClient();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#171717] flex-col justify-between p-12">
        <Link href="/" className="flex items-center gap-2.5">
          <WorkNestLogo size={36} />
          <span className="font-manrope font-bold text-white text-xl">WorkNest AI</span>
        </Link>

        <div>
          <h2 className="font-manrope font-bold text-4xl text-white mb-6">
            Your intelligent workspace<br />starts here.
          </h2>
          <div className="space-y-4">
            {[
              "Set up your workspace in minutes",
              "Invite your team and assign roles",
              "Deploy your first AI agent immediately",
              "Connect your company knowledge",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle size={16} className="text-[#1677E8] flex-shrink-0" />
                <span className="font-inter text-white/70 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="font-inter text-white/30 text-xs">&copy; 2026 WorkNest AI</p>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <WorkNestLogo size={32} />
              <span className="font-manrope font-bold text-[#171717] text-xl">WorkNest AI</span>
            </Link>
          </div>

          {success ? (
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E8E8] text-center">
              <div className="w-14 h-14 bg-[#EAF3FF] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={24} className="text-[#1677E8]" />
              </div>
              <h2 className="font-manrope font-bold text-2xl text-[#171717] mb-3">Check your email</h2>
              <p className="font-inter text-[#777777] text-sm leading-relaxed mb-6">
                We sent a confirmation link to <strong>{email}</strong>. Click the link to activate your account and access your WorkNest AI workspace.
              </p>
              <Link href="/login" className="font-inter text-[#1677E8] text-sm font-medium hover:underline">
                Back to login
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E8E8]">
              <h1 className="font-manrope font-bold text-2xl text-[#171717] mb-2">Create your account</h1>
              <p className="font-inter text-[#777777] text-sm mb-8">
                Start your WorkNest AI workspace today
              </p>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                  <p className="font-inter text-red-700 text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSignup} className="space-y-5">
                <div>
                  <label className="block font-inter font-medium text-sm text-[#171717] mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#1677E8]/20 focus:border-[#1677E8] transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block font-inter font-medium text-sm text-[#171717] mb-2">
                    Work email
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

                <div>
                  <label className="block font-inter font-medium text-sm text-[#171717] mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPw ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={8}
                      className="w-full px-4 py-3 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#1677E8]/20 focus:border-[#1677E8] transition-colors pr-12"
                      placeholder="At least 8 characters"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPw(!showPw)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#777777] hover:text-[#171717]"
                    >
                      {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1677E8] text-white font-manrope font-semibold py-3 rounded-xl hover:bg-[#1265CC] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Creating account..." : "Create Account"}
                </button>
              </form>

              <p className="text-center font-inter text-xs text-[#777777] mt-5 leading-relaxed">
                By creating an account, you agree to our Terms of Service and Privacy Policy.
              </p>

              <p className="text-center font-inter text-sm text-[#777777] mt-4">
                Already have an account?{" "}
                <Link href="/login" className="text-[#1677E8] font-medium hover:underline">
                  Log in
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
