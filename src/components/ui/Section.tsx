"use client";
import { motion } from "framer-motion";

export default function Section({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.5 }}
      className="min-h-screen flex flex-col justify-center px-12 md:px-24"
    >
      {children}
    </motion.section>
  );
}