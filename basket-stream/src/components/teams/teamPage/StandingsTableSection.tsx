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
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useMemo } from "react";

interface Column {
  id: "team" | "win" | "loss" | "win-rate" | "home" | "road" | "last10" | "streak";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "team", label: "Conference" },
  { id: "win", label: "Win" },
  { id: "loss", label: "Loss" },
  { id: "win-rate", label: "Win%" },
  { id: "home", label: "Home" },
  { id: "road", label: "Road" },
  { id: "last10", label: "Last10" },
  { id: "streak", label: "Streak" },
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

export default function StandingsTableSection({
  conference,
  data,
  selected,
}: {
  conference: string;
  data: Data[];
  selected: string;
}) {
  const title = useMemo(
    () => (conference === "west" ? "Western Conference" : "Eastern Conference"),
    [conference]
  );
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Paper sx={{ width: "100%", height: "100%" }}>
        <TableContainer
          sx={{
            position: "relative",
            maxHeight: "100%",
            overflowY: "none",
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) =>
                  column.label === "Conference" ? (
                    <TableCell
                      key={`key-${title}`}
                      align="left"
                      sx={{
                        minWidth: { md: "100px", xs: "100px" },
                        bgcolor: "common.black",
                        color: "common.white",
                        fontSize: { md: "12px", xs: "12px" },
                        fontWeight: "400",
                        textTransform: "uppercase",
                        p: { md: "14px", xs: "6px" },
                        "&::after": {
                          content: {
                            xs: `"${title === "Eastern Conference" ? "East" : "West"}"`,
                            md: `"${title}"`,
                          },
                          display: "block",
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
                        textTransform: "uppercase",
                        fontSize: { md: "14px", xs: "12px" },
                        fontWeight: "400",
                        p: { md: "10px", xs: "4px" },
                      }}
                    >
                      {column.label}
                    </TableCell>
                  )
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((team) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  key={`id-standings-${team.team}`}
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
                  {columns.map((column) => {
                    const value = team[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align="center"
                        sx={{
                          color: selected === team.team ? "primary.main" : "common.white",
                          fontSize: { md: "16px", xs: "16px" },
                          p: { md: "5px", xs: "5px" },
                          borderBottom: "none",
                        }}
                      >
                        {column.id === "team" ? (
                          <Box
                            sx={{
                              display: "flex",

                              flexDirection: "row",
                              alignItems: "center",
                              pl: { md: "20px", xs: "10px" },
                            }}
                          >
                            <Box sx={{ width: "20px" }}>
                              <Typography sx={{ fontSize: { md: "16px", xs: "16px" } }}>
                                {team.rank}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                width: { md: "50px", xs: "40px" },
                                height: { md: "50px", xs: "40px" },
                                justifyContent: "center",
                                alignItems: "center",
                                m: { md: "0 20px", xs: "0 10px" },
                              }}
                            >
                              <Box
                                sx={{
                                  position: "relative",
                                  width: { md: "50px", xs: "40px" },
                                  height: { md: "50px", xs: "40px" },
                                }}
                              >
                                <Image
                                  src={team.logo}
                                  alt={team.team}
                                  fill
                                  style={{ objectFit: "contain" }}
                                />
                              </Box>
                            </Box>
                            <Typography sx={{ fontSize: { md: "16px", xs: "16px" } }}>
                              {team.team}
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
