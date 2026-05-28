import { Settings2 } from "lucide-react";

export const Footer = () => (
  <footer className="w-full bg-white border-t border-slate-200 py-16 px-12 mt-20">
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-2 space-y-6">
        <div className="flex items-center gap-2">
          <Settings2 className="text-primary w-6 h-6" />
          <span className="text-xl font-bold font-headline text-slate-900 tracking-tight">CarbonSync</span>
        </div>
        <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
          Integrated facility intelligence and carbon monitoring for the modern enterprise.
        </p>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-4">
          © 2024 GREENTECH PVT LTD • v9.0
        </div>
      </div>

      <div className="space-y-6">
        <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em]">Product</h4>
        <div className="flex flex-col gap-4 text-sm text-slate-500 font-medium">
          {["Neural Mapping", "Sync Protocols", "API Mesh"].map((link) => (
            <a key={link} className="hover:text-primary transition-colors" href="#">{link}</a>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-[0.2em]">Company</h4>
        <div className="flex flex-col gap-4 text-sm text-slate-500 font-medium">
          {["Privacy", "Terms", "Security"].map((link) => (
            <a key={link} className="hover:text-primary transition-colors" href="#">{link}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);
