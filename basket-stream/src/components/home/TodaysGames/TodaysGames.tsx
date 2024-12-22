import { Box, Typography } from "@mui/material";
import TodayGameItem, { GameType } from "./TodayGameItem";

interface Props {
  games: GameType[];
}

export default function TodaysGames({ games }: Props) {
  return (
    <Box sx={{ display: "flex", flex: 1, flexDirection: "column", gap: "20px" }}>
      <Typography sx={{ color: "white", fontWeight: 600, fontSize: "26px" }}>
        Today's Games
      </Typography>
      <Box
        sx={{
          flex: 1,
        }}
      >
        {games.map((game, index) => (
          <TodayGameItem game={game} key={`today-game-${index}`} />
        ))}
      </Box>
    </Box>
  );
}
