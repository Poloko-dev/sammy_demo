import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon: ReactNode;
  variant?: "default" | "primary" | "accent" | "success";
}

export const MetricCard = ({
  title,
  value,
  change,
  changeLabel = "vs last month",
  icon,
  variant = "default",
}: MetricCardProps) => {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-2xl sm:hover:scale-105 animate-fade-in border",
        variant === "default" &&
          "bg-gray-900/60 backdrop-blur-sm border-purple-900/30 shadow-lg",
        variant === "primary" &&
          "gradient-primary text-white border-transparent shadow-lg shadow-blue-500/20",
        variant === "accent" &&
          "gradient-accent text-white border-transparent shadow-lg shadow-purple-500/20",
        variant === "success" &&
          "gradient-success text-white border-transparent shadow-lg shadow-green-500/20"
      )}
    >
      {/* Background decoration */}
      <div
        className={cn(
          "absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-10 blur-2xl",
          variant === "default" ? "bg-purple-500" : "bg-white"
        )}
      />

      <div className="flex items-start justify-between relative z-10">
        <div className="flex-1 min-w-0">
          <p
            className={cn(
              "text-xs sm:text-sm font-medium mb-1",
              variant === "default" ? "text-gray-400" : "opacity-90"
            )}
          >
            {title}
          </p>
          <p className="text-2xl sm:text-3xl font-bold tracking-tight">
            {value}
          </p>

          {change !== undefined && (
            <div className="flex items-center gap-1.5 mt-2">
              {isPositive && <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />}
              {isNegative && <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />}
              <span
                className={cn(
                  "text-xs sm:text-sm font-medium",
                  variant === "default" && isPositive && "text-green-400",
                  variant === "default" && isNegative && "text-red-400"
                )}
              >
                {isPositive && "+"}
                {change}%
              </span>
              <span
                className={cn(
                  "text-xs hidden sm:inline",
                  variant === "default" ? "text-gray-500" : "opacity-70"
                )}
              >
                {changeLabel}
              </span>
            </div>
          )}
        </div>

        <div
          className={cn(
            "p-2 sm:p-3 rounded-xl flex-shrink-0",
            variant === "default" ? "bg-gray-800/50" : "bg-white/20"
          )}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};
