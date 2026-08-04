import React from 'react';
import { resumeData } from '../../data/resumeData';
import TechStackBadge from '../Showcase/TechStackBadge';

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-apple-text mb-4">
          Tech Stack & Engineering Skills
        </h2>
        <p className="text-base md:text-lg text-apple-secondary font-normal">
          Core technologies, frameworks, databases, and developer tools powering my production applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resumeData.skillCategories.map((cat, idx) => (
          <div key={idx} className="bg-white p-8 rounded-[24px] border border-apple-border shadow-sm apple-card-hover flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-apple-text mb-6 flex items-center justify-between border-b border-apple-border/60 pb-3">
                <span>{cat.name}</span>
                <span className="w-2 h-2 rounded-full bg-apple-blue"></span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <TechStackBadge key={sIdx} name={skill} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
