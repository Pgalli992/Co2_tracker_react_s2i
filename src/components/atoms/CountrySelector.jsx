import { useEffect, useState } from "react";
import { fetchCountries } from "../../services/api";
import { useAppContext } from "../../contexts/AppContext";
import LiquidGlassContainer from "./LiquidGlassContainer";

function CountrySelector({ selectedCountry, setSelectedCountry }) {
  // eslint-disable-next-line no-unused-vars

  const { countries, setCountries } = useAppContext();
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
  }, [setCountries]);

  return (
    <LiquidGlassContainer>
      <label htmlFor="country">Select your country:</label>
      <select
        id="country"
        name="country"
        onChange={(e) => setSelectedCountry(e.target.value)}
        className="before:shadow-liquidglass relative z-0 cursor-pointer bg-transparent before:absolute before:inset-0 before:bg-[rgba(255,255,255,0.1)] before:content-[''] after:absolute after:inset-0 after:isolate after:z-[-1] after:overflow-hidden after:[filter:url(#container-glass)] after:backdrop-blur-[0px] after:content-['']"
      >
        {countries.map((country) => {
          return (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          );
        })}
      </select>
    </LiquidGlassContainer>
  );
}

export default CountrySelector;
