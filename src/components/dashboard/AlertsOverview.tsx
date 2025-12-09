import { Bell, Plus, MoreVertical, Zap, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Alert {
  id: string;
  name: string;
  keywords: string[];
  sources: string[];
  mentions: number;
  status: "active" | "paused";
  type: "basic" | "standard" | "advanced";
  hasSpike: boolean;
}

const mockAlerts: Alert[] = [
  {
    id: "1",
    name: "Brand Mentions",
    keywords: ["YourBrand", "YourCompany"],
    sources: ["Twitter", "Facebook", "News"],
    mentions: 2847,
    status: "active",
    type: "advanced",
    hasSpike: true,
  },
  {
    id: "2",
    name: "Competitor Watch",
    keywords: ["CompetitorA", "CompetitorB"],
    sources: ["Twitter", "LinkedIn", "Blogs"],
    mentions: 1234,
    status: "active",
    type: "standard",
    hasSpike: false,
  },
  {
    id: "3",
    name: "Industry News",
    keywords: ["SaaS trends", "enterprise software"],
    sources: ["News", "Blogs", "Reddit"],
    mentions: 892,
    status: "active",
    type: "basic",
    hasSpike: false,
  },
  {
    id: "4",
    name: "Product Feedback",
    keywords: ["product review", "feature request"],
    sources: ["Twitter", "Forums", "Reddit"],
    mentions: 456,
    status: "paused",
    type: "standard",
    hasSpike: false,
  },
];

const typeColors: Record<string, string> = {
  basic: "bg-muted text-muted-foreground",
  standard: "bg-primary/10 text-primary",
  advanced: "gradient-primary text-primary-foreground",
};

export const AlertsOverview = () => {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="px-6 py-4 border-b border-border flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-foreground">Active Alerts</h3>
          <p className="text-sm text-muted-foreground">4 of 10 alerts configured</p>
        </div>
        <Button size="sm" variant="outline" className="gap-2">
          <Plus className="w-4 h-4" />
          Add Alert
        </Button>
      </div>

      <div className="divide-y divide-border">
        {mockAlerts.map((alert, index) => (
          <div
            key={alert.id}
            className="p-4 hover:bg-secondary/50 transition-colors animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex items-start justify-between gap-4">
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
                      alert.status === "active" ? "text-primary" : "text-muted-foreground"
                    )}
                  />
                </div>
                
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-foreground">{alert.name}</h4>
                    {alert.hasSpike && (
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-warning/10 text-warning text-xs font-medium">
                        <Zap className="w-3 h-3" />
                        Spike
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <div className="flex items-center gap-1">
                      {alert.keywords.map((keyword) => (
                        <Badge key={keyword} variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-1">
                    {alert.sources.join(", ")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-lg font-semibold text-foreground">
                    {alert.mentions.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">mentions</p>
                </div>
                
                <Badge className={cn("capitalize text-xs", typeColors[alert.type])}>
                  {alert.type}
                </Badge>
                
                <button className="p-1 rounded hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
