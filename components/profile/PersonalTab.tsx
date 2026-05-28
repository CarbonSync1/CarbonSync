"use client";
import { User, Globe, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/profile/ui/Card";

export const PersonalTab = ({ data, setData }: { data: any, setData: any }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <Card title="Public Profile" subtitle="Manage how you appear to others" icon={User}>
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
            <input
              value={data.name}
              onChange={(e) => setData({...data, name: e.target.value})}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:border-primary focus:ring-4 focus:ring-primary/5 focus:outline-none transition-all duration-300 font-bold text-slate-900"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Expertise</label>
            <input
              value={data.role}
              onChange={(e) => setData({...data, role: e.target.value})}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:border-primary focus:ring-4 focus:ring-primary/5 focus:outline-none transition-all duration-300 font-bold text-slate-900"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Bio Overview</label>
          <textarea
            rows={4}
            value={data.bio}
            onChange={(e) => setData({...data, bio: e.target.value})}
            className="w-full bg-slate-50 border border-slate-200 rounded-[2rem] px-6 py-5 text-sm focus:border-primary focus:ring-4 focus:ring-primary/5 focus:outline-none transition-all duration-300 resize-none font-medium leading-relaxed text-slate-600"
          />
        </div>
      </div>
    </Card>

    <Card title="Preferences" subtitle="Region and accessibility settings" icon={Globe}>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Timezone</label>
          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-primary focus:outline-none transition-all font-medium">
            <option>San Francisco (GMT-8)</option>
            <option>Berlin (GMT+1)</option>
            <option>London (GMT)</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Language</label>
          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:border-primary focus:outline-none transition-all font-medium">
            <option>English (US)</option>
            <option>German</option>
            <option>French</option>
          </select>
        </div>
        <div className="pt-2">
          <p className="text-[11px] font-bold text-slate-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" /> Automatically detect from browser
          </p>
        </div>
      </div>
    </Card>
  </div>
);
