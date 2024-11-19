"use client";
import React, { useRef } from "react";
import { Box, Typography, IconButton, Avatar, Divider } from "@mui/material";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import Image from "next/image";

type Game = {
  teamAway: { score: number; logo: string; teamName: string };
  teamHome: { score: number; logo: string; teamName: string };
  url: string;
};

const LiveScores = ({ games }: { games: Game[] }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        height: { md: "50px", xs: "60px" },
        display: "flex",
        alignItems: "center",
        justifyContent: { md: "space-between", xs: "normal" },
        color: "white",
        width: { md: "50%", xs: "100%" },
      }}
    >
      <Box
        sx={{
          width: { md: "170px", xs: "80px" },
          height: { md: "100%", xs: "60px" },
          bgcolor: "common.black",
          display: "flex",
          alignItems: "center",
          p: "4px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            width: "100%",
            m: "auto 0",
            color: "primary.main",
            textTransform: "uppercase",
            fontWeight: 600,
            fontSize: { md: "16px", xs: "14px" },
          }}
        >
          Live Scores
        </Typography>
      </Box>

      <Box
        sx={{
          width: { md: "calc(100% - 170px)", xs: "calc(100% - 80px)" },
          height: { md: "100%", xs: "60px" },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "rgba(255,255,255,0.05)",
          padding: "0",
        }}
      >
        <IconButton
          onClick={scrollLeft}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            color: "primary.main",
          }}
        >
          <ChevronLeftOutlined />
        </IconButton>

        <Box
          ref={containerRef}
          sx={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {games.map((game, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
              <a href={game.url}>
                <Box
                  sx={{
                    minWidth: { md: "200px", xs: "150px" },
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: { md: "0 20px", xs: "0 10px" },
                    flexShrink: 0,
                    textAlign: "center",
                    overflow: "hidden",
                    height: { md: "50px", xs: "60px" },
                    bgcolor: "rgba(255,255,255,0.05)",
                  }}
                >
                  <Box
                    sx={{
                      width: { md: "70px", xs: "60px" },
                      height: { md: "50px", xs: "60px" },
                      position: "relative",
                    }}
                  >
                    <Image
                      src={game.teamAway.logo}
                      alt={game.teamAway.teamName}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      mx: 1,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {game.teamAway.score} - {game.teamHome.score}
                  </Typography>
                  <Image
                    src={game.teamHome.logo}
                    alt={game.teamHome.teamName}
                    width={70}
                    height={50}
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </a>
              {index < games.length - 1 && (
                <Divider
                  orientation="vertical"
                  sx={{ bgcolor: "primary.main", height: "30px", width: "2px", m: "0 10px" }}
                />
              )}
            </Box>
          ))}
        </Box>
        <IconButton
          onClick={scrollRight}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            color: "primary.main",
          }}
        >
          <ChevronRightOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default LiveScores;
