import logo from '../../../assets/logo2.png';
import CircularPart from './CircularPart';

const Experice = () => {
  const text = "CREATIVE DESIGN • DIGITAL INNOVATION • CREATIVE DESIGN • DIGITAL INNOVATION • ";

  return (
    <div className='py-24 px-6 sm:px-12 lg:px-16'>
      {/* Two Column Layout */}
      <CircularPart text={text} logo={logo} />
    </div>
  );
};

export default Experice;