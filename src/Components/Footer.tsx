import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
/**isHomePage === true ? navigate("/fun") : navigate("/") */
type Props = {
	isHomePage: boolean;
};
const Footer = (props: Props) => {
	const navigate = useNavigate();
	const { isHomePage } = props;
	return (
		<Container
			sx={{
				height: 70,
				textAlign: "center",
				backgroundColor: "#181716",
				minWidth: "100%",
			}}
		>
			<Typography
				sx={{
					fontSize: 15,
					color: "dark-gray",
					paddingTop: "10px",
				}}
			>
				Made by:
			</Typography>
			<Typography
				sx={{
					fontSize: 15,
					color: "dark-gray",
					paddingTop: "10px",
				}}
			>
				Ikaika Lee - 2023
			</Typography>
		</Container>
	);
};

export default Footer;
