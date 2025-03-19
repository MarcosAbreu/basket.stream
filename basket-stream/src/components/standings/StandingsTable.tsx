import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import StandingsPositionChange from "./StandingsPositionChange";
import StandingsSpots from "./StandingsSpots";

interface Column {
  id: "team" | "win" | "loss" | "win-rate" | "home" | "road" | "last10" | "streak";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "team", label: "Conference", minWidth: 500 },
  { id: "win", label: "Win", minWidth: 170 },
  { id: "loss", label: "Loss", minWidth: 170 },
  { id: "win-rate", label: "Win%", minWidth: 170 },
  { id: "home", label: "Home", minWidth: 170 },
  { id: "road", label: "Road", minWidth: 170 },
  { id: "last10", label: "Last10", minWidth: 170 },
  { id: "streak", label: "Streak", minWidth: 170 },
];

type Data = {
  win: number;
  rank: number;
  "previous-rank": number;
  team: string;
  conference: string;
  loss: number;
  "win-rate": number;
  home: string;
  road: string;
  last10: string;
  streak: string;
  logo: string;
};

interface Props {
  title: string;
  data: Data[];
}

export default function StandingsTable({ title, data }: Props) {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: "53px",
            display: { xs: "none", md: "block" },
            width: "100%",
          }}
        >
          <StandingsSpots rows={6} bgColor="primary.light" color="common.black" label="Playoffs" />
          <StandingsSpots rows={4} bgColor="common.black" color="primary.light" label="Play In" />
        </Box>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((column) =>
                column.label === "Conference" ? (
                  <TableCell
                    key={`key-${title}`}
                    align="left"
                    sx={{
                      minWidth: { md: "200px", xs: "100px" },
                      bgcolor: "common.black",
                      color: "primary.light",
                      fontSize: { md: "12px", xs: "10px" },
                      fontWeight: "500",
                      p: { md: "14px", xs: "6px" },
                      "&::after": {
                        content: {
                          xs: `"${title === "Eastern Conference" ? "East" : "West"}"`,
                          md: `"${title}"`,
                        },
                        display: "block", // Ensures pseudo-element behaves like text
                      },
                    }}
                  ></TableCell>
                ) : (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    sx={{
                      bgcolor: "common.black",
                      color: "common.white",
                      fontSize: { md: "12px", xs: "10px" },
                      fontWeight: "500",
                      p: { md: "14px", xs: "4px" },
                    }}
                  >
                    {column.label}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => {
              return (
                <React.Fragment key={`row-${index}`}>
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={`id-standings-${row.team}`}
                    sx={{
                      bgcolor: (theme) => theme.palette.grey[50],
                      "&:nth-of-type(odd)": {
                        bgcolor: (theme) => theme.palette.grey[100],
                      },
                      "&:hover": {
                        bgcolor: (theme) => `${theme.palette.common.black} !important`,
                      },
                    }}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align="center"
                          sx={{
                            color: "common.white",
                            fontSize: { md: "16px", xs: "10px" },
                            p: { md: "14px", xs: "4px" },
                            borderBottom: "none",
                          }}
                        >
                          {column.id === "team" ? (
                            <Box
                              sx={{
                                display: "flex",
                                gap: { md: "20px", xs: "10px" },
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <StandingsPositionChange
                                rank={row.rank}
                                prevRank={row["previous-rank"]}
                              />
                              <Box
                                sx={{
                                  position: "relative",
                                  width: { md: "70px", xs: "20px" },
                                  height: { md: "50px", xs: "20px" },
                                }}
                              >
                                <Image
                                  src={row.logo}
                                  alt={row.team}
                                  fill
                                  style={{ objectFit: "contain" }}
                                />
                              </Box>
                              <Typography sx={{ fontSize: { md: "16px", xs: "10px" } }}>
                                {row.team}
                              </Typography>
                            </Box>
                          ) : column.format && typeof value === "number" ? (
                            column.format(value)
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                  {/* Add a divider (yellow line) after the 6th row */}
                  {(index === 5 || index === 9) && (
                    <TableRow
                      sx={{ display: { xs: "table-row", md: "none" } }}
                      key="playoff-divider"
                    >
                      <TableCell colSpan={columns.length} sx={{ p: 0, border: "none" }}>
                        <Box
                          sx={{
                            height: "2px",
                            bgcolor: index === 5 ? "primary.main" : "common.white",
                            width: "100%",
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
