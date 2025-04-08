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
import React from "react";
import StatsRankingItem from "./StatsRankingItem";

import { getStatsRanking } from "@/lib/schemas/statsRankingSchema";

export default function StatsRankingSection({ selectedTeam }: { selectedTeam: number }) {
  return (
    <Box sx={{ width: "440px", height: "100%", mt: "30px", position: "relative" }}>
      <Paper sx={{ width: "100%", height: "100%" }}>
        <TableContainer sx={{ height: "100%", overflowY: "auto" }}>
          <Table stickyHeader>
            <TableHead>
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
                  Stats Ranking - All NBA
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(getStatsRanking(selectedTeam))
                .filter(([key]) => key !== "teamId")
                .map(([statName, value]) => {
                  const { rank, value: statValue } = value as { rank: number; value: number };
                  return (
                    <StatsRankingItem
                      key={statName}
                      statName={statName}
                      rank={rank}
                      value={statValue}
                    />
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
