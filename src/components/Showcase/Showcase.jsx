import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useProjectSwitch } from '../../hooks/useProjectSwitch';
import PipelineCard from './PipelineCard';
import TechStackBadge from './TechStackBadge';

const TABS = [
  { key: 'kisan', label: 'Kisan Ally AI' },
  { key: 'sasta', label: 'SastaTaxi App' },
  { key: 'quiz', label: 'Quiz & Flashcards' },
  { key: 'rag', label: 'RAG Engine' }
];

export default function Showcase() {
  const { activeKey, activeProject, switchProject, isFading } = useProjectSwitch('kisan');

  return (
    <section id="showcase" className="py-20 bg-apple-alt border-t border-b border-apple-border">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-apple-text mb-4">
            Interactive AI & System Architecture
          </h2>
          <p className="text-base md:text-lg text-apple-secondary font-normal">
            Explore execution pipelines across Computer Vision, Multi-App Fare Aggregation, Assessment Engines, and RAG Intelligence.
          </p>
        </div>

        {/* MAIN CONTAINER (Window Wrapper) */}
        <div className="bg-white rounded-[24px] border border-apple-border shadow-[0_8px_30px_rgba(0,0,0,0.05)] overflow-hidden">
          
          {/* WINDOW HEADER & APPLE SEGMENTED CONTROL TABS */}
          <div className="px-6 py-4 bg-white border-b border-apple-border flex flex-col md:flex-row items-center justify-between gap-4">
            {/* macOS Window Dots & Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/30 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/30 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/30 inline-block"></span>
              </div>
              <div className="h-4 w-[1px] bg-apple-border mx-1"></div>
              <span className="text-sm md:text-base font-semibold text-apple-text tracking-tight">
                {activeProject.title}
              </span>
            </div>

            {/* Segmented Control Tabs */}
            <div className="segmented-control p-1 rounded-xl flex items-center gap-1 border border-apple-border/60 overflow-x-auto max-w-full">
              {TABS.map((tab) => {
                const isActive = activeKey === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => switchProject(tab.key)}
                    className={`project-tab px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all shrink-0 ${
                      isActive 
                        ? 'tab-active' 
                        : 'text-apple-secondary hover:text-apple-text'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* MAIN INTERACTIVE DISPLAY AREA */}
          <div className="p-8 md:p-12 space-y-12 bg-apple-bg/40">
            
            {/* PIPELINE VISUALIZATION HEADER */}
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-apple-muted mb-1">
                Live Execution Pipeline
              </div>
              <h3 className="text-xs text-apple-secondary">
                Inspect architecture stages for {activeProject.tabLabel}
              </h3>
            </div>

            {/* PIPELINE FLOATING CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
              {activeProject.steps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <PipelineCard
                    title={step.title}
                    desc={step.desc}
                    icon={step.icon}
                    stage={step.stage}
                    status={step.status}
                  />
                  {/* Connector Arrows for Desktop */}
                  {idx < activeProject.steps.length - 1 && (
                    <div 
                      className="hidden md:flex absolute top-1/2 -translate-y-1/2 z-10 text-apple-blue pointer-events-none"
                      style={{ left: `${(idx + 1) * 25 - 1.5}%` }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* PROJECT OVERVIEW PANEL */}
            <div 
              className={`bg-white rounded-[20px] border border-apple-border p-8 md:p-10 shadow-sm transition-opacity duration-300 ${
                isFading ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Column: Summary & Problem Solved */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-apple-text tracking-tight mb-2">
                      {activeProject.title}
                    </h3>
                    <p className="text-apple-secondary text-sm md:text-base leading-relaxed">
                      {activeProject.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-apple-border">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-apple-muted mb-2">
                      Impact & Problem Solved
                    </h4>
                    <p className="text-sm text-apple-secondary leading-relaxed">
                      {activeProject.problem}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-apple-muted mb-3">
                      Key Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-apple-text">
                      {activeProject.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-apple-blue shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Tech Stack & Actions */}
                <div className="flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-apple-border pt-6 lg:pt-0 lg:pl-8 space-y-8">
                  
                  {/* Tech Stack Pills */}
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-apple-muted mb-3">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.stack.map((item, i) => (
                        <TechStackBadge key={i} name={item} />
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-4">
                    <a 
                      href={activeProject.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 bg-apple-blue hover:bg-apple-blueHover text-white font-medium text-sm rounded-full transition-all shadow-sm"
                    >
                      <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                      <span>View GitHub Repository</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
