export interface ServicePage {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  icon: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  keywords: string[];
  category: 'export' | 'ankauf' | 'zustand' | 'marke';
}

export const services: ServicePage[] = [
  {
    slug: 'auto-export',
    title: 'Auto Export Schweiz',
    metaTitle: 'Auto Export Schweiz | Bester Preis & Schnelle Abwicklung',
    metaDescription: 'Auto Export aus der Schweiz. Wir kaufen Ihr Fahrzeug zum besten Preis und kümmern uns um den gesamten Export. Sofortige Barauszahlung. Kostenlose Bewertung.',
    heroTitle: 'Auto Export Schweiz',
    heroSubtitle: 'Wir exportieren Ihr Fahrzeug schnell, sicher und zum besten Preis ins Ausland.',
    icon: 'Globe',
    shortDescription: 'Professioneller Fahrzeugexport aus der Schweiz mit sofortiger Barauszahlung.',
    longDescription: 'Autoexport Schweiz ist Ihr zuverlässiger Partner für den professionellen Fahrzeugexport. Wir kaufen Fahrzeuge aller Marken und Modelle und kümmern uns um den gesamten Exportprozess. Von der kostenlosen Bewertung bis zur Abmeldung und dem Transport – wir übernehmen alles für Sie. Profitieren Sie von unserer langjährigen Erfahrung und unserem weitreichenden Netzwerk im internationalen Fahrzeughandel.',
    benefits: [
      'Sofortige Barauszahlung oder Banküberweisung',
      'Kostenlose Fahrzeugbewertung vor Ort',
      'Komplette Abwicklung aller Exportformalitäten',
      'Abholung in der gesamten Schweiz',
      'Faire und transparente Preise',
      'Über 15 Jahre Erfahrung im Autoexport'
    ],
    process: [
      { step: 1, title: 'Kontakt aufnehmen', description: 'Senden Sie uns Ihre Fahrzeugdaten per WhatsApp oder über unser Formular.' },
      { step: 2, title: 'Bewertung erhalten', description: 'Sie erhalten innerhalb von 30 Minuten ein unverbindliches Angebot.' },
      { step: 3, title: 'Fahrzeug übergeben', description: 'Wir holen Ihr Fahrzeug ab oder Sie bringen es zu uns.' },
      { step: 4, title: 'Sofort Geld erhalten', description: 'Barauszahlung oder Banküberweisung bei Übergabe.' }
    ],
    faq: [
      { question: 'Welche Fahrzeuge kaufen Sie für den Export?', answer: 'Wir kaufen alle Marken und Modelle – von Kleinwagen bis Luxusfahrzeuge, auch mit hoher Kilometerleistung oder Schäden.' },
      { question: 'Wie schnell erhalte ich mein Geld?', answer: 'Sie erhalten Ihr Geld sofort bei der Fahrzeugübergabe – bar oder per Banküberweisung.' },
      { question: 'Kümmern Sie sich um die Abmeldung?', answer: 'Ja, wir übernehmen alle Formalitäten inklusive Abmeldung beim Strassenverkehrsamt.' },
      { question: 'Ist die Bewertung kostenlos?', answer: 'Ja, die Fahrzeugbewertung ist komplett kostenlos und unverbindlich.' }
    ],
    keywords: ['auto export schweiz', 'fahrzeug export', 'auto verkaufen export', 'auto ins ausland verkaufen'],
    category: 'export'
  },
  {
    slug: 'auto-ankauf',
    title: 'Auto Ankauf Schweiz',
    metaTitle: 'Auto Ankauf Schweiz | Sofort Bargeld für Ihr Auto',
    metaDescription: 'Auto Ankauf in der ganzen Schweiz. Sofortige Barauszahlung, kostenlose Bewertung, alle Marken. Verkaufen Sie Ihr Auto schnell und unkompliziert.',
    heroTitle: 'Auto Ankauf Schweiz',
    heroSubtitle: 'Verkaufen Sie Ihr Auto schnell und unkompliziert – wir kaufen alle Marken und Modelle.',
    icon: 'HandCoins',
    shortDescription: 'Sofortiger Autoankauf in der ganzen Schweiz. Alle Marken, faire Preise.',
    longDescription: 'Unser Auto Ankauf Service bietet Ihnen die schnellste und einfachste Möglichkeit, Ihr Fahrzeug zu verkaufen. Egal ob Neuwagen, Gebrauchtwagen, Unfallwagen oder Fahrzeug mit hoher Kilometerleistung – wir machen Ihnen ein faires Angebot. Keine langen Wartezeiten, keine komplizierten Verhandlungen. Kontaktieren Sie uns und erhalten Sie innerhalb von 30 Minuten ein verbindliches Angebot.',
    benefits: [
      'Ankauf aller Marken und Modelle',
      'Sofortige Barauszahlung',
      'Kostenlose Abholung schweizweit',
      'Keine versteckten Kosten',
      'Schnelle Abwicklung am selben Tag',
      'Auch Fahrzeuge mit Mängeln'
    ],
    process: [
      { step: 1, title: 'Fahrzeugdaten senden', description: 'Teilen Sie uns Marke, Modell, Jahrgang und Kilometerstand mit.' },
      { step: 2, title: 'Angebot erhalten', description: 'Wir erstellen Ihnen ein faires Angebot innerhalb von 30 Minuten.' },
      { step: 3, title: 'Termin vereinbaren', description: 'Wir kommen zu Ihnen oder Sie besuchen uns.' },
      { step: 4, title: 'Auto verkaufen', description: 'Fahrzeug übergeben und sofort Bargeld erhalten.' }
    ],
    faq: [
      { question: 'Kaufen Sie auch Autos mit Motorschaden?', answer: 'Ja, wir kaufen Fahrzeuge in jedem Zustand – auch mit Motor- oder Getriebeschaden.' },
      { question: 'Muss ich das Auto zu Ihnen bringen?', answer: 'Nein, wir bieten einen kostenlosen Abholservice in der gesamten Schweiz.' },
      { question: 'Wie wird der Preis berechnet?', answer: 'Der Preis basiert auf Marke, Modell, Zustand, Kilometerstand und aktuellem Marktwert.' },
      { question: 'Brauche ich spezielle Dokumente?', answer: 'Sie benötigen den Fahrzeugausweis und einen gültigen Ausweis. Wir helfen bei fehlenden Dokumenten.' }
    ],
    keywords: ['auto ankauf schweiz', 'auto verkaufen', 'gebrauchtwagen ankauf', 'auto sofort verkaufen'],
    category: 'ankauf'
  },
  {
    slug: 'unfallwagen-ankauf',
    title: 'Unfallwagen Ankauf',
    metaTitle: 'Unfallwagen Ankauf Schweiz | Unfallfahrzeug verkaufen',
    metaDescription: 'Unfallwagen verkaufen zum besten Preis. Wir kaufen Unfallfahrzeuge aller Art. Sofortige Barauszahlung, kostenlose Abholung schweizweit.',
    heroTitle: 'Unfallwagen Ankauf',
    heroSubtitle: 'Ihr Unfallfahrzeug hat noch Wert – wir machen Ihnen ein faires Angebot.',
    icon: 'ShieldAlert',
    shortDescription: 'Unfallfahrzeuge aller Art zum besten Preis verkaufen.',
    longDescription: 'Hatten Sie einen Unfall und wissen nicht, was Sie mit Ihrem beschädigten Fahrzeug machen sollen? Wir kaufen Unfallwagen aller Art – von leichten Blechschäden bis hin zu Totalschäden. Unser Expertenteam bewertet Ihr Fahrzeug fair und transparent. Sie erhalten sofort ein Angebot und können Ihr Unfallfahrzeug noch am selben Tag verkaufen.',
    benefits: [
      'Ankauf von Fahrzeugen mit jedem Schadensgrad',
      'Faire Bewertung durch Experten',
      'Sofortige Barauszahlung',
      'Kostenloser Abschleppservice',
      'Keine Reparaturkosten für Sie',
      'Schnelle und unkomplizierte Abwicklung'
    ],
    process: [
      { step: 1, title: 'Schaden beschreiben', description: 'Senden Sie uns Fotos und eine Beschreibung des Schadens per WhatsApp.' },
      { step: 2, title: 'Bewertung erhalten', description: 'Unsere Experten bewerten den Restwert Ihres Fahrzeugs.' },
      { step: 3, title: 'Abholung vereinbaren', description: 'Wir holen Ihr Unfallfahrzeug kostenlos ab – auch wenn es nicht fahrbereit ist.' },
      { step: 4, title: 'Geld erhalten', description: 'Sofortige Bezahlung bei Übergabe des Fahrzeugs.' }
    ],
    faq: [
      { question: 'Kaufen Sie auch Totalschäden?', answer: 'Ja, wir kaufen auch Fahrzeuge mit Totalschaden. Jedes Fahrzeug hat noch einen Restwert.' },
      { question: 'Mein Auto ist nicht fahrbereit, was nun?', answer: 'Kein Problem! Wir organisieren einen kostenlosen Abschleppservice.' },
      { question: 'Brauche ich ein Gutachten?', answer: 'Nein, wir erstellen unsere eigene Bewertung. Ein vorhandenes Gutachten kann aber hilfreich sein.' }
    ],
    keywords: ['unfallwagen ankauf', 'unfallfahrzeug verkaufen', 'unfallauto verkaufen schweiz'],
    category: 'zustand'
  },
  {
    slug: 'motorschaden-ankauf',
    title: 'Auto mit Motorschaden verkaufen',
    metaTitle: 'Motorschaden Ankauf | Auto mit Motorschaden verkaufen Schweiz',
    metaDescription: 'Auto mit Motorschaden verkaufen. Faire Preise für Fahrzeuge mit Motorschaden. Sofortige Barauszahlung und kostenlose Abholung in der ganzen Schweiz.',
    heroTitle: 'Motorschaden Ankauf',
    heroSubtitle: 'Auch mit Motorschaden ist Ihr Auto noch Geld wert – verkaufen Sie es an uns.',
    icon: 'Wrench',
    shortDescription: 'Fahrzeuge mit Motorschaden schnell und fair verkaufen.',
    longDescription: 'Ein Motorschaden bedeutet nicht, dass Ihr Fahrzeug wertlos ist. Wir kaufen Autos mit Motorschaden zu fairen Preisen. Ob Kolbenfresser, Zahnriemenriss oder andere Motorprobleme – wir machen Ihnen ein Angebot, das den tatsächlichen Restwert Ihres Fahrzeugs widerspiegelt. Sparen Sie sich die teuren Reparaturkosten und verkaufen Sie Ihr Fahrzeug direkt an uns.',
    benefits: [
      'Faire Preise trotz Motorschaden',
      'Keine teuren Reparaturen nötig',
      'Kostenlose Abholung auch bei nicht fahrbereiten Fahrzeugen',
      'Sofortige Barauszahlung',
      'Alle Motorschadenarten werden angekauft',
      'Professionelle Wertermittlung'
    ],
    process: [
      { step: 1, title: 'Schaden melden', description: 'Beschreiben Sie den Motorschaden und senden Sie Fahrzeugdaten.' },
      { step: 2, title: 'Angebot erhalten', description: 'Wir bewerten Ihr Fahrzeug und erstellen ein faires Angebot.' },
      { step: 3, title: 'Abholung', description: 'Kostenlose Abholung – auch wenn das Fahrzeug nicht mehr fährt.' },
      { step: 4, title: 'Bezahlung', description: 'Sofortige Bezahlung bei Fahrzeugübergabe.' }
    ],
    faq: [
      { question: 'Welche Motorschäden kaufen Sie an?', answer: 'Alle Arten: Kolbenfresser, Zahnriemenriss, Turboschaden, Kopfdichtung, Ölverlust und mehr.' },
      { question: 'Lohnt sich der Verkauf bei Motorschaden?', answer: 'Ja! Die Reparaturkosten übersteigen oft den Fahrzeugwert. Bei uns erhalten Sie sofort Geld.' },
      { question: 'Wie hoch ist der Preis bei Motorschaden?', answer: 'Der Preis hängt von Marke, Modell, Alter und Art des Schadens ab. Wir bewerten fair.' }
    ],
    keywords: ['motorschaden ankauf', 'auto motorschaden verkaufen', 'fahrzeug motorschaden schweiz'],
    category: 'zustand'
  },
  {
    slug: 'getriebeschaden-ankauf',
    title: 'Auto mit Getriebeschaden verkaufen',
    metaTitle: 'Getriebeschaden Ankauf | Fahrzeug mit Getriebeschaden verkaufen',
    metaDescription: 'Auto mit Getriebeschaden verkaufen in der Schweiz. Faire Bewertung, sofortige Bezahlung, kostenlose Abholung. Alle Marken willkommen.',
    heroTitle: 'Getriebeschaden Ankauf',
    heroSubtitle: 'Getriebeschaden? Kein Problem – wir kaufen Ihr Fahrzeug trotzdem.',
    icon: 'Cog',
    shortDescription: 'Fahrzeuge mit Getriebeschaden fair und schnell verkaufen.',
    longDescription: 'Ein defektes Getriebe kann schnell mehrere tausend Franken kosten. Statt in eine teure Reparatur zu investieren, können Sie Ihr Fahrzeug direkt an uns verkaufen. Wir kaufen Autos mit Getriebeschaden aller Art – ob Automatik, Schaltgetriebe oder DSG. Profitieren Sie von unserer schnellen Abwicklung und erhalten Sie sofort Ihr Geld.',
    benefits: [
      'Ankauf bei jedem Getriebeschaden',
      'Automatik, Schaltung und DSG',
      'Keine Reparaturkosten',
      'Sofortige Barauszahlung',
      'Kostenlose Abholung schweizweit',
      'Faire Marktpreise'
    ],
    process: [
      { step: 1, title: 'Kontakt', description: 'Melden Sie sich mit Ihren Fahrzeugdaten und Schadensbeschreibung.' },
      { step: 2, title: 'Bewertung', description: 'Wir ermitteln den fairen Restwert Ihres Fahrzeugs.' },
      { step: 3, title: 'Abholung', description: 'Kostenlose Abholung an Ihrem Standort.' },
      { step: 4, title: 'Auszahlung', description: 'Sofortige Bezahlung bei Übergabe.' }
    ],
    faq: [
      { question: 'Welche Getriebeschäden kaufen Sie?', answer: 'Alle Arten: defekte Automatik, kaputtes Schaltgetriebe, DSG-Probleme, Kupplungsschaden.' },
      { question: 'Ist mein Auto noch etwas wert?', answer: 'Ja! Auch mit Getriebeschaden hat Ihr Fahrzeug noch einen erheblichen Restwert.' }
    ],
    keywords: ['getriebeschaden ankauf', 'auto getriebeschaden verkaufen', 'getriebe defekt auto verkaufen'],
    category: 'zustand'
  },
  {
    slug: 'gebrauchtwagen-ankauf',
    title: 'Gebrauchtwagen Ankauf',
    metaTitle: 'Gebrauchtwagen Ankauf Schweiz | Gebrauchtes Auto verkaufen',
    metaDescription: 'Gebrauchtwagen Ankauf zum besten Preis. Alle Marken und Modelle. Sofortige Bewertung, faire Preise, schnelle Abwicklung in der ganzen Schweiz.',
    heroTitle: 'Gebrauchtwagen Ankauf',
    heroSubtitle: 'Verkaufen Sie Ihren Gebrauchtwagen schnell und zum besten Preis.',
    icon: 'Car',
    shortDescription: 'Gebrauchtwagen aller Marken schnell und fair verkaufen.',
    longDescription: 'Sie möchten Ihren Gebrauchtwagen verkaufen? Bei uns erhalten Sie den besten Preis für Ihr Fahrzeug. Wir kaufen Gebrauchtwagen aller Marken und Modelle – unabhängig von Alter, Kilometerstand oder Zustand. Unser erfahrenes Team bewertet Ihr Fahrzeug professionell und macht Ihnen ein faires Angebot. Keine langen Wartezeiten auf Privatverkäufe, keine Inserate schalten – einfach verkaufen und sofort Geld erhalten.',
    benefits: [
      'Bester Preis für Ihren Gebrauchtwagen',
      'Alle Marken und Modelle',
      'Professionelle Bewertung',
      'Sofortige Bezahlung',
      'Kostenlose Abholung',
      'Keine Inseratekosten'
    ],
    process: [
      { step: 1, title: 'Daten übermitteln', description: 'Senden Sie uns die Fahrzeugdaten über WhatsApp oder das Formular.' },
      { step: 2, title: 'Angebot erhalten', description: 'Schnelle Bewertung und faires Angebot innerhalb von 30 Minuten.' },
      { step: 3, title: 'Termin', description: 'Vereinbaren Sie einen Besichtigungstermin.' },
      { step: 4, title: 'Verkauf', description: 'Fahrzeug übergeben, sofort Geld erhalten.' }
    ],
    faq: [
      { question: 'Welche Gebrauchtwagen kaufen Sie?', answer: 'Wir kaufen alle Marken und Modelle, unabhängig von Alter und Kilometerstand.' },
      { question: 'Wie erhalte ich den besten Preis?', answer: 'Senden Sie uns möglichst viele Details und Fotos Ihres Fahrzeugs für eine genaue Bewertung.' },
      { question: 'Wie lange dauert der Verkauf?', answer: 'Der gesamte Prozess kann innerhalb eines Tages abgeschlossen werden.' }
    ],
    keywords: ['gebrauchtwagen ankauf', 'gebrauchtes auto verkaufen', 'gebrauchtwagen verkaufen schweiz'],
    category: 'ankauf'
  },
  {
    slug: 'luxusauto-ankauf',
    title: 'Luxusauto Ankauf',
    metaTitle: 'Luxusauto Ankauf Schweiz | Premium Fahrzeuge verkaufen',
    metaDescription: 'Luxusauto verkaufen zum besten Preis. Spezialisiert auf Premium-Fahrzeuge: Mercedes, BMW, Audi, Porsche. Diskrete Abwicklung, sofortige Bezahlung.',
    heroTitle: 'Luxusauto Ankauf',
    heroSubtitle: 'Premium-Service für Premium-Fahrzeuge – diskret, fair und schnell.',
    icon: 'Crown',
    shortDescription: 'Spezialisiert auf den Ankauf von Luxus- und Premium-Fahrzeugen.',
    longDescription: 'Für Luxusfahrzeuge brauchen Sie einen spezialisierten Partner. Wir sind Experten im Ankauf von Premium-Fahrzeugen und bieten Ihnen einen Service, der Ihrem Fahrzeug gerecht wird. Ob Mercedes-Benz S-Klasse, BMW 7er, Porsche 911 oder Range Rover – wir kennen den wahren Wert Ihres Fahrzeugs und bieten Ihnen einen entsprechenden Preis. Diskrete Abwicklung und professioneller Service sind bei uns selbstverständlich.',
    benefits: [
      'Spezialisierung auf Luxusfahrzeuge',
      'Marktgerechte Premium-Preise',
      'Diskrete Abwicklung',
      'Professionelle Wertermittlung',
      'VIP-Service mit Abholung',
      'Sofortige Bezahlung'
    ],
    process: [
      { step: 1, title: 'Anfrage', description: 'Kontaktieren Sie uns diskret per WhatsApp mit Fahrzeugdetails.' },
      { step: 2, title: 'Premium-Bewertung', description: 'Unsere Experten bewerten Ihr Luxusfahrzeug professionell.' },
      { step: 3, title: 'VIP-Abholung', description: 'Wir holen Ihr Fahrzeug diskret an Ihrem Wunschort ab.' },
      { step: 4, title: 'Sofortzahlung', description: 'Sofortige Bezahlung per Banküberweisung oder bar.' }
    ],
    faq: [
      { question: 'Welche Luxusmarken kaufen Sie?', answer: 'Mercedes-Benz, BMW, Audi, Porsche, Maserati, Jaguar, Land Rover, Lexus und weitere Premium-Marken.' },
      { question: 'Ist die Abwicklung diskret?', answer: 'Absolut. Wir garantieren eine vertrauliche und professionelle Abwicklung.' }
    ],
    keywords: ['luxusauto ankauf', 'premium auto verkaufen', 'luxusfahrzeug verkaufen schweiz'],
    category: 'ankauf'
  },
  {
    slug: 'firmenwagen-ankauf',
    title: 'Firmenwagen Ankauf',
    metaTitle: 'Firmenwagen Ankauf | Geschäftsfahrzeuge verkaufen Schweiz',
    metaDescription: 'Firmenwagen und Flottenfahrzeuge verkaufen. Ankauf von Geschäftsfahrzeugen aller Art. Schnelle Abwicklung, faire Preise, professioneller Service.',
    heroTitle: 'Firmenwagen Ankauf',
    heroSubtitle: 'Professioneller Ankauf von Firmen- und Flottenfahrzeugen.',
    icon: 'Building2',
    shortDescription: 'Firmen- und Flottenfahrzeuge schnell und professionell verkaufen.',
    longDescription: 'Sie möchten Ihre Firmenflotte erneuern oder einzelne Geschäftsfahrzeuge verkaufen? Wir sind Ihr professioneller Partner für den Ankauf von Firmenwagen. Ob Einzelfahrzeug oder ganze Flotte – wir bieten Ihnen faire Preise und eine schnelle, unkomplizierte Abwicklung. Profitieren Sie von unserem speziellen Service für Geschäftskunden mit individueller Betreuung und flexiblen Zahlungsmodalitäten.',
    benefits: [
      'Ankauf von Einzelfahrzeugen und Flotten',
      'Spezielle Konditionen für Geschäftskunden',
      'Professionelle Flottenabwicklung',
      'Flexible Zahlungsmodalitäten',
      'Schnelle Abwicklung',
      'Alle Fahrzeugtypen willkommen'
    ],
    process: [
      { step: 1, title: 'Flottenliste senden', description: 'Senden Sie uns eine Übersicht Ihrer Fahrzeuge.' },
      { step: 2, title: 'Gesamtangebot', description: 'Wir erstellen ein Gesamtangebot für Ihre Flotte.' },
      { step: 3, title: 'Besichtigung', description: 'Unsere Experten besichtigen die Fahrzeuge vor Ort.' },
      { step: 4, title: 'Abwicklung', description: 'Professionelle Abwicklung und sofortige Bezahlung.' }
    ],
    faq: [
      { question: 'Kaufen Sie auch Nutzfahrzeuge?', answer: 'Ja, wir kaufen PKW, Transporter, Lieferwagen und leichte Nutzfahrzeuge.' },
      { question: 'Ab wie vielen Fahrzeugen gibt es Flottenkonditionen?', answer: 'Bereits ab 3 Fahrzeugen bieten wir spezielle Flottenkonditionen.' }
    ],
    keywords: ['firmenwagen ankauf', 'flottenfahrzeuge verkaufen', 'geschäftswagen ankauf schweiz'],
    category: 'ankauf'
  },
  {
    slug: 'auto-export-deutschland',
    title: 'Auto Export nach Deutschland',
    metaTitle: 'Auto Export nach Deutschland | Fahrzeug nach Deutschland exportieren',
    metaDescription: 'Auto Export von der Schweiz nach Deutschland. Professionelle Abwicklung aller Zollformalitäten. Beste Preise für Ihr Fahrzeug.',
    heroTitle: 'Auto Export nach Deutschland',
    heroSubtitle: 'Professioneller Fahrzeugexport von der Schweiz nach Deutschland.',
    icon: 'Truck',
    shortDescription: 'Spezialisiert auf den Fahrzeugexport nach Deutschland.',
    longDescription: 'Deutschland ist einer der grössten Märkte für Schweizer Exportfahrzeuge. Wir haben uns auf den Export von Fahrzeugen nach Deutschland spezialisiert und kennen alle Zoll- und Exportvorschriften. Profitieren Sie von unserer Erfahrung und unserem Netzwerk in Deutschland. Wir kümmern uns um alle Formalitäten – von der Ausfuhrerklärung bis zur Verzollung.',
    benefits: [
      'Expertise im deutsch-schweizerischen Fahrzeughandel',
      'Komplette Zollabwicklung',
      'Netzwerk von Partnern in Deutschland',
      'Schneller Transport',
      'Alle Formalitäten inklusive',
      'Beste Preise durch direkten Marktzugang'
    ],
    process: [
      { step: 1, title: 'Anfrage', description: 'Senden Sie uns Ihre Fahrzeugdaten.' },
      { step: 2, title: 'Bewertung', description: 'Wir ermitteln den optimalen Exportpreis.' },
      { step: 3, title: 'Dokumentation', description: 'Wir bereiten alle Exportdokumente vor.' },
      { step: 4, title: 'Export', description: 'Professioneller Transport und Zollabwicklung.' }
    ],
    faq: [
      { question: 'Welche Dokumente brauche ich?', answer: 'Fahrzeugausweis und Kaufvertrag. Wir kümmern uns um den Rest.' },
      { question: 'Wie lange dauert der Export?', answer: 'In der Regel 3-5 Werktage ab Fahrzeugübergabe.' }
    ],
    keywords: ['auto export deutschland', 'fahrzeug export deutschland', 'auto schweiz nach deutschland'],
    category: 'export'
  },
  {
    slug: 'auto-export-afrika',
    title: 'Auto Export nach Afrika',
    metaTitle: 'Auto Export nach Afrika | Fahrzeuge nach Afrika exportieren',
    metaDescription: 'Professioneller Auto Export nach Afrika. Wir exportieren Fahrzeuge in verschiedene afrikanische Länder. Komplette Verschiffung und Zollabwicklung.',
    heroTitle: 'Auto Export nach Afrika',
    heroSubtitle: 'Zuverlässiger Fahrzeugexport nach Afrika mit kompletter Logistik.',
    icon: 'Ship',
    shortDescription: 'Professioneller Fahrzeugexport nach Afrika mit Verschiffung.',
    longDescription: 'Wir exportieren Fahrzeuge aus der Schweiz in verschiedene afrikanische Länder. Unser erfahrenes Team kümmert sich um die gesamte Logistik – vom Transport zum Hafen über die Verschiffung bis zur Zollabwicklung im Zielland. Wir arbeiten mit zuverlässigen Partnern in Westafrika, Ostafrika und Nordafrika zusammen.',
    benefits: [
      'Export in zahlreiche afrikanische Länder',
      'Komplette Verschiffungslogistik',
      'Zollabwicklung im Ziel- und Herkunftsland',
      'Erfahrene Partner vor Ort',
      'Container- und RoRo-Verschiffung',
      'Tracking und Versicherung'
    ],
    process: [
      { step: 1, title: 'Anfrage', description: 'Teilen Sie uns Fahrzeug und Zielland mit.' },
      { step: 2, title: 'Angebot', description: 'Wir erstellen ein Gesamtangebot inkl. Verschiffung.' },
      { step: 3, title: 'Vorbereitung', description: 'Exportdokumente und Verschiffung werden vorbereitet.' },
      { step: 4, title: 'Verschiffung', description: 'Ihr Fahrzeug wird sicher an den Zielhafen transportiert.' }
    ],
    faq: [
      { question: 'In welche Länder exportieren Sie?', answer: 'Wir exportieren in die meisten afrikanischen Länder, darunter Nigeria, Ghana, Senegal, Kamerun, Kenia und viele mehr.' },
      { question: 'Wie lange dauert die Verschiffung?', answer: 'Je nach Zielland zwischen 2-6 Wochen.' }
    ],
    keywords: ['auto export afrika', 'fahrzeug nach afrika exportieren', 'auto verschiffung afrika'],
    category: 'export'
  },
  {
    slug: 'auto-export-osteuropa',
    title: 'Auto Export nach Osteuropa',
    metaTitle: 'Auto Export Osteuropa | Fahrzeuge nach Osteuropa exportieren',
    metaDescription: 'Auto Export nach Osteuropa. Professioneller Fahrzeugexport nach Polen, Rumänien, Bulgarien, Serbien und weitere osteuropäische Länder.',
    heroTitle: 'Auto Export nach Osteuropa',
    heroSubtitle: 'Schneller und zuverlässiger Fahrzeugexport nach Osteuropa.',
    icon: 'MapPin',
    shortDescription: 'Fahrzeugexport in alle osteuropäischen Länder.',
    longDescription: 'Osteuropa ist ein wichtiger Markt für Schweizer Exportfahrzeuge. Wir exportieren Fahrzeuge nach Polen, Tschechien, Rumänien, Bulgarien, Serbien, Kroatien und weitere osteuropäische Länder. Dank unseres umfangreichen Netzwerks und unserer Erfahrung im osteuropäischen Markt können wir Ihnen die besten Preise bieten.',
    benefits: [
      'Export in alle osteuropäischen Länder',
      'Schneller Landtransport',
      'EU- und Nicht-EU-Länder',
      'Komplette Zollabwicklung',
      'Erfahrung mit lokalen Vorschriften',
      'Netzwerk von Partnern vor Ort'
    ],
    process: [
      { step: 1, title: 'Kontakt', description: 'Senden Sie uns Ihre Fahrzeugdaten und das Zielland.' },
      { step: 2, title: 'Bewertung', description: 'Wir ermitteln den besten Preis für Ihr Fahrzeug.' },
      { step: 3, title: 'Transport', description: 'Organisation des Transports nach Osteuropa.' },
      { step: 4, title: 'Abwicklung', description: 'Komplette Zoll- und Dokumentenabwicklung.' }
    ],
    faq: [
      { question: 'Welche Länder in Osteuropa?', answer: 'Polen, Tschechien, Slowakei, Ungarn, Rumänien, Bulgarien, Serbien, Kroatien, Bosnien, Kosovo, Albanien und weitere.' },
      { question: 'Wie schnell ist der Transport?', answer: 'Per LKW-Transport in der Regel 2-5 Tage je nach Zielland.' }
    ],
    keywords: ['auto export osteuropa', 'fahrzeug export polen', 'auto export rumänien', 'auto export balkan'],
    category: 'export'
  },
  {
    slug: 'mercedes-export',
    title: 'Mercedes-Benz Export & Ankauf',
    metaTitle: 'Mercedes-Benz Ankauf & Export Schweiz | Mercedes verkaufen',
    metaDescription: 'Mercedes-Benz verkaufen zum besten Preis. Spezialisiert auf alle Mercedes Modelle: A-Klasse bis S-Klasse, AMG, GLE, GLC. Sofortige Bezahlung.',
    heroTitle: 'Mercedes-Benz Ankauf & Export',
    heroSubtitle: 'Spezialisiert auf den Ankauf und Export aller Mercedes-Benz Modelle.',
    icon: 'Star',
    shortDescription: 'Alle Mercedes-Benz Modelle zum besten Preis verkaufen.',
    longDescription: 'Als Spezialist für Mercedes-Benz Fahrzeuge bieten wir Ihnen den besten Preis für Ihren Mercedes. Ob A-Klasse, C-Klasse, E-Klasse, S-Klasse, GLC, GLE oder AMG – wir kennen den Markt und wissen, was Ihr Mercedes wert ist. Profitieren Sie von unserer Expertise und unserem internationalen Netzwerk für Mercedes-Benz Fahrzeuge.',
    benefits: [
      'Expertise für alle Mercedes-Benz Modelle',
      'Beste Preise durch internationales Netzwerk',
      'Auch AMG und Sondermodelle',
      'Sofortige Bezahlung',
      'Kostenlose Bewertung',
      'Alle Baujahre willkommen'
    ],
    process: [
      { step: 1, title: 'Mercedes-Daten senden', description: 'Modell, Baujahr, Ausstattung und Kilometerstand mitteilen.' },
      { step: 2, title: 'Expertenbewertung', description: 'Unsere Mercedes-Spezialisten bewerten Ihr Fahrzeug.' },
      { step: 3, title: 'Besichtigung', description: 'Kurze Besichtigung vor Ort oder bei uns.' },
      { step: 4, title: 'Verkauf', description: 'Sofortige Bezahlung und Fahrzeugübergabe.' }
    ],
    faq: [
      { question: 'Welche Mercedes Modelle kaufen Sie?', answer: 'Alle Modelle: A-, B-, C-, E-, S-Klasse, CLA, CLS, GLA, GLB, GLC, GLE, GLS, G-Klasse, AMG, EQ-Modelle und mehr.' },
      { question: 'Kaufen Sie auch ältere Mercedes?', answer: 'Ja, wir kaufen Mercedes aller Baujahre – auch Oldtimer und Youngtimer.' }
    ],
    keywords: ['mercedes ankauf', 'mercedes verkaufen', 'mercedes export schweiz', 'mercedes-benz ankauf'],
    category: 'marke'
  },
  {
    slug: 'bmw-export',
    title: 'BMW Export & Ankauf',
    metaTitle: 'BMW Ankauf & Export Schweiz | BMW verkaufen zum besten Preis',
    metaDescription: 'BMW verkaufen zum besten Preis. Alle BMW Modelle: 1er bis 8er, X-Modelle, M-Modelle. Sofortige Barauszahlung, kostenlose Bewertung.',
    heroTitle: 'BMW Ankauf & Export',
    heroSubtitle: 'Ihr BMW verdient den besten Preis – wir sind BMW-Spezialisten.',
    icon: 'Star',
    shortDescription: 'BMW aller Modelle und Baujahre zum Top-Preis verkaufen.',
    longDescription: 'BMW Fahrzeuge sind weltweit gefragt – und genau das ist Ihr Vorteil. Als BMW-Spezialisten bieten wir Ihnen Preise, die den internationalen Marktwert Ihres Fahrzeugs widerspiegeln. Ob 3er, 5er, X3, X5 oder M-Modell – wir kaufen alle BMW Modelle und exportieren sie in Märkte, wo sie besonders gefragt sind.',
    benefits: [
      'BMW-Spezialisten mit Marktkenntnissen',
      'Internationale Preise für Ihren BMW',
      'Alle Modelle und Baureihen',
      'M-Modelle und Sonderausstattungen',
      'Sofortige Bezahlung',
      'Kostenlose Bewertung und Abholung'
    ],
    process: [
      { step: 1, title: 'BMW-Details senden', description: 'Modell, Baureihe, Ausstattung und Zustand mitteilen.' },
      { step: 2, title: 'Bewertung', description: 'Unsere BMW-Experten erstellen eine marktgerechte Bewertung.' },
      { step: 3, title: 'Besichtigung', description: 'Kurze Besichtigung zur Bestätigung des Angebots.' },
      { step: 4, title: 'Verkauf', description: 'Sofortige Bezahlung bei Fahrzeugübergabe.' }
    ],
    faq: [
      { question: 'Welche BMW Modelle kaufen Sie?', answer: 'Alle: 1er bis 8er, X1 bis X7, Z4, M2 bis M8, i-Modelle und mehr.' },
      { question: 'Kaufen Sie auch BMW mit hohem Kilometerstand?', answer: 'Ja, BMW Fahrzeuge sind auch mit höherem Kilometerstand international gefragt.' }
    ],
    keywords: ['bmw ankauf', 'bmw verkaufen', 'bmw export schweiz', 'bmw ankauf schweiz'],
    category: 'marke'
  },
  {
    slug: 'audi-export',
    title: 'Audi Export & Ankauf',
    metaTitle: 'Audi Ankauf & Export Schweiz | Audi verkaufen',
    metaDescription: 'Audi verkaufen zum besten Preis. Alle Audi Modelle: A1 bis A8, Q-Modelle, RS und S-Line. Sofortige Bezahlung in der ganzen Schweiz.',
    heroTitle: 'Audi Ankauf & Export',
    heroSubtitle: 'Vorsprung durch faire Preise – Ihr Audi ist bei uns in besten Händen.',
    icon: 'Star',
    shortDescription: 'Audi aller Modelle zum besten Preis verkaufen und exportieren.',
    longDescription: 'Audi Fahrzeuge gehören zu den gefragtesten Marken im internationalen Markt. Wir kaufen alle Audi Modelle – von A1 bis A8, alle Q-Modelle sowie RS und S-Line Varianten. Dank unseres internationalen Netzwerks können wir Ihnen Preise bieten, die über dem lokalen Marktwert liegen.',
    benefits: [
      'Alle Audi Modelle willkommen',
      'RS und S-Line Expertise',
      'Internationale Marktpreise',
      'Quattro-Modelle besonders gefragt',
      'Sofortige Bezahlung',
      'Kostenlose Bewertung'
    ],
    process: [
      { step: 1, title: 'Audi-Daten senden', description: 'Modell, Motorisierung, Ausstattung mitteilen.' },
      { step: 2, title: 'Angebot', description: 'Schnelles und faires Angebot von unseren Audi-Experten.' },
      { step: 3, title: 'Besichtigung', description: 'Unkomplizierte Besichtigung vor Ort.' },
      { step: 4, title: 'Verkauf', description: 'Sofortige Bezahlung und Abwicklung.' }
    ],
    faq: [
      { question: 'Welche Audi kaufen Sie?', answer: 'Alle Modelle: A1-A8, Q2-Q8, TT, R8, RS und S-Modelle.' },
      { question: 'Sind Quattro-Modelle mehr wert?', answer: 'Ja, Audi Quattro-Modelle sind international besonders gefragt und erzielen höhere Preise.' }
    ],
    keywords: ['audi ankauf', 'audi verkaufen', 'audi export schweiz'],
    category: 'marke'
  },
  {
    slug: 'vw-export',
    title: 'VW Export & Ankauf',
    metaTitle: 'VW Ankauf & Export Schweiz | Volkswagen verkaufen',
    metaDescription: 'Volkswagen verkaufen zum besten Preis. Alle VW Modelle: Golf, Passat, Tiguan, T-Roc, ID-Modelle. Sofortige Bezahlung schweizweit.',
    heroTitle: 'VW Ankauf & Export',
    heroSubtitle: 'Volkswagen verkaufen leicht gemacht – faire Preise für alle VW Modelle.',
    icon: 'Star',
    shortDescription: 'Volkswagen aller Modelle fair und schnell verkaufen.',
    longDescription: 'Volkswagen ist die meistverkaufte Marke in der Schweiz – und auch international sehr gefragt. Wir kaufen alle VW Modelle zum besten Preis. Ob Golf, Passat, Tiguan, T-Roc oder die neuen ID-Modelle – bei uns erhalten Sie ein faires Angebot und eine schnelle Abwicklung.',
    benefits: [
      'Alle VW Modelle willkommen',
      'Golf, Passat, Tiguan und mehr',
      'Auch ID-Elektromodelle',
      'Nutzfahrzeuge (Caddy, Transporter, Multivan)',
      'Sofortige Bezahlung',
      'Schweizweiter Service'
    ],
    process: [
      { step: 1, title: 'VW-Daten senden', description: 'Modell, Baujahr und Zustand mitteilen.' },
      { step: 2, title: 'Bewertung', description: 'Schnelle und faire Bewertung Ihres VW.' },
      { step: 3, title: 'Termin', description: 'Besichtigung an Ihrem Wunschort.' },
      { step: 4, title: 'Verkauf', description: 'Sofortige Bezahlung bei Übergabe.' }
    ],
    faq: [
      { question: 'Kaufen Sie auch VW Nutzfahrzeuge?', answer: 'Ja, wir kaufen auch Caddy, Transporter, Multivan, Crafter und Amarok.' },
      { question: 'Sind VW GTI/R-Modelle mehr wert?', answer: 'Ja, sportliche VW Modelle wie GTI, R und R-Line erzielen höhere Preise.' }
    ],
    keywords: ['vw ankauf', 'volkswagen verkaufen', 'vw export schweiz', 'vw golf verkaufen'],
    category: 'marke'
  },
  {
    slug: 'auto-bewertung',
    title: 'Kostenlose Auto Bewertung',
    metaTitle: 'Kostenlose Auto Bewertung Schweiz | Fahrzeugwert ermitteln',
    metaDescription: 'Kostenlose Auto Bewertung in 30 Minuten. Erfahren Sie den aktuellen Marktwert Ihres Fahrzeugs. Unverbindlich und professionell.',
    heroTitle: 'Kostenlose Auto Bewertung',
    heroSubtitle: 'Erfahren Sie in 30 Minuten, was Ihr Auto wirklich wert ist.',
    icon: 'Calculator',
    shortDescription: 'Professionelle Fahrzeugbewertung – kostenlos und unverbindlich.',
    longDescription: 'Sie möchten wissen, was Ihr Auto wert ist? Unsere professionelle Fahrzeugbewertung gibt Ihnen Klarheit. Basierend auf aktuellen Marktdaten, Zustand und Ausstattung Ihres Fahrzeugs ermitteln wir den realistischen Marktwert. Die Bewertung ist komplett kostenlos und unverbindlich – Sie entscheiden danach, ob Sie verkaufen möchten.',
    benefits: [
      '100% kostenlos und unverbindlich',
      'Bewertung in 30 Minuten',
      'Basierend auf aktuellen Marktdaten',
      'Professionelle Einschätzung',
      'Alle Marken und Modelle',
      'Keine Verpflichtung zum Verkauf'
    ],
    process: [
      { step: 1, title: 'Daten senden', description: 'Marke, Modell, Baujahr, Kilometerstand und Fotos senden.' },
      { step: 2, title: 'Analyse', description: 'Unsere Experten analysieren den aktuellen Marktwert.' },
      { step: 3, title: 'Bewertung erhalten', description: 'Sie erhalten eine detaillierte Bewertung per WhatsApp.' },
      { step: 4, title: 'Entscheidung', description: 'Sie entscheiden frei, ob Sie verkaufen möchten.' }
    ],
    faq: [
      { question: 'Ist die Bewertung wirklich kostenlos?', answer: 'Ja, komplett kostenlos und ohne jede Verpflichtung.' },
      { question: 'Wie genau ist die Bewertung?', answer: 'Unsere Bewertungen basieren auf aktuellen Marktdaten und langjähriger Erfahrung.' },
      { question: 'Muss ich danach verkaufen?', answer: 'Nein, die Bewertung ist völlig unverbindlich.' }
    ],
    keywords: ['auto bewertung', 'fahrzeug bewertung kostenlos', 'auto wert ermitteln', 'was ist mein auto wert'],
    category: 'ankauf'
  }
];

export const getServiceBySlug = (slug: string): ServicePage | undefined => {
  return services.find(s => s.slug === slug);
};

export const getServicesByCategory = (category: ServicePage['category']): ServicePage[] => {
  return services.filter(s => s.category === category);
};
