import Image from "next/image";

export default function AboutUs() {
	return (
		<div
			id="about"
			className="paddy lg:flex justify-center items-center lg:gap-[120px] my-[50px] md:mt-[92px]"
		>
			<div className="lg:mb-0 mb-[80px] ">
				<div className="flex items-start md:gap-[25px] gap-[14px] relative">
					<Image
						src={"/about-image-1.png"}
						width={320}
						height={430}
						alt="about= image-1"
						className="lg:w-[320px] md:h-[430px] object-cover w-full h-[320px]"
					/>
					<Image
						src={"/about-image-2.png"}
						width={320}
						height={320}
						alt="about= image-2"
						className=" w-full h-[220px] md:w-[320px] md:h-[320px] object-cover "
					/>
					<div className="absolute bg-[#f2f2f2]  right-0 bottom-0 flex justify-between items-center text-ash py-[18px] px-[25px]">
						<div className="text-center flex flex-col items-center border-r md:px-4 px-2">
							<h6 className="md:text-[36px] text-2xl leading-[28.18px] font-bold md:leading-[42.26px]">
								10
							</h6>
							<p className="md:text-[18px] md:leading-[21.13px] text-sm leading-[16.44px capitalize">
								years
							</p>
						</div>
						<div className="text-center flex flex-col items-center border-r md:px-4 px-2">
							<h6 className="md:text-[36px] text-2xl leading-[28.18px] font-bold md:leading-[42.26px]">
								200<sup>+</sup>
							</h6>
							<p className="md:text-[18px] md:leading-[21.13px] text-sm leading-[16.44px capitalize">
								projects
							</p>
						</div>
						<div className="text-center flex flex-col items-center md:px-4 px-2">
							<h6 className="md:text-[36px] text-2xl leading-[28.18px] font-bold md:leading-[42.26px]">
								75
							</h6>
							<p className="md:text-[18px] md:leading-[21.13px] text-sm leading-[16.44px capitalize">
								partners
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex-1 basis-1/2 w-full">
				<h1 className="relative before:absolute before:top-1/2 md:before:left-[-40px] before:left-[-30px] before:bg-black before:w-[40px] before:h-[2px] text-[18px] font-semibold md:leading-[21.13px] before:-translate-x-[50%] capitalize ml-[50px]  md:text-lg text-sm ">
					Hello there
				</h1>
				<h3 className="md:mt-[25px] mt-[15px] text-2xl md:text-3xl leading-[34px] font-bold md:text-[40px] md:leading-[34px] capitalize lg:max-w-auto max-w-[400px] ">
					We work professionally <br className="hidden lg:block" /> and
					wholeheartedly
				</h3>
				<p className="md:mt-[35px] mt-[15px] font-medium text-sm leading-[18px] md:leading-[20px] md:text-base text-ash">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
					dui tellus commodo convallis. Auctor eget orci pharetra non. Integer
					lorem in scelerisque tortor dui tempor, volutpat viverra faucibus.
					Sagittis maecenas tincidunt at purus. Amet non vel elit aliquet id
					dolor risus imperdiet vitae. Amet, sagittis mauris morbi erat velit id
					nullam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Adipiscing dui tellus commodo convallis.{" "}
				</p>
			</div>
		</div>
	);
}
