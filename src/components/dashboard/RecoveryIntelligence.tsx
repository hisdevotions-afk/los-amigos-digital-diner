import { RotateCcw, XCircle, CalendarX, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buckets = [
  { icon: XCircle, label: "Cancelled visits", value: 142, delta: "+8%", tone: "danger" },
  { icon: CalendarX, label: "Missed visits", value: 198, delta: "+14%", tone: "warning" },
  { icon: RotateCcw, label: "Recovered leads", value: 84, delta: "+22%", tone: "primary" },
  { icon: CheckCircle2, label: "Re-engagement", value: "31%", delta: "+4pt", tone: "success" },
];

const toneMap: Record<string, string> = {
  danger: "text-danger bg-danger-soft",
  warning: "text-warning bg-warning-soft",
  primary: "text-primary bg-primary-soft",
  success: "text-success bg-success-soft",
};

export const RecoveryIntelligence = () => {
  return (
    <section className="rounded-xl border border-border bg-card shadow-card-soft">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <RotateCcw className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold tracking-tight">Recovery Intelligence</h2>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Last 30d</span>
      </div>

      <div className="grid grid-cols-2 gap-px bg-border">
        {buckets.map((b) => {
          const Icon = b.icon;
          return (
            <div key={b.label} className="bg-card p-4 hover:bg-muted/30 transition">
              <div className={cn("inline-flex h-7 w-7 rounded-md items-center justify-center mb-2.5", toneMap[b.tone])}>
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{b.label}</div>
              <div className="text-xl font-semibold text-tabular tracking-tight mt-0.5">{b.value}</div>
              <div className="text-[10px] font-mono text-muted-foreground mt-0.5">{b.delta} vs prev</div>
            </div>
          );
        })}
      </div>

      <div className="px-5 py-3 border-t border-border bg-gradient-to-r from-primary/5 to-transparent">
        <div className="flex items-start gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">84 leads</span> show high recovery probability — auto-flow ready in WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};
