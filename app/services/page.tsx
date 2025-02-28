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

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          {/* Header with decorative lines */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              COMPREHENSIVE
            </h2>
            <div className="flex-1 text-center px-4">
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>RetireSmart Hub</span>
            </div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              SOLUTIONS
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className={`${playfair.className} text-8xl font-semibold tracking-tight text-gray-900 mb-6 insights-title`}>
              OUR RETIREMENT
            </h1>
            <h2 className={`${playfair.className} text-6xl font-semibold tracking-tight text-gray-700 mb-6 insights-title`}>
              SERVICES
            </h2>
            <p className={`${roboto.className} text-lg text-gray-600 max-w-3xl mx-auto mb-4`}>
              Tailored solutions for every stage of your retirement journey
            </p>
            <p className={`${newsreader.className} text-xl text-gray-500 max-w-2xl mx-auto`}>
              &quot;The best preparation for tomorrow is doing your best today.&quot;
            </p>
          </div>

          {/* Service Icons */}
          <div className="flex justify-center items-center gap-16 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2">
                <Image
                  src="/images/icons/income-planning.svg"
                  alt="Income Planning"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <span className={`${aldrich.className} text-sm text-gray-600`}>Income Planning</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2">
                <Image
                  src="/images/icons/assets-management.svg"
                  alt="Assets Management"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <span className={`${aldrich.className} text-sm text-gray-600`}>Assets Management</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2">
                <Image
                  src="/images/icons/legacy-planning.svg"
                  alt="Legacy Planning"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <span className={`${aldrich.className} text-sm text-gray-600`}>Legacy Planning</span>
            </div>
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

      {/* Services Introduction */}
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
              Our Approach to Retirement Planning
            </h2>
            <p className={`${roboto.className} text-gray-700 mb-8`}>
              At RetireSmart Hub, we believe that retirement planning should be comprehensive, personalized, and adaptable. Our services are designed to address all aspects of your retirement journey, from financial planning to lifestyle considerations, ensuring a holistic approach to your future.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 bg-[#FFF1EE] relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Animated floating shapes */}
            <div className="absolute top-20 left-20 w-16 h-16 bg-teal/10 rounded-full animate-float-slow"></div>
            <div className="absolute top-40 right-40 w-24 h-24 bg-teal/10 rounded-full animate-float-medium"></div>
            <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-teal/10 rounded-full animate-float-fast"></div>
            
            {/* Decorative lines */}
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,30 Q25,50 50,30 T100,30" fill="none" stroke="#40CFA4" strokeWidth="0.1" className="path-animation" />
              <path d="M0,50 Q25,70 50,50 T100,50" fill="none" stroke="#40CFA4" strokeWidth="0.1" className="path-animation delay-1" />
              <path d="M0,70 Q25,90 50,70 T100,70" fill="none" stroke="#40CFA4" strokeWidth="0.1" className="path-animation delay-2" />
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <h2 className={`${aldrich.className} text-4xl font-bold text-center mb-12 text-black`}>
            Core Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="relative w-full h-[350px]">
                <Image
                  src="/images/icons/income-planning.svg"
                  alt="Retirement Income Planning"
                  fill
                  className="object-contain p-12 filter-teal"
                />
                <div className="absolute inset-0 bg-white/80 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-teal rounded-full flex items-center justify-center">
                    <Image
                      src="/images/icons/income-planning.svg"
                      alt="Income Planning"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-beige rounded-lg -z-10"></div>
            </div>
            <div>
              <h3 className={`${playfair.className} text-3xl font-bold mb-4 text-primary`}>
                Retirement Income Planning
              </h3>
              <p className={`${roboto.className} text-gray-700 mb-6`}>
                Develop a sustainable income strategy that ensures your financial needs are met throughout retirement. Our experts will help you optimize Social Security benefits, create tax-efficient withdrawal strategies, and balance your income sources.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Social Security optimization</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Pension analysis and maximization</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Tax-efficient withdrawal strategies</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className={`${playfair.className} text-3xl font-bold mb-4 text-primary`}>
                Investment Management
              </h3>
              <p className={`${roboto.className} text-gray-700 mb-6`}>
                Our investment strategies are tailored to your retirement timeline, risk tolerance, and income needs. We focus on creating diversified portfolios designed to provide growth, income, and stability throughout your retirement years.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Retirement-focused portfolio design</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Risk management strategies</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Regular portfolio reviews and adjustments</span>
                </li>
              </ul>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="relative w-full h-[350px]">
                <Image
                  src="/images/icons/assets-management.svg"
                  alt="Investment Management"
                  fill
                  className="object-contain p-12 filter-teal"
                />
                <div className="absolute inset-0 bg-white/80 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-teal rounded-full flex items-center justify-center">
                    <Image
                      src="/images/icons/assets-management.svg"
                      alt="Assets Management"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-beige rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full h-[350px]">
                <Image
                  src="/images/icons/legacy-planning.svg"
                  alt="Estate & Legacy Planning"
                  fill
                  className="object-contain p-12 filter-teal"
                />
                <div className="absolute inset-0 bg-white/80 rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-teal rounded-full flex items-center justify-center">
                    <Image
                      src="/images/icons/legacy-planning.svg"
                      alt="Legacy Planning"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-beige rounded-lg -z-10"></div>
            </div>
            <div>
              <h3 className={`${playfair.className} text-3xl font-bold mb-4 text-primary`}>
                Estate & Legacy Planning
              </h3>
              <p className={`${roboto.className} text-gray-700 mb-6`}>
                Ensure your assets are distributed according to your wishes and minimize the burden on your loved ones. Our estate planning services help you create a comprehensive strategy for transferring wealth and preserving your legacy.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Will and trust planning</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Beneficiary designation review</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Charitable giving strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute -bottom-20 -right-20 w-96 h-96 text-teal opacity-5" viewBox="0 0 100 100">
            <path d="M50,0 L100,50 L50,100 L0,50 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4">
          <h2 className={`${aldrich.className} text-4xl font-bold text-center mb-12 text-black`}>
            Additional Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-beige-light p-8 rounded-lg shadow-soft group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className={`${playfair.className} text-2xl font-bold mb-4 text-primary`}>
                Healthcare Planning
              </h3>
              <p className={`${roboto.className} text-gray-700`}>
                Navigate Medicare options, long-term care insurance, and healthcare cost projections to ensure your medical needs are covered throughout retirement.
              </p>
              
              {/* Hand-drawn annotation */}
              <div className={`${indieFlower.className} absolute top-2 right-2 text-sm text-teal transform rotate-6`}>
                Essential!
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="bg-beige-light p-8 rounded-lg shadow-soft group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={`${playfair.className} text-2xl font-bold mb-4 text-primary`}>
                Tax Planning
              </h3>
              <p className={`${roboto.className} text-gray-700`}>
                Implement tax-efficient strategies to minimize your tax burden during retirement, including Roth conversions, tax-loss harvesting, and charitable giving.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-beige-light p-8 rounded-lg shadow-soft group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className={`${playfair.className} text-2xl font-bold mb-4 text-primary`}>
                Lifestyle Planning
              </h3>
              <p className={`${roboto.className} text-gray-700`}>
                Explore housing options, travel goals, hobbies, and other lifestyle considerations to ensure your retirement years are fulfilling and purposeful.
              </p>
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
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className={`${aldrich.className} text-4xl font-bold mb-6 text-black`}>
            Ready to Get Started?
          </h2>
          <p className={`${roboto.className} text-gray-700 mb-8 max-w-2xl mx-auto`}>
            Take the first step toward a secure and fulfilling retirement. Schedule a consultation with our retirement planning experts today.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center rounded-md bg-teal px-8 py-3 text-sm font-medium text-white shadow-button hover:bg-teal-dark transition-all duration-200"
          >
            <span>Schedule a Consultation</span>
            <span className="ml-2">→</span>
          </Link>
          
          {/* Hand-drawn annotation */}
          <div className={`${indieFlower.className} absolute -bottom-2 right-1/4 text-lg text-primary transform -rotate-6 bg-white p-2 rounded shadow-sm hidden md:block`}>
            Your journey begins here!
            <svg className="absolute -left-8 top-1/2 w-8 h-8 text-primary transform -translate-y-1/2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
} 