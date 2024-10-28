import React from "react";
import Container from "./Container";

function SectionTitle({ text = "" }: { text?: string }) {
  
  return (
    <div className="text-xl border-b-[1px] border-muted uppercase">
      <Container className="px-12 py-4">
        <h2 className="text-sm text-center text-primary">{text}</h2>
      </Container>
    </div>
  );
}

export default SectionTitle;
