'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Lun: any;
    Cal: any;
  }
}

const CalendlyWidget = () => {
  useEffect(() => {
    // Only run on client side to prevent hydration errors
    if (typeof window !== 'undefined') {
      // Check if already loaded
      if (window.Lun) {
        return;
      }

      // Load the script directly
      const script = document.createElement('script');
      script.src = 'https://app.lunacal.ai/embed/embed.js';
      script.async = true;
      script.onload = () => {
        // Wait a bit for the script to initialize
        setTimeout(() => {
          if (window.Lun) {
            const parts = ["k", "n", "i", "L", "l", "a", "c"].reverse();
            const key = parts.map(ch => String.fromCharCode(ch.charCodeAt(0) + 1)).map(ch => String.fromCharCode(ch.charCodeAt(0) - 1)).join("");
            const value = "siar-alizadah-w2s/meeting";
            const inlineOpts: any = { elementOrSelector: "#my-lunacal-inline", layout: "" };
            inlineOpts[key] = value;

            window.Lun("init", { origin: "https://app.lunacal.ai" });
            window.Lun("inline", inlineOpts);
            window.Lun("ui", {
              "theme": "dark",
              "styles": {
                "branding": { "brandColor": "#ff5500" },
                "colors": {
                  "primary": "#ff5500",
                  "background": "#0f172a",
                  "foreground": "#ffffff",
                  "card": "#1e293b",
                  "cardForeground": "#ffffff"
                }
              },
              "hideEventTypeDetails": false,
              "layout": "",
              "cssVarsPerTheme": {
                "dark": {
                  "embed-primary": "#ff5500",
                  "embed-primary-light": "#ff8040",
                  "embed-primary-dark": "#cc4400",
                  "embed-bg": "#0f172a",
                  "embed-text": "#ffffff"
                }
              }
            });
          }
        }, 100);
      };
      document.head.appendChild(script);

      return () => {
        // Cleanup
        const scripts = document.querySelectorAll('script[src*="lunacal"]');
        scripts.forEach(script => script.remove());
        if (window.Lun) {
          delete window.Lun;
        }
        if (window.Cal) {
          delete window.Cal;
        }
      };
    }
  }, []);

  return (
    <section id="termine" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl">
            Termin <span className="relative">
              <span className="relative z-10">vereinbaren</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
            </span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-400">
            Wählen Sie einen passenden Termin für ein unverbindliches Beratungsgespräch
          </p>
        </div>
        
        {/* LunaCal Widget */}
        <div className="rounded-lg overflow-hidden mx-auto max-w-4xl">
          <div 
            style={{ width: '100%', height: '600px', overflow: 'scroll' }} 
            id="my-lunacal-inline"
          >
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendlyWidget; 