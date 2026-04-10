import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

interface LegalContent {
  title: string;
  metaTitle: string;
  metaDescription: string;
  sections: { heading: string; content: string }[];
}

const legalPages: Record<string, LegalContent> = {
  datenschutz: {
    title: 'Datenschutzerklärung',
    metaTitle: 'Datenschutzerklärung',
    metaDescription: 'Datenschutzerklärung von Autoexport Schweiz. Informationen zum Umgang mit Ihren personenbezogenen Daten.',
    sections: [
      {
        heading: 'Allgemeine Hinweise',
        content: 'Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschliesslich auf Grundlage der gesetzlichen Bestimmungen (DSG, DSGVO). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.'
      },
      {
        heading: 'Kontaktaufnahme',
        content: 'Wenn Sie per Formular auf der Website oder per WhatsApp mit uns in Kontakt treten, werden Ihre angegebenen Daten (Name, Telefonnummer, Fahrzeugdaten) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Datenübertragung erfolgt direkt an WhatsApp Business und unterliegt den Datenschutzbestimmungen von WhatsApp/Meta.'
      },
      {
        heading: 'Cookies',
        content: 'Unsere Website verwendet keine Tracking-Cookies. Es werden lediglich technisch notwendige Cookies verwendet, die für den Betrieb der Website erforderlich sind.'
      },
      {
        heading: 'Ihre Rechte',
        content: 'Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstösst, können Sie sich bei uns oder der zuständigen Aufsichtsbehörde beschweren.'
      },
      {
        heading: 'Kontakt',
        content: 'Bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter: +41 79 915 74 64 oder per WhatsApp.'
      }
    ]
  },
  impressum: {
    title: 'Impressum',
    metaTitle: 'Impressum',
    metaDescription: 'Impressum von Autoexport Schweiz. Angaben gemäss Schweizer Recht.',
    sections: [
      {
        heading: 'Angaben gemäss Schweizer Recht',
        content: 'Autoexport Schweiz\nSchweizweit tätig\nTelefon: +41 79 915 74 64\nWhatsApp: +41 79 915 74 64\nWebsite: autoexport-schweiz.ch'
      },
      {
        heading: 'Haftungsausschluss',
        content: 'Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen entstanden sind, werden grundsätzlich ausgeschlossen.'
      },
      {
        heading: 'Urheberrechte',
        content: 'Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich Autoexport Schweiz oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.'
      }
    ]
  },
  agb: {
    title: 'Allgemeine Geschäftsbedingungen',
    metaTitle: 'AGB',
    metaDescription: 'Allgemeine Geschäftsbedingungen von Autoexport Schweiz.',
    sections: [
      {
        heading: 'Geltungsbereich',
        content: 'Diese Allgemeinen Geschäftsbedingungen gelten für alle Geschäftsbeziehungen zwischen Autoexport Schweiz und seinen Kunden. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, Autoexport Schweiz stimmt ihrer Geltung ausdrücklich schriftlich zu.'
      },
      {
        heading: 'Fahrzeugankauf',
        content: 'Angebote von Autoexport Schweiz sind freibleibend und unverbindlich. Ein Kaufvertrag kommt erst durch die beiderseitige Unterzeichnung eines schriftlichen Kaufvertrags zustande. Der vereinbarte Kaufpreis wird bei Fahrzeugübergabe in bar oder per Banküberweisung bezahlt.'
      },
      {
        heading: 'Fahrzeugzustand',
        content: 'Der Verkäufer versichert, dass die gemachten Angaben zum Fahrzeug (Kilometerstand, Zustand, Vorgeschichte) der Wahrheit entsprechen. Bei falschen Angaben behält sich Autoexport Schweiz das Recht vor, vom Kaufvertrag zurückzutreten.'
      },
      {
        heading: 'Haftung',
        content: 'Autoexport Schweiz haftet nicht für Schäden, die nach der Fahrzeugübergabe entstehen. Die Haftung beschränkt sich auf den vereinbarten Kaufpreis.'
      },
      {
        heading: 'Gerichtsstand',
        content: 'Für alle Streitigkeiten aus oder im Zusammenhang mit diesen AGB gilt Schweizer Recht. Gerichtsstand ist der Sitz von Autoexport Schweiz.'
      }
    ]
  }
};

const LegalPage: React.FC = () => {
  const { page } = useParams<{ page: string }>();
  const content = page ? legalPages[page] : undefined;

  if (!content) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <SEOHead title={content.metaTitle} description={content.metaDescription} />

      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Startseite</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 font-medium">{content.title}</span>
          </nav>
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-8">{content.title}</h1>
          <div className="space-y-8">
            {content.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-slate-800 mb-3">{section.heading}</h2>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 p-6 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-sm text-slate-500">
              Stand: April 2026. Bei Fragen kontaktieren Sie uns unter{' '}
              <a href="tel:+41799157464" className="text-blue-600 hover:underline">+41 79 915 74 64</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPage;
