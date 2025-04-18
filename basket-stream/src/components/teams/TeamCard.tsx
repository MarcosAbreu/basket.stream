import { TeamType } from "@/lib/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  team: TeamType;
}

export default function TeamCard({ team }: Props) {
  return (
    <Link href={`/teams/${team.abbreviation}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "common.black",

          color: "common.white",
          cursor: "pointer",
          "&:hover": { backgroundColor: "primary.main", color: "common.black" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            maxHeight: "90px",
            p: "10px",
          }}
        >
          <Image src={team.images.logo} alt={team.name} fill style={{ objectFit: "contain" }} />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: { md: "50px", xs: "30px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: "0 10px",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { md: "14px", xs: "12px" },
              fontWeight: 500,
            }}
          >
            {team.name}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
