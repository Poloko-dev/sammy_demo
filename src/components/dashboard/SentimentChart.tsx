import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const data = [
  { name: "Positive", value: 58, color: "hsl(142, 76%, 36%)" },
  { name: "Neutral", value: 31, color: "hsl(220, 9%, 46%)" },
  { name: "Negative", value: 11, color: "hsl(0, 84%, 60%)" },
];

export const SentimentChart = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-sm">
      <div className="mb-4">
        <h3 className="font-semibold text-gray-900 text-base sm:text-lg">
          Sentiment Analysis
        </h3>
        <p className="text-xs sm:text-sm text-gray-600">
          Distribution this month
        </p>
      </div>

      <div className="h-56 sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid hsl(220 13% 91%)",
                borderRadius: "0.5rem",
                color: "rgb(17, 24, 39)",
              }}
              formatter={(value: number) => [`${value}%`, "Percentage"]}
            />
            <Legend
              verticalAlign="bottom"
              height={36}
              formatter={(value) => (
                <span className="text-sm text-foreground">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border">
        {data.map((item) => (
          <div key={item.name} className="text-center">
            <div
              className="w-3 h-3 rounded-full mx-auto mb-1"
              style={{ backgroundColor: item.color }}
            />
            <p className="text-lg font-semibold text-foreground">
              {item.value}%
            </p>
            <p className="text-xs text-muted-foreground">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
