import React from "react";
import type { Metadata } from "next";
import { Box } from "@mui/material";
import TeamsContainer from "@/components/teams/TeamsContainer";
import { fetchTeams } from "@/utils/fetchData";
import { APITeamType } from "@/lib/types";
import { formatAPIDataTeams } from "@/utils/formatAPIData";
import Loading from "@/components/common/Loading";

export const metadata: Metadata = {
  title: "Teams",
  description: "Teams",
};

export default async function page() {
  const apiTeams: APITeamType[] = await fetchTeams();
  const teams = formatAPIDataTeams(apiTeams);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "20px",
      }}
    >
      {teams.length !== 0 && teams ? <TeamsContainer teams={teams} /> : <Loading />}
    </Box>
  );
}
