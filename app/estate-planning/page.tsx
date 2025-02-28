'use client';

import { Aldrich, Roboto_Flex, Newsreader, Playfair_Display, Indie_Flower, Cormorant } from 'next/font/google';
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

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

// Estate planning tools
const estatePlanningTools = [
  {
    id: 'wills',
    title: 'Wills',
    icon: '/images/icons/legacy-planning.svg',
    description: 'A legal document that outlines how you want your assets distributed after your death and names guardians for minor children.',
  },
  {
    id: 'trusts',
    title: 'Trusts',
    icon: '/images/icons/pension.png',
    description: 'Legal arrangements that allow assets to be held by one party for the benefit of another, often with tax advantages and probate avoidance.',
  },
  {
    id: 'power-of-attorney',
    title: 'Power of Attorney',
    icon: '/images/icons/investment.png',
    description: 'Legal documents that allow someone to make decisions on your behalf if you become incapacitated.',
  },
  {
    id: 'healthcare-directives',
    title: 'Healthcare Directives',
    icon: '/images/icons/annuity.png',
    description: 'Documents that specify your wishes for medical treatment if you are unable to communicate them yourself.',
  },
];

// Estate planning benefits
const benefits = [
  {
    title: 'Asset Protection',
    description: 'Shield your assets from creditors, lawsuits, and other potential threats.',
  },
  {
    title: 'Tax Efficiency',
    description: 'Minimize estate and gift taxes to preserve more wealth for your beneficiaries.',
  },
  {
    title: 'Family Harmony',
    description: 'Prevent disputes among family members by clearly outlining your wishes.',
  },
  {
    title: 'Legacy Preservation',
    description: 'Ensure your values and wishes are honored for generations to come.',
  },
  {
    title: 'Business Succession',
    description: 'Create a smooth transition plan for family businesses or professional practices.',
  },
  {
    title: 'Charitable Giving',
    description: 'Establish a lasting legacy through strategic charitable contributions.',
  },
];

