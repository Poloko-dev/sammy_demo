import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Bell,
  MoreVertical,
  Zap,
  Pause,
  Play,
  Settings,
  Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const alerts = [
  {
    id: "1",
    name: "Brand Mentions",
    description: "Track all mentions of your brand across social media",
    keywords: ["Lesotho PostBank", "Lesotho PostBank", "@lesothopostbank"],
    sources: ["Twitter", "Facebook", "Instagram", "LinkedIn", "News"],
    mentions: 2847,
    status: "active",
    type: "advanced",
    lastSpike: "2 hours ago",
    created: "Dec 1, 2024",
  },
  {
    id: "2",
    name: "Competitor Watch",
    description: "Monitor competitor brand mentions and activities",
    keywords: ["Nedbank", "Standard Lesotho Bank", "#competitorhashtag"],
    sources: ["Twitter", "LinkedIn", "Blogs", "News"],
    mentions: 1234,
    status: "active",
    type: "standard",
    lastSpike: null,
    created: "Nov 15, 2024",
  },
  {
    id: "3",
    name: "Industry News",
    description: "Stay updated on industry trends and news",
    keywords: ["Savings", "eWallet adoption", "B2B technology"],
    sources: ["News", "Blogs", "Reddit"],
    mentions: 892,
    status: "active",
    type: "basic",
    lastSpike: null,
    created: "Nov 10, 2024",
  },
];

const typeStyles: Record<string, string> = {
  basic: "bg-muted text-muted-foreground",
  standard: "bg-primary/10 text-primary border-primary/20",
  advanced: "bg-primary text-white",
};

const Alerts = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Alerts</h1>
            <p className="text-muted-foreground">
              Manage your monitoring alerts and keywords
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Create Alert
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Total Alerts</p>
            <p className="text-2xl font-bold text-foreground mt-1">4 / 10</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Active Alerts</p>
            <p className="text-2xl font-bold text-success mt-1">3</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">Total Keywords</p>
            <p className="text-2xl font-bold text-foreground mt-1">12</p>
          </div>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">This Month</p>
            <p className="text-2xl font-bold text-primary mt-1">5,429</p>
            <p className="text-xs text-muted-foreground">mentions</p>
          </div>
        </div>

        {/* Alerts List */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-border bg-secondary/50 text-sm font-medium text-muted-foreground">
            <div className="col-span-4">Alert Name</div>
            <div className="col-span-2">Keywords</div>
            <div className="col-span-2">Sources</div>
            <div className="col-span-1">Mentions</div>
            <div className="col-span-1">Type</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-1">Actions</div>
          </div>

          {alerts.map((alert, index) => (
            <div
              key={alert.id}
              className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-border last:border-0 hover:bg-secondary/30 transition-colors animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="col-span-4">
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                      alert.status === "active" ? "bg-primary/10" : "bg-muted"
                    )}
                  >
                    <Bell
                      className={cn(
                        "w-5 h-5",
                        alert.status === "active"
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-foreground">
                        {alert.name}
                      </h4>
                      {alert.lastSpike && (
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-warning/10 text-warning text-xs font-medium">
                          <Zap className="w-3 h-3" />
                          Spike
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {alert.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-2 flex items-center">
                <div className="flex flex-wrap gap-1">
                  {alert.keywords.slice(0, 2).map((kw) => (
                    <Badge key={kw} variant="secondary" className="text-xs">
                      {kw}
                    </Badge>
                  ))}
                  {alert.keywords.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{alert.keywords.length - 2}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="col-span-2 flex items-center">
                <p className="text-sm text-muted-foreground">
                  {alert.sources.slice(0, 3).join(", ")}
                  {alert.sources.length > 3 && ` +${alert.sources.length - 3}`}
                </p>
              </div>

              <div className="col-span-1 flex items-center">
                <p className="font-medium text-foreground">
                  {alert.mentions.toLocaleString()}
                </p>
              </div>

              <div className="col-span-1 flex items-center">
                <Badge
                  className={cn("capitalize text-xs", typeStyles[alert.type])}
                >
                  {alert.type}
                </Badge>
              </div>

              <div className="col-span-1 flex items-center">
                <Badge
                  variant={alert.status === "active" ? "default" : "secondary"}
                  className={cn(
                    "capitalize text-xs",
                    alert.status === "active" &&
                      "bg-success text-success-foreground"
                  )}
                >
                  {alert.status}
                </Badge>
              </div>

              <div className="col-span-1 flex items-center gap-1">
                <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                  {alert.status === "active" ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </button>
                <button className="p-1.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                  <Settings className="w-4 h-4" />
                </button>
                <button className="p-1.5 rounded-lg hover:bg-destructive/10 transition-colors text-muted-foreground hover:text-destructive">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Alerts;
