import CardSection from "./CardSection";



const Portfolio = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Subtitle */}
        <h5 className="mb-4 text-xs sm:text-sm lg:text-base text-gray-500 font-funnel font-bold uppercase tracking-widest">
          Portfolio
        </h5>
        
        {/* Divider */}
        <hr className="mb-8 border-gray-300" />
        
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center py-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-funnel font-bold text-center text-gray-900 leading-tight max-w-4xl">
            Strategy to build powerful digital solutions.
          </h1>
        </div>
      </div>
      <div>
        <CardSection></CardSection>
      </div>
    </div>
  );
}

export default Portfolio;