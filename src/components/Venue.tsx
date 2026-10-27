'use client';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export default function Venue() {
  const mapUrl = "https://maps.app.goo.gl/48uyU5m684Mf6QLn7";

  return (
    <section className="w-full py-12 md:py-24 px-4 flex justify-center items-center z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="glass-panel max-w-4xl w-full p-6 md:p-12 rounded-2xl md:rounded-3xl text-center gold-border-glow bg-luxury-black/70 shadow-2xl relative overflow-hidden"
      >
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mx-auto mb-4 md:mb-6 text-luxury-gold border border-luxury-gold/20">
          <MapPin className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        
        <h2 className="font-alexandria text-xl md:text-3xl font-bold text-luxury-cream mb-2 md:mb-4">
          موقع حفل الخطوبة
        </h2>

        <p className="font-cairo text-luxury-gold font-medium text-sm md:text-base mb-6 md:mb-8">
          حفل خطوبة مجدي ❤️ منة
        </p>
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="text-center lg:text-right space-y-4 order-2 lg:order-1">
            <h3 className="font-alexandria text-lg md:text-xl font-semibold text-luxury-cream">
              يسعدنا حضوركم ومشاركتنا فرحتنا
            </h3>
            <p className="font-cairo text-luxury-cream/70 leading-relaxed text-xs md:text-sm">
              يمكنكم الضغط على الزر أدناه للحصول على الاتجاهات المباشرة عبر خرائط جوجل والوصول لـ قاعة الحفل بكل سهولة.
            </p>

            <div className="pt-2">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-luxury-gold text-luxury-black font-cairo font-bold text-sm hover:bg-luxury-gold-light transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Navigation className="w-4 h-4" />
                <span>فتح الموقع في الخرائط</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
          
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full h-44 md:h-56 rounded-xl md:rounded-2xl bg-luxury-black/50 border border-luxury-gold/30 flex flex-col items-center justify-center p-6 text-center order-1 lg:order-2 shadow-inner relative overflow-hidden hover:border-luxury-gold transition-all duration-300"
          >
            <div className="absolute inset-0 bg-luxury-gold/5 group-hover:bg-luxury-gold/10 transition-colors duration-300" />
            <div className="w-12 h-12 rounded-full bg-luxury-gold/20 flex items-center justify-center text-luxury-gold mb-3 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-6 h-6 animate-bounce" />
            </div>
            <p className="font-alexandria text-sm md:text-base text-luxury-cream font-semibold mb-1">
              انقر للمعاينة والاتجاهات
            </p>
            <span className="font-cairo text-xs text-luxury-gold/80 flex items-center gap-1">
              Google Maps <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}