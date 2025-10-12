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

function ResponseContent({ data }) {
  const { dataSource, request } = useAppContext();

  console.log("DATA ************", data);

  const responseData = data.data ? data.data : data;

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 py-4">
      <div className="flex-1">
        <p className="text-center font-bold">{responseData.country.name}</p>
        {data.flag[0]?.flags.svg ? (
          <img
            src={data.flag[0]?.flags.svg}
            alt={`Flag of ${responseData.country.name}`}
            className="h-20 w-25"
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-2">
            <FlagOff />
            <span className="text-sm text-gray-500">No flag available</span>
          </div>
        )}
      </div>
      {request.period !== "year" ? (
        <div className="flex flex-1 justify-center gap-2">
          <div className="flex flex-col items-center justify-center gap-1">
            <CloudSnow />
            <p className="text-2xl font-bold">
              {request.period === "24h"
                ? responseData.emissions
                    .map((e) => e.value)
                    .reduce((a, b) => a + b, 0)
                    .toLocaleString("it-IT")
                : responseData.emissions.value.toLocaleString("it-IT")}
            </p>
            <span className="text-sm text-gray-500">
              {responseData.emissions?.unit}
            </span>
          </div>
          <Separator className="mx-4" />
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-1 items-center justify-center gap-2">
              <User />
              <span className="text-sm">
                {data.flag[0]?.population.toLocaleString("it-IT")}
              </span>
            </div>
            <div className="flex flex-1 items-center justify-center gap-2">
              <LandPlot />
              <span className="text-sm">
                {data.flag[0]?.area.toLocaleString("it-IT")} mq
              </span>
            </div>
          </div>
        </div>
      ) : (
        <AnnualEmissions data={data} />
      )}
      {dataSource === "cache" ? (
        <HardDrive className="absolute top-0 right-4/11" color="#0fda1c" />
      ) : dataSource === "partial-cache" ? (
        <Network className="absolute top-0 right-4/11" color="#ffe066" />
      ) : dataSource === "api" ? (
        <Earth className="absolute top-0 right-4/11" color="#f1730b" />
      ) : null}
    </div>
  );
}

export default ResponseContent;
