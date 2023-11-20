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
		<div
			style={{
				minWidth: "100%",
				minHeight: "100vh",
				backgroundImage: `url(${gabimaruImage})`,

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
					<ContactList />
				</Grid>
			</Grid>
			<Footer isHomePage={true} />
		</div>
	);
};

export default Contact;
