import type { Metadata } from "next";

import Header from "@/components/common/Header/Header";
import { Box, Container } from "@mui/material";

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
      }}
    >
      <Header />
    </Box>
  );
}
