import { RoadmapStage } from '../types';

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    id: 'launch',
    stepNumber: 1,
    title: 'LAUNCH',
    subtitle: 'THE BEGINNING',
    status: 'active',
    badge: 'Phase 01',
    iconName: 'Rocket',
    gradient: 'from-cyan-500 to-blue-600',
    description: 'The genesis of Velora Global. Establishing core foundation, brand identity, global infrastructure, and unveiling the ecosystem architecture.',
    milestones: [
      'Global Launch Event & Brand Inauguration',
      'Velora Core Architecture & Infinity Protocol Deployment',
      'Community Onboarding & Early Pioneer Access',
      'Foundational Liquidity Partnerships Establishment',
      'Release of Velora Future Education Framework Preview'
    ],
    ecosystemHighlights: ['Platform of Velora', 'Core Architecture', 'Community Genesis']
  },
  {
    id: 'growth',
    stepNumber: 2,
    title: 'GROWTH',
    subtitle: 'BUILDING MOMENTUM',
    status: 'active',
    badge: 'Phase 02',
    iconName: 'TrendingUp',
    gradient: 'from-blue-500 to-indigo-600',
    description: 'Scaling adoption, activating advanced trading technologies, deploying the AI Agent suite, and expanding multi-market liquidity access.',
    milestones: [
      'Velora AI Agent Deployment (Market Intelligence & Real-time Alerts)',
      'Fund Management Infrastructure & Professional Portfolio Launch',
      'AI Automation License Bot Beta Rollout for Top Leaders',
      'Cross-market Data Streams (Forex, Crypto, Gold, Indices)',
      'Global Community Leaders Program Activation'
    ],
    ecosystemHighlights: ['Velora AI Agent', 'AI Automation Bot', 'Fund Management']
  },
  {
    id: 'expansion',
    stepNumber: 3,
    title: 'EXPANSION',
    subtitle: 'BREAKING BOUNDARIES',
    status: 'upcoming',
    badge: 'Phase 03',
    iconName: 'Globe',
    gradient: 'from-indigo-500 to-purple-600',
    description: 'Unlocking institutional capital channels, global proprietary funding, cutting-edge crypto arbitrage engines, and international payment card infrastructure.',
    milestones: [
      'Velora Funded Prop Firm Official Launch (Capital Allocation up to $200K+)',
      'Crypto Arbitrage Platform Reveal & High-Frequency Engine',
      'Velora Global Forex Cards Launch (Sapphire, Obsidian, Diamond Quartz)',
      'International Roadshow & Dubai Financial Hub Hub Activation',
      'Upcoming International Bonanza Reveal & Destination Gala'
    ],
    ecosystemHighlights: ['Prop Funded Firm', 'Crypto Arbitrage', 'Forex Cards', 'Bonanza']
  },
  {
    id: 'collaboration',
    stepNumber: 4,
    title: 'COLLABORATION',
    subtitle: 'STRONGER TOGETHER',
    status: 'upcoming',
    badge: 'Phase 04',
    iconName: 'Handshake',
    gradient: 'from-purple-500 to-fuchsia-600',
    description: 'Activating the full Hybrid Broker House model, Tier-1 liquidity aggregator alliances, and global partner revenue share networks.',
    milestones: [
      'Velora Hybrid Broker House Official Public Launch (MM + STP/ECN)',
      'Tier-1 Prime Brokerage & Deep Liquidity Integrations',
      'Global Introducing Broker (IB) & Master Affiliate Engine Activation',
      'Institutional Asset Custody & Client Fund Segregation Protocols',
      'Upcoming Core Team Recognition & Blue Diamond Leadership Formation'
    ],
    ecosystemHighlights: ['Hybrid Broker House', 'Blue Diamond Core Team', 'Global IBs']
  },
  {
    id: 'legacy',
    stepNumber: 5,
    title: 'LEGACY',
    subtitle: 'BUILDING THE FUTURE',
    status: 'upcoming',
    badge: 'Phase 05',
    iconName: 'Diamond',
    gradient: 'from-fuchsia-500 to-pink-600',
    description: 'Realizing the ultimate vision: The world’s complete financial ecosystem. Decentralized wealth sovereignty, generational capital management, and global market leadership.',
    milestones: [
      'Full Ecosystem Interoperability across all 8+ Velora Verticals',
      'Velora Sovereign Financial Super-App (Web, iOS, Android, Terminal)',
      'Blue Diamond Global Council Annual General Assembly',
      'Decentralized Liquidity Pool & Global Wealth Management Vaults',
      'Permanent Global Endowment & Limitless Wealth Foundation'
    ],
    ecosystemHighlights: ['World Complete Finance Ecosystem', 'Sovereign Super-App', 'Limitless Wealth']
  }
];
