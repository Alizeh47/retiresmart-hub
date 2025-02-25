'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Indie_Flower } from 'next/font/google';

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
});

const testimonials = [
  {
    id: 1,
    quote: "I was very skeptical about annuities. Through numerous calls and reviewing all the different options, Five Pathways settled on a policy that matched all my long term goals while providing me with the security I needed to continue my retirement and live comfortably until I leave this worth. Thank you!!!",
    author: "Shannon",
    rating: 5
  },
  {
    id: 2,
    quote: "Five Pathways was great to work with. They listened to my suggestions and concerns, and were very helpful in explaining stuff, and we ended up with a great plan for them.",
    author: "Bob",
    rating: 5
  },
  {
    id: 3,
    quote: "Working with RetireSmart Hub gave us the confidence we needed to make important retirement decisions. Their expertise and attention to detail are outstanding.",
    author: "Patricia",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previous = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getPreviousIndex = () => {
    return currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
  };

  return (
    <section className="bg-beige py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl italic text-primary mb-16">
          Journeys from the Past
        </h2>

        <div className="relative">
          {/* Previous Card (Partial) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[calc(100%-80px)] w-[400px]">
            <div className="relative overflow-hidden rounded-lg bg-white px-8 py-10 opacity-50 transform -rotate-6"
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E"), 
                   url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23F5F5F5' fill-opacity='0.1'/%3E%3C/svg%3E")`,
                   boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                   backgroundBlendMode: 'multiply'
                 }}>
              <p className="text-lg text-primary font-serif leading-relaxed line-clamp-3">
                {testimonials[getPreviousIndex()].quote}
              </p>
            </div>
          </div>

          {/* Main Card */}
          <div className="relative mx-auto max-w-3xl">
            {/* Navigation Buttons */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2">
              <button
                onClick={previous}
                className="group p-2"
                aria-label="Previous testimonial"
              >
                <svg width="60" height="24" className="transform rotate-180">
                  <path
                    d="M2 12c0 0 20-2 40 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="transition-colors group-hover:stroke-teal"
                    style={{ 
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      strokeDasharray: '4,4'
                    }}
                  />
                  <path
                    d="M38 4c0 0 4 4 4 8s-4 8-4 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="transition-colors group-hover:stroke-teal"
                    style={{ 
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      strokeDasharray: '4,4'
                    }}
                  />
                </svg>
              </button>
            </div>

            {/* Main Testimonial Card */}
            <div className="relative overflow-hidden rounded-lg bg-white px-8 py-10 transform transition-transform duration-500"
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E"),
                   linear-gradient(45deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.9) 100%)`,
                   boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                   backgroundBlendMode: 'overlay'
                 }}>
              <div className="relative">
                {/* Quote mark */}
                <svg
                  className="absolute -top-6 -left-4 h-16 w-16 text-teal opacity-15"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                <div className="relative">
                  <p className="mt-8 text-lg text-primary font-serif leading-relaxed">
                    {testimonials[currentIndex].quote}
                  </p>
                  <div className="mt-6">
                    <p className={`${indieFlower.className} text-2xl text-primary`}>
                      {testimonials[currentIndex].author}
                    </p>
                    
                    {/* BBB Rating */}
                    <div className="mt-4 flex items-center space-x-2">
                      <div className="flex h-12 w-12">
                        <Image
                          src="/images/logos/go-banking-rates.png"
                          alt="BBB Logo"
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="h-5 w-5 text-teal"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-2 text-sm font-medium text-primary">
                          5-Star Verified Review
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Button */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2">
              <button
                onClick={next}
                className="group p-2"
                aria-label="Next testimonial"
              >
                <svg width="60" height="24">
                  <path
                    d="M2 12c0 0 20-2 40 0"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="transition-colors group-hover:stroke-teal"
                    style={{ 
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      strokeDasharray: '4,4'
                    }}
                  />
                  <path
                    d="M38 4c0 0 4 4 4 8s-4 8-4 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="transition-colors group-hover:stroke-teal"
                    style={{ 
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                      strokeDasharray: '4,4'
                    }}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Next Card (Partial) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(100%-80px)] w-[400px]">
            <div className="relative overflow-hidden rounded-lg bg-white px-8 py-10 opacity-50 transform rotate-6"
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E"), 
                   url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23F5F5F5' fill-opacity='0.1'/%3E%3C/svg%3E")`,
                   boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                   backgroundBlendMode: 'multiply'
                 }}>
              <p className="text-lg text-primary font-serif leading-relaxed line-clamp-3">
                {testimonials[getNextIndex()].quote}
              </p>
            </div>
          </div>
        </div>

        {/* More Journeys Link */}
        <div className="mt-12 text-center">
          <Link
            href="/testimonials"
            className="inline-flex items-center text-primary hover:text-teal font-display text-lg"
          >
            More journeys
            <svg width="40" height="24" className="ml-2">
              <path
                d="M2 12c0 0 20-2 30 0"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                style={{ 
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '4,4'
                }}
              />
              <path
                d="M28 4c0 0 4 4 4 8s-4 8-4 8"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                style={{ 
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeDasharray: '4,4'
                }}
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 