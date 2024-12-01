// @ts-nocheck
export const FooterCTA = () => {
	return (
		<div className="bg-black text-white py-[72px] sm:py-24 text-center">
			<div className="max-w-xl mx-auto relative">
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
