import React from "react";
import {
	Container,
	Grid,
	Typography,
	Card,
	CardContent,
	Button,
} from "@mui/material";
import hellsParadiseImage from "../Assets/hellsparadise.jpg";
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
const InfoList = (props: Props) => {
	const { buttons, info } = props;
	const navigate = useNavigate();
	return (
		<Container
			disableGutters
			sx={{
				minWidth: "100%",
				height: 834,
				backgroundImage: `url(${hellsParadiseImage})`,
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
				justifyContent='space-evenly'
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
				<Grid
					item
					sx={{
						paddingTop: "10px",
						paddingLeft: "10px",
						width: "96%",
					}}
				>
					<Typography color={"white"} fontSize={20}>
						Born in 2000 in Maui, Hawai'i with an interest in web and app
						development.
					</Typography>
				</Grid>
				<Grid
					item
					sx={{
						paddingLeft: "10px",
						paddingBottom: "10px",
						width: "96%",
					}}
				>
					<Typography color={"white"} fontSize={30}>
						Currently Looking to Obtain an entry level position working with
						experienced software engineers, engaging in a competitive
						environment where I can play an integral role in the team’s success.
					</Typography>
				</Grid>

				<Grid item sx={{ width: "100%" }}>
					<Grid
						container
						direction='row'
						justifyContent='center'
						alignItems='center'
						sx={{ width: "100%" }}
					>
						{info.map((current) => (
							<Grid
								item
								sx={{
									paddingTop: "10px",
									paddingLeft: "10px",
									paddingBottom: "10px",
									width: "30%",
								}}
							>
								<Button
									href={
										current.action !== undefined ? current.action : resumePdf
									}
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
									</div>
								</Button>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default InfoList;
