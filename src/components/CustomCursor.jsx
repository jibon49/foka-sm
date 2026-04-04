import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    // Helper function to safely check if element is interactive
    const isInteractive = (el) => {
      if (!el || !(el instanceof Element)) return false;
      try {
        return (
          el.tagName === 'A' ||
          el.tagName === 'BUTTON' ||
          el.classList.contains('interactive') ||
          !!el.closest('a') ||
          !!el.closest('button')
        );
      } catch (e) {
        return false;
      }
    };

    // Handle mouse move
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      // Inner dot follows exactly (no delay)
      gsap.set(innerRef.current, {
        x: mouseX.current,
        y: mouseY.current,
      });

      // Outer circle follows with smooth lag effect
      gsap.to(outerRef.current, {
        x: mouseX.current,
        y: mouseY.current,
        duration: 0.3,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    // Handle mouse enter (hover over interactive elements)
    const handleMouseEnter = (e) => {
      if (isInteractive(e.target)) {
        gsap.to(outerRef.current, {
          scale: 1.5,
          borderColor: '#ffffff',
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    // Handle mouse leave
    const handleMouseLeave = (e) => {
      if (isInteractive(e.target)) {
        gsap.to(outerRef.current, {
          scale: 1,
          borderColor: '#000000',
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    // Handle mouse down (click)
    const handleMouseDown = () => {
      gsap.to(outerRef.current, {
        scale: 0.8,
        duration: 0.15,
        ease: 'back.out',
      });
    };

    // Handle mouse up
    const handleMouseUp = () => {
      gsap.to(outerRef.current, {
        scale: 1,
        duration: 0.2,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <div
        ref={outerRef}
        className="fixed w-8 h-8 border-2 border-black rounded-full pointer-events-none z-9999 transition-colors duration-300"
        style={{
          transform: 'translate(-50%, -50%)',
          top: 0,
          left: 0,
        }}
      />

      {/* Inner Dot */}
      <div
        ref={innerRef}
        className="fixed w-2 h-2 bg-black rounded-full pointer-events-none z-9999"
        style={{
          transform: 'translate(-50%, -50%)',
          top: 0,
          left: 0,
        }}
      />
    </>
  );
}
