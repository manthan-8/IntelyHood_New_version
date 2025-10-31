"use client";

import React, { useRef } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdLocationPin, MdEmail, MdPhone } from "react-icons/md";
import GalaxyBackground from "./GalaxyBg";

export default function FooterReveal() {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <footer className="relative bg-black text-gray-300 px-6 py-16 lg:py-20 overflow-hidden">
      {/* Galaxy Background */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <GalaxyBackground />
      </div>

      <div className="container mx-auto max-w-screen-xl relative z-10">
        <div ref={footerRef} className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-bold text-white tracking-wide mb-6">
              Intely<span className="text-white">Hood</span>
            </h2>
            <p className="mb-6 text-gray-400 leading-relaxed">
              We create future-proof digital experiences by engineering smart,
              scalable software.
            </p>

            <div className="flex space-x-4 text-white text-xl">
              {[
                {
                  icon: <FaWhatsapp />,
                  href: "https://api.whatsapp.com/send?phone=919406519122&text=Hello!%20I%27m%20interested%20in%20your%20services.",
                },
                { icon: <FaFacebook />, href: "https://www.facebook.com/PrakharArtServices/" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/prakharart/" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/prakhar-art-solutions/" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  className="p-2 rounded-full border border-gray-600 hover:bg-gray-800 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
                { name: "Services", href: "/service" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <MdPhone className="text-white" />
                <a href="tel:+917649800211" className="hover:text-white transition">
                  +91 76498- intelyhood
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MdPhone className="text-white" />
                <a href="tel:+918966983955" className="hover:text-white transition">
                  +91 8966- intelyhood
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MdEmail className="text-white" />
                <a href="mailto:info@IntelyHood.com" className="hover:text-white transition">
                  info@IntelyHood.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MdEmail className="text-white" />
                <a href="mailto:connect@IntelyHood.com" className="hover:text-white transition">
                  connect@IntelyHood.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MdEmail className="text-white" />
                <a href="mailto:Talentpartner@IntelyHood.com" className="hover:text-white transition">
                  Talentpartner@IntelyHood.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider">Address</h4>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Patch+Line+Technologies"
              className="flex items-start gap-3 text-gray-400 hover:text-white transition"
            >
              <MdLocationPin className="mt-1 text-white text-xl" />
              <span>
                The View, 305, Yeshwant Niwas Rd,
                <br />
                Nehru Park 2, Lad Colony,
                <br />
                Indore, Madhya Pradesh 452003
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            © 2025 <span className="font-semibold text-white">IntelyHood Technologies</span>. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacyPolicy" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms&Condition" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="/refund" className="hover:text-white">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
