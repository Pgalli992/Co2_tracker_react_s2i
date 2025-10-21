import { useState } from "react";
import CountrySelector from "./CountrySelector";
import PeriodSelector from "./PeriodSelector";
import useApiRequest from "../hooks/useApiRequest";
import { useAppContext } from "../contexts/AppContext";
import InputRadio from "./atoms/InputRadio";
import Separator from "./atoms/Separator";
import {
  CalendarSearchIcon,
  Map,
  SendHorizontal,
  Settings2,
} from "lucide-react";
import CoordinatesInputs from "./CoordinatesInputs";
import BtnPrimary from "./atoms/BtnPrimary";

function DataSettingComponent({ className }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState("current");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const { setRequest, loading } = useAppContext();
  const { handleRequest } = useApiRequest();

  const [countryModeSelection, setCountryModeSelection] = useState("country");

  const [validationErrors, setValidationErrors] = useState({
    country: false,
  });

  const fetchData = async () => {
    setValidationErrors({ country: false });

    if (!selectedCountry) {
      setValidationErrors({ country: true });
      return;
    }

    const request = {
      country: selectedCountry,
      period: selectedPeriod,
      year: selectedPeriod === "year" ? selectedYear : undefined,
    };
    console.log("Request to be sent:", request);

    setRequest(request);

    try {
      await handleRequest(request);
    } catch (err) {
      console.error("Errore durante la ricerca:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  // Funzione per gestire l'onChange della modalità di selezione paese in modo da resettare l'errore.
  const handleCountryModeChange = (mode) => {
    setCountryModeSelection(mode);
    setSelectedCountry("");
    setValidationErrors({ country: false });
  };

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <Settings2 />
        <h1 className="text-center text-xl font-bold">Explore Emission Data</h1>
      </div>
      <div className="mt-5 w-full translate-y-5 transform justify-around md:flex md:flex-row">
        <div className="flex items-center justify-center">
          <Map />
        </div>
        <div className="flex translate-y-75 items-center justify-center md:translate-0">
          <CalendarSearchIcon />
        </div>
      </div>
      <div
        className={`sm:max-md:text-md xl:text-md relative flex w-full flex-col justify-between gap-3 text-sm md:flex-row lg:max-xl:text-xs ${className}`}
      >
        <div className="mt-8 flex flex-1 flex-col items-center justify-start gap-8">
          <div className="flex flex-col gap-2">
            <InputRadio
              value="country"
              onChange={() => {
                handleCountryModeChange("country");
              }}
              checked={countryModeSelection === "country"}
              className={"text-sm"}
            >
              Select Country
            </InputRadio>
            <InputRadio
              value="coordinates"
              onChange={() => handleCountryModeChange("coordinates")}
              checked={countryModeSelection === "coordinates"}
              className={"text-sm"}
            >
              Use Coordinates
            </InputRadio>
          </div>
          <div className="flex h-36 w-[70%] flex-col items-center justify-start">
            {countryModeSelection === "country" ? (
              <CountrySelector
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                countryModeSelection={countryModeSelection}
              />
            ) : (
              <CoordinatesInputs
                countryModeSelection={countryModeSelection}
                setSelectedCountry={setSelectedCountry}
              />
            )}
            {validationErrors.country && (
              <span className="mt-2 text-center text-xs font-medium text-red-500 lg:text-sm">
                ⚠️ Please select a country before fetching data
              </span>
            )}
          </div>
        </div>
        <Separator className="-translate-y-5 md:visible" />
        <div className="mt-4 flex flex-1 flex-col items-center justify-start gap-2 md:mt-12 md:gap-8">
          <div className="h-12 w-full text-center lg:w-30">
            <span className="text-sm">Select the survey period:</span>
          </div>
          <PeriodSelector
            selectedPeriod={selectedPeriod}
            setSelectedPeriod={setSelectedPeriod}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <BtnPrimary
          className="group mt-5 mb-8 flex items-center justify-center gap-2 md:mt-0"
          onClick={handleSubmit}
          disabled={loading}
        >
          <div className="group-hover:animate-bounce">
            <SendHorizontal />
          </div>
          <span>Fetch Data</span>
        </BtnPrimary>
      </div>
    </>
  );
}

export default DataSettingComponent;
