'use client';
import { motion } from 'framer-motion';
import { Camera, Sparkles } from 'lucide-react';

export default function Gallery() {
  const images = [
    { title: "لحظات مميزة", subtitle: "ذكرى أول الخطوات" },
    { title: "فرحة العمر", subtitle: "بداية الحكاية" },
    { title: "سويّاً للأبد", subtitle: "قلب واحد وفكر واحد" },
  ];

  return (
    <section className="w-full py-20 px-4 flex flex-col items-center justify-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-5xl w-full text-center"
      >
        <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center mx-auto mb-4 text-[#C5A059] border border-[#C5A059]/20">
          <Camera className="w-6 h-6" />
        </div>

        <h2 className="font-alexandria text-2xl md:text-4xl font-bold text-[#2C2A29] mb-2">
          معرض الذكريات
        </h2>
        <p className="font-cairo text-xs md:text-sm text-[#C5A059] uppercase tracking-widest mb-12 font-semibold">
          لقطات من رحلتنا السعيدة
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8 }}
              className="glass-panel p-6 rounded-3xl border border-[#C5A059]/30 bg-[#F4F1EA]/70 shadow-lg flex flex-col items-center justify-center h-64 text-center group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#C5A059]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-16 h-16 rounded-full bg-[#C5A059]/15 flex items-center justify-center text-[#C5A059] mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-alexandria font-bold text-lg text-[#2C2A29] mb-1">{item.title}</h3>
              <p className="font-cairo text-xs text-[#C5A059] font-medium">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}