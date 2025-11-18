import React from "react";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

export const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="w-full scroll-mt-24">
      <div className="relative flex h-[20rem] w-full flex-col items-center justify-center overflow-hidden bg-white dark:bg-black">
        {/* Grid background */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />

        {/* Radial mask overlay */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        {/* Content */}
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-4 text-center text-3xl font-bold text-transparent md:text-5xl">
          Let&apos;s elevate your next project.
        </p>
        <p className="relative z-20 px-4 text-center text-sm text-neutral-600 dark:text-neutral-300 md:text-base">
          Open to freelance work, full-time roles, and interesting collaborations.
          Drop a message and I&apos;ll get back to you soon.
        </p>

        <div className="relative z-20 mt-6">
          <a
            href="mailto:Sasank.kukalakunta@gmail.com"
            className="inline-flex items-center justify-center rounded-xl bg-black px-8 py-3 text-base font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 dark:bg-white dark:text-black"
          >
            Get in touch →
          </a>
        </div>
      </div>

      {/* Footer bar */}
      <div className="flex w-full flex-col items-center justify-between gap-4 py-6 text-sm text-neutral-600 dark:text-neutral-400 md:flex-row">
        <p className="text-center md:text-left">
          &copy; {year} Sasank Kukalakunta. All rights reserved.

        </p>

        <div className="flex items-center space-x-3">
          {/* GitHub */}
          <a
            href="https://github.com/sasankkukalakunta"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-neutral-700"
          >
            <IconBrandGithub className="h-5 w-5 text-black dark:text-neutral-300" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/2309sasank/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-neutral-700"
          >
            <IconBrandLinkedin className="h-5 w-5 text-black dark:text-neutral-300" />
          </a>

          {/* X (Twitter) */}
          <a
            href="https://x.com/SKukalakun10883"
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter) profile"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 transition-all duration-300 hover:bg-gray-300 dark:bg-neutral-800 dark:hover:bg-neutral-700"
          >
            <IconBrandTwitter className="h-5 w-5 text-black dark:text-neutral-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

