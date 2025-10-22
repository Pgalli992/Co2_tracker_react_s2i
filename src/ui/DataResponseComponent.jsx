import useApiRequest from "../hooks/useApiRequest";
import MessageContainer from "./MessageContainter";

import ResponseContent from "./ResponseContent";

function DataResponseComponent({ className }) {
  const { data } = useApiRequest();

  return (
    <div
      className={`relative flex w-full items-start justify-center ${className}`}
    >
      <div className="relative flex w-full items-center justify-center">
        {data ? (
          <ResponseContent data={data} />
        ) : (
          <div className="my-20 flex flex-col items-center gap-4 text-center text-gray-700 lg:my-0 lg:translate-y-40">
            <h1 className="text-2xl font-bold lg:text-5xl">
              🌍 Welcome to CO2 - Tracker
            </h1>
            <p className="max-w-md text-sm lg:max-w-lg lg:text-xl">
              This web app helps you monitor CO2 emissions for different regions
              and time periods. 🌱 Start by selecting a country and a period to
              view detailed data. 📊
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DataResponseComponent;
