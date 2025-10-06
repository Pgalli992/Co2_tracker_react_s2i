import InputRadioGroup from "./InputRadioGroup";
import InputYear from "./InputYear";

function PeriodSelector({
  selectedPeriod,
  setSelectedPeriod,
  selectedYear,
  setSelectedYear,
}) {
  return (
    <div>
      <div className="ml-2 w-min translate-y-3 transform bg-white px-1">
        Period:
      </div>
      <InputRadioGroup
        options={[
          { value: "current", label: "Now" },
          { value: "24h", label: "Last 24 Hours" },
          { value: "year", label: "Selected Year" },
        ]}
        selectedValue={selectedPeriod}
        onChange={setSelectedPeriod}
        className="px-2.5 pt-4 pb-1"
      />
      {selectedPeriod === "year" && (
        <InputYear
          year={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        />
      )}
    </div>
  );
}

export default PeriodSelector;
