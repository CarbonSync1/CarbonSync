"use client";
import { Settings, CheckCircle2, CreditCard as BillingIcon, Download, Trash2, AlertCircle } from "lucide-react";
import { Card } from "@/components/profile/ui/Card";

export const AccountTab = ({ onManageSubscription, onGenerateArchive, onDeleteAccount }: any) => (
  <div className="space-y-8">
    <Card title="Account Administration" subtitle="High-level controls and subscription status" icon={Settings}>
      <div className="space-y-4 divide-y divide-slate-100">
        <div className="py-6 flex items-center justify-between group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 border border-emerald-100">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-slate-900">System Status</p>
              <p className="text-slate-500 text-xs font-medium">Environment is fully operational</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black rounded-lg border border-emerald-200 uppercase tracking-widest">Active</span>
        </div>

        <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary border border-primary/10">
              <BillingIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-slate-900 font-headline">Platform Tier</p>
              <p className="text-slate-500 text-xs font-medium">Enterprise Pro &mdash; $249/tier</p>
            </div>
          </div>
          <button
            onClick={onManageSubscription}
            className="px-6 py-2.5 bg-primary text-white rounded-xl text-xs font-bold shadow-lg shadow-primary/10 hover:bg-primary/90 transition-all uppercase tracking-widest"
          >
            Manage Plan
          </button>
        </div>

        <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-secondary-container/20 rounded-xl flex items-center justify-center text-on-secondary-container">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-slate-900">Data Archives</p>
              <p className="text-slate-500 text-xs font-medium">Last archive generated 3 days ago</p>
            </div>
          </div>
          <button
            onClick={onGenerateArchive}
            className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold shadow-lg hover:bg-slate-700 transition-all"
          >
            Generate New Archive
          </button>
        </div>
      </div>
    </Card>

    <Card className="border-red-100 hover:border-red-200" title="Danger Zone" icon={Trash2}>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <p className="font-bold text-red-600 mb-1 flex items-center gap-2 font-headline"><AlertCircle className="w-4 h-4" /> Permanent Decoupling</p>
          <p className="text-slate-500 text-sm leading-relaxed font-medium">Deleting your account will purge all facility logs and compliance data. This cannot be undone.</p>
        </div>
        <button
          onClick={onDeleteAccount}
          className="px-8 py-3 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-200 text-[10px] uppercase tracking-widest"
        >
          Delete Account
        </button>
      </div>
    </Card>
  </div>
);
