"use client";
import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
  label?: string;
}

export default function PageSection({ children, label }: Props) {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "none" },
          flexDirection: "column",
          minWidth: "100%",
          flex: 1,
          height: "100%",
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          display: { md: "none", xs: "block" },
          height: "fit-content",
        }}
      >
        <Accordion
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
            color: "common.white",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMore sx={{ color: "common.white", m: "20px 0" }} />}>
            {label}
          </AccordionSummary>
          <AccordionDetails
            sx={{
              p: "0",
              display: "flex",
              flexDirection: "column",
              minWidth: "100vw",
              flex: 1,
              height: "100%",
            }}
          >
            {children}
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
