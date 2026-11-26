interface WorkNestLogoProps {
  size?: number;
  className?: string;
}

export default function WorkNestLogo({ size = 32, className = "" }: WorkNestLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Blue figure left */}
      <circle cx="13" cy="5" r="4" fill="#1677E8" />
      <path
        d="M4 28C4 20.268 7.134 14 13 14C16 14 18.5 15.5 20 18"
        stroke="#1677E8"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Orange figure right */}
      <circle cx="35" cy="5" r="4" fill="#F59E0B" />
      <path
        d="M44 28C44 20.268 40.866 14 35 14C32 14 29.5 15.5 28 18"
        stroke="#F59E0B"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      {/* Linking arms */}
      <path
        d="M20 18C21.5 21 23 24 24 24C25 24 26.5 21 28 18"
        stroke="#1677E8"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
