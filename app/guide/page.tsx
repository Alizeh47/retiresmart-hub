import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display, Newsreader, Aldrich, Indie_Flower, Roboto_Flex } from 'next/font/google';
import '../styles/insights.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '900'],
});

const newsreader = Newsreader({
  weight: '400',
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
  weight: '400',
  subsets: ['latin'],
});

export default function GuidePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          {/* Header with decorative lines */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              PERSONALIZED
            </h2>
            <div className="flex-1 text-center px-4">
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>RetireSmart Hub</span>
            </div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              PLANNING
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className={`${playfair.className} text-8xl font-semibold tracking-tight text-[#818C40] mb-6 insights-title`}>
              YOUR PERSONAL
            </h1>
            <h2 className={`${playfair.className} text-6xl font-semibold tracking-tight text-[#54613D] mb-6 insights-title`}>
              RETIREMENT GUIDE
            </h2>
            <p className={`${roboto.className} text-lg text-gray-600 max-w-3xl mx-auto mb-4`}>
              Navigate your retirement journey with confidence
            </p>
            <p className={`${newsreader.className} text-xl text-[#818C40] max-w-2xl mx-auto`}>
              &quot;The best time to plan for your retirement was 20 years ago. The second best time is now.&quot;
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

      {/* Guide Features Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <svg className="absolute top-10 left-10 w-20 h-20 text-teal opacity-10" viewBox="0 0 100 100" fill="none">
            <path d="M10,50 Q25,25 50,50 T90,50" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M10,60 Q25,35 50,60 T90,60" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          
          <svg className="absolute bottom-10 right-10 w-32 h-32 text-teal opacity-10 rotate-45" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" fill="none" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" fill="none" />
            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" strokeDasharray="1 1" fill="none" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4">
          <h2 className={`${aldrich.className} text-4xl font-bold text-center mb-12 text-black`}>
            How Your Personal Guide Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-beige-light p-8 rounded-lg shadow-soft text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal/5 rounded-bl-full transform transition-transform duration-500 group-hover:scale-150"></div>
              <div className="w-20 h-20 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-white text-3xl font-bold">1</span>
              </div>
              <h3 className={`${playfair.className} text-2xl font-bold mb-4 text-primary relative z-10`}>
                Assessment
              </h3>
              <p className={`${roboto.className} text-gray-700 relative z-10`}>
                We analyze your current financial situation, goals, and retirement timeline to create a personalized roadmap.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-beige-light p-8 rounded-lg shadow-soft text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal/5 rounded-bl-full transform transition-transform duration-500 group-hover:scale-150"></div>
              <div className="w-20 h-20 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-white text-3xl font-bold">2</span>
              </div>
              <h3 className={`${playfair.className} text-2xl font-bold mb-4 text-primary relative z-10`}>
                Planning
              </h3>
              <p className={`${roboto.className} text-gray-700 relative z-10`}>
                Our experts develop a comprehensive retirement strategy tailored to your unique needs and aspirations.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-beige-light p-8 rounded-lg shadow-soft text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal/5 rounded-bl-full transform transition-transform duration-500 group-hover:scale-150"></div>
              <div className="w-20 h-20 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <span className="text-white text-3xl font-bold">3</span>
              </div>
              <h3 className={`${playfair.className} text-2xl font-bold mb-4 text-primary relative z-10`}>
                Implementation
              </h3>
              <p className={`${roboto.className} text-gray-700 relative z-10`}>
                We help you put your plan into action with step-by-step guidance and ongoing support throughout your journey.
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Guidance Section */}
      <section className="py-16 bg-[#FFF1EE] relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="absolute top-10 right-10 w-40 h-40 text-teal opacity-5" viewBox="0 0 100 100" fill="currentColor">
              <path d="M50,0 L100,50 L50,100 L0,50 Z" />
            </svg>
            <svg className="absolute bottom-10 left-10 w-40 h-40 text-teal opacity-5" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="50" />
            </svg>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${aldrich.className} text-4xl font-bold mb-6 text-black`}>
                Personalized Guidance at Every Step
              </h2>
              <p className={`${roboto.className} text-gray-700 mb-8`}>
                Your retirement journey is unique. Our personalized guide adapts to your changing needs and circumstances, providing relevant advice and strategies at every stage of your retirement planning process.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Customized retirement income strategies</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Tax-efficient withdrawal planning</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Healthcare and long-term care considerations</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Estate planning and legacy goals</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/mission.jpg"
                  alt="Personalized Guidance"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-teal/20 rounded-lg"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-beige rounded-lg -z-10"></div>
              
              {/* Hand-drawn annotation */}
              <div className={`${indieFlower.className} absolute -top-10 -right-5 text-lg text-primary transform rotate-6 bg-white p-2 rounded shadow-sm`}>
                Your personalized path!
                <svg className="absolute -bottom-8 left-1/2 w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <Image
            src="/images/texture/vintage-paper.svg"
            alt="Texture"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className={`${aldrich.className} text-4xl font-bold mb-6 text-black`}>
            Ready to Start Your Journey?
          </h2>
          <p className={`${roboto.className} text-gray-700 mb-8 max-w-2xl mx-auto`}>
            Take the first step toward a secure and fulfilling retirement. Schedule a consultation with our retirement planning experts today.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center rounded-md bg-teal px-8 py-3 text-base font-medium text-white shadow-lg hover:bg-teal-dark hover:scale-105 hover:shadow-xl transition-all duration-300 group"
          >
            <span>Schedule a Consultation</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
          
          {/* Hand-drawn arrow */}
          <div className="relative inline-block mt-8">
            <svg className="w-32 h-24 mx-auto text-primary opacity-30" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M10,25 C20,10 30,40 40,25 C50,10 60,40 70,25 C80,10 90,40 95,25" strokeLinecap="round" strokeLinejoin="round" className="animate-draw-path" />
              <path d="M85,25 L95,25 L90,15" strokeLinecap="round" strokeLinejoin="round" className="animate-draw-path-delay" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
} 