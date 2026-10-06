export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 76 28" className={className} role="img" aria-label="Nike">
      <path
        fill="currentColor"
        d="M0 27.5C-.3 24 1.4 20.2 4.9 17c3-2.7 7.200-4.800 12-6.200 8.300-2.400 18.500-1.800 26.500.9L76 0 25.300 22.400C16.500 26.300 7.600 28.500 3.700 28.500 1.700 28.500.1 28.300 0 27.500Z"
      />
    </svg>
  );
}
