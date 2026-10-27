'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, MessageSquare, Mail, Clock } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // الأقسام الأساسية فقط بدون حشو
  const navLinks = [
    { name: 'بطاقة الدعوة', id: 'invitation', icon: Mail },
    { name: 'التهاني والعداد', id: 'rsvp', icon: Clock },
    { name: 'موقع الحفل', id: 'venue', icon: MapPin },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 py-3 ${
          scrolled ? 'top-2 md:top-4' : 'top-0'
        }`}
      >
        <div
          className={`w-full max-w-4xl rounded-full transition-all duration-500 px-6 py-3 flex items-center justify-between ${
            scrolled
              ? 'glass-panel bg-[#F4F1EA]/90 border border-[#C5A059]/40 shadow-lg backdrop-blur-md'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* اسم العروسين */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <span className="font-alexandria font-bold text-lg md:text-xl text-[#2C2A29]">
              مجدي <span className="text-[#C5A059] group-hover:scale-125 transition-transform duration-300 inline-block">🩵</span> منة
            </span>
          </button>

          {/* روابط الأقسام الأساسية للكمبيوتر */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-5 py-2 rounded-full font-cairo text-sm font-medium text-[#2C2A29]/80 hover:text-[#C5A059] hover:bg-[#C5A059]/10 transition-all cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* زر التهنئة السريع */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection('rsvp')}
              className="px-5 py-2 rounded-full bg-[#C5A059] text-[#FDFBF7] font-cairo font-bold text-xs hover:bg-[#e0c079] hover:text-[#2C2A29] transition-all shadow-md cursor-pointer flex items-center gap-1.5 hover:scale-105"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>اكتب تهنئة</span>
            </button>
          </div>

          {/* زر قائمة الموبايل */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#2C2A29] hover:bg-[#C5A059]/10 transition-colors cursor-pointer"
            aria-label="القائمة"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* منيو الموبايل الجانبي */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden glass-panel bg-[#F4F1EA]/95 rounded-3xl p-6 border border-[#C5A059]/30 shadow-2xl flex flex-col gap-3 text-center"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="flex items-center justify-center gap-3 py-3 px-4 rounded-xl font-cairo text-base font-semibold text-[#2C2A29] hover:bg-[#C5A059]/15 hover:text-[#C5A059] transition-all cursor-pointer"
                  >
                    <Icon className="w-4 h-4 text-[#C5A059]" />
                    <span>{link.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="w-full h-[1px] bg-[#C5A059]/20 my-1" />

            <button
              onClick={() => scrollToSection('rsvp')}
              className="w-full py-3 rounded-xl bg-[#C5A059] text-[#FDFBF7] font-cairo font-bold text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>أرسل تهنئة وتأكيد حضور</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}