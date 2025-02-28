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

export default function VirtualOfficePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          {/* Header with decorative lines */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              DIGITAL
            </h2>
            <div className="flex-1 text-center px-4">
              <span className={`${playfair.className} text-lg text-gray-600 italic`}>RetireSmart Hub</span>
            </div>
            <h2 className={`${playfair.className} text-lg px-4 text-gray-600 tracking-wider`}>
              EXPERIENCE
            </h2>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className={`${playfair.className} text-8xl font-semibold tracking-tight text-gray-900 mb-6 insights-title`}>
              YOUR RETIREMENT
            </h1>
            <h2 className={`${playfair.className} text-6xl font-semibold tracking-tight text-gray-700 mb-6 insights-title`}>
              VIRTUAL OFFICE
            </h2>
            <p className={`${roboto.className} text-lg text-gray-600 max-w-3xl mx-auto mb-4`}>
              Access your retirement planning tools and resources from anywhere
            </p>
            <p className={`${newsreader.className} text-xl text-gray-500 max-w-2xl mx-auto`}>
              &quot;The future belongs to those who prepare for it today, no matter where they are.&quot;
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

      {/* Virtual Office Introduction */}
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
              Welcome to Your Virtual Office
            </h2>
            <p className={`${roboto.className} text-gray-700 mb-8`}>
              Our Virtual Office brings the expertise of RetireSmart Hub to you, wherever you are. Through secure video consultations, interactive planning tools, and digital document sharing, we provide the same personalized retirement guidance you'd receive in person—all from the comfort of your home or while you're on the go.
            </p>
          </div>
        </div>
      </section>

      {/* Virtual Office Features */}
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
            Virtual Office Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-soft text-center group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={`${playfair.className} text-xl font-bold mb-4 text-primary`}>
                Secure Video Consultations
              </h3>
              <p className={`${roboto.className} text-gray-700`}>
                Meet face-to-face with our retirement experts through secure, high-quality video calls. Discuss your retirement plans, ask questions, and receive personalized guidance from anywhere.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-soft text-center group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className={`${playfair.className} text-xl font-bold mb-4 text-primary`}>
                Interactive Planning Tools
              </h3>
              <p className={`${roboto.className} text-gray-700`}>
                Access our suite of retirement planning tools in real-time during consultations. Visualize different scenarios, make adjustments, and see the impact on your retirement plan instantly.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-soft text-center group hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className={`${playfair.className} text-xl font-bold mb-4 text-primary`}>
                Secure Document Sharing
              </h3>
              <p className={`${roboto.className} text-gray-700`}>
                Safely share and store important retirement documents in our encrypted portal. Access your financial statements, retirement plans, and other critical information whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute -bottom-20 -right-20 w-96 h-96 text-teal opacity-5" viewBox="0 0 100 100">
            <path d="M50,0 L100,50 L50,100 L0,50 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4">
          <h2 className={`${aldrich.className} text-4xl font-bold text-center mb-12 text-[#2C1810]`}>
            How Our Virtual Office Works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="relative w-full h-[350px]">
                <Image
                  src="/images/mountain-landscape.png"
                  alt="Schedule a Consultation"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-teal/20 rounded-lg"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-beige rounded-lg -z-10"></div>
            </div>
            <div>
              <div className="inline-block px-4 py-1 bg-teal/10 text-teal rounded-full mb-4">
                Step 1
              </div>
              <h3 className={`${playfair.className} text-3xl font-bold mb-4 text-[#2C1810]`}>
                Schedule a Consultation
              </h3>
              <p className={`${roboto.className} text-gray-700 mb-6`}>
                Choose a date and time that works for you using our online scheduling system. Select the type of consultation you need, whether it's an initial retirement planning session, a portfolio review, or a specific financial question.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Flexible scheduling options</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Choose your preferred advisor</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Specify your retirement planning needs</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-1 bg-teal/10 text-teal rounded-full mb-4">
                Step 2
              </div>
              <h3 className={`${playfair.className} text-3xl font-bold mb-4 text-[#2C1810]`}>
                Prepare for Your Meeting
              </h3>
              <p className={`${roboto.className} text-gray-700 mb-6`}>
                After scheduling, you'll receive a confirmation email with a secure link to your virtual meeting room. You'll also get access to our pre-meeting questionnaire and document upload portal to help us prepare for your consultation.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Complete pre-meeting questionnaire</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Upload relevant financial documents</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Receive meeting reminders</span>
                </li>
              </ul>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="relative w-full h-[350px]">
                <Image
                  src="/images/mountain-landscape.png"
                  alt="Prepare for Your Meeting"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-teal/20 rounded-lg"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-beige rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full h-[350px]">
                <Image
                  src="/images/mountain-landscape.png"
                  alt="Meet Virtually"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-teal/20 rounded-lg"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-beige rounded-lg -z-10"></div>
            </div>
            <div>
              <div className="inline-block px-4 py-1 bg-teal/10 text-teal rounded-full mb-4">
                Step 3
              </div>
              <h3 className={`${playfair.className} text-3xl font-bold mb-4 text-[#2C1810]`}>
                Meet Virtually
              </h3>
              <p className={`${roboto.className} text-gray-700 mb-6`}>
                At your scheduled time, click the secure link to join your virtual meeting. Your retirement advisor will be ready to discuss your retirement goals, answer questions, and provide personalized guidance using our interactive planning tools.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>High-quality video and audio</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Screen sharing for interactive planning</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`${roboto.className} text-gray-700`}>Secure and private environment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Office Dashboard */}
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${aldrich.className} text-4xl font-bold mb-6 text-[#2C1810]`}>
                Your Virtual Office Dashboard
              </h2>
              <p className={`${roboto.className} text-gray-700 mb-8`}>
                Access your personalized retirement planning dashboard anytime, anywhere. Track your progress, view your retirement plan, access important documents, and schedule consultations—all in one secure location.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[#2C1810] font-bold">Retirement Plan Tracker</span>
                    <p className={`${roboto.className} text-gray-700 text-sm mt-1`}>Monitor your progress toward your retirement goals with real-time updates.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[#2C1810] font-bold">Document Center</span>
                    <p className={`${roboto.className} text-gray-700 text-sm mt-1`}>Securely store and access all your important retirement planning documents.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[#2C1810] font-bold">Meeting History</span>
                    <p className={`${roboto.className} text-gray-700 text-sm mt-1`}>Review past consultations, including notes, recommendations, and action items.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-teal rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[#2C1810] font-bold">Secure Messaging</span>
                    <p className={`${roboto.className} text-gray-700 text-sm mt-1`}>Communicate with your retirement advisor between meetings through our encrypted messaging system.</p>
                  </div>
                </li>
              </ul>
              <Link
                href="#"
                className="inline-flex items-center rounded-md bg-teal px-6 py-3 text-sm font-medium text-white shadow-button hover:bg-teal-dark transition-all duration-200"
              >
                <span>Access Your Dashboard</span>
                <span className="ml-2">→</span>
              </Link>
            </div>
            <div className="relative">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/mountain-landscape.png"
                  alt="Virtual Office Dashboard"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-teal/20 rounded-lg"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-beige rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute -bottom-20 -right-20 w-96 h-96 text-teal opacity-5" viewBox="0 0 100 100">
            <path d="M50,0 L100,50 L50,100 L0,50 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center">
          <h2 className={`${aldrich.className} text-4xl font-bold mb-6 text-[#2C1810]`}>
            Ready to Visit Our Virtual Office?
          </h2>
          <p className={`${roboto.className} text-gray-700 mb-8 max-w-2xl mx-auto`}>
            Experience the convenience and personalized guidance of our Virtual Office. Schedule your first consultation today and take the next step toward a secure retirement.
          </p>
          <Link
            href="/schedule"
            className="inline-flex items-center rounded-md bg-teal px-8 py-3 text-sm font-medium text-white shadow-button hover:bg-teal-dark transition-all duration-200"
          >
            <span>Schedule a Virtual Consultation</span>
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
} 