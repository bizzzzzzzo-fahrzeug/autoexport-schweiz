import React from 'react';
import { Head } from 'vite-react-ssg';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, keywords, canonical }) => {
  const fullTitle = `${title} | Autoexport Schweiz`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="de_CH" />
      <meta property="og:site_name" content="Autoexport Schweiz" />
    </Head>
  );
};

export default SEOHead;

// Local Business structured data component
export const LocalBusinessSchema: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    name: 'Autoexport Schweiz',
    description: 'Professioneller Autoexport und Fahrzeugankauf in der ganzen Schweiz. Sofortige Barauszahlung, kostenlose Bewertung, alle Marken.',
    url: 'https://autoexport-schweiz.ch',
    telephone: '+41799157464',
    areaServed: {
      '@type': 'Country',
      name: 'Switzerland',
    },
    priceRange: 'CHF',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '20:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2500',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
