import { useEffect, useState } from 'react';

export default function BeggingCatAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex justify-center pointer-events-none">
      <div className="begging-cat-container">
        {/* Cat body */}
        <div className="relative w-32 h-32">
          {/* Cat head */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-[oklch(0.85_0.08_35)] to-[oklch(0.80_0.10_30)] rounded-full shadow-lg">
            {/* Ears */}
            <div className="absolute -top-3 left-2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[16px] border-b-[oklch(0.85_0.08_35)]" />
            <div className="absolute -top-3 right-2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[16px] border-b-[oklch(0.85_0.08_35)]" />
            
            {/* Inner ears */}
            <div className="absolute -top-2 left-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-[oklch(0.90_0.06_35)]" />
            <div className="absolute -top-2 right-3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-[oklch(0.90_0.06_35)]" />
            
            {/* Eyes - big pleading eyes */}
            <div className="absolute top-6 left-3 w-5 h-6 bg-[oklch(0.30_0.03_15)] rounded-full">
              <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full" />
              <div className="absolute bottom-1 left-1.5 w-1.5 h-1.5 bg-white/50 rounded-full" />
            </div>
            <div className="absolute top-6 right-3 w-5 h-6 bg-[oklch(0.30_0.03_15)] rounded-full">
              <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full" />
              <div className="absolute bottom-1 right-1.5 w-1.5 h-1.5 bg-white/50 rounded-full" />
            </div>
            
            {/* Tears */}
            <div className="tear tear-left absolute top-11 left-4 w-1.5 h-3 bg-[oklch(0.75_0.15_220)] rounded-full opacity-80" />
            <div className="tear tear-right absolute top-11 right-4 w-1.5 h-3 bg-[oklch(0.75_0.15_220)] rounded-full opacity-80" />
            
            {/* Nose */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-2 h-1.5 bg-[oklch(0.65_0.18_15)] rounded-full" />
            
            {/* Mouth - sad */}
            <div className="absolute top-14 left-1/2 -translate-x-1/2 w-6 h-2 border-b-2 border-[oklch(0.30_0.03_15)] rounded-b-full" />
            
            {/* Whiskers */}
            <div className="absolute top-11 left-0 w-6 h-0.5 bg-[oklch(0.40_0.03_15)] rounded-full opacity-40" />
            <div className="absolute top-12 left-0 w-5 h-0.5 bg-[oklch(0.40_0.03_15)] rounded-full opacity-40" />
            <div className="absolute top-11 right-0 w-6 h-0.5 bg-[oklch(0.40_0.03_15)] rounded-full opacity-40" />
            <div className="absolute top-12 right-0 w-5 h-0.5 bg-[oklch(0.40_0.03_15)] rounded-full opacity-40" />
          </div>
          
          {/* Cat body */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[oklch(0.85_0.08_35)] to-[oklch(0.80_0.10_30)] rounded-full shadow-lg" />
          
          {/* Begging paws */}
          <div className="begging-paw-left absolute bottom-8 left-2 w-6 h-8 bg-gradient-to-br from-[oklch(0.85_0.08_35)] to-[oklch(0.80_0.10_30)] rounded-full shadow-md">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-[oklch(0.90_0.06_35)] rounded-full" />
          </div>
          <div className="begging-paw-right absolute bottom-8 right-2 w-6 h-8 bg-gradient-to-br from-[oklch(0.85_0.08_35)] to-[oklch(0.80_0.10_30)] rounded-full shadow-md">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-[oklch(0.90_0.06_35)] rounded-full" />
          </div>
          
          {/* Tail */}
          <div className="absolute bottom-6 -right-4 w-12 h-3 bg-gradient-to-r from-[oklch(0.85_0.08_35)] to-[oklch(0.80_0.10_30)] rounded-full shadow-md tail-wag" />
        </div>
      </div>
    </div>
  );
}
