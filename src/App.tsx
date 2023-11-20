import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import { Container, Toolbar, Typography, Divider } from "@mui/material";
import { Route, Routes, HashRouter } from "react-router-dom";

function App() {
	return (
		<div
			style={{
				minWidth: "100%",
				minHeight: "100vh",
				backgroundColor: "#181716",
			}}
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
				</Routes>
			</HashRouter>
		</div>
	);
}

export default App;
