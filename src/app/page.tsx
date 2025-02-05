import AboutUs from "@/components/sections/about-us";
import Blog from "@/components/sections/blog";
import Carousel from "@/components/sections/carousel";
import Contact from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero-section";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";

export default function page() {
	return (
		<div className=" mx-auto pt-36 flex flex-col w-full justify-center items-center overflow-x-hidden">
			<HeroSection />
			<Carousel />
			<AboutUs />
			<Services />
			<Projects />
			<Testimonials />
			<Contact />
			<Blog />
		</div>
	);
}
