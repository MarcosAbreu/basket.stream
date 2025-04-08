import mockRankingStats from "@/mock/statsRanking.json";
import { StatsRankingType } from "../types";

export function getStatsRanking(selectedTeam: number): StatsRankingType {
  const statsRanking: StatsRankingType = mockRankingStats.find(
    (stat) => stat.teamId === selectedTeam
  ) as StatsRankingType;

  return statsRanking;
}
