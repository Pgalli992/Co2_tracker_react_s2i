import DataSettingComponent from "./DataSettingComponent";
import HistoryComponent from "./HistoryComponent";
import Legend from "./Legend";

export default function Sidebar({ className }) {
  return (
    <aside
      className={`relative flex min-h-max flex-col gap-5 overflow-hidden rounded-xl shadow-md lg:h-[90%] lg:min-h-0 lg:overflow-y-auto ${className}`}
    >
      <DataSettingComponent className="flex-1" />
      <HistoryComponent className="flex-1" />
    </aside>
  );
}
