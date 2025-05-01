import TeamPage from "@/components/teams/teamPage/TeamPage";
import { fetchTeamByAbbreviation, fetchTeams } from "@/utils/fetchData";
import { APITeamType, TeamType } from "@/lib/types";
import { formatAPIDataTeams } from "@/utils/formatAPIData";

type PageProps = {
  params: Promise<{ abbreviation: string }>;
};

export async function generateStaticParams() {
  const teams: APITeamType[] = await fetchTeams();
  return teams.map((team) => ({
    abbreviation: team.abbreviation,
  }));
}

export default async function Page({ params }: PageProps) {
  const { abbreviation } = await params;

  const apiTeam: APITeamType = await fetchTeamByAbbreviation(abbreviation);

  if (!apiTeam) {
    return <div>Team not found.</div>;
  }

  const team: TeamType = formatAPIDataTeams([apiTeam])[0];

  return <TeamPage team={team} />;
}
