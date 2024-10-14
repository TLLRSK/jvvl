import React from "react";

function ChevronLeft({ className = '' }: { className?: string }) {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" className={className}>
      <path
        d="M15.41 16.58L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.58Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ChevronLeft;