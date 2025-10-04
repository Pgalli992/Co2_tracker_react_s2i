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
          year={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        />
      )}
    </div>
  );
}

export default PeriodSelector;
