import { useEffect, useState } from "react";
import { fetchCountries } from "../../services/api";
import { useAppContext } from "../../contexts/AppContext";
import LiquidGlassContainer from "./LiquidGlassContainer";
import InputSelect from "./InputSelect";

function CountrySelector({ setSelectedCountry }) {
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
    <div>
      <InputSelect
        label="Select your country:"
        options={countries.map((country) => ({
          value: country.id,
          label: country.name,
        }))}
        onChange={(value) => setSelectedCountry(value)}
      />
    </div>
  );
}

export default CountrySelector;
