"use client";

import React, { useState, useEffect } from 'react';
import { 
  MdRocket,
  MdVisibility,
  MdStar,
  MdPeople,
  MdTrendingUp,
  MdShield,
  MdSpeed,
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
    { key: 'projects' as CounterKeys, label: 'Projects Completed', target: 500, suffix: '+', icon: MdCode, color: 'text-blue-400' },
    { key: 'clients' as CounterKeys, label: 'Happy Clients', target: 200, suffix: '+', icon: MdPeople, color: 'text-green-400' },
    { key: 'experience' as CounterKeys, label: 'Years Experience', target: 10, suffix: '+', icon: MdTrendingUp, color: 'text-purple-400' },
    { key: 'satisfaction' as CounterKeys, label: 'Client Satisfaction', target: 99, suffix: '%', icon: MdStar, color: 'text-yellow-400' }
  ];

  const values = [
    {
      icon: BiBulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges.',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    },
    {
      icon: MdShield,
      title: 'Reliability',
      description: 'Our robust systems and processes ensure consistent, dependable results for every project.',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: BiHeart,
      title: 'Passion',
      description: 'We are passionate about technology and committed to delivering exceptional experiences.',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: BiTrophy,
      title: 'Excellence',
      description: 'We strive for perfection in every detail, from code quality to customer service.',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      bio: 'Visionary leader with 15+ years in tech industry, driving innovation and growth.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1d4?w=400&h=400&fit=crop&crop=face',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Full-stack architect passionate about scalable solutions and emerging technologies.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'Creative designer focused on user experience and beautiful, functional interfaces.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'David Kim',
      role: 'Security Expert',
      bio: 'Cybersecurity specialist ensuring robust protection for all our solutions.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      social: { linkedin: '#', github: '#' }
    }
  ];

  const services = [
    { icon: MdCode, title: 'Custom Development', description: 'Tailored software solutions' },
    { icon: MdCloud, title: 'Cloud Solutions', description: 'Scalable infrastructure' },
    { icon: MdSecurity, title: 'Cybersecurity', description: 'Advanced protection' },
    { icon: MdSupport, title: '24/7 Support', description: 'Round-the-clock assistance' }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <MdPeople className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">About TechSolutions</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            We Build the Future
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              One Solution at a Time
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A passionate team of innovators, developers, and visionaries dedicated to transforming 
            businesses through cutting-edge technology solutions and exceptional service.
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className="bg-slate-800/30 backdrop-blur-lg rounded-xl border border-slate-700/50 p-6 text-center hover:border-slate-600 transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
              <div className="text-3xl font-bold text-white mb-2">
                {counters[stat.key]}{stat.suffix}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission/Vision/Story Tabs */}
        <div className={`mb-20 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-slate-800/30 backdrop-blur-lg rounded-2xl border border-slate-700/50 p-8">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
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
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {tabContent[activeTab].content}
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className={`mb-20 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`p-6 bg-slate-800/30 backdrop-blur-lg rounded-xl border border-slate-700/50 hover:border-slate-600 transform hover:scale-105 transition-all duration-300 text-center ${value.bgColor}/5`}
                style={{ animationDelay: `${700 + index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${value.bgColor} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className={`mb-20 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300">The brilliant minds behind our success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-slate-800/30 backdrop-blur-lg rounded-xl border border-slate-700/50 p-6 hover:border-slate-600 transform hover:scale-105 transition-all duration-300 text-center group"
                style={{ animationDelay: `${900 + index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-slate-700 group-hover:border-blue-500 transition-all duration-300"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                
                <div className="flex justify-center gap-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      <FaTwitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Preview */}
        <div className={`mb-20 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-xl text-gray-300">Comprehensive IT solutions for modern businesses</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-6 bg-slate-800/30 backdrop-blur-lg rounded-xl border border-slate-700/50 hover:border-slate-600 transform hover:scale-105 transition-all duration-300 text-center group"
                style={{ animationDelay: `${1100 + index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-lg rounded-2xl border border-blue-500/20 p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise and passion can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-lg font-semibold hover:border-gray-400 hover:text-white transform hover:scale-105 transition-all duration-300">
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