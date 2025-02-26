'use client';

import Image from 'next/image';
import { Aldrich, Roboto_Flex, Newsreader, Indie_Flower, Playfair_Display } from 'next/font/google';
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
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
});

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

// Sample insights data
const insightCards = [
  {
    id: 'credit-card-rates',
    date: 'NOV 25, 2024',
    image: '/images/insights/credit-card.jpg',
    title: 'Will Credit Card Rates Come Down? Five Pathways Comments on CBSNews.com',
    category: 'FINANCIAL INSIGHTS',
    excerpt: 'Our expert analysis on the future of credit card rates and how they might affect your financial planning strategy in the coming months.'
  },
  {
    id: 'estate-planning',
    date: 'NOV 25, 2024',
    image: '/images/insights/email-warning.jpg',
    title: 'Five Pathways Featured On Multiple News Sites About Estate Planning Scams',
    category: 'NEWS',
    excerpt: 'Learn how to protect yourself and your loved ones from increasingly sophisticated estate planning scams targeting retirees.'
  },
  {
    id: 'retirement-expenses',
    date: 'SEP 26, 2024',
    image: '/images/insights/retirement-planning.jpg',
    title: '5 Expenses That Catch Retirees By Surprise',
    category: 'RETIREMENT PLANNING',
    excerpt: 'Discover the hidden costs that could impact your retirement and learn strategies to prepare for unexpected expenses.'
  }
];

// Sample rates data
const todaysRates = [
  { years: 2, rate: '5.1%' },
  { years: 3, rate: '5.25%' },
  { years: 4, rate: '5.5%' },
  { years: 5, rate: '5.6%' },
  { years: 6, rate: '5.65%' },
  { years: 7, rate: '5.55%' },
  { years: 8, rate: '5.35%' },
  { years: 9, rate: '5.35%' },
  { years: 10, rate: '5.65%' },
];

