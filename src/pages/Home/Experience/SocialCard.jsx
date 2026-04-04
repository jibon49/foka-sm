export default function SocialCard() {
  const socials = [
    { name: 'DRIBBBLE' },
    { name: 'BEHANCE'},
    { name: 'LINKEDIN'},
    { name: 'X'},
    { name: 'XING' },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl sm:text-3xl font-funnel font-bold text-gray-900 mb-1">
          Follow us
        </h3>
        <p className="text-sm text-gray-600 font-inter">For check updates</p>
      </div>

      {/* Social Buttons */}
      <div className="flex flex-wrap gap-3">
        {socials.map((social) => (
          <button
            key={social.name}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border-2 border-gray-200 text-gray-900 text-xs sm:text-sm font-semibold font-inter hover:bg-gray-900 hover:text-white transition-all duration-300 hover:shadow-md"
          >
            {social.name}
          </button>
        ))}
      </div>
    </div>
  );
}
