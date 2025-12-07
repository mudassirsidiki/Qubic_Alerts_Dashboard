import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import AlertTemplateForm from "@/components/AlertTemplateForm";

export default function SettingsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
                    Settings & Architecture
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                    Configure alerts and view the system architecture.
                </p>
            </div>

            <ArchitectureDiagram />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <AlertTemplateForm />

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm">
                    <h3 className="mb-4 text-base font-semibold text-white">About This Hackathon Project</h3>
                    <div className="prose prose-invert text-sm text-slate-400">
                        <p className="mb-4">
                            This dashboard demonstrates a real-time alert system for the Qubic blockchain.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>
                                <strong className="text-white">Scalable:</strong> Uses serverless components (EasyConnect, n8n).
                            </li>
                            <li>
                                <strong className="text-white">Low Cost:</strong> Uses Google Sheets as a lightweight database.
                            </li>
                            <li>
                                <strong className="text-white">User Friendly:</strong> Modern Next.js frontend for easy visualization.
                            </li>
                        </ul>
                        <p>
                            The current version runs in <strong>Demo Mode</strong> using simulated data to showcase the UI capabilities without requiring a live blockchain connection during the presentation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
