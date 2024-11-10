import Header from "@/components/common/Header/Header";
import React from "react";
import type { Metadata } from "next";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "Standings",
  description: "Standings",
};

export default function Page() {
  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      <Header />
    </Box>
  );
}
