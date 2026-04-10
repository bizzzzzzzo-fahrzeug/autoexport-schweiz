import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  const serviceLinks = [
    { to: '/service/auto-export', label: 'Auto Export' },
    { to: '/service/auto-ankauf', label: 'Auto Ankauf' },
    { to: '/service/unfallwagen-ankauf', label: 'Unfallwagen Ankauf' },
    { to: '/service/motorschaden-ankauf', label: 'Motorschaden Ankauf' },
    { to: '/service/getriebeschaden-ankauf', label: 'Getriebeschaden Ankauf' },
    { to: '/service/gebrauchtwagen-ankauf', label: 'Gebrauchtwagen Ankauf' },
    { to: '/service/luxusauto-ankauf', label: 'Luxusauto Ankauf' },
    { to: '/service/firmenwagen-ankauf', label: 'Firmenwagen Ankauf' },
  ];

  const exportLinks = [
    { to: '/service/auto-export-deutschland', label: 'Export Deutschland' },
    { to: '/service/auto-export-afrika', label: 'Export Afrika' },
    { to: '/service/auto-export-osteuropa', label: 'Export Osteuropa' },
  ];

  const brandLinks = [
    { to: '/service/mercedes-export', label: 'Mercedes-Benz' },
    { to: '/service/bmw-export', label: 'BMW' },
    { to: '/service/audi-export', label: 'Audi' },
    { to: '/service/vw-export', label: 'Volkswagen' },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-slate-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="tel:+41799157464" className="flex items-center gap-1.5 hover:text-green-400 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+41 79 915 74 64</span>
            </a>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-slate-400">Mo-Sa: 08:00 - 20:00</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-green-400 font-medium">Kostenlose Bewertung in 30 Min</span>
            <a
              href="https://wa.me/41799157464"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs font-semibold transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-shadow">
                <svg viewBox="0 0 24 24" className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M5 17H3v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2" />
                  <path d="M9 17h6" />
                  <path d="M14 6l-4 5h9" />
                </svg>
              </div>
              <div className="hidden sm:block">
                <span className="text-lg lg:text-xl font-bold text-slate-800 leading-tight block">Autoexport</span>
                <span className="text-xs text-blue-600 font-medium -mt-0.5 block">Schweiz</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                Startseite
              </Link>

              {/* Services dropdown */}
              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                  Dienstleistungen
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-[600px] bg-white rounded-xl shadow-2xl border border-slate-100 p-6 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Ankauf</h4>
                      {serviceLinks.map(link => (
                        <Link key={link.to} to={link.to} className="block py-1.5 text-sm text-slate-600 hover:text-blue-600 transition-colors">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Export</h4>
                      {exportLinks.map(link => (
                        <Link key={link.to} to={link.to} className="block py-1.5 text-sm text-slate-600 hover:text-blue-600 transition-colors">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Marken</h4>
                      {brandLinks.map(link => (
                        <Link key={link.to} to={link.to} className="block py-1.5 text-sm text-slate-600 hover:text-blue-600 transition-colors">
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link to="/service/auto-bewertung" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                Bewertung
              </Link>
              <Link to="/kontakt" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-all">
                Kontakt
              </Link>
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/kontakt"
                className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
              >
                Jetzt Angebot
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <Link to="/" className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
                Startseite
              </Link>
              <div className="px-4 py-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Ankauf Services</span>
              </div>
              {serviceLinks.map(link => (
                <Link key={link.to} to={link.to} className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-2 pt-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Export Ziele</span>
              </div>
              {exportLinks.map(link => (
                <Link key={link.to} to={link.to} className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-2 pt-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Marken</span>
              </div>
              {brandLinks.map(link => (
                <Link key={link.to} to={link.to} className="block px-6 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg">
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 px-4">
                <Link
                  to="/kontakt"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-3 rounded-xl text-sm font-semibold shadow-lg"
                >
                  Jetzt Angebot erhalten
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
