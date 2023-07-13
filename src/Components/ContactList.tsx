import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import monstereightImage from "../Assets/monstereight.jpg";
import hunterxhunterImage from "../Assets/hunterxhunter.jpg";
import berserkImage from "../Assets/berserk.jpg";
import onepunchImage from "../Assets/onepunch.jpg";
import { useNavigate } from "react-router-dom";

type Props = {
	buttons: {
		name: string;
		location: string;
	}[];
};
const ContactList = (props: Props) => {
	const navigate = useNavigate();
	const { buttons } = props;
	return (
		<Container
			disableGutters
			sx={{
				minWidth: "100%",
				height: { xs: 792, xl: 834 },
				backgroundImage: `url(${hunterxhunterImage})`,
				overflow: "hidden",
			}}
		>
			<Grid
				container
				direction='row'
				justifyContent='space-between'
				alignItems='flex-start'
			>
				<Grid item>
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
				</Grid>
				<Grid item>
					<Grid
						container
						direction='column'
						justifyContent='flex-start'
						alignItems='flex-start'
						sx={{
							marginTop: { xs: "750px", md: "748px", xl: "790px" },
							marginRight: { xs: "10px", md: "10px", xl: "10px" },
							marginLeft: { xs: "10px", md: "30px" },
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
				</Grid>
			</Grid>
		</Container>
	);
};

export default ContactList;
