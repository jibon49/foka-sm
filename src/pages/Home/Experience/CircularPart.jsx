

const CircularPart = ({ text, logo }) => {
    return (

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start lg:items-center">

            {/* Left Column - Logo with Circling Text */}
            <div className="flex flex-col items-start gap-8 flex-shrink-0">
                {/* Circling Logo */}
                <div className="relative w-32 h-32 flex items-center justify-center">
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
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full">
                        <img
                            className="w-10 h-10 object-contain"
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
                <p className="text-sm text-gray-500 max-w-xs font-inter">
                    We design every project with long-term success in mind.
                </p>
            </div>

            {/* Right Column - Large Heading */}
            <div className="flex-1">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-funnel font-bold leading-tight text-gray-900">
                    Our approach is straightforward—prioritizing functionality, speed, and clarity for solutions.
                </h2>
            </div>

        </div>

    )
}

export default CircularPart