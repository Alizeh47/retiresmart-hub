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

// Tax planning strategies
const strategies = [
  {
    id: 'tax-efficient-withdrawals',
    title: 'Tax-Efficient Withdrawals',
    icon: '/images/icons/income-planning.svg',
    description: 'Strategic withdrawal planning from different account types (Traditional, Roth, Taxable) to minimize tax impact.',
  },
  {
    id: 'roth-conversion',
    title: 'Roth Conversion Strategies',
    icon: '/images/icons/pension.png',
    description: 'Optimize your retirement savings by converting traditional IRA assets to Roth accounts during opportune times.',
  },
  {
    id: 'tax-loss-harvesting',
    title: 'Tax-Loss Harvesting',
    icon: '/images/icons/assets-management.svg',
    description: 'Strategically realize investment losses to offset gains and reduce your tax liability.',
  },
  {
    id: 'charitable-giving',
    title: 'Charitable Giving Strategies',
    icon: '/images/icons/investment.png',
    description: 'Maximize the tax benefits of your charitable contributions through strategic giving approaches.',
  },
];

export default function TaxPlanningPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with decorative lines */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              STRATEGIC
            </h2>
            <div className="flex-1 text-center px-4">
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>Tax Planning</span>
            </div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              SOLUTIONS
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className={`${playfair.className} text-7xl font-semibold tracking-tight text-gray-900 mb-6`}>
              Minimize Your
              <span className="block text-[#40A69F]">Tax Burden</span>
            </h1>
            <p className={`${robotoFlex.className} text-xl text-gray-600 max-w-3xl mx-auto mb-4`}>
              Strategic tax planning to help you keep more of what you've earned.
            </p>
            <p className={`${newsreaderItalic.className} text-2xl text-gray-500 max-w-2xl mx-auto`}>
              "It's not about how much money you make, but how much money you keep."
            </p>
          </div>

          {/* Featured Strategy with Hexagon Background */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#E8F4F1] to-white p-8 mb-16">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className={`${aldrich.className} text-3xl text-gray-900 mb-4`}>
                  Smart Tax Planning Strategies
                </h3>
                <p className={`${robotoFlex.className} text-lg text-gray-600 mb-6`}>
                  Our comprehensive approach to tax planning includes:
                </p>
                <ul className="space-y-4">
                  {[
                    'Tax-Efficient Investment Strategies',
                    'Strategic Retirement Withdrawals',
                    'Estate Tax Planning',
                    'Tax-Loss Harvesting'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[#40A69F]" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className={`${robotoFlex.className} text-gray-700`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/images/tax-planning.jpg"
                  alt="Tax Planning Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Hexagon Pattern Background */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
              <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="hex" width="16" height="14" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                    <path
                      d="M8 0l8 4v6l-8 4L0 10V4z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="text-[#40A69F]"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hex)" />
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

                {/* Unique Card Background Pattern - Dollar Signs */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-50"></div>
                <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4 opacity-5">
                  <svg className="w-32 h-32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
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
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#40A69F" opacity="0.1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
            
            {/* Animated Dollar Signs */}
            <g className="dollar-signs">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <text
                  key={i}
                  x={`${20 + i * 20}%`}
                  y={`${30 + i * 15}%`}
                  fill="#40A69F"
                  opacity="0.1"
                  fontSize="24"
                  className="animate-float"
                  style={{ animationDelay: `${i * 0.5}s` }}
                >
                  $
                </text>
              ))}
            </g>
            
            {/* Decorative Lines */}
            <path
              d="M0,200 Q400,100 800,200 T1200,200"
              fill="none"
              stroke="#40A69F"
              strokeWidth="1"
              opacity="0.1"
              className="animate-wave"
            />
          </svg>
        </div>
      </section>
    </main>
  );
} 