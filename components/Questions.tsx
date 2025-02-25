"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Questions() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: "Wie schnell kann ich mit ersten Leads rechnen?",
      answer: "Ehrlich gesagt? Es kommt drauf an. Bei gut vorbereiteten Kampagnen sehen wir oft schon nach 2-3 Wochen die ersten qualifizierten Leads. Der richtige Boost kommt aber meist nach 4-6 Wochen, wenn wir genug Daten haben, um die Kampagnen zu optimieren. Wir versprechen keine Wunder über Nacht, aber einen nachhaltigen Aufbau deines Lead-Flusses."
    },
    {
      question: "Was unterscheidet euch von anderen Marketing-Agenturen?",
      answer: "Wir sind keine 08/15-Agentur, die jedem Kunden die gleiche Strategie verkauft. Wir haben uns komplett auf Finanzberater und Immobilien-Profis spezialisiert und kennen die Schmerzpunkte der Branche. Unsere Kampagnen sind auf hochwertige Leads ausgerichtet, nicht auf Masse. Außerdem arbeiten wir mit einem transparenten Reporting-System, bei dem du jederzeit siehst, was dein Investment bringt."
    },
    {
      question: "Wie hoch ist das Mindestbudget für eine Zusammenarbeit?",
      answer: "Für effektive Kampagnen empfehlen wir ein Werbebudget von mindestens 2.000€ monatlich plus unsere Betreuungsgebühr. Klingt erstmal nach viel, aber bedenke: Ein einziger abgeschlossener Deal bringt dir ein Vielfaches davon ein. Wir können aber auch individuell schauen, was für deine Situation am besten passt – manchmal macht es Sinn, kleiner zu starten und dann zu skalieren."
    },
    {
      question: "Muss ich mich um die technische Umsetzung kümmern?",
      answer: "Absolut nicht! Wir übernehmen den kompletten technischen Teil – von der Einrichtung der Tracking-Pixel über die Landing-Page-Erstellung bis hin zur Kampagnensteuerung. Du musst dich nur um die Betreuung der eingehenden Leads kümmern. Wir liefern dir sogar Gesprächsleitfäden und Tipps für die Nachverfolgung, damit du das Maximum aus jedem Lead herausholen kannst."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl lg:text-5xl">
            Häufig gestellte <span className="relative">
              <span className="relative z-10">Fragen</span>
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ff8040] to-[#ff5500]"></span>
            </span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-400">
            Alles, was du über unsere Leadgenerierung für Finanzberater und Immobilien-Profis wissen solltest
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="transition-all duration-200 bg-black border border-white/10 rounded-lg hover:border-[#ff5500]/50"
            >
              <button 
                type="button" 
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex text-lg font-semibold text-white">
                  {item.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-[#ff5500]" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                )}
              </button>

              <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${openIndex === index ? 'block' : 'hidden'}`}>
                <p className="text-gray-300">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 