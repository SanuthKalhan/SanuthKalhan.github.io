"use client";
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function DownloadCV() {
  return (
    <motion.a
      href="/assets/SanuthKalhan_Wanniarachchi_SE.pdf" // Ensure file is in /public
      download
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-5 right-10 z-100 flex items-center gap-3 bg-black text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform group hover:text-emerald-500"
    >
      <span className="text-xs uppercase tracking-widest font-bold">Download CV</span>
      <Download size={18} className="group-hover:translate-y-1 transition-transform" />
    </motion.a>
  );
}