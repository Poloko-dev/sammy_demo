import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  Newspaper,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Source {
  name: string;
  icon: any;
  mentions: number;
  percentage: number;
  color: string;
  bgColor: string;
}

const sources: Source[] = [
  {
    name: "Twitter/X",
    icon: Twitter,
    mentions: 12453,
    percentage: 35,
    color: "text-[#1DA1F2]",
    bgColor: "bg-[#1DA1F2]",
  },
  {
    name: "Facebook",
    icon: Facebook,
    mentions: 8234,
    percentage: 23,
    color: "text-[#1877F2]",
    bgColor: "bg-[#1877F2]",
  },
  {
    name: "Instagram",
    icon: Instagram,
    mentions: 5621,
    percentage: 16,
    color: "text-[#E4405F]",
    bgColor: "bg-[#E4405F]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    mentions: 3892,
    percentage: 11,
    color: "text-[#0A66C2]",
    bgColor: "bg-[#0A66C2]",
  },
  {
    name: "News",
    icon: Newspaper,
    mentions: 2341,
    percentage: 7,
    color: "text-primary",
    bgColor: "bg-primary",
  },
  {
    name: "Forums",
    icon: MessageSquare,
    mentions: 1567,
    percentage: 4,
    color: "text-accent",
    bgColor: "bg-accent",
  },
  {
    name: "Blogs",
    icon: Globe,
    mentions: 1123,
    percentage: 3,
    color: "text-muted-foreground",
    bgColor: "bg-muted-foreground",
  },
  {
    name: "YouTube",
    icon: Youtube,
    mentions: 423,
    percentage: 1,
    color: "text-[#FF0000]",
    bgColor: "bg-[#FF0000]",
  },
];

export const SourcesBreakdown = () => {
  return (
    <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-purple-900/30 p-6 shadow-xl">
      <div className="mb-4">
        <h3 className="font-semibold text-white text-lg">Sources Breakdown</h3>
        <p className="text-sm text-gray-400">Mentions by platform</p>
      </div>

      <div className="space-y-3">
        {sources.map((source, index) => (
          <div
            key={source.name}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.03}s` }}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <source.icon className={cn("w-4 h-4", source.color)} />
                <span className="text-sm font-medium text-white">
                  {source.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">
                  {source.mentions.toLocaleString()}
                </span>
                <span className="text-xs text-gray-400 w-10 text-right">
                  {source.percentage}%
                </span>
              </div>
            </div>
            <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  source.bgColor
                )}
                style={{ width: `${source.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-purple-900/30">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Total mentions</span>
          <span className="font-semibold text-white">35,654</span>
        </div>
      </div>
    </div>
  );
};
