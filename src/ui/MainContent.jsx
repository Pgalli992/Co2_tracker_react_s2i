import DataResponseComponent from "./DataResponseComponent";
import Legend from "./Legend";

function MainContent({ className, infoOpen, setInfoOpen }) {
  return (
    <div
      className={`flex min-h-max flex-col justify-between gap-10 rounded-lg sm:pb-10 lg:min-h-0 ${className}`}
    >
      <DataResponseComponent className="min-h-max flex-3" />
      <Legend
        className="flex-1"
        setInfoOpen={setInfoOpen}
        infoOpen={infoOpen}
      />
    </div>
  );
}

export default MainContent;
