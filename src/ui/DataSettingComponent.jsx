import { useState, useEffect } from "react";
import CountrySelector from "./atoms/CountrySelector";
import PeriodSelector from "./atoms/PeriodSelector";
import useApiRequest from "../hooks/useApiRequest";
import MessageContainer from "./atoms/MessageContainter";
import {
  BarLoader,
  BeatLoader,
  CircleLoader,
  ClimbingBoxLoader,
  ClipLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  PropagateLoader,
  PuffLoader,
  PulseLoader,
  RingLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SyncLoader,
} from "react-spinners";
import { useAppContext } from "../contexts/AppContext";

function DataSettingComponent({ className }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState("current");
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const { setRequest } = useAppContext();
  const { loading, error, handleRequest } = useApiRequest();

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
    <div className={`relative rounded-[30px] ${className} p-4`}>
      <CountrySelector
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
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
