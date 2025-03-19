"use client";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ToggleConference from "./ToggleConference";
import StandingsTable from "./StandingsTable";

import standingsData from "@/mock/standings.json";

const westData = standingsData.filter((data) => data.conference === "West");
const eastData = standingsData.filter((data) => data.conference === "East");

export default function StandingsContainer() {
  const [toggleConference, setToggleConference] = useState<string>("east");

  return (
    <Box sx={{ width: { md: "80%", xs: "100%", height: "100%" } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          alignItems: "center",
          gap: { md: "100px", xs: "30px" },
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>Standings</Typography>
        <ToggleConference value={toggleConference} setValue={setToggleConference} />
      </Box>
      <Box sx={{ mt: { md: "50px", xs: "30px" } }}>
        {toggleConference === "west" ? (
          <StandingsTable title="Western Conference" data={westData} />
        ) : (
          <StandingsTable title="Eastern Conference" data={eastData} />
        )}
      </Box>
    </Box>
  );
}
