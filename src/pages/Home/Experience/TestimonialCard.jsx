export default function TestimonialCard() {
  return (
    <div 
      className="relative w-full max-w-[700px] min-h-72 sm:min-h-96 lg:min-h-[420px] bg-black rounded-3xl overflow-visible hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] mx-auto lg:mx-0"
    >
      {/* Person Image (Transparent PNG - Overflows Top) */}
      <img
        src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-author-img1.webp"
        alt="Person"
        className="absolute bottom-0 h-[110%] sm:h-[115%] lg:h-[120%] w-auto object-contain left-0"
      />

      {/* Bottom Fade Overlay - Image fades to black */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: '60%',
          background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* Inner Shadow for Depth */}
      <div
        className="absolute inset-0"
        style={{
          boxShadow: 'inset 0 -80px 100px rgba(0,0,0,0.6)',
        }}
      />

      {/* Top Right Badges */}
      <div 
        className="absolute flex flex-col gap-2 sm:gap-3 lg:gap-4 z-20"
        style={{ top: 'clamp(1rem, 5%, 2rem)', right: 'clamp(1rem, 5%, 2rem)' }}
      >
        <img
          src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon1.svg"
          alt="Award Badge"
          className="h-auto object-contain"
          style={{ width: 'clamp(80px, 20vw, 120px)' }}
        />
        <img
          src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon2.svg"
          alt="Certified Badge"
          className="h-auto object-contain"
          style={{ width: 'clamp(80px, 20vw, 120px)' }}
        />
      </div>

      {/* Bottom Left Quote and Author */}
      <div 
        className="absolute z-20 max-w-xs sm:max-w-sm lg:max-w-md"
        style={{ left: 'clamp(1.5rem, 8%, 2.5rem)', bottom: 'clamp(1.5rem, 8%, 2.5rem)' }}
      >
        {/* Quote */}
        <p 
          className="text-white font-funnel font-bold leading-[1.4] mb-2 sm:mb-3 lg:mb-[10px]"
          style={{ fontSize: 'clamp(14px, 4vw, 22px)' }}
        >
          "At Floka, we merge strategy, creativity, and technology to shape brands that people love."
        </p>

        {/* Author */}
        <p 
          className="font-inter"
          style={{ color: '#aaa', fontSize: 'clamp(12px, 2.5vw, 14px)' }}
        >
          Merizo H. Yelso / CEO
        </p>
      </div>
    </div>
  );
}
