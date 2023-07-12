import React from "react";
import { Container, Divider } from "@mui/material";
import Footer from "../Components/Footer";
import ProjectList from "../Components/ProjectList";
const buttons = [
	{ name: "Home", location: "/" },
	{ name: "Projects", location: "/projects" },
	{ name: "Info", location: "/info" },
	{ name: "Contact", location: "/contact" },
];

const projects = [
	{
		name: "Software Systems Project",
		software: "Flutter, Dart, SQFlite",
		type: "Assignment",
		link: "https://github.com/IkaikaL/Software-Systems-Development-Project",
	},
	{
		name: "Object Oriented Design Project",
		software: "Python (Django), HTML",
		type: "Assignment",
		link: "https://github.com/IkaikaL/CSC-3380-Teehm-Sicks-Repository",
	},
	{
		name: "Python Data Formatter",
		software: "Python, Excel",
		type: "Work",
		link: "https://github.com/IkaikaL/OmarU",
	},
	{
		name: "Gretna Live",
		software: "Typescript, React, Material UI",
		type: "Work",
		link: "https://www.gedaweb.com/gretna-live-entertainment-app/",
	},
	{
		name: "Vigilus Website",
		software: "Typescript, React, Material UI",
		type: "Work",
		link: "https://vigilus.com/services/web-development",
	},
	{
		name: "Shoe Bot",
		software: "Python",
		type: "Portfolio",
		link: "https://github.com/IkaikaL/shoeBot",
	},
	{
		name: "Real Estate Scaper",
		software: "Typescript, React, Python",
		type: "Portfolio",
		link: "https://github.com/IkaikaL/realEstateWebsite",
	},
];
const Projects = () => {
	return (
		<Container disableGutters sx={{ height: "100%", minWidth: "100%" }}>
			<ProjectList buttons={buttons} projects={projects} />
			<Divider sx={{ height: 3, bgcolor: "#8A6240" }} />
			<Footer isHomePage={true} />
		</Container>
	);
};

export default Projects;
