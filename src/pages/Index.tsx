import { TopNav } from "@/components/dashboard/TopNav";
import { PipelineFunnel } from "@/components/dashboard/PipelineFunnel";
import { AIInsights } from "@/components/dashboard/AIInsights";
import { PipelineMomentum } from "@/components/dashboard/PipelineMomentum";
import { UnitComparison } from "@/components/dashboard/UnitComparison";
import { RecoveryIntelligence } from "@/components/dashboard/RecoveryIntelligence";
import { CampaignIntelligence } from "@/components/dashboard/CampaignIntelligence";
import { ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />

      {/* Page header */}
      <div className="border-b border-border bg-background">
        <div className="px-4 md:px-6 py-5 flex items-end justify-between flex-wrap gap-3">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-1.5">
              <span>Workspace</span>
              <ChevronRight className="h-3 w-3" />
              <span>Growth Operations</span>
              <ChevronRight className="h-3 w-3" />
              <span className="text-foreground">Overview</span>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">Growth Operations</h1>
            <p className="text-[13px] text-muted-foreground mt-0.5">
              Real-time pipeline health, conversion intelligence & operational signals.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              <span>Live · synced 14s ago</span>
            </div>
            <div className="text-muted-foreground">
              <span className="text-foreground">12</span> units · <span className="text-foreground">4,820</span> leads
            </div>
          </div>
        </div>
      </div>

      <main className="px-4 md:px-6 py-5 space-y-5">
        {/* Top: funnel + AI sidebar */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-5">
          <PipelineFunnel />
          <AIInsights />
        </div>

        {/* Momentum + Unit comparison */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_440px] gap-5">
          <PipelineMomentum />
          <UnitComparison />
        </div>

        {/* Recovery + Campaigns */}
        <div className="grid grid-cols-1 xl:grid-cols-[440px_1fr] gap-5">
          <RecoveryIntelligence />
          <CampaignIntelligence />
        </div>

        <footer className="pt-3 pb-6 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-muted-foreground border-t border-border">
          <span>Fadelito BI · Operational Intelligence</span>
          <span>Build 2.4.1 · model gpt-bi-flow</span>
        </footer>
      </main>
    </div>
  );
};

export default Index;
