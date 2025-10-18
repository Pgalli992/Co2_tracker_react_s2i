import { CloudSnow, OctagonX } from "lucide-react";

function AnnualEmissions({ data }) {
  const responseData = data.data ? data.data : data;
  const { country, year, months } = responseData;
  const monthsName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const calculateAverageEmissions = () => {
    const validMonths = Object?.values(months)?.filter(
      (month) => month !== false
    );

    if (validMonths.length === 0) {
      return { average: 0, unit: "g CO2eq/kWh" };
    }

    const total = validMonths.reduce((sum, month) => sum + month.value, 0);
    const average = total / validMonths.length;

    return {
      average: Math.round(average * 100) / 100,
    };
  };

  const { average } = calculateAverageEmissions();

  return (
    <div className="flex w-full flex-col items-center gap-4 py-4">
      <h2 className="text-xl font-bold">
        Annual aggregate emissions for {country.name}
      </h2>
      <p className="text-sm text-gray-500">
        Year: {Object?.keys(year)} -{" "}
        {year[Object.keys(year)] ? "Complete" : "Incomplete"}
      </p>
      <div className="minh-content mx-8 flex w-full gap-4 overflow-x-auto px-10 py-4">
        {Object.entries(months)?.map(([month, details]) => (
          <div
            key={month}
            className="flex w-50 flex-col items-center rounded-xl p-4 shadow-sm duration-300 hover:scale-110 hover:shadow-md hover:outline hover:outline-offset-1 hover:outline-blue-300"
          >
            <p className="mb-4 font-bold">{monthsName[month - 1]}</p>
            {details ? (
              <div className="flex flex-col items-center justify-center gap-1">
                <CloudSnow
                  color={
                    details.value < average
                      ? "green"
                      : details.value == average
                        ? "orange"
                        : "red"
                  }
                />
                <p className="text-2xl font-bold">{details.value}</p>
                <span className="align-end text-center text-xs text-nowrap text-gray-500">
                  {details.unit}
                </span>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-1">
                <OctagonX color="red" />
                <p className="text-center text-sm text-gray-500">
                  No data available
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnnualEmissions;
