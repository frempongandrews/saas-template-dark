import { FAQs } from "./components/FAQs";
import { Features } from "./components/Features";
import { FooterCTA } from "./components/FooterCTA";
import { LogoTicker } from "./components/LogoTicker";
import { ProductShowcase } from "./components/ProductShowcase";
import { Hero } from "./components/Hero";

export default function Home() {
	return (
		<div className="h-full">
			{/* page wrapper */}
			<div className="">
				<header>
					{/* TODO: note gradient syntax down */}
					{/* banner */}
					<div className="py-3 text-center bg-[linear-gradient(to_right,rgb(252,_214,_255,_.7),rgb(41,_216,_255,_.7),rgb(255,_253,_128,_.7),rgb(248,_154,_191,_.7),rgb(252,_214,_255,_.7))]">
						<div className="">
							<p className="font-medium">
								<span className="hidden sm:inline">
									Introducing a completely redesigned interface -{" "}
								</span>{" "}
								<a href="#" className="underline underline-offset-4 ">
									Explore the demo
								</a>
							</p>
						</div>
					</div>
					{/* navigation */}
					<nav className="flex items-center justify-between h-[80px] bg-black px-[20px] py-[20px]">
						{/* logo */}
						<img src="/images/main-logo.png" className="cursor-pointer" />

						{/* nav items */}
						<div>
							{/* mobile menu icon */}
							<div className="h-[40px] w-[40px] flex items-center justify-center border-[1px] rounded-md border-white/30 cursor-pointer sm:hidden">
								<img src="/images/menu-icon.png" />
							</div>

							{/* tablet/desktop menu */}
							<div className="hidden sm:flex gap-6 text-white items-center">
								<ul className="flex gap-6">
									<li className="text-white text-opacity-60 hover:text-opacity-100 transition-all duration-300">
										<a href="#">About</a>
									</li>
									<li className="text-white text-opacity-60 hover:text-opacity-100 transition-all duration-300">
										<a href="#">Features</a>
									</li>
									<li className="text-white text-opacity-60 hover:text-opacity-100 transition-all duration-300">
										<a href="#">Updates</a>
									</li>
									<li className="text-white text-opacity-60 hover:text-opacity-100 transition-all duration-300">
										<a href="#">Help</a>
									</li>
									<li className="text-white text-opacity-60 hover:text-opacity-100 transition-all duration-300">
										<a href="#">Customers</a>
									</li>
								</ul>
								<button className="bg-white text-black/90 py-2 px-4 rounded-lg font-medium">
									Get for free
								</button>
							</div>
						</div>
					</nav>
				</header>

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
							<ul className="flex justify-center gap-2.5">
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
