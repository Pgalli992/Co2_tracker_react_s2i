import { CircleX, CloudSnow } from "lucide-react";
import EmissionsChart24h from "./EmissionChart24h";

function Emission24h({ data }) {
  const responseData = data.data ? data.data : data;

  return (
    <>
      {responseData?.emissions?.length === 0 ? (
        <div className="mt-4 flex flex-col items-center justify-center gap-2">
          <CircleX color="red" />
          <span className="text-red-500">No emissions data available</span>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-6">
          <div className="flex w-full justify-center gap-4">
            <div className="flex flex-col items-center justify-center gap-1 rounded-xl px-10 py-5 shadow-sm transition duration-300 hover:scale-110 hover:shadow-md hover:outline hover:outline-offset-1 hover:outline-blue-300">
              <span className="text-sm text-gray-500">Average</span>
              <CloudSnow />
              <p className="text-2xl font-bold">
                {(
                  responseData.emissions
                    .map((e) => e.value)
                    .reduce((a, b) => a + b, 0) / responseData.emissions.length
                ).toLocaleString("it-IT")}
              </p>
              <span className="text-sm text-gray-500">
                {responseData.emissions[0]?.unit}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 rounded-xl px-10 py-5 shadow-sm transition duration-300 hover:scale-110 hover:shadow-md hover:outline hover:outline-offset-1 hover:outline-blue-300">
              <span className="text-sm text-gray-500">Max</span>
              <CloudSnow color="red" />
              <p className="text-2xl font-bold">
                {Math.max(
                  ...responseData.emissions.map((e) => e.value)
                ).toLocaleString("it-IT")}
              </p>
              <span className="text-sm text-gray-500">
                {responseData.emissions[0]?.unit}
              </span>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 rounded-xl px-10 py-5 shadow-sm transition duration-300 hover:scale-110 hover:shadow-md hover:outline hover:outline-offset-1 hover:outline-blue-300">
              <span className="text-sm text-gray-500">Min</span>
              <CloudSnow color="green" />
              <p className="text-2xl font-bold">
                {Math.min(
                  ...responseData.emissions.map((e) => e.value)
                ).toLocaleString("it-IT")}
              </p>
              <span className="text-sm text-gray-500">
                {responseData.emissions[0]?.unit}
              </span>
            </div>
          </div>
          <EmissionsChart24h emissions={responseData.emissions} />
        </div>
      )}
    </>
  );
}

export default Emission24h;
