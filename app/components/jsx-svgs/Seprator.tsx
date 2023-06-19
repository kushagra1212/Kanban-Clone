export const Seprarator = ({ color }: { color: string }) => {
  return (
    <svg
      height={4}
      viewBox="0 0 314 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path d="M0 2H314" stroke={color} strokeWidth={3} />
    </svg>
  );
};
