import React from "react";

function ChevronRight({ className = '' }: { className?: string }) {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" className={className}>
      <path
        d="M8.59 16.58L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.58Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ChevronRight;