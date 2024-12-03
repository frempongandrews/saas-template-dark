// @ts-nocheck

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const FooterCTA = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end end"],
	});

	const translateY = useTransform(scrollYProgress, [0, 1], [-100, 0]);

	return (
		<div
			id="access"
			className="bg-black text-white py-[72px] sm:py-24 text-center"
			ref={containerRef}
		>
			<div className="max-w-xl mx-auto relative">
				{/* big icons */}
				<motion.div style={{ translateY }}>
					<img
						src="/images/helix-icon.png"
						className="hidden sm:inline sm:absolute sm:-right-[220px] md:-right-[260px]"
					/>
				</motion.div>
				<motion.div style={{ translateY }}>
					<img
						src="/images/pie-icon.png"
						className="hidden sm:inline sm:absolute sm:-left-[220px] md:-left-[260px] top-[-100px]"
					/>
				</motion.div>

				<h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
					Get instant access
				</h2>
				<p className="text-xl text-white/70 mt-5 px-[20px] sm:px-0">
					Celebrate the joy of accomplishment with an app designed to track your
					progress and motivate your efforts.
				</p>
				<form className="mt-10 flex flex-col gap-2.5 max-w-md sm:max-w-xl mx-auto sm:flex-row">
					<input
						type="email"
						placeholder="your@email.com"
						className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
					/>
					<button className="bg-white text-black h-12 rounded-lg px-5">
						Get access
					</button>
				</form>
			</div>
		</div>
	);
};
