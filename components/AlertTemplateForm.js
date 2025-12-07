"use client";

import { useState } from "react";
import { Bell, Save } from "lucide-react";

export default function AlertTemplateForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        }, 1000);
    };

    return (
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
                <h3 className="text-base font-semibold text-white">Create Alert Template</h3>
                <Bell className="h-5 w-5 text-slate-500" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="asset" className="block text-sm font-medium leading-6 text-slate-300">
                        Asset Name
                    </label>
                    <select
                        id="asset"
                        name="asset"
                        className="mt-2 block w-full rounded-md border-0 bg-slate-800 py-2 pl-3 pr-10 text-white focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                    >
                        <option>Qubic</option>
                        <option>CFB</option>
                        <option>QX</option>
                        <option>RandomAsset</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="amount" className="block text-sm font-medium leading-6 text-slate-300">
                        Minimum Amount
                    </label>
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        className="mt-2 block w-full rounded-md border-0 bg-slate-800 py-1.5 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                        placeholder="1000"
                    />
                </div>

                <div>
                    <label htmlFor="channel" className="block text-sm font-medium leading-6 text-slate-300">
                        Notification Channel
                    </label>
                    <select
                        id="channel"
                        name="channel"
                        className="mt-2 block w-full rounded-md border-0 bg-slate-800 py-2 pl-3 pr-10 text-white focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                    >
                        <option>Email</option>
                        <option>Discord Webhook</option>
                        <option>Telegram Bot</option>
                    </select>
                </div>

                <div className="pt-4">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            "Saving..."
                        ) : (
                            <>
                                <Save className="mr-2 h-4 w-4" />
                                Save Alert (Demo Only)
                            </>
                        )}
                    </button>
                </div>
            </form>

            {showSuccess && (
                <div className="mt-4 rounded-md bg-green-500/10 p-4">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-green-400">
                                Alert saved! In production, this would register a webhook with n8n.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
