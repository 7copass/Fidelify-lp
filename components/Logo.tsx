import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M16 4L28 10L16 16L4 10L16 4Z" fill="#1E293B" />
          <path d="M16 12L28 18L16 24L4 18L16 12Z" fill="#1E293B" fillOpacity="0.8" />
          <path d="M16 20L28 26L16 32L4 26L16 20Z" fill="#F59E0B" />
          <path d="M18 10L24 13" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <span className="text-xl font-bold text-[#374151] tracking-tight">
        Fidel<span className="text-gold">i</span>fy
      </span>
    </div>
  );
};