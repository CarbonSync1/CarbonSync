"use client";
import { useState } from "react";
import { ShieldCheck, History, Smartphone, Globe, Lock } from "lucide-react";
import { cn } from "@/components/profile/lib/utils";
import { Card } from "@/components/profile/ui/Card";
import { Toggle } from "@/components/profile/ui/Toggle";

export const SecurityTab = () => {
  const [fa2, setFa2] = useState(true);
  const [biometric, setBiometric] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card title="Authentication" subtitle="Keep your account secure" icon={ShieldCheck}>
        <div className="space-y-4 divide-y divide-outline-variant/10">
          <Toggle
            enabled={fa2}
            setEnabled={setFa2}
            label="Two-Factor Authentication"
            sublabel="Adds an extra layer of security to your account"
          />
          <Toggle
            enabled={biometric}
            setEnabled={setBiometric}
            label="Biometric Login"
            sublabel="Use TouchID or FaceID on supported devices"
          />
          <div className="pt-4 flex items-center justify-between">
            <div>
              <p className="font-bold text-on-surface text-sm">Account Password</p>
              <p className="text-on-surface-variant text-xs mt-1">Last changed 4 months ago</p>
            </div>
            <button className="text-primary text-xs font-extrabold hover:underline">Change Password</button>
          </div>
        </div>
      </Card>

      <Card title="Recent Activity" subtitle="Login history from all devices" icon={History}>
        <div className="space-y-2">
          {[
            { device: "MacBook Pro • Chrome", loc: "San Francisco, CA", time: "Active Now", current: true, status: "Secure" },
            { device: "iPhone 15 Pro • App", loc: "San Francisco, CA", time: "2 hours ago", status: "Closed" },
            { device: "iPad Air • Safari", loc: "Los Angeles, CA", time: "Yesterday", status: "Closed" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 p-4 hover:bg-slate-50 rounded-[1.5rem] transition-all border border-transparent hover:border-slate-100 group">
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-colors", item.current ? "bg-primary/10 text-primary border border-primary/20" : "bg-slate-100 text-slate-400 border border-slate-200")}>
                {item.device.includes("iPhone") ? <Smartphone className="w-5 h-5" /> : item.device.includes("iPad") ? <Globe className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
              </div>
              <div className="flex-1">
                <p className="text-sm font-black text-slate-900">{item.device}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{item.loc}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />
                  <span className="text-[10px] text-slate-400 font-bold">{item.time}</span>
                </div>
              </div>
              <span className={cn(
                "badge-status",
                item.current ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-slate-100 text-slate-400"
              )}>
                {item.status}
              </span>
            </div>
          ))}
          <button className="w-full text-center text-[10px] text-primary font-black uppercase tracking-[0.2em] mt-6 hover:underline">Log out of all devices</button>
        </div>
      </Card>
    </div>
  );
};
