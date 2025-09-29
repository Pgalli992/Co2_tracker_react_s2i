import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SearchHistoryProvider } from "./contexts/SearchHistoryContext.jsx";
import { CountryProvider } from "./contexts/CountryContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchHistoryProvider>
      <CountryProvider>
        <App />
      </CountryProvider>
    </SearchHistoryProvider>
  </React.StrictMode>
);
