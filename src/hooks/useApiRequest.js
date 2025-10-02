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
      const cachedData = getFromSearchHistory(request);
      if (cachedData) {
        console.log("Dati recuperati dalla cronologia:", cachedData);
        setData(cachedData);
        setLoading(false);
        return cachedData;
      }

      const response = await fetchDataFromApi(request);

      console.log("API Response:", response);

      addToSearchHistory(request, response);

      setData(response);
      console.log("Dati recuperati dall'API:", response);
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
