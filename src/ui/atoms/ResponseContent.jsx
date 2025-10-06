import { CloudSnow, Earth, HardDrive } from "lucide-react";

function ResponseContent({ data }) {
  // Se il dato arriva dalla 'searchHistory' avrà request e response.
  const responseData = data.response ? data.response : data;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="">{responseData.country.name}</div>
      <div className="flex flex-col items-center justify-center">
        <CloudSnow />
        <p className="text-2xl font-bold">{responseData.emissions[0].value}</p>
        <span className="text-sm text-gray-500">
          {responseData.emissions[0].unit}
        </span>
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
