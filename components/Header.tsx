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
          <NavigationMenu className="flex-grow flex justify-center">
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
          <div className="w-[150px]"></div>
        </div>
      </header>
    </HeroHighlight>
  );
}
