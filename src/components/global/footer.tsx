import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	const links = [
		{
			about: ["About Us", "Services", "Portfolio", "Contact Us", "Blog", "Sho"],
		},
		{
			office: [
				"Scandinavian design",
				"Smart House",
				"Modern Design",
				"Minimalist Design",
			],
		},
	];
	return (
		<div className="paddy bg-[#f2f2f2] py-20">
			<div className="md:grid grid-cols-3 w-full border-b pb-[50px] ">
				<div className="md:border-none pb-[35px] md:pb-0 border-b md:order-1">
					<Image
						src="logo.svg"
						alt=""
						width={100}
						height={100}
						className="w-[95px] h-[36px]"
					/>
					<p className="text-ash text-sm leading-[18px] mt-[25px] md:text-base md:leading-[20px] w-[319px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
						dui tellus commodo convallis. Auctor eget orci pharetra non. Integer
						lorem in scelerisque tortor dui tempor, volutpat viverra faucibus.{" "}
					</p>
				</div>

				<div className="flex flex-col mt-[50px] md:mt-0 md:order-3">
					<h4 className="text-sm md:text-lg font-bold">
						Stay Tuned for updates
					</h4>
					<div className="w-[280px] border-b border-black flex items-center relative mt-[25px]">
						<input
							type="email"
							required
							placeholder="Email"
							className="outline-none bg-transparent placeholder:text-sm placeholder:font-bold placeholder:text-ash"
						/>
						<button className="absolute right-0 bottom-0 py-[8px] px-5 bg-black ">
							<Image
								src="/arrow-right.svg"
								alt="arrow-right"
								className="w-4 h-4 "
								height={16}
								width={16}
							/>
						</button>
					</div>
					<div className="mt-10 flex flex-row gap-[30px]">
						{[
							"/instagram.svg",
							"/youtube.svg",
							"/twitter.svg",
							"/facebook.svg",
						].map((image, i) => (
							<Link key={i} href={"/"}>
								<Image
									src={image}
									alt="icon"
									width={24}
									height={24}
									className="h-6 w-6 "
								/>
							</Link>
						))}
					</div>
				</div>
				<div className="md:order-2 mt-[50px] md:mt-0 flex flex-col md:flex-row md:gap-[112px] gap-[35px] ">
					<div>
						<h6 className="pb-[25px] font-bold"> About</h6>
						{links[0]?.about?.map((link: string, i) => (
							<div key={link}>
								<Link href={"/"}>{link}</Link>
							</div>
						))}
					</div>
					<div>
						<h6 className="pb-[25px] font-bold">Office</h6>
						{links[1]?.office?.map((link: string, i) => (
							<div key={link}>
								<Link href={"/"}>{link}</Link>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="text-center text-sm text-ash mt-4">
				<p>Imah © {new Date().getFullYear()}. All Rights Reseved.</p>
			</div>
		</div>
	);
}
