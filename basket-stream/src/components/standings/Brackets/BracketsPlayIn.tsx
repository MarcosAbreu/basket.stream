import React, { useMemo } from "react";
import "./BracketPlayIn.css";
import BracketsMatches, { matchType } from "./BracketsMatches/BracketsMatches";
import BracketsPlatInSeeds from "./BracketsPlayInSeeds";

export type bracketType = {
  round: string;
  matches: matchType[];
};

interface Props {
  data: {
    rounds: bracketType[];
    conference: string;
  }[];
  selectedConference: "East" | "West";
}

const BracketsPlayIn = ({ data, selectedConference }: Props) => {
  const rounds = useMemo(() => {
    const conferenceData = data.find((item) => item.conference === selectedConference);
    return conferenceData ? conferenceData.rounds : [];
  }, [data, selectedConference]);

  const firstRound = useMemo(() => {
    return rounds.filter((round) => round.round === "First Round");
  }, rounds);

  const secondRound = useMemo(() => {
    return rounds.filter((round) => round.round === "Second Round");
  }, rounds);

  return (
    <div className="playin-brackets">
      <div className="playin-brackets__bracket-body playin-bracket-grid">
        <div className="playin-bracket-column-1st-round">
          <div
            className="playin-bracket-1st-round-match"
            key={`match-${firstRound[0]?.matches[0].matchId}`}
          >
            <BracketsMatches match={firstRound[0]?.matches[0]} />
            <div className="playin-bracket-1st-round-match_lines">
              <span className="playin-lines-box" style={{ borderBottom: "solid 2px " }}></span>
              <span className="playin-lines-box" style={{ borderBottom: "solid 2px" }}></span>

              <span className="playin-lines-box" style={{ borderTop: "solid 2px" }}></span>
              <span className="playin-lines-box" style={{ borderTop: "solid 2px" }}></span>
            </div>
          </div>

          <div className="playin-bracket-1st-round-slot">
            <span></span>
            <span
              className="playin-lines-box box-1st-round-grid-1-2"
              style={{ borderBottom: "dashed", borderLeft: "dashed" }}
            ></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span
              className="playin-lines-box"
              style={{ borderTop: "solid", borderLeft: "solid" }}
            ></span>
          </div>
          <div
            className="playin-bracket-1st-round-match"
            key={`match-${firstRound[0]?.matches[1].matchId}`}
          >
            <BracketsMatches match={firstRound[0]?.matches[1]} />
            <div className="playin-bracket-1st-round-match_lines">
              <span className="playin-lines-box" style={{ borderBottom: "solid" }}></span>
              <span className="playin-lines-box" style={{ borderLeft: "solid" }}></span>
              <span className="playin-lines-box" style={{}}></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="playin-bracket-column-2nd-round">
          <div className="playin-bracket-2nd-round-slot">
            <span className="playin-lines-box" style={{ borderBottom: "solid 2px" }}></span>
            <span className="playin-lines-box" style={{ borderTop: "solid 2px" }}></span>
          </div>
          <div
            className="playin-bracket-2nd-round-match"
            key={`match-${secondRound[0]?.matches[0].matchId}`}
          >
            <BracketsMatches match={secondRound[0]?.matches[0]} />
            <div className="playin-bracket-2nd-round-match_lines">
              <span className="playin-lines-box" style={{ borderBottom: "solid 2px" }}></span>
              <span className="playin-lines-box" style={{ borderBottom: "solid 2px" }}></span>

              <span className="playin-lines-box" style={{ borderTop: "solid 2px" }}></span>
              <span className="playin-lines-box" style={{ borderTop: "solid 2px" }}></span>
            </div>
          </div>
        </div>

        <div className="playin-bracket-column-qualifyers">
          <BracketsPlatInSeeds
            seed={7}
            team={firstRound[0].matches[0].teams.find(
              (team) => team.teamId === firstRound[0].matches[0].winner
            )}
          />
          <BracketsPlatInSeeds
            seed={8}
            team={secondRound[0].matches[0].teams.find(
              (team) => team.teamId === secondRound[0].matches[0].winner
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default BracketsPlayIn;
