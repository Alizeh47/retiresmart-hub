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

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          {/* Header with decorative lines */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              OUR COMPANY
            </h2>
            <div className="flex-1 text-center px-4">
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>RetireSmart Hub</span>
            </div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              PHILOSOPHY
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className={`${playfair.className} text-8xl font-semibold tracking-tight text-gray-900 mb-6 insights-title`}>
              OUR STORY
            </h1>
            <h2 className={`${playfair.className} text-6xl font-semibold tracking-tight text-gray-700 mb-6 insights-title`}>
              & MISSION
            </h2>
            <p className={`${roboto.className} text-lg text-gray-600 max-w-3xl mx-auto mb-4`}>
              Guiding your journey to a secure and fulfilling retirement
            </p>
            <p className={`${newsreader.className} text-xl text-gray-500 max-w-2xl mx-auto`}>
              &quot;Our purpose is to help you navigate the path to a retirement filled with confidence and joy.&quot;
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

      {/* Mission Section */}
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
              Our Mission
            </h2>
            <p className={`${roboto.className} text-gray-700 mb-8`}>
              At RetireSmart Hub, we're dedicated to transforming retirement planning into an empowering journey. Our mission is to provide comprehensive, accessible guidance that helps individuals and families create sustainable, fulfilling retirement plans.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[#FFF1EE] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className={`${aldrich.className} text-4xl font-bold text-center mb-12 text-[#2C1810]`}>
            Our Core Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-soft text-center group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className={`${playfair.className} text-xl font-bold mb-4 text-[#2C1810]`}>
                Trust & Integrity
              </h3>
              <p className="text-gray-700">
                We build lasting relationships based on transparency, honesty, and unwavering ethical standards.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-soft text-center group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className={`${playfair.className} text-xl font-bold mb-4 text-[#2C1810]`}>
                Innovation
              </h3>
              <p className="text-gray-700">
                We continuously evolve our solutions to meet the changing needs of retirement planning.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-soft text-center group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className={`${playfair.className} text-xl font-bold mb-4 text-[#2C1810]`}>
                Client-Centered
              </h3>
              <p className="text-gray-700">
                Your goals and dreams are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className={`${aldrich.className} text-4xl font-bold text-center mb-12 text-[#2C1810]`}>
            Our Leadership Team
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-beige-light rounded-lg overflow-hidden shadow-soft group hover:shadow-md transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/images/team/ceo.jpg"
                  alt="CEO"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal/10 group-hover:bg-teal/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className={`${playfair.className} text-xl font-bold mb-2 text-[#2C1810]`}>
                  Sarah Johnson
                </h3>
                <p className={`${newsreader.className} text-teal mb-4`}>
                  CEO & Founder
                </p>
                <p className="text-gray-700">
                  20+ years of experience in retirement planning and wealth management.
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-beige-light rounded-lg overflow-hidden shadow-soft group hover:shadow-md transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/images/team/cto.jpg"
                  alt="CTO"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal/10 group-hover:bg-teal/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className={`${playfair.className} text-xl font-bold mb-2 text-[#2C1810]`}>
                  Michael Chen
                </h3>
                <p className={`${newsreader.className} text-teal mb-4`}>
                  Chief Technology Officer
                </p>
                <p className="text-gray-700">
                  Leading innovation in retirement planning technology solutions.
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-beige-light rounded-lg overflow-hidden shadow-soft group hover:shadow-md transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/images/team/advisor.jpg"
                  alt="Lead Advisor"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal/10 group-hover:bg-teal/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className={`${playfair.className} text-xl font-bold mb-2 text-[#2C1810]`}>
                  David Martinez
                </h3>
                <p className={`${newsreader.className} text-teal mb-4`}>
                  Lead Retirement Advisor
                </p>
                <p className="text-gray-700">
                  Certified Financial Planner™ with expertise in retirement strategies.
                </p>
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
            Start Your Journey With Us
          </h2>
          <p className={`${roboto.className} text-gray-700 mb-8 max-w-2xl mx-auto`}>
            Let's work together to create your ideal retirement plan. Schedule a consultation with our expert team today.
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
              href="/virtual-office"
              className="inline-flex items-center rounded-md bg-white px-8 py-3 text-sm font-medium text-primary border border-primary shadow-button hover:bg-beige-light transition-all duration-200"
            >
              <span>Visit Virtual Office</span>
              <span className="ml-2">→</span>
            </Link>
          </div>
          
          {/* Hand-drawn annotation */}
          <div className={`${indieFlower.className} absolute -bottom-10 right-1/4 text-lg text-primary transform -rotate-6 bg-white p-2 rounded shadow-sm hidden md:block`}>
            Let's plan your future together!
            <svg className="absolute -left-8 top-1/2 w-8 h-8 text-primary transform -translate-y-1/2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
} 