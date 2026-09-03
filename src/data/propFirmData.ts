import { PropFirmTier } from '../types';

export const PROP_FIRM_HERO = {
  title: "Velora's Own Prop Funded Firm",
  tagline: 'EMPOWERING TRADERS. FUNDING POTENTIAL.',
  motto: 'We fund. You trade. Together, we build the future.',
  description: "Velora's Prop Funded Firm is built to back skilled traders with the capital, tools, and support they need to thrive. No personal risk. Just real opportunities to grow, scale, and succeed.",
  status: 'Coming Soon',
  statusBadge: 'A POWERFUL PART OF VELORA GLOBAL’S FUTURE',
  fourPillars: [
    {
      title: 'ACCESS TO CAPITAL',
      desc: 'Trade larger accounts backed by Velora. Scale up to $2,000,000 as you demonstrate consistent profitability.',
      icon: 'Coins'
    },
    {
      title: 'NO PERSONAL RISK',
      desc: 'We fund the account. You trade with confidence without risking your personal life savings.',
      icon: 'ShieldCheck'
    },
    {
      title: 'FASTER PAYOUTS',
      desc: 'Instant & reliable bi-weekly or on-demand payouts directly to your Velora Forex Card or crypto wallet.',
      icon: 'Clock'
    },
    {
      title: 'TRADER-FIRST APPROACH',
      desc: 'Built for traders, by traders. Transparent rules, zero hidden traps, relaxed time limits, and 24/7 dedicated desk.',
      icon: 'Users'
    }
  ]
};

export const PROP_FIRM_TIERS: PropFirmTier[] = [
  {
    size: '$10,000',
    accountBalance: 10000,
    profitTargetPhase1: 800, // 8%
    profitTargetPhase2: 500, // 5%
    maxDailyLoss: 500, // 5%
    maxTotalDrawdown: 1000, // 10%
    profitSplit: '85% / 15%',
    price: 99
  },
  {
    size: '$25,000',
    accountBalance: 25000,
    profitTargetPhase1: 2000,
    profitTargetPhase2: 1250,
    maxDailyLoss: 1250,
    maxTotalDrawdown: 2500,
    profitSplit: '85% / 15%',
    price: 199
  },
  {
    size: '$50,000',
    accountBalance: 50000,
    profitTargetPhase1: 4000,
    profitTargetPhase2: 2500,
    maxDailyLoss: 2500,
    maxTotalDrawdown: 5000,
    profitSplit: '90% / 10%',
    price: 349
  },
  {
    size: '$100,000',
    accountBalance: 100000,
    profitTargetPhase1: 8000,
    profitTargetPhase2: 5000,
    maxDailyLoss: 5000,
    maxTotalDrawdown: 10000,
    profitSplit: '90% / 10%',
    price: 599
  },
  {
    size: '$200,000',
    accountBalance: 200000,
    profitTargetPhase1: 16000,
    profitTargetPhase2: 10000,
    maxDailyLoss: 10000,
    maxTotalDrawdown: 20000,
    profitSplit: '90% / 10%',
    price: 1099
  }
];
