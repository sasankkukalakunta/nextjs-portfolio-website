import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import { Spotlight } from "./ui/spotlight-new";
const Hero = () => {
  return (
    <section id="home"  className="relative w-full h-screen overflow-hidden bg-transparent dark:bg-black/90">
<Spotlight
  gradientFirst="radial-gradient(60% 60% at 50% 40%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.10) 45%, rgba(255,255,255,0.03) 70%, transparent 100%)"
  gradientSecond="radial-gradient(70% 70% at 20% 70%, rgba(148,163,184,0.18) 0%, rgba(148,163,184,0.07) 55%, transparent 100%)"
  gradientThird="radial-gradient(90% 90% at 80% 70%, rgba(148,163,184,0.10) 0%, transparent 75%)"
  translateY={-540}
  width={1200}
  height={2000}
  smallWidth={420}
  duration={18}
  xOffset={150}
/>
   <div className="absolute inset-0 h-screen w-screen -z-10">
    </div>
      <div className="relative h-screen flex items-center">
              <BackgroundRippleEffect rows={8} cols={35}/>
         <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <div className="mt-60 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
        </h2>
<div className="z-50">
  <div className="py-6 text-center ">
   <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white/70 px-4 py-1 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-neutral-700 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-black/60 dark:text-neutral-300">
            Next.js · React · TypeScript · UI/UX
          </span>
          </div>
            <h2 className="text-neutral-600 dark:text-neutral-300 uppercase text-xl text-center">  
            Next.js Full - Stack Developer &amp; Designer
            </h2>
            <TextGenerateEffect words="Turning Text Into Web Pages & Applications"/>
            <p className="pt-3 text-center text-neutral-600 dark:text-neutral-300 lg:text-lg md:tracking-wider my-5">
I Create Responsive Web Applications That Provide a Great User Experience.
            </p>
      </div>
    </div>
            <div className="mt-6 flex w-full justify-center ml-[-10px]">
              <a href="#recent-projects">
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

 
      