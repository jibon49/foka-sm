import Experice from './Experience/Experice';
import FastMarque from './FastMarque';
import Hero from './Hero';
import MoreWorks from './MoreWorks/MoreWorks';
import Portfolio from './Portfolio/Portfolio';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      <div className='w-full mx-auto px-2 sm:px-4 lg:px-6 py-12 sm:py-16 lg:py-20 bg-[#F5F5F5]'>
        <div className='max-w-8xl mx-auto'>
          <Experice />
          <FastMarque />
          <Portfolio />
          <MoreWorks />
        </div>
      </div>
    </>
  );
}
