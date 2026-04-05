import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StickyImage from '../StickyImage';
import FunFactsRightSide from '../FunFactsRightSide';

gsap.registerPlugin(ScrollTrigger);

export default function FunFacts() {
  useEffect(() => {
    // Ensure ScrollTrigger refreshes on mount
    ScrollTrigger.refresh();
  }, []);

  return (
    <section className="w-full py-12 sm:py-20 lg:py-32">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Container - Sticky Scroll Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-start">
          {/* Left Side - Sticky Image */}
          <StickyImage />

          {/* Right Side - Premium Cards */}
          <FunFactsRightSide />
        </div>
      </div>
    </section>
  );
}