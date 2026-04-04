import Experice from './Experience/Experice';
import Hero from './Hero';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      <div className='w-full mx-auto px-2 sm:px-4 lg:px-6 py-12 sm:py-16 lg:py-20'>
        <div className='max-w-8xl mx-auto'>
          <Experice />
        </div>
      </div>
    </>
  );
}
