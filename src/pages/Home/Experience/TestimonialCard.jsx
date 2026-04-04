export default function TestimonialCard() {
  return (
    <div className="relative rounded-3xl overflow-hidden h-full min-h-96 sm:min-h-full hover:shadow-lg transition-all duration-300 group">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop"
        alt="Testimonial"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 lg:p-10">
        {/* Quote */}
        <div className="mb-4 sm:mb-6">
          <p className="text-xl sm:text-2xl font-funnel font-bold text-white leading-tight mb-4">
            "At Floka, we merge strategy, creativity, and technology to build solutions that matter."
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-pink-400 overflow-hidden">
            <img
              src="https://i.pravatar.cc/40?img=12"
              alt="Author"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-white font-inter">Merizo H. Yelso</p>
            <p className="text-xs text-gray-300 font-inter">CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
