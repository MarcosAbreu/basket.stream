import Image from "next/image";
import React from "react";
import "./BracketsMatches.css";

export type matchType = {
  matchId: number;
  teams: {
    teamId: number;
    name: string;
    logo: string;
    seed: number;
    color: { background: string; text: string };
  }[];
  scores: [number, number];
  winner: number | null; // teamId
};

interface Props {
  match: matchType;
}
export default function BracketsMatches({ match }: Props) {
  return (
    <div className="container" key={match.matchId}>
      <div className="match">
        {match.teams.map((team, teamIndex) => (
          <div
            key={teamIndex}
            className="match__team"
            style={{ backgroundColor: team.color.background }}
          >
            <div className="team__seed">{team.seed}</div>
            <div className="team__container">
              <Image
                className="team__logo"
                src={team.logo}
                alt={team.name}
                width={70}
                height={37}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  width: "70px",
                  height: "37px",
                }}
              />
              <span className="team__score" style={{ color: team.color.text }}>
                {match.scores[teamIndex]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
