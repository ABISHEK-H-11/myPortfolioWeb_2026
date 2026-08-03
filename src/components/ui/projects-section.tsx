'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckCircle2, Server, ShoppingBag, Search, Code2, ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  technologies: string[];
  links: {
    label: string;
    url: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

const projectsData: Project[] = [
  {
    id: 'employee-discovery',
    title: 'Company Employee Discovery API',
    subtitle: 'Automated Search & Caching Engine',
    description:
      'A Spring Boot REST API that discovers employee LinkedIn profiles based on a company name using the DataForSEO API. The system returns up to 10 unique employee profiles per request, stores discovered profiles in MySQL, prevents duplicate records, caches previous results to minimize external API costs, and maintains independent search progress for each company.',
    icon: Search,
    features: [
      'Discover employee profiles by company name',
      'Returns 10 unique profiles per request',
      'Intelligent caching to reduce API cost',
      'Duplicate profile prevention',
      'Company-wise search progress tracking',
      'MySQL database storage',
      'RESTful API architecture',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'Spring Data JPA',
      'MySQL',
      'DataForSEO API',
    ],
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/ABISHEK-H-11/Final_employee_finder_DataForSeo',
      },
    ],
  },
  {
    id: 'tradenest',
    title: 'TradeNest – E-Commerce Platform',
    subtitle: 'Full-Stack E-Commerce System',
    description:
      'A full-stack e-commerce application built with Spring Boot and React.js. The backend follows a layered architecture and provides secure REST APIs with JWT authentication, role-based authorization, MySQL database integration, and Razorpay payment gateway integration.',
    icon: ShoppingBag,
    features: [
      'JWT Authentication & Authorization',
      'Secure REST APIs',
      'Product & Category Management',
      'Shopping Cart & Order Management',
      'Razorpay Payment Integration',
      'MySQL Database',
      'React Frontend Integration',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'Spring Data JPA',
      'REST APIs',
      'MySQL',
      'React.js',
      'Razorpay',
    ],
    links: [
      {
        label: 'GitHub Backend',
        url: 'https://github.com/ABISHEK-H-11/tradnest-backend',
      },
      {
        label: 'GitHub Frontend',
        url: 'https://github.com/ABISHEK-H-11/tradnest-frontend',
      },
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 w-full relative border-t border-white/5 bg-[#030303]">
      {/* Background Glows */}
      <div className="absolute top-1/3 right-1/4 w-[550px] h-[550px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.25em] text-orange-400 uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tight pb-2">
            Featured Projects
          </h2>
          <p className="text-neutral-400 mt-4 text-base md:text-lg font-light leading-relaxed">
            A showcase of production-grade backends, robust database architectures, and full-stack web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, idx) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
                className="glass-panel p-8 md:p-10 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-all duration-500 hover:shadow-[0_0_35px_rgba(249,115,22,0.08)] flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle Card Ambient Highlight */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Top Header & Icon */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-300">
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-widest text-orange-400/80 uppercase">
                          {project.subtitle}
                        </span>
                        <h3 className="text-2xl font-display font-semibold text-white group-hover:text-orange-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <Code2 className="size-3.5 text-orange-400" /> Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300 font-light">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-orange-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Badges */}
                  <div className="mb-8">
                    <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.03] border border-white/10 text-neutral-300 group-hover:border-orange-500/20 group-hover:bg-orange-500/[0.03] transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-6 border-t border-white/5 flex flex-wrap gap-3">
                  {project.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs font-medium text-white hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-300 transition-all duration-300 group/btn"
                    >
                      <Github className="size-4 text-orange-400 group-hover/btn:scale-110 transition-transform" />
                      <span>{link.label}</span>
                      <ArrowUpRight className="size-3.5 text-neutral-400 group-hover/btn:text-orange-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
