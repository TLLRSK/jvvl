import React from "react";
import Container from "./Container";

function SectionTitle({ text }: { text: string }) {
  const splittedText = text.split("");
  return (
    <div className="text-xl border-b-[1px] border-primary uppercase">
      <Container className="flex justify-between px-4">
        {splittedText.map((char, i) => {
          return <p key={i}>{char}</p>;
        })}
      </Container>
    </div>
  );
}

export default SectionTitle;
