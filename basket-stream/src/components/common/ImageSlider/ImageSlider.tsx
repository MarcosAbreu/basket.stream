"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

interface Props {
  slides: { image: string; title: string; description: string; link: string }[];
  width: number; // Width of the image container
  height: number; // Height of the image container
}

const ImageSlider = ({ slides, width, height }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [slides.length]);

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: `${width}px` },
          height: { xs: "100vw", md: `${height}px` },
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
            <Box
              key={index}
              sx={{
                position: "relative",
                flexShrink: 0,
                width: { md: width, xs: "100vw" },
                height: { md: height, xs: "100vw" },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  zIndex: 100,
                  background:
                    "linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 1) 100%)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: { md: "40%", xs: "100%" },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: { md: "end", xs: "center" },
                    justifyContent: "center",
                    p: { md: "0 40px", xs: "0" },
                    right: 0,
                    top: 0,
                    background: {
                      md: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 1) 100%)",
                      xs: "transparent",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      background: {
                        md: "transparent",
                        xs: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(12, 12, 12,0.8) 50%, rgba(0, 0, 0, 0.8) 100%)",
                      },
                      p: { xs: "20px", md: "0" },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "primary.main",
                        fontWeight: 800,
                        fontSize: "22px",
                        m: { md: 0, xs: "0 20px" },
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "common.white",
                        fontWeight: 500,
                        fontSize: "18px",
                        mt: "30px",
                        display: { md: "block", xs: "none" },
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* Slide Image */}
              <Image src={item.image} alt={`Slide ${index}`} fill style={{ objectFit: "cover" }} />
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
              width: "60%",
              gap: "10px",
              justifyContent: "space-between",
              padding: "0 10px",
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
    </Box>
  );
};

export default ImageSlider;
