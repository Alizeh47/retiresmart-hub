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

// Product cards data
const productCards = [
  {
    id: 'income-planning',
    title: 'Income Planning',
    icon: '/images/icons/income-planning.svg',
    description: 'Income planning looks different for everyone, potentially consisting of investments, Social Security, pensions, and annuities. People tend to have the most questions about annuities, so let\'s take a look at them for some clarity. Annuities are just a product. They are not a plan. So depending on your personal situation, an annuity may or may not be right for you. An annuity can replace an accumulation strategy or create guaranteed growth, and it can even create private pension-like income. But does it make sense for you?',
  },
  {
    id: 'legacy-planning',
    title: 'Legacy Planning',
    icon: '/images/icons/legacy-planning.svg',
    description: 'Leaving a legacy means a lot of different things. Whether you\'re someone who wants to leave a financial legacy or someone who wants to live your financial legacy, there are different strategies and products to help you accomplish that. One of the best ways to achieve either result is life insurance. If you\'re waiting until you die to utilize life insurance, you might be doing it wrong. After all, it\'s called life insurance—not death insurance. But there are a lot of options out there. So which policy can help you the most in retirement? Well, this depends on your strategy. Although most people buy life insurance for its death benefit, there are a myriad of ways to utilize it while you\'re alive.',
  },
  {
    id: 'assets-under-management',
    title: 'Assets Under Management',
    icon: '/images/icons/assets-management.svg',
    description: 'Imagine you hire somebody to do a job for you. If they do the job well, you\'re happy to pay them. But what if they don\'t do the job at all? Is it still worth the money? This is how we feel about assets under management with a traditional advisor. The market goes up and you pay your fee. The market goes down, you lose money...and you still pay your fee. We think you can do better.',
  },
  {
    id: 'medicare-long-term-care',
    title: 'Medicare/Long Term Care',
    icon: '/images/icons/medicare-care.svg',
    description: 'Sure, you have Medicare and savings. But do you have a plan for your long-term care? Spoiler Alert: having kids isn\'t a plan...at least not a good one.',
  }
];

export default function OurProductsSection() {
  // Use a stable ID for server/client consistency
  const sectionId = useId();
  
  return (
    <section className="py-16 pb-24 relative overflow-hidden" id={sectionId}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Background with texture effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#E8F4F1] opacity-60"></div>
          
          {/* Hand-drawn decorative elements */}
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            {/* Hand-drawn squiggles and lines */}
            <path 
              d="M100,100 C150,80 200,120 250,100 S350,50 400,80 S500,120 550,100" 
              fill="none" 
              stroke="#888" 
              strokeWidth="1" 
              strokeLinecap="round"
              className="hand-drawn-element"
            />
            <path 
              d="M700,200 C750,180 800,220 850,200 S950,150 1000,180" 
              fill="none" 
              stroke="#888" 
              strokeWidth="1" 
              strokeLinecap="round"
              className="hand-drawn-element"
            />
            <path 
              d="M100,700 C150,680 200,720 250,700 S350,650 400,680" 
              fill="none" 
              stroke="#888" 
              strokeWidth="1" 
              strokeLinecap="round"
              className="hand-drawn-element"
            />
            <path 
              d="M800,600 C850,580 900,620 950,600 S1050,550 1100,580" 
              fill="none" 
              stroke="#888" 
              strokeWidth="1" 
              strokeLinecap="round"
              className="hand-drawn-element"
            />
            
            {/* Hand-drawn circles */}
            <circle 
              cx="200" 
              cy="400" 
              r="30" 
              fill="none" 
              stroke="#888" 
              strokeWidth="1"
              className="hand-drawn-element" 
            />
            <circle 
              cx="1000" 
              cy="300" 
              r="40" 
              fill="none" 
              stroke="#888" 
              strokeWidth="1"
              className="hand-drawn-element" 
            />
            
            {/* Hand-drawn stars */}
            <path 
              d="M300,100 L310,130 L340,130 L315,150 L325,180 L300,160 L275,180 L285,150 L260,130 L290,130 Z" 
              fill="none" 
              stroke="#888" 
              strokeWidth="1"
              className="hand-drawn-element" 
            />
            <path 
              d="M900,500 L910,530 L940,530 L915,550 L925,580 L900,560 L875,580 L885,550 L860,530 L890,530 Z" 
              fill="none" 
              stroke="#888" 
              strokeWidth="1"
              className="hand-drawn-element" 
            />
          </svg>
        </div>
        
        {/* Section Title */}
        <div className="relative z-10 mb-12 pt-8">
          <h2 className={`${newsreaderItalic.className} text-2xl text-primary mb-2`}>
            Our Products
          </h2>
          <h3 className={`${aldrich.className} text-5xl font-bold text-primary leading-tight`}>
            It's ok to stop and<br />
            ask for directions.
          </h3>
          <div className="max-w-3xl mt-8">
            <p className={`${robotoFlex.className} text-lg text-primary-light`}>
              Don't confuse a portfolio with an actual plan. A few vague directions from an advisor just won't cut it. What you need is a true financial guide—someone who's traveled this road many times and knows the best routes to success. There is no simple path to this destination. That's why we'll travel by your side the whole way, making sure that all roads lead to the retirement you imagine.
            </p>
          </div>
        </div>
        
        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 pb-16">
          {productCards.map((card) => (
            <div key={card.id} className="rounded-lg p-6 shadow-md relative overflow-hidden vintage-card">
              {/* Card background with subtle vintage paper texture */}
              <div className="absolute inset-0 bg-white"></div>
              <div className="absolute inset-0 bg-[url('/images/texture/vintage-paper.svg')] bg-cover opacity-60"></div>
              
              {/* Card content */}
              <div className="relative z-10">
                {/* Card Icon */}
                <div className="mb-4">
                  <div className="relative w-12 h-12">
                    <Image
                      src={card.icon}
                      alt={`${card.title} icon`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Card Title */}
                <h4 className={`${aldrich.className} text-xl font-bold text-primary mb-4`}>
                  {card.title}
                </h4>
                
                {/* Card Description */}
                <p className={`${robotoFlex.className} text-sm text-primary-light mb-6`}>
                  {card.description}
                </p>
                
                {/* Arrow Link */}
                <div className="mt-auto">
                  <a href={`#${card.id}`} className="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Hand-drawn card border effect */}
              <svg className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <rect 
                  x="2" 
                  y="2" 
                  width="396" 
                  height="296" 
                  rx="8" 
                  ry="8"
                  fill="none" 
                  stroke="#8B4513" 
                  strokeWidth="0.8"
                  strokeDasharray="5,5"
                  strokeOpacity="0.4"
                  className="hand-drawn-card" 
                />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Add CSS for vintage card effect */}
      <style jsx>{`
        .hand-drawn-element {
          opacity: 0.4;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 3s ease-in-out forwards;
        }
        
        .hand-drawn-card {
          opacity: 0.7;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 2s ease-in-out forwards;
          filter: url(#roughen);
        }
        
        .vintage-card {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }
        
        .vintage-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
        }
        
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .hand-drawn-element,
          .hand-drawn-card {
            animation: none;
            stroke-dasharray: none;
            stroke-dashoffset: 0;
          }
        }
      `}</style>
      
      {/* SVG Filters for pencil-like effects */}
      <svg width="0" height="0" className="absolute">
        <filter id="roughen">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
        </filter>
      </svg>
    </section>
  );
}