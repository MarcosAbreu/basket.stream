import React from "react";
import "./Bracket.css"; // Import CSS for styling

type Match = {
  id: number;
  teams: [string, string]; // Tuple for exactly two teams
  scores: [number, number]; // Tuple for exactly two scores
  winner: string | null; // Null for cases where there's no winner yet
};

type PlayoffRound = {
  round: string;
  matches: Match[];
};

export type PlayoffDataType = PlayoffRound[];

const Brackets = ({ data }: { data: PlayoffDataType }) => {
  return (
    <div className="bracket-container">
      {data.map((round, roundIndex) => (
        <div className="round" key={round.round}>
          {round.matches.map((match, matchIndex) => (
            <div className="match-container" key={match.id}>
              <div className="match">
                {match.teams.map((team, teamIndex) => (
                  <div key={teamIndex} className="team">
                    {team} <span className="score">{match.scores[teamIndex]}</span>
                  </div>
                ))}
              </div>
              {/* Connecting Line */}
              {roundIndex < data.length - 1 && (
                <div
                  className="line"
                  style={{
                    top: `${matchIndex * 100 + 50}px`,
                    height: "50px", // Adjust based on spacing
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Brackets;
