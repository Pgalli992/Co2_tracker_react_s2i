import DataResponseComponent from "./DataResponseComponent";
import DataSettingComponent from "./DataSettingComponent";

function MainContent({ className }) {
  return (
    <div
      className={`flex flex-col gap-20 rounded-lg p-4 px-2 py-12 shadow-sm${className}`}
    >
      <DataResponseComponent className="w-1/3" />
    </div>
  );
}

export default MainContent;
