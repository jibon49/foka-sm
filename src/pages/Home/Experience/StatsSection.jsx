import StatsCard from './StatsCard';
import TestimonialCard from './TestimonialCard';
import SocialCard from './SocialCard';
import ProgressCard from './ProgressCard';

export default function StatsSection() {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      {/* Container */}
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8">
          {/* Left Column - Stats Card */}
          <div className="lg:col-span-1">
            <StatsCard />
          </div>

          {/* Center Column - Testimonial Card */}
          <div className="lg:col-span-1">
            <TestimonialCard />
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="lg:col-span-1 flex flex-col gap-6 sm:gap-8">
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
