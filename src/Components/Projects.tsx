import React from "react";
import {
	Container,
	Grid,
	Divider,
	Typography,
	Card,
	CardContent,
} from "@mui/material";

const Projects = () => {
	return (
		<Container disableGutters sx={{ minWidth: "100%", height: 780 }}>
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
				sx={{ height: "100%", backgroundColor: "#181716", paddingTop: 10 }}
			>
				<Grid item xs={4} sx={{ height: "50%" }}>
					<Card
						sx={{ minHeight: 200, maxWidth: "80", backgroundColor: "#57504d" }}
					>
						<CardContent>
							<Typography sx={{ textDecoration: "underline" }}>
								Software Systems Project:
							</Typography>
							<div style={{ paddingLeft: "20px" }}>
								<Typography>
									Developed a recipe generation app in Flutter using Dart and
									SQFlite to store recipes and ingredients resulting in meal
									planning based on the user’s inventory.
								</Typography>
								<Typography>
									Excelled as a front-end and back-end developer in flutter and
									dart using a SCRUM process.
								</Typography>
								<Typography>
									Performed as a team leader to plan and execute on project
									timeline, ensuring deadlines were met and all aspects of the
									app integrated properly.
								</Typography>
							</div>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={0.1} sx={{ alignItems: "center" }}>
					<Divider
						variant='fullWidth'
						orientation='vertical'
						sx={{ maxWidth: "1px", height: 400, bgcolor: "#8A6240" }}
					/>
				</Grid>
				<Grid item xs={4} sx={{ height: "50%" }}>
					<Card
						sx={{ minHeight: 200, maxWidth: "80", backgroundColor: "#57504d" }}
					>
						<CardContent>
							<Typography sx={{ textDecoration: "underline" }}>
								Object Oriented Design Project:
							</Typography>
							<div style={{ paddingLeft: "20px" }}>
								<Typography>
									Developed a webpage to structure meal plans filled by recipes
									stored in a database and recommended based on ingredients
									added.
								</Typography>
								<Typography>
									Excelled as a front-end developer programming in Python
									(Django) and HTML to create the webpage and algorithms.
								</Typography>
								<Typography>
									Acted as the primary project team leader to delegate tasks and
									ensure all core features were implemented before moving to
									stretch features.
								</Typography>
							</div>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={4} sx={{ height: "50%" }}>
					<Card
						sx={{ minHeight: 200, maxWidth: "80", backgroundColor: "#57504d" }}
					>
						<CardContent>
							<Typography sx={{ textDecoration: "underline" }}>
								Real Estate Website:
							</Typography>
							<div style={{ paddingLeft: "20px" }}>
								<Typography>
									By pulling information from the MLS I hope to streamline the
									data and organize it in a more productive way
								</Typography>
								<Typography>
									Utilizing React and Typescript to build the website and UI and
									Python to pull the data from the MLS
								</Typography>
								<Typography>
									Eventual plans to include Google Map API to display houses
								</Typography>
							</div>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={0.1} sx={{ alignItems: "center" }}>
					<Divider
						variant='fullWidth'
						orientation='vertical'
						sx={{
							maxWidth: "1px",
							marginTop: -15,
							height: 250,
							bgcolor: "#8A6240",
						}}
					/>
				</Grid>
				<Grid item xs={4} sx={{ height: "50%" }}>
					<Card
						sx={{ minHeight: 200, maxWidth: "80", backgroundColor: "#57504d" }}
					>
						<CardContent>
							<Typography sx={{ textDecoration: "underline" }}>
								Shoe Bot:
							</Typography>
							<div style={{ paddingLeft: "20px" }}>
								<Typography>
									Developing a bot to auto purchase high demand shoes using
									Python
								</Typography>
							</div>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Projects;
