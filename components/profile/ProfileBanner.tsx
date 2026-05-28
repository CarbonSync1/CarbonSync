"use client";
import { motion } from "framer-motion";
import { Shield, Globe, Leaf, Activity, Star, ShieldCheck, Camera, Edit3, ChevronRight, Zap } from "lucide-react";
import { cn } from "@/components/profile/lib/utils";

export const ProfileBanner = ({ profileData, onEdit }: { profileData: any, onEdit: () => void }) => (
  <div className="bg-white rounded-[2.5rem] p-10 lg:p-14 border border-slate-200/60 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] relative overflow-hidden group">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-60 -mt-60 pointer-events-none" />

    <div className="flex flex-col xl:flex-row items-center gap-12 relative z-10 w-full">
      <div className="relative shrink-0">
        <div className="w-40 h-40 rounded-[2.5rem] overflow-hidden border-8 border-slate-50 shadow-2xl relative z-10 bg-slate-100 group-hover:scale-105 transition-transform duration-500">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${profileData.name}&backgroundColor=b6e3f4`}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="absolute -bottom-2 -right-2 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border-4 border-white hover:bg-primary transition-all z-20"
        >
          <Camera className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="flex-1 space-y-10 w-full text-center xl:text-left">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-center xl:justify-start gap-4">
            <h1 className="text-5xl font-black font-headline text-slate-900 tracking-tight leading-none group-hover:text-primary transition-colors duration-500">{profileData.name}</h1>
            <span className="badge-status bg-blue-50 text-blue-600 border border-blue-100">
              <Zap className="w-3.5 h-3.5 fill-current" /> High Intensity
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center xl:justify-start gap-6 font-bold text-slate-500">
            <p className="flex items-center gap-3">
              <span className="p-1.5 bg-slate-50 rounded-lg border border-slate-100"><Shield className="w-5 h-5 text-primary" /></span>
              {profileData.role}
            </p>
            <span className="hidden sm:block text-slate-200">/</span>
            <p className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" /> {profileData.location}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-slate-100/80">
          {[
            { label: "CO2 Mitigated", v: "2,482", u: "kg", color: "text-emerald-600", icon: Leaf },
            { label: "Sys Stability", v: "99.9", u: "%", color: "text-blue-600", icon: Activity },
            { label: "Storage Node", v: "Enterprise", u: "", color: "text-teal-600", icon: Star },
            { label: "Auth Layer", v: "Secure", u: "", color: "text-primary", icon: ShieldCheck }
          ].map((stat, i) => (
            <div key={stat.label} className="space-y-2 group/stat">
              <div className="flex items-center gap-2">
                <stat.icon className="w-3 h-3 text-slate-300 group-hover/stat:text-primary transition-colors" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className={cn("text-2xl font-black font-headline tracking-tighter", stat.color)}>{stat.v}</span>
                <span className="text-[10px] font-black text-slate-300 uppercase">{stat.u}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center xl:justify-start gap-4">
          <motion.button className="btn-primary group/btn lg:px-12">
            Optimization Sync <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button onClick={onEdit} className="btn-secondary">
            <Edit3 className="w-4 h-4" /> Edit Preferences
          </motion.button>
        </div>
      </div>
    </div>
  </div>
);
