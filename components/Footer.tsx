'use client';

import React from 'react';
import Link from 'next/link';

const navigation = {
  services: [
    { name: 'Income Planning', href: '/income-planning' },
    { name: 'Tax Planning', href: '/tax-planning' },
    { name: 'Investment Planning', href: '/investment-planning' },
    { name: 'Medicare/LTC', href: '/medicare-ltc' },
    { name: 'Estate Planning', href: '/estate-planning' },
  ],
  products: [
    { name: 'My Guide', href: '/guide' },
    { name: 'Log in', href: '/login' },
    { name: 'Sign up', href: '/signup' },
    { name: 'Upload Files Securely', href: '/upload-files' },
    { name: 'Claw Machine Game', href: '/claw-machine' },
    { name: 'Virtual Office', href: '/virtual-office' },
  ],
  education: [
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Videos', href: '/videos' },
    { name: 'Workshops', href: '/workshops' },
    { name: 'Retirement Quiz', href: '/retirement-quiz' },
  ],
  about: [
    { name: 'Our Story', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Schedule', href: '/schedule' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-beige" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="font-display text-2xl font-bold text-primary">
              RETIRESMART HUB
            </Link>
            <div className="space-y-4">
              <p className="text-sm text-primary-light">
                Email: service@retiresmarthub.com
              </p>
              <p className="text-sm text-primary-light">
                Phone: (480) 933-6300
              </p>
              <div className="flex space-x-6">
                <Link
                  href="https://www.linkedin.com"
                  className="text-primary hover:text-teal"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com"
                  className="text-primary hover:text-teal"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-primary">Services</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-primary-light hover:text-teal"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-primary">Products</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.products.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-primary-light hover:text-teal"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-primary">Education</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.education.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-primary-light hover:text-teal"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-primary">About</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm text-primary-light hover:text-teal"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-beige-dark pt-8">
          <p className="text-sm text-primary-light">
            &copy; 2024 RetireSmart Hub. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 text-sm text-primary-light">
            <Link href="/terms" className="hover:text-teal">
              Terms of Use
            </Link>
            <Link href="/privacy" className="hover:text-teal">
              Privacy Policy
            </Link>
            <Link href="/california" className="hover:text-teal">
              For California Residents
            </Link>
          </div>
          <div className="mt-4 text-sm text-primary-light">
            Design: Griflan
          </div>
        </div>
      </div>
    </footer>
  );
} 