"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Anchor } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo und Beschreibung */}
          <div className="col-span-1 md:col-span-1">
            <Image src="/CONSULTING.svg" alt="NextMove Consulting Logo" width={180} height={60} className="mb-6" />
            <p className="text-gray-400 mb-6">
              Spezialisiert auf Performance Marketing für Finanzberater und Immobilien-Profis.
            </p>
            <div className="flex space-x-4">
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-[#ff5500] transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-[#ff5500] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://facebook.com" className="text-gray-400 hover:text-[#ff5500] transition-colors">
                <Facebook size={20} />
              </Link>
            </div>
          </div>

          {/* Dienstleistungen */}
          <div>
            <h3 className="text-white font-bold mb-6">Dienstleistungen</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#ff5500] transition-colors">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#ff5500] transition-colors">
                  Lead-Generierung
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#ff5500] transition-colors">
                  Kampagnen-Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#ff5500] transition-colors">
                  Conversion-Optimierung
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-white font-bold mb-6">Rechtliches</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/impressum" className="text-gray-400 hover:text-[#ff5500] transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-400 hover:text-[#ff5500] transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#ff5500] transition-colors">
                  AGB
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#ff5500] transition-colors">
                  Cookie-Richtlinie
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-white font-bold mb-6">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-[#ff5500] flex-shrink-0 mt-0.5 mr-3" />
                <span className="text-gray-400">
                  Kedenburger Straße 44<br />
                  22043 Hamburg
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-[#ff5500] flex-shrink-0 mr-3" />
                <Link href="tel:+4930123456789" className="text-gray-400 hover:text-[#ff5500] transition-colors">
                  +49 30 123 456 789
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-[#ff5500] flex-shrink-0 mr-3" />
                <Link href="mailto:info@nextmove-consulting.de" className="text-gray-400 hover:text-[#ff5500] transition-colors">
                  info@nextmove-consulting.de
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col items-center">
          <p className="text-gray-500 text-sm mb-3">
            © 2025 NextMove Consulting. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center text-gray-500 text-sm">
            <span>Designed & Developed in Hamburg</span>
            <Anchor className="w-4 h-4 ml-2 text-[#ff5500]" />
          </div>
        </div>
      </div>
    </footer>
  );
}