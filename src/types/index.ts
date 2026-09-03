export type RoadmapStageId = 'launch' | 'growth' | 'expansion' | 'collaboration' | 'legacy';

export interface RoadmapStage {
  id: RoadmapStageId;
  stepNumber: number;
  title: string;
  subtitle: string;
  status: 'active' | 'upcoming' | 'completed';
  description: string;
  badge: string;
  iconName: string;
  gradient: string;
  milestones: string[];
  ecosystemHighlights: string[];
}

export interface EcosystemProduct {
  id: string;
  title: string;
  tagline: string;
  category: 'trading' | 'ai' | 'capital' | 'wealth' | 'education' | 'lifestyle';
  description: string;
  status: 'Live' | 'Coming Soon' | 'Revealing Soon' | 'Live Soon';
  badgeColor: string;
  route: string;
  iconName: string;
  pdfPage: number;
  keyFeatures: string[];
}

export interface MarketAsset {
  symbol: string;
  name: string;
  category: 'forex' | 'crypto' | 'commodity' | 'index';
  price: number;
  change24h: number;
  high24h: number;
  low24h: number;
  volume24h: string;
  sparkline: number[];
  baseCurrency: string;
}

export interface AIInsightItem {
  id: string;
  pair: string;
  signal: 'BULLISH' | 'BEARISH' | 'NEUTRAL';
  confidence: number;
  headline: string;
  details: string[];
  riskScore: number;
  timestamp: string;
}

export interface PropFirmTier {
  size: string;
  accountBalance: number;
  profitTargetPhase1: number;
  profitTargetPhase2: number;
  maxDailyLoss: number;
  maxTotalDrawdown: number;
  profitSplit: string;
  price: number;
}

export interface ForexCardVariant {
  id: string;
  name: string;
  tier: 'Sapphire' | 'Obsidian' | 'Diamond Quartz';
  material: string;
  tagline: string;
  colorScheme: {
    primary: string;
    secondary: string;
    border: string;
    accent: string;
  };
  features: string[];
  limits: {
    atmDaily: string;
    posLimit: string;
    currencies: number;
  };
}

export interface CourseItem {
  id: string;
  title: string;
  category: 'Forex' | 'Crypto' | 'Indices' | 'Risk Management' | 'AI Trading';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Mastery';
  duration: string;
  modulesCount: number;
  instructor: string;
  rating: number;
  enrolled: number;
  isLiveSoon?: boolean;
}

export interface CopyTradingMaster {
  id: string;
  name: string;
  handle: string;
  winRate: number;
  monthlyReturn: number;
  totalProfit: string;
  copiers: number;
  riskRating: 'Low' | 'Medium' | 'High';
  strategy: string;
  verified: boolean;
}
