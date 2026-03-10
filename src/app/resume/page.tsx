"use client";
import React from 'react';
import { Download, Mail, Github, Linkedin, Code2, Sparkles } from 'lucide-react';

export default function InteractiveResume() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6 print:p-0 print:bg-white">
      {/* --- INJECT PRINT CLEANING STYLE --- */}
      <style jsx global>{`
        @media print {
          /* Hides the browser header (URL, Date) and footer (Localhost) */
          @page { margin: 0; }
          body { margin: 1.6cm; }
          
          /* Hide elements we don't want in the PDF */
          .no-print { display: none !important; }
          
          /* Ensure colors and backgrounds show up correctly in PDF */
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}</style>

      <div className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden print:shadow-none print:border-none">
        
        {/* Top Header */}
        <div className="p-12 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 no-print">
              <Sparkles size={12} /> Available for Projects
            </div>
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none mb-2">Alex Rivera</h1>
            <p className="text-slate-500 font-medium text-lg italic">Full-Stack Developer & UI Architect</p>
          </div>
          <button 
            onClick={handleDownload} 
            className="no-print bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-teal-600 transition-all shadow-lg"
          >
            <Download size={18} /> DOWNLOAD CV
          </button>
        </div>

        <div className="grid md:grid-cols-3">
          {/* Sidebar */}
          <div className="bg-slate-50/50 p-12 border-r border-slate-100 space-y-12 print:bg-white">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-teal-600 mb-6">Expertise</h4>
              <div className="space-y-6">
                {[
                  { name: 'Next.js 15', level: '95%' },
                  { name: 'TypeScript', level: '90%' },
                  { name: 'Tailwind CSS', level: '98%' },
                  { name: 'Node.js', level: '85%' }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-slate-900">{skill.name}</span>
                      <span className="text-teal-600">{skill.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-900 rounded-full" style={{ width: skill.level }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FIXED SOCIALS: Forced slate-900 for visibility */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-teal-600 mb-6">Connect</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-slate-900 text-sm font-bold">
                  <Github size={18} className="text-slate-900" /> /alexriveradev
                </div>
                <div className="flex items-center gap-3 text-slate-900 text-sm font-bold">
                  <Linkedin size={18} className="text-slate-900" /> /in/alexrivera
                </div>
                <div className="flex items-center gap-3 text-slate-900 text-sm font-bold">
                  <Mail size={18} className="text-slate-900" /> alex@yoki.digital
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 p-12 space-y-12">
            <section>
              <h3 className="text-xl font-black italic uppercase tracking-tighter mb-6 flex items-center gap-2">
                <Code2 className="text-teal-600" size={20} /> Professional Experience
              </h3>
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-slate-100">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white border-2 border-slate-900 rounded-full"></div>
                  <h4 className="font-black text-lg text-slate-900">Yoki Digital Agency</h4>
                  <p className="text-xs text-teal-600 font-bold mb-2 uppercase tracking-widest">2026 — Founder</p>
                  <p className="text-sm text-slate-500 leading-relaxed italic">Lead architect for high-end restaurant and luxury event digital solutions.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}