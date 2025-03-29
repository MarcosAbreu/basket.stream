import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  conference: "East" | "West";
}

type conferenceDataType = {
  conference: string;
  data: {
    bannerSrc: string;
    bannerAlt: string;
  };
}[];

const conferenceData: conferenceDataType = [
  {
    conference: "East",
    data: {
      bannerSrc: "/images/static/pages/teams/east-side-banner.png",
      bannerAlt: "Eastern Conference",
    },
  },
  {
    conference: "West",
    data: {
      bannerSrc: "/images/static/pages/teams/west-side-banner.png",
      bannerAlt: "Western Conference",
    },
  },
];

export default function SideConferenceBanner({ conference }: Props) {
  const conferenceInfo = conferenceData.find((data) => data.conference === conference)?.data;

  return (
    <Box sx={{ width: "100%", maxWidth: "330px", height: "100%", position: "relative" }}>
      {conferenceInfo && (
        <Image
          src={conferenceInfo?.bannerSrc}
          alt={conferenceInfo.bannerAlt}
          fill
          style={{ objectFit: "cover" }}
        />
      )}
    </Box>
  );
}
