'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { name: 'Startseite', href: '#top' },
  { name: 'Unsere Lösung', href: '#solutions' },
  { name: 'Warum wir?', href: '#why-us' },
  { name: 'Referenzen', href: '#testimonials' },
  { name: 'Unser Prozess', href: '#timeline' },
  // { name: 'Blog', href: '/blog' },
  // { name: 'Kontakt', href: '/kontakt' },
];

export const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCtaClick = () => {
    window.open('https://lunacal.ai/team/nextmove-digital/meeting', '_blank');
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Close mobile menu if open
    setMenuState(false);
  };

  return (
    <header className="relative z-[100]">
      
      <nav className="fixed top-0 left-0 right-0 w-full z-[100] px-4 sm:px-6 lg:px-8">
        <div className={cn(
          'mx-auto mt-3 w-full transition-all duration-300',
          isScrolled 
            ? 'max-w-5xl bg-black/70 backdrop-blur-md rounded-2xl px-4 py-2 glass-effect' 
            : 'max-w-6xl bg-transparent px-0 py-3'
        )}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 ml-4 lg:ml-8">
              <Link href="/" className="flex items-center">
                <Image
                  src="/Logonextmove.webp"
                  alt="NextMove Logo"
                  width={1000}
                  height={400}
                  className={cn(
                    'w-auto transition-all duration-300',
                    isScrolled 
                      ? 'h-12 sm:h-14 md:h-16' 
                      : 'h-16 sm:h-18 md:h-20 lg:h-22 xl:h-24'
                  )}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 relative group cursor-pointer"
                >
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff8040] to-[#ff5500] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex">
              <button 
                onClick={handleCtaClick}
                className={cn(
                  'relative overflow-hidden transition-all duration-300 font-medium uppercase tracking-wide btn-orange-glow',
                  isScrolled 
                    ? 'px-3 py-2 text-xs rounded-lg' 
                    : 'px-6 py-3 text-sm rounded-lg'
                )}
                style={{
                  background: 'rgba(255, 85, 0, 0.1)',
                  color: 'white',
                  border: '1px solid rgba(255, 85, 0, 0.5)',
                  boxShadow: '0 0 15px rgba(255, 85, 0, 0.3)',
                }}
              >
                <div 
                  className="absolute inset-0 -z-10"
                  style={{
                    background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.6) 0%, rgba(255, 85, 0, 0.3) 40%, transparent 70%)',
                    filter: 'blur(10px)',
                    transform: 'scale(1.1)'
                  }}
                />
                
                <span>
                  {isScrolled ? 'Beratung' : 'Kostenlose Beratung'}
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuState(!menuState)}
              className="lg:hidden p-2 text-white hover:text-orange-400 transition-colors"
              aria-label={menuState ? 'Menü schließen' : 'Menü öffnen'}
            >
              {menuState ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuState && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-lg border border-white/10 rounded-2xl p-6 mx-4 z-[110]">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 relative group cursor-pointer"
                  >
                    <span className="text-base font-medium">{item.name}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff8040] to-[#ff5500] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
                
                {/* Mobile CTA Button */}
                <button 
                  onClick={() => {
                    handleCtaClick();
                    setMenuState(false);
                  }}
                  className="relative overflow-hidden px-5 py-2.5 text-sm font-medium uppercase tracking-wide rounded-lg mt-4 transition-all duration-300 btn-orange-glow"
                  style={{
                    background: 'rgba(255, 85, 0, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 85, 0, 0.5)',
                    boxShadow: '0 0 15px rgba(255, 85, 0, 0.3)',
                  }}
                >
                  <div 
                    className="absolute inset-0 -z-10"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.6) 0%, rgba(255, 85, 0, 0.3) 40%, transparent 70%)',
                      filter: 'blur(10px)',
                      transform: 'scale(1.1)'
                    }}
                  />
                  
                  <span>Kostenlose Beratung</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;