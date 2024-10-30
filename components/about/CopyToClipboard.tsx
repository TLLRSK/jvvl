"use client";
import React, { MouseEvent, useState } from "react";

function CopyToClipboard({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);
  const [showingMessage, setShowingMessage] = useState(false);

  const copyText = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    handleIsCopied();
  };

  const handleIsCopied = () => {
    setIsCopied(true);
    setShowingMessage(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 3000);

    setTimeout(() => {
        setShowingMessage(false);
    }, 3500)
  };

  return (
    <div className="relative">
      <button className="uppercase hover:underline" onClick={copyText}>
        hi@jvvl.com
      </button>
      <div
        className={`absolute -top-12 -left-2/4 -right-2/4 bg-accent text-center rounded-sm oveflow-hidden transition-all
            ${isCopied ? "scale-1 opacity-100" : "scale-[.4] opacity-0"}
        `}
      >
        { showingMessage && <p className={`px-3 py-2 font-medium `}>Coppied to clipboard!</p> }
      </div>
    </div>
  );
}

export default CopyToClipboard;
