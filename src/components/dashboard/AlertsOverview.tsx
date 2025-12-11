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
    keywords: ["Lesotho Post Bank", "Lesotho PostBank"],
    sources: ["Twitter", "Facebook", "News"],
    mentions: 2847,
    status: "active",
    type: "advanced",
    hasSpike: true,
  },
  {
    id: "2",
    name: "Competitor Watch",
    keywords: ["Nedbank", "Standard Lesotho Bank"],
    sources: ["Twitter", "LinkedIn", "Blogs"],
    mentions: 1234,
    status: "active",
    type: "standard",
    hasSpike: false,
  },
  {
    id: "3",
    name: "Industry News",
    keywords: ["Savings", "eWallet adoption"],
    sources: ["News", "Blogs", "Reddit"],
    mentions: 892,
    status: "active",
    type: "basic",
    hasSpike: false,
  },
];

const typeColors: Record<string, string> = {
  basic: "bg-muted text-muted-foreground",
  standard: "bg-primary/10 text-primary",
  advanced: "bg-primary text-white",
};

export const AlertsOverview = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
            Active Alerts
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            4 of 10 alerts configured
          </p>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="gap-2 text-xs sm:text-sm"
        >
          <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden sm:inline">Add Alert</span>
          <span className="sm:hidden">Add</span>
        </Button>
      </div>

      <div className="divide-y divide-border">
        {mockAlerts.map((alert, index) => (
          <div
            key={alert.id}
            className="p-3 sm:p-4 hover:bg-secondary/50 transition-colors animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
              <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
                <div
                  className={cn(
                    "w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0",
                    alert.status === "active" ? "bg-primary/10" : "bg-muted"
                  )}
                >
                  <Bell
                    className={cn(
                      "w-4 h-4 sm:w-5 sm:h-5",
                      alert.status === "active"
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-medium text-foreground text-sm sm:text-base">
                      {alert.name}
                    </h4>
                    {alert.hasSpike && (
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-warning/10 text-warning text-xs font-medium">
                        <Zap className="w-3 h-3" />
                        Spike
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <div className="flex items-center gap-1 flex-wrap">
                      {alert.keywords.map((keyword) => (
                        <Badge
                          key={keyword}
                          variant="secondary"
                          className="text-xs"
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 truncate">
                    {alert.sources.join(", ")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
                <div className="text-right">
                  <p className="text-base sm:text-lg font-semibold text-foreground">
                    {alert.mentions.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">mentions</p>
                </div>

                <Badge
                  className={cn(
                    "capitalize text-xs hidden sm:inline-flex",
                    typeColors[alert.type]
                  )}
                >
                  {alert.type}
                </Badge>

                <button className="p-1 rounded hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                  <MoreVertical className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
