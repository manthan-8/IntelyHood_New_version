"use client";

import React, { useState, useEffect } from "react";
import {
    MdEmail,
    MdPhone,
    MdLocationOn,
    MdAccessTime,
    MdSend,
    MdCheckCircle,
    MdError,
    MdMessage,
    MdPerson,
    MdBusiness,
    MdLanguage,
} from "react-icons/md";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
        null
    );
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    const services = [
        "Web Development",
        "Mobile App Development",
        "Cloud Solutions",
        "Cybersecurity",
        "IT Consulting",
        "Database Management",
        "DevOps Services",
        "Other",
    ];

    const contactInfo = [
        {
            icon: MdEmail,
            title: "Email Us",
            info: "contact@techsolutions.com",
            subInfo: "We typically respond within 2 hours",
            color: "text-blue-400",
            bgColor: "bg-blue-500/10",
        },
        {
            icon: MdPhone,
            title: "Call Us",
            info: "+1 (555) 123-4567",
            subInfo: "Mon-Fri 9AM-6PM EST",
            color: "text-green-400",
            bgColor: "bg-green-500/10",
        },
        {
            icon: MdLocationOn,
            title: "Visit Us",
            info: "123 Tech Street, Silicon Valley",
            subInfo: "CA 94043, United States",
            color: "text-purple-400",
            bgColor: "bg-purple-500/10",
        },
        {
            icon: MdAccessTime,
            title: "Business Hours",
            info: "Monday - Friday",
            subInfo: "9:00 AM - 6:00 PM EST",
            color: "text-yellow-400",
            bgColor: "bg-yellow-500/10",
        },
    ];

    const socialLinks = [
        { icon: FaLinkedin, href: "#", label: "LinkedIn" },
        { icon: FaTwitter, href: "#", label: "Twitter" },
        { icon: FaGithub, href: "#", label: "GitHub" },
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Simulate API call
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                company: "",
                phone: "",
                service: "",
                message: "",
            });
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClasses = (fieldName: keyof typeof formData) => `
    w-full px-4 py-3 bg-slate-800/50 border-2 rounded-lg text-white placeholder-gray-400
    transition-all duration-300 focus:outline-none backdrop-blur-sm
    ${focusedField === fieldName || formData[fieldName]
            ? "border-blue-500 bg-slate-800/70"
            : "border-slate-700 hover:border-slate-600"
        }
    `;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                    {[...Array(30)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                animationDuration: `${2 + Math.random() * 3}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="relative z-10 container mx-auto px-4 py-20">
                {/* Header Section */}
                <div
                    className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
                        <MdMessage className="w-4 h-4 text-blue-400 mr-2" />
                        <span className="text-blue-400 text-sm font-medium">
                            Get In Touch
                        </span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                        Let's Build Something
                        <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Amazing Together
                        </span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Ready to transform your business with cutting-edge technology? Let's
                        discuss your project and create innovative solutions.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <div
                        className={`lg:col-span-2 transform transition-all duration-1000 delay-200 ${isVisible
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-10 opacity-0"
                            }`}
                    >
                        <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-700/50 p-8 shadow-2xl">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <MdSend className="w-8 h-8 text-blue-400" />
                                Send us a message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label className="block text-gray-300 font-medium mb-2">
                                            <MdPerson className="w-4 h-4 inline mr-2" />
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField("name")}
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="John Doe"
                                            className={inputClasses("name")}
                                            required
                                        />
                                    </div>

                                    <div className="relative">
                                        <label className="block text-gray-300 font-medium mb-2">
                                            <MdEmail className="w-4 h-4 inline mr-2" />
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField("email")}
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="john@company.com"
                                            className={inputClasses("email")}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label className="block text-gray-300 font-medium mb-2">
                                            <MdBusiness className="w-4 h-4 inline mr-2" />
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField("company")}
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="Your Company"
                                            className={inputClasses("company")}
                                        />
                                    </div>

                                    <div className="relative">
                                        <label className="block text-gray-300 font-medium mb-2">
                                            <MdPhone className="w-4 h-4 inline mr-2" />
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField("phone")}
                                            onBlur={() => setFocusedField(null)}
                                            placeholder="+1 (555) 123-4567"
                                            className={inputClasses("phone")}
                                        />
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="block text-gray-300 font-medium mb-2">
                                        <MdLanguage className="w-4 h-4 inline mr-2" />
                                        Service Required *
                                    </label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField("service")}
                                        onBlur={() => setFocusedField(null)}
                                        className={inputClasses("service")}
                                        required
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service) => (
                                            <option
                                                key={service}
                                                value={service}
                                                className="bg-slate-800"
                                            >
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="relative">
                                    <label className="block text-gray-300 font-medium mb-2">
                                        <MdMessage className="w-4 h-4 inline mr-2" />
                                        Project Details *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        onFocus={() => setFocusedField("message")}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="Tell us about your project, requirements, timeline, and budget..."
                                        rows={5}
                                        className={inputClasses("message")}
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg
                           hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300
                           disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-blue-500/25
                           flex items-center justify-center gap-3"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <MdSend className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {/* Status Messages */}
                                {submitStatus === "success" && (
                                    <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 animate-fade-in">
                                        <MdCheckCircle className="w-5 h-5" />
                                        Message sent successfully! We&apos;ll get back to you within
                                        24 hours.
                                    </div>
                                )}

                                {submitStatus === "error" && (
                                    <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 animate-fade-in">
                                        <MdError className="w-5 h-5" />
                                        Failed to send message. Please try again or contact us
                                        directly.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div
                        className={`space-y-6 transform transition-all duration-1000 delay-400 ${isVisible
                                ? "translate-x-0 opacity-100"
                                : "translate-x-10 opacity-0"
                            }`}
                    >
                        {contactInfo.map((item, index) => (
                            <div
                                key={item.title}
                                className={`p-6 bg-slate-800/30 backdrop-blur-lg rounded-xl border border-slate-700/50 hover:border-slate-600 transform hover:scale-105 transition-all duration-300 shadow-lg ${item.bgColor}/5`}
                                style={{ animationDelay: `${600 + index * 100}ms` }}
                            >
                                <div
                                    className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center mb-4`}
                                >
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                </div>
                                <h3 className="text-white font-semibold text-lg mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 font-medium">{item.info}</p>
                                <p className="text-gray-400 text-sm mt-1">{item.subInfo}</p>
                            </div>
                        ))}

                        {/* Social Links */}
                        <div className="p-6 bg-slate-800/30 backdrop-blur-lg rounded-xl border border-slate-700/50">
                            <h3 className="text-white font-semibold text-lg mb-4">
                                Follow Us
                            </h3>
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-slate-600/50 transform hover:scale-110 transition-all duration-300"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Response Promise */}
                        <div className="p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-lg rounded-xl border border-blue-500/20">
                            <div className="flex items-center gap-3 mb-3">
                                <MdCheckCircle className="w-6 h-6 text-green-400" />
                                <h3 className="text-white font-semibold">
                                    Quick Response Promise
                                </h3>
                            </div>
                            <p className="text-gray-300 text-sm">
                                We respond to all inquiries within 2 hours during business
                                hours. For urgent matters, please call us directly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
