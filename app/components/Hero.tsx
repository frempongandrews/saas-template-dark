"use client";

import { motion } from "framer-motion";

export const Hero = () => {
	return (
		<div className="relative overflow-clip">
			{/* hero section */}
			{/* radial circle */}
			<div className="absolute rounded-[100%] bg-black w-[750px] h-[375px] sm:w-[1536px] sm:h-[768px] lg:w-[2100px] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] md:top-[calc(100%-180px)]"></div>
			<div className=" bg-black py-[72px] sm:py-[96px] md:py-[160px] text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]">
				<div className="relative max-w-7xl mx-auto">
					<div className="text-center">
						<a
							href="#"
							className="border py-1 px-2 rounded-lg border-white/30 inline-flex gap-3"
						>
							<span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
								Version 2.0 is here
							</span>
							<button className="inline-flex items-center gap-1">
								<span>Read More</span> <img src="/images/arrow-icon.png" />
							</button>
						</a>
					</div>
					<div className="relative flex justify-center items-center max-w-[700px] mx-auto mt-8">
						<div className="">
							{/* cursor image */}
							{/* <motion.div
								className="hidden sm:inline absolute -left-[0px] md:-left-[20px]"
								drag
								dragSnapToOrigin
							>
								<img
									src="/images/cursor.png"
									className="max-w-none"
									draggable="false"
								/>
							</motion.div> */}

							{/* message image */}

							{/* <motion.div
								className="hidden sm:inline absolute -right-[0px] md:-right-[40px]"
								draggable
								dragSnapToOrigin
							>
								<img
									src="/images/message.png"
									className="max-w-none"
									draggable="false"
								/>
							</motion.div> */}

							<h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-center leading-[70px]">
								Taska: <br />
								Simple management
							</h1>
						</div>
					</div>

					<p
						className="mt-8 text-center w-[75%] sm:w-[50%] max-w-md mx-auto text-2xl font-light"
						id="about"
					>
						Celebrate the joy of accomplishment with an app designed to track
						your progress, motivate your efforts, and celebrate your successes.
					</p>
					<button className="bg-white py-3 px-5 rounded-lg text-black/90 block mx-auto mt-8">
						Get for free
					</button>
				</div>
			</div>
			{/* end hero */}
		</div>
	);
};
