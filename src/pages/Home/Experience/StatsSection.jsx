import StatsCard from './StatsCard';
import TestimonialCard from './TestimonialCard';
import SocialCard from './SocialCard';
import ProgressCard from './ProgressCard';

export default function StatsSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      {/* Container */}
      <div className="max-w-full lg:max-w-7xl mx-auto">
        {/* Grid Layout - Mobile: 1 col, Desktop: 3 col with center wider */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,1fr)_minmax(700px,1fr)_minmax(280px,1fr)] gap-6 sm:gap-6 lg:gap-2">
          {/* Left Column - Stats Card */}
          <div className="h-full w-full">
            <StatsCard />
          </div>

          {/* Center Column - Testimonial Card */}
          <div className="h-full w-full flex justify-center">
            <TestimonialCard />
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="flex flex-col gap-6 sm:gap-6 lg:gap-6 h-full w-full">
            {/* Social Card */}
            <div>
              <SocialCard />
            </div>

            {/* Progress Card */}
            <div>
              <ProgressCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
