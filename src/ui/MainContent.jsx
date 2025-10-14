import DataResponseComponent from "./DataResponseComponent";
import Legend from "./Legend";

function MainContent({ className }) {
  return (
    <div
      className={`flex flex-col gap-20 rounded-lg p-4 px-2 py-12 shadow-sm${className}`}
    >
      <DataResponseComponent className="flex-2" />
      <Legend className="flex-1" />
    </div>
  );
}

export default MainContent;
