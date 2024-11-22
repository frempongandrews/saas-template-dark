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
					<img src="/images/main-logo.png" className="cursor-pointer" />
					<div>
						<div className="h-[40px] w-[40px] flex items-center justify-center border-[1px] rounded-md border-white/30 cursor-pointer">
							<img src="/images/menu-icon.png" />
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}
