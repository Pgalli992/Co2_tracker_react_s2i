import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [data, setData] = useState(null);
  const [request, setRequest] = useState(null);

  const addToSearchHistory = (request, response) => {
    setSearchHistory((prev) => [...prev, { request, response }]);
  };

  const getFromSearchHistory = (request) => {
    console.log("searchHistory:", searchHistory, "request:", request);
    return (
      searchHistory.find((entry) => {
        const isEqual =
          JSON.stringify(entry.request) === JSON.stringify(request);
        console.log("Comparing:", entry.request, request);
        return isEqual;
      }) || null
    );
  };

  return (
    <AppContext.Provider
      value={{
        countries,
        setCountries,
        year,
        data,
        setData,
        setYear,
        request,
        setRequest,
        searchHistory,
        addToSearchHistory,
        getFromSearchHistory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useAppContext deve essere utilizzato all'interno di un AppProvider"
    );
  }
  return context;
};
