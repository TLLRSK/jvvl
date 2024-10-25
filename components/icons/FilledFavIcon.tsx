function FilledFavIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 10"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M6 10L5.13 9.28065C2.04 6.7357 0 5.05177 0 2.99728C0 1.31335 1.452 0 3.3 0C4.344 0 5.346 0.441417 6 1.13352C6.654 0.441417 7.656 0 8.7 0C10.548 0 12 1.31335 12 2.99728C12 5.05177 9.96 6.7357 6.87 9.28065L6 10Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default FilledFavIcon;