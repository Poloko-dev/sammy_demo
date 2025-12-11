import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", mentions: 4200, reach: 24000 },
  { name: "Feb", mentions: 3800, reach: 21000 },
  { name: "Mar", mentions: 5100, reach: 29000 },
  { name: "Apr", mentions: 4700, reach: 26000 },
  { name: "May", mentions: 6200, reach: 35000 },
  { name: "Jun", mentions: 5800, reach: 32000 },
  { name: "Jul", mentions: 7400, reach: 42000 },
];

export const TrendChart = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3">
        <div>
          <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
            Mentions Trend
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            Last 7 months performance
          </p>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary" />
            <span className="text-xs sm:text-sm text-gray-600">Mentions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-400" />
            <span className="text-xs sm:text-sm text-gray-600">Reach</span>
          </div>
        </div>
      </div>

      <div className="h-64 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorMentions" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(217, 91%, 60%)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(217, 91%, 60%)"
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(262, 83%, 58%)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(262, 83%, 58%)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 13% 91%)" />
            <XAxis
              dataKey="name"
              stroke="rgb(107, 114, 128)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="rgb(107, 114, 128)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid hsl(220 13% 91%)",
                borderRadius: "0.5rem",
                color: "rgb(17, 24, 39)",
              }}
              labelStyle={{ color: "rgb(17, 24, 39)" }}
            />
            <Area
              type="monotone"
              dataKey="mentions"
              stroke="hsl(217, 91%, 60%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorMentions)"
            />
            <Area
              type="monotone"
              dataKey="reach"
              stroke="hsl(262, 83%, 58%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorReach)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