export default function InsightsSection() {
  const sectionId = useId();
  
  return (
    <section className="py-16 relative overflow-hidden bg-white" id={sectionId}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header with decorative lines */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1 h-[1px] bg-gray-300"></div>
          <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
            YOUR ROADMAP
          </h2>
          <div className="flex-1 text-center px-4">
            <span className={`${playfair.className} text-lg text-gray-600 italic`}>Five Pathways</span>
          </div>
          <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
            TO RETIREMENT
          </h2>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-12">
          <h1 className={`${playfair.className} text-8xl font-semibold tracking-tight text-gray-900 mb-6 insights-title`}>
            INSIGHTS
          </h1>
          <p className={`${robotoFlex.className} text-lg text-gray-600 max-w-3xl mx-auto mb-4`}>
            Let's focus on things we can control—taxes, fees, and risk— and
            stop chasing the things we can't.
          </p>
          <p className={`${newsreaderItalic.className} text-xl text-gray-500 max-w-2xl mx-auto`}>
            "The best investment you can make is in yourself. The more you learn, the more you'll earn."
          </p>
        </div>

        {/* Today's Rates */}
        <div className="mb-12">
          <div className="flex items-center border-t border-b border-gray-200 py-4">
            <div className="flex flex-col mr-8">
              <span className={`${playfair.className} text-sm text-gray-600`}>Todays rates</span>
              <span className={`${indieFlower.className} text-xs text-[#40A69F]`}>Updated hourly</span>
            </div>
            <div className="flex-1 flex justify-between">
              {todaysRates.map((rate, index) => (
                <div key={index} className="text-center">
                  <div className={`${playfair.className} text-xl font-semibold`}>{rate.rate}</div>
                  <div className={`${robotoFlex.className} text-xs text-gray-500`}>{rate.years} YEARS</div>
                </div>
              ))}
              <div className="text-center">
                <span className={`${robotoFlex.className} text-sm text-blue-600 hover:text-blue-800 cursor-pointer`}>
                  See more
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Large Featured Card */}
          <div key={insightCards[0].id} className="group cursor-pointer insight-card rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[16/10] mb-0">
              <Image
                src={insightCards[0].image}
                alt={insightCards[0].title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                <span className={`${aldrich.className} text-sm text-[#40A69F]`}>Featured Article</span>
              </div>
            </div>
            <div className="p-8 bg-white">
              <div className="flex items-center space-x-2 mb-3">
                <span className={`${robotoFlex.className} text-sm text-gray-500`}>{insightCards[0].date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className={`${aldrich.className} text-sm text-[#40A69F]`}>{insightCards[0].category}</span>
              </div>
              <h3 className={`${newsreaderItalic.className} text-[32px] font-semibold leading-tight mb-4`}>
                {insightCards[0].title}
              </h3>
              <p className={`${robotoFlex.className} text-gray-600 mb-4`}>{insightCards[0].excerpt}</p>
              <div className={`${playfair.className} text-sm text-[#40A69F] group-hover:text-[#368F89] transition-colors flex items-center`}>
                Read More 
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column with Two Smaller Cards */}
          <div className="space-y-6 relative">
            {/* Glassmorphism Decorative Elements - Enhanced */}
            <div className="absolute -bottom-0.5 right-0 w-full">
              <div className="relative w-full h-[220px] rounded-[24px] overflow-hidden bg-gradient animate-gradient">
                <div className="absolute inset-0 glassmorphism-card-tertiary" aria-hidden="true">
                  <div className="relative h-full flex items-center px-8">
                    <div className="flex items-center gap-6 animate-slideIn">
                      <div className="text-[#40A69F] animate-pulse-subtle">
                        <svg className="w-8 h-8 animate-spin-slow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                      <div className="animate-fadeInUp">
                        <h4 className={`${playfair.className} text-xl text-gray-800 mb-1`}>Check Out Our Offerings</h4>
                        <p className={`${robotoFlex.className} text-gray-600`}>
                          Explore our stunning range of floral creations tailored for every moment.
                        </p>
                      </div>
                      <div className="ml-auto animate-fadeInRight">
                        <button className="group flex items-center gap-2 text-[#40A69F] hover:text-[#368F89] transition-colors">
                          <span className={`${robotoFlex.className}`}>View Our Selection</span>
                          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 glassmorphism-card-secondary" aria-hidden="true"></div>
                <div className="absolute inset-0 glassmorphism-card" aria-hidden="true">
                  <div className="absolute inset-0 bg-gradient animate-gradient"></div>
                </div>
              </div>
            </div>

            {insightCards.slice(1).map((card) => (
              <div key={card.id} className="group cursor-pointer insight-card flex items-stretch rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative z-10">
                <div className="relative w-[240px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 bg-white flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`${robotoFlex.className} text-sm text-gray-500`}>{card.date}</span>
                    <span className={`${aldrich.className} px-2 py-0.5 text-xs rounded bg-gray-100 text-[#40A69F] uppercase tracking-wider`}>{card.category}</span>
                  </div>
                  <h3 className={`${newsreaderItalic.className} text-xl font-semibold leading-snug mb-3`}>
                    {card.title}
                  </h3>
                  <p className={`${robotoFlex.className} text-sm text-gray-600 line-clamp-2`}>{card.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <div className="mb-4">
            <p className={`${indieFlower.className} text-lg text-[#40A69F] mb-2`}>Stay informed with our latest insights</p>
            <p className={`${robotoFlex.className} text-sm text-gray-600`}>Join thousands of readers who trust our financial expertise</p>
          </div>
          <button className="relative group">
            <div className="absolute inset-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                <path 
                  className="hand-drawn-border"
                  d="M10,10 Q30,9 50,10 Q170,10 190,10 Q191,20 190,30 Q170,50 50,50 Q30,51 10,50 Q9,40 10,10" 
                  fill="#40A69F"
                  stroke="#2C7A75"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path 
                  className="hand-drawn-detail"
                  d="M20,15 Q30,14 40,15 M160,15 Q170,14 180,15 M20,45 Q30,46 40,45 M160,45 Q170,46 180,45" 
                  fill="none"
                  stroke="#2C7A75"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeDasharray="1 3"
                />
              </svg>
            </div>
            <span className={`${robotoFlex.className} relative z-10 inline-flex items-center px-8 py-3 text-white group-hover:text-white transition-colors`}>
              View More Insights
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          {/* Decorative Groups */}
          <g className="decorative-lines">
            <path
              className="decorative-line line-1"
              d="M100,50 C200,100 300,50 400,100"
              stroke="#E8F4F1"
              strokeWidth="2"
              fill="none"
            />
            <path
              className="decorative-line line-2"
              d="M800,700 C900,650 1000,700 1100,650"
              stroke="#E8F4F1"
              strokeWidth="2"
              fill="none"
            />
          </g>

          <g className="decorative-dots">
            <circle 
              cx="392" 
              cy="89" 
              r="4" 
              className="decorative-dot dot-1" 
              fill="#40A69F"
              style={{ 
                left: "69.5129%",
                top: "30.7119%",
                animationDelay: "0s"
              }}
            />
            <circle 
              cx="778" 
              cy="292" 
              r="4" 
              className="decorative-dot dot-2" 
              fill="#40A69F"
              style={{ 
                left: "28.927%",
                top: "17.0627%",
                animationDelay: "0.5s"
              }}
            />
            <circle 
              cx="79" 
              cy="612" 
              r="4" 
              className="decorative-dot dot-3" 
              fill="#40A69F"
              style={{ 
                left: "90.3406%",
                top: "87.4093%",
                animationDelay: "1s"
              }}
            />
            <circle 
              cx="355" 
              cy="0" 
              r="4" 
              className="decorative-dot dot-4" 
              fill="#40A69F"
              style={{ 
                left: "39.7229%",
                top: "54.2193%",
                animationDelay: "1.5s"
              }}
            />
            <circle 
              cx="18" 
              cy="149" 
              r="4" 
              className="decorative-dot dot-5" 
              fill="#40A69F"
              style={{ 
                left: "60.9052%",
                top: "7.3343%",
                animationDelay: "2s"
              }}
            />
          </g>
        </svg>
      </div>

      <style jsx>{`
        .insights-title {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .bg-gradient {
          background: linear-gradient(
            45deg,
            rgba(64, 166, 159, 0.1),
            rgba(255, 255, 255, 0.2),
            rgba(64, 166, 159, 0.15),
            rgba(255, 255, 255, 0.25)
          );
          background-size: 400% 400%;
        }

        .glassmorphism-card {
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          box-shadow: 
            0 8px 32px 0 rgba(64, 166, 159, 0.12),
            inset 0 0 0 1px rgba(255, 255, 255, 0.2);
          transform: none;
          z-index: 2;
          animation: fadeIn 0.6s ease-out forwards;
          overflow: hidden;
        }

        .glassmorphism-card-secondary {
          backdrop-filter: blur(8px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 24px;
          box-shadow: 
            0 8px 32px 0 rgba(64, 166, 159, 0.08),
            inset 0 0 0 1px rgba(255, 255, 255, 0.15);
          transform: none;
          z-index: 1;
          animation: fadeIn 0.6s ease-out 0.2s forwards;
        }

        .glassmorphism-card-tertiary {
          backdrop-filter: blur(6px);
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          box-shadow: 
            0 8px 32px 0 rgba(64, 166, 159, 0.06),
            inset 0 0 0 1px rgba(255, 255, 255, 0.1);
          transform: none;
          z-index: 3;
          animation: fadeIn 0.6s ease-out 0.4s forwards;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulseSubtle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(0.95);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounceSubtle {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(3px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-gradient {
          animation: gradient 15s ease infinite;
        }

        .animate-pulse-subtle {
          animation: pulseSubtle 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 8s linear infinite;
        }

        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .insight-card {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }

        .decorative-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }

        .line-1 {
          animation: drawLine 2s ease-out forwards;
        }

        .line-2 {
          animation: drawLine 2s ease-out 0.5s forwards;
        }

        .decorative-dot {
          position: absolute;
          opacity: 0;
          transform-origin: center;
        }

        .dot-1 {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .dot-2 {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .dot-3 {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .dot-4 {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .dot-5 {
          animation: fadeIn 0.6s ease-out forwards;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes drawLine {
          to {
            stroke-dashoffset: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .insight-card,
          .decorative-line,
          .decorative-dot {
            animation: none;
            opacity: 1;
            stroke-dashoffset: 0;
            transform: none;
          }
          .glassmorphism-card,
          .glassmorphism-card-secondary,
          .glassmorphism-card-tertiary {
            animation: none;
            transform: none;
          }
        }

        .hand-drawn-border {
          transform-origin: center;
          animation: drawBorder 1s ease-out forwards;
        }

        .hand-drawn-detail {
          opacity: 0;
          animation: fadeInSlow 0.6s ease-out 0.8s forwards;
        }

        @keyframes drawBorder {
          from {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            filter: drop-shadow(0 0 2px rgba(44, 122, 117, 0.1));
          }
          to {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
            filter: drop-shadow(0 4px 6px rgba(44, 122, 117, 0.2));
          }
        }

        @keyframes fadeInSlow {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.6;
          }
        }

        button:hover .hand-drawn-border {
          filter: drop-shadow(0 6px 8px rgba(44, 122, 117, 0.3));
          transform: scale(1.02);
          transition: all 0.2s ease;
        }

        button:active .hand-drawn-border {
          transform: scale(0.98);
          transition: all 0.1s ease;
        }
      `}</style>
    </section>
  );
} 