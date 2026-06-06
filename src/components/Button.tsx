import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClickHandler?: () => void;
}

export default function Button({ className, children, onClickHandler }: ButtonProps) {
  return (
    <>
      <button
        type="button"
        className={twMerge(
          "hover:cursor-pointer font-Poppins rounded-[8px] bg-(--color-blue-foreground) px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-(--color-button-primary) md:px-6 md:py-3 md:text-base",
          className,
        )}
        onClick={onClickHandler}
      >
        {children}
      </button>
    </>
  );
}
