import React from "react";
import { cn } from "../../lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TailwindcssButtons } from "./TailwindcssButtons";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import { Spotlight } from "./ui/spotlight-new";
const Hero = () => {
  return (
    <section id="home">
         <Spotlight
  duration={22}       // slow Apple motion
  xOffset={420}       // very wide drift
  translateY={-180}   // light feels lifted
  width={1400}        // soft, wide halo
  height={2600}
  smallWidth={480}    // subtle accents
/>


      <div className="overflow-hidden relative h-[90vh] lg:h-screen">
        {/* Background replaced here */}
         <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-60 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
        </h2>
<div className="z-50">
            <h2 className="text-neutral-600 dark:text-neutral-300 uppercase text-xl text-center">
              Next.js Full Stack Developer & Designer
            </h2>
            <TextGenerateEffect words="Turnin text into web pages web appliucation"/>
            <p className="pt-3 text-center text-neutral-600 dark:text-neutral-300 lg:text-lg md:tracking-wider my-5">
              I create responsive web applications that provide a great user experience.
            </p>
      </div>
    </div>
            <div className="mt-6 flex w-full justify-center">
              <a href="#about">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Explore My Work
                  </span>
                </button>
              </a>
            </div>
          </div>
          </div>
    </section>
  );
};

export default Hero;