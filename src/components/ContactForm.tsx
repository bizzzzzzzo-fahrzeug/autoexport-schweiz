import React, { useState, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, Shield, AlertTriangle, CheckCircle, Loader2 } from 'lucide-react';
import { carBrands, years, fuelTypes, transmissionTypes, vehicleConditions, mileageRanges } from '@/data/carData';
import { supabase } from '@/lib/supabase';
import {
  contactFormSchema,
  type ContactFormData,
  buildWhatsAppMessage,
  getWhatsAppUrl,
  checkRateLimit,
  sanitizeInput,
  setFormLoadTime,
  checkFormTiming,
} from '@/lib/validation';

interface ContactFormProps {
  preselectedBrand?: string;
  preselectedService?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ preselectedBrand, preselectedService }) => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'ratelimited' | 'bot'>('idle');
  const [selectedBrand, setSelectedBrand] = useState(preselectedBrand || '');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      vorname: '',
      nachname: '',
      telefon: '',
      email: '',
      plz: '',
      ort: '',
      marke: preselectedBrand || '',
      modell: '',
      jahrgang: '',
      kilometerstand: '',
      treibstoff: '',
      getriebe: '',
      zustand: '',
      farbe: '',
      bemerkungen: preselectedService ? `Anfrage über: ${preselectedService}` : '',
      website: '',
    },
  });

  const watchedBrand = watch('marke');

  useEffect(() => {
    setFormLoadTime();
  }, []);

  useEffect(() => {
    if (watchedBrand !== selectedBrand) {
      setSelectedBrand(watchedBrand);
      setValue('modell', '');
    }
  }, [watchedBrand, selectedBrand, setValue]);

  const availableModels = useMemo(() => {
    const brand = carBrands.find(b => b.name === selectedBrand);
    return brand ? brand.models : [];
  }, [selectedBrand]);

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot
    if (data.website && data.website.length > 0) {
      setSubmitStatus('bot');
      return;
    }

    // Check timing (bot detection)
    if (!checkFormTiming()) {
      setSubmitStatus('bot');
      return;
    }

    // Check rate limit
    if (!checkRateLimit()) {
      setSubmitStatus('ratelimited');
      return;
    }

    setSubmitStatus('loading');

    // Sanitize all inputs
    const sanitized: ContactFormData = {
      ...data,
      vorname: sanitizeInput(data.vorname),
      nachname: sanitizeInput(data.nachname),
      telefon: sanitizeInput(data.telefon),
      email: data.email ? sanitizeInput(data.email) : '',
      plz: sanitizeInput(data.plz),
      ort: sanitizeInput(data.ort),
      marke: sanitizeInput(data.marke),
      modell: sanitizeInput(data.modell),
      jahrgang: sanitizeInput(data.jahrgang),
      kilometerstand: sanitizeInput(data.kilometerstand),
      treibstoff: sanitizeInput(data.treibstoff),
      getriebe: sanitizeInput(data.getriebe),
      zustand: sanitizeInput(data.zustand),
      farbe: data.farbe ? sanitizeInput(data.farbe) : '',
      bemerkungen: data.bemerkungen ? sanitizeInput(data.bemerkungen) : '',
      website: '',
    };

    // Save lead to Supabase database
    try {
      await supabase.from('leads').insert({
        vorname: sanitized.vorname,
        nachname: sanitized.nachname,
        telefon: sanitized.telefon,
        email: sanitized.email || null,
        plz: sanitized.plz,
        ort: sanitized.ort,
        marke: sanitized.marke,
        modell: sanitized.modell,
        jahrgang: sanitized.jahrgang,
        kilometerstand: sanitized.kilometerstand,
        treibstoff: sanitized.treibstoff,
        getriebe: sanitized.getriebe,
        zustand: sanitized.zustand,
        farbe: sanitized.farbe || null,
        bemerkungen: sanitized.bemerkungen || null,
        service_page: preselectedService || null,
        status: 'neu',
      });
    } catch (e) {
      // Don't block WhatsApp redirect if DB save fails
      console.error('Lead save error:', e);
    }

    // Build WhatsApp message and redirect
    const message = buildWhatsAppMessage(sanitized);
    const url = getWhatsAppUrl(message);

    setTimeout(() => {
      setSubmitStatus('success');
      window.open(url, '_blank');
    }, 600);
  };

  const selectClasses = "w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none";
  const inputClasses = "w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all";
  const labelClasses = "block text-sm font-medium text-slate-700 mb-1.5";
  const errorClasses = "text-xs text-red-500 mt-1";

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-5">
        <h3 className="text-xl font-bold text-white">Fahrzeug verkaufen</h3>
        <p className="text-blue-100 text-sm mt-1">Füllen Sie das Formular aus – Ihre Daten werden direkt an WhatsApp weitergeleitet.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6" noValidate>
        {/* Honeypot */}
        <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden="true" tabIndex={-1}>
          <label htmlFor="website">Website (leave empty)</label>
          <input type="text" id="website" autoComplete="off" tabIndex={-1} {...register('website')} />
        </div>

        {/* Personal info */}
        <div>
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">1</div>
            Persönliche Angaben
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClasses}>Vorname *</label>
              <input type="text" className={inputClasses} placeholder="Ihr Vorname" {...register('vorname')} />
              {errors.vorname && <p className={errorClasses}>{errors.vorname.message}</p>}
            </div>
            <div>
              <label className={labelClasses}>Nachname *</label>
              <input type="text" className={inputClasses} placeholder="Ihr Nachname" {...register('nachname')} />
              {errors.nachname && <p className={errorClasses}>{errors.nachname.message}</p>}
            </div>
            <div>
              <label className={labelClasses}>Telefon *</label>
              <input type="tel" className={inputClasses} placeholder="+41 79 000 00 00" {...register('telefon')} />
              {errors.telefon && <p className={errorClasses}>{errors.telefon.message}</p>}
            </div>
            <div>
              <label className={labelClasses}>E-Mail (optional)</label>
              <input type="email" className={inputClasses} placeholder="ihre@email.ch" {...register('email')} />
              {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
            </div>
            <div>
              <label className={labelClasses}>PLZ *</label>
              <input type="text" className={inputClasses} placeholder="8000" {...register('plz')} />
              {errors.plz && <p className={errorClasses}>{errors.plz.message}</p>}
            </div>
            <div>
              <label className={labelClasses}>Ort *</label>
              <input type="text" className={inputClasses} placeholder="Zürich" {...register('ort')} />
              {errors.ort && <p className={errorClasses}>{errors.ort.message}</p>}
            </div>
          </div>
        </div>

        {/* Vehicle info */}
        <div>
          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">2</div>
            Fahrzeugdaten
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClasses}>Marke *</label>
              <select className={selectClasses} {...register('marke')}>
                <option value="">Marke wählen...</option>
                {carBrands.map(brand => (
                  <option key={brand.name} value={brand.name}>{brand.name}</option>
                ))}
              </select>
              {errors.marke && <p className={errorClasses}>{errors.marke.message}</p>}
            </div>
            <div>
              <label className={labelClasses}>Modell *</label>
              <select className={selectClasses} {...register('modell')} disabled={!selectedBrand}>
                <option value="">{selectedBrand ? 'Modell wählen...' : 'Zuerst Marke wählen'}</option>
                {availableModels.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
              {errors.modell && <p className={errorClasses}>{errors.modell.message}</p>}
            </div>
            <div>
              <label className={labelClasses}>Jahrgang *</label>
              <select className={selectClasses} {...register('jahrgang')}>
                <option value="">Jahrgang wählen...</option>
                {years.map(year => (
                  <option key={year} value={year.toString()}>{year}</option>
                ))}
              </select>
              {errors.jahrgang && <p className={errorClasses}>{errors.jahrgang.message}</p>}
            </div>
            <div>
              <label className={labelClasses}>Kilometerstand *</label>
              <select className={selectClasses} {...register('kilometerstand')}>
                <option value="">Kilometerstand wählen...</option>
                {mileageRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
              {errors.kilometerstand && <p className={errorClasses}>{errors.kilometerstand.message}</p>}
            </div>
            <div>
              <label className={labelClasses}>Treibstoff *</label>
              <select className={selectClasses} {...register('treibstoff')}>
                <option value="">Treibstoff wählen...</option>
                {fuelTypes.map(fuel => (
                  <option key={fuel} value={fuel}>{fuel}</option>
                ))}
              </select>
              {errors.treibstoff && <p className={errorClasses}>{errors.treibstoff.message}</p>}
            </div>
            <div>
              <label className={labelClasses}>Getriebe *</label>
              <select className={selectClasses} {...register('getriebe')}>
                <option value="">Getriebe wählen...</option>
                {transmissionTypes.map(trans => (
                  <option key={trans} value={trans}>{trans}</option>
                ))}
              </select>
              {errors.getriebe && <p className={errorClasses}>{errors.getriebe.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <label className={labelClasses}>Fahrzeugzustand *</label>
              <select className={selectClasses} {...register('zustand')}>
                <option value="">Zustand wählen...</option>
                {vehicleConditions.map(cond => (
                  <option key={cond} value={cond}>{cond}</option>
                ))}
              </select>
              {errors.zustand && <p className={errorClasses}>{errors.zustand.message}</p>}
            </div>
            <div>
              <label className={labelClasses}>Farbe (optional)</label>
              <input type="text" className={inputClasses} placeholder="z.B. Schwarz Metallic" {...register('farbe')} />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClasses}>Bemerkungen (optional)</label>
              <textarea className={`${inputClasses} min-h-[100px] resize-y`} placeholder="Weitere Angaben zum Fahrzeug (Ausstattung, Schäden, etc.)" {...register('bemerkungen')} />
              {errors.bemerkungen && <p className={errorClasses}>{errors.bemerkungen.message}</p>}
            </div>
          </div>
        </div>

        {/* Security notice */}
        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
          <Shield className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-slate-700">Ihre Daten sind sicher</p>
            <p className="text-xs text-slate-500 mt-0.5">Ihre Angaben werden verschlüsselt übertragen und sicher gespeichert.</p>
          </div>
        </div>

        {/* Submit */}
        {submitStatus === 'success' ? (
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-200">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <div>
              <p className="font-medium text-green-800">Anfrage gespeichert & an WhatsApp gesendet!</p>
              <p className="text-sm text-green-600">Falls sich WhatsApp nicht geöffnet hat, <a href={getWhatsAppUrl(buildWhatsAppMessage(watch() as ContactFormData))} target="_blank" rel="noopener noreferrer" className="underline font-medium">klicken Sie hier</a>.</p>
            </div>
          </div>
        ) : submitStatus === 'ratelimited' ? (
          <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
            <AlertTriangle className="w-6 h-6 text-amber-500" />
            <div>
              <p className="font-medium text-amber-800">Zu viele Anfragen</p>
              <p className="text-sm text-amber-600">Bitte warten Sie einen Moment, bevor Sie erneut senden.</p>
            </div>
          </div>
        ) : submitStatus === 'bot' ? (
          <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <div>
              <p className="font-medium text-red-800">Fehler bei der Übermittlung</p>
              <p className="text-sm text-red-600">Bitte versuchen Sie es erneut.</p>
            </div>
          </div>
        ) : (
          <button
            type="submit"
            disabled={submitStatus === 'loading'}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitStatus === 'loading' ? (
              <><Loader2 className="w-5 h-5 animate-spin" /> Wird gesendet...</>
            ) : (
              <><Send className="w-5 h-5" /> Per WhatsApp senden</>
            )}
          </button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
