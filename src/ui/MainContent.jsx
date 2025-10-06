import DataResponseComponent from "./DataResponseComponent";
import DataSettingComponent from "./DataSettingComponent";

function MainContent({ className }) {
  return (
    <div className={`flex flex-col gap-20 rounded-[30px] p-4 ${className}`}>
      <DataSettingComponent className="flex-1 shadow-md" />
      <DataResponseComponent className="flex-2 shadow-md" />
    </div>
  );
}

export default MainContent;
