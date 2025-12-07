"use client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { formatCurrency } from "@/lib/utils";

export default function VolumeOverTimeChart({ data = [] }) {
    return (
        <div className="h-[300px] w-full rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-sm">
            <h3 className="mb-4 text-base font-semibold text-white">Total Volume (Last 7 Days)</h3>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis
                        dataKey="date"
                        stroke="#64748b"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#64748b"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#0f172a",
                            border: "1px solid #1e293b",
                            borderRadius: "8px",
                        }}
                        itemStyle={{ color: "#cbd5e1" }}
                        formatter={(value) => [formatCurrency(value), "Volume"]}
                    />
                    <Area
                        type="monotone"
                        dataKey="volume"
                        stroke="#06b6d4"
                        fillOpacity={1}
                        fill="url(#colorVolume)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
