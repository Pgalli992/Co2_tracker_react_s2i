import { useState } from "react";
import CountrySelector from "./atoms/CountrySelector";
import PeriodSelector from "./atoms/PeriodSelector";
import useApiRequest from "../hooks/useApiRequest";

function DataSettingComponent({ className }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState("current");
  const { data, loading, error, handleRequest } = useApiRequest();

  const handleSearch = async () => {
    if (!selectedCountry || !selectedPeriod) return;

    const request = {
      country: selectedCountry,
      period: selectedPeriod,
    };

    try {
      await handleRequest(request);
    } catch (err) {
      console.error("Errore durante la ricerca:", err);
    }
  };

  return (
    <div className={`${className}`}>
      <CountrySelector
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <PeriodSelector
        selectedPeriod={selectedPeriod}
        setSelectedPeriod={setSelectedPeriod}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? "Loading..." : "Search"}
      </button>
      {error && <div className="error">Errore: {error.message}</div>}
      {data && <div className="data">Risultato: {JSON.stringify(data)}</div>}
    </div>
  );
}

export default DataSettingComponent;
