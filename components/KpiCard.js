import { cn } from "@/lib/utils";

export default function KpiCard({ title, value, icon: Icon, trend, trendUp, description }) {
    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm overflow-hidden">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-slate-400 truncate">{title}</h3>
                {Icon && <Icon className="h-4 w-4 text-slate-500 flex-shrink-0 ml-2" />}
            </div>
            <div className="mt-2 flex items-baseline gap-2 min-w-0 overflow-hidden">
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-white truncate flex-1 min-w-0">{value}</p>
                {trend && (
                    <span
                        className={cn(
                            "text-xs font-medium flex-shrink-0 whitespace-nowrap",
                            trendUp ? "text-green-400" : "text-red-400"
                        )}
                    >
                        {trend}
                    </span>
                )}
            </div>
            {description && (
                <p className="mt-1 text-xs text-slate-500 truncate">{description}</p>
            )}
        </div>
    );
}
