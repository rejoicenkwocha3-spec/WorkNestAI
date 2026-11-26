"use client";

import { useState } from "react";
import { FileText, Plus, Search, Upload, Folder } from "lucide-react";

type Doc = { id: string; title: string; folder: string; updated: string; author: string };

const initialDocs: Doc[] = [
  { id: "1", title: "Q4 Campaign Brief", folder: "Marketing", updated: "Nov 18, 2026", author: "You" },
  { id: "2", title: "Sprint Retrospective: Sprint 24", folder: "Product", updated: "Nov 17, 2026", author: "James Okoye" },
  { id: "3", title: "Customer Interview Notes", folder: "Research", updated: "Nov 15, 2026", author: "Sarah Chen" },
  { id: "4", title: "Partnership Proposal Draft", folder: "Sales", updated: "Nov 12, 2026", author: "You" },
  { id: "5", title: "Infrastructure Cost Review", folder: "Finance", updated: "Nov 10, 2026", author: "Maria Silva" },
];

export default function DocumentsPage() {
  const [docs, setDocs] = useState<Doc[]>(initialDocs);
  const [search, setSearch] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [title, setTitle] = useState("");

  const filtered = docs.filter(d => !search || d.title.toLowerCase().includes(search.toLowerCase()));

  function addDoc() {
    if (!title.trim()) return;
    setDocs([{ id: String(Date.now()), title, folder: "General", updated: "Just now", author: "You" }, ...docs]);
    setTitle("");
    setShowNew(false);
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-manrope font-bold text-2xl text-[#171717]">Documents</h1>
          <p className="font-inter text-sm text-[#777777] mt-1">Create and manage your team documents</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 text-sm font-inter text-[#777777] border border-[#E8E8E8] px-3 py-2 rounded-lg hover:bg-[#FAFAFA] transition-colors">
            <Upload size={14} /> Upload
          </button>
          <button onClick={() => setShowNew(true)} className="flex items-center gap-2 bg-[#1677E8] text-white font-inter font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#1265CC] transition-colors">
            <Plus size={16} /> New Document
          </button>
        </div>
      </div>

      {showNew && (
        <div className="bg-white rounded-2xl border border-[#1677E8]/30 p-5 mb-6">
          <h3 className="font-manrope font-semibold text-[#171717] mb-3">New Document</h3>
          <div className="flex gap-3">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addDoc()}
              className="flex-1 px-4 py-2.5 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:border-[#1677E8]"
              placeholder="Document title..."
            />
            <button onClick={addDoc} className="bg-[#1677E8] text-white font-inter text-sm px-4 py-2 rounded-lg hover:bg-[#1265CC] transition-colors">Create</button>
            <button onClick={() => setShowNew(false)} className="text-[#777777] font-inter text-sm px-4 py-2 rounded-lg border border-[#E8E8E8] hover:bg-[#FAFAFA] transition-colors">Cancel</button>
          </div>
        </div>
      )}

      <div className="relative mb-5">
        <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777777]" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:border-[#1677E8] bg-white max-w-sm"
          placeholder="Search documents..."
        />
      </div>

      <div className="bg-white rounded-2xl border border-[#E8E8E8] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#E8E8E8] bg-[#FAFAFA]">
              {["Name", "Folder", "Author", "Last Updated"].map(h => (
                <th key={h} className="text-left px-5 py-3 text-xs font-inter font-medium text-[#777777] uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(doc => (
              <tr key={doc.id} className="border-b border-[#E8E8E8] last:border-0 hover:bg-[#FAFAFA] cursor-pointer">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <FileText size={15} className="text-[#1677E8] flex-shrink-0" />
                    <span className="font-inter text-sm text-[#171717]">{doc.title}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-1.5">
                    <Folder size={12} className="text-[#777777]" />
                    <span className="font-inter text-sm text-[#777777]">{doc.folder}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 font-inter text-sm text-[#777777]">{doc.author}</td>
                <td className="px-5 py-3.5 font-inter text-sm text-[#777777]">{doc.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
