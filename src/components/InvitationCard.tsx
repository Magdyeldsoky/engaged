'use client';
import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function InvitationCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [6, -6]);
  const rotateY = useTransform(x, [-100, 100], [-6, 6]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (window.innerWidth < 768) return; 
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
    <section className="w-full py-12 md:py-24 px-4 flex flex-col items-center justify-center z-10 relative">
      <h2 className="font-alexandria text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-luxury-gold">
        بطاقة الدعوة الرقمية
      </h2>
      
      <div className="perspective-1000 w-full max-w-sm md:max-w-md px-2">
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="glass-panel w-full aspect-[3/4.2] md:aspect-[3/4] p-6 md:p-10 rounded-[2.5rem] relative flex flex-col justify-between shadow-2xl border border-luxury-gold/30 text-center gold-border-glow bg-luxury-black/60"
        >
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-luxury-gold/10 to-transparent rounded-t-[2.5rem] pointer-events-none" />
          
          <div className="flex justify-center mt-2">
            <Sparkles className="w-6 h-6 text-luxury-gold opacity-80 animate-pulse" />
          </div>

          <div className="space-y-4 md:space-y-6" style={{ transform: "translateZ(20px)" }}>
            <p className="font-cairo text-xs text-luxury-gold tracking-[0.25em] uppercase font-semibold">
              دعوة خاصة لحفل خطوبة مجدي ومنة
            </p>
            <h3 className="font-alexandria text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-luxury-cream">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </h3>
            <p className="font-cairo text-sm md:text-base text-luxury-cream/80 leading-relaxed max-w-xs mx-auto px-1">
              &ldquo;وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً&rdquo;
            </p>
            <p className="font-cairo text-xs md:text-sm text-luxury-gold max-w-xs mx-auto font-medium leading-relaxed">
              يسعدنا ويشرفنا دعوتكم لحضور حفل خطوبتنا ومشاركتنا فرحتنا، وبحضوركم تكتمل بهجتنا.
            </p>
          </div>

          <div className="mb-2" style={{ transform: "translateZ(10px)" }}>
            <p className="font-alexandria text-xs md:text-base text-luxury-cream/50 font-light tracking-widest">
              العاقبة لديكم بالمسرات
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}