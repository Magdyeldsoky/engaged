'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function EnvelopeAnimation({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleOpenClick = () => {
    setOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1200); // مدة الأنيميشن قبل الدخول للموقع
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#FDFBF7] flex items-center justify-center p-4 overflow-hidden select-none">
      {/* خلفية جمالية */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4F1EA] to-[#FDFBF7] pointer-events-none" />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.2, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-md w-full glass-panel bg-[#F4F1EA] p-8 md:p-12 rounded-[2.5rem] border border-[#C5A059]/40 shadow-2xl text-center flex flex-col items-center"
      >
        <div className="w-12 h-12 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] mb-6 shadow-inner animate-bounce">
          <Sparkles className="w-6 h-6" />
        </div>

        <span className="font-cairo text-xs uppercase tracking-[0.2em] text-[#C5A059] font-bold mb-2">
          دعوة رسمية خاصة
        </span>
        
        <h2 className="font-alexandria text-2xl md:text-3xl font-bold text-[#2C2A29] mb-4">
          حفل خطوبة مجدي ومنة
        </h2>

        <p className="font-cairo text-sm text-[#2C2A29]/70 mb-8 leading-relaxed">
          يسعدنا أن تشاركونا أجمل لحظات عمرنا، اضغط بالأسفل لفتح بطاقة الدعوة والدخول.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpenClick}
          disabled={opening}
          className="w-full py-4 rounded-2xl bg-[#C5A059] text-[#FDFBF7] font-cairo font-bold text-base shadow-xl flex items-center justify-center gap-3 cursor-pointer hover:bg-[#b58f4a] transition-all"
        >
          <Heart className="w-5 h-5 fill-current" />
          <span>{opening ? 'جاري فتح الدعوة...' : 'افتح ظرف الدعوة الملكي'}</span>
        </motion.button>
      </motion.div>
    </div>
  );
}