import { useRef } from 'react';
import gsap from 'gsap';

export default function PortfolioCard({ project }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!imageRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate parallax offset
    const offsetX = (x / width - 0.5) * 20;
    const offsetY = (y / height - 0.5) * 20;

    gsap.to(imageRef.current, {
      scale: 1.1,
      x: offsetX,
      y: offsetY,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      {/* Image Card Container */}
      <div
        ref={containerRef}
        className={`relative rounded-3xl overflow-hidden h-72 ${project.height || 'h-72'} cursor-pointer group`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Image with Parallax */}
        <img
          ref={imageRef}
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Top-Left Logo */}
        <div className="absolute top-2 left-4 z-10">
          <img
            src="https://floka.casethemes.net/wp-content/uploads/2025/05/home-1-icon4.svg"
            alt="Logo"
            className="w-10 h-10 sm:w-20 sm:h-20 object-contain"
          />
        </div>
      </div>

      {/* Bottom Text Section - Outside the Card */}
      <div className="flex bg-white p-4 rounded-xl justify-between items-center">
        <h3 className="text-sm sm:text-base lg:text-base font-funnel text-gray-500">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 font-funnel">
          {project.year}
        </p>
      </div>
    </div>
  );
}
