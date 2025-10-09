import { CloudSnow, Earth, HardDrive, User } from "lucide-react";
import Separator from "./Separator";

function ResponseContent({ data }) {
  // Se il dato arriva dalla 'searchHistory' avrà request e response.
  const responseData = data.response ? data.response : data;

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex-1">
        <p className="text-center font-bold">
          {responseData.data.country.name}
        </p>
        <img
          src={responseData.flag[0].flags.svg}
          alt={`Flag of ${responseData.data.country.name}`}
          className="h-20 w-25"
        />
      </div>
      <div className="flex flex-1 items-stretch justify-center gap-2">
        <div className="flex flex-col items-center justify-center gap-1">
          <CloudSnow />
          <p className="text-2xl font-bold">
            {responseData.data.emissions[0].value}
          </p>
          <span className="text-sm text-gray-500">
            {responseData.data.emissions[0].unit}
          </span>
        </div>
        <Separator className="" />
        <div className="flex items-center justify-center gap-2">
          <User />
          <span>{responseData.flag[0].population}</span>
        </div>
      </div>
      {data.response ? (
        <HardDrive className="absolute top-0 right-1/4" color="#0fda1c" />
      ) : (
        <Earth className="absolute top-0 right-1/4" color="#e9c916" />
      )}
    </div>
  );
}

export default ResponseContent;
