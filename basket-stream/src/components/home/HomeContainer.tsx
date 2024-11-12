import { Box } from "@mui/material";
import React from "react";
import LiveReport from "./LiveReport";
import LiveScores from "./LiveScores";
import games from "@/mock/scores.json";
import news from "@/mock/news.json";
import ImageSlider from "../common/ImageSlider/ImageSlider";
import imageMocks from "@/mock/imageSlider.json";

export default function HomeContainer() {
  return (
    <Box sx={{ width: "100%", p: "40px 70px" }}>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "60px" }}>
        <LiveReport news={news} />
        <LiveScores games={games} />
      </Box>
      <Box sx={{ mt: "70px", width: "100%" }}>
        <ImageSlider slides={imageMocks} />
      </Box>
    </Box>
  );
}
