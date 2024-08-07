import Image from "next/image";

export default function Contact() {
	return (
		<div id="contact" className="w-full relative h-[400px]">
			<Image
				src={"/contact-us.png"}
				alt="contact us"
				height={200}
				width={1140}
				className="object-cover w-full h-full z-0"
			/>
			<div className="absolute text-white z-50 flex justify-center flex-col gap-[15px] md:gap-[25px] inset-0 paddy ">
				<h1 className="md:text-[40px] text-2xl leading-[34px]  md:leading-[54px] font-bold text-ash">
					Have A Question ? <br /> Start Consultation Now
				</h1>
				<p className="mt-[15px] md:mt-[25px] text-sm leading-[18px] text-ash max-w-[533px] md:text-base md:leading-[20px]">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
					dui tellus commodo convallis.
				</p>
				<button className="inline-flex justify-center items-center bg-black text-white gap-2 py-[11px] px-[25px] w-max">
					<p className="font-bold text-[18px] leading-[18.88px]">Contact us</p>
					<Image
						src={"arrow-up-right-light.svg"}
						alt="arrow-up"
						width={24}
						height={24}
						className="w-6 h-6"
					/>
				</button>
			</div>
		</div>
	);
}
