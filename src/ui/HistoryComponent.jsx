import { useAppContext } from "../contexts/AppContext";
import { History } from "lucide-react";

function HistoryComponent({ className }) {
  const { searchHistory, setData, setRequest, setDataSource } = useAppContext();

  const handleHistoryClick = (historyEntry) => {
    setRequest(historyEntry.request);
    setData(historyEntry.response);
    setDataSource("cache");
  };

  return (
    <div
      className={`flex h-full flex-col justify-center overflow-hidden lg:min-h-[200px] ${className}`}
    >
      <div className="group flex items-center justify-center gap-2">
        <div className="group-hover:scale-115 group-hover:animate-spin">
          <History />
        </div>
        <h2 className="text-center font-bold">Latest Research</h2>
      </div>
      <div className="p-4">
        {searchHistory.length === 0 && (
          <p className="translate-x-3 text-center text-sm text-gray-500">
            No search history available.
          </p>
        )}
      </div>
      <div className="w-full flex-1 overflow-x-auto pb-2 sm:overflow-y-auto">
        <ul className="flex flex-none gap-3 sm:flex-wrap">
          {searchHistory.map((item) => (
            <li
              key={
                item.request.country + item.request.period + item.request?.year
              }
              onClick={() => handleHistoryClick(item)}
              className="w-30 cursor-pointer rounded-lg px-2 py-2 text-center text-xs shadow-sm transition-all duration-200 hover:scale-105 hover:bg-amber-100/80 active:scale-95"
            >
              <div className="flex flex-col items-center justify-center gap-3 py-4">
                <img
                  src={item.response.flag[0]?.flags.svg}
                  alt={`Flag of ${item.response.flag[0]?.name.common}`}
                  className="h-5 w-7"
                />
                <span className="inline-block w-full overflow-hidden font-bold text-nowrap text-ellipsis">
                  {item.request.country.toUpperCase()}
                </span>
                - <br />
                {item.request.period}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HistoryComponent;
