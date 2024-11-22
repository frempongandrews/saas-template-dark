import Image from "next/image";
import logoImage from "../public/images/main-logo.png";

export default function Home() {
	return (
		<div className="h-full">
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
							<button className="bg-white text-black/80 py-2 px-4 rounded-lg">
								Get for free
							</button>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}
