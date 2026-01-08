"use client";
import { motion } from 'framer-motion';
import { Highlight } from './Highlight';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative px-10 md:px-20">
      {/* Background Watermark */}
    {/* <motion.div
      className="absolute right-0 -bottom-8 text-[25vw] font-bold text-outline select-none leading-none z-0 italic pointer-events-none
                mask-[linear-gradient(to_top,transparent_0%,black_40%)]
                [webkit-mask-image:linear-gradient(to_top,transparent_0%,black_40%)]"
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 0.5, x: -50 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
    >
      Hi
    </motion.div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 w-full z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <span className="text-2xl font-light mb-2 italic">I'm ,</span>
          <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8">
            Sanuth<br />Kalhan<br />Wanniarachchi
          </h1>
          <p className="max-w-xl  text-gray-600 leading-relaxed">
            Software Engineering undergraduate focused on{" "}
            <Highlight mode="load" delay={0.2}>Machine Learning</Highlight> and{" "}
            <Highlight mode="load" delay={0.4}>AI-driven system design</Highlight>. Passionate about
            solving real-world problems through clean code and efficient data architecture,
            with an interest in designing clean, aesthetic{" "}
            <Highlight mode="load" delay={0.6}>user interfaces</Highlight>.
          </p>

        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="relative h-125 w-full mt-12 md:mt-0"
        >
          {/* Your Dithered/Particle Image goes here */}
          <div className="w-full h-full bg-black/5 rounded-sm overflow-hidden relative">
             <img 
               src="/assets/sanuth-portrait.webp" 
               alt="Sanuth Kalhan"
               className="object-cover w-full h-full"
             />
             <div className="absolute inset-0 bg-linear-to-t from-[#f8f8f8] via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}