"use client";
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <Image src="/logo.png" alt="HAConcepts Logo" width={150} height={50} />
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
            <p>© 2024 HAConcepts. Alle Rechte vorbehalten.</p>
          </div>
          <div className="w-full md:w-1/3 text-right">
            <Button variant="link">Impressum</Button>
            <Button variant="link">Datenschutz</Button>
            <Button variant="link">AGB</Button>
          </div>
        </div>
      </div>
    </footer>
  );
}