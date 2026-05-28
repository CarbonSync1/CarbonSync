"use client";
import { motion } from "framer-motion";
import { cn } from "@/components/profile/lib/utils";

export const Card = ({ children, className, title, subtitle, icon: Icon }: any) => (
  <motion.div className={cn("premium-card", className)}>
    {(title || Icon) && (
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          {Icon && (
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary border border-slate-100">
              <Icon className="w-5 h-5" />
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-headline tracking-tight">{title}</h3>
            {subtitle && <p className="text-slate-500 text-xs font-medium mt-0.5">{subtitle}</p>}
          </div>
        </div>
      </div>
    )}
    <div className="relative flex-1 flex flex-col">
      {children}
    </div>
  </motion.div>
);
