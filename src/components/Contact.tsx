"use client"
import GalaxyBackground from "./GalaxyBg";
import ContactForm from "./ContactForm";

export function Contact() {
    return (
        <section className="relative px-6 py-15 lg:py-20">
            <div className="container max-w-screen-xl mx-auto overflow-hidden">
                <GalaxyBackground />

                <div className="relative flex flex-col items-center justify-center min-h-screen gap-8 sm:gap-12">
                    {/* Heading Section */}
                    <div className="flex flex-col items-center text-center px-4 max-w-4xl">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl text-text-light font-bold z-20 leading-tight">
                            Get in <span className="text-text-inverse">Touch</span>
                        </h2>
                        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-text-light/80 z-20 max-w-xs sm:max-w-md md:max-w-xl leading-relaxed">
                            We would love to hear from you! Please fill out the form below.
                        </p>
                    </div>

                    {/* Form + Map Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full px-4">
                        {/* Contact Form */}
                        <div className="z-20">
                            <ContactForm />
                        </div>

                        {/* Map */}
                        <div className="rounded-2xl overflow-hidden shadow-lg z-20">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.943957153975!2d75.8670594!3d22.693130099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdcc06a09e7b%3A0x6b156f6b6d35d4a9!2sPatch%20Line%20Technologies!5e0!3m2!1sen!2sin!4v1756799401668!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ minHeight: "400px", border: 0 }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
