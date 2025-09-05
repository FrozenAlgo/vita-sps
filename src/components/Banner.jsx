import { lazy, Suspense } from "react";

// import Pricing from "./Pricing";
const Pricing = lazy(() => import("./Pricing"));

function Banner({ bannerContent }) {
  return (
    <>
      <div
        className=" bg-center 
 w-[100vw] overflow-x-hidden   pt-[10vh]  relative font-sans"
      >
        <img
          src="/images/banner.avif"
          alt="Banner"
          width={1920}
          height={1080} // ✅ add dimensions to avoid CLS
          fetchpriority="high" // ✅ LCP boost
          decoding="async"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className=" absolute top-0 left-0 h-full w-full bg-neutral-900/60 z-10"></div>
        <div className="relative z-20 px-3 md:px-12 flex flex-col md:flex-row py-10 md:py-0 text-white">
          <div className="basis-full md:basis-1/2">
            <h2 className="text-[28px] py-3  font-semibold">
              {bannerContent.heading}
            </h2>
            <p className="text-md ">{bannerContent.para}</p>
            <div className="pt-5 pb-10">
              {bannerContent.button && (
                <a
                  href="https://vita.spsnet.com/about-us/"
                  className=" gradient-btn text-sm py-3 px-5 rounded"
                >
                  Learn More
                </a>
              )}
            </div>
          </div>
          <div className="basis-full md:basis-1/2 flex justify-center  items-center">
            <Suspense fallback={<div>Loading...</div>}>
              {bannerContent.pricingView && <Pricing />}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
