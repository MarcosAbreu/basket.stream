import { TeamType } from "@/lib/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import StoreLink from "./StoreLink";

interface Props {
  team: TeamType;
}

export default function TeamHeader({ team }: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "40px" }}>
      <Box sx={{ width: "100%", height: "100px", position: "relative" }}>
        <Box sx={{ position: "relative", flex: 1, height: "100px" }}>
          <Image
            src={team.images.banner_header}
            alt={team.full_name}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "40px",
            top: "30px",
            width: "calc(100% - 40px)",
            display: "flex",
            gap: "30px",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "40px", height: "40px", position: "relative" }}>
            <Image
              src={team.images.logo}
              alt={team.full_name}
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography sx={{ color: "common.white", fontSize: "24px" }}>{team.full_name}</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "440px",
          height: "100px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <StoreLink store={team.store} />
        <StoreLink
          store={{
            name: "NBA Store",
            url: "https://store.nba.com/",
            banner_store: "/mock/teamStores/store-banner-nba.png",
          }}
        />
      </Box>
    </Box>
  );
}
