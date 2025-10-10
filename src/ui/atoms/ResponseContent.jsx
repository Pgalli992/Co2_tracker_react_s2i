import {
  CloudSnow,
  Earth,
  FlagOff,
  HardDrive,
  LandPlot,
  User,
} from "lucide-react";
import Separator from "./Separator";

function ResponseContent({ data }) {
  // Se il dato arriva dalla 'searchHistory' avrà request e response.
  const responseData = data.response ? data.response : data;

  return (
    <div className="flex w-80 flex-col items-center justify-center gap-4 py-4">
      <div className="flex-1">
        <p className="text-center font-bold">
          {responseData.data.country.name}
        </p>
        {responseData.flag[0]?.flags.svg ? (
          <img
            src={responseData.flag[0]?.flags.svg}
            alt={`Flag of ${responseData.data.country.name}`}
            className="h-20 w-25"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2">
            <FlagOff />
            <span className="text-sm text-gray-500">No flag available</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 justify-center gap-2">
        <div className="flex flex-col items-center justify-center gap-1">
          <CloudSnow />
          <p className="text-2xl font-bold">
            {responseData.data.emissions[0]?.value}
          </p>
          <span className="text-sm text-gray-500">
            {responseData.data.emissions[0]?.unit}
          </span>
        </div>
        <Separator className="mx-4" />
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-1 items-center justify-center gap-2">
            <User />
            <span className="text-sm">
              {responseData.flag[0]?.population.toLocaleString("it-IT")}
            </span>
          </div>
          <div className="flex flex-1 items-center justify-center gap-2">
            <LandPlot />
            <span className="text-sm">
              {responseData.flag[0]?.area.toLocaleString("it-IT")} mq
            </span>
          </div>
        </div>
      </div>
      {data.response ? (
        <HardDrive className="absolute top-0 right-4/11" color="#0fda1c" />
      ) : (
        <Earth className="absolute top-0 right-4/11" color="#e9c916" />
      )}
    </div>
  );
}

export default ResponseContent;
