import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { MentionsFeed } from "@/components/dashboard/MentionsFeed";
import { AlertsOverview } from "@/components/dashboard/AlertsOverview";
import { SentimentChart } from "@/components/dashboard/SentimentChart";
import { TrendChart } from "@/components/dashboard/TrendChart";
import { SourcesBreakdown } from "@/components/dashboard/SourcesBreakdown";
import { 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Zap,
} from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">
              Monitor your brand mentions across all platforms
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Last updated:</span>
            <span className="font-medium text-foreground">Just now</span>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Mentions"
            value="35,654"
            change={12.5}
            icon={<MessageSquare className="w-5 h-5 text-primary" />}
            variant="default"
          />
          <MetricCard
            title="Reach"
            value="2.4M"
            change={8.3}
            icon={<Users className="w-5 h-5 text-primary-foreground" />}
            variant="primary"
          />
          <MetricCard
            title="Engagement"
            value="156K"
            change={-3.2}
            icon={<TrendingUp className="w-5 h-5 text-accent-foreground" />}
            variant="accent"
          />
          <MetricCard
            title="Active Alerts"
            value="4/10"
            icon={<Zap className="w-5 h-5 text-success-foreground" />}
            variant="success"
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TrendChart />
          </div>
          <div>
            <SentimentChart />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Mentions Feed - Takes 2 columns */}
          <div className="lg:col-span-2">
            <MentionsFeed />
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <SourcesBreakdown />
          </div>
        </div>

        {/* Alerts Section */}
        <AlertsOverview />
      </div>
    </DashboardLayout>
  );
};

export default Index;
