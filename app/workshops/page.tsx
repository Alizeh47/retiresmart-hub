'use client';

import { Aldrich, Roboto_Flex, Newsreader, Playfair_Display, Indie_Flower, Merriweather, Oswald, Dancing_Script } from 'next/font/google';
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

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// Workshop events data
const upcomingWorkshops = [
  {
    id: 'retirement-essentials',
    date: 'JUN 15, 2024',
    time: '10:00 AM - 12:00 PM',
    location: 'Virtual Event',
    image: '/images/office-meeting.jpg',
    title: 'Retirement Essentials: Building Your Financial Foundation',
    category: 'VIRTUAL WORKSHOP',
    description: 'Learn the fundamental building blocks of a successful retirement plan. This interactive workshop covers income planning, tax strategies, and investment approaches tailored for pre-retirees.',
    seats: '24 seats available'
  },
  {
    id: 'social-security',
    date: 'JUN 22, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Main Office - Conference Room A',
    image: '/images/lifestyle-planning.jpg',
    title: 'Maximizing Social Security Benefits',
    category: 'IN-PERSON WORKSHOP',
    description: 'Discover strategies to optimize your Social Security benefits. We\'ll cover claiming strategies, taxation of benefits, and how to integrate Social Security into your overall retirement income plan.',
    seats: '12 seats available'
  },
  {
    id: 'tax-strategies',
    date: 'JUL 8, 2024',
    time: '1:00 PM - 3:00 PM',
    location: 'Virtual Event',
    image: '/images/tax-planning.jpg',
    title: 'Tax-Efficient Retirement Strategies',
    category: 'VIRTUAL WORKSHOP',
    description: 'Learn how to minimize taxes throughout retirement. This workshop covers Roth conversions, tax-efficient withdrawal strategies, and how recent tax law changes might affect your retirement.',
    seats: '30 seats available'
  },
  {
    id: 'healthcare-planning',
    date: 'JUL 15, 2024',
    time: '10:00 AM - 12:00 PM',
    location: 'Main Office - Conference Room B',
    image: '/images/healthcare-costs.jpg',
    title: 'Medicare & Healthcare Planning',
    category: 'IN-PERSON WORKSHOP',
    description: 'Navigate the complexities of healthcare in retirement. We\'ll cover Medicare enrollment, supplemental insurance options, and strategies for managing healthcare costs in retirement.',
    seats: '15 seats available'
  },
];

// Workshop benefits
const workshopBenefits = [
  {
    id: 'expert-guidance',
    title: 'Expert Guidance',
    icon: '/images/icons/income-planning.svg',
    description: 'Learn directly from certified financial professionals with decades of retirement planning experience.',
  },
  {
    id: 'interactive-format',
    title: 'Interactive Format',
    icon: '/images/icons/assets-management.svg',
    description: 'Engage in discussions, ask questions, and participate in exercises designed to clarify complex financial concepts.',
  },
  {
    id: 'actionable-strategies',
    title: 'Actionable Strategies',
    icon: '/images/icons/legacy-planning.svg',
    description: 'Walk away with specific, implementable strategies tailored to your retirement timeline and goals.',
  },
  {
    id: 'comprehensive-resources',
    title: 'Comprehensive Resources',
    icon: '/images/icons/medicare-care.svg',
    description: 'Receive workshop materials, planning worksheets, and exclusive access to our retirement planning toolkit.',
  },
];

