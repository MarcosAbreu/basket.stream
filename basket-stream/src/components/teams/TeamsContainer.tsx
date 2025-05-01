"use client";
import { Box } from "@mui/material";
import React from "react";
import SideConferenceBanner from "./SideConferenceBanner";
import ConferenceContainer from "./ConferenceContainer";
import ConferenceTeamsContainer from "./ConferenceTeamsContainer";

import { TeamType } from "@/lib/types";

export default function TeamsContainer({ teams }: { teams: TeamType[] }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: { md: "800px", xs: "100%" },
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <ConferenceContainer conference="West">
          <SideConferenceBanner conference="West" />
          <ConferenceTeamsContainer
            teams={teams
              .filter((team) => team.conference.toLowerCase() === "West".toLowerCase())
              .sort((a, b) => a.name.localeCompare(b.name))}
          />
        </ConferenceContainer>
        <ConferenceContainer conference="East">
          <ConferenceTeamsContainer
            teams={teams
              .filter((team) => team.conference.toLowerCase() === "East".toLowerCase())
              .sort((a, b) => a.name.localeCompare(b.name))}
          />
          <SideConferenceBanner conference="East" />
        </ConferenceContainer>
      </Box>
    </Box>
  );
}
