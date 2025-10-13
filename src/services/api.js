import { countries } from "../assets/countries.js";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const isProd = import.meta.env.PROD;

const apiRequestOptions = {
  method: "GET",
  headers: {
    "X-Api-Key": API_KEY,
    "User-Agent": "MyApp/1.0",
    Accept: "application/json",
  },
};

export const fetchCountries = async () => {
  try {
    const response = await fetch(
      isProd ? `${BASE_URL}/countries/` : `/api/countries/`,
      apiRequestOptions
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

const parseApiResponse = (response, period) => {
  if (response.errors) {
    return {
      error: true,
      message: response.errors.detail || "Errore sconosciuto",
    };
  }

  switch (period) {
    case "current":
      return {
        country: response.country,
        emissions: response.emissions,
      };

    case "24h":
      return {
        country: response.country,
        emissions: response.emissions,
      };

    case "year":
      return {
        country: response.country,
        year: response.year,
        months: response.months,
      };

    default:
      throw new Error("Tipo di periodo non supportato");
  }
};

const getISO3FromCountryId = (countryId) => {
  const countryName = countryId
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  let country = countries.find(
    (c) =>
      c.name.toLowerCase() === countryName.toLowerCase() ||
      c.name.toLowerCase().replace(/\s+/g, "-") === countryId.toLowerCase()
  );

  if (!country) {
    const specialMappings = {
      "czech-republic": "Czech Republic",
      "united-kingdom": "United Kingdom",
    };

    const mappedName = specialMappings[countryId];
    if (mappedName) {
      country = countries.find((c) => c.name === mappedName);
    }
  }

  return country.iso3;
};

export const fetchFlagFromApi = async (countryId) => {
  try {
    const iso3 = getISO3FromCountryId(countryId);
    if (!iso3) {
      throw new Error(`Country not found for ID: ${countryId}`);
    }

    const response = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${iso3}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching flag:", error);
    throw error;
  }
};

export const fetchDataFromApi = async (request) => {
  const { country, period = "", year = "" } = request;

  let url;
  if (period === "current") {
    url = isProd
      ? `${BASE_URL}/current-emissions/${country}/`
      : `/api/current-emissions/${country}/`;
  } else if (period === "24h") {
    url = isProd
      ? `${BASE_URL}/emissions-previous-24h/${country}/`
      : `/api/emissions-previous-24h/${country}/`;
  } else if (period === "year" && year) {
    url = isProd
      ? `${BASE_URL}/archive/${country}/${year}/`
      : `/api/archive/${country}/${year}/`;
  } else {
    throw new Error("Periodo o parametri non validi");
  }

  try {
    const response = await fetch(url, apiRequestOptions);

    if (!response.ok) {
      throw new Error(`Errore nella chiamata API: ${response.status}`);
    }

    const data = await response.json();

    return parseApiResponse(data, period);
  } catch (error) {
    console.error("Errore durante la chiamata API:", error);
    throw error;
  }
};

export default fetchDataFromApi;
