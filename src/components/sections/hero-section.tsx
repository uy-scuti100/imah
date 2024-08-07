import Image from "next/image";

export default function HeroSection() {
	return (
		<div className="flex gap-[64px] justify-center items-center flex-col lg:flex-row">
			<div className="paddy flex-1">
				<h1 className="font-bold md:text-[52px] md:leading-[60px] text-[32px] leading-[42px] capitalize">
					Create a modern and unique design your dream
				</h1>
				<p className=" mt-[15px] md:mt-[35px] md:text-[18px] md:leading-[24px] text-[14px] leading-[18px] text-ash">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
					dui tellus commodo convallis. Auctor eget orci pharetra non. Integer
					lorem in scelerisque tortor dui tempor
				</p>
				<div className="md:mt-[50px] mt-[25px]">
					<button className="flex justify-center items-center gap-2 bg-black py-[11px] px-[25px] text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300 ease-linear">
						<p className="md:text-[18px] md:leading-[18.88px] leading-[14.69px] font-bold text-[14px] uppercase">
							view a project
						</p>
						<Image
							src={"arrow-right.svg"}
							alt="arrow-up"
							width={24}
							height={24}
							className="w-6 h-6 hover:rotate-180 transition-all duration-300 ease-linear hover:text-black"
						/>
					</button>
				</div>
			</div>
			<div className="flex-1 shrink-0">
				{/* carousel */}
				<Image
					src={"/hero-image.png"}
					alt="hero-image"
					width={730}
					height={500}
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
}
