import Link from "next/link";
import { FaBookmark, FaLocationArrow } from "react-icons/fa";
import type { ButtonHTMLAttributes, HTMLAttributeAnchorTarget, ReactNode } from "react";
import type React from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
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
    group relative inline-flex items-center justify-center cursor-pointer
    p-2.5 rounded-full border border-border-main/50 text-text-light font-semibold
    bg-background-dark overflow-hidden ${className}
  `;

  const AnimationContent = () => (
    <>
      <span
        className="
          absolute left-1.5 right-1.5 flex items-center justify-center w-8 h-8 rounded-full
          bg-primary-dark z-10
          transition-all duration-300 group-hover:w-[calc(100%-0.75rem)]
        "
      >
        <FaLocationArrow className="transition-transform duration-200 group-hover:rotate-45" />
      </span>
      <span
        className="flex items-center pl-9">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} target={target} className={baseStyles}>
        <AnimationContent />
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={baseStyles} {...rest}>
      <AnimationContent />
    </button>
  );
};

export default Button;