'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import EnvelopeAnimation from '@/components/EnvelopeAnimation';
import Hero from '@/components/Hero';
import Quotes from '@/components/Quotes';
import OurStory from '@/components/OurStory';
import InvitationCard from '@/components/InvitationCard';
import Venue from '@/components/Venue';
import CountdownAndRSVP from '@/components/CountdownAndRSVP';
import Closing from '@/components/Closing';

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const Hero3D = dynamic(() => import('@/components/Hero3D'), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      if (window.innerWidth >= 768 && !window.matchMedia('(pointer: coarse)').matches) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-[#C5A059] border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <>
      {!isMobile && <CustomCursor />}
      
      {!envelopeOpened ? (
        <EnvelopeAnimation onOpen={() => setEnvelopeOpened(true)} />
      ) : (
        <main className="relative min-h-screen w-full overflow-x-hidden select-none bg-[#FDFBF7] text-[#2C2A29]">
          <Header />
          
          <div id="hero" className="relative">
            {!isMobile && <Hero3D />}
            <Hero />
          </div>

          <div id="quotes">
            <Quotes />
          </div>

          <div id="our-story">
            <OurStory />
          </div>

          <div id="invitation">
            <InvitationCard />
          </div>

          <div id="venue">
            <Venue />
          </div>

          <div id="rsvp">
            <CountdownAndRSVP />
          </div>

          <div id="closing">
            <Closing />
          </div>
        </main>
      )}
    </>
  );
}