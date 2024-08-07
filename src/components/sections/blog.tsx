import Image from "next/image";

export default function Blog() {
	const blogs = [
		{
			image: "/blog-image-1.png",
			name: "Designer must be an interpreter",
			text: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non",
			comp: "Interior Design",
		},
		{
			image: "/blog-image-2.png",
			name: "12 Best Outdoor Furniture Ideas",
			text: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non",
			comp: "Interior Design",
		},
		{
			image: "/blog-image-3.png",
			name: "10 Of The Unique Buildings ",
			text: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non Adipiscing dui tellus commodo convallis. Auctor eget orci pharetra non",
			comp: "Architecture",
		},
	];
	return (
		<div id="blog" className="md:mt-[90px] my-[50px] paddy w-full">
			<div className="paddy">
				<h1 className="relative before:absolute before:top-1/2 before:right-[-30px] before:bg-black before:w-[40px] before:h-[2px] text-[18px] font-semibold md:leading-[21.13px] pr-6 capitalize inline-block md:ml-0 md:text-lg text-sm">
					Our Blog
				</h1>
				<h3 className="md:mt-[25px] mt-[15px] font-bold md:text-[40px] md:leading-[54px] leading-[34px] capitalize ">
					Latest news amd articles
				</h3>
			</div>

			<div className="mt-[35px] ">
				<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] flex-col lg:flex-row">
					{blogs.map((blog, index) => {
						return <BlogCard key={index} {...blog} index={index} />;
					})}
				</div>
			</div>
		</div>
	);
}

type BlogCardProp = {
	image: string;
	name: string;
	comp: string;
	text: string;
	index: number;
};
const BlogCard = ({ image, name, text, comp, index }: BlogCardProp) => {
	return (
		<div className="w-full flex flex-col">
			<div className="flex items-center gap-[15px]">
				<Image
					key={index}
					alt={name}
					src={image}
					width={570}
					height={380}
					className="w-[510px] h-[340px] md:w-[570px] md:h-[380px] object-cover"
				/>
			</div>
			<p className="capitalize text-ash md:text-lg text-sm md: leading-[16.44px] font-semibold mt-[15px] md:mt-[10px]">
				{comp}
			</p>

			<h4 className="font-bold md:text-[32px] text-2xl leading-[32px] md:leading-[42px] capitalize">
				{name}
			</h4>

			<div className="md:mt-[25px] mt-[15px]">
				<p className="text-ash md:text-base text-sm md:leading-[20px] leading-[18px]">
					{text}
				</p>
			</div>
		</div>
	);
};
