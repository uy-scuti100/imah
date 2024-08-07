import Image from "next/image";

export default function Services() {
	const services = [
		{
			text: "Interior Design",
			image: "/service-image-1.png",
		},
		{
			text: "Architecture",
			image: "/service-image-2.png",
		},
		{
			text: "Furniture Design",
			image: "/service-image-3.png",
		},
	];
	return (
		<div id="services" className="md:mt-[90px] my-[50px] paddy">
			<h1 className="relative before:absolute before:top-1/2 before:right-[-30px] before:bg-black before:w-[40px] before:h-[2px] text-[18px] font-semibold md:leading-[21.13px] pr-6 capitalize inline-block md:ml-0 md:text-lg text-sm">
				services
			</h1>
			<h3 className="md:mt-[25px] mt-[15px] font-bold md:text-[40px] md:leading-[54px] leading-[34px] capitalize ">
				Our capacity to help make your wishes come true
			</h3>

			<div className="flex flex-col md:flex-row md:gap-[5px] gap-[25px] mt-[35px] ">
				{services.map((service, index) => {
					const { text, image } = service;
					return (
						<div
							key={index}
							className="relative md:w-[410px] md:h-[540px] h-[448px] w-full"
						>
							<Image
								src={image}
								fill
								alt={text}
								className="object-cover w-full h-full"
							/>
							<p className="absolute left-[20px] md:left-[25px] bottom-[25px] font-bold md:text-2xl text-lg leading-[21.13px] text-white z-40">
								{text}
							</p>
							{/* <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0, 0, 0, 0)] via-[rgba(0, 0, 0, 0.27)] to-[rgba(0, 0, 0, 0.3)] z-40"></div> */}
							<div
								className="absolute inset-0 "
								style={{
									background:
										"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, .6) 110%)",
								}}
							></div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
