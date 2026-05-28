"use client";
import { motion } from "framer-motion";
import { Zap, Star, ChevronRight, Leaf, Activity } from "lucide-react";
import { cn } from "@/components/profile/lib/utils";
import { Sparkline } from "@/components/profile/ui/Sparkline";
import { RadialProgress } from "@/components/profile/ui/RadialProgress";

export const ImpactCard = () => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-slate-200/60 relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 p-8">
      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-500">
        <Zap className="w-6 h-6" />
      </div>
    </div>

    <div className="relative z-10 space-y-10">
      <div className="flex items-center gap-6">
        <RadialProgress value={94} size={100} strokeWidth={8} />
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight font-headline">Sync Integrity</h2>
          <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mt-1">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" /> Optimal Node Alignment
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {[
          { label: "Eco-Alignment", value: "98.2%", trend: [20, 35, 25, 45, 30, 60, 55], color: "text-primary" },
          { label: "Resource Efficiency", value: "87.4%", trend: [40, 30, 50, 45, 60, 55, 75], color: "text-blue-500" }
        ].map((stat, i) => (
          <div key={i} className="flex items-center justify-between group/stat">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</span>
              <p className={cn("text-xl font-black font-headline", stat.color)}>{stat.value}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <Sparkline data={stat.trend} color={i === 0 ? "#14B8A6" : "#3B82F6"} width={80} height={24} />
              <span className="text-[9px] font-bold text-slate-400">+2.4% last 24h</span>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-4 space-y-4">
        <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-100 relative group-hover:bg-white transition-colors duration-500">
          <p className="text-xs font-semibold text-slate-500 leading-relaxed italic">
            &ldquo;Your sustainability footprint is currently in the top 5% of all Enterprise nodes. Keep optimizing for maximum rewards.&rdquo;
          </p>
          <div className="absolute top-2 right-4 text-primary opacity-20"><Star className="w-4 h-4" /></div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="btn-primary w-full justify-center group/btn"
        >
          View Full Audit <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </div>
  </motion.div>
);
