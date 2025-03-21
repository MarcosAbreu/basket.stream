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
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        pt: { md: "80px", xs: "0" },
      }}
    >
      <HomeContainer />
    </Box>
  );
}
