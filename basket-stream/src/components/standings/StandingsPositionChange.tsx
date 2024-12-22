import { Box } from "@mui/material";
import React from "react";

import { HorizontalRule, ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

export default function StandingsPositionChange({
  rank,
  prevRank,
}: {
  rank: number;
  prevRank: number;
}) {
  return (
    <Box sx={{ color: "common.white", ml: "10px", display: { md: "block", xs: "none" } }}>
      {rank === prevRank ? (
        <HorizontalRule />
      ) : rank > prevRank ? (
        <ArrowDropUp />
      ) : (
        <ArrowDropDown />
      )}
    </Box>
  );
}
