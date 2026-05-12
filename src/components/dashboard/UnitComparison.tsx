import { Building2, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Unit = {
  name: string;
  city: string;
  conv: number;
  attendance: number;
  enroll: number;
  noShow: number;
  status: "leader" | "stable" | "attention";
};

const units: Unit[] = [
  { name: "Centro", city: "São Paulo", conv: 9.2, attendance: 78, enroll: 124, noShow: 22, status: "leader" },
  { name: "Vila Olímpia", city: "São Paulo", conv: 7.8, attendance: 71, enroll: 96, noShow: 29, status: "stable" },
  { name: "Saúde", city: "São Paulo", conv: 5.1, attendance: 54, enroll: 48, noShow: 46, status: "attention" },
  { name: "Moema", city: "São Paulo", conv: 8.4, attendance: 74, enroll: 98, noShow: 26, status: "stable" },
];

const statusMap = {
  leader: { dot: "bg-success", text: "text-success", label: "Top performer" },
  stable: { dot: "bg-primary", text: "text-primary", label: "Stable" },
  attention: { dot: "bg-danger", text: "text-danger", label: "Needs review" },
};

export const UnitComparison = () => {
  return (
    <section className="rounded-xl border border-border bg-card shadow-card-soft">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold tracking-tight">Unit Performance</h2>
        </div>
        <button className="text-[11px] text-muted-foreground hover:text-foreground transition">Compare all</button>
      </div>

      <div className="divide-y divide-border">
        {units.map((u) => {
          const st = statusMap[u.status];
          return (
            <div key={u.name} className="group px-5 py-3.5 hover:bg-muted/30 transition cursor-pointer">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <span className={cn("h-1.5 w-1.5 rounded-full", st.dot)} />
                  <div>
                    <div className="text-[13px] font-medium leading-tight">{u.name}</div>
                    <div className="text-[10px] text-muted-foreground">{u.city} · {st.label}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition" />
              </div>

              <div className="grid grid-cols-4 gap-3 mt-2.5">
                <Metric label="Conv." value={`${u.conv}%`} accent={u.status === "attention"} />
                <Metric label="Attend." value={`${u.attendance}%`} accent={u.status === "attention"} />
                <Metric label="Enroll" value={u.enroll} />
                <Metric label="No-show" value={`${u.noShow}%`} danger={u.noShow > 35} />
              </div>

              {/* perf bar */}
              <div className="mt-2.5 flex h-1 rounded-full overflow-hidden bg-muted">
                <div className="bg-success h-full" style={{ width: `${u.conv * 10}%` }} />
                <div className="bg-primary h-full" style={{ width: `${u.attendance / 4}%` }} />
                <div className="bg-danger/60 h-full" style={{ width: `${u.noShow / 4}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Metric = ({ label, value, accent, danger }: { label: string; value: string | number; accent?: boolean; danger?: boolean }) => (
  <div>
    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">{label}</div>
    <div className={cn(
      "text-sm font-semibold text-tabular mt-0.5",
      danger && "text-danger",
      accent && !danger && "text-warning"
    )}>{value}</div>
  </div>
);
