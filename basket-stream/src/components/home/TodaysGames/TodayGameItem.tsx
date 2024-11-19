"use client";
import LiveLink from "@/components/common/LiveLink";
import { formatToUserLocalTime } from "@/utils/formatToUserLocalTime";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export type GameType = {
  teamAway: {
    logo: string;
    teamName: string;
  };
  teamHome: {
    logo: string;
    teamName: string;
  };
  place: string;
  time: string;
  url: string;
};

interface Props {
  game: GameType;
}

export default function TodayGameItem({ game }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", flex: 1 }}>
      <Box
        sx={{
          position: "relative",
          width: "140px",
          height: "140px",
        }}
      >
        <Image
          src={game.teamAway.logo}
          alt={game.teamAway.teamName}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          width: "100%",
          minWidth: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(12, 12, 12,0.8) 50%, rgba(0, 0, 0, 0.8) 100%)",
        }}
      >
        {new Date() < new Date(game.time) ? (
          <Typography sx={{ fontSize: "24px", fontWeight: 500 }}>
            {formatToUserLocalTime(game.time)}
          </Typography>
        ) : (
          <Box>
            <LiveLink
              width="70px"
              height="40px"
              href={game.url}
              alt={`Watch ${game.teamAway.teamName} X ${game.teamHome.teamName}`}
            />
          </Box>
        )}
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "140px",
          height: "140px",
        }}
      >
        <Image
          src={game.teamHome.logo}
          alt={game.teamHome.teamName}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
}
