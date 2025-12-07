import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Qubic Alerts Dashboard",
    description: "Real-time alerts for Qubic blockchain events",
    keywords: ["Qubic", "blockchain", "alerts", "cryptocurrency", "trading"],
    authors: [{ name: "Qubic Alerts" }],
    viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="h-full bg-slate-950">
            <body className={cn(inter.className, "h-full antialiased")}>
                <div className="flex h-full">
                    <Sidebar />
                    <div className="flex flex-1 flex-col overflow-hidden">
                        <Topbar />
                        <main className="flex-1 overflow-y-auto bg-slate-950 p-6">
                            {children}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    );
}
