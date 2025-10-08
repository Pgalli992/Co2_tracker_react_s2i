import InputRadioGroup from "./InputRadioGroup";
import InputYear from "./InputYear";

function PeriodSelector({
  selectedPeriod,
  setSelectedPeriod,
  selectedYear,
  setSelectedYear,
}) {
  return (
    <div className="rounded-lg border-[.5px]">
      <div className="ml-2 w-min -translate-y-3 transform bg-white px-1">
        Period:
      </div>
      <div className="px-2.5 pb-2">
        <InputRadioGroup
          options={[
            { value: "current", label: "Now" },
            { value: "24h", label: "Last 24 Hours" },
            { value: "year", label: "Selected Year" },
          ]}
          selectedValue={selectedPeriod}
          onChange={setSelectedPeriod}
        />
        {selectedPeriod === "year" && (
          <InputYear
            label="Year"
            value={selectedYear}
            disabled={selectedPeriod !== "year"}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="mt-2 ml-4"
          />
        )}
      </div>
    </div>
  );
}

export default PeriodSelector;
