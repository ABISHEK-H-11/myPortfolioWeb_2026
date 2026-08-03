import { cn } from '@/lib/utils';
import React from 'react';

type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

type FeatureCardProps = React.ComponentProps<'div'> & {
	feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
	const p = genRandomPattern();

	return (
		<div className={cn('group relative overflow-hidden p-8 transition-all duration-500 hover:bg-white/[0.02]', className)} {...props}>
			{/* Hover Glow */}
			<div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-transparent group-hover:to-transparent transition-all duration-500" />
			
			<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)] opacity-20 group-hover:opacity-100 transition-opacity duration-500">
				<div className="from-orange-500/20 to-transparent absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
					<GridPattern
						width={24}
						height={24}
						x="-12"
						y="4"
						squares={p}
						className="fill-orange-500/10 stroke-orange-500/20 absolute inset-0 h-full w-full mix-blend-overlay"
					/>
				</div>
			</div>
			
			<div className="relative z-20 flex flex-col h-full">
				<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-500">
					<feature.icon className="text-white/70 group-hover:text-orange-400 size-6 transition-colors duration-500" strokeWidth={1.5} aria-hidden />
				</div>
				<h3 className="text-lg font-display font-semibold text-white group-hover:text-orange-300 transition-colors duration-500">{feature.title}</h3>
				<p className="text-neutral-400 mt-3 text-sm font-light leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">{feature.description}</p>
			</div>
		</div>
	);
}

function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
	const patternId = React.useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y], index) => (
						<rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={x * width} y={y * height} />
					))}
				</svg>
			)}
		</svg>
	);
}

function genRandomPattern(length?: number): number[][] {
	length = length ?? 5;
	return Array.from({ length }, () => [
		Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
		Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
	]);
}
