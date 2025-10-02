import { useState } from "react";
import InputRadioGroup from "./InputRadioGroup";

function PeriodSelector({ selectedPeriod, setSelectedPeriod }) {
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
    </div>
  );
}

export default PeriodSelector;
