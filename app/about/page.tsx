import Container from "@/components/global/Container";
import SectionTitle from "@/components/global/SectionTitle";
import Image from "next/image";
import React from "react";

function AboutPage() {
  return (
    <section>
      <SectionTitle text={"about"} />
      <div className="relative w-full aspect-square lg:aspect-auto lg:h-[80dvh]">
        <Image
          src="/images/workshop.png"
          alt="workshop"
          fill
          objectPosition="cover"
          className="object-cover"
        />
      </div>
      <Container>
        <article className="flex flex-col py-3 md:py-4">
          <h2 className="font-serif leading-[80%] text-3xl md:text-[16vw] text-center py-3 uppercase">
            gewlyn
          </h2>
          <div className="grid gap-4 md:gap-6 lg:gap-12 p-3 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg border-b-[1px] border-primary uppercase">
                luxury
              </h3>
              <p className="text-lg font-sans mt-2">
                At <span className="font-serif">GEWLYN</span>, we redefine
                luxury through our exquisite jewelry pieces. Each creation is a
                masterpiece, designed for those who seek more than just
                jewelry—they seek an experience of timeless elegance and
                unparalleled distinction.
              </p>
            </div>
            <div>
              <h3 className="text-lg border-b-[1px] border-primary uppercase">
                crafting
              </h3>
              <p className="text-lg font-sans mt-2">
                Since our inception, we have been driven by a passion for
                excellence, carefully sourcing the world’s most precious
                materials. Our artisans blend traditional craftsmanship with
                modern innovation to bring collections to life that capture the
                essence of pure beauty and sophistication.
              </p>
            </div>
            <div>
              <h3 className="text-lg border-b-[1px] border-primary uppercase">
                passion
              </h3>
              <p className="text-lg font-sans mt-2">
                More than just jewelry, every piece tells a unique story—a story
                of passion, tradition, and a deep commitment to quality. Whether
                it’s an engagement ring symbolizing eternal love or a bespoke
                piece that reflects your individuality, at XOPXOP, we believe in
                creating memories that last a lifetime.
              </p>
            </div>
            <div>
              <h3 className="text-lg border-b-[1px] border-primary uppercase">
                artistry
              </h3>
              <p className="text-lg font-sans mt-2">
                Explore our collection and discover a world where luxury meets
                artistry, where every jewel is a reflection of your style and
                essence.
              </p>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}

export default AboutPage;
