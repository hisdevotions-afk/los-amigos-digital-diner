import { ArrowRight, TrendingDown, TrendingUp, AlertTriangle, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

type Stage = {
  key: string;
  label: string;
  value: number;
  delta: number;
  conv?: number; // conversion to next stage %
  status: "healthy" | "watch" | "bottleneck";
  note?: string;
};

const stages: Stage[] = [
  { key: "leads", label: "Leads Totais", value: 4820, delta: 12.4, conv: 62, status: "healthy" },
  { key: "mql", label: "MQL", value: 2988, delta: 8.1, conv: 47, status: "healthy" },
  { key: "sql", label: "SQL", value: 1404, delta: -18.2, conv: 71, status: "bottleneck", note: "−18% vs avg" },
  { key: "agendadas", label: "Visitas Agendadas", value: 996, delta: 4.2, conv: 68, status: "healthy" },
  { key: "comparecidas", label: "Visitas Comparecidas", value: 678, delta: -6.3, conv: 54, status: "watch", note: "No-show rising" },
  { key: "matriculas", label: "Matrículas", value: 366, delta: 9.7, status: "healthy" },
];

const statusStyles = {
  healthy: {
    border: "border-border",
    accent: "bg-success",
    text: "text-success",
    badge: "bg-success-soft text-success border-success/20",
    flow: "from-primary/30 via-primary/50 to-primary/30",
  },
  watch: {
    border: "border-warning/40",
    accent: "bg-warning",
    text: "text-warning",
    badge: "bg-warning-soft text-warning border-warning/30",
    flow: "from-warning/20 via-warning/40 to-warning/20",
  },
  bottleneck: {
    border: "border-danger/50",
    accent: "bg-danger",
    text: "text-danger",
    badge: "bg-danger-soft text-danger border-danger/30",
    flow: "from-danger/20 via-danger/50 to-danger/20",
  },
};

export const PipelineFunnel = () => {
  const max = Math.max(...stages.map((s) => s.value));

  return (
    <section className="rounded-xl border border-border bg-card shadow-card-soft">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold tracking-tight">Operational Funnel</h2>
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border rounded px-1.5 py-0.5">Live</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-success" />Healthy</span>
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-warning" />Watch</span>
          <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-danger" />Bottleneck</span>
        </div>
      </div>

      <div className="p-5">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-2 items-stretch">
          {stages.map((s, i) => {
            const style = statusStyles[s.status];
            const widthPct = (s.value / max) * 100;
            return (
              <div key={s.key} className="lg:col-span-2 contents lg:block">
                <div className={cn(
                  "relative rounded-lg border bg-card transition-all hover:shadow-elevated group",
                  style.border,
                  s.status === "bottleneck" && "ring-1 ring-danger/20"
                )}>
                  {/* Status dot */}
                  <div className="absolute top-3 right-3 flex items-center gap-1">
                    {s.status === "bottleneck" && (
                      <span className={cn("relative h-2 w-2 rounded-full", style.accent, "text-danger pulse-dot")} />
                    )}
                    {s.status === "watch" && <span className={cn("h-2 w-2 rounded-full", style.accent)} />}
                    {s.status === "healthy" && <span className={cn("h-2 w-2 rounded-full", style.accent, "opacity-70")} />}
                  </div>

                  <div className="p-3.5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="text-[11px] font-medium text-muted-foreground mb-2 leading-tight pr-4">
                      {s.label}
                    </div>
                    <div className="text-2xl font-semibold text-tabular tracking-tight">
                      {s.value.toLocaleString()}
                    </div>

                    <div className="mt-2 flex items-center gap-1.5">
                      <span className={cn(
                        "inline-flex items-center gap-0.5 text-[10px] font-mono font-medium",
                        s.delta >= 0 ? "text-success" : "text-danger"
                      )}>
                        {s.delta >= 0 ? <TrendingUp className="h-2.5 w-2.5" /> : <TrendingDown className="h-2.5 w-2.5" />}
                        {s.delta >= 0 ? "+" : ""}{s.delta}%
                      </span>
                    </div>

                    {/* Volume bar */}
                    <div className="mt-2.5 h-0.5 rounded-full bg-muted overflow-hidden">
                      <div className={cn("h-full rounded-full", style.accent)} style={{ width: `${widthPct}%` }} />
                    </div>

                    {s.note && (
                      <div className={cn(
                        "mt-2.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded border text-[10px] font-medium",
                        style.badge
                      )}>
                        <AlertTriangle className="h-2.5 w-2.5" />
                        {s.note}
                      </div>
                    )}
                  </div>
                </div>

                {/* Connector */}
                {i < stages.length - 1 && (
                  <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-center px-1">
                    <div className={cn("relative w-full h-px bg-gradient-to-r", style.flow)}>
                      <div className="absolute inset-0 flow-line opacity-60" />
                    </div>
                    <div className={cn(
                      "mt-1.5 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md text-[10px] font-mono font-semibold",
                      s.status === "bottleneck" ? "bg-danger-soft text-danger" :
                      s.status === "watch" ? "bg-warning-soft text-warning" :
                      "bg-primary-soft text-primary"
                    )}>
                      {s.conv}%
                      <ArrowRight className="h-2.5 w-2.5" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Funnel summary */}
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-border">
          <Summary label="End-to-end conversion" value="7.6%" delta="+0.4pt" positive />
          <Summary label="Pipeline velocity" value="11.4d" delta="−1.2d" positive sub="avg lead → enroll" />
          <Summary label="Drop-off (largest)" value="MQL → SQL" delta="53% loss" positive={false} sub="bottleneck stage" />
          <Summary label="Forecasted enrollments" value="412" delta="+12.6%" positive sub="next 30 days" />
        </div>
      </div>
    </section>
  );
};

const Summary = ({ label, value, delta, positive, sub }: { label: string; value: string; delta: string; positive: boolean; sub?: string }) => (
  <div className="space-y-0.5">
    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{label}</div>
    <div className="text-base font-semibold text-tabular tracking-tight">{value}</div>
    <div className="flex items-center gap-1.5">
      <span className={cn("text-[10px] font-mono font-medium", positive ? "text-success" : "text-danger")}>{delta}</span>
      {sub && <span className="text-[10px] text-muted-foreground">· {sub}</span>}
    </div>
  </div>
);
