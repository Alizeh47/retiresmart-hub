'use client';

import { Aldrich, Roboto_Flex, Newsreader, Playfair_Display, Indie_Flower, Montserrat } from 'next/font/google';
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

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// Blog posts data
const featuredPosts = [
  {
    id: 'retirement-planning',
    date: 'JUN 15, 2024',
    image: '/images/lifestyle-planning.jpg',
    title: 'The 5 Essential Steps to a Secure Retirement',
    category: 'RETIREMENT PLANNING',
    excerpt: 'Discover the key strategies that can help you build a solid foundation for your retirement years and ensure financial security.',
    author: 'Michael Johnson',
    authorImage: '/images/team/ceo.jpg',
    readTime: '8 min read'
  },
  {
    id: 'tax-strategies',
    date: 'MAY 28, 2024',
    image: '/images/tax-planning.jpg',
    title: 'Smart Tax Strategies for Retirees in 2024',
    category: 'TAX PLANNING',
    excerpt: 'Learn about the latest tax-saving opportunities that can help you keep more of your hard-earned money during retirement.',
    author: 'Sarah Williams',
    authorImage: '/images/team/cto.jpg',
    readTime: '6 min read'
  },
  {
    id: 'healthcare-costs',
    date: 'APR 12, 2024',
    image: '/images/healthcare-costs.jpg',
    title: 'Managing Healthcare Costs in Retirement',
    category: 'HEALTHCARE',
    excerpt: 'Explore effective strategies to plan for and manage healthcare expenses, which can be one of the largest costs in retirement.',
    author: 'David Chen',
    authorImage: '/images/team/advisor.jpg',
    readTime: '10 min read'
  }
];

// Recent posts data
const recentPosts = [
  {
    id: 'investment-trends',
    date: 'JUN 10, 2024',
    image: '/images/mountain-river.png',
    title: 'Investment Trends to Watch in the Second Half of 2024',
    category: 'INVESTMENTS',
    excerpt: 'Stay ahead of the curve with these emerging investment trends that could shape your portfolio performance.',
    readTime: '5 min read'
  },
  {
    id: 'social-security',
    date: 'JUN 05, 2024',
    image: '/images/mountain-landscape.png',
    title: 'Maximizing Your Social Security Benefits',
    category: 'INCOME PLANNING',
    excerpt: 'Timing is everything when it comes to Social Security. Learn the strategies that can increase your lifetime benefits.',
    readTime: '7 min read'
  },
  {
    id: 'estate-planning',
    date: 'MAY 22, 2024',
    image: '/images/office-meeting.jpg',
    title: 'Estate Planning Essentials Every Family Should Know',
    category: 'ESTATE PLANNING',
    excerpt: 'Protect your legacy and ensure your wishes are carried out with these essential estate planning tips.',
    readTime: '9 min read'
  },
  {
    id: 'market-volatility',
    date: 'MAY 15, 2024',
    image: '/images/desert-landscape.png',
    title: 'Navigating Market Volatility in Uncertain Times',
    category: 'MARKET INSIGHTS',
    excerpt: 'Strategies to help you stay calm and make informed decisions when markets become turbulent.',
    readTime: '6 min read'
  }
];

// Blog categories
const categories = [
  'Retirement Planning',
  'Tax Strategies',
  'Investment Insights',
  'Healthcare',
  'Estate Planning',
  'Social Security',
  'Market Updates',
  'Lifestyle Planning'
];

