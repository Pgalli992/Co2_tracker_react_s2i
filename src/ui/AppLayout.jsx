import LiquidGlassContainer from "./atoms/LiquidGlassContainer";
import DataSettingComponent from "./DataSettingComponent";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="bg-light mx-auto flex h-screen w-[90%] items-center gap-4 overflow-hidden caret-transparent">
      <Sidebar className="bg-red-300" />
      <MainContent className="flex h-full flex-col overflow-y-auto py-4" />
    </div>
  );
}

export default AppLayout;
