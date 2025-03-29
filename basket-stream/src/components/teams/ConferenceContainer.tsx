import { Box, Typography } from "@mui/material";
import React from "react";

interface Props {
  conference: "East" | "West";
  children: React.ReactNode;
}

export default function ConferenceContainer({ conference, children }: Props) {
  return (
    <Box
      sx={{
        width: { md: "50%", xs: "100%" },
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        justifyContent: conference === "East" ? "flex-end" : "flex-start",
        background:
          conference === "West"
            ? "radial-gradient(circle at right center, #740000 0%, #1D0000 100%)"
            : "radial-gradient(circle at left center, #001974 0%, #00011D 100%)",
      }}
    >
      <Typography
        sx={{
          display: { md: "none", xs: "inline" },
          mt: "20px",
          pl: "30px",
          fontSize: "20px",
          fontWeight: 600,
        }}
      >
        {conference}
      </Typography>
      {children}
    </Box>
  );
}
