import Home from "./Pages/Home";
import Fun from "./Pages/Fun";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import {
	Container,
	Toolbar,
	Typography,
	IconButton,
	Stack,
	Divider,
} from "@mui/material";
import { Route, Routes, HashRouter } from "react-router-dom";
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
				<div>
					<Typography color='white'>Ikaika Lee</Typography>
					<Typography color='white'>Software Developer</Typography>
				</div>
			</Toolbar>
			<Divider sx={{ height: 3, bgcolor: "#8A6240" }} />
			<HashRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/fun' element={<Fun />} />
				</Routes>
			</HashRouter>
		</Container>
	);
}

export default App;
