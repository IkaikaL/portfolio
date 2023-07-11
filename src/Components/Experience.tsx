import React from "react";
import {
	Container,
	Grid,
	Divider,
	Typography,
	Card,
	CardContent,
} from "@mui/material";

type Props = {
	experience: {
		timeName: string;
		paragraphOne: string;
		paragraphTwo: string;
		paragraphThree: string;
	}[];
};
const Experience = (props: Props) => {
	const { experience } = props;
	return (
		<Container disableGutters sx={{ minWidth: "100%", paddingBottom: 10 }}>
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
					Experience
				</Typography>
			</div>
			<Grid
				container
				direction='column'
				justifyContent='flex-start'
				alignItems='center'
				spacing={5}
				sx={{ height: "100%", backgroundColor: "#181716", paddingTop: 10 }}
			>
				{experience.map((current, index) =>
					index !== experience.length - 1 ? (
						<div
							style={{
								width: "60%",
								paddingBottom: "40px",

								justifyContent: "center",
							}}
						>
							<Grid
								item
								sx={{
									width: "1080px",
									paddingLeft: "100px",
								}}
							>
								<Card sx={{ backgroundColor: "#57504d" }}>
									<CardContent>
										<Typography sx={{ textDecoration: "underline" }}>
											{current.timeName}
										</Typography>
										<div style={{ paddingLeft: "20px" }}>
											<Typography>{current.paragraphOne}</Typography>
											<Typography>{current.paragraphTwo}</Typography>
											<Typography>{current.paragraphThree}</Typography>
										</div>
									</CardContent>
								</Card>
							</Grid>
							<Divider
								variant='fullWidth'
								orientation='horizontal'
								sx={{
									bgcolor: "#8A6240",
									borderBottomWidth: 1,
									marginBottom: "-20px",
									marginTop: "20px",
								}}
							/>
						</div>
					) : (
						<div style={{ width: "50%" }}>
							<Grid item sx={{ width: "100%" }}>
								<Card sx={{ backgroundColor: "#57504d" }}>
									<CardContent>
										<Typography sx={{ textDecoration: "underline" }}>
											{current.timeName}
										</Typography>
										<div style={{ paddingLeft: "20px" }}>
											<Typography>{current.paragraphOne}</Typography>
											<Typography>{current.paragraphTwo}</Typography>
											<Typography>{current.paragraphThree}</Typography>
										</div>
									</CardContent>
								</Card>
							</Grid>
						</div>
					)
				)}
			</Grid>
		</Container>
	);
};

export default Experience;
