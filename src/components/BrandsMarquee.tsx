import React from 'react';

const brands = [
  'Mercedes-Benz', 'BMW', 'Audi', 'Volkswagen', 'Porsche', 'Volvo',
  'Toyota', 'Honda', 'Nissan', 'Hyundai', 'Kia', 'Ford',
  'Opel', 'Peugeot', 'Renault', 'Citroën', 'Fiat', 'Alfa Romeo',
  'Jaguar', 'Land Rover', 'Maserati', 'Lexus', 'Tesla', 'Škoda',
  'Seat', 'Dacia', 'Mazda', 'Subaru', 'Suzuki', 'Mini',
  'Jeep', 'Dodge', 'Chevrolet', 'Smart', 'Mitsubishi', 'Chrysler',
];

const BrandsMarquee: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-wider">
          Wir kaufen alle Marken
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex animate-marquee">
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex-shrink-0 px-6 py-3 mx-2 bg-slate-50 rounded-xl border border-slate-100">
              <span className="text-sm font-semibold text-slate-600 whitespace-nowrap">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsMarquee;
