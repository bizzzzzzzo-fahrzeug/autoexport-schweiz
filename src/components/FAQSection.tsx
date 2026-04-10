import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items?: FAQItem[];
  title?: string;
  subtitle?: string;
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'Welche Fahrzeuge kaufen Sie an?',
    answer: 'Wir kaufen Fahrzeuge aller Marken und Modelle – von Kleinwagen bis Luxusfahrzeuge, Nutzfahrzeuge, Unfallwagen, Fahrzeuge mit Motor- oder Getriebeschaden, und auch Autos mit hoher Kilometerleistung. Grundsätzlich kaufen wir jedes Fahrzeug.'
  },
  {
    question: 'Wie schnell erhalte ich mein Geld?',
    answer: 'Sie erhalten Ihr Geld sofort bei der Fahrzeugübergabe – entweder in bar oder per Banküberweisung. Es gibt keine Wartezeiten. Der gesamte Prozess kann innerhalb eines Tages abgeschlossen werden.'
  },
  {
    question: 'Ist die Bewertung wirklich kostenlos?',
    answer: 'Ja, die Fahrzeugbewertung ist zu 100% kostenlos und unverbindlich. Sie erhalten innerhalb von 30 Minuten ein Angebot und können dann in Ruhe entscheiden, ob Sie verkaufen möchten.'
  },
  {
    question: 'Holen Sie das Fahrzeug ab?',
    answer: 'Ja, wir bieten einen kostenlosen Abholservice in der gesamten Schweiz. Auch nicht fahrbare Fahrzeuge werden von uns abgeholt – wir organisieren den Abschleppservice.'
  },
  {
    question: 'Welche Dokumente brauche ich?',
    answer: 'Sie benötigen den Fahrzeugausweis (Fahrzeugschein) und einen gültigen Personalausweis oder Pass. Bei fehlenden Dokumenten helfen wir Ihnen gerne weiter.'
  },
  {
    question: 'Kümmern Sie sich um die Abmeldung?',
    answer: 'Ja, wir übernehmen alle Formalitäten inklusive der Abmeldung beim Strassenverkehrsamt. Sie müssen sich um nichts kümmern.'
  },
  {
    question: 'In welche Länder exportieren Sie?',
    answer: 'Wir exportieren Fahrzeuge nach Deutschland, Österreich, in osteuropäische Länder (Polen, Rumänien, Bulgarien, Serbien, etc.), nach Afrika (Nigeria, Ghana, Senegal, Kamerun, etc.) und in den Nahen Osten.'
  },
  {
    question: 'Wie kontaktiere ich Sie am schnellsten?',
    answer: 'Der schnellste Weg ist über WhatsApp an +41 79 915 74 64. Senden Sie uns einfach Ihre Fahrzeugdaten und Fotos, und Sie erhalten innerhalb von 30 Minuten ein Angebot. Sie können uns auch anrufen oder das Kontaktformular nutzen.'
  },
];

const FAQSection: React.FC<FAQSectionProps> = ({
  items = defaultFAQs,
  title = 'Häufig gestellte Fragen',
  subtitle = 'Hier finden Sie Antworten auf die wichtigsten Fragen rund um den Autoverkauf und Export.'
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">{title}</h2>
          <p className="mt-3 text-lg text-slate-500">{subtitle}</p>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all ${
                openIndex === i ? 'border-blue-200 bg-blue-50/50 shadow-sm' : 'border-slate-200 bg-white'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className={`text-sm font-semibold pr-4 ${openIndex === i ? 'text-blue-700' : 'text-slate-700'}`}>
                  {item.question}
                </span>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === i ? 'rotate-180 text-blue-500' : 'text-slate-400'
                }`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-slate-600 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Schema.org FAQ structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: items.map(item => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
};

export default FAQSection;
