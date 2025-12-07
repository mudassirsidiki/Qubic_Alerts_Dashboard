import KpiCard from "@/components/KpiCard";
import RecentAlertsTable from "@/components/RecentAlertsTable";
import WhaleAlerts from "@/components/WhaleAlerts";
import {
    getTotalVolume,
    getTotalAlerts,
    getUniqueAssets,
    getBiggestTrade,
    getRecentAlerts,
    getWhaleAlertsCount,
    getRecentWhaleAlerts,
} from "@/data/dummyAlerts";
import { formatCurrency, formatNumber } from "@/lib/utils";
import { Activity, DollarSign, Layers, TrendingUp, AlertTriangle } from "lucide-react";

export default function Home() {
    const totalVolume = getTotalVolume();
    const totalAlerts = getTotalAlerts();
    const uniqueAssets = getUniqueAssets();
    const biggestTrade = getBiggestTrade();
    const recentAlerts = getRecentAlerts();
    const whaleAlertsCount = getWhaleAlertsCount();
    const recentWhaleAlerts = getRecentWhaleAlerts(5);

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                <KpiCard
                    title="Total Volume"
                    value={formatCurrency(totalVolume)}
                    icon={DollarSign}
                    trend="+12.5%"
                    trendUp={true}
                    description="Last 24 hours"
                />
                <KpiCard
                    title="Total Alerts"
                    value={formatNumber(totalAlerts)}
                    icon={Activity}
                    trend="+5"
                    trendUp={true}
                    description="New alerts today"
                />
                <KpiCard
                    title="Whale Alerts"
                    value={formatNumber(whaleAlertsCount)}
                    icon={AlertTriangle}
                    trend="🐋"
                    trendUp={true}
                    description="≥ $1,000 USD"
                />
                <KpiCard
                    title="Unique Assets"
                    value={uniqueAssets}
                    icon={Layers}
                    description="Tracked assets"
                />
                <KpiCard
                    title="Biggest Trade"
                    value={formatNumber(biggestTrade.amount)}
                    icon={TrendingUp}
                    description={`${biggestTrade.assetName} @ ${formatCurrency(biggestTrade.price)}`}
                />
            </div>

            {/* Whale Alerts Section */}
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm">
                <WhaleAlerts alerts={recentWhaleAlerts} />
            </div>

            <div className="grid grid-cols-1 gap-6">
                <RecentAlertsTable alerts={recentAlerts} />
            </div>

            <div className="rounded-lg border border-blue-900/30 bg-blue-900/10 p-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-400">Architecture Note</h3>
                        <div className="mt-2 text-sm text-blue-300">
                            <p>
                                In production, this data would be coming from Google Sheets via n8n, which receives events from EasyConnect when Qubic transactions happen.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
