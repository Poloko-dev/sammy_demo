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
    platform: "twitter",
    author: "Sarah Johnson",
    authorHandle: "@sarahj_tech",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    content: "Just tried @YourBrand's new feature and I'm blown away! The attention to detail is incredible. This is exactly what we needed for our workflow. 🚀",
    sentiment: "positive",
    engagement: { likes: 234, comments: 45, shares: 67 },
    timestamp: "2 min ago",
    source: "twitter.com",
  },
  {
    id: "2",
    platform: "linkedin",
    author: "Michael Chen",
    authorHandle: "michael-chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    content: "Great insights from the latest YourBrand case study. The ROI metrics they shared are impressive. Worth reading for anyone in enterprise software.",
    sentiment: "positive",
    engagement: { likes: 156, comments: 23, shares: 34 },
    timestamp: "15 min ago",
    source: "linkedin.com",
  },
  {
    id: "3",
    platform: "instagram",
    author: "Design Weekly",
    authorHandle: "@designweekly",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=design",
    content: "Featured: How @YourBrand redesigned their dashboard for better UX. Swipe to see the before and after! 📱✨",
    sentiment: "positive",
    engagement: { likes: 1893, comments: 124, shares: 89 },
    timestamp: "1 hour ago",
    source: "instagram.com",
  },
  {
    id: "4",
    platform: "twitter",
    author: "Alex Rivera",
    authorHandle: "@alexr_dev",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    content: "Having some issues with YourBrand's API today. Anyone else experiencing slowdowns? @YourBrandSupport",
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
    content: "YourBrand announces new partnership with major enterprise clients. Read more about their expansion plans in our latest article.",
    sentiment: "neutral",
    engagement: { likes: 89, comments: 15, shares: 23 },
    timestamp: "3 hours ago",
    source: "facebook.com",
  },
];

export const MentionsFeed = () => {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="px-6 py-4 border-b border-border flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-foreground">Recent Mentions</h3>
          <p className="text-sm text-muted-foreground">Live feed across all sources</p>
        </div>
        <Badge variant="secondary" className="animate-pulse-soft">
          <span className="w-2 h-2 bg-success rounded-full mr-2" />
          Live
        </Badge>
      </div>

      <div className="divide-y divide-border">
        {mockMentions.map((mention, index) => {
          const PlatformIcon = platformIcons[mention.platform] || MessageCircle;
          
          return (
            <div
              key={mention.id}
              className="p-4 hover:bg-secondary/50 transition-colors animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex gap-4">
                <img
                  src={mention.avatar}
                  alt={mention.author}
                  className="w-10 h-10 rounded-full bg-secondary"
                />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-foreground">{mention.author}</span>
                    <span className="text-sm text-muted-foreground">{mention.authorHandle}</span>
                    <span className="text-sm text-muted-foreground">·</span>
                    <span className="text-sm text-muted-foreground">{mention.timestamp}</span>
                  </div>
                  
                  <p className="mt-1 text-foreground leading-relaxed">{mention.content}</p>
                  
                  <div className="mt-3 flex items-center gap-4 flex-wrap">
                    <div className={cn("flex items-center gap-1.5 px-2 py-1 rounded-md", platformColors[mention.platform])}>
                      <PlatformIcon className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium capitalize">{mention.platform}</span>
                    </div>
                    
                    <Badge variant="outline" className={cn("text-xs", sentimentColors[mention.sentiment])}>
                      {mention.sentiment}
                    </Badge>
                    
                    <div className="flex items-center gap-4 text-muted-foreground text-sm ml-auto">
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
