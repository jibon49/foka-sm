
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import logo1 from '../../../assets/logoipsum/logoipsum-385.svg';
import logo2 from '../../../assets/logoipsum/logoipsum-388.svg';
import logo3 from '../../../assets/logoipsum/logoipsum-398.svg';
import logo4 from '../../../assets/logoipsum/logoipsum-400.svg';
import logo5 from '../../../assets/logoipsum/logoipsum-402.svg';
import logo6 from '../../../assets/logoipsum/logoipsum-406.svg';
import logo7 from '../../../assets/logoipsum/logoipsum-408.svg';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const HappyUsers = () => {
  const heroRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const hoverTlRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current || !buttonRef.current || !imageRef.current) return undefined;

    gsap.set(buttonRef.current, {
      left: '30px',
      bottom: '30px',
      top: 'auto',
      xPercent: 0,
      yPercent: 0,
      width: 'auto',
      height: '56px',
    });

    gsap.set(imageRef.current, {
      scale: 1,
      filter: 'blur(0px)',
      transformOrigin: 'center center',
    });

    hoverTlRef.current = gsap.timeline({ paused: true, defaults: { ease: 'power3.out', duration: 0.5 } })
      .to(imageRef.current, {
        scale: 1.05,
        filter: 'blur(4px)',
      }, 0)
      .to(buttonRef.current, {
        left: '50%',
        top: '50%',
        bottom: 'auto',
        xPercent: -50,
        yPercent: -50,
      }, 0);

    return () => {
      hoverTlRef.current?.kill();
      hoverTlRef.current = null;
    };
  }, []);

  const handleMouseEnter = () => {
    hoverTlRef.current?.play();
  };

  const handleMouseLeave = () => {
    hoverTlRef.current?.reverse();
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex justify-between mb-5 sm:mb-6 lg:mb-8">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.28em] text-gray-500 uppercase">
            HAPPY USERS
          </p>
          <p className='text-sm text-gray-500'>
            ©2025 Case-Themes™ Studio
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#eee] bg-white">
          {logos.map((logo, index) => (
            <div
              key={logo}
              className="flex h-30 items-center justify-center border border-[#eee] bg-white px-4"
            >
              <img
                src={logo}
                alt={`Happy user logo ${index + 1}`}
                className="h-7 sm:h-8 w-auto transition duration-300 hover:scale-105"
              />
            </div>
          ))}

          <div className="flex h-30 items-center justify-center border border-[#eee] bg-[#f7f7f7] px-4 text-center">
            <div className="space-y-1">
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-gray-500 uppercase">
                NEXT CAN BE YOU.
              </p>
              <p className="text-sm sm:text-base font-semibold tracking-[0.14em] text-gray-900 uppercase">
                LET’S TALK
              </p>
            </div>
          </div>
        </div>

        <div
          ref={heroRef}
          className="relative mt-10 sm:mt-12 overflow-hidden rounded-[24px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            ref={imageRef}
            src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img11.webp"
            alt="Interactive hero"
            className="h-full sm:h-120 lg:h-150 w-full object-cover"
          />

          <button
            ref={buttonRef}
            type="button"
            className="absolute z-10 inline-flex h-14 sm:h-16 w-max items-center gap-3 whitespace-nowrap rounded-full bg-white px-1 sm:px-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-black shadow-2xl leading-none"
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current ml-0.5" aria-hidden="true">
                <path d="M8 5v14l11-7-11-7z" />
              </svg>
            </span>
            PLAY REEL
          </button>
        </div>
      </div>
    </section>
  );
};

export default HappyUsers;