import React from "react";
import "./Bracket.css"; // Import CSS for styling

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

const Brackets = ({ data }: { data: typeof playoffData }) => {
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
