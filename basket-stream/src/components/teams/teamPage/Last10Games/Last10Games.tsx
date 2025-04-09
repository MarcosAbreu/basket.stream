"use client";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Last10GamesItem from "./Last10GamesItem";

import { getGamesStats } from "@/lib/schemas/gamesItemSchema";

interface Props {
  selectedTeam: number;
}
export default function Last10Games({ selectedTeam }: Props) {
  return (
    <Box sx={{ width: "100%", height: "calc(100% - 20px)", position: "relative" }}>
      <Paper sx={{ width: "100%", height: "100%" }}>
        <TableContainer sx={{ height: "100%", overflowY: "auto" }}>
          <Table stickyHeader>
            <TableHead sx={{ display: { md: "block", xs: "none" } }}>
              <TableRow>
                <TableCell
                  sx={{
                    bgcolor: "common.black",
                    color: "common.white",
                    textTransform: "uppercase",
                    fontSize: { md: "14px", xs: "10px" },
                    fontWeight: "400",
                    p: { md: "10px", xs: "4px" },
                  }}
                >
                  Last 10 Games
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getGamesStats(selectedTeam).map((game) => (
                <Last10GamesItem key={game.gameId} gameStats={game} selectedTeam={selectedTeam} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
