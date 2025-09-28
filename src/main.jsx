import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SearchHistoryProvider } from "./contexts/SearchHistoryContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchHistoryProvider>
      <App />
    </SearchHistoryProvider>
  </React.StrictMode>
);
