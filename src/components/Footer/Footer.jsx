import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-apple-border py-10 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-apple-muted">
        <div>
          © {new Date().getFullYear()} Senior AI & Frontend Architect Portfolio. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-apple-text transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-apple-text transition-colors">Terms of Service</a>
          <a href="#showcase" className="hover:text-apple-text transition-colors">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  );
}
