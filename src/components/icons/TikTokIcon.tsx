interface TikTokIconProps {
  size?: number;
  className?: string;
}

const TikTokIcon = ({ size = 20, className = '' }: TikTokIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.75 2.9 2.9 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a5.9 5.9 0 0 0-1-.1 5.9 5.9 0 0 0-5.9 5.9 5.9 5.9 0 0 0 5.9 5.9 5.9 5.9 0 0 0 5.9-5.9v-1.07a7.97 7.97 0 0 0 4.33 1.27V9.74a4.84 4.84 0 0 1-.66-.05z" />
    </svg>
  );
};

export default TikTokIcon;
