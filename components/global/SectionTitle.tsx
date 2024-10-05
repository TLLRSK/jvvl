import React from "react";

function SectionTitle({ text }: { text: string }) {
  const splittedText = text.split("");
  return (
    <h2 className="flex justify-between p-3 text-xl border-b-[1px] border-primary uppercase">
      {splittedText.map((char, i) => {
        return <p key={i}>{char}</p>;
      })}
    </h2>
  );
}

export default SectionTitle;
