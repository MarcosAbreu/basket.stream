import { Box } from "@mui/material";
import React from "react";
import TeamCard from "./TeamCard";
import { TeamType } from "@/lib/types";

interface Props {
  teams: TeamType[];
}

export default function ConferenceTeamsContainer({ teams }: Props) {
  return (
    <Box
      sx={{
        width: { md: "100%", xs: "100vw" },
        height: "100%",
        display: "grid",
        gridTemplateColumns: { md: "repeat(3,140px)", xs: "repeat(3,31%)" },
        gridTemplateRows: { md: "repeat(5,140px)", xs: "repeat(5,130px)" },
        gap: "10px",
        p: { md: "30px", xs: "10px" },
        justifyContent: {
          md: "center",
          xs: "space-between",
        },
      }}
    >
      {teams && teams.length > 0 && teams.map((team) => <TeamCard key={team.id} team={team} />)}
    </Box>
  );
}
