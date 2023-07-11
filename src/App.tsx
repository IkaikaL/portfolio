import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Fun from "./Pages/Fun";
import {
	Container,
	Toolbar,
	Typography,
	IconButton,
	Card,
	Box,
	Stack,
} from "@mui/material";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

function App() {
	const onButtonClick = () => {
		// using Java Script method to get PDF file
		fetch("IkaikaLeeResume.pdf").then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement("a");
				alink.href = fileURL;
				alink.download = "IkaikaLeeResume.pdf";
				alink.click();
			});
		});
	};
	return (
		<Container
			disableGutters
			sx={{ minWidth: "100%", backgroundColor: "#181716" }}
		>
			<Toolbar sx={{ justifyContent: "space-between" }}>
				<Typography color='white'>Ikaika's Website</Typography>
				<Stack direction='row' spacing={2}>
					<IconButton
						sx={{ backgroundColor: "#8A6240", color: "white" }}
						href={`mailto:leeikaika4@example.com`}
					>
						<EmailIcon />
					</IconButton>
					<IconButton
						sx={{ backgroundColor: "#8A6240", color: "white" }}
						onClick={onButtonClick}
					>
						<PictureAsPdfIcon />
					</IconButton>
					<IconButton
						sx={{ backgroundColor: "#8A6240", color: "white" }}
						href='https://github.com/IkaikaL'
					>
						<GitHubIcon />
					</IconButton>
					<IconButton
						sx={{ backgroundColor: "#8A6240", color: "white" }}
						href='https://www.linkedin.com/in/ikaika-lee-708280213/'
					>
						<LinkedInIcon />
					</IconButton>
				</Stack>
			</Toolbar>
			<Router>
				<Routes>
					<Route path='/portfolio' element={<Home />} />
					<Route path='/fun' element={<Fun />} />
				</Routes>
			</Router>
		</Container>
	);
}

export default App;
