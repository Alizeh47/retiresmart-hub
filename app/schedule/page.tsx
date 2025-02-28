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

export default function SchedulePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          {/* Header with decorative lines */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              MEET WITH
            </h2>
            <div className="flex-1 text-center px-4">
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>RetireSmart Hub</span>
            </div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              EXPERTS
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className={`${playfair.className} text-8xl font-semibold tracking-tight text-[#818C40] mb-6 insights-title`}>
              SCHEDULE A
            </h1>
            <h2 className={`${playfair.className} text-6xl font-semibold tracking-tight text-[#233A30] mb-6 insights-title`}>
              CONSULTATION
            </h2>
            <p className={`${roboto.className} text-lg text-gray-600 max-w-3xl mx-auto mb-4`}>
              Take the first step towards your secure retirement
            </p>
            <p className={`${newsreader.className} text-xl text-[#818C40] max-w-2xl mx-auto`}>
              &quot;The journey of a thousand miles begins with a single step.&quot;
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

      {/* Scheduling Options */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className={`${aldrich.className} text-4xl font-bold text-center mb-12 text-[#2C1810]`}>
            Choose Your Consultation Type
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Option 1 */}
            <div className="bg-beige-light rounded-lg overflow-hidden shadow-soft group hover:shadow-md transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/virtual.jpg"
                  alt="Virtual Meeting"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal/10 group-hover:bg-teal/20 transition-colors duration-300"></div>
                <div className={`${indieFlower.className} absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-sm text-primary transform rotate-3`}>
                  Most Popular!
                </div>
              </div>
              <div className="p-6">
                <h3 className={`${playfair.className} text-xl font-bold mb-3 text-[#2C1810]`}>
                  Virtual Consultation
                </h3>
                <p className="text-gray-700 mb-4">
                  Meet with our experts from the comfort of your home via secure video conference.
                </p>
                <Link href="#" className="text-teal font-medium hover:text-teal-dark transition-colors">
                  Schedule Virtual Meeting →
                </Link>
              </div>
            </div>
            
            {/* Option 2 */}
            <div className="bg-beige-light rounded-lg overflow-hidden shadow-soft group hover:shadow-md transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/office-meeting.jpg"
                  alt="In-Person Meeting"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal/10 group-hover:bg-teal/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className={`${playfair.className} text-xl font-bold mb-3 text-[#2C1810]`}>
                  In-Person Meeting
                </h3>
                <p className="text-gray-700 mb-4">
                  Visit our office for a face-to-face consultation with our retirement experts.
                </p>
                <Link href="#" className="text-teal font-medium hover:text-teal-dark transition-colors">
                  Schedule Office Visit →
                </Link>
              </div>
            </div>
            
            {/* Option 3 */}
            <div className="bg-beige-light rounded-lg overflow-hidden shadow-soft group hover:shadow-md transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/phone-call.jpg"
                  alt="Phone Consultation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-teal/10 group-hover:bg-teal/20 transition-colors duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className={`${playfair.className} text-xl font-bold mb-3 text-[#2C1810]`}>
                  Phone Consultation
                </h3>
                <p className="text-gray-700 mb-4">
                  Have a quick discussion with our team over the phone.
                </p>
                <Link href="#" className="text-teal font-medium hover:text-teal-dark transition-colors">
                  Schedule Phone Call →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-[#FFF1EE] relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className={`${aldrich.className} text-4xl font-bold text-center mb-12 text-[#2C1810]`}>
            What to Expect
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-lg shadow-soft text-center group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className={`${playfair.className} text-2xl text-white`}>1</span>
              </div>
              <h3 className={`${playfair.className} text-xl font-bold mb-4 text-[#2C1810]`}>
                Initial Discussion
              </h3>
              <p className="text-gray-700">
                Share your retirement goals and concerns with our expert advisor.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-lg shadow-soft text-center group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className={`${playfair.className} text-2xl text-white`}>2</span>
              </div>
              <h3 className={`${playfair.className} text-xl font-bold mb-4 text-[#2C1810]`}>
                Strategy Development
              </h3>
              <p className="text-gray-700">
                Receive personalized recommendations based on your unique situation.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-lg shadow-soft text-center group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className={`${playfair.className} text-2xl text-white`}>3</span>
              </div>
              <h3 className={`${playfair.className} text-xl font-bold mb-4 text-[#2C1810]`}>
                Action Plan
              </h3>
              <p className="text-gray-700">
                Get a clear roadmap for implementing your retirement strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className={`${aldrich.className} text-4xl font-bold text-center mb-12 text-[#2C1810]`}>
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-beige-light p-6 rounded-lg">
              <h3 className={`${playfair.className} text-xl font-bold mb-3 text-[#2C1810]`}>
                How long is the consultation?
              </h3>
              <p className="text-gray-700">
                Initial consultations typically last 60 minutes, giving us enough time to understand your needs and discuss potential strategies.
              </p>
            </div>
            
            <div className="bg-beige-light p-6 rounded-lg">
              <h3 className={`${playfair.className} text-xl font-bold mb-3 text-[#2C1810]`}>
                Is there a fee for the initial consultation?
              </h3>
              <p className="text-gray-700">
                No, your initial consultation is complimentary. It's an opportunity for us to understand your needs and explain how we can help.
              </p>
            </div>
            
            <div className="bg-beige-light p-6 rounded-lg">
              <h3 className={`${playfair.className} text-xl font-bold mb-3 text-[#2C1810]`}>
                What should I prepare?
              </h3>
              <p className="text-gray-700">
                Having a general idea of your retirement goals and current financial situation is helpful, but not required. We'll guide you through the process.
              </p>
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
            Ready to Get Started?
          </h2>
          <p className={`${roboto.className} text-gray-700 mb-8 max-w-2xl mx-auto`}>
            Choose your preferred consultation type and take the first step toward a secure retirement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#"
              className="inline-flex items-center rounded-md bg-teal px-8 py-3 text-sm font-medium text-white shadow-button hover:bg-teal-dark transition-all duration-200"
            >
              <span>Schedule Now</span>
              <span className="ml-2">→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-white px-8 py-3 text-sm font-medium text-primary border border-primary shadow-button hover:bg-beige-light transition-all duration-200"
            >
              <span>Contact Us</span>
              <span className="ml-2">→</span>
            </Link>
          </div>
          
          {/* Hand-drawn annotation */}
          <div className={`${indieFlower.className} absolute -bottom-10 right-1/4 text-lg text-primary transform -rotate-6 bg-white p-2 rounded shadow-sm hidden md:block`}>
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