import { useState } from "react";
import fetchDataFromApi from "../services/api";
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

      const response = await fetchDataFromApi(request);

      addToSearchHistory(request, response);

      setData(response);
      setLoading(false);
      return response;
    } catch (err) {
      setError(err);
      setLoading(false);
      throw err;
    }
  };

  return { data, error, loading, handleRequest };
};

export default useApiRequest;
