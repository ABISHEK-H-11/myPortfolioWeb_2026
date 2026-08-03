import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-[#030303] border-t border-white/5 pt-16 pb-8 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-white font-semibold tracking-wide text-lg mb-4">
              ABISHEK
            </div>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Building high-performance full-stack digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-neutral-400 font-light">
              <li><a href="#skills" className="hover:text-orange-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-orange-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-6">Stack</h4>
            <ul className="space-y-4 text-sm text-neutral-400 font-light">
              <li><a href="#skills" className="hover:text-orange-400 transition-colors">Spring Boot</a></li>
              <li><a href="#skills" className="hover:text-orange-400 transition-colors">React.js</a></li>
              <li><a href="#skills" className="hover:text-orange-400 transition-colors">MySQL</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-neutral-400 font-light">
              <li><a href="https://github.com/ABISHEK-H-11" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs font-light">
            © {new Date().getFullYear()} ABISHEK. All rights reserved.
          </p>
          <div className="flex gap-6 text-neutral-400 text-xs font-light">
            <a href="https://github.com/ABISHEK-H-11" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
