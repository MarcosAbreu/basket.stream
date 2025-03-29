import React from "react";
import type { Metadata } from "next";
import { Box } from "@mui/material";
import StandingsContainer from "@/components/standings/StandingsContainer";

export const metadata: Metadata = {
  title: "Standings",
  description: "Standings",
};

export default function Page() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "30px 0",
      }}
    >
      <StandingsContainer />
    </Box>
  );
}
