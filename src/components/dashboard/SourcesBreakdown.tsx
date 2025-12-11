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
    name: "Facebook",
    icon: Facebook,
    mentions: 687,
    percentage: 37,
    color: "text-[#1877F2]",
    bgColor: "bg-[#1877F2]",
  },
  {
    name: "Twitter/X",
    icon: Twitter,
    mentions: 534,
    percentage: 29,
    color: "text-[#1DA1F2]",
    bgColor: "bg-[#1DA1F2]",
  },
  {
    name: "News",
    icon: Newspaper,
    mentions: 258,
    percentage: 14,
    color: "text-primary",
    bgColor: "bg-primary",
  },
  {
    name: "Instagram",
    icon: Instagram,
    mentions: 185,
    percentage: 10,
    color: "text-[#E4405F]",
    bgColor: "bg-[#E4405F]",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    mentions: 92,
    percentage: 5,
    color: "text-[#0A66C2]",
    bgColor: "bg-[#0A66C2]",
  },
  {
    name: "Forums",
    icon: MessageSquare,
    mentions: 55,
    percentage: 3,
    color: "text-accent",
    bgColor: "bg-accent",
  },
  {
    name: "Blogs",
    icon: Globe,
    mentions: 28,
    percentage: 2,
    color: "text-muted-foreground",
    bgColor: "bg-muted-foreground",
  },
  {
    name: "YouTube",
    icon: Youtube,
    mentions: 8,
    percentage: 0,
    color: "text-[#FF0000]",
    bgColor: "bg-[#FF0000]",
  },
];

export const SourcesBreakdown = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
          Sources Breakdown
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">Mentions by platform</p>
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
                <source.icon
                  className={cn("w-3 h-3 sm:w-4 sm:h-4", source.color)}
                />
                <span className="text-xs sm:text-sm font-medium text-white">
                  {source.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm text-gray-400">
                  {source.mentions.toLocaleString()}
                </span>
                <span className="text-xs text-gray-400 w-8 sm:w-10 text-right">
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

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Total mentions</span>
          <span className="font-semibold text-white">35,654</span>
        </div>
      </div>
    </div>
  );
};