export default function BlogPage() {
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
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>Insights & Ideas</span>
            </div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              JOURNAL
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className={`${playfair.className} text-7xl font-semibold tracking-tight text-gray-900 mb-6`}>
              Our
              <span className="block text-[#40A69F]">Blog</span>
            </h1>
            <p className={`${robotoFlex.className} text-xl text-gray-600 max-w-3xl mx-auto mb-4`}>
              Insights, strategies, and wisdom to help you navigate your retirement journey with confidence.
            </p>
            <p className={`${newsreaderItalic.className} text-2xl text-gray-500 max-w-2xl mx-auto`}>
              "Financial knowledge is the compass that guides you to a secure retirement."
            </p>
          </div>

          {/* Search and Categories */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-1/3">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#40A69F] focus:border-transparent"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Categories Dropdown */}
              <div className="relative w-full md:w-1/3">
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#40A69F] focus:border-transparent appearance-none">
                  <option value="">Filter by Category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category.toLowerCase().replace(' ', '-')}>{category}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Posts */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-[#E8F4F1] flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#40A69F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h2 className={`${montserrat.className} text-3xl font-semibold text-gray-900`}>Featured Articles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="group relative overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                      <span className={`${aldrich.className} text-sm text-[#40A69F]`}>{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className={`${robotoFlex.className} text-sm text-gray-500`}>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className={`${robotoFlex.className} text-sm text-gray-500`}>{post.readTime}</span>
                    </div>
                    <h3 className={`${montserrat.className} text-xl font-semibold leading-tight mb-3 group-hover:text-[#40A69F] transition-colors`}>
                      {post.title}
                    </h3>
                    <p className={`${robotoFlex.className} text-gray-600 mb-4 line-clamp-3`}>{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className={`${robotoFlex.className} text-sm text-gray-700`}>{post.author}</span>
                      </div>
                      <button className="inline-flex items-center text-[#40A69F] hover:text-[#2C7A75] transition-colors">
                        <span className={`${robotoFlex.className} mr-2`}>Read More</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-[#E8F4F1] flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#40A69F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className={`${montserrat.className} text-3xl font-semibold text-gray-900`}>Recent Articles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="group flex flex-col md:flex-row items-stretch rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
                >
                  <div className="relative w-full md:w-[200px] aspect-video md:aspect-auto">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`${robotoFlex.className} text-sm text-gray-500`}>{post.date}</span>
                      <span className={`${aldrich.className} px-2 py-0.5 text-xs rounded bg-gray-100 text-[#40A69F] uppercase tracking-wider`}>{post.category}</span>
                    </div>
                    <h3 className={`${montserrat.className} text-lg font-semibold leading-snug mb-2 group-hover:text-[#40A69F] transition-colors`}>
                      {post.title}
                    </h3>
                    <p className={`${robotoFlex.className} text-sm text-gray-600 mb-3 line-clamp-2`}>{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className={`${robotoFlex.className} text-sm text-gray-500`}>{post.readTime}</span>
                      <button className="inline-flex items-center text-[#40A69F] hover:text-[#2C7A75] transition-colors">
                        <span className={`${robotoFlex.className} mr-2 text-sm`}>Read More</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-[#E8F4F1] to-white p-8 mb-16">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className={`${montserrat.className} text-3xl font-semibold text-gray-900 mb-4`}>
                  Subscribe to Our Newsletter
                </h3>
                <p className={`${robotoFlex.className} text-lg text-gray-600 mb-6`}>
                  Stay updated with the latest retirement planning insights, market trends, and exclusive content delivered straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#40A69F] focus:border-transparent"
                  />
                  <button className="bg-[#40A69F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#368F89] transition-colors">
                    Subscribe
                  </button>
                </div>
                <p className={`${indieFlower.className} text-sm text-[#40A69F] mt-3`}>
                  Join over 10,000 subscribers who trust our financial expertise
                </p>
              </div>
              <div className="relative h-[300px] hidden lg:block">
                <Image
                  src="/images/hot-air-balloon.png"
                  alt="Newsletter Subscription"
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

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 mb-16">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-[#40A69F] text-white flex items-center justify-center">1</button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">2</button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">3</button>
            <span className="text-gray-500">...</span>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">8</button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
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
            <circle cx="10%" cy="20%" r="5" fill="#40A69F" opacity="0.2" className="animate-float-slow">
            </circle>
            <circle cx="90%" cy="60%" r="8" fill="#40A69F" opacity="0.2" className="animate-float-medium">
            </circle>
            <circle cx="30%" cy="80%" r="6" fill="#40A69F" opacity="0.2" className="animate-float-fast">
            </circle>
            
            {/* Decorative Lines */}
            <path
              d="M0,100 Q300,150 600,100 T1200,100"
              fill="none"
              stroke="#40A69F"
              strokeWidth="1"
              opacity="0.1"
              className="chart-line"
            >
            </path>
            <path
              d="M0,200 Q400,250 800,200 T1200,250"
              fill="none"
              stroke="#40A69F"
              strokeWidth="1"
              opacity="0.1"
              className="chart-line-dashed"
            >
            </path>
          </svg>
        </div>
      </section>
    </main>
  );
} 