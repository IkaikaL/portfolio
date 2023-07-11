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
		<Container sx={{ height: 70, textAlign: "center" }}>
			<Button
				sx={{ height: "50%", marginTop: "10px" }}
				onClick={() =>
					isHomePage === true ? navigate("/fun") : navigate("/portfolio")
				}
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
