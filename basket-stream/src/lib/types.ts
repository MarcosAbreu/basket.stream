export type TeamType = {
  id: number;
  name: string;
  abbreviation: string;
  conference: string;
  division: string;
  full_name: string;
  images: {
    logo: string;
    banner_header: string;
    banner_side: string;
  };
  store: StoreType;
};
export type StatsType = {
  statsId: number;
  gameId: number;
  points: number;
  assists: number;
  rebounds: number;
  reboundsDefensive: number;
  reboundsOffensive: number;
  steals: number;
  blocks: number;
  turnovers: number;
  fouls: number;
  fieldGoalsMade: number;
  fieldGoalsAttempted: number;
  threePointsMade: number;
  threePointsAttempted: number;
  freeThrowsMade: number;
  freeThrowsAttempted: number;
  plusMinus: number;
};

export type GameType = {
  gameId: number;
  homeTeamId: number;
  awayTeamId: number;
  homeStatsId: number;
  awayStatsId: number;
  date: string;
  time: string;
  season: string;
  seasonType: string;
  winner: number;
};

export type StatsRankingType = {
  teamId: number;
  points: { rank: number; value: number };
  assists: { rank: number; value: number };
  rebounds: { rank: number; value: number };
  reboundsOffensive: { rank: number; value: number };
  reboundsDefensive: { rank: number; value: number };
  steals: { rank: number; value: number };
  blocks: { rank: number; value: number };
  turnovers: { rank: number; value: number };
};

export type StoreType = {
  url: string;
  banner_store: string;
  name: string;
};
