import React from "react";
import { Container, Divider, Grid } from "@mui/material";
import Footer from "../Components/Footer";
import ContactList from "../Components/ContactList";
import gabimaruImage from "../Assets/gabimaru.jpg";
import NavColumn from "../Components/NavColumn";
const buttons = [
	{ name: "Home", location: "/" },
	{ name: "Projects", location: "/projects" },
	{ name: "Contact", location: "/contact" },
];
const Contact = () => {
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
				sx={{ height: "93vh", backgroundImage: `url(${gabimaruImage})` }}
			>
				<Grid item>
					<NavColumn buttons={buttons} />
				</Grid>
				<Grid item>
					<ContactList />
				</Grid>
			</Grid>
			<Divider sx={{ height: 3, bgcolor: "#8A6240" }} />
			<Footer isHomePage={true} />
		</Container>
	);
};

export default Contact;
