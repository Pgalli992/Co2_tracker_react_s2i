import DataResponseComponent from "./DataResponseComponent";
import Legend from "./Legend";

function MainContent({ className }) {
  return (
    <div
      className={`flex flex-col justify-between gap-10 rounded-lg ${className}`}
    >
      <DataResponseComponent className="min-h-max flex-3" />
      <Legend className="flex-1" />
    </div>
  );
}

export default MainContent;
