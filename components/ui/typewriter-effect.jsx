"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect, useState } from "react";

/* ------------------------------------------------------------
   Classic typewriter (reveals once, letter-by-letter)
-------------------------------------------------------------*/
export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}) => {

  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""), // classic letter reveal
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { opacity: 1, display: "inline-block" },
        { duration: 0.3, delay: stagger(0.06), ease: "easeInOut" }
      );
    }
  }, [isInView]);

  return (
    <div className={cn("text-3xl font-bold", className)}>
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <span key={idx} className="inline-block mr-2">
            {word.text.map((char, i) => (
              <motion.span
                key={i}
                className={cn("opacity-0 hidden", word.className)}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.div>

      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className={cn("inline-block w-[4px] h-6 bg-white", cursorClassName)}
      />
    </div>
  );
};

/* ------------------------------------------------------------
   SMOOTH typewriter (TYPE → PAUSE → DELETE → NEXT → LOOP)
-------------------------------------------------------------*/
export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
  typingSpeed = 90,
  deleteSpeed = 60,
  pause = 1200,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const current = words[wordIndex].text;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? current.slice(0, prev.length - 1)
          : current.slice(0, prev.length + 1)
      );

      if (!isDeleting && displayText === current) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? deleteSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {/* text */}
      <span className={cn("whitespace-nowrap", words[wordIndex].className)}>
        {displayText}
      </span>

      {/* blinking cursor */}
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className={cn("w-[3px] h-6 bg-white", cursorClassName)}
      />
    </div>
  );
};
