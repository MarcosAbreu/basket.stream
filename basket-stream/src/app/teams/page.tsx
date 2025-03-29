import React from "react";
import type { Metadata } from "next";
import { Box } from "@mui/material";
import TeamsContainer from "@/components/teams/TeamsContainer";

export const metadata: Metadata = {
  title: "Teams",
  description: "Teams",
};

export default function page() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "20px",
      }}
    >
      <TeamsContainer />
    </Box>
  );
}
