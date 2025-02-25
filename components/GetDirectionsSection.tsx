'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Indie_Flower } from 'next/font/google';

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
});

// Fixed positions for decorative elements
const decorativeElements = [
  { id: 1, style: { left: '64%', top: '46%', animationDelay: '0s' } },
  { id: 2, style: { left: '13%', top: '43%', animationDelay: '0.5s' } },
  { id: 3, style: { left: '6%', top: '33%', animationDelay: '1s' } },
  { id: 4, style: { left: '26%', top: '83%', animationDelay: '1.5s' } },
  { id: 5, style: { left: '83%', top: '31%', animationDelay: '2s' } }
];

export default function GetDirectionsSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Compass Image */}
        <div className="flex justify-center mb-10">
          <div className="relative w-64 h-48">
            <Image
              src="/images/compass.png"
              alt="Navigation Compass"
              width={320}
              height={320}
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center font-display text-[40px] font-bold text-primary mb-12">
          Get directions on
          <br />
          the road to retirement
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div>
            <p className="text-lg text-primary-light">
              Your journey through retirement is unique. Each part of your financial life is just one of many pathways on your personal retirement roadmap. But that roadmap can get a little complicated. It's ok to stop and ask for directions. Of course, if you ask three people for directions, you'll probably get three different answers. We're here to help you make sense of it all. We recognize that the route to retirement is not a single road. It is a journey to the place where all roads converge. We're here to make sure you reach your destination with confidence.
            </p>
            <div className="relative mt-16">
              <div className="border-t border-gray-200 mt-4"></div>
              <div className={`${indieFlower.className} absolute -top-6 text-[32px] text-[#666666] transform -translate-y-1/2`}>
                The Retirement Smart Hub Family
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/videos/retirement-guide.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="rounded-full bg-white/90 p-3 hover:bg-white transition-all duration-300"
                aria-label="Play video"
              >
                <svg
                  className="h-8 w-8 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
} 