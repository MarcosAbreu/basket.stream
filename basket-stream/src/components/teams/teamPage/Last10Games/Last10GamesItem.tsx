import { Box, TableCell, TableRow, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export type GameItemTeamStats = {
  id: number;
  name: string;
  logo: string;
  stats: {
    points: number;
    rebounds: number;
    reboundsOffensive: number;
    reboundsDefensive: number;
    assists: number;
    steals: number;
    blocks: number;
    turnovers: number;
  };
};

export type TeamGamesStats = {
  gameId: number;
  team: GameItemTeamStats;
  ["team-against"]: GameItemTeamStats;
  date: string;
  winner: number;
};

interface Props {
  gameStats: TeamGamesStats;
  selectedTeam: number;
}

export default function Last10GamesItem({ gameStats, selectedTeam }: Props) {
  return (
    <TableRow
      hover
      role="checkbox"
      tabIndex={-1}
      sx={{
        backgroundColor: (theme) => theme.palette.grey[50],
        "&:nth-of-type(odd)": {
          backgroundColor: (theme) => theme.palette.grey[100],
        },
        "&:hover": {
          backgroundColor: (theme) => `${theme.palette.common.black} !important`,
        },
      }}
    >
      <TableCell
        align="center"
        sx={{
          color: "common.white",
          fontSize: { md: "16px", xs: "10px" },
          p: "0",
          borderBottom: "none",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "60px",
        }}
      >
        <Box
          sx={{
            width: "10px",
            height: "100%",
            backgroundColor: gameStats.winner === selectedTeam ? "green" : "red",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            p: "0 30px",
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Typography>{gameStats.team.stats.points}</Typography>
              <Typography>PTS</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Typography>{gameStats.team.stats.assists}</Typography>
              <Typography>AST</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Typography>{gameStats.team.stats.rebounds}</Typography>
              <Typography>REB</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Typography>{gameStats.team.stats.steals}</Typography>
              <Typography>STL</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Typography>{gameStats.team.stats.blocks}</Typography>
              <Typography>BLK</Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" }}>
            <Box sx={{ position: "relative", width: "40px", height: "40px" }}>
              <Image
                src={gameStats.team.logo}
                alt={gameStats.team.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
            <Typography>Vs</Typography>
            <Box sx={{ position: "relative", width: "40px", height: "40px" }}>
              <Image
                src={gameStats["team-against"].logo}
                alt={gameStats["team-against"].name}
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Typography>{gameStats["team-against"].stats.points}</Typography>
              <Typography>PTS</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Typography>{gameStats["team-against"].stats.assists}</Typography>
              <Typography>AST</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Typography>{gameStats["team-against"].stats.rebounds}</Typography>
              <Typography>REB</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Typography>{gameStats["team-against"].stats.steals}</Typography>
              <Typography>STL</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Typography>{gameStats["team-against"].stats.blocks}</Typography>
              <Typography>BLK</Typography>
            </Box>
          </Box>
        </Box>
      </TableCell>
    </TableRow>
  );
}
