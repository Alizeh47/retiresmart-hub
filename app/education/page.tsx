import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display, Newsreader, Aldrich, Indie_Flower, Roboto_Flex } from 'next/font/google';
import '../styles/insights.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const newsreader = Newsreader({
  weight: '500',
  subsets: ['latin'],
  style: 'italic'
});

const aldrich = Aldrich({
  weight: '400',
  subsets: ['latin'],
});

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
});

const roboto = Roboto_Flex({
  weight: '300',
  subsets: ['latin'],
});

export default function EducationPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          {/* Header with decorative lines */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              YOUR LEARNING
            </h2>
            <div className="flex-1 text-center px-4">
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>RetireSmart Hub</span>
            </div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              JOURNEY
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className={`${playfair.className} text-8xl font-semibold tracking-tight text-gray-900 mb-6 insights-title`}>
              EDUCATIONAL
            </h1>
            <h2 className={`${playfair.className} text-6xl font-semibold tracking-tight text-gray-700 mb-6 insights-title`}>
              RESOURCES
            </h2>
            <p className={`${roboto.className} text-lg text-gray-600 max-w-3xl mx-auto mb-4`}>
              Empowering your retirement journey through knowledge
            </p>
            <p className={`${newsreader.className} text-xl text-gray-500 max-w-2xl mx-auto`}>
              &quot;Education is the passport to the future, for tomorrow belongs to those who prepare for it today.&quot;
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg className="absolute opacity-5" viewBox="0 0 400 400" width="400" height="400">
              <g>
                <circle 
                  cx="184" 
                  cy="202" 
                  r="4" 
                  className="decorative-dot dot-1" 
                  fill="#40A69F"
                  style={{ 
                    left: "64.32%",
                    top: "5.20%",
                    animationDelay: "0s"
                  }}
                />
                <circle 
                  cx="397" 
                  cy="192" 
                  r="4" 
                  className="decorative-dot dot-2" 
                  fill="#40A69F"
                  style={{ 
                    left: "97.01%",
                    top: "28.13%",
                    animationDelay: "0.5s"
                  }}
                />
                <circle 
                  cx="0" 
                  cy="114" 
                  r="4" 
                  className="decorative-dot dot-3" 
                  fill="#40A69F"
                  style={{ 
                    left: "29.97%",
                    top: "42.33%",
                    animationDelay: "1s"
                  }}
                />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Education Introduction */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute top-10 left-10 w-40 h-40 text-teal opacity-5" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
          </svg>
          <svg className="absolute bottom-10 right-10 w-40 h-40 text-teal opacity-5" viewBox="0 0 100 100">
            <rect x="10" y="10" width="80" height="80" fill="currentColor" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`${aldrich.className} text-4xl font-bold mb-6 text-[#2C1810]`}>
              Your Learning Journey
            </h2>
            <p className={`${roboto.className} text-gray-700 mb-8`}>
              Access our comprehensive library of retirement planning resources, designed to help you make informed decisions about your financial future. From beginner basics to advanced strategies, we provide the knowledge you need at every step of your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-[#FFF1EE] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className={`${aldrich.className} text-4xl font-bold text-center mb-12 text-[#2C1810]`}>
            Resource Categories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="bg-white p-8 rounded-lg shadow-soft text-center group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className={`${playfair.className} text-xl font-bold mb-4 text-[#2C1810]`}>
                Retirement Basics
              </h3>
              <p className="text-gray-700">
                Essential knowledge for understanding retirement planning fundamentals and key concepts.
              </p>
            </div>
            
            {/* Category 2 */}
            <div className="bg-white p-8 rounded-lg shadow-soft text-center group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className={`${playfair.className} text-xl font-bold mb-4 text-[#2C1810]`}>
                Investment Strategies
              </h3>
              <p className="text-gray-700">
                Learn about different investment approaches and how to build a resilient retirement portfolio.
              </p>
            </div>
            
            {/* Category 3 */}
            <div className="bg-white p-8 rounded-lg shadow-soft text-center group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className={`${playfair.className} text-xl font-bold mb-4 text-[#2C1810]`}>
                Advanced Planning
              </h3>
              <p className="text-gray-700">
                Dive deep into complex retirement planning topics and sophisticated strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className={`${aldrich.className} text-4xl font-bold text-center mb-12 text-[#2C1810]`}>
            Featured Resources
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Resource 1 */}
            <div className="bg-beige-light rounded-lg overflow-hidden shadow-soft group hover:shadow-md transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/insights/retirement-planning.jpg"
                  alt="Retirement Planning Guide"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal/10 group-hover:bg-teal/20 transition-colors duration-300"></div>
                <div className={`${indieFlower.className} absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm text-primary transform rotate-3`}>
                  New!
                </div>
              </div>
              <div className="p-6">
                <h3 className={`${playfair.className} text-xl font-bold mb-3 text-[#2C1810]`}>
                  Retirement Planning Guide
                </h3>
                <p className="text-gray-700 mb-4">
                  A comprehensive guide to help you understand and plan for retirement.
                </p>
                <Link href="#" className="text-teal font-medium hover:text-teal-dark transition-colors">
                  Download Guide →
                </Link>
              </div>
            </div>
            
            {/* Resource 2 */}
            <div className="bg-beige-light rounded-lg overflow-hidden shadow-soft group hover:shadow-md transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/insights/credit-card.jpg"
                  alt="Video Series"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal/10 group-hover:bg-teal/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className={`${playfair.className} text-xl font-bold mb-3 text-[#2C1810]`}>
                  Video Series
                </h3>
                <p className="text-gray-700 mb-4">
                  Watch our expert-led video series on key retirement topics.
                </p>
                <Link href="#" className="text-teal font-medium hover:text-teal-dark transition-colors">
                  Watch Now →
                </Link>
              </div>
            </div>
            
            {/* Resource 3 */}
            <div className="bg-beige-light rounded-lg overflow-hidden shadow-soft group hover:shadow-md transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/insights/email-warning.jpg"
                  alt="Retirement Calculator"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal/10 group-hover:bg-teal/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className={`${playfair.className} text-xl font-bold mb-3 text-[#2C1810]`}>
                  Retirement Calculator
                </h3>
                <p className="text-gray-700 mb-4">
                  Interactive tools to help you plan and visualize your retirement.
                </p>
                <Link href="#" className="text-teal font-medium hover:text-teal-dark transition-colors">
                  Try Calculator →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-beige relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/texture/pencil-texture.svg"
            alt="Texture"
            fill
            className="object-cover opacity-10"
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className={`${aldrich.className} text-4xl font-bold mb-6 text-[#2C1810]`}>
            Start Learning Today
          </h2>
          <p className={`${roboto.className} text-gray-700 mb-8 max-w-2xl mx-auto`}>
            Access our comprehensive library of retirement planning resources and take the first step toward a secure retirement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/schedule"
              className="inline-flex items-center rounded-md bg-teal px-8 py-3 text-sm font-medium text-white shadow-button hover:bg-teal-dark transition-all duration-200"
            >
              <span>Schedule a Consultation</span>
              <span className="ml-2">→</span>
            </Link>
            <Link
              href="#"
              className="inline-flex items-center rounded-md bg-white px-8 py-3 text-sm font-medium text-primary border border-primary shadow-button hover:bg-beige-light transition-all duration-200"
            >
              <span>Browse Resources</span>
              <span className="ml-2">→</span>
            </Link>
          </div>
          
          {/* Hand-drawn annotation */}
          <div className={`${indieFlower.className} absolute -bottom-10 right-1/4 text-lg text-primary transform -rotate-6 bg-white p-2 rounded shadow-sm hidden md:block`}>
            Begin your learning journey!
            <svg className="absolute -left-8 top-1/2 w-8 h-8 text-primary transform -translate-y-1/2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
} 