"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

interface CaseStudyDetails {
  problem: string;
  solution: string;
  outcomes: string[];
}

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  imagePlaceholder?: string;
  details?: CaseStudyDetails;
}

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  link, 
  imagePlaceholder,
  details 
}: ProjectProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 transition-colors duration-500 bg-neutral-100 px-6 md:px-10"
      >
        {/* 01. PROJECT INFO (LEFT SIDE) */}
        {/* Changed md:col-span to lg:col-span for better tablet spacing */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {tags.slice(0, 3).map((tag, index) => (
                <span key={index} className="text-[10px] uppercase tracking-widest px-2 py-1 border border-black/10 rounded-full text-gray-500 bg-white/50">
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-3xl md:text-4xl font-serif mb-6 group-hover:italic transition-all duration-300">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-sm">
              {description}
            </p>
          </div>

          <button 
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center gap-2 mt-8 text-sm font-bold uppercase tracking-widest group/link text-emerald-500 cursor-pointer w-fit"
          >
            View Case Study 
            <ArrowUpRight size={18} className="group-hover/link:rotate-45 transition-transform duration-300" />
          </button>
        </div>

        {/* 02. PROJECT VISUAL (RIGHT SIDE) */}
        <div className="lg:col-span-6 relative aspect-video overflow-hidden bg-transparent rounded-sm">
          <div className="absolute inset-0 flex items-center justify-center text-gray-300 italic text-sm p-0">
            {imagePlaceholder ? (
              <img 
                src={imagePlaceholder} 
                alt={`${title} Preview`} 
                /* 1. Removed 'grayscale' (Full color on mobile by default)
                  2. Added 'md:grayscale' (B&W on desktop)
                  3. Added 'md:group-hover:grayscale-0' (Color on hover for desktop)
                */
                className="w-full h-full object-contain transition-all duration-700 ease-in-out md:grayscale md:group-hover:grayscale-0" 
              />
            ) : (
              "[ Project Visual / UI Concept ]"
            )}
          </div>
        </div>
      </motion.div>

      {/* --- DRAWER OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 w-full h-full bg-black/60 backdrop-blur-md z-100"
            />

            {/* Drawer */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              // Responsive Width: 100% on mobile/tablet, 600px (w-150) on desktop
              className="fixed top-0 left-0 h-full w-full sm:w-[85%] md:w-[70%] lg:w-150 bg-white z-101 shadow-2xl overflow-y-auto"
            >
              <div className="p-6 md:p-12 h-full flex flex-col bg-mesh-2">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="self-end p-2 hover:bg-gray-100 rounded-full transition-colors mb-4"
                >
                  <X size={24} className="text-gray-400" />
                </button>

                <div className="space-y-8">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span key={index} className="text-[10px] uppercase tracking-widest px-2 py-1 border border-black/10 rounded-full text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-3xl md:text-5xl font-serif italic text-gray-900 leading-tight">
                    {title}
                  </h2>

                  <div className="aspect-video bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden border border-black/5">
                    {imagePlaceholder ? (
                      <img 
                        src={imagePlaceholder} 
                        alt="Case Study Detail" 
                        className="w-full h-full object-contain" 
                      />
                    ) : (
                      <span className="text-gray-400 italic text-xs">[ Case Study Visual ]</span>
                    )}
                  </div>

                  {/* Dynamic Content Sections */}
                  <div className="space-y-10 pb-20">
                    <section>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-px w-8 bg-emerald-500" />
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-600">The_Challenge</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                        {details?.problem || "Problem statement not defined for this case study."}
                      </p>
                    </section>

                    <section>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="h-px w-8 bg-emerald-500" />
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-emerald-600">Architecture_&_Logic</h4>
                      </div>
                      <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg">
                        {details?.solution || "Technical implementation details not defined."}
                      </p>
                    </section>
                    
                    <div className="h-px w-full bg-black/5" />
                    
                    <section className="space-y-6">
                       <p className="text-xs text-gray-400 uppercase tracking-[0.4em] font-medium">Key Outcomes</p>
                       <ul className="grid grid-cols-1 gap-4">
                          {details?.outcomes.map((outcome, i) => (
                            <li key={i} className="flex gap-3 text-gray-600 text-sm md:text-base italic">
                              <span className="text-emerald-500 font-bold">→</span>
                              {outcome}
                            </li>
                          )) || (
                            <li className="text-gray-400">• Documentation pending.</li>
                          )}
                       </ul>
                    </section>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  ); 
}