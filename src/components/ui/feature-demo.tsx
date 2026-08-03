'use client';
import React from 'react';
import { Server, Atom, Database, Coffee, Terminal, GitBranch } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const skills = [
	{
		title: 'Spring Boot',
		icon: Server,
		description: 'Building secure, robust, and highly scalable enterprise-grade backend APIs and microservices.',
	},
	{
		title: 'React',
		icon: Atom,
		description: 'Creating immersive, fluid, and state-driven responsive user interfaces using modern React hooks and Tailwind CSS.',
	},
	{
		title: 'MySQL',
		icon: Database,
		description: 'Designing optimized relational schemas, writing high-performance SQL queries, and ensuring database reliability.',
	},
	{
		title: 'Java',
		icon: Coffee,
		description: 'Developing high-performance, object-oriented applications with modern Java specifications.',
	},
	{
		title: 'Python',
		icon: Terminal,
		description: 'Leveraging clean scripts for automation, data analysis, scripting, and backend system tasks.',
	},
	{
		title: 'GitHub',
		icon: GitBranch,
		description: 'Enforcing robust version control workflows, repository management, and streamlined team collaboration.',
	},
];

export default function SkillsSection() {
	return (
		<section id="skills" className="py-24 md:py-32 w-full relative border-t border-white/5 bg-[#030303]">
			{/* Background Glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />
			
			<div className="mx-auto w-full max-w-6xl space-y-16 px-6 relative z-10">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
						<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
						<span className="text-[10px] font-bold tracking-[0.25em] text-orange-400 uppercase">Expertise</span>
					</div>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tight pb-2">
						Tech Stack & Skills
					</h2>
					<p className="text-neutral-400 mt-4 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
						A modern, highly optimized, and robust developer toolkit designed for building full-stack digital experiences.
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.3}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{skills.map((skill, i) => (
						<div key={i} className="rounded-3xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-orange-500/20 transition-all duration-500">
							<FeatureCard feature={skill} className="h-full" />
						</div>
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(10px)', y: 20, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ delay, duration: 1, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
