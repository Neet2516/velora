import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, Sparkles } from 'lucide-react';

export const AIAgentSection: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: 'ai' | 'user'; text: string }[]>([
    {
      sender: 'ai',
      text: "EUR/USD displays 87% Bullish confidence. Risk score is 23/100 (Low). How can I assist your strategy today?",
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const promptChips = ['Analyze EUR/USD', 'Gold Outlook', 'Risk Index', 'Market Sentiment'];

  const handleSend = (text?: string) => {
    const q = text || inputVal;
    if (!q.trim()) return;
    setMessages((prev) => [...prev, { sender: 'user', text: q }]);
    setInputVal('');
    setIsTyping(true);
    setTimeout(() => {
      let reply = "Momentum remains elevated with institutional absorption at key liquidity pools.";
      if (q.includes('EUR')) reply = "EUR/USD: 87% Bullish. Support at 1.0820. Target: 1.0960. Risk: 23/100.";
      else if (q.includes('Gold')) reply = "XAU/USD: $361B+ daily volume. Institutional accumulation active above $2,500.";
      else if (q.includes('Risk')) reply = "Velora Risk Index: 23/100 (Low). Volatility: 34/100 (Moderate).";
      else if (q.includes('Sentiment')) reply = "Global Sentiment: 87% Bullish across Tier-1 financial feeds.";
      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <section id="ai-agent" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-serif font-bold text-white leading-[1.1]"
        >
          Think. Analyze.{' '}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] to-[#7692FF]">
            Decide. Evolve.
          </span>
        </motion.h2>
      </div>

      {/* Image + Terminal Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Full AI Image */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#7692FF]/25 shadow-card-lux group"
        >
          <img
            src="/images/ai_agent_neural_brain.png"
            alt="Velora AI Agent Neural Brain"
            loading="lazy"
            className="w-full h-full min-h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050c26] via-transparent to-transparent" />

          {/* Floating HUD Badges */}
          <div className="absolute top-5 left-5 p-3 rounded-xl bg-[#050c26]/85 border border-[#7692FF]/30 backdrop-blur-md">
            <span className="text-[10px] text-slate-400 font-mono block">AI PREDICTION</span>
            <span className="text-sm font-display font-bold text-[#ABD2FA]">EUR/USD BULLISH</span>
            <span className="text-[10px] text-[#7692FF] block font-mono">87% CONFIDENCE</span>
          </div>

          <div className="absolute top-5 right-5 p-3 rounded-xl bg-[#050c26]/85 border border-[#7692FF]/30 backdrop-blur-md text-right">
            <span className="text-[10px] text-slate-400 font-mono block">RISK SCORE</span>
            <span className="text-sm font-display font-bold text-white">23/100</span>
            <span className="text-[10px] text-[#ABD2FA] block font-mono">LOW RISK</span>
          </div>

          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-sm font-serif italic text-white/80">
              "Real-time insights. AI-powered precision. Endless possibilities."
            </p>
          </div>
        </motion.div>

        {/* Right: Interactive Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col rounded-3xl bg-[#091540]/80 border border-[#7692FF]/30 backdrop-blur-2xl p-5 shadow-card-lux"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-3 pb-3 border-b border-[#7692FF]/20">
            <div className="w-9 h-9 rounded-lg bg-[#1B2CC1]/30 border border-[#7692FF]/40 flex items-center justify-center text-[#ABD2FA]">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-display font-bold text-white flex items-center gap-2">
                AI CO-PILOT <span className="w-2 h-2 rounded-full bg-[#ABD2FA] animate-pulse" />
              </h4>
              <p className="text-[10px] text-slate-400 font-mono">Neural Inference v2.4</p>
            </div>
          </div>

          {/* Quick Prompts */}
          <div className="flex flex-wrap gap-1.5 my-3">
            {promptChips.map((chip, i) => (
              <button
                key={i}
                onClick={() => handleSend(chip)}
                className="px-3 py-1 rounded-full bg-[#0e1d52] hover:bg-[#1B2CC1] border border-[#7692FF]/30 text-[10px] font-display text-slate-200 hover:text-white transition-colors"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 my-2 text-xs">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.sender === 'ai' && (
                  <div className="w-5 h-5 rounded-md bg-[#1B2CC1]/40 border border-[#7692FF]/40 flex items-center justify-center text-[#ABD2FA] shrink-0 mt-0.5">
                    <Sparkles className="w-2.5 h-2.5" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] p-3 rounded-2xl ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] text-white rounded-tr-none'
                      : 'bg-[#050c26]/90 border border-[#7692FF]/20 text-slate-200 rounded-tl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-1.5 text-[10px] text-slate-400 pl-7">
                <span className="w-1 h-1 rounded-full bg-[#ABD2FA] animate-bounce" />
                <span className="w-1 h-1 rounded-full bg-[#7692FF] animate-bounce" style={{ animationDelay: '0.1s' }} />
                <span className="w-1 h-1 rounded-full bg-[#1B2CC1] animate-bounce" style={{ animationDelay: '0.2s' }} />
                <span>Analyzing...</span>
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
              placeholder="Ask about markets..."
              className="flex-1 bg-[#050c26]/90 border border-[#7692FF]/30 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#ABD2FA] font-sans"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-xl bg-gradient-to-r from-[#1B2CC1] to-[#7692FF] text-white shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
