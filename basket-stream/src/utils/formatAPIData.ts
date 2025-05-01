import { APITeamType, TeamType } from "@/lib/types";

export function formatAPIDataTeams(data: APITeamType[] | undefined): TeamType[] {
  if (!data) return [];
  return data.map((team) => ({
    id: team.id,
    name: team.name,
    abbreviation: team.abbreviation,
    conference: team.conference,
    division: team.division,
    full_name: team.full_name,
    images: {
      logo: team.images__logo,
      banner_header: team.images__banner_header,
      banner_side: team.images__banner_side,
    },
    store: {
      url: team.store__url,
      name: team.store__name,
      banner_store: team.store__banner_store,
    },
  }));
}
