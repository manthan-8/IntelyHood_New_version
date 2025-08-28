"use client";

import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Animated connection lines with flowing lights */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(75, 85, 99, 0.3)" />
            <stop offset="50%" stopColor="rgba(156, 163, 175, 0.6)" />
            <stop offset="100%" stopColor="rgba(75, 85, 99, 0.3)" />
          </linearGradient>
          
          <linearGradient id="lightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(251, 146, 60, 0)">
              <animate attributeName="stop-color" values="rgba(251, 146, 60, 0);rgba(251, 146, 60, 1);rgba(251, 146, 60, 0)" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="rgba(251, 146, 60, 1)">
              <animate attributeName="stop-color" values="rgba(251, 146, 60, 1);rgba(251, 146, 60, 0);rgba(251, 146, 60, 1)" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="rgba(251, 146, 60, 0)">
              <animate attributeName="stop-color" values="rgba(251, 146, 60, 0);rgba(251, 146, 60, 1);rgba(251, 146, 60, 0)" dur="3s" repeatCount="indefinite" />
            </stop>
            <animateTransform attributeName="gradientTransform" type="translate" values="-100 0;300 0;-100 0" dur="4s" repeatCount="indefinite" />
          </linearGradient>
        </defs>
        
        {/* Connection paths */}
        <path d="M100,150 Q300,100 500,200 T900,300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M100,150 Q300,100 500,200 T900,300" stroke="url(#lightGradient)" strokeWidth="3" fill="none" />
        
        <path d="M200,600 Q400,500 600,400 T1100,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M200,600 Q400,500 600,400 T1100,200" stroke="url(#lightGradient)" strokeWidth="3" fill="none">
          <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="5s" repeatCount="indefinite" />
        </path>
        
        <path d="M1300,100 Q1000,200 700,300 T200,500" stroke="url(#lineGradient)" strokeWidth="2" fill="none" opacity="0.6" />
        <path d="M1300,100 Q1000,200 700,300 T200,500" stroke="url(#lightGradient)" strokeWidth="3" fill="none">
          <animate attributeName="stroke-dasharray" values="1000,0;0,1000;1000,0" dur="6s" repeatCount="indefinite" />
        </path>
      </svg>

      {/* Floating elements */}
      <div className="absolute top-20 left-20">
        <div className="w-20 h-20 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center shadow-2xl">
          <div className="text-white text-2xl font-bold">A</div>
        </div>
      </div>

      <div className="absolute top-32 right-32">
        <div className="w-16 h-16 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center shadow-2xl">
          <div className="text-white text-xl">S.</div>
        </div>
      </div>

      <div className="absolute bottom-32 left-16">
        <div className="w-24 h-24 bg-gray-800 rounded-2xl border border-gray-700 flex items-center justify-center shadow-2xl">
          <div className="text-white text-2xl font-bold">M</div>
        </div>
      </div>

      <div className="absolute top-1/2 right-20">
        <div className="w-20 h-20 bg-gray-800 rounded-full border border-gray-700 flex items-center justify-center shadow-2xl">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-20 right-40">
        <div className="w-18 h-18 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center shadow-2xl">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Central AI badge */}
        <div className="mb-8">
          <div className="w-32 h-32 bg-gray-800 rounded-3xl border border-gray-600 flex items-center justify-center shadow-2xl backdrop-blur-sm">
            <div className="text-white text-4xl font-bold">AI</div>
          </div>
        </div>

        {/* Main heading */}
        <div className="text-center mb-8">
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            AI
          </h1>
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Inference
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-xl md:text-2xl text-center max-w-4xl mb-12 leading-relaxed">
          Performance, flexibility, and scalability for any AI workload—built for startups and enterprises alike.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
            Get started
          </button>
          <button className="px-8 py-4 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
            Talk to an expert
          </button>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;