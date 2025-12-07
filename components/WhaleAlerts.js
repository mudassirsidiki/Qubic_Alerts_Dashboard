"use client";

import { formatCurrency, formatNumber, shortenAddress, formatRelativeTime } from "@/lib/utils";
import { AlertTriangle, TrendingUp } from "lucide-react";

export default function WhaleAlerts({ alerts = [] }) {
    if (!alerts || alerts.length === 0) {
        return (
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-8 text-center">
                <AlertTriangle className="mx-auto h-12 w-12 text-slate-600 mb-4" />
                <p className="text-slate-400">No whale alerts in the last 24 hours</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-yellow-500 animate-pulse"></div>
                    <h3 className="text-lg font-bold text-white">🐋 Whale Alerts</h3>
                </div>
                <span className="ml-auto inline-flex items-center rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-400 ring-1 ring-inset ring-yellow-500/20">
                    {alerts.length} Active
                </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {alerts.map((alert, idx) => {
                    if (!alert || typeof alert.amount !== 'number' || typeof alert.price !== 'number') {
                        return null;
                    }
                    const usdValue = alert.amount * alert.price;
                    const isMegaWhale = usdValue >= 10000;
                    
                    return (
                        <div
                            key={idx}
                            className={`rounded-lg border p-4 transition-all hover:scale-[1.02] ${
                                isMegaWhale
                                    ? "border-yellow-500/50 bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 shadow-lg shadow-yellow-500/10"
                                    : "border-yellow-500/30 bg-yellow-500/5"
                            }`}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`h-2 w-2 rounded-full ${isMegaWhale ? "bg-yellow-400 animate-pulse" : "bg-yellow-500"}`}></div>
                                        <span className="text-sm font-semibold text-white">{alert.assetName}</span>
                                        {isMegaWhale && (
                                            <span className="inline-flex items-center rounded-full bg-yellow-500/20 px-2 py-0.5 text-xs font-bold text-yellow-300 ring-1 ring-inset ring-yellow-500/30">
                                                MEGA WHALE
                                            </span>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-3">
                                        <div>
                                            <p className="text-xs text-slate-400 mb-1">Amount</p>
                                            <p className="text-sm font-semibold text-white">{formatNumber(alert.amount)}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-400 mb-1">USD Value</p>
                                            <p className={`text-sm font-bold ${isMegaWhale ? "text-yellow-300" : "text-yellow-400"}`}>
                                                {formatCurrency(usdValue)}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-3 flex items-center gap-4 text-xs text-slate-500">
                                        <span>Tx: {shortenAddress(alert.txId)}</span>
                                        <span>•</span>
                                        <span>{formatRelativeTime(alert.timestamp)}</span>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <TrendingUp className="h-6 w-6 text-yellow-500" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


