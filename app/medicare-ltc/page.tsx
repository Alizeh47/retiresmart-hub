'use client';

import { Aldrich, Roboto_Flex, Newsreader, Playfair_Display, Indie_Flower, Lora } from 'next/font/google';
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

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

// Medicare options
const medicareOptions = [
  {
    id: 'original-medicare',
    title: 'Original Medicare',
    icon: '/images/icons/medicare-care.svg',
    description: 'Parts A & B coverage for hospital and medical services with optional supplemental plans.',
  },
  {
    id: 'medicare-advantage',
    title: 'Medicare Advantage',
    icon: '/images/icons/hybrid.png',
    description: 'All-in-one alternative to Original Medicare, often including prescription drug coverage and extra benefits.',
  },
  {
    id: 'medigap',
    title: 'Medicare Supplement',
    icon: '/images/icons/pension.png',
    description: 'Additional insurance that helps pay costs not covered by Original Medicare.',
  },
  {
    id: 'part-d',
    title: 'Part D Drug Coverage',
    icon: '/images/icons/asset-based.png',
    description: 'Prescription drug coverage to help lower your medication costs and protect against higher costs in the future.',
  },
];

// Long-term care options
const ltcOptions = [
  {
    id: 'ltc-insurance',
    title: 'Long-Term Care Insurance',
    icon: '/images/icons/medicare-1.png',
    description: 'Traditional policies that cover long-term care expenses not covered by Medicare.',
  },
  {
    id: 'hybrid-policies',
    title: 'Hybrid Life/LTC Policies',
    icon: '/images/icons/medicare-2.png',
    description: 'Life insurance with long-term care benefits, providing more flexibility than traditional LTC insurance.',
  },
  {
    id: 'asset-based-ltc',
    title: 'Asset-Based LTC',
    icon: '/images/icons/medicare-3.png',
    description: 'Single-premium policies that provide both long-term care benefits and a death benefit.',
  },
];

