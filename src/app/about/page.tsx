"use client";

import React, { useState, useEffect } from 'react';
import {
    MdRocket,
    MdVisibility,
    MdStar,
    MdPeople,
    MdTrendingUp,
    MdShield,
    MdSupport,
    MdCode,
    MdCloud,
    MdSecurity
} from 'react-icons/md';
import {
    FaLinkedin,
    FaTwitter,
    FaGithub
} from 'react-icons/fa';
import {
    BiWorld,
    BiTrophy,
    BiHeart,
    BiBulb
} from 'react-icons/bi';
import { FlipCard } from '@/components/Service';

type TabType = 'mission' | 'vision' | 'story';
type CounterKeys = 'projects' | 'clients' | 'experience' | 'satisfaction';

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState<TabType>('mission');
    const [counters, setCounters] = useState<Record<CounterKeys, number>>({
        projects: 0,
        clients: 0,
        experience: 0,
        satisfaction: 0
    });

    const stats = [
        { key: 'projects' as CounterKeys, label: 'Projects Completed', target: 500, suffix: '+', icon: MdCode, color: 'text-[#00E7FF]' },
        { key: 'clients' as CounterKeys, label: 'Happy Clients', target: 200, suffix: '+', icon: MdPeople, color: 'text-[#00E7FF]' },
        { key: 'experience' as CounterKeys, label: 'Years Experience', target: 10, suffix: '+', icon: MdTrendingUp, color: 'text-[#00E7FF]' },
        { key: 'satisfaction' as CounterKeys, label: 'Client Satisfaction', target: 99, suffix: '%', icon: MdStar, color: 'text-[#00E7FF]' }
    ];

    const values = [
        {
            icon: "https://cdn-icons-png.flaticon.com/512/3079/3079872.png",
            title: 'Innovation',
            subtitle: 'Embracing creative solutions',
            features: ['Cutting-edge technologies', 'Creative problem-solving', 'Future-focused approach'],
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/2913/2913133.png",
            title: 'Reliability',
            subtitle: 'Consistent, dependable results',
            features: ['Robust systems & processes', 'High-quality deliverables', 'Trusted by clients'],
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
            title: 'Passion',
            subtitle: 'Committed to excellence',
            features: ['Love for technology', 'Exceptional user experiences', 'Dedicated to client success'],
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/1283/1283342.png",
            title: 'Excellence',
            subtitle: 'Striving for perfection',
            features: ['Pixel-perfect design', 'High-quality code', 'Superior customer service'],
        }
    ];

    const team = [
        {
            name: 'Sarah Johnson',
            role: 'Chief Executive Officer',
            icon: "https://cdn-icons-png.flaticon.com/512/2784/2784403.png",
            features: ["15+ years experience", "Drives innovation", "Strategic growth expert"]
        },
        {
            name: 'Michael Chen',
            role: 'Chief Technology Officer',
            icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
            features: ["Full-stack architect", "Scalable solutions", "Emerging tech enthusiast"]
        },
        {
            name: 'Emily Rodriguez',
            role: 'Head of Design',
            icon: "https://cdn-icons-png.flaticon.com/512/2696/2696051.png",
            features: ["User-centric design", "Beautiful interfaces", "Functional UX"]
        },
        {
            name: 'David Kim',
            role: 'Security Expert',
            icon: "https://cdn-icons-png.flaticon.com/512/2913/2913133.png",
            features: ["Cybersecurity specialist", "Robust protection", "Threat mitigation expert"]
        }
    ];

    const services = [
        { icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png", title: 'Custom Development', subtitle: 'Tailored software solutions', features: ["Web & Mobile Apps", "Enterprise Software", "APIs & Integrations"] },
        { icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png", title: 'Cloud Solutions', subtitle: 'Scalable infrastructure', features: ["AWS, Azure, GCP", "Serverless Architecture", "DevOps & CI/CD"] },
        { icon: "https://cdn-icons-png.flaticon.com/512/2913/2913133.png", title: 'Cybersecurity', subtitle: 'Advanced protection', features: ["Threat Analysis", "Penetration Testing", "Security Audits"] },
        { icon: "https://cdn-icons-png.flaticon.com/512/3079/3079872.png", title: '24/7 Support', subtitle: 'Round-the-clock assistance', features: ["Dedicated Support", "System Monitoring", "Incident Response"] }
    ];

    const tabs = [
        { id: 'mission' as TabType, label: 'Our Mission', icon: MdRocket },
        { id: 'vision' as TabType, label: 'Our Vision', icon: MdVisibility },
        { id: 'story' as TabType, label: 'Our Story', icon: BiWorld }
    ];

    useEffect(() => {
        setIsVisible(true);

        // Animate counters
        const animateCounters = () => {
            stats.forEach(stat => {
                let current = 0;
                const increment = stat.target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= stat.target) {
                        current = stat.target;
                        clearInterval(timer);
                    }
                    setCounters(prev => ({
                        ...prev,
                        [stat.key]: Math.floor(current)
                    }));
                }, 30);
            });
        };

        const timer = setTimeout(animateCounters, 500);
        return () => clearTimeout(timer);
    }, [stats]);

    const tabContent: Record<TabType, { title: string; content: string }> = {
        mission: {
            title: 'Empowering Digital Transformation',
            content: 'Our mission is to empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We believe in creating digital experiences that not only meet current needs but anticipate future challenges, enabling our clients to thrive in an ever-evolving technological landscape.'
        },
        vision: {
            title: 'Shaping the Future of Technology',
            content: 'We envision a world where technology seamlessly integrates with human potential, creating unlimited possibilities for innovation and growth. Our goal is to be the leading catalyst in this transformation, building bridges between cutting-edge technology and real-world business success.'
        },
        story: {
            title: 'Founded on Innovation',
            content: 'Founded in 2014 by a team of passionate technologists, we started with a simple belief: technology should solve real problems and create meaningful impact. From our humble beginnings as a small startup to becoming a trusted partner for enterprises worldwide, our journey has been driven by curiosity, dedication, and an unwavering commitment to excellence.'
        }
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-neutral-950 to-neutral-900 text-white">
            <div className="relative z-10 container mx-auto px-4 py-20">
                {/* Hero Section */}
                <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#00E7FF]/10 border border-[#00E7FF]/20 backdrop-blur-sm mb-6">
                        <MdPeople className="w-4 h-4 text-[#00E7FF] mr-2" />
                        <span className="text-[#00E7FF] text-sm font-medium">About TechSolutions</span>
                    </div>

                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                        We Build the Future
                        <span className="block bg-gradient-to-r from-[#00E7FF] to-[#7AFFF7] bg-clip-text text-transparent">
                            One Solution at a Time
                        </span>
                    </h1>

                    <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                        A passionate team of innovators, developers, and visionaries dedicated to transforming
                        businesses through cutting-edge technology solutions and exceptional service.
                    </p>
                </div>

                {/* Stats Section */}
                <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {stats.map((stat, index) => (
                        <div
                            key={stat.key}
                            className="relative rounded-2xl p-[2px] overflow-hidden"
                            style={{ animationDelay: `${300 + index * 100}ms` }}
                        >
                            <div className="absolute inset-0 rounded-2xl animate-rotateGlow">
                                <div className="absolute -inset-[40%] bg-[conic-gradient(from_0deg,#00E7FFaa_0deg,#00E7FFaa_20deg,transparent_20deg,transparent_360deg)] blur-md" />
                            </div>
                            <div className="relative inset-[2px] rounded-2xl bg-neutral-900/90 backdrop-blur p-6 text-center">
                                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
                                <div className="text-3xl font-bold text-white mb-2">
                                    {counters[stat.key]}{stat.suffix}
                                </div>
                                <div className="text-neutral-400 text-sm">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mission/Vision/Story Tabs */}
                <div className={`mb-20 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="bg-neutral-900/80 backdrop-blur-lg rounded-2xl border border-neutral-700/50 p-8">
                        {/* Tab Navigation */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === tab.id
                                            ? 'bg-[#00E7FF] text-black shadow-lg'
                                            : 'bg-neutral-700/50 text-neutral-300 hover:bg-neutral-600/50'
                                        }`}
                                >
                                    <tab.icon className="w-5 h-5" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-white mb-6">
                                {tabContent[activeTab].title}
                            </h3>
                            <p className="text-lg text-neutral-300 max-w-4xl mx-auto leading-relaxed">
                                {tabContent[activeTab].content}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div className={`mb-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
                        <p className="text-xl text-neutral-300">The principles that guide everything we do</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <FlipCard key={index} {...value} />
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div className={`mb-20 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
                        <p className="text-xl text-neutral-300">The brilliant minds behind our success</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <FlipCard key={index} title={member.name} subtitle={member.role} features={member.features} icon={member.icon} />
                        ))}
                    </div>
                </div>

                {/* Services Preview */}
                <div className={`mb-20 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
                        <p className="text-xl text-neutral-300">Comprehensive IT solutions for modern businesses</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <FlipCard key={index} {...service} />
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className={`text-center transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="bg-neutral-900/80 backdrop-blur-lg rounded-2xl border border-[#00E7FF]/20 p-12">
                        <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
                        <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                            Let's discuss how our expertise and passion can help you achieve your technology goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-gradient-to-r from-[#00E7FF] to-[#7AFFF7] text-black font-semibold rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#00E7FF]/25">
                                Start Your Project
                            </button>
                            <button className="px-8 py-4 border-2 border-neutral-600 text-neutral-300 rounded-lg font-semibold hover:border-neutral-400 hover:text-white transform hover:scale-105 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;