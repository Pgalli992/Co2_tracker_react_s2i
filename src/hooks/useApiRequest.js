import { useState } from "react";
import fetchDataFromApi, { fetchFlagFromApi } from "../services/api";
import { useAppContext } from "../contexts/AppContext";

const useApiRequest = () => {
  const { addToSearchHistory, getFromSearchHistory } = useAppContext();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data, setData, setDataSource } = useAppContext();

  const handleRequest = async (request) => {
    setLoading(true);
    setError(null);

    console.log("RICHIESTA INVIATA:", request);

    try {
      const cachedData = getFromSearchHistory(request);

      if (cachedData) {
        const { entry, isTotallyEqual, isOnlyCountryEqual } = cachedData;

        if (isTotallyEqual) {
          setData(entry.response);
          setLoading(false);
          setDataSource("cache");
          return entry.data;
        }

        if (isOnlyCountryEqual) {
          const flagFromHistory = entry.response.flag;

          const dataResult = await fetchDataFromApi(request);

          const successfullResults = {
            data: dataResult,
            flag: flagFromHistory,
          };

          addToSearchHistory(request, successfullResults);
          setData(successfullResults);
          setDataSource("partial-cache");
          setLoading(false);
          return successfullResults;
        }
      }

      const [dataResult, flagResult] = await Promise.allSettled([
        fetchDataFromApi(request),
        fetchFlagFromApi(request.country),
      ]);

      if (dataResult.status === "rejected") {
        setError({
          message:
            dataResult.reason.message ||
            "Errore nella chiamata fetchDataFromApi",
        });
      }

      if (flagResult.status === "rejected") {
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
        throw new Error("Errore nel recupero dei dati da entrambe le chiamate");
      }

      addToSearchHistory(request, successfullResults);
      setData(successfullResults);
      setDataSource("api");
      setLoading(false);
      return successfullResults;
    } catch (err) {
      console.error("Errore catturato in handleRequest:", err);
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
