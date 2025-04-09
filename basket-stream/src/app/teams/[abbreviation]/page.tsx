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
import PageSection from "@/components/teams/teamPage/PageSection";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: { md: "50px 90px", xs: "30px 0" },
        minHeight: "100vh",
      }}
    >
      <TeamHeader team={team} />
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          gap: { md: "40px", xs: "20px" },
        }}
      >
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
              minWidth: { md: "540px", xs: "100vw" },
              flex: 1,
              height: { md: "600px", xs: "fit-content" },
            }}
          >
            <Box sx={{ height: { md: "50%", xs: "fit-content" } }}>
              <PageSection label="Standings">
                <StandingsTableSection
                  conference={team.conference.toLowerCase()}
                  data={conferenceData}
                  selected={team.name}
                />
              </PageSection>
            </Box>
            <Box sx={{ height: { md: "50%", xs: "fit-content" } }}>
              <PageSection label="Last 10 Games">
                <Last10Games selectedTeam={team.id} />
              </PageSection>
            </Box>
          </Box>
        </Box>
        <Box>
          <PageSection label="Stats Ranking">
            <StatsRankingSection selectedTeam={team.id} />
          </PageSection>
        </Box>
      </Box>
      <Box sx={{ mt: "20px" }}>
        <PageSection label="Roster">
          <RosterSection data={mockPlayersStats.filter((player) => player.teamId === team.id)} />
        </PageSection>
      </Box>
    </Box>
  );
}
