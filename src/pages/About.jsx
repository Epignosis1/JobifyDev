import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
	const data = [
		{
			title: "Our Vision",
			description:
				"To become the most trusted and reliable recruitment platform in Nigeria, with a focus on career development and recruitment solutions.",
			image: "/main3.png",
			order: false,
		},
		{
			title: "Our Mission",
			description:
				"To provide an inclusive and accessible platform for Nigerian job seekers and recruiters to find and apply for suitable jobs, while also empowering them to develop their careers.",
			image: "/visionImg.svg",
			order: true,
		},
	];
	const staff = [
		{
			name: "John Doe",
			image: "/team1.svg",
			facebook: "https://www.facebook.com",
			twitter: "https://www.twitter.com",
			linkedin: "https://www.linkedin.com",
			instagram: "https://instagram.com",
		},
		{
			name: "Victor Smith",
			image: "/team2.svg",
			facebook: "https://www.facebook.com",
			twitter: "https://www.twitter.com",
			linkedin: "https://www.linkedin.com",
			instagram: "https://instagram.com",
		},
		{
			name: "Jane Smith",
			image: "/team3.svg",
			facebook: "https://www.facebook.com",
			twitter: "https://www.twitter.com",
			linkedin: "https://www.linkedin.com",
			instagram: "https://instagram.com",
		},
		{
			name: "Michael Johnson",
			image: "/team4.svg",
			facebook: "https://www.facebook.com",
			twitter: "https://www.twitter.com",
			linkedin: "https://www.linkedin.com",
			instagram: "https://instagram.com",
		},
	];

	return (
		<div className="space-y-5">
			<div className="w-11/12 mx-auto text-white mt-5">
				<div className="relative overflow-hidden">
					<img
						src="/about.png"
						alt="about-hero-img"
						className="rounded-t-xl w-fit"
					/>
					<motion.p
						className="text-xl lg:text-2xl font-medium px-10 absolute bottom-2 right-0 bg-sub rounded-r-full shadow-md"
						initial={{ x: "-200%" }}
						animate={{ x: 0 }}>
						About us
					</motion.p>
				</div>
				<div className=" bg-main pt-3 rounded-b-md">
					<p className="text-sm md:text-base text-center w-11/12 pb-4 mx-auto">
						Jobify is a new recruitment website in Nigeria that connects skilled
						job seekers with verified companies and is primarily focused on
						career development and recruitment solutions.
						<br /> Jobify provides organizations and job seekers with
						individualized HR solutions, training services, and online career
						development support.
					</p>
				</div>
			</div>
			<div className="w-11/12 mx-auto">
				{data.map((item, index) => (
					<div
						key={index}
						className="flex flex-col md:flex-row gap-4 items-center px-5 py-5">
						<img
							src={item.image}
							alt="about-img"
							className={`${item.order ? "md:order-2" : ""} md:w-5/12`}
						/>
						<div
							className={`${
								item.order ? "md:order-1" : ""
							} md:w-6/12 text-center`}>
							<h3 className="text-lg font-semibold">{item.title}</h3>
							<p className="text-base">{item.description}</p>
						</div>
					</div>
				))}
			</div>
			<div className="w-full text-center">
				<p className="px-4 bg-main w-fit mx-auto text-white">Our Team</p>
				<p className="bg-primaryOrange px-5 md:px-10 pt-2 pb-4">
					Our team is devoted to improving your recruiting and career
					development process by concentrating on your particular requirements
					and using the newest technology to streamline the job hunt.
				</p>
			</div>
			<div className="flex px-3 gap-3 flex-col items-center justify-center md:flex-row">
				{staff.map((item, index) => (
					<div key={index} className="">
						<img src={item.image} alt="staff-img" className="rounded-md" />
						<div className="text-center text-main hover:bg-main hover:text-white -mt-3 py-3 transition-all ease-in rounded-b-lg">
							<h3 className="text-sm font-semibold">{item.name}</h3>
							<div className="flex justify-center gap-1">
								<Link target="_blank" to={item.facebook}>
									<Icon icon="ic:baseline-facebook" width="24" height="24" />
								</Link>
								<Link target="_blank" to={item.instagram}>
									<Icon icon="mdi:instagram" width="24" height="24" />
								</Link>
								<Link target="_blank" to={item.twitter}>
									<Icon
										icon="hugeicons:new-twitter-rectangle"
										width="24"
										height="24"
									/>
								</Link>
								<Link target="_blank" to={item.linkedin}>
									<Icon icon="ri:linkedin-fill" width="24" height="24" />
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default About;
