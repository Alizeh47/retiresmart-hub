'use client';

import Image from 'next/image';
import { Aldrich, Roboto_Flex, Newsreader } from 'next/font/google';

const aldrich = Aldrich({
  weight: '400',
  subsets: ['latin'],
});

const robotoFlex = Roboto_Flex({
  weight: '300',
  subsets: ['latin'],
});

const newsreaderItalic = Newsreader({
  weight: '300',
  style: 'italic',
  subsets: ['latin'],
});

const services = [
  {
    id: 1,
    title: 'Retirement Income Planning',
    description: "You've got goals. But goals cost money. Make sure you have an income that works for you in retirement. And while we're at it, why not make that income guaranteed? We'll show you how to get the most out of your current assets, pension, and/or Social Security (whatever you might have). We'll also be along for the full ride, helping to smooth things out when the road ahead gets a little bumpy. There are no shortcuts on the path to retirement, but we do know all kinds of clever side streets.",
    image: '/images/mountain-landscape.png',
    position: 'right'
  },
  {
    id: 2,
    title: 'Tax Planning',
    description: "Your retirement plans may not include the IRS. But rest assured, the IRS has plans for your retirement. Let's work together to make sure you get to keep the money you've earned. We'll show you how to diversify your tax strategy and maximize your retirement benefits. We'll make sure that paying taxes isn't a roadblock on your way to retirement.",
    image: '/images/desert-landscape.png',
    position: 'left'
  },
  {
    id: 3,
    title: 'Investment Planning',
    description: "The perfect retirement looks a little different for everybody. The ideal portfolio should be the exact same way. Let's make sure your investment outlook is right, while reducing risk, minimizing fees, and potentially creating a higher return. And because we're fully independent, we only answer to you. Whatever your personal goals are, we're here to keep your investments rolling in the right direction.",
    image: '/images/mountain-river.png',
    position: 'right'
  },
  {
    id: 4,
    title: 'Medicare/LTC Planning',
    description: "It's not always easy to talk about aging. It can be even harder to plan for it. We'll help you make a plan and build a retirement strategy that accounts for all contingencies. Make sure you're ready for all the unexpected twists and turns on the path ahead.",
    image: '/images/coastal-landscape.png',
    position: 'left'
  },
  {
    id: 5,
    title: 'Legacy/Estate Planning',
    description: "You've worked hard for everything you have. We're guessing you didn't do it so you could leave your inheritance to your least favorite uncle-Uncle Sam. We'll help you minimize taxes and reduce penalties. We'll also show you those smart backroads that only the locals know about. And we'll give you full control over who gets what. Make sure the people and causes you care about have the means to follow their own path.",
    image: '/images/beach-landscape.png',
    position: 'right'
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`${aldrich.className} text-4xl font-bold text-primary mb-6`}>
            Five Pathways is here to simplify
            <br />
            your retirement planning.
          </h2>
          <p className={`${robotoFlex.className} text-lg text-primary-light max-w-3xl mx-auto`}>
            We'll work with you to create a personalized strategy that incorporates all of
            the paths of retirement planning: <span className={`${newsreaderItalic.className} text-teal underline`}>Income</span>,{' '}
            <span className={`${newsreaderItalic.className} text-teal underline`}>Taxes</span>,{' '}
            <span className={`${newsreaderItalic.className} text-teal underline`}>Investments</span>,{' '}
            <span className={`${newsreaderItalic.className} text-teal underline`}>healthcare</span>, and{' '}
            <span className={`${newsreaderItalic.className} text-teal underline`}>Estate Planning</span>.
          </p>
        </div>

        {/* Services */}
        <div className="relative">
          {services.map((service, index) => (
            <div key={service.id} className="relative mb-40 last:mb-0">
              <div className={`flex items-center ${
                service.position === 'left' ? 'flex-row-reverse' : ''
              }`}>
                {/* Image */}
                <div className="w-1/2 relative">
                  <div className="relative w-full aspect-[4/3] transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain service-image"
                    />
                    {/* Hot Air Balloon */}
                    <div 
                      className="absolute w-20 h-20 float-animation"
                      style={{
                        bottom: '25%',
                        [service.position === 'left' ? 'right' : 'left']: '18%'
                      }}
                    >
                      <Image
                        src="/images/hot-air-balloon.png"
                        alt="Hot Air Balloon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`w-1/2 ${
                  service.position === 'left' ? 'pr-16' : 'pl-16'
                }`}>
                  <h3 className={`${aldrich.className} text-3xl text-primary mb-6`}>
                    {service.title}
                  </h3>
                  <p className={`${robotoFlex.className} text-lg text-primary-light mb-8 leading-relaxed`}>
                    {service.description}
                  </p>
                  <button className={`${robotoFlex.className} inline-flex items-center text-teal hover:text-teal-dark transition-colors`}>
                    <span className="mr-2">Learn more</span>
                    <svg width="40" height="24">
                      <path
                        d="M2 12c0 0 18-2 28 0"
                        stroke="currentColor"
                        fill="none"
                        className="pencil-path"
                        strokeLinecap="round"
                      />
                      <path
                        d="M28 4c0 0 3 4 3 8s-3 8-3 8"
                        stroke="currentColor"
                        fill="none"
                        className="pencil-path"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Connecting Path - Large Curved Arrow */}
              {index < services.length - 1 && (
                <div className="absolute w-full h-60 bottom-0 left-0 transform translate-y-full z-10 overflow-visible">
                  {service.position === 'left' && services[index + 1].position === 'right' ? (
                    <svg width="100%" height="100%" className="absolute top-0 left-0 overflow-visible" preserveAspectRatio="none">
                      <path
                        d="M300,10 C350,40 380,70 420,90 C460,110 500,120 550,130 C600,140 650,150 700,180"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        className="text-primary-light pencil-path"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Hand-drawn arrow head */}
                      <path
                        d="M700,180 L685,165 M690,178 L675,170 M695,175 L680,160"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        className="text-primary-light pencil-path"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : service.position === 'right' && services[index + 1].position === 'left' ? (
                    <svg width="100%" height="100%" className="absolute top-0 left-0 overflow-visible" preserveAspectRatio="none">
                      <path
                        d="M700,10 C650,40 620,70 580,90 C540,110 500,120 450,130 C400,140 350,150 300,180"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        className="text-primary-light pencil-path"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Hand-drawn arrow head */}
                      <path
                        d="M300,180 L315,165 M310,178 L325,170 M305,175 L320,160"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        className="text-primary-light pencil-path"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg width="100%" height="100%" className="absolute top-0 left-0 overflow-visible" preserveAspectRatio="none">
                      <path
                        d="M600,10 C550,30 500,60 520,90 C540,120 600,130 580,150 C560,170 520,160 600,180"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        className="text-primary-light pencil-path"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Hand-drawn arrow head */}
                      <path
                        d="M600,180 L590,165 M605,170 L585,160 M595,175 L580,155"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        className="text-primary-light pencil-path"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        
        .pencil-path {
          stroke-dasharray: 5, 3;
          stroke-linecap: round;
          stroke-linejoin: round;
          animation: draw-pencil 2s linear forwards;
        }
        
        @keyframes draw-pencil {
          from {
            stroke-dashoffset: 500;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
} 