import React from "react";
import { Container, Grid, Button, Typography } from "@mui/material";
import bambooImage from "../Assets/bamboo.jpg";
import waveImage from "../Assets/wave.jpg";
import mangaImage from "../Assets/manga.jpg";
import { useNavigate } from "react-router-dom";
import resumePdf from "../Files/IkaikaLeeResume.pdf";

type Props = {
	buttons: {
		name: string;
		location: string;
	}[];
	info: {
		name: string;
		type: string;
		action?: string;
	}[];
};
const Intro = (props: Props) => {
	const { buttons, info } = props;
	const navigate = useNavigate();
	return (
		<Container
			disableGutters
			sx={{
				minWidth: "100%",
				backgroundImage: `url(${mangaImage})`,
				overflow: "hidden",
				height: { xs: 792, xl: 834 },
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
						justifyContent='space-evenly'
						alignItems='flex-start'
						sx={{
							marginTop: { xs: "10px", xl: "10px" },
							marginRight: { xs: "10px", xl: "10px" },
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
								Currently Looking to Obtain an entry level position working with
								experienced software engineers, engaging in a competitive
								environment where I can play an integral role in the team’s
								success.
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
								{info.map((current) => (
									<Grid item sx={{}}>
										<Button
											href={
												current.action !== undefined
													? current.action
													: resumePdf
											}
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
				</Grid>
			</Grid>
		</Container>
	);
};

export default Intro;
