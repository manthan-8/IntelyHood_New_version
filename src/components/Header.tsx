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
      className={`fixed top-0 w-full z-[9999] p-5 transition-transform duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'} ${isMenuOpen ? 'backdrop-blur-2xl h-full' : ''}`}
    >
      <div className="container mx-auto max-w-screen-xl">
        {/* Logo */}
        <nav className="flex items-center justify-between rounded-lg border border-border-dark/20 p-4 backdrop-blur-xl">
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
          <div className="hidden lg:flex items-center gap-8 py-3 px-5 rounded-lg">
            {navItems.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.title}
                  href={link.path}
                  className={`relative text-base font-semibold transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-primary-main after:transition-all after:duration-300 ${isActive
                    ? 'text-primary-main after:w-full' : 'text-text-light hover:text-primary-main after:w-0 hover:after:w-full'}`}>
                  {link.title}
                </Link>
              );
            })}
          </div>

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

        </nav>

        {/* Mobile Menu */}
        {
          isMenuOpen && (
            <nav className={`flex flex-col text-center gap-5 ${isMenuOpen ? 'mt-10' : ''}`}>
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
          )
        }
      </div>
    </header >
  );
};

export default Header;
