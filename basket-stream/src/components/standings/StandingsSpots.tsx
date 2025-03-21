"use client";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import BracketsPlayoffs from "./Brackets/BracketsPlayoffs";
import { matchType } from "./Brackets/BracketsMatches/BracketsMatches";
import BracketsPlayIn from "./Brackets/BracketsPlayIn";

const playoffData: {
  conference: "East" | "West" | "Finals";
  brackets: { round: string; matches: matchType[] }[];
}[] = [
  {
    conference: "West",
    brackets: [
      {
        round: "First Round",
        matches: [
          {
            matchId: 1,
            teams: [
              {
                teamId: 17,
                name: "Denver Nuggets",
                logo: "/mock/teamLogos/team-logo-DEN.png",
                seed: 1,
                color: {
                  background: "#0E1C44",
                  text: "#FFFFFF",
                },
              },
              {
                teamId: 24,
                name: "New Orleans Pelicans",
                logo: "/mock/teamLogos/team-logo-NOP.png",
                seed: 8,
                color: {
                  background: "#006BB6",
                  text: "#FFFFFF",
                },
              },
            ],
            scores: [4, 1], // Nuggets win
            winner: 17, // Nuggets win
          },
          {
            matchId: 3,
            teams: [
              {
                teamId: 21,
                name: "Golden State Warriors",
                logo: "/mock/teamLogos/team-logo-GSW.png",
                seed: 4,
                color: {
                  background: "#006BB6",
                  text: "#FFFFFF",
                },
              },
              {
                teamId: 22,
                name: "Los Angeles Lakers",
                logo: "/mock/teamLogos/team-logo-LAL.png",
                seed: 5,
                color: {
                  background: "#552582",
                  text: "#FFFFFF",
                },
              },
            ],
            scores: [4, 2], // Warriors win
            winner: 21, // Warriors win
          },
          {
            matchId: 2,
            teams: [
              {
                teamId: 19,
                name: "Sacramento Kings",
                logo: "/mock/teamLogos/team-logo-SAC.png",
                seed: 3,
                color: {
                  background: "#5A2D8C",
                  text: "#FFFFFF",
                },
              },
              {
                teamId: 20,
                name: "Dallas Mavericks",
                logo: "/mock/teamLogos/team-logo-DAL.png",
                seed: 6,
                color: {
                  background: "#005A8B",
                  text: "#FFFFFF",
                },
              },
            ],
            scores: [4, 3], // Kings win
            winner: 19, // Kings win
          },

          {
            matchId: 4,
            teams: [
              {
                teamId: 18,
                name: "Phoenix Suns",
                logo: "/mock/teamLogos/team-logo-PHX.png",
                seed: 2,
                color: {
                  background: "#E56020",
                  text: "#FFFFFF",
                },
              },
              {
                teamId: 25,
                name: "Minnesota Timberwolves",
                logo: "/mock/teamLogos/team-logo-MIN.png",
                seed: 7,
                color: {
                  background: "#0F3B60",
                  text: "#FFFFFF",
                },
              },
            ],
            scores: [4, 2], // Suns win
            winner: 18, // Suns win
          },
        ],
      },
      {
        round: "Conference Semifinals",
        matches: [
          {
            matchId: 5,
            teams: [
              {
                teamId: 17,
                name: "Denver Nuggets",
                logo: "/mock/teamLogos/team-logo-DEN.png",
                seed: 1,
                color: {
                  background: "#0E1C44",
                  text: "#FFFFFF",
                },
              },
              {
                teamId: 21,
                name: "Golden State Warriors",
                logo: "/mock/teamLogos/team-logo-GSW.png",
                seed: 4,
                color: {
                  background: "#006BB6",
                  text: "#FFFFFF",
                },
              },
            ],
            scores: [4, 2], // Nuggets win
            winner: 17, // Nuggets win
          },
          {
            matchId: 6,
            teams: [
              {
                teamId: 19,
                name: "Sacramento Kings",
                logo: "/mock/teamLogos/team-logo-SAC.png",
                seed: 3,
                color: {
                  background: "#5A2D8C",
                  text: "#FFFFFF",
                },
              },
              {
                teamId: 18,
                name: "Phoenix Suns",
                logo: "/mock/teamLogos/team-logo-PHX.png",
                seed: 2,
                color: {
                  background: "#E56020",
                  text: "#FFFFFF",
                },
              },
            ],
            scores: [4, 3], // Kings win
            winner: 19, // Kings win
          },
        ],
      },
      {
        round: "Conference Finals",
        matches: [
          {
            matchId: 7,
            teams: [
              {
                teamId: 17,
                name: "Denver Nuggets",
                logo: "/mock/teamLogos/team-logo-DEN.png",
                seed: 1,
                color: {
                  background: "#0E1C44",
                  text: "#FFFFFF",
                },
              },
              {
                teamId: 19,
                name: "Sacramento Kings",
                logo: "/mock/teamLogos/team-logo-SAC.png",
                seed: 3,
                color: {
                  background: "#5A2D8C",
                  text: "#FFFFFF",
                },
              },
            ],
            scores: [4, 3], // Nuggets win
            winner: 17, // Nuggets win
          },
        ],
      },
    ],
  },
  {
    conference: "East",
    brackets: [
      {
        round: "First Round",
        matches: [
          {
            matchId: 1,
            teams: [
              {
                teamId: 1, // Celtics teamId corrected
                name: "Boston Celtics",
                logo: "/mock/teamLogos/team-logo-BOS.png",
                seed: 1,
                color: {
                  background: "#007A33",
                  text: "#FFFFFF",
                },
              },
              {
                teamId: 16,
                name: "Brooklyn Nets",
                logo: "/mock/teamLogos/team-logo-BKN.png",
                seed: 8,
                color: {
                  background: "#000000",
                  text: "#FFFFFF",
                },
              },
            ],
            scores: [4, 1], // Celtics win
            winner: 1, // Celtics winner updated
          },
          {
            matchId: 3,
            teams: [
              {
                teamId: 10,
                name: "Miami Heat",
                logo: "/mock/teamLogos/team-logo-MIA.png",
                seed: 4,
                color: {
                  background: "#98002E",
                  text: "#FFFFFF",
                },
              },
              {
                teamId: 11,
                name: "Cleveland Cavaliers",
                logo: "/mock/teamLogos/team-logo-CLE.png",
                seed: 5,
                color: {
                  background: "#6F263D",
                  text: "#FFFFFF",
                },
              },
            ],
            scores: [4, 1], // Heat win
            winner: 10,
          },
          {
            matchId: 2,
            teams: [
              {
                teamId: 15,
                name: "Philadelphia 76ers",
                logo: "/mock/teamLogos/team-logo-PHI.png",
                seed: 3,
                color: {
                  background: "#006BB6",
                  text: "#FFFFFF",
                },
              },
              {
                teamId: 14,
                name: "Atlanta Hawks",
                logo: "/mock/teamLogos/team-logo-ATL.png",
                seed: 6,
                color: {
                  background: "#E03A3E",
                  text: "#FFFFFF",
                },
              },
            ],
            scores: [4, 2], // 76ers win
            winner: 15,
          },

          {
            matchId: 4,
            teams: [
              {
                teamId: 9,
                name: "Milwaukee Bucks",
                logo: "/mock/teamLogos/team-logo-MIL.png",
                seed: 2,
                color: {
                  background: "#00471B",
                  text: "#FFFFFF",
                },
              },
              {
                teamId: 12,
                name: "New York Knicks",
                logo: "/mock/teamLogos/team-logo-NYK.png",
                seed: 7,
                color: {
                  background: "#F58426",
                  text: "#FFFFFF",
                },
              },
            ],
            scores: [4, 2], // Bucks win
            winner: 9,
          },
        ],
      },
      {
        round: "Conference Semifinals",
        matches: [
          {
            matchId: 5,
            teams: [
              {
                teamId: 1, // Celtics teamId corrected
                name: "Boston Celtics",
                logo: "/mock/teamLogos/team-logo-BOS.png",
                seed: 1,
                color: {
                  background: "#007A33",
                  text: "#FFFFFF",
                },
              },
              {
                teamId: 10,
                name: "Miami Heat",
                logo: "/mock/teamLogos/team-logo-MIA.png",
                seed: 4,
                color: {
                  background: "#98002E",
                  text: "#FFFFFF",
                },
              },
            ],
            scores: [4, 3],
            winner: 1, // Celtics win
          },
          {
            matchId: 6,
            teams: [
              {
                teamId: 15,
                name: "Philadelphia 76ers",
                logo: "/mock/teamLogos/team-logo-PHI.png",
                seed: 3,
                color: {
                  background: "#006BB6",
                  text: "#FFFFFF",
                },
              },
              {
                teamId: 9,
                name: "Milwaukee Bucks",
                logo: "/mock/teamLogos/team-logo-MIL.png",
                seed: 2,
                color: {
                  background: "#00471B",
                  text: "#FFFFFF",
                },
              },
            ],
            scores: [3, 4],
            winner: 9, // Bucks win
          },
        ],
      },
      {
        round: "Conference Finals",
        matches: [
          {
            matchId: 7,
            teams: [
              {
                teamId: 1, // Celtics teamId corrected
                name: "Boston Celtics",
                logo: "/mock/teamLogos/team-logo-BOS.png",
                seed: 1,
                color: {
                  background: "#007A33",
                  text: "#FFFFFF",
                },
              },
              {
                teamId: 9,
                name: "Milwaukee Bucks",
                logo: "/mock/teamLogos/team-logo-MIL.png",
                seed: 2,
                color: {
                  background: "#00471B",
                  text: "#FFFFFF",
                },
              },
            ],
            scores: [4, 3],
            winner: 1, // Celtics win
          },
        ],
      },
    ],
  },
  {
    conference: "Finals",
    brackets: [
      {
        round: "NBA Finals",
        matches: [
          {
            matchId: 16,
            teams: [
              {
                teamId: 17, // Denver Nuggets from the West Conference
                name: "Denver Nuggets",
                logo: "/mock/teamLogos/team-logo-DEN.png",
                seed: 1,
                color: {
                  background: "#0E2240",
                  text: "#FFFFFF",
                },
              },
              {
                teamId: 13, // Boston Celtics from the East Conference
                name: "Boston Celtics",
                logo: "/mock/teamLogos/team-logo-BOS.png",
                seed: 2,
                color: {
                  background: "#007A33",
                  text: "#FFFFFF",
                },
              },
            ],
            scores: [4, 3], // Denver Nuggets win the championship
            winner: 17, // Denver Nuggets teamId
          },
        ],
      },
    ],
  },
];
const playInData: {
  conference: "East" | "West";
  rounds: { round: string; matches: matchType[] }[];
}[] = [
  {
    conference: "West",
    rounds: [
      {
        round: "First Round",
        matches: [
          {
            matchId: 1,
            teams: [
              {
                teamId: 7,
                name: "Minnesota Timberwolves",
                logo: "/mock/teamLogos/team-logo-MIN.png",
                seed: 7,
                color: {
                  background: "#236192",
                  text: "#FFFFFF", // Branco para contraste
                },
              },
              {
                teamId: 8,
                name: "New Orleans Pelicans",
                logo: "/mock/teamLogos/team-logo-NOP.png",
                seed: 8,
                color: {
                  background: "#0C2340",
                  text: "#FFFFFF", // Branco para contraste
                },
              },
            ],
            scores: [108, 102],
            winner: 7,
          },
          {
            matchId: 2,
            teams: [
              {
                teamId: 9,
                name: "Utah Jazz",
                logo: "/mock/teamLogos/team-logo-UTA.png",
                seed: 9,
                color: {
                  background: "#002B5C",
                  text: "#FFFFFF", // Branco para contraste
                },
              },
              {
                teamId: 10,
                name: "Houston Rockets",
                logo: "/mock/teamLogos/team-logo-HOU.png",
                seed: 10,
                color: {
                  background: "#CE1141",
                  text: "#FFFFFF", // Branco para contraste
                },
              },
            ],
            scores: [112, 118],
            winner: 10,
          },
        ],
      },
      {
        round: "Second Round",
        matches: [
          {
            matchId: 3,
            teams: [
              {
                teamId: 8,
                name: "New Orleans Pelicans",
                logo: "/mock/teamLogos/team-logo-NOP.png",
                seed: 8,
                color: {
                  background: "#0C2340",
                  text: "#FFFFFF", // Branco para contraste
                },
              },
              {
                teamId: 10,
                name: "Houston Rockets",
                logo: "/mock/teamLogos/team-logo-HOU.png",
                seed: 10,
                color: {
                  background: "#CE1141",
                  text: "#FFFFFF", // Branco para contraste
                },
              },
            ],
            scores: [115, 105],
            winner: 8,
          },
        ],
      },
    ],
  },
  {
    conference: "East",
    rounds: [
      {
        round: "First Round",
        matches: [
          {
            matchId: 4,
            teams: [
              {
                teamId: 7,
                name: "Brooklyn Nets",
                logo: "/mock/teamLogos/team-logo-BKN.png",
                seed: 7,
                color: {
                  background: "#000000",
                  text: "#FFFFFF", // Branco para contraste
                },
              },
              {
                teamId: 8,
                name: "New York Knicks",
                logo: "/mock/teamLogos/team-logo-NYK.png",
                seed: 8,
                color: {
                  background: "#006BB6",
                  text: "#FFFFFF", // Branco para contraste
                },
              },
            ],
            scores: [105, 116],
            winner: 8,
          },
          {
            matchId: 5,
            teams: [
              {
                teamId: 9,
                name: "Toronto Raptors",
                logo: "/mock/teamLogos/team-logo-TOR.png",
                seed: 9,
                color: {
                  background: "#CE1141",
                  text: "#FFFFFF", // Branco para contraste
                },
              },
              {
                teamId: 10,
                name: "Indiana Pacers",
                logo: "/mock/teamLogos/team-logo-IND.png",
                seed: 10,
                color: {
                  background: "#FDBB30",
                  text: "#000000", // Preto para contraste
                },
              },
            ],
            scores: [105, 109],
            winner: 10,
          },
        ],
      },
      {
        round: "Second Round",
        matches: [
          {
            matchId: 6,
            teams: [
              {
                teamId: 7,
                name: "Brooklyn Nets",
                logo: "/mock/teamLogos/team-logo-BKN.png",
                seed: 7,
                color: {
                  background: "#000000",
                  text: "#FFFFFF", // Branco para contraste
                },
              },
              {
                teamId: 10,
                name: "Indiana Pacers",
                logo: "/mock/teamLogos/team-logo-IND.png",
                seed: 10,
                color: {
                  background: "#FDBB30",
                  text: "#000000", // Preto para contraste
                },
              },
            ],
            scores: [112, 104],
            winner: 7,
          },
        ],
      },
    ],
  },
];

