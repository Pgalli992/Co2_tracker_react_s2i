import { useSearchHistory } from "../contexts/SearchHistoryContext.jsx";

export default function Sidebar() {
  const { history } = useSearchHistory();

  return (
    <aside className="p-4 bg-gray-100">
      <h2 className="font-bold mb-2">Ultime ricerche</h2>
      <ul className="space-y-1">
        {history.map((item) => (
          <li key={item.query} className="text-sm">
            {item.query}
          </li>
        ))}
      </ul>
    </aside>
  );
}
