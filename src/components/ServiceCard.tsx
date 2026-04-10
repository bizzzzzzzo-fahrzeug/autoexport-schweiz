import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, HandCoins, ShieldAlert, Wrench, Cog, Car, Crown, Building2, Truck, Ship, MapPin, Star, Calculator } from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Globe, HandCoins, ShieldAlert, Wrench, Cog, Car, Crown, Building2, Truck, Ship, MapPin, Star, Calculator,
};

interface ServiceCardProps {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  category: string;
}

const categoryColors: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  export: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', badge: 'bg-emerald-100 text-emerald-700' },
  ankauf: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', badge: 'bg-blue-100 text-blue-700' },
  zustand: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', badge: 'bg-amber-100 text-amber-700' },
  marke: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100', badge: 'bg-purple-100 text-purple-700' },
};

const categoryLabels: Record<string, string> = {
  export: 'Export',
  ankauf: 'Ankauf',
  zustand: 'Zustand',
  marke: 'Marke',
};

const ServiceCard: React.FC<ServiceCardProps> = ({ slug, title, shortDescription, icon, category }) => {
  const IconComponent = iconMap[icon] || Car;
  const colors = categoryColors[category] || categoryColors.ankauf;

  return (
    <Link
      to={`/service/${slug}`}
      className="group block bg-white rounded-2xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <IconComponent className={`w-6 h-6 ${colors.text}`} />
          </div>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge}`}>
            {categoryLabels[category]}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-4">
          {shortDescription}
        </p>
        <div className="flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:gap-2 transition-all">
          Mehr erfahren
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
