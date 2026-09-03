export const ARBITRAGE_HERO = {
  title: 'Crypto Arbitrage Platform',
  mainHeading: 'SOMETHING BIG IS COMING',
  subHeading: 'THE FUTURE OF ARBITRAGE IS ALMOST HERE',
  tagline: 'STAY TUNED. STAY AHEAD. REVEALING SOON',
  status: 'Revealing Soon',
  description: 'Velora is preparing to unveil an institutional high-frequency arbitrage platform that capitalizes on micro-second crypto price differentials across global Tier-1 order books.'
};

export const MOCK_ARBITRAGE_FEEDS = [
  {
    asset: 'BTC/USDT',
    exchanges: [
      { name: 'Binance', price: 64280.5, fee: '0.04%' },
      { name: 'Coinbase Pro', price: 64345.2, fee: '0.06%' },
      { name: 'Bybit', price: 64292.0, fee: '0.04%' },
      { name: 'OKX', price: 64275.8, fee: '0.03%' }
    ],
    spread: '+$69.40 (0.108%)',
    recommendedRoute: 'Buy on OKX → Sell on Coinbase Pro',
    netProfitEst: '+$52.30 / BTC',
    status: 'ACTIVE_ANOMALY'
  },
  {
    asset: 'ETH/USDT',
    exchanges: [
      { name: 'Binance', price: 3480.2, fee: '0.04%' },
      { name: 'Kraken', price: 3487.6, fee: '0.05%' },
      { name: 'Bybit', price: 3479.8, fee: '0.04%' },
      { name: 'OKX', price: 3481.5, fee: '0.03%' }
    ],
    spread: '+$7.80 (0.224%)',
    recommendedRoute: 'Buy on Bybit → Sell on Kraken',
    netProfitEst: '+$5.95 / ETH',
    status: 'ACTIVE_ANOMALY'
  },
  {
    asset: 'SOL/USDT',
    exchanges: [
      { name: 'Binance', price: 152.40, fee: '0.04%' },
      { name: 'Coinbase Pro', price: 153.15, fee: '0.06%' },
      { name: 'Bybit', price: 152.55, fee: '0.04%' },
      { name: 'OKX', price: 152.38, fee: '0.03%' }
    ],
    spread: '+$0.77 (0.505%)',
    recommendedRoute: 'Buy on OKX → Sell on Coinbase Pro',
    netProfitEst: '+$0.62 / SOL',
    status: 'OPPORTUNITY_DETECTED'
  }
];
