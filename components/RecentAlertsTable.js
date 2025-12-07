import { formatCurrency, formatNumber, shortenAddress, formatRelativeTime, cn } from "@/lib/utils";
import { isWhaleAlert } from "@/data/dummyAlerts";

export default function RecentAlertsTable({ alerts = [] }) {
    return (
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm">
            <div className="border-b border-slate-800 px-6 py-4">
                <h3 className="text-base font-semibold leading-6 text-white">Recent Alerts</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-800">
                    <thead className="bg-slate-950/50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                                Asset
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                                TxID / Issuer
                            </th>
                            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-slate-400 uppercase tracking-wider">
                                Time
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 bg-slate-900">
                        {alerts.map((alert, idx) => {
                            const isWhale = isWhaleAlert(alert);
                            const usdValue = alert.amount * alert.price;
                            const isMegaWhale = usdValue >= 10000;
                            
                            return (
                                <tr 
                                    key={idx} 
                                    className={cn(
                                        "hover:bg-slate-800/50 transition-colors",
                                        isWhale && "bg-yellow-500/5 border-l-2 border-yellow-500/50"
                                    )}
                                >
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className={cn(
                                                "h-2 w-2 rounded-full",
                                                isWhale ? "bg-yellow-500" : "bg-cyan-500"
                                            )}></div>
                                            <span className="text-sm font-medium text-white">{alert.assetName}</span>
                                            {isWhale && (
                                                <span className={cn(
                                                    "inline-flex items-center rounded-full px-1.5 py-0.5 text-xs font-bold",
                                                    isMegaWhale 
                                                        ? "bg-yellow-500/20 text-yellow-300 ring-1 ring-yellow-500/30"
                                                        : "bg-yellow-500/10 text-yellow-400 ring-1 ring-yellow-500/20"
                                                )}>
                                                    {isMegaWhale ? "🐋 MEGA" : "🐋"}
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-300">
                                        <div className="flex flex-col">
                                            <span>{formatNumber(alert.amount)}</span>
                                            {isWhale && (
                                                <span className="text-xs text-yellow-400 font-semibold">
                                                    {formatCurrency(usdValue)}
                                                </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-300">
                                        {formatCurrency(alert.price)}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-400">
                                        <div className="flex flex-col">
                                            <span title={alert.txId} className="cursor-help hover:text-white">
                                                Tx: {shortenAddress(alert.txId)}
                                            </span>
                                            <span title={alert.issuer} className="text-xs text-slate-500 cursor-help hover:text-slate-300">
                                                Iss: {shortenAddress(alert.issuer)}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm text-slate-400">
                                        {formatRelativeTime(alert.timestamp)}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
