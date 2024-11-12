"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  slides: { image: string; title: string; description: string; link: string }[];
}

const ImageSlider = ({ slides }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "1248px",
        height: "704px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((item, index) => (
          <Box key={index} sx={{ position: "relative", width: "1248px", height: "704px" }}>
            <Box
              sx={{
                boxSizing: "content-box",
                position: "absolute",
                height: "100%",
                width: "33%",
                right: 0,
                top: 0,
                zIndex: 100,
                display: "flex",
                flexDirection: "column",
                textAlign: "end",
                paddingRight: "50px",
              }}
            >
              <Typography
                sx={{ color: "primary.main", fontWeight: 900, fontSize: "26px", mt: "100px" }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{ color: "common.white", fontWeight: 600, fontSize: "20px", mt: "50px" }}
              >
                {item.description}
              </Typography>
            </Box>
            <Box // overlay
              sx={{
                background:
                  "linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 1) 100%)",
                position: "absolute",
                width: "1248px",
                height: "704px",
                zIndex: 10,
              }}
            ></Box>
            <Image
              src={item.image}
              alt={`Slide ${index}`}
              width={1248}
              height={704}
              objectFit="cover"
            />
          </Box>
        ))}
      </Box>

      {/* Dots Container */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 11,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "70%", // Make dots container fill the entire width
            gap: "10px",
            justifyContent: "space-between",
            padding: "0 10px", // Add padding for slight spacing on the sides
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                flexGrow: 1,
                height: "8px",
                borderRadius: "4px",
                backgroundColor: currentIndex === index ? "primary.main" : "background.paper",
                border: "solid 1px #000",
                opacity: currentIndex === index ? 1 : 0.5,
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ImageSlider;
