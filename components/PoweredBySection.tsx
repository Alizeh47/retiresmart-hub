'use client';

import Image from 'next/image';
import { Aldrich, Roboto_Flex, Newsreader, Indie_Flower } from 'next/font/google';
import { useId } from 'react';

const aldrich = Aldrich({
  weight: '400',
  subsets: ['latin'],
});

const robotoFlex = Roboto_Flex({
  weight: '300',
  subsets: ['latin'],
});

const newsreaderItalic = Newsreader({
  weight: '300',
  style: 'italic',
  subsets: ['latin'],
});

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
});

// Partner logos array - using available logos from the repository
const partnerLogos = [
  { name: 'Yahoo Finance', src: '/images/logos/yahoo-finance.png' },
  { name: 'MSN', src: '/images/logos/msn.png' },
  { name: 'AARP', src: '/images/logos/aarp.png' },
  { name: 'Nasdaq', src: '/images/logos/nasdaq.png' },
  { name: 'Go Banking Rates', src: '/images/logos/go-banking-rates.png' },
  { name: 'Newsbreak', src: '/images/logos/newsbreak.png' },
  { name: 'AOL', src: '/images/logos/aol.png' }
];

// Fixed decorative elements with consistent positioning
const decorativeElements = [
  { id: 1, style: { left: '82%', top: '9%' }, delay: '0s' },
  { id: 2, style: { left: '12%', top: '94%' }, delay: '0.5s' },
  { id: 3, style: { left: '27%', top: '4%' }, delay: '1s' },
  { id: 4, style: { left: '99%', top: '64%' }, delay: '1.5s' },
  { id: 5, style: { left: '90%', top: '42%' }, delay: '2s' }
];

export default function PoweredBySection() {
  // Use a stable ID for server/client consistency
  const sectionId = useId();
  
  return (
    <section className="py-16" id={sectionId}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section with Light Pink Background */}
        <div className="bg-[#F9DAE2] rounded-lg overflow-hidden mb-16 relative shadow-md">
          <div className="flex flex-col md:flex-row items-center p-8 md:p-12">
            {/* Hot Air Balloon Image with Hand-drawn Decorative Elements */}
            <div className="w-full md:w-1/3 relative mb-8 md:mb-0">
              <div className="relative w-64 h-64 mx-auto">
                {/* Hand-drawn decorative elements */}
                <svg className="absolute w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  {/* Hand-drawn clouds */}
                  <path 
                    d="M20,50 C25,40 35,45 40,50 C45,40 55,40 60,50 C65,45 75,45 80,55 C75,60 65,65 60,60 C55,65 45,65 40,60 C35,65 25,60 20,50 Z" 
                    fill="none" 
                    stroke="#666" 
                    strokeWidth="1" 
                    strokeLinecap="round"
                    className="hand-drawn-element"
                  />
                  <path 
                    d="M140,40 C145,30 155,35 160,40 C165,30 175,30 180,40 C185,35 195,35 190,45 C195,50 185,55 180,50 C175,55 165,55 160,50 C155,55 145,50 140,40 Z" 
                    fill="none" 
                    stroke="#666" 
                    strokeWidth="1" 
                    strokeLinecap="round"
                    className="hand-drawn-element"
                  />
                  
                  {/* Hand-drawn birds */}
                  <path 
                    d="M30,30 C35,25 40,30 35,30 C40,30 45,25 50,30" 
                    fill="none" 
                    stroke="#666" 
                    strokeWidth="1" 
                    strokeLinecap="round"
                    className="hand-drawn-element"
                  />
                  <path 
                    d="M160,20 C165,15 170,20 165,20 C170,20 175,15 180,20" 
                    fill="none" 
                    stroke="#666" 
                    strokeWidth="1" 
                    strokeLinecap="round"
                    className="hand-drawn-element"
                  />
                  
                  {/* Hand-drawn sun */}
                  <circle 
                    cx="170" 
                    cy="70" 
                    r="10" 
                    fill="none" 
                    stroke="#666" 
                    strokeWidth="1"
                    className="hand-drawn-element" 
                  />
                  <path 
                    d="M170,55 L170,50 M185,70 L190,70 M170,85 L170,90 M155,70 L150,70 M180,60 L185,55 M180,80 L185,85 M160,80 L155,85 M160,60 L155,55" 
                    fill="none" 
                    stroke="#666" 
                    strokeWidth="1" 
                    strokeLinecap="round"
                    className="hand-drawn-element"
                  />
                </svg>
                
                <Image
                  src="/images/hot-air-balloon.png"
                  alt="Hot Air Balloon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="w-full md:w-2/3 text-left md:pl-8">
              <h2 className={`${aldrich.className} text-5xl font-bold text-primary leading-tight mb-6`}>
                Five Pathways is<br />
                here to simplify your<br />
                retirement planning.
              </h2>
              <p className={`${robotoFlex.className} text-lg text-primary-light mb-8`}>
                We'll work with <span className="text-teal font-medium">you</span> to create a personalized strategy that 
                incorporates all of the paths of retirement planning by focusing 
                on what is most important to you.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#schedule" className="bg-teal text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-teal-dark transition-colors">
                  Schedule a meeting
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
                <div className="relative">
                  <a href="#contact" className={`${indieFlower.className} bg-transparent text-primary px-6 py-3 inline-flex items-center hover:text-primary-dark transition-colors relative z-10 text-xl`}>
                    Contact
                  </a>
                  {/* Hand-drawn button outline */}
                  <svg className="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M10,5 C5,5 5,10 5,15 C5,20 5,30 5,35 C5,40 10,45 15,45 C20,45 100,45 105,45 C110,45 115,40 115,35 C115,30 115,20 115,15 C115,10 110,5 105,5 C100,5 15,5 10,5 Z" 
                      fill="none" 
                      stroke="#555" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="hand-drawn-button"
                      strokeDasharray="4,2"
                    />
                    {/* Additional irregular pencil strokes for emphasis */}
                    <path 
                      d="M12,8 C15,7 20,6 25,6 M95,6 C100,6 105,7 108,8 M6,20 C5,25 5,30 6,35 M114,20 C115,25 115,30 114,35 M25,44 C50,43 75,43 95,44"
                      fill="none" 
                      stroke="#777" 
                      strokeWidth="1" 
                      strokeLinecap="round"
                      className="hand-drawn-button-detail"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Powered by heading */}
        <div className="text-center mb-10">
          <h3 className={`${newsreaderItalic.className} text-2xl text-primary`}>
            Powered by
          </h3>
        </div>

        {/* Partner logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="w-full flex justify-center">
              <div className="relative h-12 w-32">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={58}
                  height={48}
                  className="object-contain grayscale opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add CSS for hand-drawn animation effect */}
      <style jsx global>{`
        .hand-drawn-element {
          opacity: 0.7;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 3s ease-in-out forwards;
        }
        
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        .hand-drawn-button {
          opacity: 0.9;
          animation: wiggle 0.5s ease-in-out forwards;
          transform-origin: center;
        }
        
        .hand-drawn-button-detail {
          opacity: 0.7;
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: draw 1.5s ease-in-out 0.3s forwards;
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          75% { transform: rotate(-0.5deg); }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .hand-drawn-element,
          .hand-drawn-button,
          .hand-drawn-button-detail {
            animation: none;
            stroke-dasharray: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
} 