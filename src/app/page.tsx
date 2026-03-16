"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Terminal, Layout, Send, CheckCircle, ArrowRight, MousePointer2, Smartphone, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function YokiFullSite() {
  const [total, setTotal] = useState(0);
  const router = useRouter();

  const services = [
    { id: 'resume', name: 'Interactive Live Resume', price: 1000, icon: <Layout className="text-teal-600" /> },
    { id: 'invite', name: 'Digital Event Invitation', price: 3000, icon: <Send className="text-teal-600" /> },
    { id: 'menu', name: 'Smart QR Restaurant Menu', price: 5000, icon: <Smartphone className="text-teal-600" /> },
    { id: 'site', name: 'Custom Small Business Site', price: 10000, icon: <Globe className="text-teal-600" /> },
  ];

  const toggleService = (price: number, checked: boolean) => {
    setTotal(prev => checked ? prev + price : prev - price);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/mkoqoppv", {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      // This manually forces the browser to go to the success page
      router.push('/success');
    } else {
      alert("Something went wrong. Please try again!");
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pb-20">
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-tighter text-teal-600 underline decoration-white/20">YOKI.</h1>
          <div className="flex gap-6 items-center">
            <a href="#portfolio" className="text-sm font-medium hover:text-teal-600 transition">Work</a>
            <a href="#calculator" className="text-sm font-medium hover:text-teal-600 transition">Pricing</a>
            <a 
  href="#contact" 
  className="bg-slate-900 text-white hover:bg-teal-600 rounded-full py-4 px-10 font-bold transition-all"
>
  BOOK A PROJECT
</a></div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 px-6 text-center">
        
          
       
        <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter italic text-slate-900">
          PAPER IS <span className="text-teal-600 uppercase">Dead.</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">
          I build high-performance digital alternatives for professionals. 
          Stop sending boring PDFs—start sending <b>Yoki</b> links.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="#calculator" className="bg-slate-900 text-white hover:bg-teal-600 rounded-full py-4 px-10 font-bold flex items-center justify-center gap-2 transition-transform hover:scale-105">
            BOOK A PROJECT <MousePointer2 size={20} className="text-teal-600" />
          </a>
          <a href="#portfolio" className="border border-white/20 hover:bg-white/5 px-8 py-4 rounded-xl font-bold text-lg transition">
            View Demos
          </a>
        </div>
      </section>

   {/* --- PORTFOLIO SECTION --- */}
<section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
  <div className="mb-16">
    <h3 className="text-4xl font-black mb-2 uppercase italic tracking-tighter">The Showcase</h3>
    <p className="text-gray-500">Premium digital solutions delivered in 48 hours.</p>
  </div>
  
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      { 
        title: "Live Resume", 
        img: "💻", 
        desc: "Includes Dark Mode, Download-to-PDF, and Skill Animations.",
        link: "/resume" 
      },
  { 
  title: "Digital Invite", 
  img: "✉️", 
  desc: "Includes RSVP Database, Google Maps, and Countdown Timer.",
  link: "https://invitations-kappa.vercel.app/" 
},
      { 
        title: "Smart Menu", 
        img: "🍽️", 
        desc: "Instant QR loading, Category filtering, and Live updates.",
        link: "/menu" 
      },
      {
        title: "Corporate Profiles",
        img: "🏢",
        desc: "SEO-ready multi-page websites for established companies.",
        link: "#contact" 
      }
    ].map((item, i) => (
      <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:border-teal-600/50 transition group flex flex-col justify-between">
        <div>
          <div className="text-5xl mb-6">{item.img}</div>
          <h4 className="text-2xl font-bold mb-3 uppercase tracking-tight text-slate-900">{item.title}</h4>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">{item.desc}</p>
        </div>

        {/* This dynamic link now points to the specific item.link */}
        <a 
          href={item.link} 
          className="text-teal-600 font-bold flex items-center gap-2 hover:gap-4 transition-all cursor-pointer"
        >
          {item.title === "Corporate Profiles" ? "Get a Quote" : "Live Preview"} <ArrowRight size={18} />
        </a>
      </div>
    ))}
  </div>
</section>     {/* --- CALCULATOR SECTION --- */}
      <section id="calculator" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black uppercase italic mb-4 text-slate-900">Pricing Calculator</h3>
            <p className="text-slate-500 italic">Select the services you need for an instant quote.</p>
          </div>
          
          <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><Terminal size={100} /></div>
            
            {services.map(s => (
              <label key={s.id} className="flex justify-between items-center py-5 border-b border-white/5 cursor-pointer hover:bg-white/5 transition px-4 rounded-lg">
                <div className="flex items-center gap-4">
                  {s.icon}
                  <span className="text-lg font-bold text-slate-900">{s.name}</span>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-teal-600 font-mono">{s.price}birr</span>
                  <input 
                    type="checkbox" 
                    onChange={(e) => toggleService(s.price, e.target.checked)}
                    className="w-6 h-6 rounded-md accent-teal-600 cursor-pointer"
                  />
                </div>
              </label>
            ))}

            <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8">
              <div>
                <span className="text-slate-500 text-xs font-black uppercase tracking-[0.2em]">Estimate</span>
                <div className="text-6xl font-black text-teal-600 tracking-tighter">{total}birr</div>
              </div>
              <a href="#contact" className="w-full md:w-auto bg-slate-900 text-white hover:bg-teal-600 rounded-full py-4 px-10 font-bold transition-all shadow-lg shadow-blue-500/20">
                Book Yoki Now
              </a>
            </div>
          </div>
        </div>
      </section>


