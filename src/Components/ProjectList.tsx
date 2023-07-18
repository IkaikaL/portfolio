import React from "react";
import {
	Container,
	Grid,
	Typography,
	Card,
	CardContent,
	Button,
} from "@mui/material";

type Props = {
	projects: {
		name: string;
		software: string;
		type: string;
		link: string;
	}[];
};
const ProjectList = (props: Props) => {
	const { projects } = props;
	return (
		<Grid
			container
			direction='column'
			justifyContent='flex-start'
			alignItems='flex-start'
			sx={{
				marginTop: { xs: "10px", xl: "10px" },
				marginRight: { xs: "10px", xl: "10px" },
				marginBottom: "10px",
				height: { xs: "100%", xl: "100%" },
				width: { xs: "240px", xl: "300px" },
				backgroundColor: "black",
				opacity: 0.8,
				borderRadius: 1,
			}}
		>
			{projects.map((current) => (
				<Grid
					item
					sx={{
						paddingTop: "10px",
						paddingLeft: "10px",
						paddingBottom: "10px",
						width: "96%",
					}}
				>
					<Button
						href={current.link}
						variant='text'
						fullWidth
						disableRipple
						sx={{
							color: "white",
							justifyContent: "flex-start",
							"&:hover": {
								backgroundColor: "transparent",
							},
						}}
					>
						<div>
							<Typography fontSize={14}>{current.name}</Typography>
							<Typography fontSize={10}>{current.software}</Typography>
							<Typography fontSize={10}>{current.type}</Typography>
						</div>
					</Button>
				</Grid>
			))}
		</Grid>
	);
};

export default ProjectList;
