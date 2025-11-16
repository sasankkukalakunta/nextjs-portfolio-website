import React from 'react'
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react';


export const Contact = () => {
  return (
    <section id='contact'>
 <div className="relative flex-col flex h-[20rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-3xl md:text-5xl font-bold text-transparent text-center">
        Let &apos;s elevate your project together.
      </p>
<p className='text-center text-neutral-500 dark:text-neutral-300 z-20'>
  Let&apos;s Connect! Reach Out for Collaborations or Inquiries.
</p>
<div className="relative z-20 mt-6">
  <a
    href="mailto:Sasank.kukalakunta@gmail.com"
    className="inline-flex items-center justify-center px-8 py-3 
               text-base font-medium text-white bg-black 
               dark:bg-white dark:text-black 
               rounded-xl shadow-md hover:shadow-xl 
               transition-all duration-300 hover:-translate-y-1 
               active:scale-95"
  >
    Get in Touch →
  </a>
</div>
    
</div>
<div className="flex flex-col md:flex-row justify-between items-center py-6 w-full">

  {/* Left side text */}
  <p className="text-neutral-600 items-center dark:text-neutral-400 md-8 md:mb-0 ">
    &copy; {new Date().getFullYear()} Sasank Kukalakunta. All rights reserved.
  </p>

  {/* Right side social icons */}
  <div className="flex items-center space-x-3 mt-4 md:mt-0">

    {/* GitHub */}
    <a
      href="#" className="rounded-full bg-gray-200 dark:bg-neutral-800 w-10 h-10 
                 flex items-center justify-center hover:bg-gray-300 
                 dark:hover:bg-neutral-700 transition-all duration-300"
                    target='_blank'
    >
      <IconBrandGithub className="h-6 w-6 text-black dark:text-neutral-400" />
    </a>

    {/* LinkedIn */}
    <a
      href="www.linkedin.com/in/2309sasank"
      className="rounded-full bg-gray-200 dark:bg-neutral-800 w-10 h-10 
                 flex items-center justify-center hover:bg-gray-300 
                 dark:hover:bg-neutral-700 transition-all duration-300"
                    target='_blank'
    >
      <IconBrandLinkedin className="h-6 w-6 text-black dark:text-neutral-400" />
    </a>
 <a
      href="www.linkedin.com/in/2309sasank"
      className="rounded-full bg-gray-200 dark:bg-neutral-800 w-10 h-10 
                 flex items-center justify-center hover:bg-gray-300 
                 dark:hover:bg-neutral-700 transition-all duration-300"
                 target='_blank'
    >
      <IconBrandTwitter className="h-6 w-6 text-black dark:text-neutral-400" />
    </a>
  </div>
</div>

    </section>
    
)
}
