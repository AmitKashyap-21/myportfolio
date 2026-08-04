import React from 'react';
import { ExternalLink } from 'lucide-react';
import TechStackBadge from '../Showcase/TechStackBadge';

const FEATURED_PROJECTS = [
  {
    title: "SastaTaxi – Ride Fare Comparison Platform",
    period: "2024",
    tagline: "Mobile application to compare estimated ride fares across Uber, Ola, Rapido, and inDrive in real-time.",
    bullets: [
      "Designed an intuitive interface enabling pricing comparisons & direct platform redirection.",
      "Implemented scalable Flutter architecture with REST API integration for ride data workflows."
    ],
    tags: ["Flutter", "Dart", "Android", "REST APIs"]
  },
  {
    title: "Kisan Ally – Agriculture Platform",
    period: "2025",
    tagline: "AI-powered agricultural assistant designed to provide intelligent farming support.",
    bullets: [
      "Integrated AI-based crop disease detection, multilingual NLP, and voice-enabled interaction.",
      "Developed an accessible architecture focused on improving farmer support through AI."
    ],
    tags: ["Python", "PyTorch", "Computer Vision", "NLP", "FastAPI"]
  },
  {
    title: "Quiz & Flashcard Practice App",
    period: "2026",
    tagline: "Full-stack educational platform for quiz creation, automated scoring, and topic flashcard practice.",
    bullets: [
      "Role-based functionality for question management, quiz creation, and performance tracking.",
      "Relational PostgreSQL schemas with secure JWT authentication & interactive flashcards."
    ],
    tags: ["React", "REST APIs", "PostgreSQL", "JWT Authentication"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-apple-alt border-t border-b border-apple-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-apple-text mb-4">
            Featured Projects
          </h2>
          <p className="text-base md:text-lg text-apple-secondary font-normal">
            Real-world applications spanning AI/ML, Mobile App Development, and Full-Stack Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((proj, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[20px] border border-apple-border shadow-sm apple-card-hover flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-apple-text pr-2">{proj.title}</h3>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-apple-alt border border-apple-border text-apple-secondary shrink-0">
                    {proj.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-apple-secondary mb-4 leading-relaxed">{proj.tagline}</p>
                <ul className="space-y-2 mb-6">
                  {proj.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="text-xs text-apple-muted flex items-start gap-1.5 leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-apple-blue mt-1.5 shrink-0"></span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tags.map((tag, tIdx) => (
                    <TechStackBadge key={tIdx} name={tag} />
                  ))}
                </div>
                <a href="#showcase" className="inline-flex items-center gap-1.5 text-xs font-semibold text-apple-blue hover:underline">
                  <span>View Execution Pipeline</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
