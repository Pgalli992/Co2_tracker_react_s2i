import {
  CalendarOff,
  CloudSnow,
  Earth,
  FlagOff,
  HardDrive,
  LandPlot,
  Network,
  User,
} from "lucide-react";
import Separator from "./atoms/Separator";
import { useAppContext } from "../contexts/AppContext";
import AnnualEmissions from "./AnnualEmissions";
import Emissions24h from "./Emission24h";
import CurrentEmissions from "./CurrentEmissions";

function ResponseContent({ data }) {
  const { dataSource, request } = useAppContext();

  const responseData = data.data ? data.data : data;

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-white pt-6 pb-15 shadow-md">
      <div className="flex flex-1 flex-col items-center justify-center gap-2 p-4">
        <p className="text-center font-bold">{responseData.country?.name}</p>
        {data.flag[0]?.flags.svg ? (
          <img
            src={data.flag[0]?.flags.svg}
            alt={`Flag of ${responseData.country?.name}`}
            className="h-15 w-25 border-[.5px] object-cover lg:h-25 lg:w-40"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2">
            <FlagOff />
            <span className="text-sm text-gray-500">No flag available</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 justify-center gap-2">
        {request.period === "current" ? (
          <>
            <CurrentEmissions data={data} /> <Separator className="mx-4" />
          </>
        ) : null}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-1 items-center justify-center gap-2">
            <User />
            <span className="text-sm">
              {data.flag[0]?.population.toLocaleString("it-IT") || "N/A"}
            </span>
          </div>
          <div className="flex flex-1 items-center justify-center gap-2">
            <LandPlot />
            <span className="text-sm">
              {data.flag[0]?.area.toLocaleString("it-IT") || "N/A"} mq
            </span>
          </div>
        </div>
      </div>
      {request.period === "24h" && responseData.emissions ? (
        <Emissions24h data={data} />
      ) : request.period === "year" ? (
        <AnnualEmissions data={data} />
      ) : null}
      {responseData.emissions?.outdated && (
        <div className="absolute bottom-4">
          <CalendarOff className="" color="red" />
        </div>
      )}
      {dataSource === "cache" ? (
        <HardDrive
          className="absolute top-4 right-7"
          size={40}
          color="#0fda1c"
        />
      ) : dataSource === "partial-cache" ? (
        <Network className="absolute top-4 right-7" size={40} color="#f6ce2f" />
      ) : dataSource === "api" ? (
        <Earth className="absolute top-4 right-7" size={40} color="#f1730b" />
      ) : null}
    </div>
  );
}

export default ResponseContent;
