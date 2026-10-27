'use client';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // لو الجهاز تاتش أو موبايل، نخرج فوراً ونلغي الأحداث
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a') || target.closest('.glass-panel')) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-4 h-4 rounded-full bg-[#C5A059] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 mix-blend-difference hidden md:block ${
        hovered ? 'scale-[3] bg-[#e0c079]' : 'scale-100'
      }`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}