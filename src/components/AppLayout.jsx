import DataSettingComponent from "./DataSettingComponent";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="bg-light mx-auto flex h-screen w-[90%] items-center gap-4 overflow-hidden caret-transparent">
      <Sidebar />
      <MainContent className="flex h-full flex-col overflow-y-auto py-4">
        <DataSettingComponent className="flex-1" />
      </MainContent>
    </div>
  );
}

export default AppLayout;