export default function MedicareLTCPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 pattern-background opacity-5"></div>
        
        {/* Medical Icons Background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-20 left-10 w-16 h-16 text-[#40A69F] opacity-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H6v-2h4V7h2v4h4v2h-4v4z"/>
          </svg>
          <svg className="absolute top-40 right-20 w-20 h-20 text-[#40A69F] opacity-10 animate-pulse-slow" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
          </svg>
          <svg className="absolute bottom-20 left-1/4 w-24 h-24 text-[#40A69F] opacity-10 animate-pulse-medium" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13zM12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"/>
          </svg>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with decorative lines */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <h2 className={`${lora.className} text-lg px-4 text-gray-600 tracking-wider font-medium`}>
              HEALTHCARE
            </h2>
            <div className="flex-1 text-center px-4">
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>Medicare & Long-Term Care</span>
            </div>
            <h2 className={`${lora.className} text-lg px-4 text-gray-600 tracking-wider font-medium`}>
              PLANNING
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className={`${playfair.className} text-7xl font-semibold tracking-tight text-gray-900 mb-6`}>
              Protect Your
              <span className="block text-[#40A69F]">Health & Wealth</span>
            </h1>
            <p className={`${robotoFlex.className} text-xl text-gray-600 max-w-3xl mx-auto mb-4`}>
              Navigate the complexities of Medicare and long-term care planning with confidence.
            </p>
            <p className={`${newsreaderItalic.className} text-2xl text-gray-500 max-w-2xl mx-auto`}>
              "Health is the greatest gift, contentment the greatest wealth."
            </p>
          </div>

          {/* Medicare Section */}
          <div className="mb-20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-[#E8F4F1] flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#40A69F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className={`${lora.className} text-3xl font-semibold text-gray-900`}>Medicare Planning</h2>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#E8F4F1] to-white p-8 mb-12">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className={`${aldrich.className} text-2xl text-gray-900 mb-4`}>
                    Understanding Your Medicare Options
                  </h3>
                  <p className={`${robotoFlex.className} text-lg text-gray-600 mb-6`}>
                    Medicare is a federal health insurance program primarily for people 65 or older. Navigating the various parts and options can be complex:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#40A69F] text-white flex items-center justify-center text-sm">A</span>
                      <span className={`${robotoFlex.className} text-gray-700`}>Hospital Insurance - Covers inpatient care, skilled nursing, hospice</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#40A69F] text-white flex items-center justify-center text-sm">B</span>
                      <span className={`${robotoFlex.className} text-gray-700`}>Medical Insurance - Covers doctor services, outpatient care, medical supplies</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#40A69F] text-white flex items-center justify-center text-sm">C</span>
                      <span className={`${robotoFlex.className} text-gray-700`}>Medicare Advantage - Alternative way to get Medicare benefits</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#40A69F] text-white flex items-center justify-center text-sm">D</span>
                      <span className={`${robotoFlex.className} text-gray-700`}>Prescription Drug Coverage - Helps cover cost of prescription drugs</span>
                    </li>
                  </ul>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src="/images/healthcare-costs.jpg"
                    alt="Medicare Planning Illustration"
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

            {/* Medicare Options Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {medicareOptions.map((option) => (
                <div
                  key={option.id}
                  className="group relative overflow-hidden rounded-xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src={option.icon}
                          alt={option.title}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h4 className={`${lora.className} text-xl font-bold text-gray-900 mb-2`}>
                      {option.title}
                    </h4>
                    <p className={`${robotoFlex.className} text-gray-600`}>
                      {option.description}
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

          {/* Long-Term Care Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-[#E8F4F1] flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#40A69F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className={`${lora.className} text-3xl font-semibold text-gray-900`}>Long-Term Care Planning</h2>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#E8F4F1] to-white p-8 mb-12">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 relative h-[400px]">
                  <Image
                    src="/images/tax-planning.jpg"
                    alt="Long-Term Care Illustration"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className={`${aldrich.className} text-2xl text-gray-900 mb-4`}>
                    Preparing for Long-Term Care Needs
                  </h3>
                  <p className={`${robotoFlex.className} text-lg text-gray-600 mb-6`}>
                    Long-term care encompasses a range of services designed to meet health and personal care needs over an extended period. Medicare typically doesn't cover long-term care, making advance planning crucial.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                    <h4 className={`${lora.className} text-lg font-semibold text-gray-900 mb-2`}>Did You Know?</h4>
                    <p className={`${robotoFlex.className} text-gray-700`}>
                      70% of people over 65 will require some type of long-term care services during their lifetime, and 20% will need it for longer than 5 years.
                    </p>
                  </div>
                  <p className={`${indieFlower.className} text-lg text-[#40A69F]`}>
                    Having kids isn't a long-term care plan...
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 -mb-4 -ml-4">
                <svg className="w-32 h-32 text-[#40A69F] opacity-10" fill="currentColor" viewBox="0 0 200 200">
                  <path d="M0,100 C0,44.77 44.77,0 100,0 C155.23,0 200,44.77 200,100 C200,155.23 155.23,200 100,200 C44.77,200 0,155.23 0,100 Z" />
                </svg>
              </div>
            </div>

            {/* LTC Options Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ltcOptions.map((option) => (
                <div
                  key={option.id}
                  className="group relative overflow-hidden rounded-xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src={option.icon}
                          alt={option.title}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h4 className={`${lora.className} text-xl font-bold text-gray-900 mb-2`}>
                      {option.title}
                    </h4>
                    <p className={`${robotoFlex.className} text-gray-600`}>
                      {option.description}
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

          {/* Call to Action */}
          <div className="relative rounded-xl overflow-hidden bg-[#40A69F] p-8 text-white">
            <div className="relative z-10 text-center">
              <h3 className={`${lora.className} text-2xl font-semibold mb-4`}>
                Get Personalized Medicare & Long-Term Care Guidance
              </h3>
              <p className={`${robotoFlex.className} text-lg mb-6 max-w-3xl mx-auto`}>
                Our specialists can help you navigate the complexities of Medicare and develop a comprehensive long-term care strategy tailored to your needs.
              </p>
              <button className="bg-white text-[#40A69F] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Schedule Your Consultation
              </button>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <pattern id="medical-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
                  <path d="M10,0 L10,20 M0,10 L20,10" stroke="white" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#medical-pattern)" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 