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
      {/* المؤشر المخصص يعمل على الكمبيوتر فقط لتفادي تهنيج التاتش على الموبايل */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>
      
      {!envelopeOpened ? (
        <EnvelopeAnimation onOpen={() => setEnvelopeOpened(true)} />
      ) : (
        <main className="relative min-h-screen w-full overflow-x-hidden select-none bg-[#FDFBF7] text-[#2C2A29] transition-opacity duration-700">
          <Header />
          
          <div id="hero" className="relative">
            {/* إلغاء الـ 3D من الموبايل لضمان نعومة وسلاسة السكرول 100% */}
            <div className="hidden md:block">
              <Hero3D />
            </div>
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