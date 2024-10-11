import React from "react";

function CartIcon({ className = '' }: { className: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 25" className={className}>
      <path
        d="M17 7H15C15 4.2 12.8 2 10 2C7.2 2 5 4.2 5 7H3C1.9 7 1 7.9 1 9V21C1 22.1 1.9 23 3 23H17C18.1 23 19 22.1 19 21V9C19 7.9 18.1 7 17 7ZM10 4C11.7 4 13 5.3 13 7H7C7 5.3 8.3 4 10 4ZM17 21H3V9H17V21Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default CartIcon;
