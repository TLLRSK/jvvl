"use client";

import { useLoading } from "@/context/LoadingContext";
import { useEffect, useState } from "react";

const title = ["j", "v", "v", "l"];

function Hero() {
  const { isInitialLoad, isLoading } = useLoading();
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= 3) {
          clearInterval(interval);
          return title.length;
        }
        return prevIndex + 1;
      });
    }, 400);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const gridAnimationClasses = (i: number) => {
    if (isInitialLoad && isLoading && i <= currentIndex) {
      return "max-h-[100dvh] opacity-100";
    }
    return isInitialLoad ? "max-h-0 opacity-0" : "max-h-[100dvh] opacity-100";
  };

  const spanAnimationClasses = (i: number) => {
    if (isInitialLoad && isLoading && i <= currentIndex) {
      return "translate-y-0";
    }
    return isInitialLoad ? "translate-y-full" : "translate-y-0";
  };

  return (
    <section className="h-[100dvh] flex flex-col relative">
      <header className="flex-1 ">
        <h1
          className={`h-full grid grid-cols-2 md:grid-cols-4 text-primary font-serif font-semibold uppercase`}
        >
          {title.map((letter, i) => (
            <span
              className={`flex overflow-hidden items-end justify-center`}
              key={i}
            >
              <span
                className={`h-fit leading-[75%] text-[75vw] md:text-[25vw]
                 transition-translate-y ease-custom-bezier duration-1000 delay-1500 ${spanAnimationClasses(
                   i
                 )}`}
              >
                {letter}
              </span>
            </span>
          ))}
        </h1>
      </header>

      <div className="absolute inset-0 h-full flex flex-wrap -z-10">
        {title.map((letter, i) => (
          <span
            key={letter + i}
            className={`w-2/4 md:w-1/4 border-border border-b-[1px] border-r-[1px] [&:nth-child(2n)]:border-r-0
              md:[&:nth-child(2n)]:border-r-[1px] md:[&:nth-last-child(1)]:border-r-0 overflow-hidden
              transition-hero-grid ease-custom-bezier duration-1000
              ${gridAnimationClasses(i)}`}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
