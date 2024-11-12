"use client";
import { useEffect, useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const LiveReport = ({ news }: { news: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalTime = 5000; // Set time interval in ms (e.g., 5000ms for 5 seconds)

  // Automatically cycle through news items
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, intervalTime);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [news.length]);

  // Handle navigation manually
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + news.length) % news.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length);
  };

  return (
    <Box
      sx={{
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        flex: 1,
      }}
    >
      <Box
        sx={{
          width: "170px",
          height: "100%",
          bgcolor: "primary.main",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            width: "100%",
            m: "auto 0",
            color: "common.black",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Live Report
        </Typography>
      </Box>
      <Box
        sx={{
          width: "calc(100% - 170px)",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="body1" sx={{ textAlign: "center", flex: 1, mx: 2 }}>
          {news[currentIndex]}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "space-between" }}>
          <IconButton onClick={goToPrevious} sx={{ p: 0, width: "24px", height: "24px" }}>
            <KeyboardArrowUp sx={{ color: "white", p: 0 }} />
          </IconButton>
          <IconButton onClick={goToNext} sx={{ p: 0, width: "24px", height: "24px" }}>
            <KeyboardArrowDown sx={{ color: "white", p: 0 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default LiveReport;
