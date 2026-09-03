import { ForexCardVariant } from '../types';

export const FOREX_CARDS_HERO = {
  title: 'Velora Global Forex Cards',
  tagline: 'EXCLUSIVE. GLOBAL. LIMITLESS.',
  status: 'COMING SOON',
  description: 'A seamless physical and digital bridge between your trading profits and the global economy. Accepted in over 190 countries with instant interbank currency conversion and bank-grade cryptographic security.',
  utilityAppHeadline: 'Forex Card & Utility App',
  utilityAppDescription: 'Smart global payments and seamless financial management on the go. Fund with fiat or digital assets and spend anywhere Mastercard & Visa are honored.'
};

export const FOREX_CARD_VARIANTS: ForexCardVariant[] = [
  {
    id: 'sapphire-edition',
    name: 'Sapphire Geometric Edition',
    tier: 'Sapphire',
    material: 'Polished Titanium Composite & Geometric Sapphire Glass',
    tagline: 'Vibrant. Futuristic. Dynamic.',
    colorScheme: {
      primary: '#1e1b4b',
      secondary: '#4338ca',
      border: 'rgba(139, 92, 246, 0.4)',
      accent: '#00d4ff'
    },
    features: [
      'Multi-currency auto-conversion in 40+ global currencies',
      'Zero international transaction surcharges',
      'Instant profit transfer from Velora Prop & Broker accounts',
      'Biometric in-app card freezing and virtual CVV dynamic rotation'
    ],
    limits: {
      atmDaily: '$5,000 / day',
      posLimit: '$25,000 / day',
      currencies: 42
    }
  },
  {
    id: 'obsidian-black',
    name: 'Obsidian Brushed Black',
    tier: 'Obsidian',
    material: 'Heavyweight Matte Tungsten & Laser-Etched 24K Gold Emblem',
    tagline: 'Executive. Understated. Masterful.',
    colorScheme: {
      primary: '#090d16',
      secondary: '#172033',
      border: 'rgba(234, 179, 8, 0.35)',
      accent: '#eab308'
    },
    features: [
      'Dedicated 24/7 private wealth concierge desk',
      'Unlimited international airport lounge access (Priority Pass™)',
      'Direct liquidity off-ramp from AI Automation License Bots',
      'Higher daily withdrawal thresholds for high-volume traders'
    ],
    limits: {
      atmDaily: '$15,000 / day',
      posLimit: '$100,000 / day',
      currencies: 65
    }
  },
  {
    id: 'diamond-quartz',
    name: 'Diamond Quartz Crystal',
    tier: 'Diamond Quartz',
    material: 'Holographic Ceramic Crystal with Micro-faceted Diamond Coat',
    tagline: 'Pure. Prestigious. Limitless.',
    colorScheme: {
      primary: '#1e293b',
      secondary: '#334155',
      border: 'rgba(255, 255, 255, 0.45)',
      accent: '#c084fc'
    },
    features: [
      'Exclusive to verified Blue Diamond Rank Core Team members',
      'Custom bespoke card engraving with unique ledger identification',
      'Uncapped multi-million spending limits backed by institutional custody',
      'Private aviation & global luxury lifestyle partnership privileges'
    ],
    limits: {
      atmDaily: '$50,000 / day',
      posLimit: 'No Limit',
      currencies: 120
    }
  }
];
