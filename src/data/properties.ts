import { PropertyUnit } from '../types/property';

export const SHOWCASE_PROPERTIES: PropertyUnit[] = [
  {
    id: 'casas-bougainville',
    regionId: 'coroa-vermelha',
    category: 'duplex-casas',
    condoName: 'Bougainville Residence I & II',
    title: 'CASAS BOUGAINVILLE RESIDENCE',
    badge: 'LANÇAMENTO',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    location: 'Coroa Vermelha, Santa Cruz Cabrália - BA',
    price: 697000,
    formattedPrice: 'R$ 697.000,00',
    cardIcons: [
      '🛏️ Casa Alto Padrão',
      '🛁 Jacuzzi Privativa',
      '🏖️ 300m da Praia'
    ],
    features: [
      'Quintal privativo murado com hidromassagem aquecida instalada',
      'Portas articuladas camarão em vidro com abertura total para o deck',
      'Bancada gourmet externa com churrasqueira em pedra e pergolado',
      '3 dormitórios planejados com excelente ventilação cruzada',
      '2 vagas privativas em piso drenante pisograma'
    ],
    description: 'A residência mais exclusiva de Coroa Vermelha. Mansão compacta que combina privacidade total, acabamento premium em pedra travertino e área gourmet privativa a apenas 5 minutos de caminhada da praia.',
    distanceToBeachMeters: 300,
    areaM2: 104,
    bedrooms: 3,
    bathrooms: 3
  },
  {
    id: 'duplex-bougainville',
    regionId: 'coroa-vermelha',
    category: 'duplex-casas',
    condoName: 'Bougainville Residence I & II',
    title: 'APARTAMENTO DUPLEX BOUGAINVILLE',
    badge: 'À VENDA',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    location: 'Coroa Vermelha, Santa Cruz Cabrália - BA',
    price: 597000,
    formattedPrice: 'R$ 597.000,00',
    cardIcons: [
      '🛏️ Duplex 2 Pavimentos',
      '🏊 Piscina & Deck',
      '🏖️ 300m da Praia'
    ],
    features: [
      'Distribuição inteligente em dois pavimentos independentes',
      'Brises verticais em cedro que filtram a luz natural na fachada',
      'Varanda espaçosa com fechamento em vidro sem caixilhos',
      'Living amplo integrado à cozinha americana moderna',
      'Acesso livre ao complexo aquático com deck e pergolado'
    ],
    description: 'Apartamento duplex contemporâneo projetado para o clima baiano. Conforto térmico, brises de madeira nobre e localização nobre no 7º condomínio de sucesso da Incorporadora Matilda.',
    distanceToBeachMeters: 300,
    areaM2: 78,
    bedrooms: 2,
    bathrooms: 2
  },
  {
    id: 'studio-bougainville',
    regionId: 'coroa-vermelha',
    category: 'studios-1q',
    condoName: 'Bougainville Residence I & II',
    title: 'STUDIO BOUGAINVILLE RESIDENCE',
    badge: 'IDEAL INVESTIDOR',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
    location: 'Coroa Vermelha, Santa Cruz Cabrália - BA',
    price: 357000,
    formattedPrice: 'R$ 357.000,00',
    cardIcons: [
      '🛏️ Studio Moderno',
      '🏊 Lazer Completo',
      '🏖️ 300m da Praia'
    ],
    features: [
      'Máxima rentabilidade comprovada para locações Airbnb e Booking',
      'Layout aberto otimizado com acabamentos de alto padrão',
      'Varanda arejada voltada para o paisagismo do condomínio',
      'Baixo custo condominial e alta liquidez na região',
      'Próximo a restaurantes, supermercado e orla de Coroa Vermelha'
    ],
    description: 'O ativo perfeito para investidores focados em retorno sobre locação por temporada. Imóvel compacto de alto luxo a 300 metros da praia mais visitada de Cabrália.',
    distanceToBeachMeters: 300,
    areaM2: 38,
    bedrooms: 1,
    bathrooms: 1
  },
  {
    id: 'orla-2q',
    regionId: 'porto-seguro',
    category: 'duplex-casas',
    condoName: 'Residencial Paraíso dos Pataxós',
    title: 'APARTAMENTO 2 QUARTOS — ORLA',
    badge: 'LANÇAMENTO',
    imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=900&q=80',
    location: 'Paraíso dos Pataxós, Orla de Porto Seguro - BA',
    price: 459000,
    formattedPrice: 'R$ 459.000,00',
    cardIcons: [
      '🛏️ 2 Quartos',
      '🌴 Orla Norte',
      '✨ Alto Padrão'
    ],
    features: [
      'Localizado no bairro mais valorizado da Orla Norte de Porto Seguro',
      'Suíte principal com ventilação natural e sacada privativa',
      'Condomínio fechado com portaria e segurança 24 horas',
      'Piscina com raia, quiosque gourmet e área de convivência',
      'Fácil acesso às famosas cabanas de praia Axé Moi e Tôa Tôa'
    ],
    description: 'Sofisticação e conforto no Paraíso dos Pataxós. Uma oportunidade singular de morar ou investir na orla mais cobiçada de Porto Seguro com forte valorização anual.',
    distanceToBeachMeters: 450,
    areaM2: 66,
    bedrooms: 2,
    bathrooms: 2
  },
  {
    id: 'orla-1q',
    regionId: 'porto-seguro',
    category: 'studios-1q',
    condoName: 'Residencial Paraíso dos Pataxós',
    title: 'APARTAMENTO 1 QUARTO — ORLA',
    badge: 'OPORTUNIDADE',
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80',
    location: 'Paraíso dos Pataxós, Orla de Porto Seguro - BA',
    price: 314000,
    formattedPrice: 'R$ 314.000,00',
    cardIcons: [
      '🛏️ 1 Quarto',
      '🌴 Paraíso dos Pataxós',
      '💰 Fácil Financiamento'
    ],
    features: [
      'Preço de lançamento imperdível com aprovação Caixa facilitada',
      'Opção de parcelamento direto com a construtora durante a obra',
      'Ambientes integrados com porcelanato e esquadrias de primeira linha',
      'Ideal para quem busca o primeiro imóvel de praia ou renda passiva',
      'Região tranquila com comércio consolidado e transporte fácil'
    ],
    description: 'A porta de entrada perfeita para o mercado imobiliário da Orla de Porto Seguro. Excelente custo-benefício com condições de pagamento negociáveis.',
    distanceToBeachMeters: 450,
    areaM2: 44,
    bedrooms: 1,
    bathrooms: 1
  }
];

export const REAL_PROXIMITIES = [
  {
    distance: '300m',
    title: 'Primeiras Praias de Coroa Vermelha',
    desc: '5 minutos de caminhada até a areia dourada e piscinas naturais mornas.'
  },
  {
    distance: '300m',
    title: 'Subway & Gastronomia',
    desc: 'Alimentação rápida e restaurantes na avenida principal.'
  },
  {
    distance: '300m',
    title: 'Farmácia Indiana & Posto',
    desc: 'Drogaria completa com atendimento estendido e posto de serviços.'
  },
  {
    distance: '350m',
    title: 'Supermercado Cambuí',
    desc: 'Maior rede da região com padaria artesanal, hortifrúti e adega.'
  },
  {
    distance: '500m',
    title: 'Cartório de Registro de Imóveis',
    desc: 'Segurança e facilidade imediata para documentação e escrituras.'
  },
  {
    distance: '700m',
    title: 'Caminho de Moisés',
    desc: 'Atração turística famosa mundialmente: banco de areia que se abre mar adentro.'
  }
];
