import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { TrendChart } from "@/components/dashboard/TrendChart";
import { SentimentChart } from "@/components/dashboard/SentimentChart";
import { SourcesBreakdown } from "@/components/dashboard/SourcesBreakdown";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { 
  Download, 
  Calendar, 
  TrendingUp, 
  MessageSquare, 
  Users, 
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const weeklyData = [
  { name: "Mon", mentions: 1200, engagement: 4500 },
  { name: "Tue", mentions: 1890, engagement: 5800 },
  { name: "Wed", mentions: 2400, engagement: 6200 },
  { name: "Thu", mentions: 1980, engagement: 5100 },
  { name: "Fri", mentions: 2890, engagement: 7800 },
  { name: "Sat", mentions: 2390, engagement: 6900 },
  { name: "Sun", mentions: 1490, engagement: 4200 },
];

const hourlyData = [
  { hour: "00", mentions: 120 },
  { hour: "02", mentions: 80 },
  { hour: "04", mentions: 60 },
  { hour: "06", mentions: 140 },
  { hour: "08", mentions: 380 },
  { hour: "10", mentions: 520 },
  { hour: "12", mentions: 680 },
  { hour: "14", mentions: 720 },
  { hour: "16", mentions: 650 },
  { hour: "18", mentions: 480 },
  { hour: "20", mentions: 320 },
  { hour: "22", mentions: 180 },
];

const topKeywords = [
  { keyword: "YourBrand", mentions: 8234, change: 12.5 },
  { keyword: "product launch", mentions: 3421, change: 45.2 },
  { keyword: "customer support", mentions: 2156, change: -8.3 },
  { keyword: "enterprise", mentions: 1892, change: 23.1 },
  { keyword: "innovation", mentions: 1456, change: 15.8 },
];

const Analytics = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
            <p className="text-muted-foreground">
              Detailed insights and performance metrics
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2">
              <Calendar className="w-4 h-4" />
              Last 30 Days
            </Button>
            <Button variant="outline" className="gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Mentions"
            value="35,654"
            change={12.5}
            icon={<MessageSquare className="w-5 h-5 text-primary" />}
          />
          <MetricCard
            title="Total Reach"
            value="2.4M"
            change={8.3}
            icon={<Users className="w-5 h-5 text-primary" />}
          />
          <MetricCard
            title="Avg. Engagement"
            value="4.2%"
            change={-3.2}
            icon={<TrendingUp className="w-5 h-5 text-primary" />}
          />
          <MetricCard
            title="Share of Voice"
            value="32%"
            change={5.1}
            icon={<BarChart3 className="w-5 h-5 text-primary" />}
          />
        </div>

        {/* Main Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TrendChart />
          </div>
          <SentimentChart />
        </div>

        {/* Weekly Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="mb-6">
              <h3 className="font-semibold text-foreground">Weekly Performance</h3>
              <p className="text-sm text-muted-foreground">Mentions and engagement by day</p>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Bar dataKey="mentions" fill="hsl(217, 91%, 60%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="engagement" fill="hsl(262, 83%, 58%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <div className="mb-6">
              <h3 className="font-semibold text-foreground">Peak Hours</h3>
              <p className="text-sm text-muted-foreground">When your brand gets mentioned most</p>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="hour"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="mentions"
                    stroke="hsl(217, 91%, 60%)"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SourcesBreakdown />
          
          <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6">
            <div className="mb-6">
              <h3 className="font-semibold text-foreground">Top Keywords</h3>
              <p className="text-sm text-muted-foreground">Most mentioned terms this period</p>
            </div>
            
            <div className="space-y-4">
              {topKeywords.map((item, index) => (
                <div
                  key={item.keyword}
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold text-muted-foreground w-6">
                      #{index + 1}
                    </span>
                    <span className="font-medium text-foreground">{item.keyword}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-sm text-muted-foreground">
                      {item.mentions.toLocaleString()} mentions
                    </span>
                    <div
                      className={`flex items-center gap-1 text-sm font-medium ${
                        item.change >= 0 ? "text-success" : "text-destructive"
                      }`}
                    >
                      {item.change >= 0 ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                      {Math.abs(item.change)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
