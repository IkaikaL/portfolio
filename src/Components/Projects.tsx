import React from "react";
import { Container, Grid, Typography, Card, CardContent } from "@mui/material";

import honeycomb from "../Assets/honeycomb.png";

type Props = {
	projects: (
		| {
				name: string;
				paragraphOne: string;
				paragraphTwo: string;
				paragraphThree: string;
		  }
		| {
				name: string;
				paragraphOne: string;
				paragraphTwo: null;
				paragraphThree: null;
		  }
	)[];
};
const Projects = (props: Props) => {
	const { projects } = props;
	return (
		<Container disableGutters sx={{ minWidth: "100%" }}>
			<div style={{ textAlign: "center" }}>
				<Typography
					sx={{
						marginBottom: "-20px",
						paddingTop: "20px",
						fontSize: 20,
						height: 20,
						color: "white",
					}}
				>
					Projects
				</Typography>
			</div>
			<Grid
				container
				direction='row'
				justifyContent='space-evenly'
				alignItems='center'
				sx={{
					backgroundColor: "#181716",
					minHeight: 900,
					backgroundImage: `url(${honeycomb})`,
				}}
			>
				{projects.map((current, index) =>
					index % 2 === 0 ? (
						<Grid item xs={5} sx={{ maxWidth: "40%", height: "50%" }}>
							<Card
								sx={{
									minHeight: 200,
									width: "100%",
									backgroundColor: "#57504d",
								}}
							>
								<CardContent>
									<Typography sx={{ textDecoration: "underline" }}>
										{current.name}:
									</Typography>
									<div style={{ paddingLeft: "20px" }}>
										<Typography>{current.paragraphOne}</Typography>
										<Typography>{current.paragraphTwo}</Typography>
										<Typography>{current.paragraphThree}</Typography>
									</div>
								</CardContent>
							</Card>
						</Grid>
					) : (
						<Grid item xs={5} sx={{ maxWidth: "40%", height: "50%" }}>
							<Card
								sx={{
									minHeight: 200,
									width: "100%",
									backgroundColor: "#57504d",
								}}
							>
								<CardContent>
									<Typography sx={{ textDecoration: "underline" }}>
										{current.name}:
									</Typography>
									<div style={{ paddingLeft: "20px" }}>
										<Typography>{current.paragraphOne}</Typography>
										<Typography>{current.paragraphTwo}</Typography>
										<Typography>{current.paragraphThree}</Typography>
									</div>
								</CardContent>
							</Card>
						</Grid>
					)
				)}
			</Grid>
		</Container>
	);
};

export default Projects;
