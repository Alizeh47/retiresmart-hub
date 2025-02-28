'use client';

import { Aldrich, Roboto_Flex, Newsreader, Playfair_Display, Indie_Flower, Montserrat } from 'next/font/google';
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

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// Sample investment strategies
const investmentStrategies = [
  {
    id: 'diversification',
    title: 'Portfolio Diversification',
    icon: '/images/icons/assets-management.svg',
    description: 'Spread investments across various asset classes to reduce risk and optimize returns.',
  },
  {
    id: 'tax-efficiency',
    title: 'Tax-Efficient Investing',
    icon: '/images/icons/income-planning.svg',
    description: 'Minimize tax impact on your investments through strategic account placement and tax-loss harvesting.',
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    icon: '/images/icons/investment.png',
    description: 'Implement strategies to protect your portfolio from market volatility and economic downturns.',
  },
  {
    id: 'retirement-income',
    title: 'Retirement Income',
    icon: '/images/icons/pension.png',
    description: 'Create a sustainable withdrawal strategy to ensure your investments last throughout retirement.',
  },
];

// Market insights data
const marketInsights = [
  {
    id: 'market-trends',
    title: 'Current Market Trends',
    percentage: '+2.4%',
    trend: 'up',
    description: 'S&P 500 performance over the last quarter',
  },
  {
    id: 'interest-rates',
    title: 'Interest Rate Outlook',
    percentage: '5.25%',
    trend: 'stable',
    description: 'Federal Reserve benchmark rate',
  },
  {
    id: 'inflation',
    title: 'Inflation Indicators',
    percentage: '3.1%',
    trend: 'down',
    description: 'Year-over-year consumer price index',
  },
];

export default function InvestmentPlanningPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Animated Background */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f9ff] to-white"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-full h-full">
            {/* Stock Chart Pattern */}
            <svg className="absolute w-full h-64 top-20 opacity-5" viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M0,150 L50,145 L100,155 L150,140 L200,160 L250,145 L300,165 L350,150 L400,170 L450,135 L500,165 L550,140 L600,160 L650,130 L700,150 L750,120 L800,140 L850,110 L900,130 L950,100 L1000,120 L1050,90 L1100,110 L1150,80 L1200,100" 
                fill="none" 
                stroke="#40A69F" 
                strokeWidth="3"
                className="chart-line"
              />
              <path 
                d="M0,180 L50,175 L100,185 L150,170 L200,190 L250,175 L300,195 L350,180 L400,200 L450,165 L500,195 L550,170 L600,190 L650,160 L700,180 L750,150 L800,170 L850,140 L900,160 L950,130 L1000,150 L1050,120 L1100,140 L1150,110 L1200,130" 
                fill="none" 
                stroke="#2C7A75" 
                strokeWidth="2"
                strokeDasharray="5,5"
                className="chart-line-dashed"
              />
            </svg>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 grid-pattern"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-[#40A69F] rounded-full opacity-10 animate-float-slow"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#40A69F] rounded-full opacity-10 animate-float-medium"></div>
            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-[#40A69F] rounded-full opacity-10 animate-float-fast"></div>
          </div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with decorative lines */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <h2 className={`${montserrat.className} text-lg px-4 text-gray-600 tracking-wider font-medium`}>
              STRATEGIC
            </h2>
            <div className="flex-1 text-center px-4">
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>Investment Planning</span>
            </div>
            <h2 className={`${montserrat.className} text-lg px-4 text-gray-600 tracking-wider font-medium`}>
              APPROACH
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className={`${playfair.className} text-7xl font-semibold tracking-tight text-gray-900 mb-6`}>
              Grow Your
              <span className="block text-[#40A69F]">Investment Portfolio</span>
            </h1>
            <p className={`${robotoFlex.className} text-xl text-gray-600 max-w-3xl mx-auto mb-4`}>
              Strategic investment planning tailored to your retirement goals and risk tolerance.
            </p>
            <p className={`${newsreaderItalic.className} text-2xl text-gray-500 max-w-2xl mx-auto`}>
              "The best investment is in the tools of one's own trade."
            </p>
          </div>

          {/* Market Insights Section */}
          <div className="mb-16">
            <h3 className={`${montserrat.className} text-2xl font-semibold text-gray-800 mb-6 text-center`}>
              Current Market Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {marketInsights.map((insight) => (
                <div 
                  key={insight.id}
                  className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <h4 className={`${montserrat.className} text-lg font-medium text-gray-800 mb-2`}>
                    {insight.title}
                  </h4>
                  <div className="flex items-center mb-3">
                    <span className={`${aldrich.className} text-3xl ${
                      insight.trend === 'up' ? 'text-green-500' : 
                      insight.trend === 'down' ? 'text-red-500' : 
                      'text-blue-500'
                    }`}>
                      {insight.percentage}
                    </span>
                    {insight.trend === 'up' && (
                      <svg className="w-5 h-5 ml-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                      </svg>
                    )}
                    {insight.trend === 'down' && (
                      <svg className="w-5 h-5 ml-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {insight.trend === 'stable' && (
                      <svg className="w-5 h-5 ml-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
                      </svg>
                    )}
                  </div>
                  <p className={`${robotoFlex.className} text-sm text-gray-600`}>
                    {insight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Strategy */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#E8F4F1] to-white p-8 mb-16">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className={`${aldrich.className} text-3xl text-gray-900 mb-4`}>
                  Our Investment Philosophy
                </h3>
                <p className={`${robotoFlex.className} text-lg text-gray-600 mb-6`}>
                  We believe in a disciplined, evidence-based approach to investing that focuses on:
                </p>
                <ul className="space-y-4">
                  {[
                    'Long-term perspective over short-term speculation',
                    'Broad diversification across asset classes',
                    'Low-cost implementation to maximize returns',
                    'Tax-efficient strategies to preserve wealth'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 mt-1 text-[#40A69F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`${robotoFlex.className} text-gray-700`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[450px]">
                <Image
                  src="/images/insights/credit-card.jpg"
                  alt="Investment Planning Illustration"
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

          {/* Investment Strategy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentStrategies.map((strategy) => (
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
                  <h4 className={`${montserrat.className} text-xl font-bold text-gray-900 mb-2`}>
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

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="inline-block relative">
              <div className="relative z-10 bg-[#40A69F] text-white px-8 py-4 rounded-lg shadow-lg hover:bg-[#2C7A75] transition-colors">
                <h3 className={`${montserrat.className} text-xl font-semibold mb-2`}>Ready to optimize your investment strategy?</h3>
                <p className={`${robotoFlex.className} mb-4`}>Schedule a consultation with our investment specialists today.</p>
                <button className="bg-white text-[#40A69F] px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                  Schedule Consultation
                </button>
              </div>
              <div className="absolute inset-0 bg-[#40A69F] opacity-20 blur-xl rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 