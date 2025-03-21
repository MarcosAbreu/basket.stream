import React from "react";
import "./BracketsPlayInSeeds.css";
import Image from "next/image";
import { Typography } from "@mui/material";

interface Props {
  team:
    | {
        teamId: number;
        name: string;
        logo: string;
        seed: number;
        color: {
          background: string;
          text: string;
        };
      }
    | undefined;
  seed: number;
}

export default function BracketsPlayInSeeds({ team, seed }: Props) {
  return (
    <div className="playin-seed" key={`playin-qualified-team-${team?.teamId}`}>
      <div className="playin-seed__container">
        <div className="playin-seed__header">
          <Typography
            sx={{
              color: "common.white",
              fontSize: "13px",
              fontWeight: 500,
              textAlign: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            {seed}th Seed for Playoffs
          </Typography>
        </div>
        {team ? (
          <div className="playin-seed__team" style={{ backgroundColor: team.color.background }}>
            <div className="playin-seed__team-container">
              <Image
                className="playin-seed__team-logo"
                src={team.logo}
                alt={team.name}
                width={140}
                height={37}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        ) : (
          <div className="playin-seed__team">
            <div className="playin-seed__team-container">
              <Typography
                sx={{
                  color: "common.white",
                  fontSize: "13px",
                  fontWeight: 500,
                  textAlign: "center",
                }}
              >
                TBD
              </Typography>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
