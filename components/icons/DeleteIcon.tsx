import React from "react";

function DeleteIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="20" height="24"  className={className}>
      <path
        d="M5 20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H15C15.5304 22 16.0391 21.7893 16.4142 21.4142C16.7893 21.0391 17 20.5304 17 20V8H5V20ZM7 10H15V20H7V10ZM14.5 5L13.5 4H8.5L7.5 5H4V7H18V5H14.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default DeleteIcon;
