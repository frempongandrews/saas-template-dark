"use client";

import { useEffect, useRef } from "react";

type FeatureItemProps = {
	title: string;
	description: string;
};

export const FeatureItem = ({ title, description }: FeatureItemProps) => {
	const borderRef = useRef<HTMLDivElement>(null);
	const updateMousePosition = (e: MouseEvent) => {
		if (!borderRef.current) return;

		const borderRefRect = borderRef.current?.getBoundingClientRect();
		const offsetX = e.x - borderRefRect.x;
		const offsetY = e.x - borderRefRect.y;
	};
	useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition);

		// cleanup
		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);
	return (
		<div
			key={title}
			className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative"
		>
			{/* glowing border */}
			<div
				ref={borderRef}
				className="absolute inset-0 border-2 rounded-xl border-purple-400"
				style={{
					WebkitMaskImage:
						"radial-gradient(100px 100px at 0px 0px, black, transparent)",
					maskImage:
						"radial-gradient(100px 100px at 0px 0px, black, transparent)",
				}}
			></div>
			<div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
				<img src="/images/ecosystem-icon.png" />
			</div>
			<h3 className="mt-6 font-bold">{title}</h3>
			<p className="mt-2 text-white/70">{description}</p>
		</div>
	);
};
