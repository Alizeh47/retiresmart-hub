'use client';

import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'My Guide', href: '/guide' },
  { name: 'Enlighten', href: '/enlighten' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Education', href: '/education' },
  { name: 'Virtual Office', href: '/virtual-office' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHelpTooltipVisible, setIsHelpTooltipVisible] = useState(false);

  return (
    <header className="relative bg-beige shadow-soft">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/" className="font-display text-2xl font-bold text-primary">
              RETIRESMART HUB
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-primary hover:text-primary-light transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-8 flex items-center space-x-2">
              <Link
                href="/schedule"
                className="inline-flex items-center rounded-md bg-teal px-4 py-2 text-sm font-medium text-white shadow-button hover:bg-teal-dark transition-colors"
              >
                Schedule a Meeting
                <span className="ml-2">→</span>
              </Link>
              <button
                className="rounded-full p-1 text-primary hover:bg-beige-dark hover:text-primary-light transition-colors relative"
                onMouseEnter={() => setIsHelpTooltipVisible(true)}
                onMouseLeave={() => setIsHelpTooltipVisible(false)}
                aria-label="Help"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M12 21a9 9 0 100-18 9 9 0 000 18z"
                  />
                </svg>
                {isHelpTooltipVisible && (
                  <div className="absolute right-0 top-full mt-2 w-48 rounded-md bg-white p-2 text-xs text-primary shadow-soft">
                    Schedule a consultation with our retirement planning experts to discuss your financial future.
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-beige-dark hover:text-primary-light"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-beige-dark hover:text-primary-light"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 flex items-center space-x-2 px-3">
                <Link
                  href="/schedule"
                  className="block w-full rounded-md bg-teal px-4 py-2 text-center text-base font-medium text-white shadow-button hover:bg-teal-dark"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Schedule a Meeting
                </Link>
                <button
                  className="rounded-full p-2 text-primary hover:bg-beige-dark hover:text-primary-light"
                  aria-label="Help"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M12 21a9 9 0 100-18 9 9 0 000 18z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 