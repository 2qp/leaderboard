import { cn } from "@/lib/utils";

type LoadingSpinnerProps = {
  className?: string;
};

type LoadingSpinnerType = (props: LoadingSpinnerProps) => JSX.Element;

const LoadingSpinner: LoadingSpinnerType = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin", className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};

export { LoadingSpinner };
