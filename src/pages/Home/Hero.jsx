import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const videoRef = useRef(null);
    const headingRef = useRef(null);
    const studioRef = useRef(null);
    const cardRef = useRef(null);
    const paragraphRef = useRef(null);
    const heroSectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // Create timeline for entrance animations
        const tl = gsap.timeline();

        // Video fade in
        tl.fromTo(
            videoRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, ease: 'power3.out' },
            0
        );

        // Heading slide up + fade in
        tl.fromTo(
            headingRef.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
            0.2
        );

        // Studio text fade in
        tl.fromTo(
            studioRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, ease: 'power3.out' },
            0.3
        );

        // Card slide in from right
        tl.fromTo(
            cardRef.current,
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out' },
            0.4
        );

        // Paragraph fade in
        tl.fromTo(
            paragraphRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1, ease: 'power3.out' },
            0.6
        );

        // Scroll animation - parallax effect
        gsap.to(heroSectionRef.current, {
            scrollTrigger: {
                trigger: heroSectionRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                markers: false,
            },
            y: 100,
            opacity: 0.3,
            ease: 'none',
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={heroSectionRef}
            className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-900"
            id="hero"
        >
            {/* Background Video with Fallback */}
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
                onError={(e) => {
                    // Handle video load error silently - gradient fallback is already in place
                    console.log('Hero video not found, using fallback gradient');
                }}
            >
                <source src="https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 to-black/20 z-10" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 z-20 py-8 lg:py-0">
                {/* Left Content */}
                <div className="flex flex-col justify-center max-w-2xl text-center lg:text-left">
                    {/* Studio Background Text */}


                    {/* Main Heading */}
                    <h1
                        ref={headingRef}
                        className="text-7xl font-funnel sm:text-8xl lg:text-9xl font-black text-white leading-tight mb-8"
                        style={{
                            fontSize: 'clamp(80px, 12vw, 180px)',
                        }}
                    >
                        Floka
                    </h1>
                    <div
                        ref={studioRef}
                        className="relative mb-4"
                    >
                        <h2 className="text-6xl font-funnel sm:text-6xl lg:text-8xl font-bold text-white ml-24 lg:ml-56 opacity-10 absolute -left-2">
                            Studio
                        </h2>
                    </div>

                    {/* Descriptive Text */}
                </div>

                {/* Right Floating Card */}
                <div
                    ref={cardRef}
                    className="flex absolute bottom-40 sm:bottom-48 lg:bottom-56 right-4 sm:right-6 lg:right-8 items-center gap-3 sm:gap-4 lg:gap-5 bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 transition-all duration-300 hover:-translate-y-1 shadow-lg w-fit lg:w-fit"
                    style={{
                        maxWidth: '90vw',
                    }}
                >
                    {/* Image Container - Left Side */}
                    <div
                        className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl sm:rounded-2xl overflow-hidden flex-shrink-0 border-3 sm:border-4 border-white flex items-center justify-center"
                        onMouseMove={(e) => {
                            if (!imageRef.current) return;
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;

                            // Calculate offset based on mouse position
                            const offsetX = (x / rect.width - 0.5) * 20; // ±10px max
                            const offsetY = (y / rect.height - 0.5) * 20; // ±10px max

                            imageRef.current.style.transform = `scale(1.1) translate(${offsetX}px, ${offsetY}px)`;
                        }}
                        onMouseLeave={() => {
                            if (imageRef.current) {
                                imageRef.current.style.transform = 'scale(1) translate(0, 0)';
                            }
                        }}
                    >
                        <img
                            ref={imageRef}
                            src="	https://floka.casethemes.net/wp-content/uploads/2025/06/home-1-img-slide-300x300.jpg"
                            alt="Avatar"
                            className="w-full h-full object-cover transition-transform duration-300"
                        />
                    </div>

                    {/* Content Container - Right Side */}
                    <div className="flex flex-col gap-1 pr-20">
                        {/* Label */}
                        <p className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-widest">
                            Head of Idea
                        </p>

                        {/* Name */}
                        <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 whitespace-nowrap">
                            Almond D. Nelsi
                        </p>

                        {/* Button with Text */}
                        <button className="mt-2 sm:mt-2.5 flex items-center gap-1.5 sm:gap-2.5 bg-black hover:bg-gray-900 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 w-fit text-nowrap">
                            <span className="text-[10px] sm:text-xs lg:text-sm font-medium">LET'S TALK</span>
                            <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-black font-bold text-[10px] sm:text-sm">
                                +
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Right Paragraph */}
            <div
                ref={paragraphRef}
                className="absolute bottom-8 right-4 sm:right-6 lg:right-8 z-20 max-w-xs hidden lg:block"
            >
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    No cookie-cutter websites. No fluff. Just real tools and smart strategies for brands that dare to stand out.
                </p>
            </div>

            {/* Mobile Bottom Text */}
            <div className="absolute bottom-28 sm:bottom-36 left-4 sm:left-6 lg:hidden z-20 max-w-xs">
                <p className="text-xs text-gray-400 leading-relaxed">
                    No cookie-cutter websites. No fluff. Just real tools and smart strategies.
                </p>
            </div>

        </section>
    );
}
