import { useState } from "react";
import fetchDataFromApi, { fetchFlagFromApi } from "../services/api";
import { useAppContext } from "../contexts/AppContext";

const useApiRequest = () => {
  const { addToSearchHistory, getFromSearchHistory } = useAppContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data, setData } = useAppContext();

  const handleRequest = async (request) => {
    setLoading(true);
    setError(null);

    try {
      const cachedData = getFromSearchHistory(request);
      if (cachedData) {
        setData(cachedData);
        setLoading(false);
        return cachedData;
      }

      const [dataResult, flagResult] = await Promise.allSettled([
        fetchDataFromApi(request),
        fetchFlagFromApi(request.country),
      ]);

      if (dataResult.status === "rejected") {
        console.error("Errore fetchDataFromApi:", dataResult.reason);
        setError({
          message:
            dataResult.reason.message ||
            "Errore nella chiamata fetchDataFromApi",
        });
      }

      if (flagResult.status === "rejected") {
        console.error("Errore fetchFlagFromApi:", flagResult.reason);
        setError({
          message:
            flagResult.reason.message ||
            "Errore nella chiamata fetchFlagFromApi",
        });
      }

      const successfullResults = {
        data: dataResult.status === "fulfilled" ? dataResult.value : [],
        flag: flagResult.status === "fulfilled" ? flagResult.value : [],
      };

      if (
        successfullResults.data.length === 0 &&
        successfullResults.flag.length === 0
      ) {
        console.log(successfullResults);
        throw new Error("Errore nel recupero dei dati da entrambe le chiamate");
      }

      addToSearchHistory(request, successfullResults);

      setData(successfullResults);
      setLoading(false);
      return successfullResults;
    } catch (err) {
      console.error("Errore catturato in useApiRequest:", err);
      setError({
        message: err.message || "Errore sconosciuto",
        stack: err.stack || null,
      });
      setLoading(false);
      throw err;
    }
  };

  return { data, error, loading, handleRequest };
};

export default useApiRequest;
