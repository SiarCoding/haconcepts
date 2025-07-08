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
    { title: 'Startseite', href: '/' },
    { title: 'Unsere Lösung', href: '#solutions' },
    { title: 'Warum wir?', href: '#why-us' },
    { title: 'Kundenstimmen', href: '#testimonials' },
  ];

  const handleCtaClick = () => {
    // Öffne Calendly-Link in einem neuen Tab
    window.open('https://calendly.com/ali-nextmove-digital/30min?preview_source=et_card&month=2025-03', '_blank');
  };

  return (
    <header className="py-4 bg-black sm:py-6 relative z-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - noch größere Größe */}
          <div className="shrink-0">
            <Link href="/" className="flex">
              <Image
                src="/CONSULTING.svg"
                alt="NextMove Logo"
                width={1000}
                height={400}
                className="w-auto h-24 sm:h-28 md:h-36 lg:h-44"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden relative z-50">
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

          {/* Desktop Navigation mit Hover-Unterstrich-Effekt */}
          <nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start relative z-50">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white relative group px-2"
              >
                <span>{item.title}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff8040] to-[#ff5500] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Neuer CTA Button mit Book Now/Hero-Stil */}
          <div className="relative hidden md:inline-flex z-50">
            <button 
              onClick={handleCtaClick}
              style={{
                background: 'rgba(255, 85, 0, 0.1)',
                color: 'white',
                border: '1px solid rgba(255, 85, 0, 0.5)',
                padding: '12px 32px',
                borderRadius: '50px',
                fontWeight: '500',
                fontSize: '14px',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 20px rgba(255, 85, 0, 0.4)',
                cursor: 'pointer'
              }}
              className="relative"
            >
              <div 
                style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.9) 0%, rgba(255, 85, 0, 0.5) 40%, transparent 70%)',
                  filter: 'blur(20px)',
                  opacity: '0.7',
                  zIndex: '-1',
                  transform: 'scale(1.2)'
                }}
              ></div>
              
              <div
                style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  transform: 'translateX(-100%)',
                  animation: 'shine 3s infinite',
                  zIndex: '1'
                }}
              ></div>
              
                Lass dich kostenlos beraten!
            </button>
            
            <style jsx>{`
              @keyframes shine {
                0% {
                  transform: translateX(-100%);
                }
                20%, 100% {
                  transform: translateX(100%);
                }
              }
              
              button:hover {
                background: rgba(255, 85, 0, 0.25) !important;
                border-color: rgba(255, 85, 0, 0.8) !important;
                box-shadow: 0 0 30px rgba(255, 85, 0, 0.6) !important;
              }
              
              button:hover div:first-of-type {
                opacity: 0.9 !important;
                transform: scale(1.3) !important;
              }
            `}</style>
          </div>
        </div>

        {/* Mobile Menu mit Hover-Unterstrich-Effekt */}
        {expanded && (
          <nav className="md:hidden relative z-40">
            <div className="flex flex-col pt-8 pb-4 space-y-6">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white relative group px-2"
                  onClick={() => setExpanded(false)}
                >
                  <span>{item.title}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff8040] to-[#ff5500] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              {/* Mobile CTA Button mit Book Now/Hero-Stil */}
              <button 
                onClick={handleCtaClick}
                style={{
                  background: 'rgba(255, 85, 0, 0.1)',
                  color: 'white',
                  border: '1px solid rgba(255, 85, 0, 0.5)',
                  padding: '12px 32px',
                  borderRadius: '50px',
                  fontWeight: '500',
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 20px rgba(255, 85, 0, 0.4)',
                  cursor: 'pointer',
                  marginTop: '20px'
                }}
                className="relative"
              >
                <div 
                  style={{
                    position: 'absolute',
                    inset: '0',
                    background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.9) 0%, rgba(255, 85, 0, 0.5) 40%, transparent 70%)',
                    filter: 'blur(20px)',
                    opacity: '0.7',
                    zIndex: '-1',
                    transform: 'scale(1.2)'
                  }}
                ></div>
                
                <div
                  style={{
                    position: 'absolute',
                    inset: '0',
                    background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent)',
                    transform: 'translateX(-100%)',
                    animation: 'shine 3s infinite',
                    zIndex: '1'
                  }}
                ></div>
                
                  Lass dich kostenlos beraten!
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;