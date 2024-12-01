// @ts-nocheck
"use client";
import { motion } from "framer-motion";
export const LogoTicker = () => {
	return (
		<div className="bg-black text-white py-[72px] sm:py-24">
			{/* Container */}
			<div className="max-w-screen-xl mx-auto">
				<h2 className="text-xl text-center text-white/70">
					Trusted by the world&apos;s most innovative teams
				</h2>
				<div className="flex overflow-hidden mt-9 before:z-10 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative before:bg-red-500 after:bg-red-500 after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0))]">
					<motion.div
						className="flex flex-none justify-center gap-16 pr-16"
						transition={{
							duration: 10,
							ease: "linear",
							repeat: Infinity,
						}}
						initial={{ translateX: 0 }}
						animate={{ translateX: "-50%" }}
					>
						<img
							src="/images/logos/acme-logo.png"
							alt="acme logo"
							className="flex-none h-8 w-auto"
						/>
						<img src="/images/logos/apex-logo.png" alt="apex logo" />
						<img src="/images/logos/celestia-logo.png" alt="celestia logo" />
						<img src="/images/logos/echo-logo.png" alt="echo logo" />
						<img src="/images/logos/pulse-logo.png" alt="pulse logo" />
						<img src="/images/logos/quantum-logo.png" alt="quantum logo" />

						<img
							src="/images/logos/acme-logo.png"
							alt="acme logo"
							className="flex-none h-8 w-auto"
						/>
						<img src="/images/logos/apex-logo.png" alt="apex logo" />
						<img src="/images/logos/celestia-logo.png" alt="celestia logo" />
						<img src="/images/logos/echo-logo.png" alt="echo logo" />
						<img src="/images/logos/pulse-logo.png" alt="pulse logo" />
						<img src="/images/logos/quantum-logo.png" alt="quantum logo" />
					</motion.div>
				</div>
			</div>
			{/* End Container */}
		</div>
	);
};
