import OurAvengers from '../OurAvengers/OurAvengers';
import Experice from './Experience/Experice';
import Faq from './Faq/Faq';
import FastMarque from './FastMarque';
import FunFacts from './FunFacts/FunFacts.jsx/FunFacts';
import GetInTouch from './GetInTouch/GetInTouch';
import GetReward from './GetReward/GetReward';
import HappyUsers from './HappyUsers/HappyUsers';
import Hero from './Hero';
import Insight from './Insight/Insight';
import LineMarquee from './LineMarquee/LineMarquee';
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
          <OurAvengers />
          <Faq />
          <LineMarquee />
          <Insight />
        </div>
      </div>
    </>
  );
}
