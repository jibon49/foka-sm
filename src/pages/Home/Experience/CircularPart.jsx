

const CircularPart = ({ text, logo }) => {
    return (

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-24 items-center lg:items-center max-w-7xl mx-auto px-0">

            {/* Left Column - Logo with Circling Text */}
            <div className="flex flex-col items-center lg:items-start gap-4 sm:gap-6 flex-shrink-0 w-full lg:w-auto">
                {/* Circling Logo */}
                <div className="relative w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 flex items-center justify-center">
                    {/* SVG with circling text */}
                    <svg
                        viewBox="0 0 300 300"
                        className="absolute w-full h-full"
                        style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
                    >
                        {/* Invisible circle path for text */}
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
                                fill="none"
                            />
                        </defs>

                        {/* Animated text following circular path */}
                        <text
                            className="text-base font-bold fill-gray-500"
                            letterSpacing="2"
                            style={{
                                animation: 'rotate 20s linear infinite',
                                fontSize: '16px',
                                fill: '#6b7280',
                                fontFamily: 'var(--font-inter)',
                            }}
                        >
                            <textPath href="#circlePath" startOffset="0%">
                                {text}
                            </textPath>
                        </text>
                    </svg>

                    {/* Center Logo */}
                    <div className="relative z-10 flex items-center justify-center w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-full">
                        <img
                            className="w-7 sm:w-8 lg:w-10 h-7 sm:h-8 lg:h-10 object-contain"
                            src={logo}
                            alt="Logo"
                        />
                    </div>

                    {/* CSS Animation */}
                    <style>{`
                      @keyframes rotate {
                        from {
                          transform: rotate(0deg);
                        }
                        to {
                          transform: rotate(360deg);
                        }
                      }
        
                      text {
                        transform-origin: 150px 150px;
                      }
                    `}</style>
                </div>

                {/* Descriptive Text */}
                <p className="text-xs sm:text-sm text-gray-500 max-w-xs font-inter text-center">
                    We design every project with long-term success in mind.
                </p>
            </div>

            {/* Right Column - Large Heading */}
            <div className="flex-1 w-full">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-funnel font-bold leading-tight text-gray-900 text-center lg:text-left">
                    Our approach is straightforward—prioritizing functionality, speed, and clarity for solutions.
                </h2>
            </div>

        </div>

    )
}

export default CircularPart