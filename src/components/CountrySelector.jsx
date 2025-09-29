import { useEffect, useState } from "react";
import { fetchCCurrentEmissions, fetchCountries } from "../services/api";
import { useCountry } from "../contexts/CountryContext";

function CountrySelector() {
  const [countries, setCountries] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const { selectedCountry, setSelectedCountry } = useCountry();
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const countries = await fetchCountries();
        setCountries(countries);
      } catch (err) {
        setError(err.message);
      }
    };
    getCountries();
  }, []);

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
    console.log("Selected country:", e.target.value);
    fetchCCurrentEmissions({ country: e.target.value })
      .then((data) => {
        console.log("Current emissions data:", data);
      })
      .catch((err) => {
        console.error("Error fetching current emissions:", err);
      });
  };

  return (
    <div className="flex gap-2 items-center">
      <label htmlFor="country">Select your country:</label>
      <select
        id="country"
        name="country"
        onChange={handleChange}
        className="relative cursor-pointer bg-transparent z-0 before:content-[''] before:absolute before:inset-0 before:shadow-liquidglass before:bg-[rgba(255,255,255,0.1)] after:content-[''] after:absolute after:z-[-1] after:inset-0 after:backdrop-blur-[0px] after:overflow-hidden after:isolate after:[filter:url(#container-glass)]"
      >
        {countries.map((country) => {
          return (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default CountrySelector;
