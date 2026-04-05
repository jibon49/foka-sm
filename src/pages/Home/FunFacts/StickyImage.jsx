import React from 'react';

export default function StickyImage() {
  return (
    <div className="relative lg:sticky lg:top-24 xl:top-32 h-fit">
      <img
        src="https://floka.casethemes.net/wp-content/uploads/2025/05/home1-bg-img6-500x600.webp"
        alt="Fun facts showcase"
        className="w-full rounded-[20px] object-cover aspect-[5/6] sm:aspect-[4/5] lg:aspect-[5/6] shadow-lg"
      />
    </div>
  );
}
