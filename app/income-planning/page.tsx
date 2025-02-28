'use client';

import { Aldrich, Roboto_Flex, Newsreader, Playfair_Display, Indie_Flower } from 'next/font/google';
import Image from 'next/image';

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

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
});

// Sample income planning strategies
const strategies = [
  {
    id: 'social-security',
    title: 'Social Security Optimization',
    icon: '/images/icons/income-planning.svg',
    description: 'Maximize your Social Security benefits through strategic claiming decisions and timing optimization.',
  },
  {
    id: 'pension-planning',
    title: 'Pension Planning',
    icon: '/images/icons/pension.png',
    description: 'Evaluate pension options and make informed decisions about lump sum vs. monthly payments.',
  },
  {
    id: 'investment-income',
    title: 'Investment Income',
    icon: '/images/icons/investment.png',
    description: 'Create a reliable income stream from your investment portfolio through dividend stocks and bonds.',
  },
  {
    id: 'annuity-solutions',
    title: 'Annuity Solutions',
    icon: '/images/icons/annuity.png',
    description: 'Explore various annuity options to secure guaranteed income throughout retirement.',
  },
];

export default function IncomePlanningPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with decorative lines */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              RETIREMENT
            </h2>
            <div className="flex-1 text-center px-4">
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>Income Planning</span>
            </div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              SOLUTIONS
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className={`${playfair.className} text-7xl font-semibold tracking-tight text-gray-900 mb-6`}>
              Secure Your
              <span className="block text-[#40A69F]">Financial Future</span>
            </h1>
            <p className={`${robotoFlex.className} text-xl text-gray-600 max-w-3xl mx-auto mb-4`}>
              Create a reliable income stream that lasts throughout your retirement years.
            </p>
            <p className={`${newsreaderItalic.className} text-2xl text-gray-500 max-w-2xl mx-auto`}>
              "The best time to plan for retirement was yesterday. The second best time is now."
            </p>
          </div>

          {/* Featured Strategy */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#E8F4F1] to-white p-8 mb-16">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className={`${aldrich.className} text-3xl text-gray-900 mb-4`}>
                  Comprehensive Income Planning
                </h3>
                <p className={`${robotoFlex.className} text-lg text-gray-600 mb-6`}>
                  Our approach combines multiple income sources to create a reliable retirement strategy:
                </p>
                <ul className="space-y-4">
                  {['Social Security Benefits', 'Pension Optimization', 'Investment Income', 'Annuity Solutions'].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-[#40A69F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`${robotoFlex.className} text-gray-700`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/images/lifestyle-planning.jpg"
                  alt="Income Planning Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4">
              <svg className="w-32 h-32 text-[#40A69F] opacity-10" fill="currentColor" viewBox="0 0 200 200">
                <path d="M0,100 C0,44.77 44.77,0 100,0 C155.23,0 200,44.77 200,100 C200,155.23 155.23,200 100,200 C44.77,200 0,155.23 0,100 Z" />
              </svg>
            </div>
          </div>

          {/* Strategy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strategies.map((strategy) => (
              <div
                key={strategy.id}
                className="group relative overflow-hidden rounded-xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className="mb-4">
                    <div className="relative w-12 h-12">
                      <Image
                        src={strategy.icon}
                        alt={strategy.title}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h4 className={`${aldrich.className} text-xl font-bold text-gray-900 mb-2`}>
                    {strategy.title}
                  </h4>
                  <p className={`${robotoFlex.className} text-gray-600`}>
                    {strategy.description}
                  </p>
                  <div className="mt-4">
                    <button className="inline-flex items-center text-[#40A69F] hover:text-[#2C7A75] transition-colors">
                      <span className={`${robotoFlex.className} mr-2`}>Learn More</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Card Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-50"></div>
                <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
                  <svg className="w-24 h-24 text-gray-100" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="50" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(64, 166, 159, 0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Animated Circles */}
            <circle cx="10%" cy="20%" r="5" fill="#40A69F" opacity="0.2">
              <animate attributeName="r" values="5;8;5" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="90%" cy="60%" r="8" fill="#40A69F" opacity="0.2">
              <animate attributeName="r" values="8;12;8" dur="4s" repeatCount="indefinite" />
            </circle>
            
            {/* Decorative Lines */}
            <path
              d="M0,100 Q300,150 600,100 T1200,100"
              fill="none"
              stroke="#40A69F"
              strokeWidth="1"
              opacity="0.1"
            >
              <animate
                attributeName="d"
                values="M0,100 Q300,150 600,100 T1200,100;M0,100 Q300,50 600,100 T1200,100;M0,100 Q300,150 600,100 T1200,100"
                dur="10s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </section>
    </main>
  );
} 