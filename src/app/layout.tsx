import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WorkNest AI: Where Teams and AI Agents Work Better Together",
  description: "Bring your team's knowledge, projects, tasks and AI agents into one intelligent workspace. Capture context, find answers and automate everyday work with WorkNest AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
