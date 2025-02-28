'use client';

import { Aldrich, Roboto_Flex, Newsreader, Playfair_Display, Indie_Flower, Lora } from 'next/font/google';
import Image from 'next/image';
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

// Resource categories
const resourceCategories = [
  {
    id: 'guides',
    title: 'Retirement Guides',
    icon: '/images/icons/income-planning.svg',
    description: 'Comprehensive guides to help you navigate every aspect of retirement planning.',
    count: 12
  },
  {
    id: 'calculators',
    title: 'Financial Calculators',
    icon: '/images/icons/assets-management.svg',
    description: 'Interactive tools to help you estimate retirement needs, tax implications, and more.',
    count: 8
  },
  {
    id: 'checklists',
    title: 'Planning Checklists',
    icon: '/images/icons/legacy-planning.svg',
    description: 'Step-by-step checklists to ensure you don\'t miss any critical retirement planning steps.',
    count: 6
  },
  {
    id: 'worksheets',
    title: 'Worksheets & Templates',
    icon: '/images/icons/medicare-care.svg',
    description: 'Downloadable worksheets and templates to organize your retirement planning process.',
    count: 10
  }
];

// Featured resources
const featuredResources = [
  {
    id: 'retirement-roadmap',
    title: 'The Complete Retirement Roadmap',
    type: 'GUIDE',
    image: '/images/lifestyle-planning.jpg',
    description: 'A comprehensive guide covering all five pathways to a successful retirement: income, investments, taxes, healthcare, and estate planning.',
    downloadFormat: 'PDF',
    fileSize: '3.2 MB',
    pages: 42
  },
  {
    id: 'social-security-calculator',
    title: 'Social Security Optimization Calculator',
    type: 'CALCULATOR',
    image: '/images/adore.jpg',
    description: 'An interactive tool to help you determine the optimal age to claim Social Security benefits based on your unique situation.',
    downloadFormat: 'EXCEL',
    fileSize: '1.8 MB',
    pages: null
  },
  {
    id: 'tax-planning-checklist',
    title: 'Annual Tax Planning Checklist',
    type: 'CHECKLIST',
    image: '/images/tax-planning.jpg',
    description: 'A comprehensive checklist to ensure you\'re taking advantage of all available tax-saving opportunities throughout the year.',
    downloadFormat: 'PDF',
    fileSize: '1.5 MB',
    pages: 12
  }
];

// Recent resources
const recentResources = [
  {
    id: 'medicare-guide',
    title: 'Medicare Enrollment Guide',
    type: 'GUIDE',
    image: '/images/healthcare-costs.jpg',
    description: 'Everything you need to know about Medicare enrollment, coverage options, and important deadlines.',
    downloadFormat: 'PDF',
    fileSize: '2.8 MB'
  },
  {
    id: 'retirement-budget',
    title: 'Retirement Budget Worksheet',
    type: 'WORKSHEET',
    image: '/images/office.jpg',
    description: 'A detailed worksheet to help you plan and track your retirement expenses and income sources.',
    downloadFormat: 'EXCEL',
    fileSize: '1.2 MB'
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning Essentials',
    type: 'GUIDE',
    image: '/images/office-meeting.jpg',
    description: 'A comprehensive guide to estate planning, including wills, trusts, and legacy planning strategies.',
    downloadFormat: 'PDF',
    fileSize: '3.5 MB'
  },
  {
    id: 'investment-risk',
    title: 'Investment Risk Assessment Tool',
    type: 'CALCULATOR',
    image: '/images/phone-call.jpg',
    description: 'Evaluate your risk tolerance and determine the appropriate asset allocation for your retirement portfolio.',
    downloadFormat: 'EXCEL',
    fileSize: '1.6 MB'
  }
];

