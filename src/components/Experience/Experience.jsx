import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';
import { resumeData } from '../../data/resumeData';
import TechStackBadge from '../Showcase/TechStackBadge';

export default function Experience() {
  return (
    <section id="experience" className="py-20 max-w-6xl mx-auto px-6">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-apple-text mb-4">
          Experience & Academic Background
        </h2>
        <p className="text-base md:text-lg text-apple-secondary font-normal">
          Hands-on industry experience in Generative AI recommendation systems, academic credentials, and industry skill badges.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Columns: Experience & Education */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Industry Experience Card */}
          <div className="bg-white rounded-[24px] border border-apple-border p-8 shadow-sm apple-card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-apple-alt flex items-center justify-center text-apple-blue">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-apple-text">Work Experience</h3>
                <p className="text-xs text-apple-muted">Professional roles & internships</p>
              </div>
            </div>

            {resumeData.experience.map((exp, idx) => (
              <div key={idx} className="space-y-4 pt-4 border-t border-apple-border/60 first:border-t-0 first:pt-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-lg font-semibold text-apple-text">{exp.role}</h4>
                    <div className="text-sm font-medium text-apple-blue">{exp.company}</div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-apple-alt rounded-full text-xs font-medium text-apple-secondary shrink-0">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-apple-secondary leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-apple-blue mt-2 shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, sIdx) => (
                    <TechStackBadge key={sIdx} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education Card */}
          <div className="bg-white rounded-[24px] border border-apple-border p-8 shadow-sm apple-card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-apple-alt flex items-center justify-center text-apple-blue">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-apple-text">Education</h3>
                <p className="text-xs text-apple-muted">Academic qualifications</p>
              </div>
            </div>

            <div className="space-y-6">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="pt-4 border-t border-apple-border/60 first:border-t-0 first:pt-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="text-base font-semibold text-apple-text">{edu.degree}</h4>
                    <span className="text-xs font-medium text-apple-muted">{edu.period}</span>
                  </div>
                  <div className="text-sm font-medium text-apple-secondary mb-2">{edu.institution}</div>
                  <p className="text-xs text-apple-muted leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Certifications */}
        <div className="space-y-8">
          <div className="bg-white rounded-[24px] border border-apple-border p-8 shadow-sm apple-card-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-apple-alt flex items-center justify-center text-apple-blue">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-apple-text">Certifications</h3>
                <p className="text-xs text-apple-muted">Verified skill badges</p>
              </div>
            </div>

            <div className="space-y-4">
              {resumeData.certifications.map((cert, idx) => (
                <div key={idx} className="p-4 bg-apple-alt/60 rounded-xl border border-apple-border/60">
                  <div className="text-xs font-bold uppercase tracking-wider text-apple-blue mb-1">{cert.type}</div>
                  <h4 className="text-sm font-semibold text-apple-text mb-1">{cert.title}</h4>
                  <div className="text-xs text-apple-secondary">{cert.issuer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
