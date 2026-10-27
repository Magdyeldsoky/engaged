'use client';
import { motion } from 'framer-motion';
import { HeartHandshake, Sparkles, Star } from 'lucide-react';

export default function OurStory() {
  return (
    <section className="w-full py-20 px-4 flex flex-col items-center justify-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full glass-panel p-8 md:p-14 rounded-[3rem] border border-[#C5A059]/30 bg-[#F4F1EA]/80 shadow-xl text-center relative overflow-hidden"
      >
        <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center mx-auto mb-4 text-[#C5A059] border border-[#C5A059]/20">
          <HeartHandshake className="w-6 h-6" />
        </div>

        <h2 className="font-alexandria text-2xl md:text-4xl font-bold text-[#2C2A29] mb-3">
          بداية الحكاية
        </h2>
        <p className="font-cairo text-xs md:text-sm text-[#C5A059] uppercase tracking-widest mb-8 font-semibold">
          حين تلتقي القلوب على الود والوفاء
        </p>

        <div className="max-w-2xl mx-auto space-y-6 font-cairo text-sm md:text-base text-[#2C2A29]/80 leading-loose">
          <p>
            بين أقدار تحققت وخطوات كتبت نحو مستقبل مشترك، التقت القلوب وجمعنا الحب على طاعة الله ورضاه.
          </p>
          <p>
            واليوم، بكل الحب والفخر، نخطو أولى خطواتنا الرسمية نحو ليلة العمر، ويسعدنا جداً أن تكونوا جزءاً لا يتجزأ من هذه الفرحة المباركة.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-[#C5A059]">
          <Star className="w-4 h-4 fill-current" />
          <span className="font-alexandria font-bold text-sm">مجدي & منة • 2026</span>
          <Star className="w-4 h-4 fill-current" />
        </div>
      </motion.div>
    </section>
  );
}