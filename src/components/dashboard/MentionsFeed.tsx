import { cn } from "@/lib/utils";
import {
  MessageCircle,
  Heart,
  Share2,
  ExternalLink,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
  web: "bg-primary/10 text-primary",
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
}

const mockMentions: Mention[] = [
  {
    id: "1",
    platform: "facebook",
    author: "Informative Newspaper",
    authorHandle: "informative-news",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    content:
      "Business banking with Lesotho PostBank now have powe to NEGOTIATE interest rate on their INVESTMENT.",
    sentiment: "positive",
    engagement: { likes: 234, comments: 45, shares: 67 },
    timestamp: "Decemeber 4",
    source: "facebook.com",
  },
  {
    id: "2",
    platform: "linkedin",
    author: "The Reporter",
    authorHandle: "the-reporters",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    content:
      "BUSINESS\nThe United Nations Development Programme (UNDP) and Lesotho Post Bank (LPB) have joined forces to empower women and youth-led Micro, Small and Medium Enterprises (MSMEs).",
    sentiment: "positive",
    engagement: { likes: 156, comments: 23, shares: 34 },
    timestamp: "15 min ago",
    source: "linkedin.com",
  },
  {
    id: "4",
    platform: "twitter",
    author: "Thabo Mosoeu",
    authorHandle: "@thabo_mosoeu",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    content:
      "My mobile money app is having issues again. I can't seem to send or receive money. @LesothoPostBank, can you help me sort this out?",
    sentiment: "negative",
    engagement: { likes: 12, comments: 8, shares: 2 },
    timestamp: "2 hours ago",
    source: "twitter.com",
  },
  {
    id: "5",
    platform: "facebook",
    author: "Tech Today",
    authorHandle: "techtoday",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tech",
    content:
      "Litaba tse monate ke tseo ho tsoa ho Lesotho PostBank! Ba fanne ka litšebeletso tse ncha tsa banka inthaneteng ho thusa bareki ho laola lichelete tsa bona habonolo le ka polokeho.",
    sentiment: "neutral",
    engagement: { likes: 89, comments: 15, shares: 23 },
    timestamp: "3 hours ago",
    source: "facebook.com",
  },
];

export const MentionsFeed = () => {
  return (
    <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-purple-900/30 overflow-hidden shadow-xl">
      <div className="px-6 py-4 border-b border-purple-900/30 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-white text-lg">Recent Mentions</h3>
          <p className="text-sm text-gray-400">Live feed across all sources</p>
        </div>
        <Badge
          variant="secondary"
          className="animate-pulse-soft bg-green-500/20 text-green-400 border-green-500/30"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
          Live
        </Badge>
      </div>

      <div className="divide-y divide-purple-900/20">
        {mockMentions.map((mention, index) => {
          const PlatformIcon = platformIcons[mention.platform] || MessageCircle;

          return (
            <div
              key={mention.id}
              className="p-4 hover:bg-gray-800/30 transition-colors animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex gap-4">
                <img
                  src={mention.avatar}
                  alt={mention.author}
                  className="w-10 h-10 rounded-full bg-gray-800"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-white">
                      {mention.author}
                    </span>
                    <span className="text-sm text-gray-400">
                      {mention.authorHandle}
                    </span>
                    <span className="text-sm text-gray-400">·</span>
                    <span className="text-sm text-gray-400">
                      {mention.timestamp}
                    </span>
                  </div>

                  <p className="mt-1 text-gray-200 leading-relaxed">
                    {mention.content}
                  </p>

                  <div className="mt-3 flex items-center gap-4 flex-wrap">
                    <div
                      className={cn(
                        "flex items-center gap-1.5 px-2 py-1 rounded-md",
                        platformColors[mention.platform]
                      )}
                    >
                      <PlatformIcon className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium capitalize">
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

                    <div className="flex items-center gap-4 text-gray-400 text-sm ml-auto">
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {mention.engagement.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {mention.engagement.comments}
                      </span>
                      <span className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" />
                        {mention.engagement.shares}
                      </span>
                      <a
                        href="#"
                        className="flex items-center gap-1 hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-6 py-4 border-t border-border">
        <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
          View all mentions →
        </button>
      </div>
    </div>
  );
};
