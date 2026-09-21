import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient glowing radial light spots */}
      <div className="absolute top-[-10%] left-[15%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[700px] h-[700px] rounded-full bg-emerald-500/08 blur-[160px] pointer-events-none" />
      <div className="absolute top-[60%] left-[45%] w-[450px] h-[450px] rounded-full bg-amber-500/06 blur-[130px] pointer-events-none" />

      {/* Cyber grid lines overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* Subtle vignette border */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 via-transparent to-[#050816] pointer-events-none" />
    </div>
  );
}
