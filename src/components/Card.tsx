import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  className?: string;
  children: ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return (
    <>
      <div className={twMerge("rounded-[12px] bg-(--color-card-primary) p-4 text-(--color-font-primary) border-solid border-[1px] border-(--color-card-border) ", className)}>
        {children}
      </div>
    </>
  );
}
