import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, keywords, canonical }) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Autoexport Schweiz`;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update meta keywords
    if (keywords && keywords.length > 0) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords.join(', '));
    }

    // Update canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Open Graph
    const ogTags: Record<string, string> = {
      'og:title': title,
      'og:description': description,
      'og:type': 'website',
      'og:locale': 'de_CH',
      'og:site_name': 'Autoexport Schweiz',
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    return () => {
      document.title = 'Autoexport Schweiz | Auto verkaufen zum besten Preis';
    };
  }, [title, description, keywords, canonical]);

  return null;
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
