"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function CorporatePage() {
  const companies = [
    { name: "charity organization", url: "https://new-three-iota-59.vercel.app/", desc: "addis africa civil society." },
    { name: "kaldi's", url: "https://kaldis-theta.vercel.app/", desc: "kaldis coffee." },
    { name: "hair corner PLC", url: "https://beauty-salon-lemon-two.vercel.app/", desc: "beauty salon." },
    { name: "smart menu", url: "https://yoki-service-system.vercel.app/", desc: "yoki digitals." },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-black mb-4">Corporate Websites</h2>
        <p className="text-slate-500 mb-8">Tap a card to visit the company website (opens in a new tab).</p>

        <div className="grid md:grid-cols-2 gap-6">
          {companies.map((c, i) => (
            <a
              key={i}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-slate-100 rounded-xl hover:border-teal-600/50 transition bg-slate-50"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">{c.name}</h3>
                  <p className="text-slate-500 text-sm">{c.desc}</p>
                </div>
                <div className="text-teal-600 flex items-center gap-2 font-bold">
                  Visit <ArrowRight size={18} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
