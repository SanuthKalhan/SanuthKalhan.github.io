"use client";
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function DownloadCV() {
  return (
    <motion.a
      href="/assets/SanuthKalhan_Wanniarachchi_SE.pdf"
      download
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-5 right-5 md:top-5 md:right-10 z-100 flex items-center gap-2 bg-black text-white px-4 py-2.5 md:px-6 md:py-4 rounded-full shadow-2xl hover:scale-105 transition-all group hover:text-emerald-500"
    >
      {/* Short text for mobile, Full text for desktop */}
      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
        <span className="md:hidden">CV</span>
        <span className="hidden md:inline">Download CV</span>
      </span>
      
      <Download size={14} className="md:size-4.5 group-hover:translate-y-1 transition-transform text-white md:text-white" />
    </motion.a>
  );
}
