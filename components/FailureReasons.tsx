'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Info-Icon Komponente mit Tooltip
const InfoIcon = ({ tooltip }: { tooltip: string }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div className="relative inline-block ml-2">
      <div 
        className="w-5 h-5 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 text-xs font-semibold cursor-help hover:bg-orange-500/30 transition-colors duration-200"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        i
      </div>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg border border-gray-700 whitespace-nowrap z-10">
          {tooltip}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
};

// Kupfer-Effekt Komponente für den Hintergrund
const CopperBlurEffect = () => (
  <div className="absolute inset-0">
    <svg 
      className="blur-3xl filter opacity-40" 
      style={{ filter: 'blur(100px)' }} 
      width="100%" 
      height="100%" 
      viewBox="0 0 444 536" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M374.558 127.891C290.893 33.7273 152.005 71.9567 95.2954 136.742C38.5854 201.527 -24.5696 384.971 59.0954 479.135C142.76 573.299 359.895 442.346 416.605 377.561C473.315 312.776 458.223 222.055 374.558 127.891Z" 
        fill="url(#paint0_linear)" 
      />
      <defs>
        <linearGradient 
          id="paint0_linear" 
          x1="404.5" 
          y1="100" 
          x2="44.5" 
          y2="436" 
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ff8040" stopOpacity="0.3" />
          <stop offset="1" stopColor="#ff5500" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

const MarketingROICalculator = () => {
  // Eingabewerte (IST-Zustand des Beraters) - NEUE, REALISTISCHE WERTE
  const [leadsProMonat, setLeadsProMonat] = useState(15);
  const [kostenProLead, setKostenProLead] = useState(180);
  const [abschlussquote, setAbschlussquote] = useState(2.5);
  const [umsatzProAbschluss, setUmsatzProAbschluss] = useState(7500);
  const [stundenProWoche, setStundenProWoche] = useState(20);

  // Feste Werte und Verbesserungsannahmen
  const neueLeadKosten = 49; // Ziel-Lead-Kosten
  const stundensatz = 80; // Geschätzter Stundensatz des Beraters
  const agenturKosten = 1999; // Monatliche Agenturkosten
  const abschlussquoteSteigerung = 1.75; // 75% Steigerung der Abschlussquote
  const zeitersparnisProz = 0.75; // 75% Zeitersparnis

  // Berechnete Werte
  const [istZustand, setIstZustand] = useState({
    monatlicheWerbekosten: 0,
    monatlicheZeitkosten: 0,
    gesamtkosten: 0,
    monatlicheUmsatz: 0,
    gewinn: 0
  });

  const [sollZustand, setSollZustand] = useState({
    neueAnzahlLeads: 0,
    neueAbschlussquote: 0,
    neuerUmsatz: 0,
    gesparteStunden: 0,
    wertGesparteZeit: 0,
    neuerGewinn: 0,
    umsatzDifferenz: 0,
    gewinnDifferenz: 0,
    gewinnSteigerungProz: 0
  });

  const [roiDaten, setRoiDaten] = useState({
    gesamterReturn: 0,
    nettogewinn: 0,
    roi: 0,
    faktor: 0
  });

  // Loading State für Berechnungen
  const [isCalculating, setIsCalculating] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);

  // Refs für Animation
  const headingRef = useRef(null);
  const calculatorRef = useRef(null);
  const resultsRef = useRef(null);
  const ctaRef = useRef(null);

  // CTA Click Handler für Calendly
  const handleCtaClick = () => {
    window.open('https://calendly.com/ali-nextmove-digital/30min?preview_source=et_card&month=2025-03', '_blank');
  };

  // Input Handler Funktionen
  const handleLeadsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLeadsProMonat(value === '' ? 0 : parseInt(value) || 0);
  };

  const handleKostenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKostenProLead(value === '' ? 0 : parseFloat(value) || 0);
  };

  const handleAbschlussquoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAbschlussquote(value === '' ? 0 : parseFloat(value) || 0);
  };

  const handleUmsatzChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUmsatzProAbschluss(value === '' ? 0 : parseFloat(value) || 0);
  };

  const handleStundenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStundenProWoche(value === '' ? 0 : parseInt(value) || 0);
  };

  const handleBlur = (setter: Function, defaultValue = 0) => {
    return (e: React.FocusEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value === '' || isNaN(parseFloat(value))) {
        setter(defaultValue);
      }
    };
  };

  // Berechnungsfunktion
  const calculateResults = async () => {
    setIsCalculating(true);
    setShowResults(false);
    setHasCalculated(true);
    
    // Loading-Simulation - kürzer für bessere UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // IST-Zustand berechnen
    const monatlicheWerbekosten = leadsProMonat * kostenProLead;
    const monatlicheZeitkosten = (stundenProWoche * 4.33) * stundensatz;
    const gesamtkosten = monatlicheWerbekosten + monatlicheZeitkosten;
    const monatlicheUmsatz = leadsProMonat * (abschlussquote / 100) * umsatzProAbschluss;
    const gewinn = monatlicheUmsatz - gesamtkosten;

    setIstZustand({
      monatlicheWerbekosten,
      monatlicheZeitkosten,
      gesamtkosten,
      monatlicheUmsatz,
      gewinn
    });
    
    // SOLL-Zustand berechnen (Standard-Fall)
    // 1. Neue Anzahl von Leads basierend auf gleichem Budget aber niedrigeren Kosten pro Lead
    let neueAnzahlLeads = Math.round(monatlicheWerbekosten / neueLeadKosten);
    
    // 2. Verbesserte Abschlussquote durch qualifiziertere Leads (um 75% besser)
    let neueAbschlussquote = Math.min(abschlussquote * 1.75, 20); // Max 20%
    
    // 3. Neuer Umsatz durch mehr und bessere Leads
    let neuerUmsatz = neueAnzahlLeads * (neueAbschlussquote / 100) * umsatzProAbschluss;
    
    // 4. Gesparte Zeit (75% weniger Zeitaufwand)
    const gesparteStunden = stundenProWoche * 0.75 * 4.33; // monatlich
    const wertGesparteZeit = gesparteStunden * stundensatz;
    
    // Neue Kosten berechnen (weniger Zeit, aber Agenturkosten)
    const verbleibendeZeitkosten = monatlicheZeitkosten * 0.25; // 75% weniger
    const neueGesamtkosten = monatlicheWerbekosten + verbleibendeZeitkosten + agenturKosten; 
    let neuerGewinn = neuerUmsatz - neueGesamtkosten + wertGesparteZeit;
    
    let umsatzDifferenz = neuerUmsatz - monatlicheUmsatz;
    let gewinnDifferenz = neuerGewinn - gewinn;
    let gewinnSteigerungProz = gewinn > 0 ? (gewinnDifferenz / gewinn) * 100 : 0;
    
    // ROI-Daten initialisieren
    let gesamterReturn, nettogewinn, roi, faktor;
    
    // HIER KOMMT DIE NEUE SICHERHEITS-PRÜFUNG
    // "Superstar-Fall": Wenn der neue Gewinn schlechter als der aktuelle Gewinn ist
    if (neuerGewinn < gewinn) {
      console.log("Superstar-Fall erkannt! Passe Berechnung an...");
      
      // 1. Umsatz und Leads bleiben gleich - das bestehende System ist bereits sehr gut
      neuerUmsatz = monatlicheUmsatz;
      neueAnzahlLeads = leadsProMonat;
      neueAbschlussquote = abschlussquote;
      
      // 2. Der Hauptgewinn kommt jetzt aus der gesparten Zeit
      neuerGewinn = monatlicheUmsatz - monatlicheWerbekosten - verbleibendeZeitkosten - agenturKosten;
      
      // 3. Die ROI-Berechnung basiert nur auf der Zeitersparnis
      gesamterReturn = wertGesparteZeit;
      nettogewinn = gesamterReturn - agenturKosten;
      roi = (nettogewinn / agenturKosten) * 100;
      faktor = gesamterReturn / agenturKosten;
      
      // Neue Differenzwerte berechnen
      umsatzDifferenz = 0; // Umsatz bleibt gleich
      gewinnDifferenz = neuerGewinn - gewinn;
      gewinnSteigerungProz = gewinn > 0 ? (gewinnDifferenz / gewinn) * 100 : 0;
    } else {
      // Normaler Fall - Standard-Berechnungen bleiben bestehen
      gesamterReturn = umsatzDifferenz + wertGesparteZeit;
      nettogewinn = gesamterReturn - agenturKosten;
      roi = (nettogewinn / agenturKosten) * 100;
      faktor = gesamterReturn / agenturKosten;
    }

    // Ergebnisse setzen
    setSollZustand({
      neueAnzahlLeads,
      neueAbschlussquote,
      neuerUmsatz,
      gesparteStunden,
      wertGesparteZeit,
      neuerGewinn,
      umsatzDifferenz,
      gewinnDifferenz,
      gewinnSteigerungProz
    });

    // ROI-Daten setzen
    setRoiDaten({
      gesamterReturn,
      nettogewinn,
      roi,
      faktor
    });
    
    setIsCalculating(false);
    setShowResults(true);
  };

  // Intersection Observer für Animationen - WIRD ENTFERNT für bessere Performance und um Redundanz mit Framer Motion zu vermeiden.
  
  // Formatiert Euro Währungswerte
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // CSS für Shine-Animation
  const shineAnimation = `
    @keyframes shine {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `;

  return (
    <section className="relative overflow-hidden min-h-screen py-20" style={{
      backgroundImage: 'url(/buerowandsbek.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Dunkles Overlay */}
      <div className="absolute inset-0 bg-black/75 z-10"></div>
      
      {/* Entferne CopperBlurEffect, da wir jetzt ein Hintergrundbild haben */}
      
      {/* Additional floating blur orbs for glassmorphism effect */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-20">
        <motion.div 
          ref={headingRef}
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-white mb-6">
            Berechnen Sie Ihren Marketing-ROI und Ihr Wachstumspotenzial
          </h1>
          
          <p className="text-base text-white leading-relaxed max-w-3xl mx-auto">
            Erfahren Sie in wenigen Sekunden, wie viel Geld und Zeit Sie durch ineffizientes Marketing verlieren und welches Umsatzpotenzial Sie durch eine Zusammenarbeit mit uns heben können.
          </p>
        </motion.div>
            
        {/* Rechner und Ergebnisbereich */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-12 relative z-30">
          {/* Eingabebereich */}
          <motion.div 
            ref={calculatorRef}
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative backdrop-blur-md bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 shadow-2xl">
              {/* Glassmorphism inner glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                  Ihr aktueller Status
                </h3>
                
                <div className="space-y-8">
                  {/* Leads pro Monat */}
                  <div className="space-y-3">
                    <label className="block text-white font-medium flex items-center">
                      Wie viele Leads generieren Sie durchschnittlich pro Monat?
                      <InfoIcon tooltip="Schätzen Sie die Anzahl der Interessenten, die Sie monatlich über alle Kanäle erreichen." />
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={leadsProMonat}
                        onChange={(e) => setLeadsProMonat(parseInt(e.target.value))}
                        className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #ff5500 0%, #ff8040 ${leadsProMonat}%, rgba(255,255,255,0.1) ${leadsProMonat}%, rgba(255,255,255,0.1) 100%)`
                        }}
                      />
                      <input
                        type="number"
                        min="1"
                        max="100"
                        value={leadsProMonat}
                        onChange={handleLeadsChange}
                        className="w-20 px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-center focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Kosten pro Lead */}
                  <div className="space-y-3">
                    <label className="block text-white font-medium flex items-center">
                      Was kostet Sie ein einzelner Lead im Durchschnitt? (€)
                      <InfoIcon tooltip="Berechnen Sie: Gesamte Werbeausgaben ÷ Anzahl generierter Leads" />
                    </label>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={kostenProLead}
                      onChange={handleKostenChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all duration-200"
                      placeholder="z.B. 200"
                    />
                  </div>

                  {/* Abschlussquote */}
                  <div className="space-y-3">
                    <label className="block text-white font-medium flex items-center">
                      Wie hoch ist Ihre Abschlussquote in Prozent?
                      <InfoIcon tooltip="Wie viele Ihrer Leads werden zu zahlenden Kunden? (Abschlüsse ÷ Leads × 100)" />
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="range"
                        min="1"
                        max="20"
                        step="0.1"
                        value={abschlussquote}
                        onChange={(e) => setAbschlussquote(parseFloat(e.target.value))}
                        className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #ff5500 0%, #ff8040 ${(abschlussquote/20)*100}%, rgba(255,255,255,0.1) ${(abschlussquote/20)*100}%, rgba(255,255,255,0.1) 100%)`
                        }}
                      />
                      <input
                        type="number"
                        min="1"
                        max="20"
                        step="0.1"
                        value={abschlussquote}
                        onChange={handleAbschlussquoteChange}
                        className="w-20 px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-center focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all duration-200"
                      />
                      <span className="text-white/70">%</span>
                    </div>
                  </div>

                  {/* Umsatz pro Abschluss */}
                  <div className="space-y-3">
                    <label className="block text-white font-medium flex items-center">
                      Was ist Ihr durchschnittlicher Umsatz (Provision) pro Abschluss? (€)
                      <InfoIcon tooltip="Ihre durchschnittliche Provision oder Ihr Gewinn pro erfolgreich abgeschlossenem Geschäft" />
                    </label>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={umsatzProAbschluss}
                      onChange={handleUmsatzChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all duration-200"
                      placeholder="z.B. 8000"
                    />
                  </div>

                  {/* Stunden pro Woche */}
                  <div className="space-y-3">
                    <label className="block text-white font-medium flex items-center">
                      Wie viele Stunden pro Woche verbringen Sie mit der Akquise?
                      <InfoIcon tooltip="Zeit für Leadgenerierung, Nachfassen, Qualifizierung und erste Gespräche" />
                    </label>
                    <div className="flex items-center space-x-4">
                      <input
                        type="range"
                        min="1"
                        max="40"
                        value={stundenProWoche}
                        onChange={(e) => setStundenProWoche(parseInt(e.target.value))}
                        className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #ff5500 0%, #ff8040 ${(stundenProWoche/40)*100}%, rgba(255,255,255,0.1) ${(stundenProWoche/40)*100}%, rgba(255,255,255,0.1) 100%)`
                        }}
                      />
                      <input
                        type="number"
                        min="1"
                        max="40"
                        value={stundenProWoche}
                        onChange={handleStundenChange}
                        className="w-20 px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-center focus:outline-none focus:border-orange-500/50 focus:bg-white/10 transition-all duration-200"
                      />
                      <span className="text-white/70">h</span>
                    </div>
                  </div>
                  
                  {/* Berechnen-Button */}
                  <div className="mt-10 text-center">
                    <button
                      onClick={calculateResults}
                      style={{
                        background: 'rgba(255, 85, 0, 0.1)',
                        color: 'white',
                        border: '1px solid rgba(255, 85, 0, 0.5)',
                        padding: '14px 28px',
                        borderRadius: '12px',
                        fontWeight: '600',
                        fontSize: '16px',
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 0 15px rgba(255, 85, 0, 0.3)',
                        cursor: 'pointer',
                        width: '100%',
                        maxWidth: '400px',
                        lineHeight: '1.2',
                      }}
                      className="relative"
                    >
                      <div 
                        style={{
                          position: 'absolute',
                          inset: '0',
                          background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.6) 0%, rgba(255, 85, 0, 0.3) 40%, transparent 70%)',
                          filter: 'blur(12px)',
                          opacity: '0.5',
                          zIndex: '-1',
                          transform: 'scale(1.1)'
                        }}
                      ></div>
                      
                      {/* SHINE-ANIMATION ENTFERNT für bessere Performance */}

                      {isCalculating ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Berechne...
                        </span>
                      ) : (
                        "Potenzial berechnen"
                      )}
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ergebnisbereich */}
          <motion.div 
            ref={resultsRef}
            className="relative h-full flex flex-col justify-center z-40"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {isCalculating ? (
              <div className="relative backdrop-blur-md bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 shadow-2xl">
                <div className="flex flex-col items-center justify-center h-96">
                  <div className="w-16 h-16 border-4 border-orange-500/30 border-t-orange-500 rounded-full animate-spin mb-4"></div>
                  <p className="text-white/80 text-lg">Berechne Ihr Potenzial...</p>
                </div>
              </div>
            ) : showResults ? (
              <div className="space-y-6">
                {/* IST-Zustand */}
                <div className="relative backdrop-blur-md bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 shadow-2xl">
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-6">Ihr aktueller Zustand</h3>
                    <div className="mt-4 space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-white">Monatliche Werbekosten:</span>
                        <span className="text-white/90 font-medium">{formatCurrency(istZustand.monatlicheWerbekosten)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Zeitkosten (Akquise):</span>
                        <span className="text-white/90 font-medium">{formatCurrency(istZustand.monatlicheZeitkosten)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Monatlicher Umsatz:</span>
                        <span className="text-white/90 font-medium">{formatCurrency(istZustand.monatlicheUmsatz)}</span>
                      </div>
                      <div className="border-t border-white/10 pt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">Aktueller Gewinn:</span>
                          <span className={`font-bold text-lg ${istZustand.gewinn >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {formatCurrency(istZustand.gewinn)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SOLL-Zustand */}
                <div className="relative backdrop-blur-md bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 shadow-2xl">
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-6">Ihr Potenzial mit uns</h3>
                    <div className="mt-4 space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-white">Neue qualifizierte Leads:</span>
                        <span className="text-white/90 font-medium">{Math.round(sollZustand.neueAnzahlLeads)}/Monat</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Verbesserte Abschlussquote:</span>
                        <span className="text-white/90 font-medium">{sollZustand.neueAbschlussquote.toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Neuer Monatsumsatz:</span>
                        <span className="text-white/90 font-medium">{formatCurrency(sollZustand.neuerUmsatz)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80">Gesparte Zeit (Wert):</span>
                        <span className="text-white/90 font-medium">{formatCurrency(sollZustand.wertGesparteZeit)}</span>
                      </div>
                      <div className="border-t border-white/10 pt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">Neuer Gewinn:</span>
                          <span className="text-green-400 font-bold text-lg">{formatCurrency(sollZustand.neuerGewinn)}</span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-white/80">Gewinnsteigerung:</span>
                          <span className="text-white/90 font-medium">+{sollZustand.gewinnSteigerungProz.toFixed(0)}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROI Bereich */}
                <div className="relative backdrop-blur-md bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 shadow-2xl">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                      Ihr Marketing-ROI
                    </h3>
                    <div className="text-center mb-4">
                      <div className="text-5xl font-bold text-white mb-2 relative inline-block">
                        <span className="relative z-10">{roiDaten.roi.toFixed(0)}%</span>
                        <span className="absolute -bottom-1 left-0 right-0 h-4 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50"></span>
                      </div>
                      <div className="text-white/80 text-lg">
                        Return on Investment
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <p className="text-white/90 text-lg leading-relaxed">
                        <strong>Das bedeutet:</strong> Für jeden Euro, den Sie in unsere Zusammenarbeit investieren, 
                        erhalten Sie voraussichtlich <span className="text-white font-bold underline decoration-orange-500/50 decoration-2 underline-offset-2">{roiDaten.faktor.toFixed(1)} Euro</span> zurück!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative backdrop-blur-md bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 shadow-2xl">
                <div className="text-center h-96 flex flex-col items-center justify-center">
                  <div className="text-6xl mb-4"></div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Ihre Ergebnisse</h3>
                  <p className="text-white text-lg">
                    Füllen Sie die Felder links aus, um Ihr Potenzial zu berechnen.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Call-to-Action */}
        {showResults && (
          <motion.div 
            ref={ctaRef}
            className="text-center mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Klingt zu gut, um wahr zu sein? Lassen Sie uns in einem kostenlosen 15-Minuten-Gespräch zeigen, wie wir genau diese Zahlen für IHR Business erreichen.
            </h3>
            <button
              onClick={handleCtaClick}
              style={{
                background: 'rgba(255, 85, 0, 0.3)',
                color: 'white',
                border: '1px solid rgba(255, 85, 0, 0.6)',
                padding: '16px 32px',
                borderRadius: '12px',
                fontWeight: '600',
                fontSize: '16px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                boxShadow: '0 0 15px rgba(255, 85, 0, 0.3)',
                cursor: 'pointer',
                minWidth: '280px',
                maxWidth: '100%',
                lineHeight: '1.2',
              }}
              className="relative"
            >
              <div 
                style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'radial-gradient(circle at center, rgba(255, 85, 0, 0.6) 0%, rgba(255, 85, 0, 0.3) 40%, transparent 70%)',
                  filter: 'blur(12px)',
                  opacity: '0.5',
                  zIndex: '-1',
                  transform: 'scale(1.1)'
                }}
              ></div>
              
              {/* SHINE-ANIMATION ENTFERNT für bessere Performance */}

              Jetzt kostenlose Potenzial-Analyse buchen
            </button>
          </motion.div>
        )}
      </div>

      {/* Custom CSS für Slider */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ff5500;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 0 10px rgba(255, 85, 0, 0.5);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #ff5500;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 0 10px rgba(255, 85, 0, 0.5);
        }
        
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

// Exportiere die Komponente als FailureReasons (der Name, mit dem sie in app/page.tsx importiert wird)
const FailureReasons = MarketingROICalculator;
export default FailureReasons;