'use client';

import * as React from 'react';
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

const menuItems = [
  { title: 'Home', href: '/' },
  { title: 'Referenzen', href: '#referenzen' },
  { title: 'Warum wir ?', href: '#warum-wir' },
  { title: 'Karriere', href: '#karriere' },
  { title: 'Kontakt', href: '#kontakt' },
];

export default function Header() {
  return (
    <HeroHighlight containerClassName="fixed top-0 left-0 right-0 z-50 h-auto bg-black">
      <header className="w-full">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="w-[150px]">
            <Image
              src="/logo.png"
              alt="HAConcepts Logo"
              width={150}
              height={50}
            />
          </div>
          <NavigationMenu className="flex-grow flex justify-center mr-8">
            <NavigationMenuList>
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'bg-transparent hover:bg-gradient-to-r from-purple-500 to-blue-500 hover:text-white transition-all duration-300'
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex-shrink-0">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-xs font-medium text-white backdrop-blur-3xl transition-all duration-300 ease-in-out hover:bg-[linear-gradient(90deg,#8B5CF6,#3B82F6)]">
                Lass dich kostenlos beraten!
              </span>
            </button>
          </div>
        </div>
      </header>
    </HeroHighlight>
  );
}