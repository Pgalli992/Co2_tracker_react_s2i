import LiquidGlassContainer from "./atoms/LiquidGlassContainer";
import DataSettingComponent from "./DataSettingComponent";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="bg-light mx-auto flex h-screen w-[90%] items-center gap-4 overflow-hidden caret-transparent">
      <LiquidGlassContainer>
        <Sidebar className="bg-red-300" />
      </LiquidGlassContainer>
      <MainContent className="flex h-full flex-col overflow-y-auto py-4">
        <LiquidGlassContainer>
          <DataSettingComponent className="flex-1 bg-green-300" />
        </LiquidGlassContainer>
      </MainContent>
    </div>
  );
}

export default AppLayout;
