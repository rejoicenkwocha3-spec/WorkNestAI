"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Eye, EyeOff } from "lucide-react";
import WorkNestLogo from "@/components/WorkNestLogo";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
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
            Where teams and AI agents<br />work better together.
          </h2>
          <div className="space-y-4">
            {[
              "AI agents connected to your company knowledge",
              "Project and task management in one workspace",
              "Workflow automation for repetitive work",
              "Team collaboration with role-based access",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#1677E8]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-[#1677E8] rounded-full"></div>
                </div>
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

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#E8E8E8]">
            <h1 className="font-manrope font-bold text-2xl text-[#171717] mb-2">Welcome back</h1>
            <p className="font-inter text-[#777777] text-sm mb-8">
              Log in to your WorkNest AI workspace
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                <p className="font-inter text-red-700 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
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

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-inter font-medium text-sm text-[#171717]">Password</label>
                  <Link href="/forgot-password" className="font-inter text-xs text-[#1677E8] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPw ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:ring-2 focus:ring-[#1677E8]/20 focus:border-[#1677E8] transition-colors pr-12"
                    placeholder="Your password"
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
                {loading ? "Signing in..." : "Log In"}
              </button>
            </form>

            <p className="text-center font-inter text-sm text-[#777777] mt-6">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-[#1677E8] font-medium hover:underline">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
