import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { vectors } from "../../assets";

function HeroSection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const clipPathPolygon = vectors.blobClipPath();

  return (
    <div className="bg-base-100 min-h-[calc(100svh-4.5rem)]">
      {/* Hero */}
      <div className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
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

        <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
          <div className="mb-8 sm:flex sm:w-full sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-xs md:text-sm/6 text-base-content/75 ring-1 ring-base-content/50 hover:ring-white/20">
              Research in progress | {" "}
              <a href="/research" className="font-semibold text-indigo-400">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more
              </a>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl font-semibold md:tracking-tight text-balance text-base-content sm:text-6xl lg:text-7xl">
              Build Adaptive User Experiences with{" "}
              <span className="text-primary font-bold">AURA</span>
            </h1>
            <p className="mt-6 text-base font-medium text-pretty text-base-content/75 sm:mt-8 sm:text-lg lg:text-xl/8">
              Leverage AURA's React components and personalization platform to
              create accessible, adaptive experiences that resonate with your users.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-x-6">
              <a href="#" className="btn btn-primary sm:btn-lg">
                Get started
              </a>
              <a href="#" className="btn btn-ghost sm:btn-lg">
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
