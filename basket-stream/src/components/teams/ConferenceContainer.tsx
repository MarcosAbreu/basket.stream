import { Box } from "@mui/material";
import React from "react";

interface Props {
  conference: "East" | "West";
  children: React.ReactNode;
}

export default function ConferenceContainer({ conference, children }: Props) {
  return (
    <Box
      sx={{
        width: "50%",
        display: "flex",
        flexDirection: "row",
        justifyContent: conference === "East" ? "flex-end" : "flex-start",
        background:
          conference === "West"
            ? "radial-gradient(circle at right center, #740000 0%, #1D0000 100%)"
            : "radial-gradient(circle at left center, #001974 0%, #00011D 100%)",
      }}
    >
      {children}
    </Box>
  );
}
