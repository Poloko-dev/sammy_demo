import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  Download,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
  Heart,
  Share2,
  ExternalLink,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";

const platformIcons: Record<string, any> = {
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

const platformColors: Record<string, string> = {
  twitter: "bg-[#1DA1F2]/10 text-[#1DA1F2]",
  facebook: "bg-[#1877F2]/10 text-[#1877F2]",
  instagram: "bg-[#E4405F]/10 text-[#E4405F]",
  linkedin: "bg-[#0A66C2]/10 text-[#0A66C2]",
  youtube: "bg-[#FF0000]/10 text-[#FF0000]",
};

const sentimentColors: Record<string, string> = {
  positive: "bg-success/10 text-success border-success/20",
  negative: "bg-destructive/10 text-destructive border-destructive/20",
  neutral: "bg-muted text-muted-foreground border-border",
};

interface Mention {
  id: string;
  platform: string;
  author: string;
  authorHandle: string;
  avatar: string;
  content: string;
  sentiment: "positive" | "negative" | "neutral";
  engagement: {
    likes: number;
    comments: number;
    shares: number;
  };
  timestamp: string;
  source: string;
  alert: string;
  reach: number;
}

const mockMentions: Mention[] = [
  {
    id: "1",
    platform: "facebook",
    author: "Informative Newspaper",
    authorHandle: "@informative_news",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    content:
      "Business banking with Lesotho PostBank now have powe to NEGOTIATE interest rate on their INVESTMENT.",
    sentiment: "positive",
    engagement: { likes: 234, comments: 45, shares: 67 },
    timestamp: "2024-12-09 10:23 AM",
    source: "twitter.com",
    alert: "Brand Mentions",
    reach: 15400,
  },
  {
    id: "2",
    platform: "linkedin",
    author: "The Reporter",
    authorHandle: "@the_reporters",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    content:
      "BUSINESS\nThe United Nations Development Programme (UNDP) and Lesotho Post Bank (LPB) have joined forces to empower women and youth-led Micro, Small and Medium Enterprises (MSMEs).",
    sentiment: "positive",
    engagement: { likes: 156, comments: 23, shares: 34 },
    timestamp: "2024-12-09 09:45 AM",
    source: "linkedin.com",
    alert: "Brand Mentions",
    reach: 8200,
  },
  {
    id: "3",
    platform: "twitter",
    author: "Thabo Mosoeu",
    authorHandle: "@thabo_mosoeu",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=design",
    content:
      "My mobile money app is having issues again. I can't seem to send or receive money. @LesothoPostBank, can you help me sort this out?",
    sentiment: "negative",
    engagement: { likes: 1893, comments: 124, shares: 89 },
    timestamp: "2024-12-09 08:15 AM",
    source: "instagram.com",
    alert: "Brand Mentions",
    reach: 45000,
  },
  {
    id: "4",
    platform: "facebook",
    author: "Tech Today",
    authorHandle: "@tech_today",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    content:
      "Litaba tse monate ke tseo ho tsoa ho Lesotho PostBank! Ba fanne ka litšebeletso tse ncha tsa banka inthaneteng ho thusa bareki ho laola lichelete tsa bona habonolo le ka polokeho.",
    sentiment: "positive",
    engagement: { likes: 12, comments: 8, shares: 2 },
    timestamp: "2024-12-09 07:30 AM",
    source: "twitter.com",
    alert: "Product Feedback",
    reach: 2100,
  },
];

const filters = [
  "All",
  "Twitter",
  "Facebook",
  "Instagram",
  "LinkedIn",
  "YouTube",
];
const sentiments = ["All Sentiments", "Positive", "Neutral", "Negative"];

const Mentions = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSentiment, setActiveSentiment] = useState("All Sentiments");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Mentions</h1>
            <p className="text-muted-foreground">
              View and manage all your brand mentions
            </p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-xl border border-border p-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search mentions..."
                className="pl-10 bg-secondary border-0"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={cn(
                      "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                      activeFilter === filter
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
                {sentiments.map((sentiment) => (
                  <button
                    key={sentiment}
                    onClick={() => setActiveSentiment(sentiment)}
                    className={cn(
                      "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                      activeSentiment === sentiment
                        ? "bg-card text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {sentiment}
                  </button>
                ))}
              </div>

              <Button variant="outline" size="sm" className="gap-2">
                <Calendar className="w-4 h-4" />
                Date Range
              </Button>
            </div>
          </div>
        </div>

        {/* Mentions List */}
        <div className="space-y-4">
          {mockMentions.map((mention, index) => {
            const PlatformIcon =
              platformIcons[mention.platform] || MessageCircle;

            return (
              <div
                key={mention.id}
                className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex gap-4">
                  <img
                    src={mention.avatar}
                    alt={mention.author}
                    className="w-12 h-12 rounded-full bg-secondary"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-foreground">
                            {mention.author}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {mention.authorHandle}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            ·
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {mention.timestamp}
                          </span>
                        </div>
                        <p className="mt-2 text-foreground leading-relaxed">
                          {mention.content}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Badge variant="outline" className="text-xs">
                          {mention.alert}
                        </Badge>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "flex items-center gap-1.5 px-2.5 py-1 rounded-lg",
                            platformColors[mention.platform]
                          )}
                        >
                          <PlatformIcon className="w-4 h-4" />
                          <span className="text-sm font-medium capitalize">
                            {mention.platform}
                          </span>
                        </div>

                        <Badge
                          variant="outline"
                          className={cn(
                            "text-xs",
                            sentimentColors[mention.sentiment]
                          )}
                        >
                          {mention.sentiment}
                        </Badge>

                        <span className="text-sm text-muted-foreground">
                          Reach:{" "}
                          <span className="font-medium text-foreground">
                            {mention.reach.toLocaleString()}
                          </span>
                        </span>
                      </div>

                      <div className="flex items-center gap-4 text-muted-foreground text-sm">
                        <span className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer">
                          <Heart className="w-4 h-4" />
                          {mention.engagement.likes.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer">
                          <MessageCircle className="w-4 h-4" />
                          {mention.engagement.comments}
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer">
                          <Share2 className="w-4 h-4" />
                          {mention.engagement.shares}
                        </span>
                        <a
                          href="#"
                          className="flex items-center gap-1.5 hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium text-foreground">1-6</span> of{" "}
            <span className="font-medium text-foreground">2,847</span> mentions
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Mentions;
