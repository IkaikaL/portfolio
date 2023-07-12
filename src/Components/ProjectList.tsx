import React from "react";
import {
	Container,
	Grid,
	Typography,
	Card,
	CardContent,
	Button,
} from "@mui/material";
import onepunchImage from "../Assets/onepunch.jpg";
import { useNavigate } from "react-router-dom";

type Props = {
	buttons: {
		name: string;
		location: string;
	}[];

	projects: {
		name: string;
		software: string;
		type: string;
		link: string;
	}[];
};
const ProjectList = (props: Props) => {
	const { buttons, projects } = props;
	const navigate = useNavigate();
	return (
		<Container
			disableGutters
			sx={{
				minWidth: "100%",
				height: 834,
				backgroundImage: `url(${onepunchImage})`,
				backgroundSize: "100%",
				overflow: "hidden",
			}}
		>
			<Grid
				container
				direction='column'
				justifyContent='space-evenly'
				alignItems='center'
				sx={{
					marginTop: "10px",
					marginLeft: "10px",
					width: "120px",
					backgroundColor: "black",
					opacity: 0.8,
					height: "200px",
					borderRadius: 1,
				}}
			>
				{buttons.map((current) => (
					<Grid item sx={{ backgroundColor: "black", opacity: 1 }}>
						<Button
							variant='text'
							fullWidth
							disableRipple
							sx={{
								color: "white",
								"&:hover": {
									backgroundColor: "transparent",
								},
							}}
							onClick={() => navigate(current.location)}
						>
							<Typography>{current.name}</Typography>
						</Button>
					</Grid>
				))}
			</Grid>
			<Grid
				container
				direction='column'
				justifyContent='flex-start'
				alignItems='flex-start'
				sx={{
					marginTop: "-10%",
					marginLeft: "80%",
					height: "95.5%",
					width: "300px",
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
		</Container>
	);
};

export default ProjectList;
