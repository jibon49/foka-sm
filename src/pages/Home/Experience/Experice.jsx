import logo from '../../../assets/logo2.png';
import CircularPart from './CircularPart';
import StatsSection from './StatsSection';

const Experice = () => {
  const text = "CREATIVE DESIGN • DIGITAL INNOVATION • CREATIVE DESIGN • DIGITAL INNOVATION • ";

  return (
    <>
      <div className='w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24'>
        {/* Circular Part with Logo */}
        <CircularPart text={text} logo={logo} />
      </div>

      {/* Stats + Testimonial + Progress Section */}
      <StatsSection />
    </>
  );
};

export default Experice;