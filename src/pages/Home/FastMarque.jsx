

const FastMarque = () => {
  const marqueeText = "Creativity and Strategy, see how our work has helped our clients achieve their goals. Explore our case studies and discover the impact we've made across various industries. ";

  return (
    <div className="w-full overflow-hidden py-6 sm:py-8 lg:py-12"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
      }}
    >
      <div className="relative flex whitespace-nowrap">
        {/* Animated Text Container */}
        <div
          className="flex gap-12 animate-marquee"
          style={{
            animation: 'marquee 10s linear infinite',
          }}
        >
          <span className="text-lg sm:text-2xl lg:text-7xl text-gray-800 font-funnel">
            {marqueeText}
          </span>
          <span className="text-lg sm:text-2xl lg:text-7xl text-gray-800 font-funnel">
            {marqueeText}
          </span>
        </div>

        {/* CSS Animation */}
        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            width: 200%;
          }
        `}</style>
      </div>
    </div>
  );
};

export default FastMarque;