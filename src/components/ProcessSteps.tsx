import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Search, Truck, Banknote, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Kontakt aufnehmen',
    description: 'Senden Sie uns Ihre Fahrzeugdaten per WhatsApp oder über unser Online-Formular. Fotos sind hilfreich für eine genaue Bewertung.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Search,
    title: 'Bewertung erhalten',
    description: 'Innerhalb von 30 Minuten erhalten Sie ein unverbindliches Angebot basierend auf dem aktuellen Marktwert Ihres Fahrzeugs.',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Truck,
    title: 'Fahrzeug übergeben',
    description: 'Wir holen Ihr Fahrzeug kostenlos ab – schweizweit. Oder Sie bringen es zu uns. Auch nicht fahrbare Fahrzeuge sind kein Problem.',
    color: 'from-amber-500 to-amber-600',
  },
  {
    icon: Banknote,
    title: 'Sofort Geld erhalten',
    description: 'Barauszahlung oder Banküberweisung direkt bei der Fahrzeugübergabe. Keine Wartezeiten, keine versteckten Kosten.',
    color: 'from-purple-500 to-purple-600',
  },
];

const ProcessSteps: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">So funktioniert's</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            In 4 Schritten zum Verkauf
          </h2>
          <p className="mt-3 text-lg text-slate-500 max-w-2xl mx-auto">
            Einfacher geht's nicht. Vom ersten Kontakt bis zur Bezahlung – alles an einem Tag möglich.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-slate-200" />
              )}
              <div className="relative bg-white rounded-2xl p-6 text-center">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-sm font-bold text-slate-400">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
          >
            Jetzt starten
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
