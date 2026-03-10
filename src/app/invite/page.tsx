"use client";
import React from 'react';
import { Calendar, MapPin, Clock, Heart, Music } from 'lucide-react';

export default function LuxuryInvite() {
  return (
    <div className="min-h-screen bg-[#fdfcfb] text-slate-900 selection:bg-teal-100 overflow-hidden">
      
      {/* 1. Hero Visual */}
      <div className="h-screen flex flex-col items-center justify-center p-6 text-center border-b border-slate-100">
        <Heart className="text-teal-600 mb-8 animate-pulse" size={32} />
        <span className="uppercase tracking-[0.5em] text-[10px] text-slate-400 font-black mb-6">You are cordially invited</span>
        <h1 className="text-6xl md:text-8xl font-serif italic mb-4 leading-tight">Lucas & Isabella</h1>
        <p className="text-slate-500 font-serif italic text-xl">The Celebration of a Lifetime</p>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce text-slate-300">
          <div className="w-[1px] h-12 bg-slate-200 mx-auto"></div>
        </div>
      </div>

      {/* 2. The "Attractive Features" Grid */}
      <div className="max-w-4xl mx-auto py-24 px-6 grid md:grid-cols-3 gap-12 text-center">
        <div className="space-y-4">
          <Calendar className="mx-auto text-teal-600" size={24} />
          <h4 className="font-black text-xs uppercase tracking-widest">When</h4>
          <p className="text-slate-500 font-serif italic">Saturday, June 20, 2026<br />At 4:00 PM</p>
        </div>
        <div className="space-y-4 border-x border-slate-100">
          <MapPin className="mx-auto text-teal-600" size={24} />
          <h4 className="font-black text-xs uppercase tracking-widest">Where</h4>
          <p className="text-slate-500 font-serif italic underline cursor-pointer hover:text-teal-600 transition-colors">The Grand Villa Gardens<br />Lake Como, Italy</p>
        </div>
        <div className="space-y-4">
          <Music className="mx-auto text-teal-600" size={24} />
          <h4 className="font-black text-xs uppercase tracking-widest">Dress Code</h4>
          <p className="text-slate-500 font-serif italic">Black Tie Optional<br />Neutral Tones Preferred</p>
        </div>
      </div>

      {/* 3. The RSVP Experience */}
      <div className="max-w-lg mx-auto pb-32 px-6">
        <div className="bg-white p-12 rounded-[50px] shadow-[0_40px_100px_rgba(0,0,0,0.03)] border border-slate-100 text-center">
          <h3 className="text-2xl font-black italic tracking-tighter uppercase mb-8">Kindly Respond</h3>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none" />
            <select className="w-full bg-slate-50 border-none p-4 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none appearance-none">
              <option>Accepts with Pleasure</option>
              <option>Declines with Regret</option>
            </select>
            <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-teal-600 shadow-xl transition-all mt-4">
              SEND RSVP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}