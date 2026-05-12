import { Sparkles, TrendingDown, AlertCircle, Target, Zap, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Insight = {
  type: "anomaly" | "prediction" | "recommendation" | "alert";
  icon: typeof Sparkles;
  title: string;
  detail: string;
  meta: string;
  severity: "high" | "medium" | "low";
};

const insights: Insight[] = [
  {
    type: "anomaly",
    icon: TrendingDown,
    title: "SQL conversion dropped 18% vs historical",
    detail: "Detected drift in MQL→SQL ratio over the last 7 days. Likely cause: lead quality from Meta campaign shift on Nov 28.",
    meta: "Confidence 92% · Anomaly",
    severity: "high",
  },
  {
    type: "alert",
    icon: AlertCircle,
    title: "Saúde unit showing higher no-show trend",
    detail: "Visit attendance fell to 54% (vs network 68%). Recommend ops review for confirmation cadence.",
    meta: "3 units affected · Operational",
    severity: "high",
  },
  {
    type: "recommendation",
    icon: Target,
    title: "Reallocate 22% of Meta budget to Google",
    detail: "Google leads convert to enrollment at 9.4% vs Meta 5.1% this period. Estimated +38 enrollments / month.",
    meta: "Causal model · Predicted lift",
    severity: "medium",
  },
  {
    type: "prediction",
    icon: Zap,
    title: "Attendance recovery opportunity: 84 leads",
    detail: "Cluster of cancelled visits last 14d shows high re-engagement probability. Suggest WhatsApp recovery flow.",
    meta: "Predicted 31% recovery rate",
    severity: "low",
  },
];

const severityStyles = {
  high: { bar: "bg-danger", text: "text-danger", chip: "bg-danger-soft text-danger" },
  medium: { bar: "bg-accent", text: "text-foreground", chip: "bg-accent-soft text-accent-foreground" },
  low: { bar: "bg-primary", text: "text-primary", chip: "bg-primary-soft text-primary" },
};

export const AIInsights = () => {
  return (
    <aside className="rounded-xl border border-border bg-card shadow-card-soft overflow-hidden flex flex-col h-full">
      <div className="px-5 py-4 border-b border-border flex items-center justify-between bg-gradient-to-r from-primary/5 to-transparent">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="absolute -top-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-accent" />
          </div>
          <h2 className="text-sm font-semibold tracking-tight">AI Copilot</h2>
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border rounded px-1.5 py-0.5">
            v2.4
          </span>
        </div>
        <button className="text-[11px] text-muted-foreground hover:text-foreground transition">View all</button>
      </div>

      <div className="px-5 py-3 border-b border-border bg-muted/30">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider">
          <span className="text-muted-foreground">Last scan</span>
          <span className="text-foreground flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            2 min ago · 4 signals
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto divide-y divide-border">
        {insights.map((ins, i) => {
          const sev = severityStyles[ins.severity];
          const Icon = ins.icon;
          return (
            <div key={i} className="group relative p-4 hover:bg-muted/40 transition cursor-pointer">
              <div className={cn("absolute left-0 top-4 bottom-4 w-0.5 rounded-r", sev.bar)} />
              <div className="flex items-start gap-3 pl-2">
                <div className={cn("h-7 w-7 rounded-md flex items-center justify-center shrink-0 border border-border bg-background", sev.text)}>
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[13px] font-medium leading-snug text-foreground">{ins.title}</h3>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition shrink-0" />
                  </div>
                  <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">{ins.detail}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <span className={cn("inline-flex items-center text-[10px] font-mono px-1.5 py-0.5 rounded uppercase tracking-wider", sev.chip)}>
                      {ins.type}
                    </span>
                    <span className="text-[10px] text-muted-foreground">{ins.meta}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-border p-3">
        <button className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-medium transition">
          <span className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Ask copilot
          </span>
          <kbd className="text-[10px] font-mono opacity-70">⌘ + I</kbd>
        </button>
      </div>
    </aside>
  );
};
