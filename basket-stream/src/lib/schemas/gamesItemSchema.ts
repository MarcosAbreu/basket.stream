import mockTeams from "@/mock/teamsPage.json";
import { GameType, StatsType, TeamType } from "../types";
import { TeamGamesStats } from "@/components/teams/teamPage/Last10Games/Last10GamesItem";
import mockStats from "@/mock/teamsGameStats.json";
import mockGames from "@/mock/games.json";

export function getGamesStats(selectedTeam: number): TeamGamesStats[] {
  const gamesStats: GameType[] = mockGames.filter(
    (game) => game.homeTeamId === selectedTeam || game.awayTeamId === selectedTeam,
    []
  );

  return gamesStats.map((game) => {
    const isHomeTeam = game.homeTeamId === selectedTeam;
    const homeTeam: TeamType = mockTeams.find((team) => team.id === game.homeTeamId) as TeamType;
    const awayTeam: TeamType = mockTeams.find((team) => team.id === game.awayTeamId) as TeamType;
    const homeTeamStats = mockStats.find((stat) => stat.statsId === game.homeStatsId) as StatsType;
    const awayTeamStats = mockStats.find((stat) => stat.statsId === game.awayStatsId) as StatsType;
    const gameStats: TeamGamesStats = {
      gameId: game.gameId,
      team: {
        id: isHomeTeam ? game.homeTeamId : game.awayTeamId,
        name: isHomeTeam ? homeTeam.name : awayTeam.name,
        logo: isHomeTeam ? homeTeam.images.logo : awayTeam.images.logo,
        stats: {
          points: isHomeTeam ? homeTeamStats.points : awayTeamStats.points,
          rebounds: isHomeTeam ? homeTeamStats.rebounds : awayTeamStats.rebounds,
          reboundsOffensive: isHomeTeam
            ? homeTeamStats.reboundsOffensive
            : awayTeamStats.reboundsOffensive,
          reboundsDefensive: isHomeTeam
            ? homeTeamStats.reboundsDefensive
            : awayTeamStats.reboundsDefensive,
          assists: isHomeTeam ? homeTeamStats.assists : awayTeamStats.assists,
          steals: isHomeTeam ? homeTeamStats.steals : awayTeamStats.steals,
          blocks: isHomeTeam ? homeTeamStats.blocks : awayTeamStats.blocks,
          turnovers: isHomeTeam ? homeTeamStats.turnovers : awayTeamStats.turnovers,
        },
      },
      ["team-against"]: {
        id: isHomeTeam ? game.awayTeamId : game.homeTeamId,
        name: isHomeTeam ? awayTeam.name : homeTeam.name,
        logo: isHomeTeam ? awayTeam.images.logo : homeTeam.images.logo,
        stats: {
          points: isHomeTeam ? awayTeamStats.points : homeTeamStats.points,
          rebounds: isHomeTeam ? awayTeamStats.rebounds : homeTeamStats.rebounds,
          reboundsOffensive: isHomeTeam
            ? awayTeamStats.reboundsOffensive
            : homeTeamStats.reboundsOffensive,
          reboundsDefensive: isHomeTeam
            ? awayTeamStats.reboundsDefensive
            : homeTeamStats.reboundsDefensive,
          assists: isHomeTeam ? awayTeamStats.assists : homeTeamStats.assists,
          steals: isHomeTeam ? awayTeamStats.steals : homeTeamStats.steals,
          blocks: isHomeTeam ? awayTeamStats.blocks : homeTeamStats.blocks,
          turnovers: isHomeTeam ? awayTeamStats.turnovers : homeTeamStats.turnovers,
        },
      },
      date: game.date,
      winner: game.winner,
    } as TeamGamesStats;
    return gameStats;
  });
}
