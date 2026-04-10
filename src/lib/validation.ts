import { z } from 'zod';

// Zod validation schema for the contact form
export const contactFormSchema = z.object({
  // Personal info
  vorname: z.string()
    .min(2, 'Vorname muss mindestens 2 Zeichen haben')
    .max(50, 'Vorname darf maximal 50 Zeichen haben')
    .regex(/^[a-zA-ZäöüÄÖÜéèêàâîïôùûçß\s'-]+$/, 'Ungültiger Vorname'),
  nachname: z.string()
    .min(2, 'Nachname muss mindestens 2 Zeichen haben')
    .max(50, 'Nachname darf maximal 50 Zeichen haben')
    .regex(/^[a-zA-ZäöüÄÖÜéèêàâîïôùûçß\s'-]+$/, 'Ungültiger Nachname'),
  telefon: z.string()
    .min(10, 'Telefonnummer muss mindestens 10 Zeichen haben')
    .max(20, 'Telefonnummer darf maximal 20 Zeichen haben')
    .regex(/^[\d\s+()-]+$/, 'Ungültige Telefonnummer'),
  email: z.string()
    .email('Ungültige E-Mail-Adresse')
    .optional()
    .or(z.literal('')),
  plz: z.string()
    .min(4, 'PLZ muss mindestens 4 Zeichen haben')
    .max(6, 'PLZ darf maximal 6 Zeichen haben')
    .regex(/^\d{4,6}$/, 'Ungültige PLZ'),
  ort: z.string()
    .min(2, 'Ort muss mindestens 2 Zeichen haben')
    .max(50, 'Ort darf maximal 50 Zeichen haben'),

  // Vehicle info
  marke: z.string().min(1, 'Bitte wählen Sie eine Marke'),
  modell: z.string().min(1, 'Bitte wählen Sie ein Modell'),
  jahrgang: z.string().min(1, 'Bitte wählen Sie einen Jahrgang'),
  kilometerstand: z.string().min(1, 'Bitte wählen Sie den Kilometerstand'),
  treibstoff: z.string().min(1, 'Bitte wählen Sie den Treibstoff'),
  getriebe: z.string().min(1, 'Bitte wählen Sie das Getriebe'),
  zustand: z.string().min(1, 'Bitte wählen Sie den Zustand'),
  farbe: z.string().optional().or(z.literal('')),
  bemerkungen: z.string()
    .max(1000, 'Bemerkungen dürfen maximal 1000 Zeichen haben')
    .optional()
    .or(z.literal('')),

  // Honeypot - must be empty
  website: z.string().max(0, 'Bot detected'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Rate limiting utility
const submissionTimestamps: number[] = [];
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_SUBMISSIONS = 3;

export function checkRateLimit(): boolean {
  const now = Date.now();
  // Remove old timestamps
  while (submissionTimestamps.length > 0 && submissionTimestamps[0] < now - RATE_LIMIT_WINDOW) {
    submissionTimestamps.shift();
  }
  if (submissionTimestamps.length >= MAX_SUBMISSIONS) {
    return false; // Rate limited
  }
  submissionTimestamps.push(now);
  return true;
}

// Sanitize input to prevent XSS
export function sanitizeInput(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
}

// Build WhatsApp message from form data
export function buildWhatsAppMessage(data: ContactFormData): string {
  const lines = [
    `Hallo, ich möchte mein Auto verkaufen/exportieren:`,
    ``,
    `--- Persönliche Daten ---`,
    `Name: ${data.vorname} ${data.nachname}`,
    `Telefon: ${data.telefon}`,
    data.email ? `E-Mail: ${data.email}` : '',
    `PLZ/Ort: ${data.plz} ${data.ort}`,
    ``,
    `--- Fahrzeugdaten ---`,
    `Marke: ${data.marke}`,
    `Modell: ${data.modell}`,
    `Jahrgang: ${data.jahrgang}`,
    `Kilometerstand: ${data.kilometerstand}`,
    `Treibstoff: ${data.treibstoff}`,
    `Getriebe: ${data.getriebe}`,
    `Zustand: ${data.zustand}`,
    data.farbe ? `Farbe: ${data.farbe}` : '',
    data.bemerkungen ? `\nBemerkungen: ${data.bemerkungen}` : '',
    ``,
    `Bitte kontaktieren Sie mich für ein Angebot.`
  ].filter(Boolean).join('\n');

  return lines;
}

export function getWhatsAppUrl(message: string): string {
  const phone = '41799157464';
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

// Time-based bot detection: form must take at least 5 seconds to fill
let formLoadTime = 0;

export function setFormLoadTime(): void {
  formLoadTime = Date.now();
}

export function checkFormTiming(): boolean {
  if (formLoadTime === 0) return false;
  const elapsed = Date.now() - formLoadTime;
  return elapsed > 5000; // Must take at least 5 seconds
}
