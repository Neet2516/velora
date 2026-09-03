import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BrainCircuit,
  TrendingUp,
  Send,
  Sparkles,
  Bot,
  CheckCircle2,
  Activity,
  Layers,
  Zap,
} from 'lucide-react';
import { CanvasWrapper } from '../3d/CanvasWrapper';
import { NeuralBrain3D } from '../3d/NeuralBrain3D';
import { AI_AGENT_STATS } from '../../data/aiData';

export const AIAgentSection: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: 'ai' | 'user'; text: string }[]>([
    {
      sender: 'ai',
      text: "Hello, Trader. Here is your Velora AI briefing: EUR/USD displays 87% Bullish confidence with institutional support at 1.0820. How can I assist your trading strategy today?",
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const promptChips = [
    'Analyze EUR/USD',
    'Calculate Risk Index',
    'Gold Safe-Haven Outlook',
    'Market News Sentiment',
  ];

  const handleSend = (textToSend?: string) => {
    const q = textToSend || inputVal;
    if (!q.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: q }]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = "Velora AI has scanned multi-market order flow. Momentum remains elevated with institutional absorption at key liquidity pools.";
      if (q.includes('EUR') || q.includes('EUR/USD')) {
        reply = "EUR/USD Analysis: 87% Bullish confidence. Structural support verified at 1.0820. Immediate target: 1.0960. Risk score is 23/100 (Low Risk).";
      } else if (q.includes('Risk') || q.includes('Index')) {
        reply = "Velora Risk Index is 23/100 (Low Risk). Volatility measured at 34/100 (Moderate). Stop-loss protocols recommended within standard 1.5% capital limits.";
      } else if (q.includes('Gold')) {
        reply = "XAU/USD (Gold) Safe-Haven Outlook: Daily volume surges past $361B+. Institutional accumulation active above $2,500 benchmark.";
      } else if (q.includes('Sentiment')) {
        reply = "Global News Sentiment stands at 87% positive/bullish across Tier-1 financial feeds, with minimal liquidation cascade triggers.";
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 550);
  };

  const pillars = [
    {
      title: 'SMARTER ANALYSIS',
      desc: 'AI-powered insights for deeper market understanding across multi-asset order flow.',
    },
    {
      title: 'BETTER DECISIONS',
      desc: 'Real-time data feeds, institutional sentiment models, and stronger statistical outcomes.',
    },
    {
      title: 'STRATEGY DISCUSSIONS',
      desc: 'Collaborate with your AI co-pilot in natural language to formulate and stress-test rules.',
    },
    {
      title: 'FUTURE PLANNING',
      desc: 'Predict upcoming liquidity sweeps, anticipate volatility bursts, and stay ahead of the game.',
    },
    {
      title: 'RISK MANAGEMENT',
      desc: 'Intelligent real-time anomaly alerts, capital preservation rules, and live drawdown safeguards.',
    },
  ];

  return (
    <section id="ai-agent" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#1B2CC1]/15 via-[#7692FF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#091540]/80 border border-[#7692FF]/30 text-[#ABD2FA] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
        >
          <BrainCircuit className="w-4 h-4 text-[#ABD2FA]" />
          <span>INTRODUCING VELORA AI AGENT</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight"
        >
          Your Intelligent Partner in{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] via-[#7692FF] to-[#1B2CC1]">
            Trading & Markets
          </span>
        </motion.h2>

        <div className="flex items-center justify-center gap-3 mt-3">
          <span className="h-[1px] w-8 bg-[#7692FF]/50" />
          <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#ABD2FA] uppercase font-mono">
            {AI_AGENT_STATS.motto}
          </p>
          <span className="h-[1px] w-8 bg-[#1B2CC1]/50" />
        </div>
      </div>

      {/* Main Showcase: 3D Neural Brain + Interactive Terminal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        {/* Left Column: 3D Neural Brain */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 relative h-[420px] sm:h-[480px] rounded-3xl bg-[#091540]/70 border border-[#7692FF]/30 overflow-hidden shadow-card-lux flex flex-col justify-between p-6"
        >
          <div className="absolute inset-0 z-0">
            <CanvasWrapper camera={{ position: [0, 0, 4.2], fov: 45 }}>
              <NeuralBrain3D />
            </CanvasWrapper>
          </div>

          {/* Floating HUD Badges */}
          <div className="relative z-10 flex items-center justify-between pointer-events-none">
            <div className="p-3 rounded-2xl bg-[#050c26]/90 border border-[#7692FF]/30 backdrop-blur-md">
              <span className="text-[10px] text-slate-400 font-mono block">AI PREDICTION</span>
              <span className="text-sm font-bold text-[#ABD2FA]">EUR/USD BULLISH</span>
              <span className="text-[10px] text-[#7692FF] block font-semibold">87% CONFIDENCE</span>
            </div>

            <div className="p-3 rounded-2xl bg-[#050c26]/90 border border-[#1B2CC1]/50 backdrop-blur-md text-right">
              <span className="text-[10px] text-slate-400 font-mono block">NEWS SENTIMENT</span>
              <span className="text-sm font-bold text-white">87% BULLISH</span>
              <span className="text-[10px] text-[#ABD2FA] block">REAL-TIME FEEDS</span>
            </div>
          </div>

          {/* Bottom HUD Metrics */}
          <div className="relative z-10 grid grid-cols-2 gap-3 pointer-events-none">
            <div className="p-3 rounded-2xl bg-[#050c26]/90 border border-[#7692FF]/20 backdrop-blur-md">
              <span className="text-[10px] text-slate-400 font-mono block">VOLATILITY INDEX</span>
              <span className="text-xs font-bold text-white">MODERATE (34/100)</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#050c26]/90 border border-[#7692FF]/30 backdrop-blur-md">
              <span className="text-[10px] text-slate-400 font-mono block">RISK SCORE</span>
              <span className="text-xs font-bold text-[#ABD2FA]">23/100 • LOW RISK</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: AI Interactive Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 flex flex-col h-[480px] rounded-3xl bg-[#091540]/80 border border-[#7692FF]/30 backdrop-blur-2xl p-6 shadow-card-lux justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-3.5 border-b border-[#7692FF]/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1B2CC1]/30 border border-[#7692FF]/40 flex items-center justify-center text-[#ABD2FA]">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-display font-bold text-white flex items-center gap-2">
                    <span>VELORA AI CO-PILOT</span>
                    <span className="w-2 h-2 rounded-full bg-[#ABD2FA] animate-pulse" />
                  </h4>
                  <p className="text-xs text-slate-400">Neural Inference Model v2.4</p>
                </div>
              </div>
              <span className="text-xs font-mono text-[#ABD2FA] px-2.5 py-0.5 rounded-full bg-[#1B2CC1]/25 border border-[#7692FF]/30">
                Live Feed
              </span>
            </div>

            <div className="flex flex-wrap gap-2 my-3.5">
              {promptChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(chip)}
                  className="px-3 py-1 rounded-full bg-[#0e1d52] hover:bg-[#1B2CC1] border border-[#7692FF]/30 text-[11px] font-medium text-slate-200 hover:text-white transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-2 my-2 text-xs sm:text-sm">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'ai' && (
                  <div className="w-6 h-6 rounded-lg bg-[#1B2CC1]/40 border border-[#7692FF]/40 flex items-center justify-center text-[#ABD2FA] shrink-0 mt-0.5">
                    <Sparkles className="w-3 h-3" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] text-white font-medium rounded-tr-none'
                      : 'bg-[#050c26]/90 border border-[#7692FF]/20 text-slate-200 rounded-tl-none leading-relaxed'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-400 pl-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ABD2FA] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#7692FF] animate-bounce delay-100" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#1B2CC1] animate-bounce delay-200" />
                <span>Velora AI analyzing order flow...</span>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="pt-3 border-t border-[#7692FF]/20 flex items-center gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything about EUR/USD, gold, or risk metrics..."
              className="flex-1 bg-[#050c26]/90 border border-[#7692FF]/30 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ABD2FA] transition-colors"
            />
            <button
              onClick={() => handleSend()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] text-white hover:shadow-[0_0_15px_rgba(118,146,255,0.4)] transition-all shrink-0"
              aria-label="Send Query"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* 5 Core Pillars from PDF Page 9 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
        {pillars.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-[#091540]/60 border border-[#7692FF]/20 hover:border-[#ABD2FA]/40 transition-colors"
          >
            <div className="text-xs font-bold text-[#ABD2FA] mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#7692FF]" />
              <span>{item.title}</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom Bar from PDF Page 9 */}
      <div className="py-4 px-6 rounded-2xl bg-gradient-to-r from-[#091540] via-[#0e1d52] to-[#091540] border border-[#7692FF]/30 text-center">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider font-mono">
          <span className="flex items-center gap-1.5 text-[#ABD2FA]">
            <Activity className="w-4 h-4" /> REAL-TIME INSIGHTS
          </span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5 text-[#7692FF]">
            <BrainCircuit className="w-4 h-4" /> AI-POWERED PRECISION
          </span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5 text-white">
            <Zap className="w-4 h-4" /> AUTOMATED EXECUTION
          </span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="flex items-center gap-1.5 text-[#ABD2FA]">
            <Layers className="w-4 h-4" /> ENDLESS POSSIBILITIES
          </span>
        </div>
      </div>
    </section>
  );
};
