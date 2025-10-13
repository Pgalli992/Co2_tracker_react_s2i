import DataResponseComponent from "./DataResponseComponent";
import EmissionsChart from "./EmissionChart";

function MainContent({ className }) {
  return (
    <div
      className={`flex flex-col gap-20 rounded-lg p-4 px-2 py-12 shadow-sm${className}`}
    >
      <DataResponseComponent className="w-1/3" />
      <EmissionsChart />
    </div>
  );
}

export default MainContent;
