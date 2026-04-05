import Experice from './Experience/Experice';
import FastMarque from './FastMarque';
import FunFacts from './FunFacts/FunFacts.jsx/FunFacts';
import GetInTouch from './GetInTouch/GetInTouch';
import GetReward from './GetReward/GetReward';
import HappyUsers from './HappyUsers/HappyUsers';
import Hero from './Hero';
import MoreWorks from './MoreWorks/MoreWorks';
import Portfolio from './Portfolio/Portfolio';
import UserFeedbacks from './UserFeedbacks/UserFeedbacks';

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
          <FunFacts />
          <HappyUsers />
          <UserFeedbacks />
          <GetInTouch />
          <GetReward />
        </div>
      </div>
    </>
  );
}
