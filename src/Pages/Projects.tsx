import React from "react";
import { Container, Divider, Grid } from "@mui/material";
import Footer from "../Components/Footer";
import ProjectList from "../Components/ProjectList";
import hellsParadiseImage from "../Assets/hellsparadise.jpg";
import NavColumn from "../Components/NavColumn";

const buttons = [
	{ name: "Home", location: "/" },
	{ name: "Projects", location: "/projects" },
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
		name: "Ink Paradise",
		software: "React, Typescript, Material UI, Ruby",
		type: "Portfolio",
		link: "https://github.com/IkaikaL/ink-paradise",
	},
];
const Projects = () => {
	return (
		<Container
			disableGutters
			sx={{
				minWidth: "100%",
			}}
		>
			<Grid
				container
				direction='row'
				justifyContent='space-between'
				alignItems='flex-start'
				sx={{ height: "93vh", backgroundImage: `url(${hellsParadiseImage})` }}
			>
				<Grid item>
					<NavColumn buttons={buttons} />
				</Grid>
				<Grid item>
					<ProjectList projects={projects} />
				</Grid>
			</Grid>
			<Divider sx={{ height: 3, bgcolor: "#8A6240" }} />
			<Footer isHomePage={true} />
		</Container>
	);
};

export default Projects;
