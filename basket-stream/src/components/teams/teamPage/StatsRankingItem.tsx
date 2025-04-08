import { Box, TableRow, TableCell, Typography } from "@mui/material";
import React from "react";

interface Props {
  statName: string;
  value: number;
  rank: number;
}

export default function StatsRankingItem({ statName, value, rank }: Props) {
  const name = statName
    .replace(/([A-Z])/g, " $1")
    .trim()
    .replace(/^./, (str) => str.toUpperCase());

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
          height: "70px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            p: "0 30px",
            flex: 1,
            gap: "20px",
          }}
        >
          <Typography sx={{ fontSize: "18px", textAlign: "start" }}>{name}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "20px" }}>
            <Typography sx={{ fontSize: "20px" }}>{value}</Typography>
            <Typography sx={{ fontSize: "20px", width: "50px", textAlign: "end" }}>{`${rank}${
              rank === 1 ? "st" : rank === 2 ? "nd" : rank === 3 ? "rd" : "th"
            }`}</Typography>
          </Box>
        </Box>
      </TableCell>
    </TableRow>
  );
}
