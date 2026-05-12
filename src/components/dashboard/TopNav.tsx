import { Search, Bell, Sparkles, Settings, ChevronDown, Calendar, Building2 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const TopNav = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="flex h-14 items-center gap-3 px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2 pr-4 border-r border-border/60">
          <div className="relative h-7 w-7 rounded-md bg-primary flex items-center justify-center">
            <div className="absolute inset-0 rounded-md bg-primary" />
            <span className="relative font-mono text-[11px] font-bold text-primary-foreground">F</span>
            <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-accent ring-2 ring-background" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm font-semibold tracking-tight">Fadelito</span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">BI</span>
          </div>
        </div>

        {/* Search */}
        <div className="relative hidden md:flex items-center flex-1 max-w-md">
          <Search className="absolute left-2.5 h-3.5 w-3.5 text-muted-foreground" />
          <input
            placeholder="Search leads, units, campaigns…"
            className="w-full h-8 rounded-md bg-muted/50 border border-transparent pl-8 pr-14 text-xs placeholder:text-muted-foreground focus:bg-background focus:border-border focus:outline-none focus:ring-1 focus:ring-ring transition"
          />
          <kbd className="absolute right-2 hidden md:inline-flex items-center h-5 px-1.5 rounded bg-background border border-border text-[10px] font-mono text-muted-foreground">⌘K</kbd>
        </div>

        <div className="flex-1 md:hidden" />

        {/* Selectors */}
        <div className="hidden lg:flex items-center gap-1.5">
          <button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md border border-border bg-background hover:bg-muted text-xs font-medium transition">
            <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
            All units
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </button>
          <button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md border border-border bg-background hover:bg-muted text-xs font-medium transition">
            <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
            Last 30 days
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </button>
        </div>

        {/* AI Insights */}
        <button className="hidden sm:inline-flex items-center gap-1.5 h-8 px-2.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-medium transition relative">
          <Sparkles className="h-3.5 w-3.5" />
          AI Insights
          <span className="ml-1 rounded-sm bg-accent text-accent-foreground px-1 text-[9px] font-mono font-semibold">4</span>
        </button>

        <button className="relative h-8 w-8 rounded-md border border-border hover:bg-muted flex items-center justify-center transition">
          <Bell className="h-4 w-4 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
        </button>

        <ThemeToggle />

        <button className="h-8 w-8 rounded-md border border-border hover:bg-muted flex items-center justify-center transition">
          <Settings className="h-4 w-4 text-muted-foreground" />
        </button>

        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-[11px] font-semibold text-primary-foreground ring-2 ring-background">
          MA
        </div>
      </div>
    </header>
  );
};
