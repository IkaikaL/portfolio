import React from "react";
import { Container, Divider, Typography } from "@mui/material";

type Props = {
	isHomePage: boolean;
};
const Footer = (props: Props) => {
	return (
		<div
			style={{
				height: 70,
				textAlign: "center",
				backgroundColor: "#181716",
				minWidth: "100%",
			}}
		>
			<Divider sx={{ height: 3, bgcolor: "#8A6240" }} />
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
		</div>
	);
};

export default Footer;
