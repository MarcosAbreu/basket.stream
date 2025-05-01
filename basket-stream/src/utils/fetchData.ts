const URL = `${process.env.BASKET_STREAM_API}`;

export const fetchDataFromAPI = async (path: string) => {
  const response = await fetch(URL + path);
  if (!response.ok) throw new Error("Failed to fetch data from API");
  return await response.json();
};

export const fetchTeams = async () => {
  return fetchDataFromAPI("/teams");
};

export const fetchTeamByAbbreviation = async (abbreviation: string) => {
  return fetchDataFromAPI(`/teams/abbreviation/${abbreviation}`);
};
