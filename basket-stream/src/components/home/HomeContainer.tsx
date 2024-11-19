import { Box, Typography } from "@mui/material";
import React from "react";
import LiveReport from "./LiveReport";
import LiveScores from "./LiveScores";
import games from "@/mock/scores.json";
import news from "@/mock/news.json";
import ImageSlider from "../common/ImageSlider/ImageSlider";
import imageMocks from "@/mock/imageSlider.json";
import TodaysGames from "./TodaysGames/TodaysGames";
import todayGamesMocks from "@/mock/todaysGames.json";

export default function HomeContainer() {
  return (
    <Box sx={{ width: "100%", p: { md: "40px 70px", xs: "70px 0" } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          gap: { md: "60px", xs: "10px" },
        }}
      >
        <LiveReport news={news} />
        <LiveScores games={games} />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          gap: "40px",
          pt: { md: "70px", xs: "40px" },
        }}
      >
        <ImageSlider slides={imageMocks} width={1200} height={600} />
        <TodaysGames games={todayGamesMocks} />
      </Box>
    </Box>
  );
}
