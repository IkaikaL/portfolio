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
		<div
			style={{
				minWidth: "100%",
				minHeight: "100vh",
				backgroundImage: `url(${mangaImage})`,

				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<Grid
				container
				direction='row'
				justifyContent='space-between'
				alignItems='flex-start'
			>
				<Grid item>
					<NavColumn buttons={buttons} />
				</Grid>
				<Grid item>
					<SelfDescription descriptionInfo={descriptionInfo} />
				</Grid>
			</Grid>

			<Footer isHomePage={true} />
		</div>
	);
};

export default Home;
