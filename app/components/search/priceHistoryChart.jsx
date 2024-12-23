import React from "react";
import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  XAxis,
} from "recharts";

export default function PriceHistoryChart({
  price1,
  price2,
  price3,
  price4,
  price5,
  price6,
  price7,
  price8,
  price9,
}) {
  const priceHistory = [
    { price: price1 || 0 },
    { price: price2 || 0 },
    { price: price3 || 0 },
    { price: price4 || 0 },
    { price: price5 || 0 },
    { price: price6 || 0 },
    { price: price7 || 0 },
    { price: price8 || 0 },
    { price: price9 || 0 },
  ];
  return (
    <div className="pt-10 pr-8 pb-5 border rounded-2xl my-4">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={priceHistory}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="date" />
          <YAxis domain={[250, 1000]} ticks={[250, 500, 750, 1000]} />
          <Tooltip />
          <Line
            type="bump"
            dataKey="price"
            stroke="#7b2feb"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
