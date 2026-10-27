'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import CustomCursor from '@/components/CustomCursor';
import EnvelopeAnimation from '@/components/EnvelopeAnimation';
import Hero3D from '@/components/Hero3D';
import Hero from '@/components/Hero';
import Quotes from '@/components/Quotes';
import OurStory from '@/components/OurStory';
import InvitationCard from '@/components/InvitationCard';
import Venue from '@/components/Venue';
import CountdownAndRSVP from '@/components/CountdownAndRSVP';
import Closing from '@/components/Closing';

export default function Home() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  return (
    <>
      <CustomCursor />
      
      {!envelopeOpened ? (
        /* 1. ظرف الدعوة الملكي يظهر أولاً */
        <EnvelopeAnimation onOpen={() => setEnvelopeOpened(true)} />
      ) : (
        /* 2. الموقع الرئيسي يفتح بعد فتح الظرف */
        <main className="relative min-h-screen w-full overflow-hidden select-none bg-[#FDFBF7] text-[#2C2A29] transition-opacity duration-1000">
          <Header />
          
          {/* الواجهة و 3D */}
          <div id="hero">
            <Hero3D />
            <Hero />
          </div>

          {/* الآيات والأقوال */}
          <div id="quotes">
            <Quotes />
          </div>

          {/* قصة البداية */}
          <div id="our-story">
            <OurStory />
          </div>

          {/* بطاقة الدعوة */}
          <div id="invitation">
            <InvitationCard />
          </div>

          {/* موقع الحفل والخرائط */}
          <div id="venue">
            <Venue />
          </div>

          {/* حائط التهاني والعد التنازلي (السحابي) */}
          <div id="rsvp">
            <CountdownAndRSVP />
          </div>

          {/* الخاتمة الملكية والفوتر */}
          <div id="closing">
            <Closing />
          </div>
        </main>
      )}
    </>
  );
}