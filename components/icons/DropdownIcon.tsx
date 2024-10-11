import React from "react";

function DropdownIcon({ className = '' }: { className: string }) {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" className={className}>
      <path
        d="M3.5 6.5H21.5V8.5H3.5V6.5ZM3.5 11.5H21.5V13.5H3.5V11.5ZM3.5 16.5H21.5V18.5H3.5V16.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default DropdownIcon;
