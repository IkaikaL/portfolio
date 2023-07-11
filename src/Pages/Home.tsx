import React from "react";
import { Container, Grid, Divider } from "@mui/material";
import Intro from "../Components/Intro";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";

const projects = [
	{
		name: "Software Systems Project",
		paragraphOne:
			"Developed a recipe generation app in Flutter using Dart and SQFlite to store recipes and ingredients resulting in meal planning based on the user’s inventory.",
		paragraphTwo:
			"Excelled as a front-end and back-end developer in flutter and dart using a SCRUM process.",
		paragraphThree:
			"Performed as a team leader to plan and execute on project timeline, ensuring deadlines were met and all aspects of the app integrated properly.",
	},
	{
		name: "Object Oriented Design Project",
		paragraphOne:
			"Developed a webpage to structure meal plans filled by recipes stored in a database and recommended based on ingredients added.",
		paragraphTwo:
			"Excelled as a front-end developer programming in Python (Django) and HTML to create the webpage and algorithms.",
		paragraphThree:
			"Acted as the primary project team leader to delegate tasks and ensure all core features were implemented before moving to stretch features.",
	},
	{
		name: "Real Estate Scraper Website",
		paragraphOne:
			"By pulling information from the MLS I hope to streamline the data and organize it in a more productive way",
		paragraphTwo:
			"Utilizing React and Typescript to build the website and UI and Python to pull the data from the MLS",
		paragraphThree:
			"Eventual plans to include Google Map API to display houses",
	},
	{
		name: "Shoe Bot",
		paragraphOne:
			"Developing a bot to auto purchase high demand shoes using Python to interact with the HTML.",
		paragraphTwo: null,
		paragraphThree: null,
	},
	{
		name: "Personal Website",
		paragraphOne: "Developed in React using Material UI",
		paragraphTwo: null,
		paragraphThree: null,
	},
];
const Home = () => {
	return (
		<Container disableGutters sx={{ height: "100%", minWidth: "100%" }}>
			<Intro />
			<Divider sx={{ height: 3, bgcolor: "#8A6240" }} />
			<Skills />
			<Divider sx={{ height: 3, bgcolor: "#8A6240" }} />
			<Projects projects={projects} />
			<Divider sx={{ height: 3, bgcolor: "#8A6240" }} />
			<Experience />
			<Divider sx={{ height: 3, bgcolor: "#8A6240" }} />
			<Footer isHomePage={true} />
		</Container>
	);
};

export default Home;
