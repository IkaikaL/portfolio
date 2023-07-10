import React from "react";
import { Container, Grid, Divider } from "@mui/material";

const Intro = () => {
	return (
		<Container disableGutters sx={{ minWidth: "60%", height: 600 }}>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
				sx={{ height: "100%" }}
			>
				<Grid
					item
					xs={8}
					sx={{ backgroundColor: "#4C6444", height: "100%" }}
				></Grid>
				<Grid
					item
					xs={4}
					sx={{ backgroundColor: "#CABA9C", height: "100%" }}
				></Grid>
			</Grid>
		</Container>
	);
};

export default Intro;
