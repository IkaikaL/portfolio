import React from "react";
import { Container, Grid, Divider, Typography } from "@mui/material";

const languages = [
	"Java",
	"C#",
	"JavaScript",
	"Python",
	"Matlab",
	"CSS",
	"Git",
	"Dart",
	"Flutter",
	"React",
	"React Native",
	"Jira",
	"Linux",
	"SQL",
	"Node.js",
	"SCRUM",
];

const Skills = () => {
	return (
		<Container
			disableGutters
			sx={{
				minWidth: "100%",
				height: 300,
				backgroundColor: "#181716",
				color: "white",
				textAlign: "center",
			}}
		>
			<div style={{ marginBottom: "-30px", paddingTop: "20px" }}>
				<Typography sx={{ fontSize: 20 }}>Skills</Typography>
			</div>
			<Grid
				container
				direction='row'
				justifyContent='center'
				alignItems='center'
				sx={{
					height: "100%",
					textAlign: "center",
				}}
			>
				{languages.map((current) => (
					<Grid item xs={2}>
						{current}
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Skills;
