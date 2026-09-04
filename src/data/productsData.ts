import { EcosystemProduct } from '../types';

export const VELORA_PRODUCTS: EcosystemProduct[] = [
  {
    id: 'broker-house',
    title: "Velora's Broker House",
    tagline: 'Powering Traders. Driving Markets. Building the Future.',
    category: 'trading',
    description: 'A revolutionary hybrid broker combining the best of Market Maker (MM) and STP/ECN models. Ultra-fast execution, deep institutional liquidity, and zero conflict of interest.',
    status: 'Revealing Soon',
    badgeColor: 'border-cyan-500/50 text-cyan-400 bg-cyan-500/10',
    route: '/dashboard/broker',
    iconName: 'Building2',
    pdfPage: 5,
    keyFeatures: [
      'Hybrid MM & STP/ECN Architecture',
      'Ultra-Low Latency & High-Speed Routing',
      'Tier-1 Deep Liquidity Access',
      'Bank-Grade Segregated Client Funds Protection',
      'Transparent Pricing & Fair Market Execution'
    ]
  },
  {
    id: 'prop-firm',
    title: 'Velora Funded Prop Firm',
    tagline: 'Empowering Traders. Funding Potential.',
    category: 'capital',
    description: 'Built to back skilled traders worldwide with capital, institutional tools, and unmatched scaling opportunities. Trade larger accounts with zero personal capital risk.',
    status: 'Coming Soon',
    badgeColor: 'border-purple-500/50 text-purple-400 bg-purple-500/10',
    route: '/dashboard/prop-firm',
    iconName: 'ShieldCheck',
    pdfPage: 7,
    keyFeatures: [
      'Access to Capital up to $200,000+',
      'Zero Personal Risk - We Fund, You Trade',
      'Fast & Reliable Payout Cycles',
      'Trader-First Realistic Profit Targets (8% - 5%)',
      'Up to 90% Profit Split Retention'
    ]
  },
  {
    id: 'crypto-arbitrage',
    title: 'Crypto Arbitrage Platform',
    tagline: 'Something Big Is Coming. The Future of Arbitrage is Almost Here.',
    category: 'trading',
    description: 'Next-generation algorithmic arbitrage engine scanning pricing anomalies across Tier-1 global crypto exchanges with sub-millisecond execution.',
    status: 'Revealing Soon',
    badgeColor: 'border-fuchsia-500/50 text-fuchsia-400 bg-fuchsia-500/10',
    route: '/dashboard/arbitrage',
    iconName: 'Layers',
    pdfPage: 8,
    keyFeatures: [
      'Cross-Exchange Real-Time Spread Detection',
      'Triangular & Spatial Arbitrage Matrix',
      'Sub-Millisecond Order Routing & Flash Execution',
      'Slippage Protection & Gas-Optimized Hedging',
      'Automated Capital Rebalancing'
    ]
  },
  {
    id: 'ai-agent',
    title: 'Velora AI Agent',
    tagline: 'Your Intelligent Partner in Trading & Markets. Think. Analyze. Decide. Evolve.',
    category: 'ai',
    description: 'Institutional-grade artificial intelligence delivering real-time sentiment analysis, predictive market direction, risk scoring, and interactive strategy collaboration.',
    status: 'Live',
    badgeColor: 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10',
    route: '/dashboard/ai',
    iconName: 'BrainCircuit',
    pdfPage: 9,
    keyFeatures: [
      'Smarter Real-Time Market Analysis & Forecasting',
      'Conversational AI Strategy Co-Pilot',
      'Live Sentiment Radar (87% Current Bullish Confidence)',
      'Automated Risk Guard & Portfolio Volatility Index',
      'Predictive News Sentiment & Macroeconomic Integration'
    ]
  },
  {
    id: 'education-platform',
    title: 'Education Platform',
    tagline: 'Learn. Trade. Grow. Together with Velora Global.',
    category: 'education',
    description: 'The all-in-one comprehensive platform designed to educate, upskill, and mentor the next generation of smart, profitable traders from beginner to mastery.',
    status: 'Live Soon',
    badgeColor: 'border-amber-500/50 text-amber-400 bg-amber-500/10',
    route: '/dashboard/education',
    iconName: 'GraduationCap',
    pdfPage: 10,
    keyFeatures: [
      'Comprehensive Multi-Asset Courses (Forex, Crypto, Gold, Indices)',
      'Interactive Live Sessions & Real-Time Masterclasses',
      'Direct Mentorship from Industry Veterans',
      'Practical Case Studies & Live Market Breakdowns',
      'Structured Skill Progression & Certification'
    ]
  },
  {
    id: 'forex-cards',
    title: 'Velora Forex Cards & Utility App',
    tagline: 'Exclusive. Global. Limitless.',
    category: 'lifestyle',
    description: 'Ultra-exclusive luxury multi-currency prepaid payment cards paired with the seamless Velora Utility Mobile App. Spend trading profits anywhere Mastercard/Visa is accepted.',
    status: 'Coming Soon',
    badgeColor: 'border-sky-500/50 text-sky-400 bg-sky-500/10',
    route: '/dashboard/forex-cards',
    iconName: 'CreditCard',
    pdfPage: 11,
    keyFeatures: [
      '3 Bespoke Editions: Sapphire, Obsidian Black, Diamond Quartz',
      'Multi-Currency Auto-Conversion at Interbank Rates',
      'Worldwide ATM Cash Withdrawals & POS Payments',
      'Instant In-App Card Freeze & Biometric Security',
      'VIP Airport Lounge Access & Global Concierge'
    ]
  },
  {
    id: 'fund-management',
    title: 'Fund Managed by Professionals',
    tagline: 'Expertise You Trust. Growth You Deserve.',
    category: 'wealth',
    description: 'Elite fund management solutions curated for top leaders seeking disciplined capital preservation, consistent performance, and verified copy trading access.',
    status: 'Live',
    badgeColor: 'border-blue-500/50 text-blue-400 bg-blue-500/10',
    route: '/dashboard/funds',
    iconName: 'Vault',
    pdfPage: 12,
    keyFeatures: [
      'Dedicated Professional Portfolio Managers',
      'Seamless Copy Trading with Verified Master Accounts',
      'Bank-Level Security & Rigorous Capital Protection Rules',
      'Exclusive Tier Benefits for High-Level Community Leaders',
      'Real-Time Transparent Auditing & P&L Reporting'
    ]
  },
  {
    id: 'automation-bot',
    title: 'AI Automation License Bot',
    tagline: 'Intelligence That Trades. Automation That Delivers.',
    category: 'ai',
    description: 'Licensed access to institutional automated trading bots executing quantitative strategies with dynamic stop-loss protection and automated risk limits.',
    status: 'Live Soon',
    badgeColor: 'border-violet-500/50 text-violet-400 bg-violet-500/10',
    route: '/dashboard/automation',
    iconName: 'Bot',
    pdfPage: 13,
    keyFeatures: [
      'Continuous 24/7 Algorithmic Strategy Execution',
      'Proprietary Trend Following & Mean-Reversion Models',
      'Smart Automated Capital & Drawdown Protection',
      'Copy Trading Integration with Master Leader Nodes',
      'Exclusive Tier Licensing for Blue Diamond Rank Leaders'
    ]
  },
  {
    id: 'core-team',
    title: 'Upcoming Core Team',
    tagline: 'One Rank. One Team. One Vision.',
    category: 'capital',
    description: 'Formed exclusively by elite visionaries who attain the prestigious Blue Diamond Rank, steering the future direction and governance of Velora Global.',
    status: 'Coming Soon',
    badgeColor: 'border-indigo-500/50 text-indigo-400 bg-indigo-500/10',
    route: '/dashboard/team',
    iconName: 'Gem',
    pdfPage: 14,
    keyFeatures: [
      'Prestigious Blue Diamond Rank Governance Council',
      'Direct Strategic Alignment with Founders',
      'Global Summit Access & Exclusive International Events',
      'Ecosystem Profit Sharing & Leadership Dividends',
      'First Access to All Future Velora Product Launches'
    ]
  },
  {
    id: 'international-bonanza',
    title: 'Upcoming International Bonanza',
    tagline: 'A Reward. A Journey. A Memory For Life.',
    category: 'lifestyle',
    description: 'A world-class luxury international experience awaiting the most dedicated leaders and partners in the Velora Global movement. Destination to be disclosed soon.',
    status: 'Coming Soon',
    badgeColor: 'border-rose-500/50 text-rose-400 bg-rose-500/10',
    route: '/dashboard/bonanza',
    iconName: 'Palmtree',
    pdfPage: 18,
    keyFeatures: [
      'Exotic Global Luxury Destination (Teaser Announced)',
      'All-Inclusive 5-Star VIP Accommodations & Private Flights',
      'High-Level Leadership Mastermind & Networking',
      'Velora Annual Global Awards Ceremony',
      'Lifetime Memories & Community Celebration'
    ]
  }
];
