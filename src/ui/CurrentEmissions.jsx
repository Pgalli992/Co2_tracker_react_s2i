import { CloudSnow } from "lucide-react";

function CurrentEmissions({ data }) {
  const responseData = data.data ? data.data : data;

  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <CloudSnow />
      <p className="text-2xl font-bold">
        {responseData.emissions.value.toLocaleString("it-IT")}
      </p>
      <span className="text-sm text-gray-500">
        {responseData.emissions?.unit}
      </span>
    </div>
  );
}

export default CurrentEmissions;
