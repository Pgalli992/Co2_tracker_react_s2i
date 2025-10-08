import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import { History } from "lucide-react";

function HistoryComponent({ className }) {
  const { searchHistory } = useAppContext();

  useEffect(() => {
    console.log("Search History:", searchHistory);
  }, [searchHistory]);

  return (
    <div className={`mt-10 p-4 ${className}`}>
      <div className="flex items-center justify-center gap-2">
        <History />
        <h2 className="text-center font-bold">Ultime ricerche</h2>
      </div>
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
