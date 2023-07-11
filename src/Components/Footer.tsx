import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";

type Props = {
	isHomePage: boolean;
};
const Footer = (props: Props) => {
	const { isHomePage } = props;
	return (
		<Container sx={{ height: 70, textAlign: "center" }}>
			<Button
				sx={{ height: "50%", marginTop: "10px" }}
				href={isHomePage === true ? "/fun" : "/portfolio"}
			>
				<Typography sx={{ color: "white" }}>Have a nice day :)</Typography>
			</Button>
			<Typography sx={{ fontSize: 10, marginTop: "5px", color: "dark-gray" }}>
				Ikaika Lee - 2023
			</Typography>
		</Container>
	);
};

export default Footer;
