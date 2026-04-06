import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HeroText from './HeroText';
import CircularText from './CircularText';
import FooterContent from './FooterContent';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const circleRef = useRef(null);
  const heroTextRef = useRef(null);

  // Circular text rotation based on scroll
  useEffect(() => {
    if (!circleRef.current) return;

    let rotation = 0;

    const scrollTrigger = ScrollTrigger.create({
      onUpdate: (self) => {
        rotation += self.direction * 3;
        gsap.to(circleRef.current, {
          rotate: rotation,
          ease: 'none',
          duration: 0.1,
        });
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  // Section entrance animation
  useEffect(() => {
    if (!footerRef.current) return;

    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="w-full bg-black text-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* HERO TEXT */}
      <div className="mx-auto max-w-7xl">
        <HeroText heroTextRef={heroTextRef} />

        {/* CIRCULAR TEXT WITH ARROW */}
        <CircularText circleRef={circleRef} />
      </div>

      {/* MIDDLE SECTION - Full Width */}
      <div className="flex flex-col lg:flex-row justify-around items-start gap-12 lg:gap-20 mt-20 pt-20 w-full">
          {/* LEFT SIDE - Image & Outlined Text */}
          <FooterContent />

          {/* RIGHT SIDE - Links & Contact */}
          <div className="flex flex-col lg:flex-row gap-12">
            <FooterLinks />
            <FooterContact />
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;