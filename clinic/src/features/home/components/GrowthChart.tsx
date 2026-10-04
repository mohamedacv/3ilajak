"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface DashboardGrowth {
  month: string;
  patients: number;
  appointments: number;
}

export default function GrowthChart({ data }: { data: DashboardGrowth[] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Patients & Appointments
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Monthly clinic performance
          </p>

          <div className="flex gap-5 mt-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-sky-500" />
              <span className="text-sm text-slate-600">Patients</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-sm text-slate-600">Appointments</span>
            </div>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={340}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />

          <XAxis dataKey="month" tickLine={false} axisLine={false} />

          <YAxis tickLine={false} axisLine={false} />

          <Tooltip cursor={{ fill: "rgba(0,0,0,0.03)" }} />

          <Bar
            dataKey="patients"
            fill="#0EA5E9"
            radius={[20, 20, 0, 0]}
            barSize={16}
          />

          <Bar
            dataKey="appointments"
            fill="#10B981"
            radius={[20, 20, 0, 0]}
            barSize={16}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
