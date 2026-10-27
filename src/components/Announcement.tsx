'use client';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function Announcement() {
  return (
    <section className="w-full py-12 md:py-24 px-4 flex justify-center items-center z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="glass-panel max-w-2xl w-full p-6 md:p-12 rounded-2xl md:rounded-3xl text-center gold-border-glow"
      >
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mx-auto mb-4 md:mb-6 text-luxury-gold">
          <Calendar className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        
        <h2 className="font-alexandria text-xl md:text-3xl font-bold text-luxury-cream mb-2 md:mb-4">
          موعد الحفل الكبير
        </h2>
        
        <p className="font-cairo text-lg md:text-xl text-luxury-gold font-medium tracking-wide mb-2">
          سيتم الإعلان عنه قريبًا جداً
        </p>
        
        <p className="font-cairo text-xs md:text-sm text-luxury-cream/50 max-w-md mx-auto leading-relaxed px-2">
          نحن في صدد الترتيبات الأخيرة لتنظيم ليلة تليق بحضوركم الكريم. سنقوم بإرسال التفاصيل والموعد المحدد مباشرة فور اعتماده.
        </p>
      </motion.div>
    </section>
  );
}