"use client";

export default function VisualBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* 1. The Engineering Grid (The structured FinTech side) */}
      <div className="absolute inset-0 bg-grid-pattern bg-size[60px_60px]" />

      {/* 2. Soft Emerald Glows (The AI/AgTech side) */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-40 animate-pulse"
        style={{ background: 'radial-gradient(circle, rgba(0,200,150,0.1) 0%, transparent 70%)' }}
      />
      
      {/* 3. The Physical Grain / Satellite Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}