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
							<Typography>Deez</Typography>
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
							<Typography>Deez</Typography>
						</CardContent>
					</Card>
				</Grid>

				<Grid item xs={4} sx={{ height: "50%" }}>
					<Card
						sx={{ minHeight: 200, maxWidth: "80", backgroundColor: "#57504d" }}
					>
						<CardContent>
							<Typography>Deez</Typography>
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
							<Typography>Deez</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Projects;
