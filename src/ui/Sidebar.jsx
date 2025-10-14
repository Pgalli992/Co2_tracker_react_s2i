import DataSettingComponent from "./DataSettingComponent";
import HistoryComponent from "./HistoryComponent";

export default function Sidebar({ className }) {
  return (
    <aside
      className={`relative flex h-[90%] flex-col overflow-hidden rounded-lg p-4 ${className}`}
    >
      <DataSettingComponent className="flex-1" />
      <HistoryComponent className="flex-1" />
    </aside>
  );
}
