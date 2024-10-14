import React from "react";

function EditIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 25" className={className}>
      <path
        d="M21.21 7.04128C21.6 6.65128 21.6 6.00128 21.21 5.63128L18.87 3.29128C18.5 2.90128 17.85 2.90128 17.46 3.29128L15.62 5.12128L19.37 8.87128M3.5 17.2513V21.0013H7.25L18.31 9.93128L14.56 6.18128L3.5 17.2513Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default EditIcon;