{/* --- PRICING SECTION --- */}
<section id="pricing" className="bg-slate-50 border border-slate-100 p-8 rounded-3xl hover:bg-white/10 transition-all">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h3 className="text-4xl font-black mb-4 uppercase italic tracking-tighter text-slate-900">Investment</h3>
      <p className="text-slate-500">Fixed rates. No hidden fees. 48-hour delivery.</p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Basic - Digital Invite */}
      <div className="p-8 rounded-3xl border border-slate-100 bg-white hover:border-white/20 transition-all flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Single Event</span>
          <h4 className="text-2xl font-bold mt-2 mb-6 text-slate-900">Digital Invite</h4>
          <div className="text-4xl font-black mb-6 italic text-teal-600">3k birr</div>
          <ul className="space-y-4 text-sm text-slate-500 mb-8">
            <li className="flex items-center gap-2">✓ Animated Glass-morphism</li>
            <li className="flex items-center gap-2">✓ RSVP Direct to Email</li>
            <li className="flex items-center gap-2">✓ Google Maps Integration</li>
          </ul>
        </div>
        <a href="#contact" className="w-full py-3 rounded-xl border border-white/10 text-center font-bold hover:bg-white hover:text-black transition">Select Basic</a>
      </div>

      {/* Popular - Smart Menu */}
      <div className="p-8 rounded-3xl border-2 border-teal-600 bg-slate-50 relative transform lg:scale-105 shadow-2xl flex flex-col justify-between">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-slate-900 text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-tighter">Most Popular</div>
        <div>
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Business Utility</span>
          <h4 className="text-2xl font-bold mt-2 mb-6 text-slate-900">Smart QR Menu</h4>
          <div className="text-4xl font-black mb-6 italic text-teal-600">5k birr</div>
          <ul className="space-y-4 text-sm text-slate-500 mb-8">
            <li className="flex items-center gap-2">✓ Interactive Category Filter</li>
            <li className="flex items-center gap-2">✓ Printable High-Res QR Code</li>
            <li className="flex items-center gap-2">✓ Mobile-First App Experience</li>
            <li className="flex items-center gap-2">✓ Unlimited Menu Items</li>
          </ul>
        </div>
        <a href="#contact" className="w-full py-3 rounded-xl bg-slate-900 text-white hover:bg-teal-600 rounded-full py-4 px-10 font-bold transition">Get Started</a>
      </div>

      {/* Professional - Company Profile */}
      <div className="p-8 rounded-3xl border border-slate-100 bg-white hover:border-white/20 transition-all flex flex-col justify-between">
        <div>
          <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Corporate</span>
          <h4 className="text-2xl font-bold mt-2 mb-6 text-slate-900">Company Profile</h4>
          <div className="text-4xl font-black mb-6 italic text-teal-600">Custom</div>
          <ul className="space-y-4 text-sm text-slate-500 mb-8">
            <li className="flex items-center gap-2">✓ Multi-page Architecture</li>
            <li className="flex items-center gap-2">✓ SEO & Speed Optimization</li>
            <li className="flex items-center gap-2">✓ Custom Branding</li>
            <li className="flex items-center gap-2">✓ Domain & Hosting Setup</li>
          </ul>
        </div>
        <a href="#contact" className="w-full py-3 rounded-xl border border-white/10 text-center font-bold hover:bg-white hover:text-black transition">Request Quote</a>
      </div>
    </div>
  </div>
</section>


{/* --- ABOUT / FOUNDER SECTION --- */}
<section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
  <div className="inline-block p-1 rounded-full bg-gradient-to-tr from-teal-500 to-black mb-8">
     <div className="w-24 h-24 rounded-full bg-zinc-800 flex items-center justify-center text-3xl">👨‍💻</div>
  </div>
  <h3 className="text-3xl font-bold mb-6 italic uppercase tracking-tighter text-slate-900">The Vision Behind Yoki</h3>
  <p className="text-slate-500 leading-relaxed text-lg italic">
     At Yoki Digital, I bridge the gap between traditional business and the 
    modern web. I specialize in creating high-performance digital experiences—from 
    interactive smart menus for restaurants to luxury event invitations—that turn 
    passive viewers into active customers. My mission is to provide local
     businesses with the same elite-level technology
     used by global brands, delivered with speed and precision.
  </p>
</section>




      {/* --- CONTACT SECTION --- */}
<section id="contact" className="py-24 px-6 max-w-xl mx-auto text-center">
  <h3 className="text-4xl font-black mb-6 uppercase italic text-slate-900">Ready to Upgrade?</h3>
  <p className="text-slate-500 mb-10">Fill in your details and I&apos;ll get back to you... within 4 hours.</p>
  <form onSubmit={handleSubmit} className="space-y-4 text-left">
    <div>
      <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Full Name</label>
      <input 
        name="name"
        type="text" 
        required
        placeholder="e.g. selam haile " 
        className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:border-teal-500 outline-none transition text-slate-900" 
      />
    </div>
    
    <div>
      <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Email Address</label>
      <input 
        name="email"
        type="email" 
        required
        placeholder="selam@example.com" 
        className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:border-teal-500 outline-none transition text-slate-900" 
      />
    </div>
    
    <div>
      <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">Project Details</label>
      <textarea 
        name="message"
        required
        placeholder="I need a Live Resume and a Business Site..." 
        rows={4} 
        className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:border-teal-500 outline-none transition text-slate-900"
      ></textarea>
    </div>

    <button 
      type="submit"
      className="w-full bg-slate-900 text-white hover:bg-teal-600 rounded-full py-4 px-10 font-bold transition-all transform hover:scale-[1.02]"
    >
      Send Message
    </button>
  </form>
</section>

      <footer className="py-10 text-center border-t border-slate-100 opacity-30 text-xs font-mono">
        © 2026 YOKI DIGITAL BY [Selamawit H.] • BUILT WITH NEXT.JS
      </footer>
    </div>
  );
}