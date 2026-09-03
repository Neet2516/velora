import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Globe, Handshake, Diamond, CheckCircle, Clock } from 'lucide-react';
import { ROADMAP_STAGES } from '../../data/roadmapData';
import { RoadmapStage } from '../../types';

const stageIcons: Record<string, React.ElementType> = {
  Rocket,
  TrendingUp,
  Globe,
  Handshake,
  Diamond,
};

// Exact descriptions from reference site https://velora-global.vercel.app
const referenceDescriptions: Record<string, { title: string; subtitle: string; desc: string }> = {
  launch: {
    title: 'LAUNCH',
    subtitle: 'THE BEGINNING',
    desc: 'The first spark of Velora Global — the foundation of one complete financial ecosystem is laid.',
  },
  growth: {
    title: 'GROWTH',
    subtitle: 'BUILDING MOMENTUM',
    desc: "Expanding the ecosystem's core pillars as traders and partners begin to join the movement.",
  },
  expansion: {
    title: 'EXPANSION',
    subtitle: 'BREAKING BOUNDARIES',
    desc: 'Reaching further across global markets — Forex, Gold, Crypto and beyond, all in one ecosystem.',
  },
  collaboration: {
    title: 'COLLABORATION',
    subtitle: 'STRONGER TOGETHER',
    desc: 'Uniting traders, leaders and partners worldwide through strong, transparent partnerships.',
  },
  legacy: {
    title: 'LEGACY',
    subtitle: 'BUILDING THE FUTURE',
    desc: "One rank, one team, one vision — building the world's complete finance ecosystem for the long term.",
  },
};

export const RoadmapSection: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<RoadmapStage>(ROADMAP_STAGES[0]);

  const currentRef = referenceDescriptions[selectedStage.id] || {
    title: selectedStage.title,
    subtitle: selectedStage.subtitle,
    desc: selectedStage.description,
  };

  return (
    <section id="roadmap" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#1B2CC1]/15 via-[#7692FF]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header matching reference */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#091540]/80 border border-[#7692FF]/30 text-[#ABD2FA] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 font-mono"
        >
          <span>THE JOURNEY AHEAD</span>
          <span className="text-[#7692FF]">∞</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight"
        >
          ROADMAP OF{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] via-[#7692FF] to-[#1B2CC1]">
            VELORA GLOBAL
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          className="mt-4 text-base sm:text-lg text-slate-300"
        >
          Five defining milestones in the progressive realization of the world's complete finance ecosystem.
        </motion.p>
      </div>

      {/* Interactive Horizontal Timeline */}
      <div className="relative mb-14">
        {/* Connecting Track Line */}
        <div className="hidden md:block absolute top-8 left-12 right-12 h-1 bg-gradient-to-r from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA] rounded-full shadow-[0_0_15px_rgba(118,146,255,0.4)]" />

        {/* Stage Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
          {ROADMAP_STAGES.map((stage) => {
            const Icon = stageIcons[stage.iconName] || Rocket;
            const isSelected = selectedStage.id === stage.id;
            const refInfo = referenceDescriptions[stage.id];

            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(stage)}
                className={`group text-left md:text-center p-4 rounded-2xl transition-all flex md:flex-col items-center gap-4 md:gap-3 ${
                  isSelected
                    ? 'bg-[#0e1d52] border-2 border-[#ABD2FA] shadow-[0_0_25px_rgba(118,146,255,0.4)]'
                    : 'bg-[#091540]/60 border border-[#7692FF]/20 hover:border-[#7692FF]/40'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isSelected
                      ? 'bg-gradient-to-tr from-[#1B2CC1] to-[#7692FF] text-white shadow-[0_0_20px_rgba(118,146,255,0.6)] scale-110'
                      : 'bg-[#050c26] text-slate-400 border border-[#7692FF]/30 group-hover:text-white group-hover:border-[#ABD2FA]'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <div className="text-[10px] font-mono tracking-widest text-[#ABD2FA] uppercase font-semibold">
                    STAGE 0{stage.stepNumber}
                  </div>
                  <div className="text-base sm:text-lg font-display font-bold text-white tracking-wide">
                    {refInfo.title}
                  </div>
                  <div className="text-[11px] font-medium text-[#7692FF]">
                    {refInfo.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Stage Detail Card */}
      <motion.div
        key={selectedStage.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0e1d52]/90 via-[#091540]/95 to-[#050c26]/95 border border-[#7692FF]/30 backdrop-blur-2xl shadow-card-lux"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-[#7692FF]/20">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-xs px-3 py-1 rounded-full font-mono font-semibold bg-[#1B2CC1]/30 border border-[#7692FF]/30 text-[#ABD2FA]">
                STAGE 0{selectedStage.stepNumber}
              </span>
              <span className="text-xs px-3 py-1 rounded-full font-semibold bg-[#091540] border border-[#7692FF]/30 text-white capitalize flex items-center gap-1.5">
                {selectedStage.status === 'active' ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-[#ABD2FA]" />
                    <span>In Active Foundation</span>
                  </>
                ) : (
                  <>
                    <Clock className="w-3.5 h-3.5 text-[#7692FF]" />
                    <span>Upcoming Milestone</span>
                  </>
                )}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white mt-2">
              {currentRef.title} —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ABD2FA] to-[#7692FF]">
                {currentRef.subtitle}
              </span>
            </h3>
            <p className="text-sm sm:text-base text-slate-200 mt-2 max-w-3xl leading-relaxed italic border-l-2 border-[#7692FF] pl-3">
              "{currentRef.desc}"
            </p>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold font-mono">
              Core Pillars In Focus
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedStage.ecosystemHighlights.map((hl, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-lg bg-[#050c26] border border-[#7692FF]/30 text-slate-200 font-medium"
                >
                  {hl}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Milestones Checklist */}
        <div className="mt-8">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 font-mono">
            Key Architecture Deliverables & Objectives
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {selectedStage.milestones.map((m, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-[#091540]/60 border border-[#7692FF]/20 text-xs sm:text-sm text-slate-200"
              >
                <div className="w-5 h-5 rounded-full bg-[#1B2CC1]/30 border border-[#7692FF]/40 flex items-center justify-center text-[#ABD2FA] shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <span>{m}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
