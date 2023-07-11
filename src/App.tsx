import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Fun from "./Pages/Fun";
import {
	Container,
	Toolbar,
	Typography,
	Button,
	Card,
	Box,
	Stack,
} from "@mui/material";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

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
					<Button
						sx={{ backgroundColor: "#4C6444", color: "white" }}
						href={`mailto:leeikaika4@example.com`}
					>
						Contact
					</Button>
					<Button
						sx={{ backgroundColor: "#4C6444", color: "white" }}
						onClick={onButtonClick}
					>
						Resume
					</Button>
					<Button
						sx={{ backgroundColor: "#4C6444", color: "white" }}
						href='https://github.com/IkaikaL'
					>
						GitHub
					</Button>
					<Button
						sx={{ backgroundColor: "#4C6444", color: "white" }}
						href='https://www.linkedin.com/in/ikaika-lee-708280213/'
					>
						LinkedIn
					</Button>
				</Stack>
			</Toolbar>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/fun' element={<Fun />} />
				</Routes>
			</Router>
		</Container>
	);
}

export default App;
