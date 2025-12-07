import { ArrowRight, Database, Globe, Server, Sheet } from "lucide-react";

export default function ArchitectureDiagram() {
    const steps = [
        {
            id: 1,
            title: "Qubic Blockchain",
            description: "Emits transaction events",
            icon: Globe,
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            border: "border-blue-400/20",
        },
        {
            id: 2,
            title: "EasyConnect",
            description: "Listens to events",
            icon: Server,
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            border: "border-purple-400/20",
        },
        {
            id: 3,
            title: "n8n Workflow",
            description: "Processes data",
            icon: Database,
            color: "text-pink-400",
            bg: "bg-pink-400/10",
            border: "border-pink-400/20",
        },
        {
            id: 4,
            title: "Google Sheets",
            description: "Stores alert rows",
            icon: Sheet,
            color: "text-green-400",
            bg: "bg-green-400/10",
            border: "border-green-400/20",
        },
        {
            id: 5,
            title: "Next.js Dashboard",
            description: "Visualizes data",
            icon: Globe,
            color: "text-cyan-400",
            bg: "bg-cyan-400/10",
            border: "border-cyan-400/20",
        },
    ];

    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm">
            <h3 className="mb-6 text-base font-semibold text-white">System Architecture</h3>
            <div className="relative flex flex-col justify-between gap-8 md:flex-row">
                {/* Connector Line (Desktop) */}
                <div className="absolute left-0 top-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-slate-800 md:block" />

                {steps.map((step, index) => (
                    <div key={step.id} className="relative z-10 flex flex-1 flex-col items-center text-center">
                        <div
                            className={`flex h-12 w-12 items-center justify-center rounded-full border ${step.border} ${step.bg} ${step.color} mb-3`}
                        >
                            <step.icon className="h-6 w-6" />
                        </div>
                        <h4 className="text-sm font-medium text-white">{step.title}</h4>
                        <p className="mt-1 text-xs text-slate-400">{step.description}</p>
                        {index < steps.length - 1 && (
                            <div className="mt-4 md:hidden">
                                <ArrowRight className="h-5 w-5 text-slate-600 rotate-90" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