export default function WorkshopsPage() {
  const sectionId = useId();
  
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[#F9F7F4] opacity-70"></div>
          
          {/* Decorative Elements */}
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            {/* Grid Pattern */}
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(64, 166, 159, 0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Animated Elements */}
            <circle cx="10%" cy="20%" r="5" fill="#40A69F" opacity="0.2" className="animate-float-slow">
              <animate attributeName="r" values="5;8;5" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="90%" cy="60%" r="8" fill="#40A69F" opacity="0.2" className="animate-float-medium">
              <animate attributeName="r" values="8;12;8" dur="4s" repeatCount="indefinite" />
            </circle>
            
            {/* Compass Rose */}
            <g transform="translate(100, 700) scale(0.15)" opacity="0.1">
              <image href="/images/compass.svg" width="400" height="400" className="animate-float-slow" />
            </g>
            
            {/* Hot Air Balloon */}
            <g transform="translate(1000, 150) scale(0.1)" opacity="0.15">
              <image href="/images/hot-air-balloon.png" width="240" height="240" className="animate-float-medium" />
            </g>
          </svg>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with decorative lines */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <h2 className={`${oswald.className} text-lg px-4 text-gray-600 tracking-wider`}>
              EDUCATIONAL
            </h2>
            <div className="flex-1 text-center px-4">
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>Workshops & Events</span>
            </div>
            <h2 className={`${oswald.className} text-lg px-4 text-gray-600 tracking-wider`}>
              SERIES
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className={`${playfair.className} text-7xl font-semibold tracking-tight text-gray-900 mb-6`}>
              Learn & Grow
              <span className="block text-[#40A69F]">With Our Experts</span>
            </h1>
            <p className={`${robotoFlex.className} text-xl text-gray-600 max-w-3xl mx-auto mb-4`}>
              Join our interactive workshops designed to empower you with knowledge and strategies for a successful retirement.
            </p>
            <p className={`${dancingScript.className} text-3xl text-gray-500 max-w-2xl mx-auto`}>
              "Education is not preparation for retirement; it is retirement itself."
            </p>
          </div>

          {/* Featured Workshop */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#E8F4F1] to-white p-8 mb-16">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className={`${oswald.className} text-sm bg-[#40A69F] text-white px-3 py-1 rounded-full`}>FEATURED EVENT</span>
                  <span className={`${robotoFlex.className} text-sm text-gray-500 ml-3`}>JUN 15, 2024</span>
                </div>
                <h3 className={`${merriweather.className} text-3xl font-bold text-gray-900 mb-4`}>
                  Retirement Readiness Masterclass
                </h3>
                <p className={`${robotoFlex.className} text-lg text-gray-600 mb-6`}>
                  A comprehensive full-day workshop covering all five pathways to retirement success: Income, Tax, Investment, Healthcare, and Estate Planning.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#40A69F] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <span className={`${merriweather.className} font-semibold block text-gray-700`}>Date & Time</span>
                      <span className={`${robotoFlex.className} text-gray-600`}>June 29, 2024 • 9:00 AM - 4:00 PM</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#40A69F] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <span className={`${merriweather.className} font-semibold block text-gray-700`}>Location</span>
                      <span className={`${robotoFlex.className} text-gray-600`}>Grand Conference Center • 123 Main Street</span>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#40A69F] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                      <span className={`${merriweather.className} font-semibold block text-gray-700`}>Capacity</span>
                      <span className={`${robotoFlex.className} text-gray-600`}>Limited to 30 attendees • 18 seats remaining</span>
                    </div>
                  </li>
                </ul>
                <button className="bg-[#40A69F] hover:bg-[#368F89] text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Reserve Your Seat
                </button>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/images/mission.jpg"
                  alt="Retirement Readiness Masterclass"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 p-3 rounded-lg">
                    <p className={`${indieFlower.className} text-lg text-[#40A69F]`}>
                      Includes lunch & comprehensive workbook!
                    </p>
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

          {/* Workshop Benefits */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className={`${merriweather.className} text-3xl font-bold text-gray-900 mb-4`}>
                Why Attend Our Workshops?
              </h2>
              <p className={`${robotoFlex.className} text-lg text-gray-600 max-w-3xl mx-auto`}>
                Our educational events are designed to provide you with valuable insights and practical knowledge to enhance your retirement planning journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workshopBenefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="group relative overflow-hidden rounded-xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src={benefit.icon}
                          alt={benefit.title}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h4 className={`${oswald.className} text-xl font-bold text-gray-900 mb-2`}>
                      {benefit.title}
                    </h4>
                    <p className={`${robotoFlex.className} text-gray-600`}>
                      {benefit.description}
                    </p>
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

          {/* Upcoming Workshops */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className={`${merriweather.className} text-3xl font-bold text-gray-900`}>
                Upcoming Workshops
              </h2>
              <div className="flex space-x-2">
                <button className="bg-white border border-gray-300 rounded-md p-2 hover:bg-gray-50">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="bg-white border border-gray-300 rounded-md p-2 hover:bg-gray-50">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingWorkshops.map((workshop) => (
                <div
                  key={workshop.id}
                  className="group cursor-pointer rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={workshop.image}
                      alt={workshop.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                      <span className={`${oswald.className} text-sm text-[#40A69F]`}>{workshop.category}</span>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className={`${robotoFlex.className} text-sm text-gray-500`}>{workshop.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span className={`${robotoFlex.className} text-sm text-gray-500`}>{workshop.time}</span>
                    </div>
                    <h3 className={`${merriweather.className} text-xl font-bold leading-tight mb-3`}>
                      {workshop.title}
                    </h3>
                    <p className={`${robotoFlex.className} text-gray-600 mb-4`}>{workshop.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`${robotoFlex.className} text-sm text-gray-500`}>
                        <svg className="w-4 h-4 inline-block mr-1 text-[#40A69F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {workshop.location}
                      </span>
                      <span className={`${robotoFlex.className} text-sm text-[#40A69F]`}>
                        {workshop.seats}
                      </span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <button className="bg-white border border-[#40A69F] text-[#40A69F] hover:bg-[#E8F4F1] px-4 py-2 rounded-md text-sm font-medium transition-colors">
                        Learn More
                      </button>
                      <button className="bg-[#40A69F] hover:bg-[#368F89] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="relative rounded-xl overflow-hidden bg-[#40A69F] p-8 text-white">
            <div className="relative z-10 text-center">
              <h3 className={`${merriweather.className} text-2xl font-semibold mb-4`}>
                Can't Make It to a Workshop?
              </h3>
              <p className={`${robotoFlex.className} text-lg mb-6 max-w-3xl mx-auto`}>
                Schedule a one-on-one consultation with one of our retirement planning specialists to discuss your specific needs and goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-[#40A69F] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                  Schedule a Consultation
                </button>
                <button className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
                  View On-Demand Webinars
                </button>
              </div>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <pattern id="dots-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
                  <circle cx="10" cy="10" r="1.5" fill="white" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#dots-pattern)" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 