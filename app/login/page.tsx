'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Aldrich, Roboto_Flex, Newsreader, Playfair_Display, Indie_Flower, Montserrat } from 'next/font/google';
import Link from 'next/link';

const aldrich = Aldrich({
  weight: '400',
  subsets: ['latin'],
});

const robotoFlex = Roboto_Flex({
  weight: '300',
  subsets: ['latin'],
});

const newsreaderItalic = Newsreader({
  weight: '400',
  style: 'italic',
  subsets: ['latin'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="hex" width="16" height="14" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path
                d="M8 0l8 4v6l-8 4L0 10V4z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-[#40A69F]"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-20 left-10 w-16 h-16 text-[#40A69F] opacity-10 animate-float-slow" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"/>
        </svg>
        <svg className="absolute top-40 right-20 w-20 h-20 text-[#40A69F] opacity-10 animate-float-medium" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
        </svg>
        <svg className="absolute bottom-20 left-1/4 w-24 h-24 text-[#40A69F] opacity-10 animate-float-fast" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column - Login Form */}
          <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
              {/* Form Header */}
              <div className="text-center mb-8">
                <h1 className={`${playfair.className} text-4xl font-semibold text-gray-900 mb-2`}>
                  Welcome Back
                </h1>
                <p className={`${robotoFlex.className} text-gray-600`}>
                  Sign in to access your retirement planning dashboard
                </p>
              </div>
              
              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className={`${montserrat.className} block text-sm font-medium text-gray-700 mb-1`}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#40A69F] focus:border-[#40A69F] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className={`${montserrat.className} block text-sm font-medium text-gray-700`}>
                      Password
                    </label>
                    <a href="#" className={`${montserrat.className} text-sm text-[#40A69F] hover:text-[#2C7A75]`}>
                      Forgot password?
                    </a>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-[#40A69F] focus:border-[#40A69F] transition-colors"
                    placeholder="••••••••"
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-[#40A69F] focus:ring-[#40A69F] border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className={`${montserrat.className} ml-2 block text-sm text-gray-700`}>
                    Remember me
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-[#40A69F] hover:bg-[#2C7A75] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#40A69F] transition-colors"
                  >
                    <span className={`${montserrat.className} font-medium`}>Sign in</span>
                  </button>
                </div>
              </form>
              
              {/* Divider */}
              <div className="my-6 flex items-center">
                <div className="flex-grow h-px bg-gray-200"></div>
                <span className={`${montserrat.className} px-4 text-sm text-gray-400`}>or continue with</span>
                <div className="flex-grow h-px bg-gray-200"></div>
              </div>
              
              {/* Social Login Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.545,10.239v3.818h5.556c-0.451,2.563-2.549,4.43-5.556,4.43c-3.453,0-6.262-2.809-6.262-6.262s2.809-6.262,6.262-6.262c1.669,0,3.184,0.654,4.31,1.721l2.7-2.7C17.644,3.156,15.251,2,12.545,2C7.021,2,2.543,6.478,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                  </svg>
                </button>
                <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors">
                  <svg className="h-5 w-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                  </svg>
                </button>
                <button className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors">
                  <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>
              </div>
              
              {/* Sign Up Link */}
              <div className="mt-6 text-center">
                <p className={`${montserrat.className} text-sm text-gray-600`}>
                  Don't have an account?{' '}
                  <Link href="/signup" className="font-medium text-[#40A69F] hover:text-[#2C7A75]">
                    Sign up
                  </Link>
                </p>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4">
                <svg className="w-32 h-32 text-[#40A69F] opacity-5" fill="currentColor" viewBox="0 0 200 200">
                  <path d="M0,100 C0,44.77 44.77,0 100,0 C155.23,0 200,44.77 200,100 C200,155.23 155.23,200 100,200 C44.77,200 0,155.23 0,100 Z" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 -mb-4 -ml-4">
                <svg className="w-24 h-24 text-[#40A69F] opacity-5" fill="currentColor" viewBox="0 0 200 200">
                  <path d="M0,100 C0,44.77 44.77,0 100,0 C155.23,0 200,44.77 200,100 C200,155.23 155.23,200 100,200 C44.77,200 0,155.23 0,100 Z" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Right Column - Image and Text */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[500px]">
              <Image
                src="/images/office-meeting.jpg"
                alt="Retirement Planning Meeting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h2 className={`${playfair.className} text-3xl font-semibold mb-4`}>
                  Your Retirement Journey Starts Here
                </h2>
                <p className={`${robotoFlex.className} text-lg max-w-md mb-6`}>
                  Access your personalized retirement roadmap and track your progress toward financial freedom.
                </p>
                <div className={`${indieFlower.className} text-xl text-[#E8F4F1]`}>
                  "The best time to plan for retirement was 20 years ago. The second best time is now."
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-10 right-10 animate-float-slow">
                <Image
                  src="/images/icons/investment.png"
                  alt="Hot Air Balloon"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="absolute top-1/3 left-1/4 animate-float-medium">
                <svg className="w-12 h-12 text-white opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 