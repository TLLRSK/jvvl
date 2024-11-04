import SectionTitle from "@/components/global/SectionTitle";
import React from "react";

const title = ["j", "v", "v", "l"];

function AboutPage() {
  return (
    <section>
      <SectionTitle text={"about"} />

      <article className="min-h-[calc(100dvh-61px-44px)] flex flex-col relative">
        <h2 className="flex-1 grid grid-cols-4 content-center text-primary font-serif font-semibold uppercase py-12 border-b-[1px]">
          {title.map((letter, i) => {
            return (
              <span
                className="w-full transition-translate leading-[75%] text-[22vw] md:text-[25vw]
              text-center content-end"
                key={i}
              >
                {letter}
              </span>
            );
          })}
        </h2>

        <div className={gridClasses}>
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

        <div className="p-3 text-center">
          <p>Fake e-commerce made for learning purposes</p>
        </div>
      </article>
    </section>
  );
}

const gridClasses = `
  grid grid-cols-2 md:grid-cols-4
  [&>div]:p-2 [&>div]:border-b-[1px] [&>div]:border-r-[1px] [&>div]:flex [&>div]:items-end [&>div]:justify-center
  [&>div]:uppercase [&>div]:uppercase:border-muted [&>div:nth-child(2n)]:border-r-0
  md:[&>div:nth-child(2n)]:border-r-[1px] md:[&>div:nth-child(4n)]:border-r-0
`;

export default AboutPage;
