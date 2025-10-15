import {
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

function ResponseContent({ data }) {
  const { dataSource, request } = useAppContext();

  const responseData = data.data ? data.data : data;

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-xl pb-10 shadow-md">
      <div className="flex flex-1 flex-col items-center justify-center gap-2">
        <p className="text-center font-bold">{responseData.country.name}</p>
        {data.flag[0]?.flags.svg ? (
          <img
            src={data.flag[0]?.flags.svg}
            alt={`Flag of ${responseData.country.name}`}
            className="h-25 w-40 border-[.5px] object-cover"
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
            <div className="flex flex-col items-center justify-center gap-1">
              <CloudSnow />
              <p className="text-2xl font-bold">
                {responseData.emissions.value.toLocaleString("it-IT")}
              </p>
              <span className="text-sm text-gray-500">
                {responseData.emissions?.unit}
              </span>
            </div>
            <Separator className="mx-4" />
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
      {request.period === "24h" ? (
        <Emissions24h data={data} />
      ) : request.period === "year" ? (
        <AnnualEmissions data={data} />
      ) : null}
      {dataSource === "cache" ? (
        <HardDrive className="absolute top-0 right-5 size-10" color="#0fda1c" />
      ) : dataSource === "partial-cache" ? (
        <Network className="absolute top-0 right-5 size-10" color="#f6ce2f" />
      ) : dataSource === "api" ? (
        <Earth className="absolute top-0 right-5 size-10" color="#f1730b" />
      ) : null}
    </div>
  );
}

export default ResponseContent;
