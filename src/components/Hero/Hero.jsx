import React from 'react';
import { resumeData } from '../../data/resumeData';
import { Phone, Sparkles } from 'lucide-react';

const METRICS = [
  { label: 'Degree', value: 'B.Tech AI & Data Science' },
  { label: 'GenAI Experience', value: 'Intern @ Minipix Entertainment' },
  { label: 'Primary Stack', value: 'Python, PyTorch, FastAPI, Qdrant' },
  { label: 'Location', value: 'Lucknow, UP / Remote' }
];

export default function Hero() {
  const { personalInfo, summary } = resumeData;

  return (
    <header className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">
      {/* Status Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-apple-alt border border-apple-border text-xs font-medium text-apple-secondary mb-8">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        {personalInfo.status}
      </div>

      {/* Main Name & Title */}
      <div className="text-xs uppercase tracking-widest font-bold text-apple-blue mb-3">
        {personalInfo.name} — {personalInfo.title}
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-apple-text max-w-4xl mx-auto leading-tight mb-6">
        Building intelligent GenAI systems, RAG pipelines & data-driven applications.
      </h1>

      {/* Subtitle / Summary */}
      <p className="text-lg md:text-xl text-apple-secondary max-w-3xl mx-auto font-normal leading-relaxed mb-10">
        {summary}
      </p>

      {/* CTAs & Quick Info */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
        <a 
          href="#showcase" 
          className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-apple-blue hover:bg-apple-blueHover text-white font-medium text-sm rounded-full transition-all shadow-sm hover:shadow"
        >
          <Sparkles className="w-4 h-4 shrink-0" />
          <span>Explore AI Showcase</span>
        </a>
        <a 
          href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
          className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-apple-alt border border-apple-border text-apple-text font-medium text-sm rounded-full transition-all shadow-sm"
        >
          <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{personalInfo.phone}</span>
        </a>
        <a 
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-apple-alt border border-apple-border text-apple-text font-medium text-sm rounded-full transition-all shadow-sm"
        >
          <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <span>GitHub Profile</span>
        </a>
      </div>

      {/* Quick Metrics / Highlights Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-apple-border max-w-4xl mx-auto text-left">
        {METRICS.map((metric, index) => (
          <div key={index}>
            <div className="text-xs uppercase tracking-wider text-apple-muted font-semibold mb-1">
              {metric.label}
            </div>
            <div className="text-sm font-medium text-apple-text">
              {metric.value}
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
