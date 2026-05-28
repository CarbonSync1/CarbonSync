"use client";
import { useState } from "react";
import { Bell, ShieldAlert, Leaf, Users, BarChart3, Mail, MessageSquare, Smartphone } from "lucide-react";
import { Card } from "@/components/profile/ui/Card";
import { Toggle } from "@/components/profile/ui/Toggle";

export const NotificationsTab = () => {
  const [types, setTypes] = useState({
    email: true, sms: false, push: true,
    security: true, compliance: true,
    threshold: true, baseline: false,
    reports: true, mentions: true,
    digest: false, digestWeekly: true
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card title="Channels" subtitle="Delivery methods" icon={Bell}>
        <div className="space-y-2 divide-y divide-outline-variant/10">
          <Toggle
            enabled={types.email}
            setEnabled={(v: any) => setTypes({...types, email: v})}
            label="Email Delivery"
            sublabel="Receive updates to your primary inbox"
            icon={<Mail className="w-4 h-4 text-slate-400" />}
          />
          <Toggle
            enabled={types.sms}
            setEnabled={(v: any) => setTypes({...types, sms: v})}
            label="SMS Alerts"
            sublabel="Direct text messages for critical events"
            icon={<MessageSquare className="w-4 h-4 text-slate-400" />}
          />
          <Toggle
            enabled={types.push}
            setEnabled={(v: any) => setTypes({...types, push: v})}
            label="Push Notifications"
            sublabel="Desktop and mobile app alerts"
            icon={<Smartphone className="w-4 h-4 text-slate-400" />}
          />
        </div>
      </Card>

      <Card title="System Alerts" subtitle="Priority & compliance" icon={ShieldAlert}>
        <div className="space-y-2 divide-y divide-outline-variant/10">
          <Toggle
            enabled={types.security}
            setEnabled={(v: any) => setTypes({...types, security: v})}
            label="Security Anomalies"
            sublabel="Alerts for unauthorized access attempts"
          />
          <Toggle
            enabled={types.compliance}
            setEnabled={(v: any) => setTypes({...types, compliance: v})}
            label="Compliance Breaches"
            sublabel="Regulatory limits and node integrity"
          />
        </div>
      </Card>

      <Card title="Sustainability" subtitle="Metrics & Thresholds" icon={Leaf}>
        <div className="space-y-2 divide-y divide-outline-variant/10">
          <Toggle
            enabled={types.threshold}
            setEnabled={(v: any) => setTypes({...types, threshold: v})}
            label="Threshold Warnings"
            sublabel="When carbon output approaches limit"
          />
          <Toggle
            enabled={types.baseline}
            setEnabled={(v: any) => setTypes({...types, baseline: v})}
            label="Baseline Autopilot"
            sublabel="Auto-adjust limits based on prediction"
          />
        </div>
      </Card>

      <Card title="Team" subtitle="Shared workspace alerts" icon={Users}>
        <div className="space-y-2 divide-y divide-outline-variant/10">
          <Toggle
            enabled={types.reports}
            setEnabled={(v: any) => setTypes({...types, reports: v})}
            label="Shared Reports"
            sublabel="When a teammate shares an audit"
          />
          <Toggle
            enabled={types.mentions}
            setEnabled={(v: any) => setTypes({...types, mentions: v})}
            label="Mentions & Tags"
            sublabel="When you are tagged in annotations"
          />
        </div>
      </Card>

      <Card title="Reports" subtitle="Automated digests" icon={BarChart3}>
        <div className="space-y-2 divide-y divide-outline-variant/10">
          <Toggle
            enabled={types.digestWeekly}
            setEnabled={(v: any) => setTypes({...types, digestWeekly: v})}
            label="Weekly ESG Digest"
            sublabel="Summary of facility environmental impact"
          />
          <Toggle
            enabled={types.digest}
            setEnabled={(v: any) => setTypes({...types, digest: v})}
            label="Monthly Deep Dive"
            sublabel="Comprehensive analytics archive"
          />
        </div>
      </Card>
    </div>
  );
};
