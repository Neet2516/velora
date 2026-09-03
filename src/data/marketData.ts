import { MarketAsset } from '../types';

export const GLOBAL_MARKET_STATS = {
  forexVolume: '$9.6 Trillion+',
  forexLabel: "The World's Largest Market",
  goldVolume: '$361 Billion+',
  goldLabel: 'A Timeless Safe Haven',
  cryptoVolume: '$18.7 Trillion+',
  cryptoLabel: 'The Future of Finance',
  activeTradersCount: '124,580',
  ecosystemUptime: '99.98%',
  executionLatency: '12ms'
};

export const MARKET_ASSETS: MarketAsset[] = [
  {
    symbol: 'BTC/USD',
    name: 'Bitcoin',
    category: 'crypto',
    price: 64280.50,
    change24h: 3.42,
    high24h: 65120.00,
    low24h: 62890.10,
    volume24h: '$34.8B',
    sparkline: [62890, 63100, 63450, 63200, 63900, 64150, 64280],
    baseCurrency: 'USD'
  },
  {
    symbol: 'ETH/USD',
    name: 'Ethereum',
    category: 'crypto',
    price: 3480.25,
    change24h: 2.15,
    high24h: 3540.00,
    low24h: 3390.80,
    volume24h: '$18.2B',
    sparkline: [3390, 3410, 3450, 3430, 3460, 3475, 3480],
    baseCurrency: 'USD'
  },
  {
    symbol: 'EUR/USD',
    name: 'Euro / US Dollar',
    category: 'forex',
    price: 1.09245,
    change24h: 0.38,
    high24h: 1.09450,
    low24h: 1.08810,
    volume24h: '$480B',
    sparkline: [1.088, 1.089, 1.091, 1.090, 1.092, 1.093, 1.0924],
    baseCurrency: 'USD'
  },
  {
    symbol: 'GBP/USD',
    name: 'British Pound / US Dollar',
    category: 'forex',
    price: 1.28420,
    change24h: -0.22,
    high24h: 1.28900,
    low24h: 1.28250,
    volume24h: '$310B',
    sparkline: [1.288, 1.287, 1.285, 1.286, 1.284, 1.283, 1.2842],
    baseCurrency: 'USD'
  },
  {
    symbol: 'USD/JPY',
    name: 'US Dollar / Japanese Yen',
    category: 'forex',
    price: 154.68,
    change24h: 0.45,
    high24h: 155.10,
    low24h: 154.12,
    volume24h: '$290B',
    sparkline: [154.2, 154.3, 154.5, 154.4, 154.8, 154.6, 154.68],
    baseCurrency: 'JPY'
  },
  {
    symbol: 'XAU/USD',
    name: 'Gold Spot',
    category: 'commodity',
    price: 2518.40,
    change24h: 1.12,
    high24h: 2526.00,
    low24h: 2498.50,
    volume24h: '$98.4B',
    sparkline: [2498, 2504, 2508, 2512, 2515, 2520, 2518.4],
    baseCurrency: 'USD'
  },
  {
    symbol: 'SPX500',
    name: 'S&P 500 Index',
    category: 'index',
    price: 5648.20,
    change24h: 0.64,
    high24h: 5665.00,
    low24h: 5620.10,
    volume24h: '$120B',
    sparkline: [5620, 5630, 5642, 5638, 5650, 5645, 5648.2],
    baseCurrency: 'USD'
  },
  {
    symbol: 'NAS100',
    name: 'NASDAQ 100 Index',
    category: 'index',
    price: 19840.10,
    change24h: 1.05,
    high24h: 19920.00,
    low24h: 19710.00,
    volume24h: '$145B',
    sparkline: [19710, 19760, 19810, 19790, 19830, 19850, 19840.1],
    baseCurrency: 'USD'
  }
];

export const MOCK_ORDER_BOOK = {
  asks: [
    { price: 64295.0, amount: 1.45, total: 93227.75 },
    { price: 64290.0, amount: 2.18, total: 140152.2 },
    { price: 64288.5, amount: 0.85, total: 54645.22 },
    { price: 64285.0, amount: 3.42, total: 219854.7 },
    { price: 64282.0, amount: 1.12, total: 71995.84 }
  ],
  bids: [
    { price: 64278.0, amount: 1.95, total: 125342.1 },
    { price: 64275.0, amount: 2.84, total: 182541.0 },
    { price: 64272.5, amount: 4.10, total: 263517.25 },
    { price: 64269.0, amount: 0.65, total: 41774.85 },
    { price: 64265.0, amount: 3.20, total: 205648.0 }
  ]
};

export const MOCK_RECENT_TRADES = [
  { id: 'tx-1', time: '14:28:12', price: 64280.5, amount: 0.42, side: 'buy' },
  { id: 'tx-2', time: '14:28:09', price: 64280.0, amount: 1.15, side: 'buy' },
  { id: 'tx-3', time: '14:28:02', price: 64278.5, amount: 0.88, side: 'sell' },
  { id: 'tx-4', time: '14:27:55', price: 64281.0, amount: 2.05, side: 'buy' },
  { id: 'tx-5', time: '14:27:49', price: 64277.0, amount: 0.35, side: 'sell' },
  { id: 'tx-6', time: '14:27:38', price: 64276.5, amount: 1.62, side: 'sell' }
];
