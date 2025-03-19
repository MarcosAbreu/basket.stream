import Header from "@/components/common/Header/Header";
import { Box } from "@mui/material";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Basket.Stream",
    template: "%s | Basket.Stream",
  },
  description: "Basket.Stream",
};

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  <Box>
    <Header />
    {children}
  </Box>;
}
