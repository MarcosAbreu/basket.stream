const baseUrl = process.env.NEXT_PUBLIC_BASKET_STREAM_API;

export const getImageUrl = (path: string) => {
  // If path is already a full URL, return it untouched
  if (path.startsWith("http")) {
    return path;
  }
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_BASKET_STREAM_API is not defined in .env file");
  }

  return `${baseUrl}${path}`;
};
