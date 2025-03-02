"use client";

export default function Testimonials() {
  const StarIcon = () => (
    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section className="py-12 bg-black sm:py-16 lg:py-20" id="testimonials">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-center max-w-[90vw] sm:max-w-none">
              Was unsere
              <div className="relative inline-block mx-2">
                <span className="relative z-10">Kunden</span>
                <span className="absolute -bottom-1 left-0 right-0 h-4 bg-gradient-to-r from-[#ff8040] to-[#ff5500] blur-lg opacity-50" />
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff8040] to-[#ff5500]" />
              </div>
              <span className="block sm:inline">sagen</span>
            </h2>
            <p className="mt-6 text-lg font-medium text-gray-400">Über 50 zufriedene Kunden vertrauen uns bereits</p>
          </div>

          <div className="relative mt-10 md:mt-24">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" 
                style={{background: "linear-gradient(90deg, #ff8040 -0.55%, #ff5500 22.86%, #ff8040 48.36%, #ff5500 73.33%, #ff8040 99.34%)"}} />
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white rounded-xl lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>

                    <blockquote className="flex-1 mt-8">
                      <p className="text-lg leading-relaxed text-gray-600">
                        "Wir generieren täglich qualifizierte Leads mit der Zusammenarbeit von Nextmove Consulting. Ihr Team hat uns geholfen, unsere Vertriebsprozesse zu optimieren und unsere Conversion-Rate deutlich zu steigern. Die Ergebnisse sprechen für sich - mehr Termine, mehr Abschlüsse und ein signifikantes Wachstum unseres Geschäfts."
                      </p>
                    </blockquote>
                  </div>

                  <div className="flex items-center mt-8">
                    <img src="/nico.jpg" alt="Nico Fries" className="flex-shrink-0 w-11 h-11 rounded-full object-cover" />
                    <div className="ml-4">
                      <p className="text-base font-bold text-gray-900">Nico Fries</p>
                      <p className="mt-0.5 text-sm text-gray-500">Kapitalanlage-Experte</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white rounded-xl lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>

                    <blockquote className="flex-1 mt-8">
                      <p className="text-lg leading-relaxed text-gray-600">
                        "Wir haben in den ersten Wochen, nach Start der Kampagne mit Nextmove Consulting, mehr als 40 Anfragen erhalten. Daraus ergaben sich 16 neue Besichtigungstermine und eine Reichweite von über 160.000 erreichten Konten innerhalb der Zielgruppe. Und das im November 2023, in einer sehr schwierigen Phase im Immobiliengeschäft!"
                      </p>
                    </blockquote>
                  </div>

                  <div className="flex items-center mt-8">
                    <img src="/kekelidis.jpeg" alt="Michaelis Kekelidis" className="flex-shrink-0 w-11 h-11 rounded-full object-cover" />
                    <div className="ml-4">
                      <p className="text-base font-bold text-gray-900">Michaelis Kekelidis</p>
                      <p className="mt-0.5 text-sm text-gray-500">Michaelis Immobilien</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col overflow-hidden shadow-xl">
                <div className="flex flex-col justify-between flex-1 p-6 bg-white rounded-xl lg:py-8 lg:px-7">
                  <div className="flex-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>

                    <blockquote className="flex-1 mt-8">
                      <p className="text-lg leading-relaxed text-gray-600">
                        "Nextmove Consulting hat meine Erwartungen bei der Facebook-Werbung mehr als erfüllt! Innerhalb der ersten 6 Wochen ihrer Dienstleistung habe ich dank ihrer professionellen Strategien und ihrem tiefgreifenden Verständnis für das Targeting 2 neue Aufträge mit einem Gesamtwert von knapp 1,5 Millionen Euro generiert."
                      </p>
                    </blockquote>
                  </div>

                  <div className="flex items-center mt-8">
                    <img src="/blankwater.jpeg" alt="Willem Blankwater" className="flex-shrink-0 w-11 h-11 rounded-full object-cover" />
                    <div className="ml-4">
                      <p className="text-base font-bold text-gray-900">Willem Blankwater</p>
                      <p className="mt-0.5 text-sm text-gray-500">Blankwater Immobilien</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}