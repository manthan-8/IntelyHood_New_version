import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import type React from "react";

interface ButtonProps {
  href?: string; // for link
  children: ReactNode;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  target?: string;
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
    group relative inline-flex items-center justify-center
    px-8 py-3 font-semibold text-white overflow-hidden
    
    ${className}
  `;

  const BackgroundLayers = () => (
    <>
      {/* Black base background */}
      <span className="absolute inset-0 bg-black"></span>

      {/* Left blue half (moves upward on hover) */}
      <span
        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-cyan-500 to-cyan-600
        translate-y-0 group-hover:-translate-y-full
        transition-transform duration-500 ease-in-out"
      ></span>

      {/* Right blue half (moves downward on hover) */}
      <span
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-r from-cyan-600 to-cyan-700
        translate-y-0 group-hover:translate-y-full
        transition-transform duration-500 ease-in-out"
      ></span>

      {/* Animated Border */}
      <span
        className="absolute inset-0  border border-transparent 
        group-hover:border-cyan-700 transition-all duration-500 ease-in-out"
      ></span>
    </>
  );

  const Content = () => (
    <span className="relative flex items-center gap-3">
      {children}
      <FiArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
    </span>
  );

  if (type === "submit") {
    return (
      <button
        type="submit"
        disabled={disabled}
        className={`${baseStyles} w-full`}
        {...rest}
      >
        <BackgroundLayers />
        <Content />
      </button>
    );
  }

  return (
    <Link href={href || "#"} target={target} className={baseStyles} {...rest}>
      <BackgroundLayers />
      <Content />
    </Link>
  );
};

export default Button;
