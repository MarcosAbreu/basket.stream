import { Box, Typography } from "@mui/material";
import TodayGameItem, { GameType } from "./TodayGameItem";

interface Props {
  games: GameType[];
}

export default function TodaysGames({ games }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: "20px",
        height: { md: "100%", xs: "fit-content" },
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontWeight: 600,
          fontSize: { md: "26px", xs: "18px" },
          ml: { xs: "20px", md: 0 },
        }}
      >
        Today&apos;s Games
      </Typography>
      <Box
        sx={{
          height: "100%",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: { md: "20px", xs: "10px" },
          overflowY: { md: "auto", xs: "auto" },
        }}
      >
        {games.map((game, index) => (
          <TodayGameItem game={game} key={`today-game-${index}`} />
        ))}
      </Box>
    </Box>
  );
}
