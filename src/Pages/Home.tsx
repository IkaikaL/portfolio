import React from "react";
import { Container, Divider } from "@mui/material";
import Intro from "../Components/Intro";
import Footer from "../Components/Footer";

const buttons = [
	{ name: "Home", location: "/" },
	{ name: "Projects", location: "/projects" },
	{ name: "Info", location: "/info" },
	{ name: "Contact", location: "/contact" },
];

const Home = () => {
	return (
		<Container disableGutters sx={{ height: "100%", minWidth: "100%" }}>
			<Intro buttons={buttons} />
			<Divider sx={{ height: 3, bgcolor: "#8A6240" }} />
			<Footer isHomePage={true} />
		</Container>
	);
};

export default Home;
