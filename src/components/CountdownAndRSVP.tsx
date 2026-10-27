'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Send, CheckCircle2, MessageSquareHeart } from 'lucide-react';

interface Wish {
  id: number;
  name: string;
  message: string;
}

export default function CountdownAndRSVP() {
  const targetDate = new Date('2026-06-15T20:00:00').getTime();
  const SHEET_API_URL = 'https://api.sheetbest.com/sheets/3d9b5f29-6df8-41d4-bff9-f43608ba3983';

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [guestName, setGuestName] = useState('');
  const [guestMessage, setGuestMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // قائمة التهاني الافتراضية لحين تحميل البيانات من السحابة
  const [wishes, setWishes] = useState<Wish[]>([
    { id: 1, name: 'أحمد ومي', message: 'ألف مبروك يا مجدي ويا منة، ربنا يتمم لكم على خير! ❤️' },
    { id: 2, name: 'عمر مصطفى', message: 'أجمل عروسين في الدنيا، مبارك الخطوبة! 💍' }
  ]);

  // 1. جلب التهاني المسجلة سحابياً في Google Sheets عند فتح الموقع
  useEffect(() => {
    fetch(SHEET_API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const formattedWishes = data
            .filter((item: any) => item.message && item.message.trim() !== '')
            .map((item: any, index: number) => ({
              id: index,
              name: item.name || 'مهنئ عزيز',
              message: item.message,
            }));
          if (formattedWishes.length > 0) {
            setWishes(formattedWishes.reverse());
          }
        }
      })
      .catch((err) => console.error("Error fetching wishes from Sheet.best:", err));
  }, []);

  // 2. تحديث العداد التنازلي كل ثانية
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // 3. إرسال التهنئة إلى Google Sheets وإضافتها مباشرة للشريط
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestMessage.trim()) return;

    setLoading(true);

    const newWishData = {
      name: guestName.trim() || 'مهنئ عزيز',
      message: guestMessage.trim(),
    };

    try {
      await fetch(SHEET_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWishData),
      });

      const newWish: Wish = {
        id: Date.now(),
        ...newWishData,
      };

      setWishes((prev) => [newWish, ...prev]);
      setSubmitted(true);
      setGuestName('');
      setGuestMessage('');
    } catch (error) {
      console.error("خطأ في حفظ التهنئة سحابياً:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 flex flex-col items-center justify-center z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full glass-panel p-6 md:p-12 rounded-[2.5rem] gold-border-glow bg-luxury-black/80 shadow-2xl relative overflow-hidden text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-gold/5 via-transparent to-transparent pointer-events-none" />

        <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mx-auto mb-4 text-luxury-gold border border-luxury-gold/20">
          <Clock className="w-6 h-6 animate-spin-slow" />
        </div>

        <h2 className="font-alexandria text-2xl md:text-4xl font-bold text-luxury-cream mb-2">
          تنازلّي نحو بدايه خطوه العمر
        </h2>
        <p className="font-cairo text-sm text-luxury-gold mb-8 tracking-widest uppercase">
          عد التنازلي لحفل خطوبة مجدي ومنة
        </p>

        {/* خانات العد التنازلي */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-12">
          {[
            { label: "يوم", value: timeLeft.days },
            { label: "ساعة", value: timeLeft.hours },
            { label: "دقيقة", value: timeLeft.minutes },
            { label: "ثانية", value: timeLeft.seconds }
          ].map((item, idx) => (
            <div key={idx} className="glass-panel p-4 md:p-6 rounded-2xl border border-luxury-gold/20 bg-luxury-black/50 shadow-inner">
              <span className="font-alexandria text-3xl md:text-5xl font-extrabold text-luxury-gold block mb-1">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="font-cairo text-xs md:text-sm text-luxury-cream/75 tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent mx-auto mb-10" />

        {/* نموذج كتابة التهنئة وتأكيد الحضور */}
        <div className="max-w-md mx-auto mb-12">
          <h3 className="font-alexandria text-xl font-bold text-luxury-cream mb-2 flex items-center justify-center gap-2">
            <MessageSquareHeart className="w-5 h-5 text-luxury-gold" />
            <span>شاركونا أمنياتكم وتهانيكم</span>
          </h3>
          <p className="font-cairo text-xs md:text-sm text-luxury-cream/60 mb-6">
            أرسل كلمة طيبة أو رسالة تهنئة لـ مجدي ومنة لتظهر مباشرة في الشريط الشرفي وتسجل سحابياً.
          </p>

          {submitted ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-panel p-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 flex flex-col items-center gap-2"
            >
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              <p className="font-alexandria font-bold text-lg">تمت إرسال رسالتك وتأكيد حضورك!</p>
              <p className="font-cairo text-xs text-emerald-300/80">شكراً لكلماتك الرائعة، تم إدراج تهنئتك بنجاح.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs text-luxury-gold underline cursor-pointer hover:text-luxury-gold-light"
              >
                إرسال رسالة أخرى
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="اسمك الكريم (اختياري)..."
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="px-5 py-3 rounded-xl bg-luxury-black/60 border border-luxury-gold/30 text-luxury-cream font-cairo placeholder:text-luxury-cream/30 focus:outline-none focus:border-luxury-gold transition-colors text-sm"
              />
              <textarea
                rows={3}
                placeholder="اكتب تهنئتك الجميلة للعروسين هنا..."
                value={guestMessage}
                onChange={(e) => setGuestMessage(e.target.value)}
                required
                className="px-5 py-3 rounded-xl bg-luxury-black/60 border border-luxury-gold/30 text-luxury-cream font-cairo placeholder:text-luxury-cream/30 focus:outline-none focus:border-luxury-gold transition-colors text-sm resize-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3.5 rounded-xl bg-luxury-gold text-luxury-black font-cairo font-bold text-sm hover:bg-luxury-gold-light transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-1 disabled:opacity-50"
              >
                <span>{loading ? 'جاري الإرسال والتسجيل...' : 'إرسال التهنئة وتأكيد الحضور'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* الشريط الوثائقي المتحرك */}
        <div className="w-full pt-6 border-t border-luxury-gold/20 relative overflow-hidden">
          <div className="flex items-center gap-2 justify-center mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <p className="font-alexandria text-xs text-luxury-gold tracking-widest uppercase font-semibold">
              شريط تهاني الأحباء والمحبيّن (بث مباشر سحابي)
            </p>
          </div>

          <div className="w-full overflow-hidden flex relative py-2">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-luxury-black/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-luxury-black/90 to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-6 whitespace-nowrap min-w-full"
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...wishes, ...wishes].map((wish, index) => (
                <div
                  key={`${wish.id}-${index}`}
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-panel border border-luxury-gold/30 bg-luxury-black/40 text-right shadow-sm"
                >
                  <span className="font-alexandria text-xs font-bold text-luxury-gold">
                    {wish.name}:
                  </span>
                  <span className="font-cairo text-xs text-luxury-cream/90 font-light">
                    &ldquo;{wish.message}&rdquo;
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}