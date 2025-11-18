// app/components/About.tsx
import React from 'react';
import { Header } from './resuablecomponets/Header';
import { Merriweather } from "next/font/google";

export const About = () => {
  return (
    <section id="about" className="my-30 mt-20">

      <div className="grid items-center gap-8 md:gap-12 md:[grid-template-columns:1fr_1.5fr]">
        <div>
          <img
            src="/images/about-image.jpg"
            alt="About Me Image"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Why: md:pl-10/lg:pl-16 pushes text away from the image only on wider screens */}
        <div className="mt-8 md:mt-0 md:pl-10 lg:pl-6 text-neutral-600 dark:text-neutral-300 md:text-xl leading-relaxed space-y-5">
           <h1 className="text-3xl lg:text-4xl font-bold text-left py-5 leading-tight my-5 
               bg-gradient-to-r from-neutral-500 to-neutral-300 text-transparent bg-clip-text">
  About Me <br />
</h1>
           <div className="text-justify space-x-0.5 [word-spacing:0.02em] md:[word-spacing:0.02xl:em] text-neutral-800 dark:text-neutral-200">
      <p className='mb-4'>
      Hi, I&apos;m Sasank Kukalakunta — a passionate Next.js full-stack developer and designer focused on crafting modern
       web applications. With a strong eye for
        detail and solid engineering skills, I build responsive, accessible, user-friendly experiences that look great, 
      load fast, and feel seamless across all devices and easy to maintain.
      </p>
      <p className='mb-4'>
        My journey in web development began with a fascination for how technology can transform ideas into interactive
        experiences. Over the years, I have honed my skills in Next.js, React, Java and various design tools to deliver
        projects that exceed client expectations. Whether it&apos;s building a sleek portfolio site or a complex web
        application, I approach each project with creativity, precision, and a commitment to quality.
      </p>
    </div>
    </div>
      </div>
    </section>
  );
};
// Minimal: just align the heading left
// app/components/ResumeText.tsx
