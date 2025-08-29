"use client";

import React from "react";
import Slider from "./Slider";
import GalaxyBackground from "./GalaxyBg";

const clientsImages = [
    "/assets/clients/1.png",
    "/assets/clients/2.png",
    "/assets/clients/3.png",
    "/assets/clients/4.png",
    "/assets/clients/5.png",
    "/assets/clients/6.png",
    "/assets/clients/7.png",
    "/assets/clients/8.png",
    "/assets/clients/9.png",
    "/assets/clients/10.png",
    "/assets/clients/11.png",
    "/assets/clients/12.png",
    "/assets/clients/13.png",
    "/assets/clients/14.png",
    "/assets/clients/15.png",
];

export default function Clients() {
    return (
        <section className="relative px-6 py-20 lg:py-24 overflow-hidden">
            {/* Galaxy BG */}
            <div className="absolute inset-0 -z-10">
                <GalaxyBackground />
            </div>

            <div className="container mx-auto max-w-screen-xl">
                <div className="text-center mb-12" data-aos="zoom-in">
                    <h2 className="text-3xl lg:text-5xl font-bold text-text-light mb-4">
                        Building Trust Through{" "}
                        <span className="text-text-inverse ">
                            Results
                        </span>
                    </h2>
                    <p className="text-lg text-text-light/80 max-w-2xl mx-auto">
                        With every deployment, we earn the confidence of organizations that demand performance, reliability, and innovation.
                    </p>
                </div>

                <div className="flex flex-col gap-5 overflow-hidden">
                    <Slider images={clientsImages.slice(0, 5)} direction="left" />
                    <Slider images={clientsImages.slice(5, 10)} direction="right" />
                    <Slider images={clientsImages.slice(10, 15)} direction="left" />
                </div>
            </div>
        </section>

    );
}
