'use client';
import React, { useState, useEffect } from 'react';
import { Clock, Send, CheckCircle2, MessageSquareHeart, Heart, User } from 'lucide-react';

interface Wish {
  id: number;
  name: string;
  message: string;
}

export default function CountdownAndRSVP() {
  // ضبط تاريخ الحفل على الجمعة 13-11-2026 الساعة 7:00 مساءً
  const targetDate = new Date('2026-11-13T19:00:00').getTime();
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

  // قائمة التهاني الافتراضية
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
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // 3. إرسال التهنئة إلى Google Sheets وإضافتها مباشرة في القائمة
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
      <div className="max-w-4xl w-full glass-panel p-6 md:p-12 rounded-[2.5rem] gold-border-glow bg-luxury-black/80 shadow-2xl relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-gold/5 via-transparent to-transparent pointer-events-none" />

        <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mx-auto mb-4 text-luxury-gold border border-luxury-gold/20">
          <Clock className="w-6 h-6" />
        </div>

        <h2 className="font-alexandria text-2xl md:text-4xl font-bold text-luxury-cream mb-2">
          تنازلي نحو بدايه خطوه العمر
        </h2>
        <p className="font-cairo text-xs md:text-sm text-luxury-gold mb-8 tracking-widest uppercase">
          العد التنازلي لحفل خطوبة مجدي ومنة — الجمعة 13 نوفمبر 2026 (7:00 مساءً)
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
            أرسل كلمة طيبة أو رسالة تهنئة لـ مجدي ومنة لتظهر فوراً في سجل المباركات بالأسفل.
          </p>

          {submitted ? (
            <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 flex flex-col items-center gap-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              <p className="font-alexandria font-bold text-lg">تم إرسال رسالتك بنجاح!</p>
              <p className="font-cairo text-xs text-emerald-300/80">شكراً لكلماتك الطيبة، ظهرت تهنئتك الآن بأسفل الصفحة.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-2 text-xs text-luxury-gold underline cursor-pointer hover:text-luxury-gold-light"
              >
                إرسال رسالة أخرى
              </button>
            </div>
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
                <span>{loading ? 'جاري التسجيل...' : 'إرسال التهنئة'}</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* قسم التعليقات والتهاني الثابت والمرتب */}
        <div className="w-full pt-8 border-t border-luxury-gold/20 text-right">
          <div className="flex items-center justify-between mb-6 px-2">
            <div className="flex items-center gap-2">
              <MessageSquareHeart className="w-5 h-5 text-luxury-gold" />
              <h4 className="font-alexandria text-lg font-bold text-luxury-cream">
                سجل تهاني الأحباء ({wishes.length})
              </h4>
            </div>
            <span className="font-cairo text-xs text-luxury-gold/80 bg-luxury-gold/10 px-3 py-1 rounded-full border border-luxury-gold/20">
              محدث بملف جوجل شيت
            </span>
          </div>

          {/* قائمة التعليقات بسكرول أنيق وقابلة للقراءة */}
          <div className="max-h-[380px] overflow-y-auto space-y-3 pl-1 pr-1 custom-scrollbar">
            {wishes.map((wish, index) => {
              const firstLetter = wish.name ? wish.name.trim().charAt(0) : 'م';
              return (
                <div
                  key={`${wish.id}-${index}`}
                  className="glass-panel p-4 rounded-2xl border border-luxury-gold/20 bg-luxury-black/40 flex items-start gap-3.5 shadow-sm hover:border-luxury-gold/40 transition-colors"
                >
                  {/* الأفاتار الشخصي */}
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/20 border border-luxury-gold/40 flex items-center justify-center text-luxury-gold font-alexandria font-bold text-sm shrink-0 mt-0.5">
                    {firstLetter}
                  </div>

                  {/* نص التعليق والاسم */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-alexandria text-sm font-bold text-luxury-gold truncate">
                        {wish.name}
                      </span>
                      <Heart className="w-3.5 h-3.5 text-luxury-gold/40 fill-luxury-gold/20 shrink-0" />
                    </div>
                    <p className="font-cairo text-xs md:text-sm text-luxury-cream/90 leading-relaxed break-words">
                      {wish.message}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}