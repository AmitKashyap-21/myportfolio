import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { resumeData } from '../../data/resumeData';

export default function Contact() {
  const { personalInfo } = resumeData;

  return (
    <section id="contact" className="py-20 max-w-6xl mx-auto px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-apple-text mb-4">
          Let's Connect & Build
        </h2>
        <p className="text-base md:text-lg text-apple-secondary font-normal mb-8 leading-relaxed">
          Open to Generative AI, Machine Learning, and Full-Stack Engineering roles, internships, and data-driven initiatives.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a 
            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm rounded-full transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>{personalInfo.phone}</span>
          </a>

          <a 
            href={`mailto:${personalInfo.email}`} 
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-apple-blue hover:bg-apple-blueHover text-white font-medium text-sm rounded-full transition-all shadow-sm"
          >
            <Mail className="w-4 h-4 shrink-0" />
            <span>{personalInfo.email}</span>
          </a>

          {/* Simple Icons GitHub Logo */}
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

          {/* Simple Icons LinkedIn Logo */}
          <a 
            href={personalInfo.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-apple-alt border border-apple-border text-apple-text font-medium text-sm rounded-full transition-all shadow-sm"
          >
            <svg className="w-4 h-4 shrink-0 fill-[#0A66C2]" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z"/>
            </svg>
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
}
