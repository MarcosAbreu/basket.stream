"use client";
import React, { useRef } from "react";
import { Box, Typography, IconButton, Avatar, Divider } from "@mui/material";
import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";
import Image from "next/image";

type Game = {
  teamAway: { score: number; logo: string; teamName: string };
  teamHome: { score: number; logo: string; teamName: string };
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
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        width: "50%",
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
          Live Scores
        </Typography>
      </Box>

      <Box
        sx={{
          width: "calc(100% - 170px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "background.paper",
          height: "100%",
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
              <Box
                sx={{
                  minWidth: "200px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 20px",
                  flexShrink: 0,
                  textAlign: "center",
                  overflow: "hidden",
                  bgcolor: "rgba(255,255,255,0.1)",
                }}
              >
                <Image
                  src={game.teamAway.logo}
                  alt={game.teamAway.teamName}
                  width={70}
                  height={50}
                  objectFit="contain"
                />
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
                  objectFit="contain"
                />
              </Box>
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
