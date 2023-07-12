import React from "react";
import { Container, Divider } from "@mui/material";
import Footer from "../Components/Footer";
import ContactList from "../Components/ContactList";
const buttons = [
	{ name: "Home", location: "/" },
	{ name: "Projects", location: "/projects" },
	{ name: "Info", location: "/info" },
	{ name: "Contact", location: "/contact" },
];
const Contact = () => {
	return (
		<Container disableGutters sx={{ height: "100%", minWidth: "100%" }}>
			<ContactList buttons={buttons} />
			<Divider sx={{ height: 3, bgcolor: "#8A6240" }} />
			<Footer isHomePage={true} />
		</Container>
	);
};

export default Contact;
