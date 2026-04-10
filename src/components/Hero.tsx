import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Shield, Clock, Banknote, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-blue-200 font-medium">Nr. 1 Autoexport der Schweiz</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Auto verkaufen?
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mt-2">
                Sofort Bargeld.
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              Wir kaufen Ihr Fahrzeug zum besten Preis – alle Marken, alle Zustände. 
              Kostenlose Bewertung in 30 Minuten. Sofortige Barauszahlung bei Übergabe.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/41799157464?text=Hallo%2C%20ich%20m%C3%B6chte%20mein%20Auto%20verkaufen.%20K%C3%B6nnen%20Sie%20mir%20ein%20Angebot%20machen%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-green-500/20 hover:shadow-green-500/40 transition-all hover:scale-[1.02]"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Jetzt WhatsApp
              </a>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm"
              >
                Formular ausfüllen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Phone number */}
            <div className="mt-6 flex items-center gap-3">
              <a href="tel:+41799157464" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+41 79 915 74 64</span>
              </a>
              <span className="text-slate-600">|</span>
              <span className="text-sm text-slate-400">Mo-Sa 08:00-20:00</span>
            </div>
          </div>

          {/* Right - Stats & trust */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white/5 rounded-2xl">
                    <div className="text-4xl font-extrabold text-white">15+</div>
                    <div className="text-sm text-slate-300 mt-1">Jahre Erfahrung</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-2xl">
                    <div className="text-4xl font-extrabold text-white">2'500+</div>
                    <div className="text-sm text-slate-300 mt-1">Zufriedene Kunden</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-2xl">
                    <div className="text-4xl font-extrabold text-white">30</div>
                    <div className="text-sm text-slate-300 mt-1">Min. Bewertung</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded-2xl">
                    <div className="text-4xl font-extrabold text-white">4.9</div>
                    <div className="flex items-center justify-center gap-0.5 mt-1">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recent sale ticker */}
                <div className="mt-6 p-4 bg-green-500/10 border border-green-400/20 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-green-300">Letzte Transaktion</p>
                      <p className="text-xs text-green-400/70">BMW X5 · CHF 28'500 · Heute</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-4 py-2 rounded-xl font-bold text-sm shadow-lg rotate-3">
                Beste Preise!
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Shield, title: 'Sicher & Seriös', desc: 'Über 15 Jahre im Geschäft' },
            { icon: Clock, title: 'Schnell', desc: 'Bewertung in 30 Minuten' },
            { icon: Banknote, title: 'Sofort Bargeld', desc: 'Bezahlung bei Übergabe' },
            { icon: TrendingUp, title: 'Beste Preise', desc: 'Internationales Netzwerk' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
