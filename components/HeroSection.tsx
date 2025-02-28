'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Newsreader, Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
});

const newsreader = Newsreader({
  weight: '300',
  subsets: ['latin'],
  style: 'italic'
});

const companyLogos = [
  {
    name: 'Yahoo Finance',
    filename: 'yahoo-finance'
  },
  {
    name: 'Nasdaq',
    filename: 'nasdaq'
  },
  {
    name: 'AOL',
    filename: 'aol'
  },
  {
    name: 'GO Banking Rates',
    filename: 'go-banking-rates'
  },
  {
    name: 'NewsBreak',
    filename: 'newsbreak'
  },
  {
    name: 'MSN',
    filename: 'msn'
  },
  {
    name: 'AARP',
    filename: 'aarp'
  }
];

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] bg-beige overflow-hidden">
      {/* Hero Illustration */}
      <div className="relative h-[600px] w-full bg-beige">
        <Image
          src="/images/illustrations/main-bg.png"
          alt="Retirement Journey Illustration"
          fill
          priority
          className="object-cover"
          style={{
            objectPosition: 'center'
          }}
        />
      </div>

      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { left: "64.32%", top: "5.20%" },
          { left: "97.01%", top: "28.13%" },
          { left: "29.97%", top: "42.33%" },
          { left: "92.11%", top: "99.93%" },
          { left: "67.15%", top: "58.72%" }
        ].map((position, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-[#4A5568] rounded-full animate-twinkle-${i}`}
            style={{
              left: position.left,
              top: position.top,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col items-center pt-16">
        <div className="text-center max-w-4xl px-4 translate-x-8">
          <h1 className={`${playfair.className} relative`}>
            {/* Hot Air Balloons */}
            <div className="absolute -left-32 top-0 w-24 h-24">
              <Image
                src="/images/hot-air-balloon.png"
                alt="Hot Air Balloon"
                width={96}
                height={96}
                className="w-full h-full object-contain animate-float-slow"
              />
            </div>

            <div className="absolute -right-28 top-16 w-16 h-16">
              <Image
                src="/images/hot-air-balloon.png"
                alt="Hot Air Balloon"
                width={64}
                height={64}
                className="w-full h-full object-contain animate-float-medium"
              />
            </div>

            <div className="absolute left-1/4 -top-8 w-12 h-12">
              <Image
                src="/images/hot-air-balloon.png"
                alt="Hot Air Balloon"
                width={48}
                height={48}
                className="w-full h-full object-contain animate-float-fast"
              />
            </div>

            <div className="absolute right-1/4 top-0 w-10 h-10">
              <Image
                src="/images/hot-air-balloon.png"
                alt="Hot Air Balloon"
                width={40}
                height={40}
                className="w-full h-full object-contain animate-float-slow"
              />
            </div>
            
            <span className="block text-[72px] leading-none font-bold text-[#4A3419] animate-fade-in-up relative">
              A retirement roadmap
            </span>
            <span className="block text-[56px] text-[#2C1810] -mt-3 animate-fade-in-up-delay">
              for everyone.
            </span>
          </h1>
          <p className={`mx-auto mt-4 max-w-2xl text-2xl text-[#3B2317] ${newsreader.className} animate-fade-in-up-delay-2 relative`}>
            Retirement is a journey. Take it with confidence.
          </p>
          <div className="mt-8 animate-fade-in-up-delay-3">
            <Link
              href="/schedule"
              className="group relative inline-flex items-center rounded-md bg-teal px-8 py-3 text-sm font-medium text-white shadow-button hover:bg-teal-dark transition-all duration-200 overflow-hidden"
            >
              {/* Geometric Background Shapes */}
              <div className="absolute inset-0 w-full h-full">
                {/* Large triangle */}
                <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/10 transform rotate-45"></div>
                {/* Medium squares */}
                <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 bg-white/15 transform rotate-45"></div>
                <div className="absolute right-8 top-1 w-3 h-3 bg-white/10 transform rotate-45"></div>
                {/* Circles */}
                <div className="absolute left-6 bottom-1 w-6 h-6 rounded-full bg-white/10"></div>
                <div className="absolute right-6 top-1 w-8 h-8 rounded-full bg-white/5"></div>
                {/* Diagonal lines */}
                <div className="absolute left-1/3 top-0 w-0.5 h-full bg-white/10 transform -rotate-45"></div>
                <div className="absolute right-1/3 top-0 w-0.5 h-full bg-white/10 transform rotate-45"></div>
              </div>
              
              {/* Button Border with Geometric Accent */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 border border-white/20 rounded-md"></div>
                <div className="absolute -right-1 -bottom-1 w-4 h-4 bg-white/20 transform rotate-45 group-hover:scale-110 transition-transform"></div>
              </div>
              
              {/* Button Content */}
              <span className="relative z-10">Schedule a meeting</span>
              <span className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Company Mentions */}
      <div className="bg-beige-light py-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-center font-display text-2xl italic text-primary mb-16">
            People are talking
          </p>
          <div className="relative">
            <div className="flex space-x-24 animate-scroll">
              {[...companyLogos, ...companyLogos].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-none w-48"
                >
                  <Image
                    src={`/images/logos/${company.filename}.png`}
                    alt={company.name}
                    width={180}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 