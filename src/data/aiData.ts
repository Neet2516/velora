import { AIInsightItem } from '../types';

export const AI_AGENT_STATS = {
  tagline: 'Your Intelligent Partner in Trading & Markets',
  motto: 'THINK. ANALYZE. DECIDE. EVOLVE.',
  newsSentimentScore: 87, // directly from PDF page 9
  primaryPredictionPair: 'EUR/USD',
  primaryPredictionSignal: 'BULLISH',
  primaryConfidence: 87, // directly from PDF page 9
  volatilityIndex: 'MODERATE (34/100)',
  riskScore: 23, // directly from PDF page 9 (23/100 Low Risk)
  keyTakeaways: [
    'Increasing institutional buying momentum on EUR/USD',
    'Strong structural support established at 1.0820',
    'Potential algorithmic breakout above 1.0960 resistance band',
    'Gold (XAU/USD) showing high safe-haven accumulation before FOMC'
  ]
};

export const AI_INSIGHT_ITEMS: AIInsightItem[] = [
  {
    id: 'ai-eurusd',
    pair: 'EUR/USD',
    signal: 'BULLISH',
    confidence: 87,
    headline: 'High Probability Bullish Impulse Forming Above 1.0890',
    details: [
      'Liquidity pool sweep completed at Asian session lows',
      'RSI divergence on the 4-hour timeframe indicates bullish absorption',
      'Target resistance zone: 1.09650 — Stop invalidation below 1.08420'
    ],
    riskScore: 23,
    timestamp: '12 mins ago'
  },
  {
    id: 'ai-xauusd',
    pair: 'XAU/USD',
    signal: 'BULLISH',
    confidence: 82,
    headline: 'Gold Safe Haven Momentum Surging Past $2,510 Key Psychological Barrier',
    details: [
      'Macro liquidity flows moving into bullion reserves',
      'Volume profile indicates strong support anchor at $2,495',
      'Upper projected band: $2,545 in medium term'
    ],
    riskScore: 28,
    timestamp: '25 mins ago'
  },
  {
    id: 'ai-btcusd',
    pair: 'BTC/USD',
    signal: 'BULLISH',
    confidence: 79,
    headline: 'Bitcoin Consolidating Above $64,000 with Rising Spot Inflows',
    details: [
      'Exchange reserve outflows indicate sustained cold-storage accumulation',
      'Funding rates remain balanced, minimizing liquidation cascade risk',
      'Next immediate test at $65,500 local supply block'
    ],
    riskScore: 35,
    timestamp: '42 mins ago'
  },
  {
    id: 'ai-gbpusd',
    pair: 'GBP/USD',
    signal: 'NEUTRAL',
    confidence: 64,
    headline: 'Cable Trading Within Tight Equilibrium Range Pre-BoE Statement',
    details: [
      'Mean-reversion algorithms currently active between 1.2820 and 1.2880',
      'Recommendation: Await volatility breakout or trade boundary rejections'
    ],
    riskScore: 40,
    timestamp: '1 hour ago'
  }
];

export const MOCK_AI_CONVERSATION = [
  {
    id: '1',
    sender: 'ai',
    text: "Hello, Trader. I am your Velora AI Agent. Current market sentiment is 87% Bullish across major forex pairs. What asset or strategy would you like to analyze today?",
    timestamp: '14:30'
  },
  {
    id: '2',
    sender: 'user',
    text: "What is the optimal entry for EUR/USD today?",
    timestamp: '14:31'
  },
  {
    id: '3',
    sender: 'ai',
    text: "EUR/USD displays 87% Bullish conviction on institutional order flow. Optimal entry zone is identified between 1.0895 – 1.0910 with invalidation below 1.0842. The predicted risk score is 23/100 (Low Risk). Would you like me to configure an automated alert or simulate trade sizing?",
    timestamp: '14:31'
  }
];
