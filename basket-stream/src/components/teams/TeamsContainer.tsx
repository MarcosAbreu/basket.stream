import { Box } from "@mui/material";
import React from "react";
import SideConferenceBanner from "./SideConferenceBanner";
import ConferenceContainer from "./ConferenceContainer";
import ConferenceTeamsContainer from "./ConferenceTeamsContainer";
import mockTeams from "@/mock/teamsPage.json";

export default function TeamsContainer() {
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
          height: "800px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <ConferenceContainer conference="West">
          <SideConferenceBanner conference="West" />
          <ConferenceTeamsContainer
            conference="West"
            teams={mockTeams.filter((team) => team.conference === "West")}
          />
        </ConferenceContainer>
        <ConferenceContainer conference="East">
          <ConferenceTeamsContainer
            conference="East"
            teams={mockTeams.filter((team) => team.conference === "East")}
          />
          <SideConferenceBanner conference="East" />
        </ConferenceContainer>
      </Box>
    </Box>
  );
}
