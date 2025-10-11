import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());
  const [data, setData] = useState(null);
  const [request, setRequest] = useState(null);
  const [dataSource, setDataSource] = useState(null);

  const addToSearchHistory = (request, response) => {
    setSearchHistory((prev) => [...prev, { request, response }]);
  };

  const getFromSearchHistory = (request) => {
    console.log("searchHistory attuale:", searchHistory);
    console.log("Richiesta attuale:", request);

    let matchedEntry = null;
    let matchType = null; // "exact" o "partial"

    for (const e of searchHistory) {
      const sameCountry = e.request.country === request.country;
      const samePeriod = e.request.period === request.period;
      const sameYear = e.request.year === request.year;

      const totallyEqual =
        sameCountry &&
        samePeriod &&
        sameYear &&
        JSON.stringify(e.request) === JSON.stringify(request);

      if (totallyEqual) {
        matchedEntry = e;
        matchType = "exact";
        break; // trovato il match perfetto, possiamo uscire
      }

      const partialMatch = sameCountry && (!samePeriod || !sameYear);
      if (!matchedEntry && partialMatch) {
        matchedEntry = e;
        matchType = "partial";
        // NON facciamo break, così trova prima eventuali match esatti in seguito (ma opzionale)
      }
    }

    console.log("Entry trovata:", matchedEntry);
    console.log("Tipo di match:", matchType);

    if (!matchedEntry) return null;

    return {
      entry: matchedEntry,
      isTotallyEqual: matchType === "exact",
      isOnlyCountryEqual: matchType === "partial",
    };
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
        dataSource,
        setDataSource,
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
