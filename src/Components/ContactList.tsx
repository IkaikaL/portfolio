import React from "react";
import { Grid, Typography, Button } from "@mui/material";

type Props = {};
const ContactList = (props: Props) => {
	return (
		<Grid
			container
			direction='column'
			justifyContent='flex-start'
			alignItems='flex-start'
			sx={{
				marginTop: "88.5vh",
				marginRight: "10px",
				height: "5%",
				width: "200px",
				backgroundColor: "black",
				opacity: 0.8,
				borderRadius: 1,
			}}
		>
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
				href={`mailto:leeikaika4@gmail.com`}
			>
				<Typography>Contact</Typography>
			</Button>
		</Grid>
	);
};

export default ContactList;
