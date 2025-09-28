import { createContext, useContext, useEffect, useState } from "react";

const SearchHistoryContext = createContext();

export function SearchHistoryProvider({ children }) {
  const [history, setHistory] = useState(() => {
    // carica dal localStorage alla prima render
    const stored = localStorage.getItem("searchHistory");
    return stored ? JSON.parse(stored) : [];
  });

  // salva su localStorage ogni volta che history cambia
  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(history));
  }, [history]);

  function addSearch(query, result) {
    setHistory((prev) => {
      // se la query esiste già, la sposto in cima
      const filtered = prev.filter((item) => item.query !== query);
      const newHistory = [{ query, result }, ...filtered];
      return newHistory.slice(0, 30); // massimo 30
    });
  }

  return (
    <SearchHistoryContext.Provider value={{ history, addSearch }}>
      {children}
    </SearchHistoryContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSearchHistory() {
  return useContext(SearchHistoryContext);
}
