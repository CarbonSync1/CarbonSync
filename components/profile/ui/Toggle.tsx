"use client";
import { cn } from "@/components/profile/lib/utils";

export const Toggle = ({ enabled, setEnabled, label, sublabel, icon }: any) => (
  <div className="flex items-center justify-between group py-4 first:pt-0 last:pb-0 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 rounded-xl px-2 transition-colors -mx-2">
    <div className="max-w-[80%] flex items-start gap-3">
      {icon && <div className="mt-0.5 w-6 h-6 flex items-center justify-center shrink-0">{icon}</div>}
      <div>
        <p className="font-bold text-slate-900 text-sm tracking-tight">{label}</p>
        {sublabel && <p className="text-slate-500 text-[11px] font-medium mt-1 leading-relaxed">{sublabel}</p>}
      </div>
    </div>
    <button
      onClick={() => setEnabled(!enabled)}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-all duration-300 ease-in-out focus:outline-none",
        enabled ? "bg-primary shadow-[0_0_12px_rgba(20,184,166,0.4)]" : "bg-slate-200"
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-sm ring-0 transition-all duration-300 ease-in-out",
          enabled ? "translate-x-5" : "translate-x-0"
        )}
      />
    </button>
  </div>
);
