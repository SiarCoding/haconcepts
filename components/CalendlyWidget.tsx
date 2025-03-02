'use client';

const CalendlyWidget = () => {
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
        
        {/* Nur Calendly-Widget */}
        <div className="rounded-lg overflow-hidden mx-auto max-w-4xl">
          <iframe
            src="https://calendly.com/ali-nextmove-digital/30min?embed_domain=nextmoveconsulting.de&embed_type=Inline&background_color=000000&text_color=ffffff&primary_color=ff5500&hide_gdpr_banner=1"
            width="100%"
            height="700"
            frameBorder="0"
            title="Terminbuchung"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CalendlyWidget; 