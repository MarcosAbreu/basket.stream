export const formatToUserLocalTime = (time: string): string => {
  const date = new Date(time);

  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return formatter.format(date);
};
