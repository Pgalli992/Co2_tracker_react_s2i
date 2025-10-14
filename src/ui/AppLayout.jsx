import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="bg-light mx-auto my-8 flex h-screen w-[90%] gap-4 overflow-hidden px-4 caret-transparent">
      <Sidebar className="flex-2 rounded-lg shadow-md" />
      <MainContent className="flex flex-3 flex-col overflow-y-auto" />
    </div>
  );
}

export default AppLayout;
