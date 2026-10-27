'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const islamicQuotes = [
  {
    text: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    sub: "سورة الروم (21)"
  },
  {
    text: "بارك الله لهما وبارك عليهما وجمع بينهما في خير",
    sub: "دعاء مبارك"
  },
  {
    text: "الحب ليس أن تنظر إلى أحدهم، بل أن تنظروا في نفس الاتجاه.",
    sub: "مجدي & منة"
  },
  {
    text: "وفي عينيكِ أرى عمراً يفيضُ طمأنينة وسلاماً.",
    sub: "مجدي & منة"
  },
  {
    text: "بداية لقصة أبدية كُتبت بقلبين نبضا معاً كجسد واحد.",
    sub: "حفل خطوبة 2026"
  },
  {
    text: "أنتِ الميثاق والعهد الجميل، وأنتِ المسكن والمأمن الدافئ.",
    sub: "مجدي & منة"
  }
];

export default function Quotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % islamicQuotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 md:py-20 px-4 text-center z-10 relative bg-luxury-black/30">
      <div className="max-w-3xl mx-auto min-h-[140px] flex flex-col items-center justify-center glass-panel p-6 md:p-8 rounded-2xl border border-luxury-gold/20 shadow-xl">
        <div className="w-8 h-8 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-4 text-luxury-gold">
          <Quote className="w-4 h-4 opacity-80" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <p className="font-cairo text-base md:text-xl text-luxury-cream font-medium leading-relaxed px-2">
              &ldquo;{islamicQuotes[index].text}&rdquo;
            </p>
            <p className="font-alexandria text-xs text-luxury-gold/70 tracking-widest uppercase">
              {islamicQuotes[index].sub}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}