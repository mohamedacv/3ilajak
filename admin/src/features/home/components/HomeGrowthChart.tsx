"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Cell,
  YAxis,
} from "recharts";

interface DashbordGrowth {
  month: string;
  appointment: number;
}

const colors = [
  "#E5EDF7",
  "#D8E5F2",
  "#D2DFEC",
  "#C1D6EA",
  "#AAC6E0",
  "#9EBEDC",
  "#82A8CC",
  "#79A2C8",
  "#6C99C3",
  "#155A99",
  "#447FB5",
  "#5E91C0",
  "#709BC5",
  "#4E84B8",
];

function HomeGrowthChart({ data }: { data: DashbordGrowth[] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">
            Appointment Growth
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Daily appointments across all clinics for the last 30 days
          </p>
        </div>

        <button className="rounded-xl border border-slate-300 bg-slate-100 px-5 py-2 text-sm font-medium text-slate-700">
          Last 30 Days
        </button>
      </div>

      <ResponsiveContainer width="100%" height={330}>
        <BarChart
          data={data}
          margin={{
            top: 10,
            right: 5,
            left: 5,
            bottom: 10,
          }}
          barCategoryGap="12%"
        >
          <CartesianGrid vertical={false} horizontal={false} stroke="#E5E7EB" />

          <XAxis
            dataKey="month"
            axisLine={{ stroke: "#E5E7EB" }}
            tickLine={false}
            tick={{ fill: "#374151", fontSize: 14 }}
            dy={12}
          />
          <YAxis hide domain={[0, 400]} />
          <Bar dataKey="appointment" radius={[6, 6, 0, 0]} barSize={56}>
            {data.map((_, index) => (
              <Cell key={index} fill={colors[index] || "#4F83B7"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HomeGrowthChart;
