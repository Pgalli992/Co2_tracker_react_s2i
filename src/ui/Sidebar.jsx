import LiquidGlassContainer from "./atoms/LiquidGlassContainer";
import DataSettingComponent from "./DataSettingComponent";
import HistoryComponent from "./HistoryComponent";

export default function Sidebar({ className }) {
  return (
    <aside
      className={`relative h-[90%] flex-1 overflow-hidden rounded-[30px] p-4 ${className}`}
    >
      <LiquidGlassContainer>
        <DataSettingComponent className="flex-1 bg-green-300" />
      </LiquidGlassContainer>
      <LiquidGlassContainer>
        <HistoryComponent className="flex-1" />
      </LiquidGlassContainer>
    </aside>
  );
}
