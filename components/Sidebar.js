"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Bell, BarChart3, Settings, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Overview", href: "/", icon: LayoutDashboard },
    { name: "Alerts", href: "/alerts", icon: Bell },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex h-full w-64 flex-col bg-slate-900 text-white border-r border-slate-800">
            <div className="flex h-16 items-center px-6 border-b border-slate-800">
                <Zap className="h-6 w-6 text-cyan-400 mr-2" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Qubic Alerts
                </span>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-1 px-2">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "group flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors",
                                    isActive
                                        ? "bg-slate-800 text-cyan-400"
                                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                )}
                            >
                                <item.icon
                                    className={cn(
                                        "mr-3 h-5 w-5 flex-shrink-0 transition-colors",
                                        isActive ? "text-cyan-400" : "text-slate-400 group-hover:text-white"
                                    )}
                                />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <div className="p-4 border-t border-slate-800">
                <div className="rounded-md bg-slate-800 p-4">
                    <p className="text-xs text-slate-400 mb-1">Status</p>
                    <div className="flex items-center">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-medium text-green-400">Connected</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
