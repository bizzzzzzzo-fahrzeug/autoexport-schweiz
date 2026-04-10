export interface CarBrand {
  name: string;
  models: string[];
}

export const carBrands: CarBrand[] = [
  {
    name: 'Alfa Romeo',
    models: ['Giulia', 'Stelvio', 'Tonale', 'Giulietta', 'MiTo', '4C', '159', '156', '147', 'Brera', 'Spider', 'GT']
  },
  {
    name: 'Audi',
    models: ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8', 'e-tron', 'e-tron GT', 'RS3', 'RS4', 'RS5', 'RS6', 'RS7', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'TT', 'R8']
  },
  {
    name: 'BMW',
    models: ['1er', '2er', '3er', '4er', '5er', '6er', '7er', '8er', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4', 'i3', 'i4', 'i7', 'iX', 'iX1', 'iX3', 'M2', 'M3', 'M4', 'M5', 'M8']
  },
  {
    name: 'Chevrolet',
    models: ['Camaro', 'Corvette', 'Cruze', 'Malibu', 'Spark', 'Trax', 'Equinox', 'Tahoe', 'Suburban', 'Silverado']
  },
  {
    name: 'Chrysler',
    models: ['300', 'Pacifica', 'Voyager', 'PT Cruiser', 'Sebring']
  },
  {
    name: 'Citroën',
    models: ['C1', 'C3', 'C3 Aircross', 'C4', 'C4 Cactus', 'C5', 'C5 Aircross', 'C5 X', 'Berlingo', 'SpaceTourer', 'DS3', 'DS4', 'DS5', 'DS7']
  },
  {
    name: 'Dacia',
    models: ['Duster', 'Sandero', 'Logan', 'Spring', 'Jogger', 'Dokker', 'Lodgy']
  },
  {
    name: 'Dodge',
    models: ['Challenger', 'Charger', 'Durango', 'Ram', 'Journey', 'Nitro', 'Viper']
  },
  {
    name: 'Fiat',
    models: ['500', '500X', '500L', '500e', 'Panda', 'Tipo', 'Punto', 'Doblo', 'Ducato', 'Freemont', 'Bravo', '124 Spider']
  },
  {
    name: 'Ford',
    models: ['Fiesta', 'Focus', 'Mondeo', 'Mustang', 'Kuga', 'Puma', 'EcoSport', 'Explorer', 'Edge', 'Galaxy', 'S-Max', 'Ranger', 'Transit', 'Tourneo', 'Mustang Mach-E']
  },
  {
    name: 'Honda',
    models: ['Civic', 'Accord', 'CR-V', 'HR-V', 'Jazz', 'e', 'ZR-V', 'CR-Z', 'Insight', 'Legend', 'NSX', 'S2000']
  },
  {
    name: 'Hyundai',
    models: ['i10', 'i20', 'i30', 'i40', 'Ioniq', 'Ioniq 5', 'Ioniq 6', 'Kona', 'Tucson', 'Santa Fe', 'Bayon', 'Nexo', 'Veloster', 'Genesis']
  },
  {
    name: 'Jaguar',
    models: ['XE', 'XF', 'XJ', 'F-Type', 'F-Pace', 'E-Pace', 'I-Pace']
  },
  {
    name: 'Jeep',
    models: ['Renegade', 'Compass', 'Cherokee', 'Grand Cherokee', 'Wrangler', 'Gladiator', 'Avenger', 'Commander']
  },
  {
    name: 'Kia',
    models: ['Picanto', 'Rio', 'Ceed', 'ProCeed', 'Optima', 'Stinger', 'Niro', 'EV6', 'Sportage', 'Sorento', 'Soul', 'Stonic', 'XCeed', 'Carnival']
  },
  {
    name: 'Land Rover',
    models: ['Defender', 'Discovery', 'Discovery Sport', 'Range Rover', 'Range Rover Sport', 'Range Rover Velar', 'Range Rover Evoque', 'Freelander']
  },
  {
    name: 'Lexus',
    models: ['CT', 'IS', 'ES', 'GS', 'LS', 'RC', 'LC', 'UX', 'NX', 'RX', 'GX', 'LX', 'LBX']
  },
  {
    name: 'Maserati',
    models: ['Ghibli', 'Quattroporte', 'Levante', 'MC20', 'GranTurismo', 'GranCabrio', 'Grecale']
  },
  {
    name: 'Mazda',
    models: ['Mazda2', 'Mazda3', 'Mazda6', 'CX-3', 'CX-30', 'CX-5', 'CX-60', 'MX-5', 'MX-30']
  },
  {
    name: 'Mercedes-Benz',
    models: ['A-Klasse', 'B-Klasse', 'C-Klasse', 'E-Klasse', 'S-Klasse', 'CLA', 'CLS', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'G-Klasse', 'EQA', 'EQB', 'EQC', 'EQE', 'EQS', 'AMG GT', 'SL', 'SLC', 'V-Klasse', 'Vito', 'Sprinter']
  },
  {
    name: 'Mini',
    models: ['Mini 3-Türer', 'Mini 5-Türer', 'Mini Cabrio', 'Mini Clubman', 'Mini Countryman', 'Mini Paceman', 'Mini Coupé', 'Mini John Cooper Works']
  },
  {
    name: 'Mitsubishi',
    models: ['Space Star', 'ASX', 'Eclipse Cross', 'Outlander', 'L200', 'Pajero', 'Colt', 'Lancer']
  },
  {
    name: 'Nissan',
    models: ['Micra', 'Note', 'Pulsar', 'Leaf', 'Ariya', 'Juke', 'Qashqai', 'X-Trail', 'Navara', 'Pathfinder', '370Z', 'GT-R']
  },
  {
    name: 'Opel',
    models: ['Corsa', 'Astra', 'Insignia', 'Mokka', 'Crossland', 'Grandland', 'Zafira', 'Combo', 'Vivaro', 'Movano', 'Adam', 'Karl']
  },
  {
    name: 'Peugeot',
    models: ['108', '208', '308', '408', '508', '2008', '3008', '5008', 'Rifter', 'Traveller', 'Partner', 'Expert', 'e-208', 'e-2008', 'e-308']
  },
  {
    name: 'Porsche',
    models: ['911', '718 Boxster', '718 Cayman', 'Panamera', 'Cayenne', 'Macan', 'Taycan']
  },
  {
    name: 'Renault',
    models: ['Clio', 'Megane', 'Scenic', 'Talisman', 'Captur', 'Kadjar', 'Koleos', 'Arkana', 'Twingo', 'Zoe', 'Kangoo', 'Trafic', 'Master', 'Espace', 'Austral', 'Megane E-Tech']
  },
  {
    name: 'Seat',
    models: ['Ibiza', 'Leon', 'Arona', 'Ateca', 'Tarraco', 'Alhambra', 'Mii', 'Toledo']
  },
  {
    name: 'Škoda',
    models: ['Fabia', 'Scala', 'Octavia', 'Superb', 'Kamiq', 'Karoq', 'Kodiaq', 'Enyaq', 'Citigo', 'Rapid', 'Yeti', 'Roomster']
  },
  {
    name: 'Smart',
    models: ['ForTwo', 'ForFour', 'Roadster', '#1', '#3']
  },
  {
    name: 'Subaru',
    models: ['Impreza', 'XV', 'Forester', 'Outback', 'Legacy', 'Levorg', 'BRZ', 'WRX', 'Solterra']
  },
  {
    name: 'Suzuki',
    models: ['Swift', 'Ignis', 'Baleno', 'Vitara', 'S-Cross', 'Jimny', 'SX4', 'Across', 'Swace']
  },
  {
    name: 'Tesla',
    models: ['Model 3', 'Model S', 'Model X', 'Model Y', 'Cybertruck', 'Roadster']
  },
  {
    name: 'Toyota',
    models: ['Aygo', 'Yaris', 'Yaris Cross', 'Corolla', 'Camry', 'Prius', 'C-HR', 'RAV4', 'Highlander', 'Land Cruiser', 'Supra', 'GR86', 'bZ4X', 'Hilux', 'Proace']
  },
  {
    name: 'Volkswagen',
    models: ['up!', 'Polo', 'Golf', 'Golf GTI', 'Golf R', 'T-Roc', 'T-Cross', 'Tiguan', 'Touareg', 'Passat', 'Arteon', 'ID.3', 'ID.4', 'ID.5', 'ID.Buzz', 'Taigo', 'Caddy', 'Transporter', 'Multivan', 'Amarok', 'Touran', 'Sharan']
  },
  {
    name: 'Volvo',
    models: ['S60', 'S90', 'V40', 'V60', 'V90', 'XC40', 'XC60', 'XC90', 'C40 Recharge', 'EX30', 'EX90']
  },
  {
    name: 'Andere / Sonstige',
    models: ['Sonstiges Modell']
  }
];

export const years: number[] = Array.from({ length: 35 }, (_, i) => 2026 - i);

export const fuelTypes = [
  'Benzin',
  'Diesel',
  'Hybrid',
  'Plug-in-Hybrid',
  'Elektro',
  'Erdgas (CNG)',
  'Autogas (LPG)',
  'Wasserstoff'
];

export const transmissionTypes = [
  'Schaltgetriebe',
  'Automatik',
  'Halbautomatik',
  'CVT (stufenlos)'
];

export const vehicleConditions = [
  'Sehr gut (wie neu)',
  'Gut (normale Gebrauchsspuren)',
  'Befriedigend (sichtbare Gebrauchsspuren)',
  'Unfallfahrzeug',
  'Motorschaden',
  'Getriebeschaden',
  'Nicht fahrbereit',
  'Oldtimer / Liebhaberfahrzeug'
];

export const mileageRanges = [
  '0 - 10\'000 km',
  '10\'000 - 30\'000 km',
  '30\'000 - 50\'000 km',
  '50\'000 - 80\'000 km',
  '80\'000 - 100\'000 km',
  '100\'000 - 150\'000 km',
  '150\'000 - 200\'000 km',
  '200\'000 - 300\'000 km',
  'Über 300\'000 km'
];
