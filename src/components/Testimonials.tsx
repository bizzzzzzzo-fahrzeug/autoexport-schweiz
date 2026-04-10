import React from 'react';

const testimonials = [
  {
    name: 'Marco B.',
    location: 'Zürich',
    car: 'BMW 5er',
    text: 'Sehr professionelle Abwicklung. Innerhalb von 2 Stunden war alles erledigt und ich hatte mein Geld. Absolut empfehlenswert!',
    rating: 5,
  },
  {
    name: 'Sandra M.',
    location: 'Bern',
    car: 'Mercedes C-Klasse',
    text: 'Mein Auto hatte einen Motorschaden und ich dachte, es wäre wertlos. Autoexport Schweiz hat mir einen fairen Preis geboten. Top Service!',
    rating: 5,
  },
  {
    name: 'Thomas K.',
    location: 'Basel',
    car: 'Audi A4',
    text: 'Schnell, unkompliziert und fair. Der beste Preis, den ich bekommen habe. Die Abholung war kostenlos und pünktlich.',
    rating: 5,
  },
  {
    name: 'Fatima A.',
    location: 'Luzern',
    car: 'VW Golf',
    text: 'Ich habe mehrere Angebote eingeholt und Autoexport Schweiz war mit Abstand am besten. Sehr freundlicher Kontakt über WhatsApp.',
    rating: 5,
  },
  {
    name: 'Peter W.',
    location: 'St. Gallen',
    car: 'Toyota RAV4',
    text: 'Firmenwagen-Flotte von 5 Fahrzeugen verkauft. Alles wurde professionell und schnell abgewickelt. Gerne wieder!',
    rating: 5,
  },
  {
    name: 'Elena R.',
    location: 'Winterthur',
    car: 'Opel Astra',
    text: 'Mein alter Opel mit 200\'000 km hat noch einen guten Preis erzielt. Danke für die faire Bewertung und schnelle Bezahlung!',
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Kundenstimmen</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Was unsere Kunden sagen
          </h2>
          <p className="mt-3 text-lg text-slate-500 max-w-2xl mx-auto">
            Über 2'500 zufriedene Kunden vertrauen auf unseren Service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className={`w-4 h-4 ${j < t.rating ? 'text-yellow-400' : 'text-slate-200'} fill-current`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.location}</p>
                </div>
                <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{t.car}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
