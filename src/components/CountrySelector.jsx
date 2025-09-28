import { useEffect, useState } from "react";
import { fetchCountries } from "../services/api";

function CountrySelector() {
  const [countries, setCountries] = useState([]);
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

  return (
    <div className="flex gap-2 items-center">
      <label htmlFor="country">Select your country:</label>
      <select
        id="country"
        name="country"
        className="relative cursor-pointer bg-transparent z-0 before:content-[''] before:absolute before:inset-0 before:shadow-liquidglass before:bg-[rgba(255,255,255,0.1)] after:content-[''] after:absolute after:z-[-1] after:inset-0 after:backdrop-blur-[0px] after:overflow-hidden after:isolate after:[filter:url(#container-glass)]"
      >
        {countries.map((country) => {
          return (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default CountrySelector;
