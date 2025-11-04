export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Cat silhouette with paw */}
        <circle cx="20" cy="20" r="18" fill="#F2A81D" />
        <path
          d="M12 16C12 16 10 14 8 16C8 16 7 20 10 22C10 22 11 18 12 16Z"
          fill="white"
        />
        <path
          d="M28 16C28 16 30 14 32 16C32 16 33 20 30 22C30 22 29 18 28 16Z"
          fill="white"
        />
        <circle cx="15" cy="20" r="2" fill="white" />
        <circle cx="25" cy="20" r="2" fill="white" />
        <path
          d="M20 22C20 22 18 24 20 26C20 26 22 24 20 22Z"
          fill="white"
        />
        <path
          d="M14 24C14 24 16 26 18 25"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M26 24C26 24 24 26 22 25"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Paw print accent */}
        <g transform="translate(26, 28)">
          <ellipse cx="0" cy="0" rx="2" ry="2.5" fill="#D92534" />
          <ellipse cx="-3" cy="3" rx="1.5" ry="2" fill="#D92534" />
          <ellipse cx="3" cy="3" rx="1.5" ry="2" fill="#D92534" />
          <ellipse cx="0" cy="5" rx="1.5" ry="2" fill="#D92534" />
        </g>
      </svg>
      <span className="text-2xl tracking-tight">
        <span className="font-semibold">miauzly</span>
        <span className="text-[#F2A81D]">.ch</span>
      </span>
    </div>
  );
}
