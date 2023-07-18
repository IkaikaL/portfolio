import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import resumePdf from "../Files/IkaikaLeeResume.pdf";

type Props = {
	descriptionInfo: {
		name: string;
		type: string;
		action?: string;
	}[];
};

const SelfDescription = (props: Props) => {
	const { descriptionInfo } = props;
	return (
		<Grid
			container
			direction='column'
			justifyContent='space-evenly'
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
			<Grid
				item
				sx={{
					paddingTop: "20px",
					paddingLeft: "10px",
					width: "96%",
				}}
			>
				<Typography color={"white"} sx={{ fontSize: { xs: 20, xl: 20 } }}>
					Born in 2000 in Maui, Hawai'i with an interest in web and app
					development.
				</Typography>
			</Grid>
			<Grid
				item
				sx={{
					paddingLeft: "10px",
					paddingBottom: "20px",
					width: "96%",
				}}
			>
				<Typography color={"white"} sx={{ fontSize: { xs: 23, xl: 30 } }}>
					Currently looking to obtain an early career position working with
					experienced software engineers, engaging in a competitive environment
					where I can play an integral role in the team’s success.
				</Typography>
			</Grid>

			<Grid item sx={{ width: "100%" }}>
				<Grid
					container
					direction='row'
					justifyContent='space-evenly'
					alignItems='center'
					sx={{ paddingBottom: "20px" }}
				>
					{descriptionInfo.map((current) => (
						<Grid item sx={{}}>
							<Button
								href={current.action !== undefined ? current.action : resumePdf}
								variant='text'
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
								</div>
							</Button>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default SelfDescription;
