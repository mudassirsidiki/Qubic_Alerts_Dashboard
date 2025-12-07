import AlertsTable from "@/components/AlertsTable";
import { dummyAlerts } from "@/data/dummyAlerts";

export default function AlertsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
                    All Alerts
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                    View and filter all transaction alerts from the Qubic blockchain.
                </p>
            </div>
            <AlertsTable alerts={dummyAlerts} />
        </div>
    );
}
