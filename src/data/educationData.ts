import { CourseItem } from '../types';

export const EDUCATION_HERO = {
  title: 'Velora Global Education Platform',
  statusBadge: 'LIVE SOON',
  tagline: 'LEARN. TRADE. GROW. TOGETHER WITH VELORA GLOBAL.',
  description: 'Your ultimate destination to learn, grow and master the art of trading with Velora Global. Designed to shape the next generation of smart, successful traders.',
  pillars: [
    {
      title: 'Comprehensive Courses',
      desc: 'From basics to advanced strategies — learn at your own pace across all asset classes.',
      icon: 'BookOpen'
    },
    {
      title: 'Market Insights',
      desc: 'Stay updated with real-time market analysis, macro breakdowns, and daily institutional briefs.',
      icon: 'LineChart'
    },
    {
      title: 'Expert Mentors',
      desc: 'Learn directly from experienced veterans and active institutional portfolio managers.',
      icon: 'UserCheck'
    },
    {
      title: 'Trading Strategies',
      desc: 'Master proven, rule-based methodologies across forex, crypto, indices, and gold.',
      icon: 'Sliders'
    },
    {
      title: 'Live Classes',
      desc: 'Interactive live trading room sessions, weekly deep-dive webinars, and direct Q&A with experts.',
      icon: 'Video'
    },
    {
      title: 'Practical Learning',
      desc: 'Apply your knowledge immediately with backtesting simulators, case studies, and live market execution.',
      icon: 'Award'
    }
  ]
};

export const MOCK_COURSES: CourseItem[] = [
  {
    id: 'course-1',
    title: 'Institutional Order Flow & Smart Money Concepts',
    category: 'Forex',
    level: 'Advanced',
    duration: '14 Hours (28 Modules)',
    modulesCount: 28,
    instructor: 'Marcus Vance, Senior Macro Trader',
    rating: 4.95,
    enrolled: 4230,
    isLiveSoon: false
  },
  {
    id: 'course-2',
    title: 'Mastering Gold & Currency Pairs Arbitrage',
    category: 'Risk Management',
    level: 'Intermediate',
    duration: '9 Hours (18 Modules)',
    modulesCount: 18,
    instructor: 'Elena Rostova, Quantitative Analyst',
    rating: 4.88,
    enrolled: 3120,
    isLiveSoon: false
  },
  {
    id: 'course-3',
    title: 'AI-Driven Algorithmic Bot Strategies',
    category: 'AI Trading',
    level: 'Mastery',
    duration: '16 Hours (32 Modules)',
    modulesCount: 32,
    instructor: 'Dr. Aaron Chen, AI Systems Lead',
    rating: 4.98,
    enrolled: 5410,
    isLiveSoon: true
  },
  {
    id: 'course-4',
    title: 'Foundations of Global Currency Markets',
    category: 'Forex',
    level: 'Beginner',
    duration: '6 Hours (12 Modules)',
    modulesCount: 12,
    instructor: 'Sarah Jenkins, Trading Educator',
    rating: 4.91,
    enrolled: 8200,
    isLiveSoon: false
  }
];

export const UPCOMING_LIVE_SESSIONS = [
  {
    id: 'session-1',
    title: 'FOMC Reaction & Gold (XAU/USD) Tactical Setup',
    speaker: 'Marcus Vance & AI Agent Live Demo',
    time: 'Tomorrow, 17:00 UTC',
    participantsRegistered: 1840,
    status: 'Confirmed'
  },
  {
    id: 'session-2',
    title: 'Prop Firm Challenge Strategy: Passing Phase 1 in 10 Days',
    speaker: 'David Miller, Master Prop Trader',
    time: 'Thursday, 14:00 UTC',
    participantsRegistered: 2190,
    status: 'Open'
  }
];
