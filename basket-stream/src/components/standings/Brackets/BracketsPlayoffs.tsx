import React, { useMemo } from "react";
import "./Bracket.css";
import BracketsMatches, { matchType } from "./BracketsMatches/BracketsMatches";

export type bracketType = {
  round: string;
  matches: matchType[];
};

interface Props {
  data: {
    brackets: bracketType[];
    conference: string;
  }[];
  selectedConference: "East" | "West";
}

const BracketsPlayoffs = ({ data, selectedConference }: Props) => {
  const brackets = useMemo(() => {
    const conferenceData = data.find((item) => item.conference === selectedConference);
    return conferenceData ? conferenceData.brackets : [];
  }, [data, selectedConference]);

  const firstRound = useMemo(() => {
    return brackets.find((round) => round.round === "First Round");
  }, brackets);

  const confSemi = useMemo(() => {
    return brackets.find((round) => round.round === "Conference Semifinals");
  }, brackets);
  const confFinals = useMemo(() => {
    return brackets.find((round) => round.round === "Conference Finals");
  }, brackets);
  const nbaFinals = useMemo(() => {
    return data.find((item) => item.conference === "Finals")?.brackets[0];
  }, brackets);

  return (
    <div className="brackets">
      <div className="brackets__bracket-head">
        {brackets.map((round) => (
          <h3 className="bracket-head__title" key={`bracket-round-${round.round}`}>
            {round.round}
          </h3>
        ))}
        <h3 className="bracket-head__title" key={`bracket-round-nba-finals`}>
          {"NBA Finals"}
        </h3>
      </div>
      <div className="brackets__bracket-body bracket-grid">
        <div className="bracket-column-1st-round">
          {firstRound?.matches.map((match, matchIndex) => (
            <div className="bracket-1st-round-match" key={`match-${matchIndex}`}>
              <BracketsMatches match={match} />
              <div className="bracket-1st-round-match_lines">
                <span
                  className="lines-box"
                  style={
                    matchIndex === 1 || matchIndex === 3
                      ? { borderRight: "solid", borderBottom: "solid 2px" }
                      : { borderBottom: "solid 2px" }
                  }
                ></span>
                <span className="lines-box"></span>
                <span
                  className="lines-box"
                  style={
                    matchIndex === 0 || matchIndex === 2
                      ? { borderTop: "solid 2px", borderRight: "solid" }
                      : matchIndex === 1 || matchIndex === 3
                      ? { borderTop: "solid 2px" }
                      : {}
                  }
                ></span>
                <span></span>
                <span
                  className="lines-box"
                  style={matchIndex === 0 || matchIndex === 2 ? { borderRight: "solid" } : {}}
                ></span>
                <span
                  className="lines-box"
                  style={
                    matchIndex === 0 || matchIndex === 2
                      ? { borderBottom: "solid" }
                      : matchIndex === 1 || matchIndex === 3
                      ? { borderLeft: "none" }
                      : { borderBottom: "none" }
                  }
                ></span>
              </div>
            </div>
          ))}
        </div>

        <div className="bracket-column-conf-semi">
          <div className="bracket-conf-semi-match">
            {confSemi && confSemi.matches.length > 0 && (
              <BracketsMatches
                match={confSemi.matches[0]}
                key={`match-${confSemi.matches[0].matchId}`}
              />
            )}
            <div className="bracket-conf-semi-match_lines">
              <span className="lines-box" style={{ borderBottom: "solid 2px" }}></span>
              <span className="lines-box"></span>
              <span
                className="lines-box"
                style={{ borderTop: "solid 2px", borderRight: "solid" }}
              ></span>
              <span></span>
            </div>
          </div>
          <div className="bracket-conf-semi-match">
            <div className="bracket-conf-semi-slot"></div>
            <div className="bracket-conf-semi-match_lines-long">
              <span className="lines-box" style={{ borderRight: "solid" }}></span>
              <span className="lines-box" style={{ borderBottom: "solid 2px" }}></span>
              <span className="lines-box" style={{ borderRight: "solid" }}></span>
              <span className="lines-box" style={{ borderTop: "solid 2px" }}></span>
            </div>
          </div>
          <div className="bracket-conf-semi-match">
            {confSemi && confSemi.matches.length > 0 && (
              <BracketsMatches
                match={confSemi.matches[1]}
                key={`match-${confSemi.matches[1].matchId}`}
              />
            )}
            <div className="bracket-conf-semi-match_lines">
              <span
                className="lines-box"
                style={{ borderRight: "solid", borderBottom: "solid 2px" }}
              ></span>
              <span className="lines-box"></span>
              <span className="lines-box" style={{ borderTop: "solid 2px" }}></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className="bracket-column-conf-finals">
          <div className="bracket-conf-finals-match">
            {confFinals && confFinals.matches.length > 0 && (
              <BracketsMatches
                match={confFinals.matches[0]}
                key={`match-${confFinals.matches[0].matchId}`}
              />
            )}
            <div className="bracket-conf-finals-match_lines">
              <span className="lines-box" style={{ borderBottom: "solid 2px" }}></span>
              <span className="lines-box" style={{ borderBottom: "solid 2px" }}></span>
              <span className="lines-box" style={{ borderTop: "solid 2px" }}></span>
              <span className="lines-box" style={{ borderTop: "solid 2px" }}></span>
            </div>
          </div>
        </div>

        <div className="bracket-column-nba-finals">
          <div className="bracket-nba-finals-match">
            {nbaFinals && nbaFinals.matches.length > 0 && (
              <BracketsMatches
                match={nbaFinals.matches[0]}
                key={`match-${nbaFinals.matches[0].matchId}`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BracketsPlayoffs;
