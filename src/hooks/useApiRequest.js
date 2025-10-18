import { useState } from "react";
import fetchDataFromApi, { fetchFlagFromApi } from "../services/api";
import { useAppContext } from "../contexts/AppContext";

const useApiRequest = () => {
  const {
    addToSearchHistory,
    getFromSearchHistory,
    data,
    setData,
    setDataSource,
    showError,
  } = useAppContext();
  const [error, setError] = useState(null);
  const { loading, setLoading } = useAppContext();

  const handleRequest = async (request) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const cachedData = getFromSearchHistory(request);

      if (cachedData) {
        const { entry, isTotallyEqual, isOnlyCountryEqual } = cachedData;

        if (isTotallyEqual) {
          addToSearchHistory(request, entry.response);
          setData(entry.response);
          setLoading(false);
          setDataSource("cache");
          return entry.data;
        }

        if (isOnlyCountryEqual && entry.response.flag.length > 0) {
          // Così se nella prima chimara non ho recuperato la bandiera, non uso la cache ma rieseguo la chiamata
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
        const errorMsg =
          dataResult.reason.message || "Error in fetchDataFromApi call";
        setError({ message: errorMsg });
        showError({ message: errorMsg });
      }

      // Controllo se la risposta, anche se fulfilled, contiene errori.
      if (dataResult.status === "fulfilled" && dataResult.value.error) {
        setError({ message: dataResult.value.message });
        showError({ message: dataResult.value.message });
        setLoading(false);
        return;
      }

      if (flagResult.status === "rejected") {
        const errorMsg =
          flagResult.reason.message || "Error in fetchFlagFromApi call";
        setError({ message: errorMsg });
        showError({ message: errorMsg });
      }

      const successfullResults = {
        data: dataResult.status === "fulfilled" ? dataResult.value : [],
        flag: flagResult.status === "fulfilled" ? flagResult.value : [],
      };

      if (
        successfullResults.data.length === 0 &&
        successfullResults.flag.length === 0
      ) {
        throw new Error("Error retrieving data from both API calls");
      }

      console.log("Dati recuperati dall'API:", successfullResults);

      addToSearchHistory(request, successfullResults);
      setData(successfullResults);
      setDataSource("api");
      setLoading(false);
      return successfullResults;
    } catch (err) {
      const errorObj = {
        message: err.message || "Error retrieving data",
        stack: err.stack || null,
      };
      setError(errorObj);
      showError(errorObj);
      setLoading(false);
      throw err;
    }
  };

  return { data, error, loading, handleRequest };
};

export default useApiRequest;
