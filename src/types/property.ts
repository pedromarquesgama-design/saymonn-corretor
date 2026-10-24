export type FilterCategory =
  | 'todos'
  | 'coroa-vermelha'
  | 'porto-seguro'
  | 'studios-1q'
  | 'duplex-casas';

export interface PropertyUnit {
  id: string;
  regionId: 'coroa-vermelha' | 'porto-seguro';
  category: 'studios-1q' | 'duplex-casas';
  condoName: string;
  title: string;
  badge: string;
  imageUrl: string;
  location: string;
  price: number;
  formattedPrice: string;
  cardIcons: string[];
  features: string[];
  description: string;
  distanceToBeachMeters: number;
  areaM2?: number;
  bedrooms?: number;
  bathrooms?: number;
}

