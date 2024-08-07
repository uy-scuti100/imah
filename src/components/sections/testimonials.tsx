import Image from "next/image";

export default function Testimonials() {
	const testimonials = [
		{
			image: "/testi-1.png",
			name: "Menta Nia",
			text: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non",
			comp: "apple",
		},
		{
			image: "/testi-2.png",
			name: "Sannad",
			text: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non",
			comp: "tesla",
		},
		{
			image: "/testi-3.png",
			name: "George",
			text: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non",
			comp: "samsung",
		},
	];
	return (
		<div className="md:mt-[90px] my-[50px] paddy w-full">
			<div className="paddy">
				<h1 className="relative before:absolute before:top-1/2 before:right-[-30px] before:bg-black before:w-[40px] before:h-[2px] text-[18px] font-semibold md:leading-[21.13px] pr-6 capitalize inline-block md:ml-0 md:text-lg text-sm">
					Testimonials
				</h1>
				<h3 className="md:mt-[25px] mt-[15px] font-bold md:text-[40px] md:leading-[54px] leading-[34px] capitalize ">
					What Our Clients Say
				</h3>
			</div>

			<div className="mt-[35px] ">
				<div className="flex gap-[50px] flex-row overflow-auto w-full testimonials-container">
					{testimonials.map((test, index) => {
						return <TestimonialCard key={index} {...test} index={index} />;
					})}
				</div>
			</div>

			{/* .mobile testimonial */}
			<div className="mt-10 md:hidden"></div>
		</div>
	);
}

type TestimonialCardProp = {
	image: string;
	name: string;
	comp: string;
	text: string;
	index: number;
};
const TestimonialCard = ({
	image,
	name,
	text,
	comp,
	index,
}: TestimonialCardProp) => {
	return (
		<div className="p-[25px] md:p-10 min-w-[300px]   bg-[#F2F2F2] flex flex-col gap-[43px] rounded-xl">
			<div className="flex items-center gap-[15px]">
				<Image
					key={index}
					alt={name}
					src={image}
					width={80}
					height={80}
					className="rounded-full w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-cover"
				/>
				<div>
					<h4 className="font-bold md:text-lg text-sm leading-[16.44px] md:leading-[21.13px] capitalize">
						{name}
					</h4>
					<p className="capitalize text-ash">{comp}</p>
				</div>
			</div>
			<div>
				<p className="text-ash md:text-base text-sm md:leading-[20px] leading-[18px]">
					{text}
				</p>
			</div>
		</div>
	);
};
