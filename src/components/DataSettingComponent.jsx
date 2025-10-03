import { useState, useEffect } from "react";
import CountrySelector from "./atoms/CountrySelector";
import PeriodSelector from "./atoms/PeriodSelector";
import useApiRequest from "../hooks/useApiRequest";

function DataSettingComponent({ className }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState("current");
  const { data, loading, error, handleRequest } = useApiRequest();

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, [selectedCountry, selectedPeriod]); // handleRequest causa loop infinito di chiamate

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
      {loading && <div>Caricamento...</div>}
      {error && <div className="error">Errore: {error.message}</div>}
      {data && <div className="data">Risultato: {JSON.stringify(data)}</div>}
    </div>
  );
}

export default DataSettingComponent;
