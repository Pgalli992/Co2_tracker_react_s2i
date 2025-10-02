import { useState } from "react";
import fetchDataFromApi from "../services/api";
import { useAppContext } from "../contexts/AppContext";

const useApiRequest = () => {
  const { addToSearchHistory, getFromSearchHistory } = useAppContext();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRequest = async (request) => {
    setLoading(true);
    setError(null);

    try {
      // Controlla se i dati sono già nella cronologia
      const cachedData = getFromSearchHistory(request);
      if (cachedData) {
        console.log("Dati recuperati dalla cronologia:", cachedData);
        setData(cachedData);
        setLoading(false);
        return cachedData;
      }

      // Effettua la chiamata API se i dati non sono nella cronologia
      const response = await fetchDataFromApi(request);

      // Aggiungi i nuovi dati alla cronologia
      addToSearchHistory(request, response);

      // Aggiorna lo stato con i nuovi dati
      setData(response);
      setLoading(false);
      return response;
    } catch (err) {
      console.error("Errore durante la richiesta:", err);
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return { data, error, loading, handleRequest };
};

export default useApiRequest;
