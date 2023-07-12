import React from "react";
import { Container, Divider } from "@mui/material";
import Footer from "../Components/Footer";
import InfoList from "../Components/InfoList";
const buttons = [
	{ name: "Home", location: "/" },
	{ name: "Projects", location: "/projects" },
	{ name: "Info", location: "/info" },
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
const Info = () => {
	return (
		<Container disableGutters sx={{ height: "100%", minWidth: "100%" }}>
			<InfoList buttons={buttons} info={info} />
			<Divider sx={{ height: 3, bgcolor: "#8A6240" }} />
			<Footer isHomePage={true} />
		</Container>
	);
};

export default Info;
