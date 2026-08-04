import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-apple-bg/80 backdrop-blur-md border-b border-apple-border/50">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-bold tracking-tight text-apple-text hover:text-apple-blue transition-colors">
          Amit Kashyap <span className="text-apple-muted font-normal text-xs ml-1">AI & DS</span>
        </a>
        <div className="flex items-center gap-5 text-xs font-medium text-apple-secondary overflow-x-auto">
          <a href="#showcase" className="hover:text-apple-text transition-colors">Showcase</a>
          <a href="#experience" className="hover:text-apple-text transition-colors">Experience</a>
          <a href="#skills" className="hover:text-apple-text transition-colors">Skills</a>
          <a href="#projects" className="hover:text-apple-text transition-colors">Projects</a>
          <a href="#contact" className="hover:text-apple-text transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
