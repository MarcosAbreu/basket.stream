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

import { useRouter } from "next/navigation";
import React from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

interface Column {
  id:
    | "jersey"
    | "player"
    | "position"
    | "height"
    | "weight"
    | "gp"
    | "min"
    | "points"
    | "fgm"
    | "fga"
    | "fg"
    | "3pm"
    | "3pa"
    | "3p"
    | "ftm"
    | "fta"
    | "ft"
    | "orb"
    | "drb"
    | "reb"
    | "ast"
    | "stl"
    | "blk"
    | "tov"
    | "inj";
  label: string;
  minWidth?: number;
  align?: "right" | "left" | "center";
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: "jersey", label: "#" },
  { id: "player", label: "Player", align: "left" },
  { id: "position", label: "Position" },
  { id: "height", label: "Height (ft)" },
  { id: "weight", label: "Weight (lbs)" },
  { id: "gp", label: "GP" },
  { id: "min", label: "MIN" },
  { id: "points", label: "PTS" },
  { id: "fgm", label: "FGM" },
  { id: "fga", label: "FGA" },
  { id: "fg", label: "FG%" },
  { id: "3pm", label: "3PM" },
  { id: "3pa", label: "3PA" },
  { id: "3p", label: "3P%" },
  { id: "ftm", label: "FTM" },
  { id: "fta", label: "FTA" },
  { id: "ft", label: "FT%" },
  { id: "orb", label: "ORB" },
  { id: "drb", label: "DRB" },
  { id: "reb", label: "REB" },
  { id: "ast", label: "AST" },
  { id: "stl", label: "STL" },
  { id: "blk", label: "BLK" },
  { id: "tov", label: "TOV" },
  { id: "inj", label: "INJ" },
];
type Data = {
  id: number;
  jersey: number;
  player: string;
  position: string;
  height: string;
  weight: number;
  gp: number;
  min: number;
  points: number;
  fgm: number;
  fga: number;
  fg: number;
  "3pm": number;
  "3pa": number;
  "3p": number;
  ftm: number;
  fta: number;
  ft: number;
  orb: number;
  drb: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
  tov: number;
  inj: boolean;
  season: string;
  teamId: number;
};
interface Props {
  data: Data[];
}
export default function RosterSection({ data }: Props) {
  const router = useRouter();
  return (
    <Box
      sx={{
        mt: { md: "40px", xs: "0px" },
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Typography sx={{ display: { md: "block", xs: "none" } }}>Roster</Typography>
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
                      key={column.id}
                      align="left"
                      sx={{
                        minWidth: { md: "100px", xs: "100px" },
                        bgcolor: "common.black",
                        color: "primary.light",
                        fontSize: { md: "12px", xs: "10px" },
                        fontWeight: "400",
                        textTransform: "uppercase",
                        p: { md: "14px", xs: "6px" },
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
                        fontSize: { md: "14px", xs: "10px" },
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
              {data.map((player) => (
                <TableRow
                  hover
                  role="checkbox"
                  tabIndex={-1}
                  onClick={() => router.push(`/players/${player.player}`)}
                  key={`id-player-${player.id}`}
                  sx={{
                    cursor: "pointer",
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
                    const value = player[column.id];

                    return (
                      <TableCell
                        key={column.id}
                        align="center"
                        sx={{
                          color: "common.white",
                          fontSize: { md: "16px", xs: "10px" },
                          p: { md: "5px", xs: "4px" },
                          borderBottom: "none",

                          flexDirection: "row",
                          justifyContent: "center",
                        }}
                      >
                        {column.id === "inj" ? value === true ? <LocalHospitalIcon /> : "" : value}
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
