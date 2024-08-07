import Image from "next/image";

export default function Carousel() {
	const images = ["/nike.png", "/samsung.png", "/tech-crunch.png"];
	return (
		<div className="md:mt-[90px] mt-[50px] flex flex-wrap items-center justify-center paddy">
			<h3 className="text-center md:text-left font-bold text-xl md:text-2xl md:leading-[32px] leading-[24px] mb-10 md:mb-0 ">
				Trusted by 75<sup>+</sup> <br className="hidden lg:block" /> Partners
			</h3>
			<div className="flex items-center justify-center md:justify-start gap-10">
				{images.map((image) => (
					<Image
						key={image}
						src={image}
						alt="image"
						width={150}
						height={60}
						className="object-contain w-[150px] h-[60px] md:w-[180px] md:h-[72px] md:ml-10 opacity-50 grayscale"
					/>
				))}
			</div>
		</div>
	);
}
