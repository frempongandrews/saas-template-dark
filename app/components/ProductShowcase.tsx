// @ts-nocheck

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const ProductShowcase = () => {
	const appImageRef = useRef<HTMLImageElement>(null);
	// scrollYProgress will go from 0 when end of page matches the start of the
	// referenced image; to 1, when the end of the referenced image matches the end
	// of the page
	const { scrollYProgress } = useScroll({
		target: appImageRef,
		offset: ["start end", "end end"],
	});

	// as scrollYProgress goes from 0 to 1, let our rotateX go from 50 to 0
	// as scrollYProgress goes from 0 to 1, let our opacity go from 0.5 to 1

	const rotateX = useTransform(scrollYProgress, [0, 1], [50, 0]);
	const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
	return (
		<div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24">
			{/* Container */}
			<div className="max-w-screen-xl mx-auto">
				<h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
					Intuitive interface
				</h2>
				<div className="max-w-xl mx-auto">
					<p className="text-xl text-center text-white/70 mt-5">
						Celebrate the joy of accomplishment with an app designed to track
						your progress, motivate your efforts, and celebrate your successes,
						one task at a time
					</p>
				</div>

				<motion.div
					className="flex justify-center"
					style={{
						opacity: opacity,
						rotateX: rotateX,
						transformPerspective: "800px",
					}}
				>
					<img
						src="/images/product-screenshot.png"
						alt="the product screenshot"
						className="mt-14 inline-block lg:max-w-screen-lg"
						ref={appImageRef}
					/>
				</motion.div>
			</div>
			{/* End container */}
		</div>
	);
};
