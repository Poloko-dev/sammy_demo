import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  FileText, 
  Download, 
  Calendar, 
  Clock,
  BarChart3,
  PieChart,
  TrendingUp,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  MoreVertical,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Report {
  id: string;
  name: string;
  type: "listening" | "comparison" | "social" | "custom";
  icon: any;
  description: string;
  lastGenerated: string;
  schedule: string | null;
  status: "ready" | "generating" | "scheduled";
}

const reports: Report[] = [
  {
    id: "1",
    name: "Monthly Brand Report",
    type: "listening",
    icon: BarChart3,
    description: "Comprehensive analysis of all brand mentions this month",
    lastGenerated: "Dec 1, 2024",
    schedule: "Monthly",
    status: "ready",
  },
  {
    id: "2",
    name: "Competitor Comparison",
    type: "comparison",
    icon: TrendingUp,
    description: "Compare your brand against 3 competitors",
    lastGenerated: "Nov 28, 2024",
    schedule: "Weekly",
    status: "ready",
  },
  {
    id: "3",
    name: "Twitter Analytics",
    type: "social",
    icon: Twitter,
    description: "Detailed Twitter/X account performance",
    lastGenerated: "Dec 8, 2024",
    schedule: null,
    status: "ready",
  },
  {
    id: "4",
    name: "Facebook Insights",
    type: "social",
    icon: Facebook,
    description: "Facebook page and mentions analysis",
    lastGenerated: "Dec 8, 2024",
    schedule: "Weekly",
    status: "generating",
  },
  {
    id: "5",
    name: "LinkedIn Performance",
    type: "social",
    icon: Linkedin,
    description: "LinkedIn company page analytics",
    lastGenerated: "Dec 5, 2024",
    schedule: null,
    status: "ready",
  },
  {
    id: "6",
    name: "Instagram Engagement",
    type: "social",
    icon: Instagram,
    description: "Instagram mentions and engagement metrics",
    lastGenerated: "Dec 7, 2024",
    schedule: "Daily",
    status: "scheduled",
  },
];

const reportTemplates = [
  {
    name: "Listening",
    icon: BarChart3,
    description: "An in-depth analysis of one of your alerts",
    color: "bg-primary/10 text-primary",
  },
  {
    name: "Alert Comparison",
    icon: TrendingUp,
    description: "Compare 2-10 alerts against each other",
    color: "bg-accent/10 text-accent",
  },
  {
    name: "Mentions List",
    icon: FileText,
    description: "Create a curated list of mentions",
    color: "bg-success/10 text-success",
  },
  {
    name: "Market Trends",
    icon: PieChart,
    description: "Stay updated on latest market trends",
    color: "bg-warning/10 text-warning",
  },
];

const statusStyles: Record<string, string> = {
  ready: "bg-success/10 text-success",
  generating: "bg-primary/10 text-primary",
  scheduled: "bg-muted text-muted-foreground",
};

const Reports = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Reports</h1>
            <p className="text-muted-foreground">
              Create and manage your analytics reports
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Create Report
          </Button>
        </div>

        {/* Report Templates */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="font-semibold text-foreground mb-4">Quick Start Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reportTemplates.map((template, index) => (
              <button
                key={template.name}
                className="p-4 rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all text-left group animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-3", template.color)}>
                  <template.icon className="w-5 h-5" />
                </div>
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {template.name}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Reports List */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <h3 className="font-semibold text-foreground">Your Reports</h3>
            <p className="text-sm text-muted-foreground">6 reports</p>
          </div>

          <div className="divide-y divide-border">
            {reports.map((report, index) => (
              <div
                key={report.id}
                className="px-6 py-4 hover:bg-secondary/30 transition-colors animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <report.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{report.name}</h4>
                      <p className="text-sm text-muted-foreground">{report.description}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          Last generated: {report.lastGenerated}
                        </span>
                        {report.schedule && (
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" />
                            {report.schedule}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Badge className={cn("capitalize text-xs", statusStyles[report.status])}>
                      {report.status}
                    </Badge>
                    <Button variant="outline" size="sm" className="gap-2" disabled={report.status !== "ready"}>
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                    <button className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
