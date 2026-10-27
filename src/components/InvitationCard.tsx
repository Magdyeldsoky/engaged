'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export default function InvitationCard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [4, -4]);
  const rotateY = useTransform(x, [-100, 100], [-4, 4]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (isMobile) return;
    const card = event.currentTarget.getBoundingClientRect();
    const width = card.width;
    const height = card.height;
    const mouseX = event.clientX - card.left - width / 2;
    const mouseY = event.clientY - card.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="w-full py-16 md:py-24 px-4 flex flex-col items-center justify-center relative z-10">
      <div className="text-center mb-10">
        <h2 className="font-alexandria text-2xl md:text-3xl font-bold text-[#2C2A29]">
          بطاقة الدعوة
        </h2>
      </div>
      
      <div className="perspective-1000 w-full max-w-md px-2">
        <motion.div
          style={!isMobile ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="glass-panel w-full aspect-[3/4.2] md:aspect-[3/4] p-8 md:p-12 rounded-[2.5rem] relative flex flex-col justify-between shadow-2xl border border-[#C5A059]/40 text-center bg-[#F4F1EA]/90 overflow-hidden"
        >
          <div className="absolute inset-3 rounded-[2rem] border border-[#C5A059]/20 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#C5A059]/15 to-transparent rounded-t-[2.5rem] pointer-events-none" />
          
          <div className="flex justify-center mt-2 relative z-10">
            <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] shadow-inner">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>

          <div className="space-y-6 relative z-10 my-auto" style={!isMobile ? { transform: "translateZ(20px)" } : {}}>
            <h3 className="font-alexandria text-xl md:text-2xl font-bold tracking-wide text-[#2C2A29]">
              يسعدنا حضوركم
            </h3>
            
            <div className="w-16 h-[1px] bg-[#C5A059]/40 mx-auto" />

            <p className="font-cairo text-sm md:text-base text-[#2C2A29]/80 leading-loose max-w-sm mx-auto">
              يسعدنا ويشرفنا حضوركم حفل خطوبتنا ومشاركتنا فرحتنا بهذه الليلة المميزة.
            </p>

            <div className="pt-2 flex items-center justify-center gap-2 text-[#C5A059]">
              <Heart className="w-4 h-4 fill-current text-[#C5A059]" />
              <span className="font-alexandria text-xs uppercase tracking-widest font-bold text-[#2C2A29]/70">
                نتشرف بوجودكم
              </span>
              <Heart className="w-4 h-4 fill-current text-[#C5A059]" />
            </div>
          </div>

          <div className="relative z-10 pb-2" style={!isMobile ? { transform: "translateZ(10px)" } : {}}>
            <p className="font-alexandria text-xs md:text-sm text-[#C5A059] font-bold tracking-widest">
              مجدي ومنة
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}