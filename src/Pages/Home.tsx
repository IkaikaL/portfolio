import React from "react";
import { Container, Grid, Divider } from "@mui/material";
import Intro from "../Components/Intro";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";

const Home = () => {
	return (
		<Container disableGutters sx={{ height: "100%", minWidth: "100%" }}>
			<Intro />
			<Divider sx={{ height: 3, bgcolor: "#8A6240" }} />
			<Skills />
			<Divider sx={{ height: 3, bgcolor: "#8A6240" }} />
			<Projects />
			<Divider sx={{ height: 3, bgcolor: "#8A6240" }} />
		</Container>
	);
};

export default Home;
