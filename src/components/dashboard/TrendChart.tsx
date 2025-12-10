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
    <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-purple-900/30 p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-white text-lg">Mentions Trend</h3>
          <p className="text-sm text-gray-400">Last 7 months performance</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-sm text-gray-400">Mentions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <span className="text-sm text-gray-400">Reach</span>
          </div>
        </div>
      </div>

      <div className="h-72">
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
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(139, 92, 246, 0.1)"
            />
            <XAxis
              dataKey="name"
              stroke="rgb(156, 163, 175)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="rgb(156, 163, 175)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgb(17, 24, 39)",
                border: "1px solid rgba(139, 92, 246, 0.3)",
                borderRadius: "0.75rem",
                color: "white",
              }}
              labelStyle={{ color: "white" }}
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
