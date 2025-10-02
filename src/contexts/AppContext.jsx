import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  const addToSearchHistory = (request, response) => {
    setSearchHistory((prev) => [...prev, { request, response }]);
  };

  const getFromSearchHistory = (request) => {
    return (
      searchHistory.find(
        (entry) => JSON.stringify(entry.request) === JSON.stringify(request)
      ) || null
    );
  };

  return (
    <AppContext.Provider
      value={{
        countries,
        setCountries,
        searchHistory,
        addToSearchHistory,
        getFromSearchHistory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useAppContext deve essere utilizzato all'interno di un AppProvider"
    );
  }
  return context;
};
