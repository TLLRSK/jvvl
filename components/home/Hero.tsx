"use client";
import { useEffect, useState } from "react";

const title = ["j", "v", "v", "l"];

function Hero() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 128;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  };
  
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <section className="h-[calc(100dvh-16px)] pt-12 flex flex-col relative ">
        <h2 className="grid grid-cols-4 text-primary text-center font-serif font-semibold uppercase absolute top-12 md:top-6 inset-0">
          {title.map((letter, i) => {
            return <span className={`transition-translate leading-[75%] text-[43.6vw] ${scrolled ? "-translate-y-2/4" : "translate-y-0" }`} key={i}>{letter}</span>
          })}
        </h2>

      <div
        className="absolute inset-0 grid grid-cols-2 md:grid-cols-4
        [&>div]:p-2 [&>div]:border-b-[1px] [&>div]:border-r-[1px] [&>div]:flex [&>div]:items-end [&>div]:justify-center
        [&>div]:uppercase [&>div]:uppercase:border-muted [&>div:nth-child(2n)]:border-r-0
        md:[&>div:nth-child(2n)]:border-r-[1px] md:[&>div:nth-child(4n)]:border-r-0"
      >
        <div>
          <p>luxurious</p>
        </div>
        <div>
          <p>unique</p>
        </div>
        <div>
          <p>hand tailored</p>
        </div>
        <div>
          <p>jewelry</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
