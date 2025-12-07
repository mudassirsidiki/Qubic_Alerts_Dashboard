"use client";

import { useState, useMemo } from "react";
import { formatCurrency, formatNumber, shortenAddress, formatRelativeTime, cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, Search, Filter } from "lucide-react";
import { isWhaleAlert } from "@/data/dummyAlerts";

export default function AlertsTable({ alerts = [] }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [assetFilter, setAssetFilter] = useState("All");
    const [amountFilter, setAmountFilter] = useState("All");
    const [whaleFilter, setWhaleFilter] = useState("All");
    const [sortConfig, setSortConfig] = useState({ key: "timestamp", direction: "desc" });

    const uniqueAssets = useMemo(() => {
        const assets = new Set(alerts.map((a) => a.assetName));
        return ["All", ...Array.from(assets)];
    }, [alerts]);

    const filteredAlerts = useMemo(() => {
        return alerts.filter((alert) => {
            const matchesSearch =
                alert.txId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                alert.assetName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                alert.issuer.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesAsset = assetFilter === "All" || alert.assetName === assetFilter;

            let matchesAmount = true;
            if (amountFilter === "100") matchesAmount = alert.amount >= 100;
            if (amountFilter === "1000") matchesAmount = alert.amount >= 1000;
            if (amountFilter === "10000") matchesAmount = alert.amount >= 10000;

            let matchesWhale = true;
            if (whaleFilter === "Whale") matchesWhale = isWhaleAlert(alert);
            if (whaleFilter === "MegaWhale") {
                const usdValue = alert.amount * alert.price;
                matchesWhale = usdValue >= 10000;
            }

            return matchesSearch && matchesAsset && matchesAmount && matchesWhale;
        });
    }, [alerts, searchTerm, assetFilter, amountFilter, whaleFilter]);

    const sortedAlerts = useMemo(() => {
        let sortableAlerts = [...filteredAlerts];
        if (sortConfig.key !== null) {
            sortableAlerts.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableAlerts;
    }, [filteredAlerts, sortConfig]);

    const requestSort = (key) => {
        let direction = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key, direction });
    };

    const getSortIcon = (key) => {
        if (sortConfig.key !== key) return null;
        return sortConfig.direction === "ascending" ? (
            <ChevronUp className="h-4 w-4 ml-1" />
        ) : (
            <ChevronDown className="h-4 w-4 ml-1" />
        );
    };

    return (
        <div className="space-y-4">
            {/* Filters */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between bg-slate-900 p-4 rounded-xl border border-slate-800">
                <div className="relative flex-1 max-w-md">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search className="h-5 w-5 text-slate-500" />
                    </div>
                    <input
                        type="text"
                        className="block w-full rounded-md border-0 bg-slate-800 py-2 pl-10 pr-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                        placeholder="Search TxID, Asset, or Issuer..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-4">
                    <div className="relative">
                        <select
                            className="block w-full rounded-md border-0 bg-slate-800 py-2 pl-3 pr-10 text-white focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 appearance-none"
                            value={assetFilter}
                            onChange={(e) => setAssetFilter(e.target.value)}
                        >
                            {uniqueAssets.map((asset) => (
                                <option key={asset} value={asset}>
                                    {asset === "All" ? "All Assets" : asset}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <Filter className="h-4 w-4 text-slate-500" />
                        </div>
                    </div>
                    <div className="relative">
                        <select
                            className="block w-full rounded-md border-0 bg-slate-800 py-2 pl-3 pr-10 text-white focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 appearance-none"
                            value={amountFilter}
                            onChange={(e) => setAmountFilter(e.target.value)}
                        >
                            <option value="All">Any Amount</option>
                            <option value="100">≥ 100</option>
                            <option value="1000">≥ 1,000</option>
                            <option value="10000">≥ 10,000</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDown className="h-4 w-4 text-slate-500" />
                        </div>
                    </div>
                    <div className="relative">
                        <select
                            className="block w-full rounded-md border-0 bg-slate-800 py-2 pl-3 pr-10 text-white focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 appearance-none"
                            value={whaleFilter}
                            onChange={(e) => setWhaleFilter(e.target.value)}
                        >
                            <option value="All">All Transactions</option>
                            <option value="Whale">🐋 Whale Only</option>
                            <option value="MegaWhale">🐋 Mega Whale</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronDown className="h-4 w-4 text-slate-500" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-800">
                        <thead className="bg-slate-950/50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider cursor-pointer hover:text-white"
                                    onClick={() => requestSort("assetName")}
                                >
                                    <div className="flex items-center">
                                        Asset {getSortIcon("assetName")}
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider cursor-pointer hover:text-white"
                                    onClick={() => requestSort("amount")}
                                >
                                    <div className="flex items-center">
                                        Amount {getSortIcon("amount")}
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider cursor-pointer hover:text-white"
                                    onClick={() => requestSort("price")}
                                >
                                    <div className="flex items-center">
                                        Price {getSortIcon("price")}
                                    </div>
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                                    TxID / Issuer
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-right text-xs font-medium text-slate-400 uppercase tracking-wider cursor-pointer hover:text-white"
                                    onClick={() => requestSort("timestamp")}
                                >
                                    <div className="flex items-center justify-end">
                                        Time {getSortIcon("timestamp")}
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 bg-slate-900">
                            {sortedAlerts.length > 0 ? (
                                sortedAlerts.map((alert, idx) => {
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
                                })
                            ) : (
                                <tr>
                                    <td colSpan="5" className="px-6 py-12 text-center text-slate-500">
                                        No alerts found matching your filters.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
