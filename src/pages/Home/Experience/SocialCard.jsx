export default function SocialCard() {
  const socials = [
    { name: 'DRIBBBLE' },
    { name: 'BEHANCE'},
    { name: 'LINKEDIN'},
    { name: 'X'},
    { name: 'XING' },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-funnel font-bold text-gray-900 mb-1">
          Follow us
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 font-inter">For check updates</p>
      </div>

      {/* Social Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {socials.map((social) => (
          <button
            key={social.name}
            className="px-3 py-1.5 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5 rounded-full border-2 border-gray-200 text-gray-900 text-[10px] sm:text-xs lg:text-sm font-semibold font-inter hover:bg-gray-900 hover:text-white transition-all duration-300 hover:shadow-md"
          >
            {social.name}
          </button>
        ))}
      </div>
    </div>
  );
}
