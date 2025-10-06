import { useState, useEffect } from "react";
import CountrySelector from "./atoms/CountrySelector";
import PeriodSelector from "./atoms/PeriodSelector";
import useApiRequest from "../hooks/useApiRequest";
import MessageContainer from "./atoms/MessageContainter";
import { RingLoader } from "react-spinners";
import { useAppContext } from "../contexts/AppContext";
import InputText from "./atoms/InputText";
import InputRadio from "./atoms/InputRadio";

function DataSettingComponent({ className }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState("current");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const { setRequest } = useAppContext();
  const { loading, error, handleRequest } = useApiRequest();

  const [countryModeSelection, setCountryModeSelection] = useState("country");

  useEffect(() => {
    if (!selectedCountry || !selectedPeriod) return;

    const req = {
      country: selectedCountry,
      period: selectedPeriod,
      year: selectedPeriod === "year" ? selectedYear : undefined,
    };

    setRequest(req);

    const fetchData = async () => {
      const request = {
        country: selectedCountry,
        period: selectedPeriod,
        year: selectedPeriod === "year" ? selectedYear : undefined,
      };

      try {
        await handleRequest(request);
      } catch (err) {
        console.error("Errore durante la ricerca:", err);
      }
    };

    fetchData();
  }, [selectedCountry, selectedPeriod]); // handleRequest causa loop infinito di chiamate

  return (
    <div className={`relative flex justify-around rounded-[30px] ${className}`}>
      <InputRadio
        value="country"
        onChange={() => {
          setCountryModeSelection("country");
          setSelectedCountry("");
        }}
        checked={countryModeSelection === "country"}
      >
        <CountrySelector
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          countryModeSelection={countryModeSelection}
        />
      </InputRadio>
      <InputRadio
        value="coordinates"
        onChange={() => {
          setCountryModeSelection("coordinates");
          setSelectedCountry("");
        }}
        checked={countryModeSelection === "coordinates"}
      >
        <div
          className={`flex flex-col gap-4 ${countryModeSelection !== "coordinates" ? "cursor-not-allowed opacity-50" : ""}`}
        >
          <InputText
            label={"Latitude"}
            disabled={countryModeSelection !== "coordinates"}
          />
          <InputText
            label={"Longitude"}
            disabled={countryModeSelection !== "coordinates"}
          />
        </div>
      </InputRadio>
      <PeriodSelector
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      {loading && (
        <div className="bg-aero-100/20 filter-blur-lg fixed top-0 left-0 z-99 flex h-screen w-screen items-center justify-center">
          <RingLoader loading={loading} size={150} />
        </div>
      )}
      {error && <MessageContainer message={`Errore: ${error.message}`} />}
    </div>
  );
}

export default DataSettingComponent;
