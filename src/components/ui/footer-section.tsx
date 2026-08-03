'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FrameIcon } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Navigation',
		links: [
			{ title: 'Home', href: '#' },
			{ title: 'Skills', href: '#skills' },
			{ title: 'Projects', href: '#projects' },
			{ title: 'Contact', href: '#contact' },
		],
	},
	{
		label: 'Connect',
		links: [
			{ title: 'GitHub', href: 'https://github.com/ABISHEK-H-11' },
			{ title: 'LinkedIn', href: 'https://linkedin.com' },
		],
	},
];

export function Footer() {
	return (
		<footer className="relative w-full flex flex-col items-center justify-center border-t border-white/5 bg-[#030303] px-6 py-16 lg:py-24 mt-20 overflow-hidden">
			{/* Cinematic Footer Glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.15),transparent_70%)] pointer-events-none" />
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.2),transparent_70%)] pointer-events-none" />
			<div className="bg-gradient-to-r from-transparent via-orange-500/50 to-transparent absolute top-0 left-1/2 h-px w-full max-w-4xl -translate-x-1/2" />

			<div className="grid w-full max-w-7xl gap-12 xl:grid-cols-3 xl:gap-8 relative z-10">
				<AnimatedContainer className="space-y-6">
					<div className="flex items-center gap-3">
						<div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-glow" />
						<span className="text-white font-display font-bold tracking-widest text-2xl uppercase">ABISHEK</span>
					</div>
					<p className="text-neutral-400 text-sm max-w-sm font-light leading-relaxed">
						A professional full-stack developer portfolio focused on robust backend architectures, clean relational databases, and immersive interactive frontends.
					</p>
					<p className="text-neutral-600 mt-12 text-xs tracking-widest uppercase">
						© 2026 ABISHEK. All rights reserved.
					</p>
				</AnimatedContainer>

				<div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs text-white font-display font-semibold tracking-[0.2em] uppercase mb-6">{section.label}</h3>
								<ul className="text-neutral-400 space-y-4 text-sm font-light">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-orange-400 inline-flex items-center transition-colors duration-300"
											>
												{link.icon && <link.icon className="me-2 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
	key?: string | number;
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
			viewport={{ once: true, margin: "-50px" }}
			transition={{ delay, duration: 1, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
