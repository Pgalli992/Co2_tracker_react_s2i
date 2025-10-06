import HistoryComponent from "./HistoryComponent";

export default function Sidebar({ className }) {
  return (
    <aside
      className={`relative h-[90%] overflow-hidden rounded-[30px] p-4 ${className}`}
    >
      <HistoryComponent className="flex-1" />
    </aside>
  );
}
