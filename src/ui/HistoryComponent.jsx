import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

function HistoryComponent({ className }) {
  const { searchHistory } = useAppContext();

  useEffect(() => {
    console.log("Search History:", searchHistory);
  }, [searchHistory]);

  return (
    <div className={`p-4 ${className}`}>
      <h2 className="mb-2 font-bold">Ultime ricerche</h2>
      <ul className="space-y-1">
        {searchHistory.map((item) => (
          <li
            key={item.request.country + item.request.period}
            className="text-sm"
          >
            {item.request.country} - {item.request.period}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryComponent;
