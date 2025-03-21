import Header from "@/components/common/Header/Header";
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
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "80px 0",
      }}
    >
      <StandingsContainer />
    </Box>
  );
}