export default function EstatePlanningPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Elegant Background */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-20 right-10 w-64 h-64 text-[#40A69F] opacity-5" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z" />
          </svg>
          
          <svg className="absolute bottom-10 left-10 w-48 h-48 text-[#40A69F] opacity-5" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50,0 C77.6,0 100,22.4 100,50 C100,77.6 77.6,100 50,100 C22.4,100 0,77.6 0,50 C0,22.4 22.4,0 50,0 Z" />
          </svg>
          
          {/* Decorative Lines */}
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M-100,200 C100,150 300,250 500,200 C700,150 900,250 1100,200 C1300,150 1500,250 1700,200"
              fill="none"
              stroke="#40A69F"
              strokeWidth="1"
              opacity="0.1"
              className="decorative-line"
            />
            <path
              d="M-100,400 C100,350 300,450 500,400 C700,350 900,450 1100,400 C1300,350 1500,450 1700,400"
              fill="none"
              stroke="#40A69F"
              strokeWidth="1"
              opacity="0.1"
              className="decorative-line"
            />
            <path
              d="M-100,600 C100,550 300,650 500,600 C700,550 900,650 1100,600 C1300,550 1500,650 1700,600"
              fill="none"
              stroke="#40A69F"
              strokeWidth="1"
              opacity="0.1"
              className="decorative-line"
            />
          </svg>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header with decorative lines */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <h2 className={`${cormorant.className} text-lg px-4 text-gray-600 tracking-wider font-medium`}>
              LEGACY
            </h2>
            <div className="flex-1 text-center px-4">
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>Estate Planning</span>
            </div>
            <h2 className={`${cormorant.className} text-lg px-4 text-gray-600 tracking-wider font-medium`}>
              PROTECTION
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-16">
            <h1 className={`${playfair.className} text-7xl font-semibold tracking-tight text-gray-900 mb-6`}>
              Preserve Your
              <span className="block text-[#40A69F]">Legacy</span>
            </h1>
            <p className={`${robotoFlex.className} text-xl text-gray-600 max-w-3xl mx-auto mb-4`}>
              Comprehensive estate planning to protect your assets and secure your family's future.
            </p>
            <p className={`${newsreaderItalic.className} text-2xl text-gray-500 max-w-2xl mx-auto`}>
              "A good plan is like a road map: it shows the final destination and usually the best way to get there."
            </p>
          </div>

          {/* Featured Content */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#E8F4F1] to-white p-8 mb-16">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className={`${cormorant.className} text-3xl font-semibold text-gray-900 mb-4`}>
                  Why Estate Planning Matters
                </h3>
                <p className={`${robotoFlex.className} text-lg text-gray-600 mb-6`}>
                  Estate planning is about more than just distributing assets—it's about protecting your legacy, minimizing taxes, and ensuring your wishes are carried out exactly as you intend.
                </p>
                <div className="bg-white bg-opacity-70 rounded-lg p-5 backdrop-blur-sm border border-gray-100">
                  <h4 className={`${cormorant.className} text-xl font-medium text-gray-900 mb-3`}>Did You Know?</h4>
                  <p className={`${robotoFlex.className} text-gray-700 mb-2`}>
                    Without proper estate planning:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <svg className="w-5 h-5 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className={`${robotoFlex.className} text-gray-700`}>Your assets may be distributed according to state law, not your wishes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-5 h-5 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className={`${robotoFlex.className} text-gray-700`}>Your heirs may face unnecessary taxes and probate costs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <svg className="w-5 h-5 mt-0.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className={`${robotoFlex.className} text-gray-700`}>Family conflicts may arise over asset distribution</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/images/office-meeting.jpg"
                  alt="Estate Planning Illustration"
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

          {/* Estate Planning Tools */}
          <div className="mb-16">
            <h3 className={`${cormorant.className} text-3xl font-semibold text-center text-gray-900 mb-8`}>
              Essential Estate Planning Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {estatePlanningTools.map((tool) => (
                <div
                  key={tool.id}
                  className="group relative overflow-hidden rounded-xl p-6 bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative z-10">
                    <div className="mb-4">
                      <div className="relative w-12 h-12">
                        <Image
                          src={tool.icon}
                          alt={tool.title}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h4 className={`${cormorant.className} text-xl font-bold text-gray-900 mb-2`}>
                      {tool.title}
                    </h4>
                    <p className={`${robotoFlex.className} text-gray-600`}>
                      {tool.description}
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

          {/* Benefits Section */}
          <div className="mb-16">
            <h3 className={`${cormorant.className} text-3xl font-semibold text-center text-gray-900 mb-8`}>
              Benefits of Comprehensive Estate Planning
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-[#E8F4F1] flex items-center justify-center mb-4">
                    <span className={`${cormorant.className} text-lg font-semibold text-[#40A69F]`}>{index + 1}</span>
                  </div>
                  <h4 className={`${cormorant.className} text-xl font-semibold text-gray-900 mb-2`}>
                    {benefit.title}
                  </h4>
                  <p className={`${robotoFlex.className} text-gray-600`}>
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div className="relative rounded-xl overflow-hidden mb-16">
            <div className="absolute inset-0 bg-[#40A69F] opacity-10"></div>
            <div className="relative z-10 p-8 md:p-12">
              <div className="max-w-4xl mx-auto text-center">
                <svg className="w-12 h-12 mx-auto mb-4 text-[#40A69F]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="mb-6">
                  <p className={`${newsreaderItalic.className} text-2xl text-gray-800`}>
                    "Estate planning is an act of love. It's one of the most thoughtful things you can do for your family."
                  </p>
                </blockquote>
                <div className={`${cormorant.className} text-lg font-medium text-gray-700`}>
                  - Financial Planning Expert
                </div>
              </div>
            </div>
            <div className="absolute inset-0 border-2 border-[#40A69F] opacity-10 m-1 rounded-lg"></div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-block relative">
              <div className="relative z-10 bg-[#40A69F] text-white px-8 py-4 rounded-lg shadow-lg hover:bg-[#2C7A75] transition-colors">
                <h3 className={`${cormorant.className} text-2xl font-semibold mb-2`}>Ready to secure your legacy?</h3>
                <p className={`${robotoFlex.className} mb-4`}>Schedule a consultation with our estate planning specialists today.</p>
                <button className="bg-white text-[#40A69F] px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                  Start Your Estate Plan
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