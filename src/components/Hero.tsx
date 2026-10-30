'use client';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Calendar, MapPin, MessageSquareHeart, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 overflow-hidden z-10">
      
      {/* خلفية جمالية تفاعلية بوهج ذهبي خفيف */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-[#C5A059]/10 blur-[120px] animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-3xl w-full glass-panel p-8 md:p-14 rounded-[3rem] border border-[#C5A059]/30 shadow-2xl text-center relative overflow-hidden bg-[#F4F1EA]/80 backdrop-blur-xl flex flex-col justify-between"
      >
        <div>
          {/* شريط زينة علوي */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#C5A059] animate-bounce" />
            <span className="font-cairo text-xs md:text-sm uppercase tracking-[0.25em] text-[#C5A059] font-semibold">
              دعوة حفل خطوبة مباركة
            </span>
            <Sparkles className="w-4 h-4 text-[#C5A059] animate-bounce" />
          </div>

          {/* آية أو جملة افتتاحية رقيقة */}
          <p className="font-cairo text-xs md:text-sm text-[#2C2A29]/70 mb-6 italic">
            &ldquo;وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً&rdquo;
          </p>

          {/* أسماء العروسين بتصميم ملكي ضخم */}
          <div className="my-6 space-y-3">
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-alexandria text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#2C2A29] tracking-tight"
            >
              مجدي
            </motion.h1>

            <div className="flex items-center justify-center gap-4 py-2">
              <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
              <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] shadow-inner animate-pulse">
                <Heart className="w-5 h-5 fill-[#C5A059]" />
              </div>
              <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
            </div>

            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-alexandria text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#2C2A29] tracking-tight"
            >
              منة
            </motion.h1>
          </div>

          {/* التاريخ المحدث متطابق مع العداد */}
          <div className="mt-4 mb-8 inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#FDFBF7] border border-[#C5A059]/20 shadow-sm">
            <Calendar className="w-4 h-4 text-[#C5A059]" />
            <span className="font-cairo text-xs md:text-sm font-medium text-[#2C2A29]/90">
              نتشرف بحضوركم في حفل خطوبتنا يوم الجمعة 13 نوفمبر 2026
            </span>
          </div>

          {/* أزرار التنقل السريعة الاحترافية */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
            <button
              onClick={() => scrollToSection('invitation')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#C5A059] text-[#FDFBF7] font-cairo font-bold text-sm hover:bg-[#b58f4a] transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>بطاقة الدعوة</span>
            </button>

            <button
              onClick={() => scrollToSection('venue')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#FDFBF7] text-[#2C2A29] border border-[#C5A059]/40 font-cairo font-bold text-sm hover:bg-[#C5A059]/10 transition-all duration-300 shadow-md hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              <span>موقع الحفل</span>
            </button>

            <button
              onClick={() => scrollToSection('rsvp')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#2C2A29] text-[#FDFBF7] border border-[#C5A059]/40 font-cairo font-bold text-sm hover:bg-[#C5A059] hover:text-[#2C2A29] transition-all duration-300 shadow-md hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
            >
              <MessageSquareHeart className="w-4 h-4 text-[#C5A059]" />
              <span>اكتب تهنئتك</span>
            </button>
          </div>
        </div>

        {/* مؤشر السكرول بالأسهم المتحركة */}
        <div 
          onClick={() => scrollToSection('quotes')}
          className="w-full flex flex-col items-center justify-center pt-2 cursor-pointer opacity-75 hover:opacity-100 transition-opacity"
        >
          <span className="font-cairo text-[11px] text-[#C5A059] tracking-widest mb-1 font-medium">
            اسحب للمزيد
          </span>
          <div className="flex flex-col items-center">
            <ChevronDown className="w-5 h-5 text-[#C5A059] animate-bounce -mb-2" />
            <ChevronDown className="w-4 h-4 text-[#C5A059]/60 animate-bounce delay-100" />
          </div>
        </div>

      </motion.div>
    </section>
  );
}