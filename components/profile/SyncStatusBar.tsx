"use client";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export const SyncStatusBar = () => (
  <div className="flex items-center justify-between px-6 py-4 bg-white/60 backdrop-blur-xl rounded-2xl border border-slate-200/50 mb-10 shadow-sm overflow-hidden relative group">
    <div className="absolute inset-y-0 left-0 w-1 bg-primary" />
    <div className="flex items-center gap-8 relative z-10">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-2.5 h-2.5 bg-primary rounded-full animate-ping absolute inset-0 opacity-40" />
          <div className="w-2.5 h-2.5 bg-primary rounded-full relative" />
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">System Live</span>
          <span className="text-[9px] font-bold text-slate-400 uppercase">Facility Sync Active</span>
        </div>
      </div>
      <div className="h-8 w-px bg-slate-200" />
      <div className="flex items-center gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Stability</span>
          <span className="text-sm font-black text-slate-900">98.4%</span>
        </div>
        <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "98.4%" }}
            transition={{ duration: 1.5 }}
            className="h-full bg-primary"
          />
        </div>
      </div>
    </div>
    <div className="flex items-center gap-4 relative z-10">
      <div className="hidden md:flex flex-col text-right mr-4">
        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">Next Audit</span>
        <span className="text-[10px] font-black text-slate-500 uppercase">May 12, 2024</span>
      </div>
      <div className="flex items-center gap-3 px-4 py-2 bg-slate-900 text-white rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-slate-200">
        <ShieldCheck className="w-4 h-4 text-primary" /> Node Verified
      </div>
    </div>
  </div>
);
