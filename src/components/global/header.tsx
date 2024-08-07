"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
export default function Header() {
	const [openNav, setOpenNav] = useState(false);
	function toggleNav() {
		setOpenNav((prev) => !prev);
	}
	const links = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "About Us",
			path: "/#about",
		},
		{
			name: "Services",
			path: "/#services",
		},
		{
			name: "Blog",
			path: "/#blog",
		},
		{
			name: "Contact",
			path: "/#contact",
		},
	];
	return (
		<header className="fixed w-full mx-auto flex justify-center  bg-white z-[500]">
			<nav className="flex items-center justify-between max-w-[1280px]  px-6 py-10 w-full bg-white backdrop-blur-3xl">
				<div>
					<Image
						src="logo.svg"
						alt="logo"
						width={100}
						height={100}
						className="w-[100px] h-[50px]"
					/>
				</div>
				<div>
					<NavLinks />
				</div>
				<div className="hidden md:block">
					<a
						href="#contact"
						className="flex justify-center items-center gap-2 border py-[11px] px-[25px]"
					>
						<p className="font-bold text-[18px] leading-[18.88px]">
							Contact us
						</p>
						<Image
							src={"arrow-up-right.svg"}
							alt="arrow-up"
							width={24}
							height={24}
							className="w-6 h-6"
						/>
					</a>
				</div>
				<div className="md:hidden">
					<button onClick={toggleNav}>
						<Image src={"menu.svg"} alt="menu" width={36} height={34} />
					</button>
				</div>
			</nav>

			{/* mobile nav */}
			<div
				className={`absolute h-[100dvh] bg-white inset-0 ${
					openNav ? "translate-x-0" : "translate-x-[-120%]"
				} duration-500 ease-in-out transition-all md:hidden`}
			>
				<div
					className=" flex  justify-end text-4xl border-b py-5 pr-5 cursor-pointer"
					onClick={toggleNav}
				>
					<Image src={"times.svg"} alt="menu" width={36} height={34} />
				</div>

				<div className="mt-5 flex justify-center h-full flex-col gap-8 p-10">
					{links.map((nav: { name: string; path: string }) => {
						const { name, path } = nav;
						return (
							<Link
								href={path}
								key={name}
								className="text-7xl"
								onClick={toggleNav}
							>
								{name}
							</Link>
						);
					})}
				</div>
			</div>
		</header>
	);
}

const NavLinks = () => {
	const path = usePathname();
	const links = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "About Us",
			path: "/#about",
		},
		{
			name: "Services",
			path: "/#services",
		},
		{
			name: "Blog",
			path: "/#blog",
		},
	];
	return (
		<menu className="md:flex items-center gap-10 hidden text-[18px] leading-[20.98px] font-semibold">
			{links.map((link) => (
				<Link
					key={link.name}
					href={link.path}
					className={`${
						path === link.path
							? "relative before:absolute before:w-full before:h-[3px] before:bg-black before:bottom-[-5px] before:left-0"
							: ""
					}`}
				>
					{link.name}
				</Link>
			))}
		</menu>
	);
};
