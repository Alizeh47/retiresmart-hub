'use client';

import { Aldrich, Roboto_Flex, Newsreader, Playfair_Display, Indie_Flower, Cormorant } from 'next/font/google';
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

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

// Video categories
const videoCategories = [
  {
    id: 'retirement-basics',
    title: 'Retirement Basics',
    icon: '/images/icons/income-planning.svg',
    description: 'Fundamental concepts and strategies for retirement planning.',
    count: 8
  },
  {
    id: 'investment-strategies',
    title: 'Investment Strategies',
    icon: '/images/icons/assets-management.svg',
    description: 'Expert insights on investment approaches for retirement.',
    count: 12
  },
  {
    id: 'tax-planning',
    title: 'Tax Planning',
    icon: '/images/icons/income-planning.svg',
    description: 'Strategies to minimize taxes and maximize retirement income.',
    count: 6
  },
  {
    id: 'healthcare-planning',
    title: 'Healthcare Planning',
    icon: '/images/icons/medicare-care.svg',
    description: 'Medicare, long-term care, and healthcare cost management.',
    count: 5
  }
];

// Featured videos
const featuredVideos = [
  {
    id: 'retirement-income',
    title: 'Creating a Sustainable Retirement Income Plan',
    category: 'RETIREMENT BASICS',
    thumbnail: '/images/lifestyle-planning.jpg',
    description: 'Learn how to create a retirement income plan that will last throughout your retirement years.',
    duration: '18:42',
    views: '2.4K',
    date: 'Jun 15, 2024'
  },
  {
    id: 'market-volatility',
    title: 'Navigating Market Volatility in Retirement',
    category: 'INVESTMENT STRATEGIES',
    thumbnail: '/images/office.jpg',
    description: 'Strategies to protect your retirement savings during periods of market uncertainty and volatility.',
    duration: '24:15',
    views: '1.8K',
    date: 'May 28, 2024'
  },
  {
    id: 'tax-efficient',
    title: 'Tax-Efficient Withdrawal Strategies',
    category: 'TAX PLANNING',
    thumbnail: '/images/tax-planning.jpg',
    description: 'Optimize your retirement withdrawals to minimize taxes and maximize your income.',
    duration: '21:30',
    views: '3.2K',
    date: 'Apr 12, 2024'
  }
];

// Recent videos
const recentVideos = [
  {
    id: 'medicare-explained',
    title: 'Medicare Explained: What You Need to Know',
    category: 'HEALTHCARE PLANNING',
    thumbnail: '/images/healthcare-costs.jpg',
    duration: '15:20',
    date: 'Jun 10, 2024'
  },
  {
    id: 'social-security',
    title: 'Maximizing Your Social Security Benefits',
    category: 'RETIREMENT BASICS',
    thumbnail: '/images/adore.jpg',
    duration: '19:45',
    date: 'Jun 05, 2024'
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning Essentials for Retirees',
    category: 'RETIREMENT BASICS',
    thumbnail: '/images/office-meeting.jpg',
    duration: '22:18',
    date: 'May 22, 2024'
  },
  {
    id: 'investment-allocation',
    title: 'Optimal Asset Allocation in Retirement',
    category: 'INVESTMENT STRATEGIES',
    thumbnail: '/images/phone-call.jpg',
    duration: '26:40',
    date: 'May 15, 2024'
  },
  {
    id: 'roth-conversion',
    title: 'Roth Conversion Strategies for Retirees',
    category: 'TAX PLANNING',
    thumbnail: '/images/team/advisor.jpg',
    duration: '17:55',
    date: 'May 08, 2024'
  },
  {
    id: 'long-term-care',
    title: 'Long-Term Care Planning: Protecting Your Future',
    category: 'HEALTHCARE PLANNING',
    thumbnail: '/images/team/ceo.jpg',
    duration: '23:10',
    date: 'May 01, 2024'
  }
];

