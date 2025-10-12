import { useEffect, useState } from "react";
import { fetchCountries } from "../services/api";
import { useAppContext } from "../contexts/AppContext";
import InputSelect from "./atoms/InputSelect";

function CountrySelector({
  selectedCountry,
  setSelectedCountry,
  countryModeSelection,
}) {
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
    <div
      className={`h-min w-full rounded-lg border-[.5px] px-2 py-1 ${countryModeSelection !== "country" ? "scale-75 transform cursor-not-allowed opacity-50" : ""}`}
    >
      <InputSelect
        label="Country:"
        options={countries.map((country) => ({
          value: country.id,
          label: country.name,
        }))}
        value={selectedCountry || ""}
        onChange={(value) => setSelectedCountry(value)}
        disabled={countryModeSelection !== "country"}
      />
    </div>
  );
}

export default CountrySelector;
