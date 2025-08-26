import Link from "next/link";
import React from "react";

// Defines the properties (props) the button component will accept
interface ButtonProps {
  /** The URL the button will link to. */
  href: string;
  /** The content displayed inside the button, like text or an icon. */
  children: React.ReactNode;
  /** Optional additional CSS classes for custom styling. */
  className?: string;
}

/**
 * A professional, reusable button component with hover animations.
 * It uses a standard `<a>` tag to be framework-agnostic.
 */
const Button: React.FC<ButtonProps> = ({ href, children, className = "" }) => {
  return (
    <Link
      href={href}
      className={`
        inline-block
        px-6 py-3
        font-semibold
        text-zinc-950
        text-center
        bg-emerald-400
        rounded-lg
        shadow-md
        transform
        transition-all
        duration-300
        ease-in-out
        hover:shadow-lg
        focus:outline-none
        focus:ring-2
        focus:ring-cyan-500
        focus:ring-opacity-75
        focus:ring-offset-2
        ${className}
      `}
    >
      {children}
    </Link>
  );
};

export default Button;