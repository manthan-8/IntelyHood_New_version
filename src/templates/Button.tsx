import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import type { ButtonHTMLAttributes, HTMLAttributeAnchorTarget, ReactNode } from "react";
import type React from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string; // for link
  children: ReactNode;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  href,
  target,
  children,
  className = "",
  disabled = false,
  ...rest
}) => {
  const baseStyles = `
    group inline-flex gap-2 items-center justify-center curser-pointer
    px-3 py-2 font-semibold overflow-hidden text-text-light
     rounded-md bg-primary-dark transition-all duration-300 hover:scale-105
    ${className}
  `;

  const AnimationContent = () => (
    <>
      <FaLocationArrow
        className="
          transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
           group-hover:rotate-45"/>

      <span
        className="transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
group-hover:animate-fly-1">
        {children}
      </span>
    </>
  );

  if (type === "submit") {
    return (
      <button
        type="submit"
        disabled={disabled}
        className={baseStyles}
        {...rest}
      >
        <AnimationContent />
      </button>
    );
  }

  return (
    <Link href={href || "#"} target={target} className={baseStyles}>
      <AnimationContent />
    </Link>
  );
};

export default Button;
