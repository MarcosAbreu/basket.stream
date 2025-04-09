import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  alt: string;
}

export default function SideBanner({ src, alt }: Props) {
  return (
    <Box
      sx={{
        position: "relative",
        height: "630px",
        maxWidth: "400px",
        flex: 1,
        display: { md: "block", xs: "none" },
      }}
    >
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
    </Box>
  );
}
