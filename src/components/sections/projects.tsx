import Image from "next/image";

export default function Projects() {
	return (
		<div id="projects" className="md:mt-[90px] my-[50px] w-full">
			<div className="paddy">
				<h1 className="relative before:absolute before:top-1/2 before:right-[-30px] before:bg-black before:w-[40px] before:h-[2px] text-[18px] font-semibold md:leading-[21.13px] pr-6 capitalize inline-block md:ml-0 md:text-lg text-sm">
					Our Project
				</h1>
				<h3 className="md:mt-[25px] mt-[15px] font-bold md:text-[40px] md:leading-[54px] leading-[34px] capitalize ">
					Our latest projects
				</h3>
			</div>
			<div className="mt-[35px] md:h-[540px] h-[320px] w-full relative">
				<Image
					src={"/our-project-image.png"}
					alt="project"
					fill
					className="h-full w-full object-cover"
				/>
				<div className="absolute left-[20px] md:left-[50px] md:bottom-[50px] bottom-[25px] text-white z-40">
					<h3 className="text-sm leading-[16.44px]  md:text-2xl font-semibold md:leading-[28.18px] ">
						Hanani Home
					</h3>
					<p className="md:leading-[20px] md:text-base text-sm leading-[18px] font-medium md:w-[276px] w-[211px] mt-[10px] md:mt-[25px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
						dui tellus commodo convallis. Auctor eget orci pharetra non.{" "}
					</p>
				</div>
				<div
					className="absolute inset-0 "
					style={{
						background:
							"linear-gradient(270deg, rgba(0, 0, 0, 0.00) 20%, rgba(0, 0, 0, .6) 130%)",
					}}
				></div>
			</div>
		</div>
	);
}