export default function VideosPage() {
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
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>Visual Learning</span>
            </div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              VIDEOS
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className={`${playfair.className} text-7xl font-semibold tracking-tight text-gray-900 mb-6`}>
              Educational
              <span className="block text-[#40A69F]">Videos</span>
            </h1>
            <p className={`${robotoFlex.className} text-xl text-gray-600 max-w-3xl mx-auto mb-4`}>
              Watch our expert-led videos to gain insights and strategies for a successful retirement journey.
            </p>
            <p className={`${newsreaderItalic.className} text-2xl text-gray-500 max-w-2xl mx-auto`}>
              "Vision is the art of seeing what is invisible to others."
            </p>
          </div>

          {/* Video Categories */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-[#E8F4F1] flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#40A69F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h2 className={`${cormorant.className} text-3xl font-semibold text-gray-900`}>Video Categories</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videoCategories.map((category) => (
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
                    <h4 className={`${cormorant.className} text-xl font-bold text-gray-900 mb-2`}>
                      {category.title}
                    </h4>
                    <p className={`${robotoFlex.className} text-gray-600 mb-4`}>
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`${aldrich.className} text-sm px-3 py-1 rounded-full bg-[#E8F4F1] text-[#40A69F]`}>
                        {category.count} videos
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

          {/* Featured Videos */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-[#E8F4F1] flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#40A69F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h2 className={`${cormorant.className} text-3xl font-semibold text-gray-900`}>Featured Videos</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredVideos.map((video) => (
                <div 
                  key={video.id} 
                  className="group relative overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                        <svg className="w-8 h-8 text-[#40A69F] ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 px-2 py-1 rounded text-white text-sm">
                      {video.duration}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full">
                      <span className={`${aldrich.className} text-sm text-[#40A69F]`}>{video.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`${cormorant.className} text-xl font-semibold leading-tight mb-3 group-hover:text-[#40A69F] transition-colors`}>
                      {video.title}
                    </h3>
                    <p className={`${robotoFlex.className} text-gray-600 mb-4 line-clamp-3`}>{video.description}</p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <span className={`${robotoFlex.className} text-sm text-gray-500`}>
                          {video.views} views
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                        <span className={`${robotoFlex.className} text-sm text-gray-500`}>
                          {video.date}
                        </span>
                      </div>
                      <button className="inline-flex items-center text-[#40A69F] hover:text-[#2C7A75] transition-colors">
                        <span className={`${robotoFlex.className} mr-2`}>Watch</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Videos */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-[#E8F4F1] flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#40A69F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className={`${cormorant.className} text-3xl font-semibold text-gray-900`}>Recent Videos</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentVideos.map((video) => (
                <div 
                  key={video.id} 
                  className="group relative overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#40A69F] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 px-2 py-1 rounded text-white text-sm">
                      {video.duration}
                    </div>
                    <div className="absolute top-3 left-3 bg-white/90 px-2 py-0.5 rounded-full">
                      <span className={`${aldrich.className} text-xs text-[#40A69F]`}>{video.category}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className={`${cormorant.className} text-lg font-semibold leading-tight mb-2 group-hover:text-[#40A69F] transition-colors line-clamp-2`}>
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className={`${robotoFlex.className} text-sm text-gray-500`}>
                        {video.date}
                      </span>
                      <button className="inline-flex items-center text-[#40A69F] hover:text-[#2C7A75] transition-colors">
                        <span className={`${robotoFlex.className} mr-1 text-sm`}>Watch</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Series */}
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-[#E8F4F1] to-white p-8 mb-16">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className={`${cormorant.className} text-3xl font-semibold text-gray-900 mb-4`}>
                  Retirement Planning Video Series
                </h3>
                <p className={`${robotoFlex.className} text-lg text-gray-600 mb-6`}>
                  Our comprehensive 5-part video series covers all aspects of retirement planning, from income strategies to estate planning.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#40A69F] text-white flex items-center justify-center mr-3">
                      <span>1</span>
                    </div>
                    <span className={`${cormorant.className} text-lg`}>Income Planning Strategies</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#40A69F] text-white flex items-center justify-center mr-3">
                      <span>2</span>
                    </div>
                    <span className={`${cormorant.className} text-lg`}>Investment Management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#40A69F] text-white flex items-center justify-center mr-3">
                      <span>3</span>
                    </div>
                    <span className={`${cormorant.className} text-lg`}>Tax-Efficient Planning</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#40A69F] text-white flex items-center justify-center mr-3">
                      <span>4</span>
                    </div>
                    <span className={`${cormorant.className} text-lg`}>Healthcare & Medicare</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[#40A69F] text-white flex items-center justify-center mr-3">
                      <span>5</span>
                    </div>
                    <span className={`${cormorant.className} text-lg`}>Estate Planning</span>
                  </div>
                </div>
                <button className="bg-[#40A69F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#368F89] transition-colors inline-flex items-center">
                  <span className="mr-2">Watch the Series</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <p className={`${indieFlower.className} text-sm text-[#40A69F] mt-3`}>
                  Over 10,000 viewers have completed this series
                </p>
              </div>
              <div className="relative h-[300px] hidden lg:block">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-md">
                    <Image
                      src="/images/video.jpg"
                      alt="Video Series"
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white bg-opacity-80 flex items-center justify-center animate-pulse-slow">
                        <svg className="w-10 h-10 text-[#40A69F] ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4">
              <svg className="w-32 h-32 text-[#40A69F] opacity-10" fill="currentColor" viewBox="0 0 200 200">
                <path d="M0,100 C0,44.77 44.77,0 100,0 C155.23,0 200,44.77 200,100 C200,155.23 155.23,200 100,200 C44.77,200 0,155.23 0,100 Z" />
              </svg>
            </div>
          </div>

          {/* Subscribe to YouTube Channel */}
          <div className="text-center mb-16">
            <div className="mb-4">
              <p className={`${indieFlower.className} text-lg text-[#40A69F] mb-2`}>Never miss a new video</p>
              <h3 className={`${cormorant.className} text-2xl font-semibold text-gray-900 mb-2`}>Subscribe to Our YouTube Channel</h3>
              <p className={`${robotoFlex.className} text-gray-600 max-w-2xl mx-auto mb-6`}>
                Get notified when we release new educational videos about retirement planning strategies.
              </p>
            </div>
            <button className="bg-[#FF0000] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#CC0000] transition-colors inline-flex items-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              <span>Subscribe Now</span>
            </button>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="film" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" stroke="rgba(64, 166, 159, 0.1)" strokeWidth="1" />
                <rect x="0" y="0" width="10" height="10" fill="rgba(64, 166, 159, 0.05)" />
                <rect x="20" y="20" width="10" height="10" fill="rgba(64, 166, 159, 0.05)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#film)" />
            
            {/* Animated Film Reel Elements */}
            <g className="animate-float-slow" opacity="0.2">
              <circle cx="10%" cy="20%" r="30" stroke="#40A69F" strokeWidth="1" fill="none" />
              <circle cx="10%" cy="20%" r="25" stroke="#40A69F" strokeWidth="1" fill="none" />
              <circle cx="10%" cy="20%" r="5" fill="#40A69F" />
            </g>
            
            <g className="animate-float-medium" opacity="0.2">
              <circle cx="90%" cy="60%" r="40" stroke="#40A69F" strokeWidth="1" fill="none" />
              <circle cx="90%" cy="60%" r="35" stroke="#40A69F" strokeWidth="1" fill="none" />
              <circle cx="90%" cy="60%" r="6" fill="#40A69F" />
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