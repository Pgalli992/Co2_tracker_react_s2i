import { useState, useEffect } from "react";
import CountrySelector from "./atoms/CountrySelector";
import PeriodSelector from "./atoms/PeriodSelector";
import useApiRequest from "../hooks/useApiRequest";
import MessageContainer from "./atoms/MessageContainter";
import { RingLoader } from "react-spinners";
import { useAppContext } from "../contexts/AppContext";
import InputText from "./atoms/InputText";
import InputRadio from "./atoms/InputRadio";
import Separator from "./atoms/Separator";
import {
  CalendarSearch,
  CalendarSearchIcon,
  Map,
  Settings2,
} from "lucide-react";

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
    <>
      <div className="flex items-center justify-center gap-2">
        <Settings2 />
        <h1 className="text-center text-xl font-bold">Explore Emission Data</h1>
      </div>
      <div className="mt-5 flex w-full translate-y-5 transform justify-around">
        <Map />
        <CalendarSearchIcon />
      </div>
      <div
        className={`relative flex w-full justify-between gap-3 ${className}`}
      >
        <div className="mt-6 flex flex-1 flex-col items-center justify-center gap-6">
          <div className="flex flex-col gap-2">
            <InputRadio
              value="country"
              onChange={() => {
                setCountryModeSelection("country");
                setSelectedCountry("");
              }}
              checked={countryModeSelection === "country"}
              className={"text-sm"}
            >
              Select Country
            </InputRadio>
            <InputRadio
              value="coordinates"
              onChange={() => {
                setCountryModeSelection("coordinates");
                setSelectedCountry("");
              }}
              checked={countryModeSelection === "coordinates"}
              className={"text-sm"}
            >
              Use Coordinates
            </InputRadio>
          </div>
          <div className="flex h-36 w-[70%] items-start justify-center">
            {countryModeSelection === "country" ? (
              <CountrySelector
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
                countryModeSelection={countryModeSelection}
              />
            ) : (
              <div
                className={`flex w-full flex-col gap-4 ${countryModeSelection !== "coordinates" ? "cursor-not-allowed opacity-50" : ""}`}
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
            )}
          </div>
        </div>
        <Separator className="-translate-y-5" />
        <div className="relative mb-4 flex flex-1 items-end justify-center">
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
      </div>
    </>
  );
}

export default DataSettingComponent;
