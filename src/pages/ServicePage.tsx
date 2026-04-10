import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone, ChevronRight, ChevronDown } from 'lucide-react';
import { getServiceBySlug, services } from '@/data/services';
import ContactForm from '@/components/ContactForm';
import SEOHead from '@/components/SEOHead';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const relatedServices = services
    .filter(s => s.category === service.category && s.slug !== service.slug)
    .slice(0, 3);

  const brandMap: Record<string, string> = {
    'mercedes-export': 'Mercedes-Benz',
    'bmw-export': 'BMW',
    'audi-export': 'Audi',
    'vw-export': 'Volkswagen',
  };
  const preselectedBrand = slug ? brandMap[slug] : undefined;

  return (
    <>
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
        canonical={`https://autoexport-schweiz.ch/service/${service.slug}`}
      />

      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Startseite</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">{service.heroTitle}</h1>
            <p className="mt-4 text-xl text-slate-300 leading-relaxed">{service.heroSubtitle}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/41799157464" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fb855] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-[1.02]">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Jetzt WhatsApp
              </a>
              <a href="#kontakt-formular" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
                Formular ausfüllen <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-4">{service.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{service.longDescription}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">Ihre Vorteile</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">So funktioniert's</h3>
                <div className="space-y-4">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">{step.step}</div>
                      <div>
                        <h4 className="font-bold text-slate-800">{step.title}</h4>
                        <p className="text-sm text-slate-500 mt-1">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {service.faq.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-6">Häufig gestellte Fragen</h3>
                  <div className="space-y-3">
                    {service.faq.map((item, i) => (
                      <div key={i} className={`border rounded-xl overflow-hidden transition-all ${openFaq === i ? 'border-blue-200 bg-blue-50/50' : 'border-slate-200 bg-white'}`}>
                        <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                          <span className={`text-sm font-semibold pr-4 ${openFaq === i ? 'text-blue-700' : 'text-slate-700'}`}>{item.question}</span>
                          <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180 text-blue-500' : 'text-slate-400'}`} />
                        </button>
                        {openFaq === i && (
                          <div className="px-6 pb-4">
                            <p className="text-sm text-slate-600 leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div id="kontakt-formular">
                <ContactForm preselectedBrand={preselectedBrand} preselectedService={service.title} />
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h4 className="font-bold text-slate-800 mb-3">Schnellkontakt</h4>
                <p className="text-sm text-slate-500 mb-4">Lieber direkt sprechen? Rufen Sie uns an oder schreiben Sie per WhatsApp.</p>
                <div className="space-y-3">
                  <a href="tel:+41799157464" className="flex items-center gap-2 w-full bg-slate-800 hover:bg-slate-700 text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all justify-center">
                    <Phone className="w-4 h-4" /> +41 79 915 74 64
                  </a>
                  <a href="https://wa.me/41799157464" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full bg-[#25D366] hover:bg-[#1fb855] text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all justify-center">
                    WhatsApp schreiben
                  </a>
                </div>
              </div>
              {relatedServices.length > 0 && (
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                  <h4 className="font-bold text-slate-800 mb-4">Weitere Services</h4>
                  <div className="space-y-3">
                    {relatedServices.map(rs => (
                      <Link key={rs.slug} to={`/service/${rs.slug}`} className="flex items-center justify-between p-3 bg-slate-50 hover:bg-blue-50 rounded-xl transition-colors group">
                        <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600">{rs.title}</span>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
