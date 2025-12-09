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
        "relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:shadow-lg animate-fade-in",
        variant === "default" && "bg-card border border-border",
        variant === "primary" && "gradient-primary text-primary-foreground",
        variant === "accent" && "gradient-accent text-accent-foreground",
        variant === "success" && "gradient-success text-success-foreground"
      )}
    >
      {/* Background decoration */}
      <div
        className={cn(
          "absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-10",
          variant === "default" ? "bg-primary" : "bg-white"
        )}
      />

      <div className="flex items-start justify-between relative z-10">
        <div>
          <p
            className={cn(
              "text-sm font-medium mb-1",
              variant === "default" ? "text-muted-foreground" : "opacity-90"
            )}
          >
            {title}
          </p>
          <p className="text-3xl font-bold tracking-tight">{value}</p>

          {change !== undefined && (
            <div className="flex items-center gap-1.5 mt-2">
              {isPositive && <TrendingUp className="w-4 h-4" />}
              {isNegative && <TrendingDown className="w-4 h-4" />}
              <span
                className={cn(
                  "text-sm font-medium",
                  variant === "default" && isPositive && "text-success",
                  variant === "default" && isNegative && "text-destructive"
                )}
              >
                {isPositive && "+"}
                {change}%
              </span>
              <span
                className={cn(
                  "text-xs",
                  variant === "default" ? "text-muted-foreground" : "opacity-70"
                )}
              >
                {changeLabel}
              </span>
            </div>
          )}
        </div>

        <div
          className={cn(
            "p-3 rounded-xl",
            variant === "default" ? "bg-secondary" : "bg-white/20"
          )}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};
