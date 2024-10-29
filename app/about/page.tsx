import CopyToClipboard from "@/components/about/CopyToClipboard";
import Container from "@/components/global/Container";
import SectionTitle from "@/components/global/SectionTitle";
import Image from "next/image";
import React from "react";

const title = ["j", "v", "v", "l"];
const toolsArray = ["nextjs", "tailwind css", "prisma", "shadcn", "supabase", "clerk"];

function AboutPage() {
  return (
    <section>
      <SectionTitle text={"about"} />

      <article className="flex flex-col relative overflow-hidden">
        <h2 className="grid grid-cols-2 text-primary text-center font-serif font-semibold uppercase md:grid-cols-4 border-b-[1px] border-border">
          {title.map((letter, i) => {
            return (
              <span
                className="aspect-square text-[24vw] content-center"
                key={i}
              >
                {letter}
              </span>
            );
          })}
        </h2>

        <p className="leading-[80%] w-3/4 mx-auto text-center my-8">
          Fake e-commerce built up for learning purposes with:
        </p>

        <ul className="grid grid-cols-2 md:grid-cols-4 border-t-[1px] border-border ">
          {toolsArray.map((tool, i) => {
            return (
              <li
                key={i}
                className="h-[25dvh] flex p-3 text-lg uppercase border-b-[1px] border-border border-r-[1px] 
                  [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r-[1px] md:[&:nth-child(4)]:border-r-0
                "
              >
                <p className="mt-auto mx-auto">{tool}</p>
              </li>
            );
          })}
        </ul>

        <Container className="w-full pb-24 md:mt-24">
          <div className="lg:h-[80dvh] relative aspect-square lg:aspect-auto ">
            <Image
              src="/images/workshop.png"
              alt="workshop"
              fill
              priority
              className="object-cover md:rounded-sm"
            />
          </div>

          <div className="flex flex-col items-center justify-between p-3 gap-32">
            <div className="w-full flex justify-between uppercase">
              <p className="text-right">404</p>
              <p className="text-right">Paris-FR</p>
            </div>
            <CopyToClipboard text="hi@jvvl.com" />
          </div>
        </Container>
      </article>
    </section>
  );
}

export default AboutPage;
