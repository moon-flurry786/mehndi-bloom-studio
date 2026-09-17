import { cn } from "@/lib/utils";

export function Butterfly({ className }: { className?: string }) {
  return (
    <svg className={cn("butterfly", className)} viewBox="0 0 48 38" aria-hidden="true">
      <path d="M23 20C17 3 5 3 4 9c-1 7 8 12 17 14M25 20C31 3 43 3 44 9c1 7-8 12-17 14M22 22c-7 0-14 4-12 9 2 5 9 1 13-5M26 22c7 0 14 4 12 9-2 5-9 1-13-5M24 17v15M22 16l-3-4M26 16l3-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
    </svg>
  );
}
