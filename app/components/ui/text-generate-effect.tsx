"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

type TextGenerateEffectProps = {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
};

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, filter, duration, words]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="opacity-0"
          style={{
            filter: filter ? "blur(10px)" : "none",
            display: "inline-block",
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div className={cn("relative z-[10] mt-4", className)}>
      {/* Default text styling; can be overridden via className */}
      <div className="text-center text-xl font-semibold leading-snug tracking-wide text-white dark:text-white md:text-2xl lg:text-4xl">
        {renderWords()}
      </div>
    </div>
  );
};
