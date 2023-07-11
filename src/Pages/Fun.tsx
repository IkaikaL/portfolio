import React from "react";
import flowers from "../Assets/flowers.jpg";
import bird from "../Assets/bird.jpg";
import flowerLeaves from "../Assets/flowerLeaves.jpg";
import flowerVertical from "../Assets/flowerVertical.jpg";
import flowerSingle from "../Assets/flowerSingle.jpg";
import hikeOne from "../Assets/hikeOne.jpg";
import hikeTwo from "../Assets/hikeTwo.jpg";
import waterfall from "../Assets/waterfall.jpg";
import waterfallTwo from "../Assets/waterfallTwo.jpg";
import bridge from "../Assets/bridge.jpg";
import Footer from "../Components/Footer";

import {
	Container,
	Grid,
	Typography,
	ImageList,
	ImageListItem,
} from "@mui/material";

function srcset(image: string, size: number, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${
			size * rows
		}&fit=crop&auto=format&dpr=2 2x`,
	};
}
const images = [
	{ img: flowers, rows: 2, cols: 2 },
	{ img: bird, rows: 2, cols: 2 },
	{ img: flowerLeaves, rows: 3, cols: 1 },
	{ img: flowerSingle, rows: 3, cols: 1 },
	{ img: flowerVertical, rows: 5, cols: 2 },
	{ img: hikeOne, rows: 2, cols: 2 },
	{ img: hikeTwo, rows: 2, cols: 2 },
	{ img: bridge, rows: 2, cols: 2 },
	{ img: waterfall, rows: 4, cols: 2 },
	{ img: waterfallTwo, rows: 4, cols: 2 },
];

const Fun = () => {
	return (
		<Container
			disableGutters
			sx={{
				backgroundColor: "#181716",
				justifyContent: "center",
				textAlign: "center",
			}}
		>
			<Typography sx={{ color: "white", fontSize: 20 }}>Pictures:</Typography>
			<ImageList
				sx={{ width: "100%", height: "890px" }}
				cols={4}
				rowHeight={160}
				variant='quilted'
			>
				{images.map((item) => (
					<ImageListItem
						key={item.img}
						cols={item.cols || 1}
						rows={item.rows || 1}
					>
						<img
							{...srcset(item.img, 121, item.rows, item.cols)}
							alt={"hobbyImg"}
						/>
					</ImageListItem>
				))}
			</ImageList>
			<Footer isHomePage={false} />
		</Container>
	);
};

export default Fun;
