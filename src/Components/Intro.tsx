import React from "react";
import { Container, Grid } from "@mui/material";
import bambooImage from "../Assets/bamboo.jpg";
import waveImage from "../Assets/wave.jpg";

const Intro = () => {
	return (
		<Container
			disableGutters
			sx={{
				minWidth: "60%",
				height: 400,
				marginBottom: "-30px",
				marginTop: "30px",
			}}
		>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
				sx={{ height: "80%" }}
			>
				<Grid
					item
					xs={4}
					sx={{
						backgroundColor: "#4C6444",
						height: "100%",
						overflow: "hidden",
					}}
				>
					<img height={"100%"} src={bambooImage} alt='bambooImage' />
				</Grid>
				<Grid
					item
					xs={8}
					sx={{
						backgroundColor: "#CABA9C",
						height: "100%",
						overflow: "hidden",
					}}
				>
					<img height={"100%"} src={waveImage} alt='bambooImage' />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Intro;
