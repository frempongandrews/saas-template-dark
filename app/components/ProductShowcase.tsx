// @ts-nocheck
export const ProductShowcase = () => {
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

				<div className="flex justify-center">
					<img
						src="/images/product-screenshot.png"
						alt="the product screenshot"
						className="mt-14 inline-block lg:max-w-screen-lg"
					/>
				</div>
			</div>
			{/* End container */}
		</div>
	);
};
