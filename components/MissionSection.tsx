'use client';

import React from 'react';
import Image from 'next/image';
import { Playfair_Display, Newsreader, Indie_Flower, Roboto_Flex } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: '300',
  style: ['normal', 'italic'],
});

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
});

const roboto = Roboto_Flex({
  subsets: ['latin'],
  weight: '400',
});

const MissionSection = () => {
  return (
    <section className="w-full bg-[#FFF1EE] py-16 md:py-24 relative overflow-hidden">
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="decorative-elements">
          {/* Animated circles */}
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          
          {/* Animated dots */}
          <div className="decorative-dot dot-1"></div>
          <div className="decorative-dot dot-2"></div>
          <div className="decorative-dot dot-3"></div>
          <div className="decorative-dot dot-4"></div>
          <div className="decorative-dot dot-5"></div>
          
          {/* Animated lines */}
          <div className="decorative-line"></div>
          <div className="diagonal-line line-1"></div>
          <div className="diagonal-line line-2"></div>
          
          {/* Squiggly lines */}
          <svg className="squiggly-line" viewBox="0 0 100 20" preserveAspectRatio="none">
            <path d="M0,10 Q25,20 50,10 T100,10" className="path-1" />
            <path d="M0,10 Q25,0 50,10 T100,10" className="path-2" />
          </svg>
          
          
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Vertical Divider Line */}
          <div className="hidden md:block absolute h-full w-px left-1/2 transform -translate-x-1/2">
            <div className="h-full w-full hand-drawn-divider"></div>
          </div>
          
          {/* Virtual Office Section */}
          <div className="flex flex-col items-center text-center px-8 fade-in-section">
            <h3 className={`${newsreader.className} italic text-3xl md:text-4xl text-gray-800 mb-12 float-animation relative font-light`}>
              <span className="relative inline-block">
                Virtual Office
                <div className="absolute -bottom-4 left-0 w-full h-1 bg-[#40CFA4] opacity-20 transform scale-x-75"></div>
              </span>
            </h3>
            <div className="relative w-64 h-64 mb-12 image-container">
              <div className="hand-drawn-frame"></div>
              <Image
                src="/images/virtual.jpg"
                alt="Virtual Office Illustration"
                fill
                className="object-contain hover-lift"
              />
            </div>
            <h2 className={`${playfair.className} text-4xl md:text-[2.75rem] font-bold mb-6 leading-tight slide-up`}>
              At your fingertips,
              <br />
              <span className="text-[#40CFA4] gradient-text">anytime, anywhere.</span>
            </h2>
            <p className={`${roboto.className} text-gray-600 mb-10 max-w-md leading-relaxed fade-in`}>
              Wherever the road takes you, we're right by your side. Think of us as retirement GPS without the
              annoying robot voice. Our virtual office brings expert retirement guidance to your fingertips, 
              with secure video consultations, real-time portfolio tracking, and instant document sharing. 
              Experience retirement planning that fits your lifestyle, not the other way around.
            </p>
            <button className="fancy-button">
              <span className={`${indieFlower.className} button-text`}>Visit The Office</span>
            </button>
          </div>

          {/* Our Mission Section */}
          <div className="flex flex-col items-center text-center px-8 fade-in-section delay-200">
            <h3 className={`${newsreader.className} italic text-3xl md:text-4xl text-gray-800 mb-12 float-animation relative font-light`}>
              <span className="relative inline-block">
                Our Mission
                <div className="absolute -bottom-4 left-0 w-full h-1 bg-[#40CFA4] opacity-20 transform scale-x-75"></div>
              </span>
            </h3>
            <div className="relative w-64 h-64 mb-12 image-container">
              <div className="hand-drawn-frame"></div>
              <Image
                src="/images/mission.jpg"
                alt="Mission Illustration"
                fill
                className="object-contain hover-lift"
              />
            </div>
            <h2 className={`${playfair.className} text-4xl md:text-[2.75rem] font-bold mb-6 leading-tight slide-up`}>
              Here to help you
              <br />
              <span className="text-[#40CFA4] gradient-text">make sense of it all.</span>
            </h2>
            <p className={`${roboto.className} text-gray-600 mb-10 max-w-md leading-relaxed fade-in`}>
              Don't just retire. Retire with a purpose. Our Mission is to make your retirement better, plain and simple.
              We're real people with families and goals, just like you. So we understand how personal retirement is.
              We'll be with you every step of the way, making sure you're always on the right path, no matter the circumstances.
              Together, we'll navigate the complexities of retirement planning with confidence.
            </p>
            <button className="fancy-button">
              <span className={`${indieFlower.className} button-text`}>Meet The Team</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .decorative-elements {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .decorative-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #40CFA4;
          opacity: 0.2;
        }

        .dot-1 {
          top: 15%;
          left: 10%;
          animation: fade-in 0.6s ease-out forwards;
        }

        .dot-2 {
          top: 25%;
          right: 15%;
          animation: fade-in 0.6s ease-out 0.2s forwards;
        }

        .dot-3 {
          bottom: 20%;
          left: 20%;
          animation: fade-in 0.6s ease-out 0.4s forwards;
        }

        .dot-4 {
          bottom: 30%;
          right: 25%;
          animation: fade-in 0.6s ease-out 0.6s forwards;
        }

        .dot-5 {
          top: 40%;
          left: 30%;
          animation: fade-in 0.6s ease-out 0.8s forwards;
        }

        .decorative-line {
          position: absolute;
          top: 0;
          left: 50%;
          width: 1px;
          height: 100%;
          background: repeating-linear-gradient(
            to bottom,
            #40CFA4 0,
            #40CFA4 4px,
            transparent 4px,
            transparent 8px
          );
          opacity: 0.2;
        }

        .hand-drawn-frame {
          position: absolute;
          inset: -8px;
          border: 2px solid #40CFA4;
          border-radius: 16px;
          opacity: 0.3;
          transform: rotate(-1deg);
          transition: all 0.3s ease;
        }

        .image-container:hover .hand-drawn-frame {
          transform: rotate(1deg) scale(1.02);
          opacity: 0.5;
        }

        .hand-drawn-divider {
          height: 100%;
          width: 1px;
          background: repeating-linear-gradient(
            to bottom,
            #d1d5db 0,
            #d1d5db 4px,
            transparent 4px,
            transparent 8px
          );
        }

        .fancy-button {
          position: relative;
          padding: 12px 32px;
          background: #40CFA4;
          border-radius: 9999px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .fancy-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .fancy-button:hover::before {
          transform: translateX(100%);
        }

        .fancy-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(64, 207, 164, 0.3);
        }

        .button-text {
          position: relative;
          z-index: 1;
          color: white;
        }

        .gradient-text {
          background: linear-gradient(45deg, #40CFA4, #35b892);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .fade-in-section {
          opacity: 0;
          animation: fade-in 1s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .fade-in {
          opacity: 0;
          animation: fade-in 0.8s ease-out forwards;
        }

        .slide-up {
          opacity: 0;
          transform: translateY(20px);
          animation: slide-up 0.8s ease-out forwards;
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        .hover-lift {
          transition: transform 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-4px);
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-in-section,
          .fade-in,
          .slide-up,
          .float-animation,
          .fancy-button::before,
          .hover-lift {
            animation: none;
            transform: none;
            transition: none;
          }
        }

        /* Enhanced decorative elements */
        .floating-circle {
          position: absolute;
          border-radius: 50%;
          border: 2px solid rgba(64, 207, 164, 0.1);
          animation: float-rotate 20s linear infinite;
        }

        .circle-1 {
          width: 300px;
          height: 300px;
          top: -50px;
          left: -100px;
          animation-delay: 0s;
        }

        .circle-2 {
          width: 200px;
          height: 200px;
          bottom: 10%;
          right: 5%;
          animation-delay: -5s;
        }

        .circle-3 {
          width: 150px;
          height: 150px;
          top: 40%;
          left: 15%;
          animation-delay: -10s;
        }

        .diagonal-line {
          position: absolute;
          width: 150px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(64, 207, 164, 0.2), transparent);
          transform-origin: left center;
        }

        .line-1 {
          top: 20%;
          right: 10%;
          transform: rotate(-45deg);
          animation: fade-slide 8s ease-in-out infinite;
        }

        .line-2 {
          bottom: 30%;
          left: 5%;
          transform: rotate(45deg);
          animation: fade-slide 8s ease-in-out infinite reverse;
        }

        .squiggly-line {
          position: absolute;
          width: 100%;
          height: 20px;
          top: 50%;
          left: 0;
          fill: none;
          stroke: rgba(64, 207, 164, 0.1);
          stroke-width: 1;
        }

        .path-1 {
          animation: draw-path 15s linear infinite;
        }

        .path-2 {
          animation: draw-path 15s linear infinite reverse;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.1;
          background: radial-gradient(circle at center, #40CFA4, transparent);
          animation: pulse 10s ease-in-out infinite;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          top: -100px;
          right: -100px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          bottom: -50px;
          left: -50px;
          animation-delay: -5s;
        }

        @keyframes float-rotate {
          0% {
            transform: rotate(0deg) translateY(0px);
          }
          50% {
            transform: rotate(180deg) translateY(20px);
          }
          100% {
            transform: rotate(360deg) translateY(0px);
          }
        }

        @keyframes fade-slide {
          0%, 100% {
            opacity: 0;
            transform: translateX(-20px) rotate(-45deg);
          }
          50% {
            opacity: 0.5;
            transform: translateX(20px) rotate(-45deg);
          }
        }

        @keyframes draw-path {
          0% {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
          }
          50% {
            stroke-dasharray: 100;
            stroke-dashoffset: -100;
          }
          100% {
            stroke-dasharray: 100;
            stroke-dashoffset: -200;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.15;
          }
        }

        /* Add to existing media query */
        @media (prefers-reduced-motion: reduce) {
          .floating-circle,
          .diagonal-line,
          .squiggly-line path,
          .gradient-orb {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default MissionSection; 