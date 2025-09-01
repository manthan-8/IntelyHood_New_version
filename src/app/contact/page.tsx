"use client";

import React from "react";
import {
    MdEmail,
    MdPhone,
    MdLocationOn,
    MdAccessTime,
    MdCheckCircle,
} from "react-icons/md";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import GalaxyBackground from "@/components/GalaxyBg";
import ContactForm from "@/components/ContactForm";

const ContactUs = () => {
    const contactInfo = [
        {
            icon: MdEmail,
            title: "Email Us",
            info: "contact@techsolutions.com",
            subInfo: "We typically respond within 2 hours",
            color: "text-primary-main",
            bgColor: "bg-primary-dark/20",
        },
        {
            icon: MdPhone,
            title: "Call Us",
            info: "+1 (555) 123-4567",
            subInfo: "Mon-Fri 9AM-6PM EST",
            color: "text-primary-main",
            bgColor: "bg-primary-dark/20",
        },
        {
            icon: MdLocationOn,
            title: "Visit Us",
            info: "123 Tech Street, Silicon Valley",
            subInfo: "CA 94043, United States",
            color: "text-primary-main",
            bgColor: "bg-primary-dark/20",
        },
        {
            icon: MdAccessTime,
            title: "Business Hours",
            info: "Monday - Friday",
            subInfo: "9:00 AM - 6:00 PM EST",
            color: "text-primary-main",
            bgColor: "bg-primary-dark/20",
        },
    ];

    const socialLinks = [
        { icon: FaLinkedin, href: "#", label: "LinkedIn" },
        { icon: FaInstagram, href: "#", label: "Instagram" },
        { icon: FaMeta, href: "#", label: "Meta" },
    ];

    return (
        <>
            <section className="relative px-6 pb-15 pt-40 lg:pb-20 lg:pt-50">
                <div className="container max-w-screen-xl mx-auto overflow-hidden">
                    <GalaxyBackground />
                    {/* Header Section */}
                    <div
                        className={`text-center mb-16 transform transition-all duration-1000 `}
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-main border backdrop-blur-sm mb-6">
                            <span className="text-sm font-medium">
                                Get In Touch
                            </span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-bold text-text-light mb-6">
                            Let's Build Something
                            <span className="block bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent leading-[1.5]">
                                Amazing Together
                            </span>
                        </h1>

                        <p className="text-xl text-text-main max-w-2xl mx-auto">
                            Ready to transform your business with cutting-edge technology? Let's
                            discuss your project and create innovative solutions.
                        </p>
                    </div>
                </div>
            </section>
            <section className="relative px-6 py-15 lg:py-20">
                <div className="container max-w-screen-xl mx-auto overflow-hidden">
                    <GalaxyBackground/>
                    <div className="grid lg:grid-cols-2 gap-5">
                        <ContactForm />

                        <div
                            className={`grid grid-cols-2 gap-3 transform transition-all duration-1000 delay-400`}
                        >
                            {contactInfo.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="relative rounded-lg overflow-hidden group"
                                    style={{ animationDelay: `${600 + index * 100}ms` }}
                                >
                                    <div className="absolute inset-0 animate-rotateGlow group-hover:animate-none">
                                        <div className="absolute -inset-[40%] bg-[conic-gradient(from_0deg,#00E7FFaa_0deg,#00E7FFaa_20deg,transparent_20deg,transparent_360deg)] blur-md" />
                                    </div>
                                    <div className="relative inset-[1px] rounded-lg bg-background-main backdrop-blur p-6 transform hover:scale-[1.02] transition-transform duration-300 text-text-main flex flex-col items-center gap-3">
                                        <div
                                            className={`rounded-lg flex items-center justify-center`}
                                        >
                                            <item.icon className={`text-5xl p-2 rounded ${item.bgColor} ${item.color}`} />
                                        </div>
                                        <h3 className="font-semibold text-lg">
                                            {item.title}
                                        </h3>
                                        <p className="font-medium">{item.info}</p>
                                        <p className="text-sm">{item.subInfo}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Quick Response Promise */}
                            <div className="bg-gradient-to-r from-primary-main/10 to-primary-light/10 backdrop-blur-lg rounded-lg p-6 border border-primary-main/20 text-text-main col-span-2 space-y-3">
                                <h3 className="font-semibold">
                                    Follow Us On
                                </h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            className="bg-background-light text-2xl p-2 rounded-lg flex items-center justify-center hover:bg-background-main border border-border-dark/30 transform hover:scale-110 transition-all duration-300"
                                            aria-label={social.label}
                                        >
                                            <social.icon className="text-primary-main" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;