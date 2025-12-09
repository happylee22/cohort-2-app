import { apiKey, baseUrl } from "./config";

export const fetchData = async () => {
  const url = `${baseUrl}/recipes/list?from=0&size=20&tags=under_30_minutes`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "tasty.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
