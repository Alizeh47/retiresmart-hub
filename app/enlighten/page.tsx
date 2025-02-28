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

export default function EnlightenPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          {/* Header with decorative lines */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              WISDOM
            </h2>
            <div className="flex-1 text-center px-4">
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>RetireSmart Hub</span>
            </div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              CLARITY
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className={`${playfair.className} text-8xl font-semibold tracking-tight text-gray-900 mb-6 insights-title`}>
              ENLIGHTEN YOUR
            </h1>
            <h2 className={`${playfair.className} text-6xl font-semibold tracking-tight text-gray-700 mb-6 insights-title`}>
              RETIREMENT JOURNEY
            </h2>
            <p className={`${roboto.className} text-lg text-gray-600 max-w-3xl mx-auto mb-4`}>
              Gain clarity and insight for your retirement planning
            </p>
            <p className={`${newsreader.className} text-xl text-gray-500 max-w-2xl mx-auto`}>
              &quot;Knowledge is the light that guides us through the darkness of uncertainty.&quot;
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
          
          {/* Decorative Elements */}
          <div className="flex justify-center items-center gap-16 mb-8">
            <div className="w-16 h-16 opacity-40">
              <Image
                src="/images/compass.png"
                alt="Compass"
                width={64}
                height={64}
                className="object-contain animate-spin-slow"
              />
            </div>
            <div className="w-16 h-16 opacity-40">
              <Image
                src="/images/hot-air-balloon.png"
                alt="Hot Air Balloon"
                width={64}
                height={64}
                className="object-contain animate-float-slow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enlighten Introduction Section */}
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
            <h2 className={`${aldrich.className} text-4xl font-bold mb-6 text-black`}>
              What is Enlighten?
            </h2>
            <p className={`${roboto.className} text-gray-700 mb-8`}>
              Enlighten is our comprehensive educational platform designed to illuminate the path to a successful retirement. Through expert insights, interactive tools, and personalized resources, we help you gain the knowledge and confidence needed to make informed decisions about your financial future.
            </p>
          </div>
        </div>
      </section>

      {/* Enlighten Features Section */}
      <section className="py-16 bg-[#FFF1EE] relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Animated floating shapes */}
            <div className="absolute top-20 left-20 w-16 h-16 bg-teal/10 rounded-full animate-float-slow"></div>
            <div className="absolute top-40 right-40 w-24 h-24 bg-teal/10 rounded-full animate-float-medium"></div>
            <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-teal/10 rounded-full animate-float-fast"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <h2 className={`${aldrich.className} text-4xl font-bold text-center mb-12 text-black`}>
            Enlighten Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-soft text-center group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className={`${playfair.className} text-xl font-bold mb-3 text-primary`}>
                Educational Resources
              </h3>
              <p className={`${roboto.className} text-gray-700`}>
                Access a library of articles, videos, and guides covering all aspects of retirement planning.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-soft text-center group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className={`${playfair.className} text-xl font-bold mb-3 text-primary`}>
                Interactive Tools
              </h3>
              <p className={`${roboto.className} text-gray-700`}>
                Utilize calculators and simulators to visualize different retirement scenarios and outcomes.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-soft text-center group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={`${playfair.className} text-xl font-bold mb-3 text-primary`}>
                Webinars & Workshops
              </h3>
              <p className={`${roboto.className} text-gray-700`}>
                Participate in live and on-demand sessions led by retirement planning experts.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-soft text-center group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={`${playfair.className} text-xl font-bold mb-3 text-primary`}>
                Personalized Timeline
              </h3>
              <p className={`${roboto.className} text-gray-700`}>
                Receive customized recommendations based on your retirement timeline and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute -bottom-20 -right-20 w-96 h-96 text-teal opacity-5" viewBox="0 0 100 100">
            <path d="M50,0 L100,50 L50,100 L0,50 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4">
          <h2 className={`${aldrich.className} text-4xl font-bold text-center mb-12 text-black`}>
            Featured Content
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <div className="bg-beige-light rounded-lg overflow-hidden shadow-soft group hover:shadow-md transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/insights/retirement-planning.jpg"
                  alt="Social Security Strategies"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal/10 group-hover:bg-teal/20 transition-colors duration-300"></div>
                <div className={`${indieFlower.className} absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm text-primary transform rotate-3`}>
                  Popular!
                </div>
              </div>
              <div className="p-6">
                <h3 className={`${playfair.className} text-xl font-bold mb-3 text-primary`}>
                  Social Security Strategies
                </h3>
                <p className={`${roboto.className} text-gray-700 mb-4`}>
                  Learn how to maximize your Social Security benefits with these expert strategies.
                </p>
                <Link href="#" className="text-teal font-medium hover:text-teal-dark transition-colors inline-flex items-center">
                  Read More 
                  <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Article 2 */}
            <div className="bg-beige-light rounded-lg overflow-hidden shadow-soft group hover:shadow-md transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/insights/credit-card.jpg"
                  alt="Healthcare in Retirement"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal/10 group-hover:bg-teal/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className={`${playfair.className} text-xl font-bold mb-3 text-primary`}>
                  Healthcare in Retirement
                </h3>
                <p className={`${roboto.className} text-gray-700 mb-4`}>
                  Understand Medicare, supplemental insurance, and planning for healthcare costs.
                </p>
                <Link href="#" className="text-teal font-medium hover:text-teal-dark transition-colors inline-flex items-center">
                  Read More 
                  <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Article 3 */}
            <div className="bg-beige-light rounded-lg overflow-hidden shadow-soft group hover:shadow-md transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/insights/email-warning.jpg"
                  alt="Tax-Efficient Withdrawals"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal/10 group-hover:bg-teal/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className={`${playfair.className} text-xl font-bold mb-3 text-primary`}>
                  Tax-Efficient Withdrawals
                </h3>
                <p className={`${roboto.className} text-gray-700 mb-4`}>
                  Strategies to minimize taxes when drawing from your retirement accounts.
                </p>
                <Link href="#" className="text-teal font-medium hover:text-teal-dark transition-colors inline-flex items-center">
                  Read More 
                  <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-beige relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/texture/pencil-texture.svg"
            alt="Texture"
            fill
            className="object-cover opacity-10"
          />
          
          {/* Light bulb illustrations */}
          <div className="absolute top-10 left-10 w-16 h-16 opacity-20">
            <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1" className="animate-pulse-slow">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2Z" />
              <path d="M9 21H15" />
              <path d="M10 18V21" />
              <path d="M14 18V21" />
            </svg>
          </div>
          
          <div className="absolute bottom-10 right-10 w-16 h-16 opacity-20">
            <svg viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="1" className="animate-pulse-medium">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2Z" />
              <path d="M9 21H15" />
              <path d="M10 18V21" />
              <path d="M14 18V21" />
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className={`${aldrich.className} text-4xl font-bold mb-6 text-black`}>
            Ready to Get Enlightened?
          </h2>
          <p className={`${roboto.className} text-gray-700 mb-8 max-w-2xl mx-auto`}>
            Start your journey to retirement clarity today. Access our educational resources and tools to illuminate your path to financial security.
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
            Start your journey here!
            <svg className="absolute -left-8 top-1/2 w-8 h-8 text-primary transform -translate-y-1/2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
} 