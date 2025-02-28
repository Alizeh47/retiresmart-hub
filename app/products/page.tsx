import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display, Newsreader, Aldrich, Indie_Flower, Roboto_Flex } from 'next/font/google';
import '../styles/insights.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const newsreader = Newsreader({
  weight: '700',
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

export default function ProductsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          {/* Header with decorative lines */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              FINANCIAL
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
              RETIREMENT
            </h1>
            <h2 className={`${playfair.className} text-6xl font-semibold tracking-tight text-gray-700 mb-6 insights-title`}>
              PRODUCTS
            </h2>
            <p className={`${roboto.className} text-lg text-gray-600 max-w-3xl mx-auto mb-4`}>
              Innovative financial solutions designed for your retirement needs
            </p>
            <p className={`${newsreader.className} text-xl text-gray-500 max-w-2xl mx-auto`}>
              &quot;The right financial products can make all the difference in your retirement journey.&quot;
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
          
          {/* Hot Air Balloon Decorative Element */}
          <div className="absolute top-0 right-0 w-40 h-40 opacity-30">
            <Image
              src="/images/hot-air-balloon.png"
              alt="Hot Air Balloon"
              width={160}
              height={160}
              className="object-contain animate-float-slow"
            />
          </div>
        </div>
      </section>

      {/* Products Introduction */}
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
              Our Retirement Planning Products
            </h2>
            <p className={`${roboto.className} text-gray-700 mb-8`}>
              At RetireSmart Hub, we've developed a suite of specialized products designed to address the unique challenges of retirement planning. Each product is crafted to provide clarity, guidance, and practical solutions for different aspects of your retirement journey.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
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
          <h2 className={`${aldrich.className} text-4xl font-bold text-center mb-12 text-[#2C1810]`}>
            Featured Products
          </h2>
          
          {/* Product 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative">
              <div className="relative w-full h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="/images/insights/retirement-planning.jpg"
                  alt="RetireSmart Navigator"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal/20"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-beige rounded-lg -z-10"></div>
            </div>
            <div>
              <div className="inline-block px-4 py-1 bg-teal/10 text-teal rounded-full mb-4">
                Featured Product
              </div>
              <h3 className={`${playfair.className} text-3xl font-bold mb-4 text-[#2C1810]`}>
                RetireSmart Navigator
              </h3>
              <p className={`${roboto.className} text-gray-700 mb-6`}>
                Our flagship retirement planning platform that provides a comprehensive roadmap for your retirement journey.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Interactive retirement income projections</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Scenario planning and stress testing</span>
                </li>
              </ul>
              <Link
                href="#"
                className="inline-flex items-center rounded-md bg-teal px-6 py-2 text-sm font-medium text-white shadow-button hover:bg-teal-dark transition-all duration-200"
              >
                <span>Learn More</span>
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
          
          {/* Additional Products */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-soft group hover:shadow-md transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/healthcare-costs.jpg"
                  alt="Healthcare Cost Estimator"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal/10 group-hover:bg-teal/20 transition-colors duration-300"></div>
                <div className={`${indieFlower.className} absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm text-primary transform rotate-3`}>
                  Popular!
                </div>
              </div>
              <div className="p-6">
                <h3 className={`${playfair.className} text-xl font-bold mb-3 text-[#2C1810]`}>
                  Healthcare Cost Estimator
                </h3>
                <p className="text-gray-700 mb-4">
                  Project and plan for healthcare expenses in retirement.
                </p>
                <Link href="#" className="text-teal font-medium hover:text-teal-dark transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Product Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-soft group hover:shadow-md transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/tax-planning.jpg"
                  alt="Tax Optimizer"
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
                  Tax Optimizer
                </h3>
                <p className="text-gray-700 mb-4">
                  Minimize your tax burden in retirement with smart strategies.
                </p>
                <Link href="#" className="text-teal font-medium hover:text-teal-dark transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Product Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-soft group hover:shadow-md transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/lifestyle-planning.jpg"
                  alt="Lifestyle Planner"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal/10 group-hover:bg-teal/20 transition-colors duration-300"></div>
                <div className={`${indieFlower.className} absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm text-primary transform rotate-3`}>
                  Essential!
                </div>
              </div>
              <div className="p-6">
                <h3 className={`${playfair.className} text-xl font-bold mb-3 text-[#2C1810]`}>
                  Lifestyle Planner
                </h3>
                <p className="text-gray-700 mb-4">
                  Design your ideal retirement lifestyle with our planning tools.
                </p>
                <Link href="#" className="text-teal font-medium hover:text-teal-dark transition-colors">
                  Learn More →
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
            Find Your Perfect Solution
          </h2>
          <p className={`${roboto.className} text-gray-700 mb-8 max-w-2xl mx-auto`}>
            Our retirement planning experts can help you select the products that best fit your unique situation and goals.
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
              <span>Compare Products</span>
              <span className="ml-2">→</span>
            </Link>
          </div>
          
          {/* Hand-drawn annotation */}
          <div className={`${indieFlower.className} absolute -bottom-10 right-1/4 text-lg text-primary transform -rotate-6 bg-white p-2 rounded shadow-sm hidden md:block`}>
            Start your journey today!
            <svg className="absolute -left-8 top-1/2 w-8 h-8 text-primary transform -translate-y-1/2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
} 