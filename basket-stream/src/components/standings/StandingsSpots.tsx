import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Brackets from "./Brackets/Brackets";

const playoffData = [
  {
    round: "Quarterfinals",
    matches: [
      { id: 1, teams: ["Team A", "Team B"], scores: [1, 0], winner: "Team A" },
      { id: 2, teams: ["Team C", "Team D"], scores: [2, 3], winner: "Team D" },
      { id: 3, teams: ["Team E", "Team F"], scores: [1, 2], winner: "Team F" },
      { id: 4, teams: ["Team G", "Team H"], scores: [2, 0], winner: "Team G" },
    ],
  },
  {
    round: "Semifinals",
    matches: [
      { id: 5, teams: ["Team A", "Team D"], scores: [1, 2], winner: "Team D" },
      { id: 6, teams: ["Team F", "Team G"], scores: [1, 0], winner: "Team F" },
    ],
  },
  {
    round: "Finals",
    matches: [{ id: 7, teams: ["Team D", "Team F"], scores: [0, 0], winner: null }],
  },
];

interface Props {
  rows: number;
  bgColor: string;
  color: string;
  label: string;
}

export default function StandingsSpots({ rows, bgColor, color, label }: Props) {
  const [isHover, setIsHover] = useState(true);
  const [expand, setExpand] = useState(false);
  return (
    <Box
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        if (expand) {
          setIsHover(false);
        }
      }}
      sx={{
        position: "relative",
        zIndex: "10",
        width: expand ? "100%" : "10px",
        height: `calc(78px * ${rows})`,
        display: "flex",
        bgcolor: bgColor,
        justifyContent: "space-between",
        transition: "width 0.5s ease-in-out",
        border: "solid 2px",
        borderColor: "primary.light",
        "&:hover": {
          width: expand ? "100%" : "50px",
        },
        [`&:hover .${label}-text`]: {
          opacity: 1,
        },
        [`.${label}-text`]: {
          opacity: expand ? 1 : 0,
        },
      }}
    >
      <Typography
        className={`${label}-text`}
        onClick={() => setExpand(!expand)}
        sx={{
          textTransform: "uppercase",
          display: isHover || expand ? "flex" : "none",
          flexDirection: "column",
          height: "100%",
          width: "50px",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: 1.2,
          fontWeight: 500,
          fontSize: "20px",
          opacity: 0,
          transition: "opacity 0.5s ease-in-out",
          color: color,
          cursor: "pointer",
        }}
      >
        {label.split("").map((char, index) => (
          <span key={index} style={{ display: "inline-block" }}>
            {char}
          </span>
        ))}
      </Typography>
      {expand && <Brackets data={playoffData} />}
    </Box>
  );
}
