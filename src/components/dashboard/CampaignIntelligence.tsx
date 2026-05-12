import { Megaphone, TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Campaign = {
  channel: string;
  spend: string;
  leads: number;
  sqlRate: number; // %
  enrollRate: number; // %
  quality: number; // 0-100 score
  trend: "up" | "down";
};

const campaigns: Campaign[] = [
  { channel: "Google Search · Brand", spend: "R$ 18.4k", leads: 842, sqlRate: 48, enrollRate: 9.4, quality: 88, trend: "up" },
  { channel: "Meta · Lead Ads", spend: "R$ 32.1k", leads: 1820, sqlRate: 22, enrollRate: 5.1, quality: 54, trend: "down" },
  { channel: "Google Performance Max", spend: "R$ 14.2k", leads: 612, sqlRate: 41, enrollRate: 8.2, quality: 81, trend: "up" },
  { channel: "Organic · WhatsApp", spend: "—", leads: 388, sqlRate: 56, enrollRate: 11.8, quality: 92, trend: "up" },
  { channel: "Referral", spend: "—", leads: 214, sqlRate: 62, enrollRate: 14.2, quality: 95, trend: "up" },
];

const qualityTone = (q: number) => {
  if (q >= 80) return "bg-success";
  if (q >= 60) return "bg-primary";
  if (q >= 40) return "bg-warning";
  return "bg-danger";
};

export const CampaignIntelligence = () => {
  return (
    <section className="rounded-xl border border-border bg-card shadow-card-soft">
      <div className="flex items-center justify-between px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Megaphone className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold tracking-tight">Campaign Intelligence</h2>
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border rounded px-1.5 py-0.5">SQL Quality</span>
        </div>
        <button className="text-[11px] text-muted-foreground hover:text-foreground transition">Open analyzer</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground border-b border-border">
              <th className="text-left font-medium px-5 py-2.5">Channel</th>
              <th className="text-right font-medium px-3 py-2.5">Spend</th>
              <th className="text-right font-medium px-3 py-2.5">Leads</th>
              <th className="text-right font-medium px-3 py-2.5">SQL %</th>
              <th className="text-right font-medium px-3 py-2.5">Enroll %</th>
              <th className="text-left font-medium px-3 py-2.5 w-40">Quality score</th>
              <th className="px-5 py-2.5"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {campaigns.map((c) => (
              <tr key={c.channel} className="hover:bg-muted/30 transition">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className={cn("h-1.5 w-1.5 rounded-full", qualityTone(c.quality))} />
                    <span className="font-medium text-foreground">{c.channel}</span>
                  </div>
                </td>
                <td className="px-3 py-3 text-right font-mono text-tabular text-muted-foreground">{c.spend}</td>
                <td className="px-3 py-3 text-right font-mono text-tabular">{c.leads.toLocaleString()}</td>
                <td className={cn(
                  "px-3 py-3 text-right font-mono text-tabular font-medium",
                  c.sqlRate < 30 && "text-danger"
                )}>{c.sqlRate}%</td>
                <td className={cn(
                  "px-3 py-3 text-right font-mono text-tabular font-medium",
                  c.enrollRate >= 9 && "text-success",
                  c.enrollRate < 6 && "text-danger"
                )}>{c.enrollRate}%</td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                      <div className={cn("h-full rounded-full", qualityTone(c.quality))} style={{ width: `${c.quality}%` }} />
                    </div>
                    <span className="font-mono text-tabular text-[11px] w-7 text-right">{c.quality}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-right">
                  {c.trend === "up" ? (
                    <TrendingUp className="h-3.5 w-3.5 text-success inline" />
                  ) : (
                    <TrendingDown className="h-3.5 w-3.5 text-danger inline" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
