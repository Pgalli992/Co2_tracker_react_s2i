const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const isProd = import.meta.env.PROD;

export const fetchCountries = async () => {
  try {
    const response = await fetch(
      isProd ? `${BASE_URL}/countries/` : `/api/countries/`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": API_KEY,
          "User-Agent": "MyApp/1.0",
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Server response:", errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.countries;
  } catch (err) {
    console.error("Error fetching countries:", {
      message: err.message,
      status: err.status,
      stack: err.stack,
    });
    throw err;
  }
};

export const fetchCCurrentEmissions = async ({ country }) => {
  try {
    const response = await fetch(
      isProd
        ? `${BASE_URL}/current-emissions/${country}/`
        : `/api/current-emissions/${country}/`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": API_KEY,
          "User-Agent": "MyApp/1.0",
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Server response:", errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching current emissions:", {
      message: err.message,
      status: err.status,
      stack: err.stack,
    });
    throw err;
  }
};
