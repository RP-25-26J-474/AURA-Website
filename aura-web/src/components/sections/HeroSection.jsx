import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

function HeroSection() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const clipPathPolygon =
    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)";

  return (
    <div className="bg-base-100 min-h-screen">
      {/* Hero */}
      <div className="relative isolate px-6 py-12 lg:px-8">
        {/* Top gradient blob */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{ clipPath: clipPathPolygon }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>

        <div className="mx-auto max-w-3xl py-12 sm:py-24 lg:py-36">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-base-content/75 ring-1 ring-base-content/50 hover:ring-white/20">
              Research in progress | {" "}
              <a href="#" className="font-semibold text-indigo-400">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more
              </a>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-base-content sm:text-7xl">
              Build Adaptive User Experiences with{" "}
              <span className="text-primary font-bold">AURA</span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-base-content/75 sm:text-xl/8">
              Leverage AURA's React components and personalization platform to
              create accessible, adaptive experiences that resonate with your users.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="btn btn-primary btn-lg">
                Get started
              </a>
              <a href="#" className="btn btn-ghost btn-lg">
                Learn more <span aria-hidden="true"><FaArrowRight/></span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom gradient blob */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-50 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{ clipPath: clipPathPolygon }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
