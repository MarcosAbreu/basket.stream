import { notFound } from "next/navigation";
import teams from "@/mock/teamsPage.json";
import { Box } from "@mui/material";
import TeamHeader from "@/components/teams/teamPage/TeamHeader";
import SideBanner from "@/components/teams/teamPage/SideBanner";
import StandingsTableSection from "@/components/teams/teamPage/StandingsTableSection";
import StatsRankingSection from "@/components/teams/teamPage/StatsRankingSection";
import RosterSection from "@/components/teams/teamPage/RosterSection";
import Last10Games from "@/components/teams/teamPage/Last10Games/Last10Games";

import standingsData from "@/mock/standings.json";
import mockPlayersStats from "@/mock/playersStats.json";

export async function generateStaticParams() {
  return teams.map((team) => ({
    abbreviation: team.abbreviation,
  }));
}
export default async function TeamPage({
  params,
}: {
  params: Promise<{
    abbreviation: string;
  }>;
}) {
  const abbreviation = (await params).abbreviation;
  const team = teams.find((t) => t.abbreviation === abbreviation);
  const conferenceData = standingsData.filter(
    (data) => data.conference.toLowerCase() === team?.conference.toLowerCase()
  );
  if (!team) return notFound();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding: "50px 90px" }}>
      <TeamHeader team={team} />
      <Box sx={{ display: "flex", flexDirection: "row", gap: "40px" }}>
        <Box
          sx={{
            width: "calc(100% - 480px)",
            display: "flex",
            gap: "40px",
            position: "relative",
          }}
        >
          <SideBanner src={team.images.banner_side} alt={`side-banner-${team.abbreviation}`} />
          <Box
            sx={{
              display: "flex",
              mt: "30px",
              flexDirection: "column",
              gap: "20px",
              minWidth: "540px",
              flex: 1,
              height: "600px",
            }}
          >
            <StandingsTableSection
              conference={team.conference.toLowerCase()}
              data={conferenceData}
              selected={team.name}
            />
            <Last10Games selectedTeam={team.id} />
          </Box>
        </Box>
        <StatsRankingSection selectedTeam={team.id} />
      </Box>
      <RosterSection data={mockPlayersStats.filter((player) => player.teamId === team.id)} />
    </Box>
  );
}
