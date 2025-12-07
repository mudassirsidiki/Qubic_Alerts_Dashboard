"use client";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";
import { formatCurrency } from "@/lib/utils";

const COLORS = ["#06b6d4", "#3b82f6", "#6366f1", "#8b5cf6", "#d946ef"];

export default function VolumeByAssetChart({ data = [] }) {
    return (
        <div className="h-[300px] w-full rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-sm">
            <h3 className="mb-4 text-base font-semibold text-white">Volume by Asset</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis
                        dataKey="name"
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
                        cursor={{ fill: "#1e293b", opacity: 0.4 }}
                        contentStyle={{
                            backgroundColor: "#0f172a",
                            border: "1px solid #1e293b",
                            borderRadius: "8px",
                        }}
                        itemStyle={{ color: "#cbd5e1" }}
                        formatter={(value) => [formatCurrency(value), "Volume"]}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
