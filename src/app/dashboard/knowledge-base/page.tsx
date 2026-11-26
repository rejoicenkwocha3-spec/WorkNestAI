"use client";

import { useState } from "react";
import { BookOpen, Search, Plus, FileText, Folder, Upload, ChevronRight } from "lucide-react";

type Doc = {
  id: string;
  title: string;
  folder: string;
  updated: string;
  type: "doc" | "file";
};

const initialDocs: Doc[] = [
  { id: "1", title: "Employee Onboarding Guide", folder: "HR", updated: "Nov 15, 2026", type: "doc" },
  { id: "2", title: "Sales Process Handbook", folder: "Sales", updated: "Nov 10, 2026", type: "doc" },
  { id: "3", title: "Customer Support Procedures", folder: "Support", updated: "Nov 5, 2026", type: "doc" },
  { id: "4", title: "IT Security Policy", folder: "IT", updated: "Oct 28, 2026", type: "file" },
  { id: "5", title: "Product Roadmap Overview", folder: "Product", updated: "Oct 20, 2026", type: "doc" },
  { id: "6", title: "Brand Guidelines 2026", folder: "Marketing", updated: "Oct 15, 2026", type: "file" },
  { id: "7", title: "Team Meeting Notes: November", folder: "Operations", updated: "Nov 18, 2026", type: "doc" },
  { id: "8", title: "Expense Reporting Policy", folder: "Finance", updated: "Sep 30, 2026", type: "doc" },
];

const folders = ["All", "HR", "Sales", "Support", "IT", "Product", "Marketing", "Operations", "Finance"];

export default function KnowledgeBasePage() {
  const [docs, setDocs] = useState<Doc[]>(initialDocs);
  const [search, setSearch] = useState("");
  const [folder, setFolder] = useState("All");
  const [showNew, setShowNew] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newFolder, setNewFolder] = useState("Operations");

  const filtered = docs.filter(d => {
    const matchSearch = !search || d.title.toLowerCase().includes(search.toLowerCase());
    const matchFolder = folder === "All" || d.folder === folder;
    return matchSearch && matchFolder;
  });

  function addDoc() {
    if (!newTitle.trim()) return;
    setDocs([
      { id: String(Date.now()), title: newTitle, folder: newFolder, updated: "Just now", type: "doc" },
      ...docs,
    ]);
    setNewTitle("");
    setShowNew(false);
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-manrope font-bold text-2xl text-[#171717]">Knowledge Base</h1>
          <p className="font-inter text-sm text-[#777777] mt-1">Company documents, procedures and resources</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 text-sm font-inter text-[#777777] border border-[#E8E8E8] px-3 py-2 rounded-lg hover:bg-[#FAFAFA] transition-colors">
            <Upload size={14} /> Upload
          </button>
          <button
            onClick={() => setShowNew(true)}
            className="flex items-center gap-2 bg-[#1677E8] text-white font-inter font-medium text-sm px-4 py-2 rounded-lg hover:bg-[#1265CC] transition-colors"
          >
            <Plus size={16} /> New Document
          </button>
        </div>
      </div>

      {showNew && (
        <div className="bg-white rounded-2xl border border-[#1677E8]/30 p-5 mb-6">
          <h3 className="font-manrope font-semibold text-[#171717] mb-3">New Document</h3>
          <div className="grid sm:grid-cols-2 gap-3 mb-3">
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="px-4 py-2.5 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:border-[#1677E8]"
              placeholder="Document title"
            />
            <select
              value={newFolder}
              onChange={(e) => setNewFolder(e.target.value)}
              className="px-4 py-2.5 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:border-[#1677E8] text-[#171717]"
            >
              {folders.filter(f => f !== "All").map(f => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>
          <div className="flex gap-2">
            <button onClick={addDoc} className="bg-[#1677E8] text-white font-inter text-sm px-4 py-2 rounded-lg hover:bg-[#1265CC] transition-colors">Create</button>
            <button onClick={() => setShowNew(false)} className="text-[#777777] font-inter text-sm px-4 py-2 rounded-lg border border-[#E8E8E8] hover:bg-[#FAFAFA] transition-colors">Cancel</button>
          </div>
        </div>
      )}

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#777777]" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-[#E8E8E8] rounded-xl font-inter text-sm focus:outline-none focus:border-[#1677E8] bg-white"
            placeholder="Search documents..."
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {folders.map(f => (
            <button
              key={f}
              onClick={() => setFolder(f)}
              className={`px-3 py-2 text-xs font-inter rounded-lg whitespace-nowrap transition-colors ${
                folder === f ? "bg-[#1677E8] text-white" : "bg-white border border-[#E8E8E8] text-[#777777] hover:border-[#1677E8]/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Documents grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(doc => (
          <div key={doc.id} className="bg-white rounded-2xl border border-[#E8E8E8] p-5 hover:border-[#1677E8]/30 hover:shadow-sm transition-all cursor-pointer">
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${doc.type === "doc" ? "bg-[#EAF3FF]" : "bg-[#F0E2FF]"}`}>
                {doc.type === "doc"
                  ? <FileText size={16} className="text-[#1677E8]" />
                  : <FileText size={16} className="text-[#9652E8]" />
                }
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-manrope font-semibold text-[#171717] text-sm leading-tight truncate">{doc.title}</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <Folder size={10} className="text-[#777777]" />
                  <span className="text-xs font-inter text-[#777777]">{doc.folder}</span>
                </div>
              </div>
            </div>
            <p className="text-xs font-inter text-[#777777]">Updated {doc.updated}</p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <div className="w-14 h-14 bg-[#FAFAFA] border border-[#E8E8E8] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BookOpen size={22} className="text-[#777777]" />
          </div>
          <p className="font-manrope font-semibold text-[#171717] mb-1">No documents found</p>
          <p className="font-inter text-sm text-[#777777]">Try a different search term or folder filter</p>
        </div>
      )}
    </div>
  );
}
