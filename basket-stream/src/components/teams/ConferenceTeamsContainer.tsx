import { Box } from "@mui/material";
import React from "react";
import TeamCard, { TeamType } from "./TeamCard";

interface Props {
  conference: "East" | "West";
  teams: TeamType[];
}

export default function ConferenceTeamsContainer({ conference, teams }: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,140px)",
        gridTemplateRows: "repeat(5,140px)",
        gap: "10px",
        m: "30px ",
        justifyContent: conference === "West" ? "flex-start" : "flex-end",
      }}
    >
      {teams && teams.length > 0 && teams.map((team) => <TeamCard key={team.id} team={team} />)}
    </Box>
  );
}
