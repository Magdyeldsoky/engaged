'use client';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function Closing() {
  return (
    <footer className="w-full py-20 px-4 text-center relative z-10 bg-gradient-to-t from-[#F4F1EA] to-[#FDFBF7] border-t border-[#C5A059]/20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-xl mx-auto space-y-6"
      >
        <div className="w-12 h-12 rounded-full bg-[#C5A059]/20 flex items-center justify-center mx-auto text-[#C5A059] shadow-inner animate-pulse">
          <Heart className="w-6 h-6 fill-current" />
        </div>

        <h2 className="font-alexandria text-2xl md:text-3xl font-bold text-[#2C2A29]">
          نسعد بحضوركم وتشاركونا الفرحة
        </h2>

        <p className="font-cairo text-sm text-[#2C2A29]/70 leading-relaxed">
          وجودكم معنا يضيف لرونق الليلة بريقاً خاصاً.. ننتظركم بكل حب وشوق.
        </p>

        <div className="w-24 h-[1px] bg-[#C5A059]/40 mx-auto" />

        <div className="flex items-center justify-center gap-3 font-alexandria text-xl font-bold text-[#2C2A29]">
          <span>مجدي</span>
          <span className="text-[#C5A059]">🩵</span>
          <span>منة</span>
        </div>

        <p className="font-cairo text-xs text-[#2C2A29]/50 tracking-wider">
          جميع الحقوق محفوظة • حفل خطوبة مجدي ومنة 2026
        </p>
      </motion.div>
    </footer>
  );
}