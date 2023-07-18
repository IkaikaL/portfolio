import React from "react";
import { Container, Divider, Grid } from "@mui/material";
import NavColumn from "../Components/NavColumn";
import Footer from "../Components/Footer";
import mangaImage from "../Assets/manga.jpg";
import SelfDescription from "../Components/SelfDescription";

const buttons = [
	{ name: "Home", location: "/" },
	{ name: "Projects", location: "/projects" },
	{ name: "Contact", location: "/contact" },
];
const descriptionInfo = [
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
			<Grid
				container
				direction='row'
				justifyContent='space-between'
				alignItems='flex-start'
				sx={{ height: "93vh", backgroundImage: `url(${mangaImage})` }}
			>
				<Grid item>
					<NavColumn buttons={buttons} />
				</Grid>
				<Grid item>
					<SelfDescription descriptionInfo={descriptionInfo} />
				</Grid>
			</Grid>
			<Divider sx={{ height: 3, bgcolor: "#8A6240" }} />
			<Footer isHomePage={true} />
		</Container>
	);
};

export default Home;
