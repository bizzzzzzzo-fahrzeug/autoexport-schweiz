import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, MapPin, ChevronRight, MessageSquare } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import SEOHead from '@/components/SEOHead';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Kontakt | Auto verkaufen"
        description="Kontaktieren Sie Autoexport Schweiz. Füllen Sie das Formular aus und erhalten Sie sofort ein Angebot per WhatsApp. +41 79 915 74 64"
        keywords={['autoexport kontakt', 'auto verkaufen kontakt', 'autoankauf schweiz kontakt']}
      />

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Startseite</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 font-medium">Kontakt</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Kontaktieren Sie uns
          </h1>
          <p className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto">
            Füllen Sie das Formular aus und Ihre Anfrage wird direkt an unsere WhatsApp Business Nummer gesendet. Antwort innerhalb von 30 Minuten!
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact info sidebar */}
            <div className="space-y-6">
              {/* WhatsApp card */}
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">WhatsApp bevorzugt</h3>
                    <p className="text-green-100 text-sm">Schnellste Antwort garantiert</p>
                  </div>
                </div>
                <p className="text-green-50 text-sm mb-4">
                  Senden Sie uns einfach Ihre Fahrzeugdaten und Fotos per WhatsApp. Sie erhalten innerhalb von 30 Minuten ein Angebot.
                </p>
                <a
                  href="https://wa.me/41799157464?text=Hallo%2C%20ich%20m%C3%B6chte%20mein%20Auto%20verkaufen."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-green-700 px-4 py-3 rounded-xl font-bold text-center hover:bg-green-50 transition-all"
                >
                  WhatsApp öffnen
                </a>
              </div>

              {/* Contact details */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-4">Kontaktdaten</h3>
                <div className="space-y-4">
                  <a href="tel:+41799157464" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">+41 79 915 74 64</p>
                      <p className="text-xs text-slate-400">Anruf oder WhatsApp</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Mo-Sa: 08:00 - 20:00</p>
                      <p className="text-xs text-slate-400">Auch an Feiertagen erreichbar</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Schweizweit tätig</p>
                      <p className="text-xs text-slate-400">Kostenlose Abholung überall</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">30 Min. Antwortzeit</p>
                      <p className="text-xs text-slate-400">Schnelle Bewertung garantiert</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-4">Warum Autoexport Schweiz?</h4>
                <div className="space-y-3">
                  {[
                    'Über 15 Jahre Erfahrung',
                    '2\'500+ zufriedene Kunden',
                    'Sofortige Barauszahlung',
                    'Kostenlose Bewertung',
                    'Schweizweiter Service',
                    'Alle Marken willkommen',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
