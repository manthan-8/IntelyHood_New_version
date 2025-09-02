"use client";

import React, { useRef, useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone, MdLocationPin } from "react-icons/md";
import GalaxyBackground from "./GalaxyBg";
import Link from "next/link";

export default function FooterReveal() {
  const footerRef = useRef<HTMLDivElement>(null);

  return (
    <footer className="relative px-6 py-15 lg:py-20">
      <div className="container mx-auto max-w-screen-xl">
        <div ref={footerRef} className="text-text-main -z-40" >
          <GalaxyBackground />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Left Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="logowhite.png" alt="" className="h-15" />
              </div>
              <p className="mb-6">
                We create future-proof digital experiences by engineering smart,
                scalable software.
              </p>
              <div className="flex space-x-4 text-primary-main text-2xl">
                <div className="p-2 bg-primary-dark/20 border hover:bg-primary-dark/40 transition-ease-in-out duration-200">
                  <a href="https://api.whatsapp.com/send?phone=919406519122&text=Hello!%20I%27m%20interested%20in%20your%20services.%20This%20inquiry%20is%20from%20your%20website" target="_blank"><FaWhatsapp /></a>
                </div>
                <div className="p-2 bg-primary-dark/20 border hover:bg-primary-dark/40 transition-ease-in-out duration-200">
                  <a href="https://www.facebook.com/PrakharArtServices/" target="_blank"><FaFacebook /></a>
                </div>
                <div className="p-2 bg-primary-dark/20 border hover:bg-primary-dark/40 transition-ease-in-out duration-200">
                  <a href="https://www.instagram.com/prakharart/" target="_blank"><FaInstagram /></a>
                </div>
                <div className="p-2 bg-primary-dark/20 border hover:bg-primary-dark/40 transition-ease-in-out duration-200">
                  <a href="https://www.linkedin.com/company/prakhar-art-solutions/" target="_blank"><FaLinkedin /></a>
                </div>
              </div>
            </div>

            {/* Middle Section */}
            <div className="lg:pl-20">
              <h3 className="text-primary-main font-bold mb-4 uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-primary-light">Home</a></li>
                <li><a href="/about" className="hover:text-primary-light">About Us</a></li>
                <li><a href="/contact" className="hover:text-primary-light">Contact Us</a></li>
                <li><a href="/service" className="hover:text-primary-light">Services</a></li>
              </ul>
            </div>

            {/* Right Section */}
            <div>
              <h3 className="text-primary-main font-bold mb-4 uppercase tracking-wider">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <MdPhone className="text-primary-main" />
                  <a
                    href="tel:+917649800211"
                    className="hover:text-primary-light transition-colors duration-200"
                  >
                    +91 7649800211
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <MdPhone className="text-primary-main" />
                  <a
                    href="tel:+918966983955"
                    className="hover:text-primary-light transition-colors duration-200"
                  >
                    +91 8966983955
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <MdEmail className="text-primary-main" />
                  <a
                    href="mailto:info@patchlinetech.com"
                    className="hover:text-primary-light transition-colors duration-200"
                  >
                    info@patchlinetech.com
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <MdEmail className="text-primary-main" />
                  <a
                    href="mailto:support@patchlinetech.com"
                    className="hover:text-primary-light transition-colors duration-200"
                  >
                    support@patchlinetech.com
                  </a>
                </li>
              </ul>
            </div>


            <div className="space-y-4">
              <h4 className="text-primary-main font-bold mb-4 uppercase tracking-wider">Address</h4>
              <a  target="_blank" href="https://www.google.com/maps/place/Patch+Line+Technologies/@22.6931301,75.8670594,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fdcc06a09e7b:0x6b156f6b6d35d4a9!8m2!3d22.6931301!4d75.8670594!16s%2Fg%2F11x27fz3l7?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D" className="flex items-start gap-3 hover:text-primary-light transition-colors duration-200">
                <MdLocationPin className="inline w-15 mt-1 text-primary-main" />
                Office No.209, Veda Business Park,
                Bhawarkua Main Square,
                Indore, Madhya Pradesh - 452009
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border-dark/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>
              © 2025 <span className="font-semibold">Patch Line Technologies</span>. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacyPolicy" className="hover:text-primary-main">Privacy Policy</a>
              <a href="/terms&Condition" className="hover:text-primary-main">Terms & Conditions</a>
              <a href="/refund" className="hover:text-primary-main">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
