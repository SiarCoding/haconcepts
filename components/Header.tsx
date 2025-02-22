'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { HeroHighlight } from '@/components/ui/hero-highlights';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'Referenzen', href: '#referenzen' },
    { title: 'Warum wir ?', href: '#warum-wir' },
    { title: 'Karriere', href: '#karriere' },
    { title: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <header className="py-4 bg-black sm:py-6">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - extreme Größe */}
          <div className="shrink-0">
            <Link href="/" className="flex">
              <Image
                src="/CONSULTING.svg"
                alt="NextMove Logo"
                width={1000}
                height={400}
                className="w-auto h-20 sm:h-24 md:h-32 lg:h-40"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {!expanded ? (
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* CTA Button mit originalem Design */}
          <div className="relative hidden md:inline-flex">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff8040_0%,#ff5500_50%,#ff8040_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 ease-in-out hover:bg-[#cc4400]">
                Lass dich kostenlos beraten!
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {expanded && (
          <nav className="md:hidden">
            <div className="flex flex-col pt-8 pb-4 space-y-6">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                  onClick={() => setExpanded(false)}
                >
                  {item.title}
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff8040_0%,#ff5500_50%,#ff8040_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl transition-all duration-300 ease-in-out hover:bg-[#cc4400]">
                  Lass dich kostenlos beraten!
                </span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;