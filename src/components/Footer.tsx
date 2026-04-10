import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">Bereit, Ihr Auto zu verkaufen?</h3>
            <p className="text-blue-100 mt-1">Kostenlose Bewertung in 30 Minuten. Sofortige Barauszahlung.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/41799157464?text=Hallo%2C%20ich%20m%C3%B6chte%20mein%20Auto%20verkaufen."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Kontakt
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg transition-all"
            >
              Formular ausfüllen
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2" />
                  <path d="M9 17h6" />
                  <path d="M14 6l-4 5h9" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold text-white block leading-tight">Autoexport</span>
                <span className="text-xs text-blue-400 font-medium">Schweiz</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Ihr zuverlässiger Partner für Autoexport und Fahrzeugankauf in der ganzen Schweiz. Über 15 Jahre Erfahrung, faire Preise und sofortige Bezahlung.
            </p>
            <div className="space-y-3">
              <a href="tel:+41799157464" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400" />
                +41 79 915 74 64
              </a>
              <a href="mailto:info@autoexport-schweiz.ch" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-400" />
                info@autoexport-schweiz.ch
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-blue-400" />
                Schweizweit tätig
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-blue-400" />
                Mo-Sa: 08:00 - 20:00
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Unsere Services</h4>
            <ul className="space-y-2.5">
              <li><Link to="/service/auto-export" className="text-sm hover:text-white transition-colors">Auto Export</Link></li>
              <li><Link to="/service/auto-ankauf" className="text-sm hover:text-white transition-colors">Auto Ankauf</Link></li>
              <li><Link to="/service/unfallwagen-ankauf" className="text-sm hover:text-white transition-colors">Unfallwagen Ankauf</Link></li>
              <li><Link to="/service/motorschaden-ankauf" className="text-sm hover:text-white transition-colors">Motorschaden Ankauf</Link></li>
              <li><Link to="/service/getriebeschaden-ankauf" className="text-sm hover:text-white transition-colors">Getriebeschaden Ankauf</Link></li>
              <li><Link to="/service/gebrauchtwagen-ankauf" className="text-sm hover:text-white transition-colors">Gebrauchtwagen Ankauf</Link></li>
              <li><Link to="/service/luxusauto-ankauf" className="text-sm hover:text-white transition-colors">Luxusauto Ankauf</Link></li>
              <li><Link to="/service/firmenwagen-ankauf" className="text-sm hover:text-white transition-colors">Firmenwagen Ankauf</Link></li>
              <li><Link to="/service/auto-bewertung" className="text-sm hover:text-white transition-colors">Kostenlose Bewertung</Link></li>
            </ul>
          </div>

          {/* Export destinations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Export Ziele</h4>
            <ul className="space-y-2.5">
              <li><Link to="/service/auto-export-deutschland" className="text-sm hover:text-white transition-colors">Export Deutschland</Link></li>
              <li><Link to="/service/auto-export-afrika" className="text-sm hover:text-white transition-colors">Export Afrika</Link></li>
              <li><Link to="/service/auto-export-osteuropa" className="text-sm hover:text-white transition-colors">Export Osteuropa</Link></li>
            </ul>

            <h4 className="text-white font-semibold mb-4 mt-8">Marken</h4>
            <ul className="space-y-2.5">
              <li><Link to="/service/mercedes-export" className="text-sm hover:text-white transition-colors">Mercedes-Benz</Link></li>
              <li><Link to="/service/bmw-export" className="text-sm hover:text-white transition-colors">BMW</Link></li>
              <li><Link to="/service/audi-export" className="text-sm hover:text-white transition-colors">Audi</Link></li>
              <li><Link to="/service/vw-export" className="text-sm hover:text-white transition-colors">Volkswagen</Link></li>
            </ul>
          </div>

          {/* Quick contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Schnellkontakt</h4>
            <p className="text-sm text-slate-400 mb-4">
              Senden Sie uns Ihre Fahrzeugdaten per WhatsApp und erhalten Sie innerhalb von 30 Minuten ein Angebot.
            </p>
            <a
              href="https://wa.me/41799157464"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all w-full justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp öffnen
            </a>
            <a
              href="tel:+41799157464"
              className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all w-full justify-center mt-3"
            >
              <Phone className="w-4 h-4" />
              Jetzt anrufen
            </a>

            <div className="mt-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-800 flex items-center justify-center text-[8px] text-white font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1 mb-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-slate-400">4.9/5 von über 2'500 zufriedenen Kunden</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Autoexport Schweiz. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link to="/agb" className="hover:text-white transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
