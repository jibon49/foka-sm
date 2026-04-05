import React from 'react';

export default function UserFeedbackCard({ avatar, name, role, testimonial, footer, namePosition = 'top' }) {
  const nameBlock = (
    <div className="flex items-center gap-4">
      <div className="h-14 w-14 overflow-hidden rounded-full border border-black/10 bg-white">
        <img src={avatar} alt={name} className="h-full w-full object-cover" />
      </div>

      <div>
        <h3 className="text-base font-semibold leading-tight sm:text-lg">{name}</h3>
        <p className="text-sm text-black/60 transition-colors duration-300 group-hover:text-white/70">{role}</p>
      </div>
    </div>
  );

  const feedbackBlock = (
    <div className="flex h-full flex-col justify-between gap-5 font-funnel">
      <div className="space-y-3">
        <div className="flex items-center gap-1 text-[#f5a623] transition-colors duration-300 group-hover:text-white">
          <span>★★★★★</span>
        </div>

        <p className="sm:text-base lg:text-lg  font-semibold leading-6 text-black/70 transition-colors duration-300 group-hover:text-white/80">
          {testimonial}
        </p>
      </div>

      <p className="text-xs font-semibold tracking-[0.18em] text-black/60 uppercase transition-colors mt-12 duration-300 group-hover:text-white/70">
        {footer}
      </p>
    </div>
  );

  return (
    <article className="group relative flex h-full cursor-pointer flex-col gap-4 overflow-visible rounded-[20px] transition-transform duration-500 ease-in-out hover:scale-[1.02]">

      {namePosition === 'top' ? (
        <>
          <div className="relative z-20 overflow-hidden rounded-[20px] bg-white p-5 sm:p-6 transition-colors duration-300 group-hover:bg-transparent group-hover:text-white">
            <div className="absolute inset-x-0 top-0 z-10 h-0 bg-black transition-all duration-500 ease-in-out group-hover:h-1/2" />
            <div className="absolute inset-x-0 bottom-0 z-10 h-0 bg-black transition-all duration-500 ease-in-out group-hover:h-1/2" />
            <div className="relative z-20">
              {nameBlock}
            </div>
          </div>
          <div className="relative z-20 overflow-hidden rounded-[20px] bg-white p-5 sm:p-6 transition-colors duration-300 group-hover:bg-transparent group-hover:text-white">
            <div className="absolute inset-x-0 top-0 z-10 h-0 bg-black transition-all duration-500 ease-in-out group-hover:h-1/2" />
            <div className="absolute inset-x-0 bottom-0 z-10 h-0 bg-black transition-all duration-500 ease-in-out group-hover:h-1/2" />
            <div className="relative z-20">
              {feedbackBlock}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="relative z-20 overflow-hidden rounded-[20px] bg-white p-5 sm:p-6 transition-colors duration-300 group-hover:bg-transparent group-hover:text-white">
            <div className="absolute inset-x-0 top-0 z-10 h-0 bg-black transition-all duration-500 ease-in-out group-hover:h-1/2" />
            <div className="absolute inset-x-0 bottom-0 z-10 h-0 bg-black transition-all duration-500 ease-in-out group-hover:h-1/2" />
            <div className="relative z-20">
              {feedbackBlock}
            </div>
          </div>
          <div className="relative z-20 overflow-hidden rounded-[20px] bg-white p-5 sm:p-6 transition-colors duration-300 group-hover:bg-transparent group-hover:text-white">
            <div className="absolute inset-x-0 top-0 z-10 h-0 bg-black transition-all duration-500 ease-in-out group-hover:h-1/2" />
            <div className="absolute inset-x-0 bottom-0 z-10 h-0 bg-black transition-all duration-500 ease-in-out group-hover:h-1/2" />
            <div className="relative z-20">
              {nameBlock}
            </div>
          </div>
        </>
      )}
    </article>
  );
}