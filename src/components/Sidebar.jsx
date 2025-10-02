import { useAppContext } from "../contexts/AppContext";

export default function Sidebar() {
  const { searchHistory } = useAppContext();

  return (
    <aside className="before:shadow-liquidglass relative h-[90%] flex-1 overflow-hidden rounded-[30px] p-4 before:absolute before:inset-0 before:rounded-[30px] before:content-[''] after:absolute after:inset-0 after:isolate after:z-[-1] after:overflow-hidden after:rounded-[30px] after:[filter:url(#container-glass)] after:backdrop-blur-[0px] after:content-['']">
      <h2 className="mb-2 font-bold">Ultime ricerche</h2>
      <ul className="space-y-1">
        {searchHistory.map((item) => (
          <li key={item.query} className="text-sm">
            {item.query}
          </li>
        ))}
      </ul>
    </aside>
  );
}
