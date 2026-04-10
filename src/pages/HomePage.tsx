import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProcessSteps from '@/components/ProcessSteps';
import Testimonials from '@/components/Testimonials';
import BrandsMarquee from '@/components/BrandsMarquee';
import FAQSection from '@/components/FAQSection';
import SEOHead, { LocalBusinessSchema } from '@/components/SEOHead';
import { services } from '@/data/services';
import { ArrowRight, MapPin, Phone, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Auto Export & Ankauf Schweiz"
        description="Autoexport Schweiz - Ihr Auto zum besten Preis verkaufen. Sofortige Barauszahlung, kostenlose Bewertung in 30 Min. Alle Marken, alle Zustände. +41 79 915 74 64"
        keywords={['auto export schweiz', 'auto ankauf', 'auto verkaufen', 'fahrzeug export', 'autoexport', 'gebrauchtwagen ankauf']}
      />
      <LocalBusinessSchema />

      <Hero />
      <BrandsMarquee />

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Unsere Dienstleistungen</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
              Alles aus einer Hand
            </h2>
            <p className="mt-3 text-lg text-slate-500 max-w-2xl mx-auto">
              Ob Export, Ankauf, Unfallwagen oder Luxusfahrzeug – wir haben den passenden Service für Sie.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map(service => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                shortDescription={service.shortDescription}
                icon={service.icon}
                category={service.category}
              />
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-bold text-blue-400 uppercase tracking-wider mb-2">Warum wir?</span>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Der Unterschied, der zählt
              </h2>
              <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                Bei Autoexport Schweiz erhalten Sie nicht nur den besten Preis für Ihr Fahrzeug, sondern auch einen Service, der seinesgleichen sucht. Unser internationales Netzwerk ermöglicht es uns, Preise zu bieten, die über dem lokalen Marktwert liegen.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Über 15 Jahre Erfahrung im Autohandel',
                  'Internationales Netzwerk in über 30 Ländern',
                  'Sofortige Bezahlung – keine Wartezeiten',
                  'Kostenlose Abholung in der ganzen Schweiz',
                  'Alle Marken und Zustände willkommen',
                  'Komplette Abwicklung aller Formalitäten',
                  'Persönliche Beratung per WhatsApp',
                  'Transparente und faire Preisgestaltung',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-blue-50 transition-all"
                >
                  Jetzt Angebot erhalten
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:+41799157464"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  +41 79 915 74 64
                </a>
              </div>
            </div>

            {/* Coverage map placeholder */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6">Schweizweiter Service</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { city: 'Zürich', region: 'ZH' },
                  { city: 'Bern', region: 'BE' },
                  { city: 'Basel', region: 'BS' },
                  { city: 'Luzern', region: 'LU' },
                  { city: 'St. Gallen', region: 'SG' },
                  { city: 'Winterthur', region: 'ZH' },
                  { city: 'Lausanne', region: 'VD' },
                  { city: 'Genf', region: 'GE' },
                  { city: 'Biel', region: 'BE' },
                  { city: 'Thun', region: 'BE' },
                  { city: 'Aarau', region: 'AG' },
                  { city: 'Chur', region: 'GR' },
                ].map((loc, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-white/5 rounded-lg">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-slate-200">{loc.city}</span>
                    <span className="text-xs text-slate-500 ml-auto">{loc.region}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400 mt-4 text-center">
                + alle weiteren Städte und Gemeinden der Schweiz
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQSection />

      {/* Final CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Bereit für den besten Preis?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns jetzt und erhalten Sie innerhalb von 30 Minuten ein unverbindliches Angebot für Ihr Fahrzeug.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/41799157464?text=Hallo%2C%20ich%20m%C3%B6chte%20mein%20Auto%20verkaufen."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Nachricht
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-blue-50 transition-all"
            >
              Formular ausfüllen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
