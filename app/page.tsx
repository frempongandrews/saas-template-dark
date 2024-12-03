// import lenis from "lenis";
import { FAQs } from "./components/FAQs";
import { Features } from "./components/Features";
import { FooterCTA } from "./components/FooterCTA";
import { LogoTicker } from "./components/LogoTicker";
import { ProductShowcase } from "./components/ProductShowcase";
import { Hero } from "./components/Hero";
import { useEffect } from "react";
import Lenis from "lenis";
import { Header } from "./components/Header";

export default function Home() {
	// basic lenis implementation
	// implemented for server component in app/layout.tsx (which is a server component)
	// useEffect(() => {
	// 	const lenis = new Lenis();
	// 	function raf(time: any) {
	// 		lenis.raf(time);
	// 		requestAnimationFrame(raf);
	// 	}
	// 	requestAnimationFrame(raf);
	// }, []);
	return (
		<div className="h-full">
			{/* page wrapper */}
			<div className="">
				<Header />

				<main className="overflow-hidden">
					<Hero />

					{/* logo ticker */}
					<LogoTicker />

					{/* Features */}
					<Features />

					{/* Product Showcase */}
					<ProductShowcase />

					{/* FAQs */}
					<FAQs />

					{/* Footer CTA */}
					<FooterCTA />
				</main>
				<footer className="py-5 bg-black text-white border-t border-white/20 px-[20px]">
					<div>
						<div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
							<div className="text-center">
								&copy; 2024 Your Company, Inc. All rights reserved
							</div>
							<ul className="flex justify-center items-center gap-2.5">
								<li>
									<img src="/images/x.png" />
								</li>
								<li>
									<img src="/images/insta.png" />
								</li>
								<li>
									<img src="/images/tiktok.png" />
								</li>
								<li>
									<img src="/images/youtube.png" />
								</li>
							</ul>
						</div>
					</div>
				</footer>
			</div>
			{/* end page wrapper */}
		</div>
	);
}
