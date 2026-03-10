"use client";
import React from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowLeft, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center bg-slate-50 border border-slate-100"
      >
        {/* Animated Checkmark */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="bg-teal-600 p-4 rounded-full"
            >
              <CheckCircle size={48} strokeWidth={3} className="text-teal-600" />
            </motion.div>
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 bg-teal-600 rounded-full -z-10 blur-xl opacity-50"
            />
          </div>
        </div>

        <h1 className="text-4xl font-black mb-4 uppercase italic italic tracking-tighter text-slate-900">
          MESSAGE RECEIVED
        </h1>
        
        <p className="text-slate-500 mb-10 leading-relaxed">
          The clock is ticking. I usually respond within <span className="text-slate-900 font-bold">4 hours</span>. Check your inbox for a confirmation.
        </p>

        <div className="space-y-4">
          <Link 
            href="/"
            className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white hover:bg-teal-600 rounded-full py-4 px-10 font-bold transition-all"
          >
            <ArrowLeft size={18} className="text-teal-600" /> BACK TO HOME
          </Link>
          
          <div className="flex justify-center gap-6 pt-6 grayscale opacity-50 hover:opacity-100 transition-all">
            <a href="#" className="hover:text-teal-600"><Instagram size={20} className="text-teal-600"/></a>
            <a href="#" className="hover:text-teal-600"><Linkedin size={20} className="text-teal-600"/></a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}