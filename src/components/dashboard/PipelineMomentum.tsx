import { TrendingUp, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

// 14-day series for 3 stages (normalized 0-100 for path)
const series = {
  leads: [42, 48, 45, 52, 58, 55, 62, 68, 64, 72, 78, 74, 82, 88],
  sql: [30, 32, 35, 38, 36, 42, 40, 38, 36, 34, 32, 30, 33, 35],
  matriculas: [18, 20, 22, 24, 26, 28, 30, 32, 35, 38, 40, 42, 45, 48],
};

const W = 600;
const H = 140;

const toPath = (data: number[]) => {
  const max = 100;
  const step = W / (data.length - 1);
  return data
    .map((v, i) => `${i === 0 ? "M" : "L"} ${i * step} ${H - (v / max) * H}`)
    .join(" ");
};

const toArea = (data: number[]) => `${toPath(data)} L ${W} ${H} L 0 ${H} Z`;

export const PipelineMomentum = () => {
  return (
    <section className="rounded-xl border border-border bg-card shadow-card-soft">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold tracking-tight">Pipeline Momentum</h2>
        </div>
        <div className="flex items-center gap-1 p-0.5 rounded-md bg-muted text-[11px] font-medium">
          {["7d", "14d", "30d", "90d"].map((p, i) => (
            <button key={p} className={cn(
              "px-2 py-0.5 rounded transition",
              i === 1 ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            )}>{p}</button>
          ))}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-5 mb-3 text-[11px]">
          <Legend color="bg-primary" label="Leads" value="+24.2%" positive />
          <Legend color="bg-warning" label="SQL" value="−18.0%" positive={false} />
          <Legend color="bg-success" label="Matrículas" value="+9.7%" positive />
        </div>

        <div className="relative">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-36" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradLeads" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradMatr" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--success))" stopOpacity="0.18" />
                <stop offset="100%" stopColor="hsl(var(--success))" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* grid */}
            {[0, 0.25, 0.5, 0.75, 1].map((g) => (
              <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} stroke="hsl(var(--border))" strokeDasharray="2 4" strokeWidth="0.5" />
            ))}
            <path d={toArea(series.leads)} fill="url(#gradLeads)" />
            <path d={toArea(series.matriculas)} fill="url(#gradMatr)" />
            <path d={toPath(series.leads)} fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <path d={toPath(series.sql)} fill="none" stroke="hsl(var(--warning))" strokeWidth="1.5" strokeDasharray="3 3" />
            <path d={toPath(series.matriculas)} fill="none" stroke="hsl(var(--success))" strokeWidth="1.5" />
          </svg>

          <div className="absolute top-2 right-2 px-2 py-1 rounded bg-background/90 border border-border text-[10px] font-mono text-muted-foreground backdrop-blur">
            Anomaly · Day 9
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-3 pt-3 border-t border-border">
          <Stat label="Conversion velocity" value="11.4d" trend="−1.2d" positive />
          <Stat label="Stage acceleration" value="+8.2%" trend="vs prev" positive />
          <Stat label="Forecast accuracy" value="94.1%" trend="model v2.4" positive />
        </div>
      </div>
    </section>
  );
};

const Legend = ({ color, label, value, positive }: { color: string; label: string; value: string; positive: boolean }) => (
  <div className="flex items-center gap-1.5">
    <span className={cn("h-1.5 w-3 rounded-sm", color)} />
    <span className="text-muted-foreground">{label}</span>
    <span className={cn("font-mono", positive ? "text-success" : "text-danger")}>{value}</span>
  </div>
);

const Stat = ({ label, value, trend, positive }: { label: string; value: string; trend: string; positive: boolean }) => (
  <div>
    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{label}</div>
    <div className="text-base font-semibold text-tabular tracking-tight mt-0.5">{value}</div>
    <div className={cn("text-[10px] font-mono", positive ? "text-success" : "text-danger")}>{trend}</div>
  </div>
);
