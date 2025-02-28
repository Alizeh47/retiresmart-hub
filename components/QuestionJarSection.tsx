'use client';

import React from 'react';
import Image from 'next/image';
import { Playfair_Display, Newsreader, Roboto_Flex } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: '300',
  style: ['normal', 'italic'],
});

const roboto = Roboto_Flex({
  subsets: ['latin'],
  weight: '400',
});

export default function QuestionJarSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Form Section */}
          <div className="space-y-6">
            <div className="text-center md:text-left">
              <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-gray-900 mb-2`}>
                Have any questions?
              </h2>
              <p className={`${newsreader.className} text-xl text-gray-600 italic`}>
                You&apos;ve got questions, we&apos;ve got answers!
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="fullName" className={`${roboto.className} block text-sm font-medium text-gray-700 mb-1`}>
                  Full name*
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className={`${roboto.className} block text-sm font-medium text-gray-700 mb-1`}>
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className={`${roboto.className} block text-sm font-medium text-gray-700 mb-1`}>
                  Phone**
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="questions" className={`${roboto.className} block text-sm font-medium text-gray-700 mb-1`}>
                  Questions
                </label>
                <select
                  id="questions"
                  name="questions"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="">Select</option>
                  <option value="retirement">Retirement Planning</option>
                  <option value="investment">Investment Strategy</option>
                  <option value="taxes">Tax Planning</option>
                  <option value="estate">Estate Planning</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={`${roboto.className} block text-sm font-medium text-gray-700 mb-1`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="bg-[#40CFA4] text-white px-8 py-3 rounded-full inline-flex items-center hover:bg-[#35b892] transition-colors"
              >
                Submit
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>

            <div className="text-xs text-gray-500 space-y-1">
              <p>* Required field</p>
              <p>** By providing your mobile phone number you opt-in to receive periodic SMS or MMS messages containing but not limited to scheduling, updates and important information. You may unsubscribe at any point by texting the word &apos;stop&apos;.</p>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="relative h-[600px] md:h-[600px] -mt-24">
            <div className="absolute inset-0">
              <Image
                src="/images/question-jar.png"
                alt="Question Jar Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          {/* Decorative Lines */}
          <path
            d="M100,50 C200,100 300,50 400,100"
            stroke="#E8F4F1"
            strokeWidth="2"
            fill="none"
            className="path-animation delay-1"
          />
          <path
            d="M800,700 C900,650 1000,700 1100,650"
            stroke="#E8F4F1"
            strokeWidth="2"
            fill="none"
            className="path-animation delay-2"
          />

          {/* Decorative Dots */}
          <circle 
            cx="392" 
            cy="89" 
            r="4" 
            fill="#40A69F"
            className="animate-pulse-slow"
          />
          <circle 
            cx="778" 
            cy="292" 
            r="4" 
            fill="#40A69F"
            className="animate-pulse-medium"
          />
          <circle 
            cx="79" 
            cy="612" 
            r="4" 
            fill="#40A69F"
            className="animate-pulse-slow"
          />
        </svg>
      </div>
    </section>
  );
} 