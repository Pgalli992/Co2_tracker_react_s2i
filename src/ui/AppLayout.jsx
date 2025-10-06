import LiquidGlassContainer from "./atoms/LiquidGlassContainer";
import DataSettingComponent from "./DataSettingComponent";
import DataResponseComponent from "./DataResponseComponent";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="bg-light mx-auto flex h-screen w-[90%] items-center gap-4 overflow-hidden caret-transparent">
      <LiquidGlassContainer>
        <Sidebar className="" />
      </LiquidGlassContainer>
      <MainContent className="flex h-full flex-col gap-4 overflow-y-auto py-4">
        <LiquidGlassContainer className="flex-1">
          <DataSettingComponent className="w-full" />
        </LiquidGlassContainer>
        <LiquidGlassContainer className="flex-1">
          <DataResponseComponent className="w-full" />
        </LiquidGlassContainer>
      </MainContent>
    </div>
  );
}

export default AppLayout;
