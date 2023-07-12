import React from "react";
import { Container, Grid, Button, Typography } from "@mui/material";
import bambooImage from "../Assets/bamboo.jpg";
import waveImage from "../Assets/wave.jpg";
import mangaImage from "../Assets/manga.jpg";
import { useNavigate } from "react-router-dom";

type Props = {
	buttons: {
		name: string;
		location: string;
	}[];
};
const Intro = (props: Props) => {
	const { buttons } = props;
	const navigate = useNavigate();
	return (
		<Container
			disableGutters
			sx={{
				minWidth: "100%",
				height: 834,
				backgroundImage: `url(${mangaImage})`,
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
		</Container>
	);
};

export default Intro;