export default function ResourcesPage() {
  const sectionId = useId();
  
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
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>Planning Tools</span>
            </div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              RESOURCES
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className={`${playfair.className} text-7xl font-semibold tracking-tight text-gray-900 mb-6`}>
              Retirement
              <span className="block text-[#40A69F]">Resources</span>
            </h1>
            <p className={`${robotoFlex.className} text-xl text-gray-600 max-w-3xl mx-auto mb-4`}>
              Access our library of guides, calculators, checklists, and worksheets to help you plan for a secure retirement.
            </p>
            <p className={`${newsreaderItalic.className} text-2xl text-gray-500 max-w-2xl mx-auto`}>
              "The best preparation for tomorrow is doing your best today."
            </p>
          </div>

          {/* Resource Categories */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-[#E8F4F1] flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#40A69F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className={`${lora.className} text-3xl font-semibold text-gray-900`}>Resource Categories</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resourceCategories.map((category) => (
                <div 
                  key={category.id} 
                  className="group relative overflow-hidden rounded-xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src={category.icon}
                          alt={category.title}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h4 className={`${lora.className} text-xl font-bold text-gray-900 mb-2`}>
                      {category.title}
                    </h4>
                    <p className={`${robotoFlex.className} text-gray-600 mb-4`}>
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`${aldrich.className} text-sm px-3 py-1 rounded-full bg-[#E8F4F1] text-[#40A69F]`}>
                        {category.count} resources
                      </span>
                      <button className="inline-flex items-center text-[#40A69F] hover:text-[#2C7A75] transition-colors">
                        <span className={`${robotoFlex.className} mr-2`}>View All</span>
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

          {/* Featured Resources */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-[#E8F4F1] flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#40A69F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h2 className={`${lora.className} text-3xl font-semibold text-gray-900`}>Featured Resources</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredResources.map((resource) => (
                <div 
                  key={resource.id} 
                  className="group relative overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                      <span className={`${aldrich.className} text-sm text-[#40A69F]`}>{resource.type}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`${lora.className} text-xl font-semibold leading-tight mb-3 group-hover:text-[#40A69F] transition-colors`}>
                      {resource.title}
                    </h3>
                    <p className={`${robotoFlex.className} text-gray-600 mb-4 line-clamp-3`}>{resource.description}</p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <span className={`${aldrich.className} text-sm px-2 py-1 rounded-full bg-gray-100 text-gray-700`}>
                          {resource.downloadFormat}
                        </span>
                        <span className={`${robotoFlex.className} text-sm text-gray-500`}>
                          {resource.fileSize}
                        </span>
                        {resource.pages && (
                          <span className={`${robotoFlex.className} text-sm text-gray-500`}>
                            {resource.pages} pages
                          </span>
                        )}
                      </div>
                      <button className="inline-flex items-center text-[#40A69F] hover:text-[#2C7A75] transition-colors">
                        <span className={`${robotoFlex.className} mr-2`}>Download</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Resources */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-[#E8F4F1] flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#40A69F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className={`${lora.className} text-3xl font-semibold text-gray-900`}>Recently Added</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentResources.map((resource) => (
                <div 
                  key={resource.id} 
                  className="group flex flex-col md:flex-row items-stretch rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                >
                  <div className="relative w-full md:w-[200px] aspect-video md:aspect-auto">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`${aldrich.className} px-2 py-0.5 text-xs rounded bg-gray-100 text-[#40A69F] uppercase tracking-wider`}>{resource.type}</span>
                    </div>
                    <h3 className={`${lora.className} text-lg font-semibold leading-snug mb-2 group-hover:text-[#40A69F] transition-colors`}>
                      {resource.title}
                    </h3>
                    <p className={`${robotoFlex.className} text-sm text-gray-600 mb-3 line-clamp-2`}>{resource.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center space-x-3">
                        <span className={`${aldrich.className} text-sm px-2 py-1 rounded-full bg-gray-100 text-gray-700`}>
                          {resource.downloadFormat}
                        </span>
                        <span className={`${robotoFlex.className} text-sm text-gray-500`}>
                          {resource.fileSize}
                        </span>
                      </div>
                      <button className="inline-flex items-center text-[#40A69F] hover:text-[#2C7A75] transition-colors">
                        <span className={`${robotoFlex.className} mr-2 text-sm`}>Download</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Request Custom Resource */}
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-[#E8F4F1] to-white p-8 mb-16">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className={`${lora.className} text-3xl font-semibold text-gray-900 mb-4`}>
                  Need a Custom Resource?
                </h3>
                <p className={`${robotoFlex.className} text-lg text-gray-600 mb-6`}>
                  Can't find what you're looking for? Our team can create custom retirement planning resources tailored to your specific needs.
                </p>
                <button className="bg-[#40A69F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#368F89] transition-colors inline-flex items-center">
                  <span className="mr-2">Request Custom Resource</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
                <p className={`${indieFlower.className} text-sm text-[#40A69F] mt-3`}>
                  We typically respond to custom requests within 48 hours
                </p>
              </div>
              <div className="relative h-[300px] hidden lg:block">
                <Image
                  src="/images/compass.png"
                  alt="Custom Resource Request"
                  fill
                  className="object-contain animate-float"
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
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="rgba(64, 166, 159, 0.3)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
            
            {/* Animated Compass Elements */}
            <g className="animate-float-slow" opacity="0.2">
              <circle cx="10%" cy="20%" r="30" stroke="#40A69F" strokeWidth="1" fill="none" />
              <line x1="10%" y1="17%" x2="10%" y2="23%" stroke="#40A69F" strokeWidth="1" />
              <line x1="7%" y1="20%" x2="13%" y2="20%" stroke="#40A69F" strokeWidth="1" />
            </g>
            
            <g className="animate-float-medium" opacity="0.2">
              <circle cx="90%" cy="60%" r="40" stroke="#40A69F" strokeWidth="1" fill="none" />
              <line x1="90%" y1="56%" x2="90%" y2="64%" stroke="#40A69F" strokeWidth="1" />
              <line x1="86%" y1="60%" x2="94%" y2="60%" stroke="#40A69F" strokeWidth="1" />
            </g>
            
            {/* Decorative Lines */}
            <path
              d="M0,100 Q300,150 600,100 T1200,100"
              fill="none"
              stroke="#40A69F"
              strokeWidth="1"
              opacity="0.1"
              className="chart-line"
            />
            <path
              d="M0,200 Q400,250 800,200 T1200,250"
              fill="none"
              stroke="#40A69F"
              strokeWidth="1"
              opacity="0.1"
              className="chart-line-dashed"
            />
          </svg>
        </div>
      </section>
    </main>
  );
} 