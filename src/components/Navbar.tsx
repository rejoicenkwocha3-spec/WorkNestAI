"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import WorkNestLogo from "./WorkNestLogo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5">
            <WorkNestLogo size={36} />
            <span className="font-manrope font-bold text-[#171717] text-xl">WorkNest AI</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/platform" className="text-[#777777] hover:text-[#171717] font-inter text-sm transition-colors">Platform</Link>
            <Link href="/solutions" className="text-[#777777] hover:text-[#171717] font-inter text-sm transition-colors">Solutions</Link>
            <Link href="/features" className="text-[#777777] hover:text-[#171717] font-inter text-sm transition-colors">Features</Link>
            <Link href="/pricing" className="text-[#777777] hover:text-[#171717] font-inter text-sm transition-colors">Pricing</Link>
            <Link href="/about" className="text-[#777777] hover:text-[#171717] font-inter text-sm transition-colors">About</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-[#777777] hover:text-[#171717] font-inter text-sm transition-colors">Log In</Link>
            <Link href="/signup" className="bg-[#1677E8] text-white font-manrope font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#1265CC] transition-colors">
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-[#171717]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#E8E8E8]">
          <div className="px-4 py-4 flex flex-col gap-4">
            <Link href="/platform" className="text-[#777777] hover:text-[#171717] font-inter text-sm" onClick={() => setMobileOpen(false)}>Platform</Link>
            <Link href="/solutions" className="text-[#777777] hover:text-[#171717] font-inter text-sm" onClick={() => setMobileOpen(false)}>Solutions</Link>
            <Link href="/features" className="text-[#777777] hover:text-[#171717] font-inter text-sm" onClick={() => setMobileOpen(false)}>Features</Link>
            <Link href="/pricing" className="text-[#777777] hover:text-[#171717] font-inter text-sm" onClick={() => setMobileOpen(false)}>Pricing</Link>
            <Link href="/about" className="text-[#777777] hover:text-[#171717] font-inter text-sm" onClick={() => setMobileOpen(false)}>About</Link>
            <div className="border-t border-[#E8E8E8] pt-4 flex flex-col gap-3">
              <Link href="/login" className="text-[#777777] hover:text-[#171717] font-inter text-sm" onClick={() => setMobileOpen(false)}>Log In</Link>
              <Link href="/signup" className="bg-[#1677E8] text-white font-manrope font-semibold text-sm px-5 py-2.5 rounded-lg text-center" onClick={() => setMobileOpen(false)}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
