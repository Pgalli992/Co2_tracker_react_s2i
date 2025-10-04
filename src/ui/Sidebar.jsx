import { useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";

export default function Sidebar({ className }) {
  const { searchHistory } = useAppContext();

  useEffect(() => {
    console.log("Search History:", searchHistory);
  }, [searchHistory]);

  return (
    <aside
      className={`relative h-[90%] flex-1 overflow-hidden rounded-[30px] p-4 ${className}`}
    >
      <h2 className="mb-2 font-bold">Ultime ricerche</h2>
      <ul className="space-y-1">
        {searchHistory.map((item) => (
          <li
            key={item.request.country + item.request.period}
            className="text-sm"
          >
            {item.query}
          </li>
        ))}
      </ul>
    </aside>
  );
}
