import React from "react";
import { Container, Divider } from "@mui/material";
import Intro from "../Components/Intro";
import Footer from "../Components/Footer";

const buttons = [
	{ name: "Home", location: "/" },
	{ name: "Projects", location: "/projects" },
	{ name: "Contact", location: "/contact" },
];
const info = [
	{ name: "Resume", type: "download" },
	{ name: "GitHub", type: "link", action: "https://github.com/IkaikaL" },
	{
		name: "LinkedIn",
		type: "link",
		action: "https://www.linkedin.com/in/ikaika-lee-708280213/",
	},
];
const Home = () => {
	return (
		<Container
			disableGutters
			sx={{
				minWidth: "100%",
			}}
		>
			<Intro buttons={buttons} info={info} />
			<Divider sx={{ height: 3, bgcolor: "#8A6240" }} />
			<Footer isHomePage={true} />
		</Container>
	);
};

export default Home;
