import AnimatedIconButton from "../../../components/AnimatedIconButton";

const GetInTouch = () => {
  return (
    <section className="w-full px-4 py-48 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="relative mx-auto w-full overflow-hidden rounded-3xl bg-black px-6 py-10 text-white sm:px-8 sm:py-12 lg:px-52 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[url('https://floka.casethemes.net/wp-content/uploads/2025/06/home1-bg-img13.jpg')] bg-cover bg-center bg-no-repeat opacity-25" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16)_0,rgba(255,255,255,0)_18%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.1)_0,rgba(255,255,255,0)_14%),radial-gradient(circle_at_35%_75%,rgba(255,255,255,0.08)_0,rgba(255,255,255,0)_16%),radial-gradient(circle_at_70%_85%,rgba(255,255,255,0.12)_0,rgba(255,255,255,0)_12%)] opacity-20 mix-blend-screen" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.03)_70%,rgba(255,255,255,0)_100%)] opacity-40" />

        <div className="relative flex flex-col gap-14 lg:flex-row lg:justify-between lg:gap-15">
          <div className="max-w-140">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45 sm:text-sm">
              GET IN TOUCH
            </p>

            <h1 className="mt-5 max-w-150 text-[42px] font-semibold leading-[1.2] tracking-[-0.04em] text-white sm:text-2xl lg:text-5xl">
              Tell us about your project — whether it’s a website, SEO, or marketing.
            </h1>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                  TALK TO US
                </p>
                <p className="mt-4 text-sm leading-6 text-white/65 sm:text-base">
                  Work and general inquiries
                </p>
                <p className="mt-2 text-sm leading-6 text-white sm:text-base">
                  +123 456 789 00
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                  POST ADDRESS
                </p>
                <p className="mt-4 max-w-70 text-sm leading-6 text-white/65 sm:max-w-80 sm:text-base">
                  541 Melville Ave, Palo Alto, CA 94301, United States
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-140 rounded-2xl bg-[#f5f5f5] p-6 text-black shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-8">
            <p className="text-2xl font-semibold tracking-[-0.03em] text-black sm:text-[28px]">
              Have a project in mind?
            </p>

            <form className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="h-12 w-full rounded-[10px] border-0 bg-[#eee] px-4 text-sm text-black placeholder:text-black/40 outline-none transition-colors duration-200 focus:bg-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  className="h-12 w-full rounded-[10px] border-0 bg-[#eee] px-4 text-sm text-black placeholder:text-black/40 outline-none transition-colors duration-200 focus:bg-white"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  name="budget"
                  defaultValue=""
                  className="h-12 w-full rounded-[10px] border-0 bg-[#eee] px-4 text-sm text-black outline-none transition-colors duration-200 focus:bg-white"
                >
                  <option value="" disabled>
                    Budget
                  </option>
                  <option value="under-10k">Under $10k</option>
                  <option value="10k-25k">$10k - $25k</option>
                  <option value="25k-plus">$25k+</option>
                </select>

                <select
                  name="service"
                  defaultValue=""
                  className="h-12 w-full rounded-[10px] border-0 bg-[#eee] px-4 text-sm text-black outline-none transition-colors duration-200 focus:bg-white"
                >
                  <option value="" disabled>
                    Service
                  </option>
                  <option value="web-design">Web Design</option>
                  <option value="seo">SEO</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>

              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="w-full resize-none rounded-[10px] border-0 bg-[#eee] px-4 py-3 text-sm text-black placeholder:text-black/40 outline-none transition-colors duration-200 focus:bg-white"
              />

              <AnimatedIconButton
              text='Lets Talk'
              hoverBgColor="none"
              ></AnimatedIconButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;