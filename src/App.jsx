/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { fetchCountries } from "./services/api";
import CountrySelector from "./components/CountrySelector";
import AppLayout from "./components/AppLayout";

function App() {
  const [count, setCount] = useState(0);

  const [error, setError] = useState(null);

  return (
    <div className="">
      <AppLayout />
    </div>
  );
}

export default App;
