"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import LogoWhite from "@/assets/logo-white.png";
import { navItems } from "@/utilities/data";
import Button from "@/templates/Button";




const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-transform duration-500 bg-[#111]/70  border-b-1 border-[#53EAFD] `}
    >
      <div className="container mx-auto max-w-screen-xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={LogoWhite}
            alt="Logo"
            width={160}
            height={50}
            className="h-auto w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-10 text-white font-medium">
          {navItems.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.title} className="relative group">
                <Link
                  href={link.path}
                  className={`${isActive ? "text-cyan-400 font-semibold" : "text-white"
                    } hover:text-cyan-400 transition`}
                >
                  {link.title}
                </Link>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300 ${isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                    }`}
                />
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="/">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <MdOutlineClose className="w-6 h-6" />
          ) : (
            <MdOutlineMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="flex flex-col items-center gap-6 py-6 bg-[#111] lg:hidden text-white font-medium">
          {navItems.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.title}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`${isActive ? "text-cyan-400 font-semibold" : "text-white"
                  } hover:text-cyan-400`}
              >
                {link.title}
              </Link>
            );
          })}
          <Button href="/">Get Started</Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
