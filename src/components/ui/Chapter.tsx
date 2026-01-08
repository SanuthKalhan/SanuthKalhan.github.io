"use client";
import { motion } from 'framer-motion';

export default function Chapter({ number, title, children }: any) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="py-32 px-10 md:px-20 min-h-[70vh] border-t border-black/5"
    >
      <div className="flex items-baseline gap-4 mb-16">
        <span className="text-sm font-mono text-gray-400">{number}/</span>
        <h2 className="text-4xl font-light uppercase tracking-tighter italic">{title}</h2>
      </div>
      <div className="pl-0 md:pl-20">
        {children}
      </div>
    </motion.section>
  );
}