interface Props {
  rows: number;
  bgColor: string;
  color: string;
  label: string;
  conference: "East" | "West";
}

export default function StandingsSpots({ rows, bgColor, color, label, conference }: Props) {
  const [isHover, setIsHover] = useState(false);
  const [expand, setExpand] = useState(false);
  return (
    <Box
      key={`${label}-spots`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => {
        if (!expand) {
          setIsHover(false);
        }
      }}
      sx={{
        position: "relative",
        zIndex: "1",
        width: expand ? "100%" : "10px",
        height: `calc(78px * ${rows})`,
        display: "flex",
        flexDirection: "row",
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
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            opacity: expand || isHover ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          {label.split("").map((char, index) => (
            <Typography
              className={`${label}-text`}
              key={`text-${index}-${char}`}
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

                color: color,
                cursor: "pointer",
              }}
            >
              {char}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: expand ? 1 : 0,
          transition: expand ? "opacity 1s ease-in" : "opacity 0.3s ease-out",
        }}
      >
        {label.toLocaleLowerCase() === "playoffs" ? (
          <BracketsPlayoffs data={playoffData} selectedConference={conference} />
        ) : (
          <BracketsPlayIn data={playInData} selectedConference={conference} />
        )}
      </Box>
    </Box>
  );
}
