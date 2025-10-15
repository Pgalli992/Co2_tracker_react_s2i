import DataSettingComponent from "./DataSettingComponent";
import HistoryComponent from "./HistoryComponent";
import Legend from "./Legend";

export default function Sidebar({ className }) {
  return (
    <aside
      className={`relative flex flex-col gap-5 overflow-hidden rounded-lg shadow-md ${className}`}
    >
      <DataSettingComponent className="flex-1" />
      <HistoryComponent className="flex-1" />
    </aside>
  );
}
