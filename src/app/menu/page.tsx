"use client";
import React, { useState } from 'react';
import { QrCode, Utensils, Star, Leaf, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Our Menu Database
type MenuCategory = 'Starters' | 'Main' | 'Desserts' | 'Cocktails';

type MenuItem = {
  name: string;
  price: string;
  desc: string;
  tags: string[];
};

const MENU_DATA: Record<MenuCategory, MenuItem[]> = {
  Starters: [
    { name: "Truffle Arancini", price: "200 birr", desc: "Crispy risotto balls, wild mushroom, truffle aioli.", tags: ["Veg"] },
    { name: "Burrata Pugliese", price: "122 birr", desc: "Heirloom tomatoes, aged balsamic, basil oil.", tags: ["Fresh"] },
  ],
  Main: [
    { name: "Wagyu Ribeye", price: "650 birr", desc: "Grade A5, smoked sea salt, bone marrow butter.", tags: ["Chef's Choice", "GF"] },
    { name: "Lobster Thermidor", price: "58 birr", desc: "Atlantic lobster, cognac cream, gruyère crust.", tags: ["Premium"] },
    { name: "Wild Mushroom Risotto", price: "340 birr", desc: "Porcini, chanterelles, 24-month parmesan.", tags: ["Veg"] },
  ],
  Desserts: [
    { name: "Deconstructed Tiramisu", price: "416 birr", desc: "Espresso-soaked savoiardi, mascarpone foam.", tags: ["Classic"] },
    { name: "Gold Leaf Fondant", price: "596 birr", desc: "Dark chocolate, raspberry coulis, 24k gold.", tags: ["Luxury"] },
  ],
  Cocktails: [
    { name: "Smoked Old Fashioned", price: "420 birr", desc: "Bourbon, maple, hickory smoke, orange zest.", tags: ["Strong"] },
    { name: "Teal Diamond", price: "588 birr", desc: "Gin, elderflower, butterfly pea, lemon.", tags: ["Signature"] },
  ]
};

export default function SmartMenu() {
  const [activeTab, setActiveTab] = useState<MenuCategory>('Main');

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      {/* Brand Header */}
      <div className="h-64 bg-slate-50 flex flex-col items-center justify-center border-b border-slate-100">
         <Utensils size={32} className="text-teal-600 mb-4" />
         <h1 className="text-3xl font-black italic tracking-tighter uppercase">The Bistro Luxe</h1>
         <div className="flex gap-1 mt-2">
            {[1,2,3,4,5].map(i => <Star key={i} size={10} className="fill-teal-600 text-teal-600" />)}
         </div>
      </div>

      {/* Floating QR - Purely Visual Polish */}
      <div className="max-w-md mx-auto -mt-8 px-6">
        <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
          <div className="bg-slate-900 p-2 rounded-xl">
            <QrCode className="text-white" size={32} />
          </div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">Table 04 • Digital Menu</p>
        </div>
      </div>

      {/* STICKY CATEGORIES - These now WORK */}
      <div className="sticky top-0 bg-white/90 backdrop-blur-md z-30 py-6 px-6 border-b border-slate-100 flex gap-3 overflow-x-auto no-scrollbar">
        {Object.keys(MENU_DATA).map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab as MenuCategory)}
            className={`whitespace-nowrap px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
              activeTab === tab 
              ? 'bg-slate-900 text-white shadow-lg shadow-slate-200 scale-105' 
              : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ANIMATED MENU LIST */}
      <div className="max-w-2xl mx-auto py-10 px-6">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-10"
          >
            {MENU_DATA[activeTab].map((item, i) => (
              <div key={i} className="group border-b border-slate-50 pb-8">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[8px] font-black uppercase bg-teal-50 text-teal-600 px-2 py-0.5 rounded-md tracking-tighter">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-500 text-sm italic mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="text-xl font-black text-slate-900 tracking-tighter">{item.price}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}