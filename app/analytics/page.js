import VolumeOverTimeChart from "@/components/Charts/VolumeOverTimeChart";
import VolumeByAssetChart from "@/components/Charts/VolumeByAssetChart";
import {
    getVolumeOverTime,
    getVolumeByAsset,
    getTotalVolume,
    getTotalAlerts,
} from "@/data/dummyAlerts";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function AnalyticsPage() {
    const volumeOverTime = getVolumeOverTime();
    const volumeByAsset = getVolumeByAsset();
    const totalVolume = getTotalVolume();
    const totalAlerts = getTotalAlerts();
    const avgPrice = totalVolume / totalAlerts; // Rough approximation

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
                    Analytics
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                    Visual insights into Qubic blockchain activity.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <VolumeOverTimeChart data={volumeOverTime} />
                <VolumeByAssetChart data={volumeByAsset} />
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm">
                <div className="border-b border-slate-800 px-6 py-4">
                    <h3 className="text-base font-semibold leading-6 text-white">Summary Statistics</h3>
                </div>
                <div className="px-6 py-4">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-slate-400">Total Volume Traded</dt>
                            <dd className="mt-1 text-2xl font-semibold text-white">{formatCurrency(totalVolume)}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-slate-400">Total Alerts Processed</dt>
                            <dd className="mt-1 text-2xl font-semibold text-white">{formatNumber(totalAlerts)}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-slate-400">Average Transaction Value</dt>
                            <dd className="mt-1 text-2xl font-semibold text-white">{formatCurrency(avgPrice)}</dd>
                        </div>
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-slate-400">Data Source</dt>
                            <dd className="mt-1 text-sm text-slate-300">
                                Simulated (EasyConnect → n8n → Google Sheets)
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div className="rounded-lg border border-blue-900/30 bg-blue-900/10 p-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <h3 className="text-sm font-medium text-blue-400">Real-time Updates</h3>
                        <div className="mt-2 text-sm text-blue-300">
                            <p>
                                In a live environment, these charts would update automatically as EasyConnect sends new events into the data pipeline.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
