import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
	buttons: {
		name: string;
		location: string;
	}[];
};
const NavColumn = (props: Props) => {
	const { buttons } = props;
	const navigate = useNavigate();
	return (
		<Grid
			container
			direction='column'
			justifyContent='space-evenly'
			alignItems='center'
			sx={{
				marginTop: "10px",
				marginLeft: "10px",
				marginBottom: "10px",
				width: "120px",
				backgroundColor: "black",
				opacity: 0.8,
				height: "150px",
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
	);
};

export default NavColumn;
