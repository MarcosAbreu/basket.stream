import type { Metadata } from "next";

import { Box } from "@mui/material";
import HomeContainer from "@/components/home/HomeContainer";

export const metadata: Metadata = {
  title: "Basket.Stream",
  description: "Basket.Stream",
};

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HomeContainer />
    </Box>
  );
}
