import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Container } from "@mui/material";

function App() {
	return (
		<Container
			disableGutters
			sx={{ minWidth: "100%", backgroundColor: "#181716" }}
		>
			<Home />
		</Container>
	);
}

export default App;
